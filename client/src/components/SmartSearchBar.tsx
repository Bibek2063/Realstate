/**
 * SmartSearchBar Component
 * Modern Luxury Minimalism: Premium search experience with location autocomplete
 * Features: Location input, price range, property type, CTA buttons
 */

import { useState } from 'react';
import { Search, MapPin, DollarSign, Home } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Link } from 'wouter';

interface SearchFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  propertyType: string;
}

interface SmartSearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
  variant?: 'hero' | 'compact';
}

export default function SmartSearchBar({
  onSearch,
  variant = 'hero',
}: SmartSearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    minPrice: 0,
    maxPrice: 5000000,
    propertyType: 'all',
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    onSearch?.(filters);
  };

  const handleInputChange = (field: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  if (variant === 'compact') {
    return (
      <div className="glass-card p-4 rounded-xl">
        <div className="flex gap-2 flex-wrap">
          <div className="flex-1 min-w-[200px] flex items-center gap-2 bg-input rounded-lg px-3">
            <MapPin size={18} className="text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Location..."
              value={filters.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
          <Select
            value={filters.propertyType}
            onValueChange={(val) => handleInputChange('propertyType', val)}
          >
            <SelectTrigger className="bg-transparent flex-1 text-foreground" />
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
          <button
            onClick={handleSearch}
            className="btn-primary px-4 py-2 text-sm"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-foreground mb-6">Find Your Dream Property</h2>
      
      {/* Main Search Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Location */}
        <div className="flex items-center gap-2 bg-input/50 rounded-lg px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
          <MapPin size={20} className="text-accent flex-shrink-0" />
          <input
            type="text"
            placeholder="Location, city, or zip"
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Property Type */}
        <div className="flex items-center gap-2 bg-input/50 rounded-lg px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
          <Home size={20} className="text-accent flex-shrink-0" />
          <Select
            value={filters.propertyType}
            onValueChange={(val) => handleInputChange('propertyType', val)}
          >
            <SelectTrigger className="flex-1 bg-transparent text-foreground" />
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Min Price */}
        <div className="flex items-center gap-2 bg-input/50 rounded-lg px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
          <DollarSign size={20} className="text-accent flex-shrink-0" />
          <input
            type="number"
            placeholder="Min price"
            value={filters.minPrice || ''}
            onChange={(e) => handleInputChange('minPrice', parseInt(e.target.value) || 0)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Max Price */}
        <div className="flex items-center gap-2 bg-input/50 rounded-lg px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
          <DollarSign size={20} className="text-accent flex-shrink-0" />
          <input
            type="number"
            placeholder="Max price"
            value={filters.maxPrice || ''}
            onChange={(e) => handleInputChange('maxPrice', parseInt(e.target.value) || 5000000)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Action Buttons - Properly Aligned */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <Link href="/listings">
          <a className="flex-1 sm:flex-none px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 drop-shadow-lg">
            <Search size={18} />
            Search Properties
          </a>
        </Link>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex-1 sm:flex-none px-6 py-3 bg-white/20 hover:bg-white/30 text-foreground font-semibold rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
        >
          Advanced Filters
        </button>
        <Link href="/map">
          <a className="flex-1 sm:flex-none px-6 py-3 bg-white/20 hover:bg-white/30 text-foreground font-semibold rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2">
            Map View
          </a>
        </Link>
      </div>

      {/* Advanced Filters Section */}
      {showAdvanced && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="text-lg font-semibold text-foreground mb-4">Advanced Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Bedrooms', placeholder: 'Any' },
              { label: 'Bathrooms', placeholder: 'Any' },
              { label: 'Square Feet', placeholder: 'Any' },
            ].map((filter, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">{filter.label}</label>
                <input
                  type="text"
                  placeholder={filter.placeholder}
                  className="bg-input/50 rounded-lg px-4 py-2 border border-white/10 outline-none text-foreground placeholder:text-muted-foreground focus:border-accent transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
