/**
 * Map Search Page
 * Modern Luxury Minimalism: Interactive map with property pins and list sync
 */

import { useEffect, useState } from 'react';
import { propertyApi, Property } from '@/lib/mockData';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import { MapPin, X } from 'lucide-react';

export default function MapPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await propertyApi.getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to load properties:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Map Section */}
        <div className="flex-1 relative bg-muted">
          {/* Map Placeholder with Grid */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Background with map-like appearance */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900" />

            {/* Grid lines for map effect */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Property Pins */}
            {properties.map((property, index) => {
              const x = 20 + (index % 4) * 20;
              const y = 20 + Math.floor(index / 4) * 25;

              return (
                <button
                  key={property.id}
                  onClick={() => setSelectedProperty(property)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  {/* Pin */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all transform group-hover:scale-125 ${
                      selectedProperty?.id === property.id
                        ? 'bg-accent shadow-lg ring-2 ring-accent/50'
                        : 'bg-accent/70 hover:bg-accent shadow-md'
                    }`}
                  >
                    <MapPin size={20} />
                  </div>

                  {/* Price Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-foreground text-background px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    ${(property.price / 1000000).toFixed(1)}M
                  </div>
                </button>
              );
            })}

            {/* Selected Property Preview Card */}
            {selectedProperty && (
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 glass-card rounded-xl p-4 shadow-xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-foreground line-clamp-2">
                      {selectedProperty.title}
                    </h3>
                    <p className="text-sm text-accent font-semibold">
                      ${(selectedProperty.price / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProperty(null)}
                    className="p-1 hover:bg-muted rounded"
                  >
                    <X size={18} className="text-muted-foreground" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {selectedProperty.location.address}
                </p>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {selectedProperty.bedrooms} Bed
                  </span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {selectedProperty.bathrooms} Bath
                  </span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {selectedProperty.area} sqft
                  </span>
                </div>
                <a
                  href={`/property/${selectedProperty.id}`}
                  className="w-full btn-primary text-sm text-center"
                >
                  View Details
                </a>
              </div>
            )}

            {/* Map Controls */}
            <div className="absolute top-4 left-4 flex gap-2">
              <button className="bg-white dark:bg-foreground/10 p-2 rounded-lg shadow hover:shadow-lg transition-all">
                +
              </button>
              <button className="bg-white dark:bg-foreground/10 p-2 rounded-lg shadow hover:shadow-lg transition-all">
                −
              </button>
            </div>

            {/* Toggle List Button */}
            <button
              onClick={() => setShowList(!showList)}
              className="absolute top-4 right-4 btn-secondary md:hidden"
            >
              {showList ? 'Hide List' : 'Show List'}
            </button>
          </div>
        </div>

        {/* Properties List Sidebar */}
        <div
          className={`fixed md:relative bottom-0 left-0 right-0 md:w-96 h-96 md:h-full bg-background border-l border-border overflow-y-auto transition-all ${
            showList ? 'translate-y-0' : 'translate-y-full md:translate-y-0'
          }`}
        >
          <div className="p-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm">
            <h2 className="font-bold text-foreground">Properties ({properties.length})</h2>
            <p className="text-xs text-muted-foreground">Click on a property to view details</p>
          </div>

          {loading ? (
            <div className="p-4 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="glass-card rounded-lg overflow-hidden animate-pulse">
                  <div className="h-32 bg-muted" />
                  <div className="p-3 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {properties.map(property => (
                <button
                  key={property.id}
                  onClick={() => setSelectedProperty(property)}
                  className={`w-full text-left glass-card rounded-lg overflow-hidden transition-all ${
                    selectedProperty?.id === property.id
                      ? 'ring-2 ring-accent'
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="h-24 bg-muted overflow-hidden">
                    <img
                      src={property.media.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-accent font-bold text-sm mb-1">
                      ${(property.price / 1000000).toFixed(1)}M
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {property.location.address}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
