/**
 * Property Listings Page
 * Premium Layout: Sidebar (1) : Content (3) ratio
 * GSAP animations for smooth reveal and interactions
 */

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties, propertyApi, Property } from '@/lib/mockData';
import { ChevronDown, Filter, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStaggerScrollReveal } from '@/hooks/useGsapAnimations';

gsap.registerPlugin(ScrollTrigger);

interface FilterState {
  priceMin: number;
  priceMax: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  verified: boolean;
  sortBy: string;
}

export default function Listings() {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceMin: 0,
    priceMax: 10000000,
    type: '',
    bedrooms: 0,
    bathrooms: 0,
    verified: false,
    sortBy: 'newest',
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const propertiesRef = useStaggerScrollReveal();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Sticky sidebar animation
  useEffect(() => {
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, []);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = async () => {
    setLoading(true);
    try {
      const filtered = await propertyApi.getProperties(filters);
      setProperties(filtered);
    } catch (error) {
      console.error('Failed to apply filters:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleApplyFilters();
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="section-normal bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border pt-[72px]">
        <div className="container">
          <h1 className="text-4xl font-bold text-foreground mb-2">Properties for Sale</h1>
          <p className="text-muted-foreground">
            Showing {properties.length} properties
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-normal">
        <div className="container">
          <div className="layout-sidebar-content">
            {/* Sidebar - Sticky Filters */}
            <div ref={sidebarRef} className="sidebar-sticky">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="font-bold text-foreground">Filters</h2>
                  <button
                    onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                    className="p-2 hover:bg-muted rounded"
                  >
                    {mobileFilterOpen ? <X size={20} /> : <Filter size={20} />}
                  </button>
                </div>

                <div className={`space-y-6 ${mobileFilterOpen ? 'block' : 'hidden md:block'}`}>
                  {/* Price Range */}
                  <div>
                    <label className="block font-semibold text-foreground mb-3">
                      Price Range
                    </label>
                    <div className="space-y-2">
                      <input
                        type="number"
                        placeholder="Min price"
                        value={filters.priceMin}
                        onChange={(e) => handleFilterChange('priceMin', parseInt(e.target.value))}
                        className="w-full bg-input rounded-lg px-3 py-2 text-sm outline-none"
                      />
                      <input
                        type="number"
                        placeholder="Max price"
                        value={filters.priceMax}
                        onChange={(e) => handleFilterChange('priceMax', parseInt(e.target.value))}
                        className="w-full bg-input rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block font-semibold text-foreground mb-3">
                      Property Type
                    </label>
                    <select
                      value={filters.type}
                      onChange={(e) => handleFilterChange('type', e.target.value)}
                      className="w-full bg-input rounded-lg px-3 py-2 text-sm outline-none"
                    >
                      <option value="">All Types</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label className="block font-semibold text-foreground mb-3">
                      Bedrooms
                    </label>
                    <select
                      value={filters.bedrooms}
                      onChange={(e) => handleFilterChange('bedrooms', parseInt(e.target.value))}
                      className="w-full bg-input rounded-lg px-3 py-2 text-sm outline-none"
                    >
                      <option value={0}>Any</option>
                      <option value={1}>1+</option>
                      <option value={2}>2+</option>
                      <option value={3}>3+</option>
                      <option value={4}>4+</option>
                      <option value={5}>5+</option>
                    </select>
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <label className="block font-semibold text-foreground mb-3">
                      Bathrooms
                    </label>
                    <select
                      value={filters.bathrooms}
                      onChange={(e) => handleFilterChange('bathrooms', parseInt(e.target.value))}
                      className="w-full bg-input rounded-lg px-3 py-2 text-sm outline-none"
                    >
                      <option value={0}>Any</option>
                      <option value={1}>1+</option>
                      <option value={2}>2+</option>
                      <option value={3}>3+</option>
                      <option value={4}>4+</option>
                    </select>
                  </div>

                  {/* Verified Only */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.verified}
                        onChange={(e) => handleFilterChange('verified', e.target.checked)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="font-semibold text-foreground">Verified Only</span>
                    </label>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="block font-semibold text-foreground mb-3">
                      Sort By
                    </label>
                    <select
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                      className="w-full bg-input rounded-lg px-3 py-2 text-sm outline-none"
                    >
                      <option value="newest">Newest First</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={() =>
                      setFilters({
                        priceMin: 0,
                        priceMax: 10000000,
                        type: '',
                        bedrooms: 0,
                        bathrooms: 0,
                        verified: false,
                        sortBy: 'newest',
                      })
                    }
                    className="w-full btn-secondary text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            <div>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="glass-card rounded-xl overflow-hidden animate-pulse">
                      <div className="h-48 bg-muted" />
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div ref={propertiesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}

              {!loading && properties.length === 0 && (
                <div className="glass-card p-12 rounded-xl text-center">
                  <p className="text-lg text-muted-foreground">
                    No properties found matching your filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
