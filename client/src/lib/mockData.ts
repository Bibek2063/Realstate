/**
 * Mock Property Data Service
 * Simulates a real estate API with structured property data
 * Follows the data structure defined in requirements
 */

export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    lat: number;
    lng: number;
  };
  area: number; // in sqft
  type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land';
  bedrooms: number;
  bathrooms: number;
  floors: number;
  builtYear: number;
  facing: 'north' | 'south' | 'east' | 'west' | 'northeast' | 'northwest' | 'southeast' | 'southwest';
  roadAccess: string;
  amenities: {
    parking: boolean;
    water: boolean;
    electricity: boolean;
    internet: boolean;
    garden: boolean;
    security: boolean;
    pool?: boolean;
    gym?: boolean;
    balcony?: boolean;
  };
  media: {
    images: string[];
    video?: string;
    virtualTour?: string;
  };
  analytics: {
    views: number;
    saves: number;
    popularity: number; // 0-100
  };
  verified: boolean;
  agent: {
    id: string;
    name: string;
    rating: number;
    phone: string;
    avatar: string;
    email: string;
  };
  description: string;
  priceHistory?: Array<{
    date: string;
    price: number;
  }>;
}

// Mock agents
const agents = [
  {
    id: 'agent-1',
    name: 'Sarah Mitchell',
    rating: 4.8,
    phone: '+1 (555) 123-4567',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    email: 'sarah@realestate.com',
  },
  {
    id: 'agent-2',
    name: 'James Chen',
    rating: 4.9,
    phone: '+1 (555) 234-5678',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    email: 'james@realestate.com',
  },
  {
    id: 'agent-3',
    name: 'Emily Rodriguez',
    rating: 4.7,
    phone: '+1 (555) 345-6789',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    email: 'emily@realestate.com',
  },
  {
    id: 'agent-4',
    name: 'Michael Thompson',
    rating: 4.6,
    phone: '+1 (555) 456-7890',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    email: 'michael@realestate.com',
  },
];

// Generate mock properties
export const mockProperties: Property[] = [
  {
    id: 'prop-1',
    title: 'Luxury Modern Estate with Pool',
    price: 2500000,
    location: {
      address: '1247 Oakmont Drive',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      lat: 34.0522,
      lng: -118.2437,
    },
    area: 8500,
    type: 'house',
    bedrooms: 5,
    bathrooms: 6,
    floors: 2,
    builtYear: 2019,
    facing: 'south',
    roadAccess: 'Private driveway with gate',
    amenities: {
      parking: true,
      water: true,
      electricity: true,
      internet: true,
      garden: true,
      security: true,
      pool: true,
      gym: true,
      balcony: true,
    },
    media: {
      images: [
        'https://private-us-east-1.manuscdn.com/sessionFile/6oP4f6RhllrSt2w3hbRRGt/sandbox/XO4ft8tBSOuwLutjJqLoUN-img-1_1771416972000_na1fn_aGVyby1sdXh1cnktaG9tZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNm9QNGY2UmhsbHJTdDJ3M2hiUlJHdC9zYW5kYm94L1hPNGZ0OHRCU091d0x1dGpKcUxvVU4taW1nLTFfMTc3MTQxNjk3MjAwMF9uYTFmbl9hR1Z5Ynkxc2RYaDFjbmt0YUc5dFpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=j4Pxpif30Tz0hcsPqoI-589amdjXKERrPBK13ovYRuRmyY0Z0dJR2qb~AF7VfwQAkYR~XXGRf2OnNVOyXnagfHCjkeFwusH44rKmEhcgiSHEIUbHCABLzeeU2yby0KrQublJr71P5FqQ97tMiGegZ-0FY5~kXU67JONDSAS1SShTCr4RHkZHFthjytTi4eQzlZnfrLNaA44MNMVnqKRK5JHJW9gOLqu1BqR-rBui~xSxF0wVd49tuLTn0ZPTI7~~ASk1Rvuaiqdjr5iDLj~6UVTBfXru1R096xMguDyhulNIv63IWVPKJaLPL~~4M2naeabQgzsLzz5qxgiUe87gtQ__',
      ],
      video: 'https://example.com/property-video.mp4',
    },
    analytics: {
      views: 2847,
      saves: 156,
      popularity: 92,
    },
    verified: true,
    agent: agents[0],
    description: 'Stunning modern luxury estate in prestigious Oakmont with panoramic city views. Features state-of-the-art smart home technology, resort-style pool, and private theater room.',
    priceHistory: [
      { date: '2024-01-01', price: 2400000 },
      { date: '2024-02-01', price: 2450000 },
      { date: '2024-03-01', price: 2500000 },
    ],
  },
  {
    id: 'prop-2',
    title: 'Contemporary Downtown Penthouse',
    price: 1850000,
    location: {
      address: '555 Downtown Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      lat: 40.7128,
      lng: -74.0060,
    },
    area: 4200,
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    floors: 1,
    builtYear: 2022,
    facing: 'north',
    roadAccess: 'Direct building access',
    amenities: {
      parking: true,
      water: true,
      electricity: true,
      internet: true,
      garden: false,
      security: true,
      gym: true,
      balcony: true,
    },
    media: {
      images: [
        'https://private-us-east-1.manuscdn.com/sessionFile/6oP4f6RhllrSt2w3hbRRGt/sandbox/XO4ft8tBSOuwLutjJqLoUN-img-2_1771416973000_na1fn_aGVyby1tb2Rlcm4tYXBhcnRtZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNm9QNGY2UmhsbHJTdDJ3M2hiUlJHdC9zYW5kYm94L1hPNGZ0OHRCU091d0x1dGpKcUxvVU4taW1nLTJfMTc3MTQxNjk3MzAwMF9uYTFmbl9hR1Z5YnkxdGIyUmxjbTR0WVhCaGNuUnRaVzUwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tZn7mo9eXnAs~agPsmGEkJKDoAsLsAlrOAJpt5AL5ZZXN86WebozS3TvwQaNHMNNBOjFvB5RkgVNwhuM~ZFBftZRk-TTc9U6AQ5GQYoGm7x-s5z-Zs~495wzR132PcBj-skREHbINuLO84tbnJXg9nCY8VxPWek37N1FpvahJEDzVhCyyiC1pNnI9z741Pu~vCIofivIC0wBcAl4ROMu0VaB5VO~vb35BguExPyUAVf2uVAg-9YjH7WaFascBOGrX1u~WjWgWVysYHWbyWp~MyhT~IjC9kmZViFIKFOZIPdEFEegiYKLBck7JvioiqYeEUABJiHYnoHDHm93p146HA__',
      ],
    },
    analytics: {
      views: 1923,
      saves: 124,
      popularity: 88,
    },
    verified: true,
    agent: agents[1],
    description: 'Spectacular penthouse with floor-to-ceiling windows overlooking Manhattan skyline. Premium finishes, chef\'s kitchen, and spa-like bathrooms.',
    priceHistory: [
      { date: '2024-01-01', price: 1750000 },
      { date: '2024-02-01', price: 1800000 },
      { date: '2024-03-01', price: 1850000 },
    ],
  },
  {
    id: 'prop-3',
    title: 'Suburban Family Home',
    price: 650000,
    location: {
      address: '789 Maple Street',
      city: 'Austin',
      state: 'TX',
      zipCode: '78704',
      lat: 30.2672,
      lng: -97.7431,
    },
    area: 3200,
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    builtYear: 2015,
    facing: 'east',
    roadAccess: 'Quiet residential street',
    amenities: {
      parking: true,
      water: true,
      electricity: true,
      internet: true,
      garden: true,
      security: false,
      pool: false,
      balcony: true,
    },
    media: {
      images: [
        'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop',
      ],
    },
    analytics: {
      views: 1456,
      saves: 89,
      popularity: 75,
    },
    verified: true,
    agent: agents[2],
    description: 'Beautiful family home in established neighborhood with excellent schools. Recently updated kitchen and master suite.',
    priceHistory: [
      { date: '2024-01-01', price: 620000 },
      { date: '2024-02-01', price: 635000 },
      { date: '2024-03-01', price: 650000 },
    ],
  },
  {
    id: 'prop-4',
    title: 'Beachfront Luxury Condo',
    price: 1200000,
    location: {
      address: '2100 Ocean Boulevard',
      city: 'Miami',
      state: 'FL',
      zipCode: '33139',
      lat: 25.7617,
      lng: -80.1918,
    },
    area: 2800,
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2,
    floors: 1,
    builtYear: 2020,
    facing: 'east',
    roadAccess: 'Direct beach access',
    amenities: {
      parking: true,
      water: true,
      electricity: true,
      internet: true,
      garden: false,
      security: true,
      pool: true,
      gym: true,
      balcony: true,
    },
    media: {
      images: [
        'https://images.unsplash.com/photo-1512917774080-9b274b3d0facb?w=1200&h=800&fit=crop',
      ],
    },
    analytics: {
      views: 3124,
      saves: 201,
      popularity: 95,
    },
    verified: true,
    agent: agents[3],
    description: 'Stunning beachfront property with direct ocean views, private balcony, and resort-style amenities. Perfect vacation or investment property.',
    priceHistory: [
      { date: '2024-01-01', price: 1100000 },
      { date: '2024-02-01', price: 1150000 },
      { date: '2024-03-01', price: 1200000 },
    ],
  },
  {
    id: 'prop-5',
    title: 'Modern Tech Hub Townhouse',
    price: 875000,
    location: {
      address: '456 Innovation Drive',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      lat: 37.7749,
      lng: -122.4194,
    },
    area: 2400,
    type: 'townhouse',
    bedrooms: 3,
    bathrooms: 2,
    floors: 3,
    builtYear: 2021,
    facing: 'west',
    roadAccess: 'Close to tech corridor',
    amenities: {
      parking: true,
      water: true,
      electricity: true,
      internet: true,
      garden: true,
      security: true,
      balcony: true,
    },
    media: {
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
      ],
    },
    analytics: {
      views: 1678,
      saves: 112,
      popularity: 82,
    },
    verified: true,
    agent: agents[0],
    description: 'Modern townhouse in vibrant neighborhood with smart home features. Walking distance to restaurants and tech companies.',
    priceHistory: [
      { date: '2024-01-01', price: 800000 },
      { date: '2024-02-01', price: 837500 },
      { date: '2024-03-01', price: 875000 },
    ],
  },
  {
    id: 'prop-6',
    title: 'Charming Historic Brownstone',
    price: 950000,
    location: {
      address: '234 Park Avenue',
      city: 'Boston',
      state: 'MA',
      zipCode: '02108',
      lat: 42.3601,
      lng: -71.0589,
    },
    area: 2600,
    type: 'house',
    bedrooms: 4,
    bathrooms: 2,
    floors: 4,
    builtYear: 1890,
    facing: 'south',
    roadAccess: 'Tree-lined historic street',
    amenities: {
      parking: false,
      water: true,
      electricity: true,
      internet: true,
      garden: true,
      security: false,
      balcony: false,
    },
    media: {
      images: [
        'https://images.unsplash.com/photo-1576941089067-2de3dd663e4f?w=1200&h=800&fit=crop',
      ],
    },
    analytics: {
      views: 987,
      saves: 67,
      popularity: 68,
    },
    verified: false,
    agent: agents[1],
    description: 'Beautifully restored historic brownstone with original architectural details. Charming neighborhood with excellent walkability.',
  },
];

/**
 * Simulate API calls with realistic delays
 */
export const propertyApi = {
  async getProperties(filters?: {
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    city?: string;
  }): Promise<Property[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let results = [...mockProperties];
    
    if (filters) {
      if (filters.type) {
        results = results.filter(p => p.type === filters.type);
      }
      if (filters.minPrice) {
        results = results.filter(p => p.price >= filters.minPrice!);
      }
      if (filters.maxPrice) {
        results = results.filter(p => p.price <= filters.maxPrice!);
      }
      if (filters.bedrooms) {
        results = results.filter(p => p.bedrooms >= filters.bedrooms!);
      }
      if (filters.bathrooms) {
        results = results.filter(p => p.bathrooms >= filters.bathrooms!);
      }
      if (filters.city) {
        results = results.filter(p => 
          p.location.city.toLowerCase().includes(filters.city!.toLowerCase())
        );
      }
    }
    
    return results;
  },

  async getPropertyById(id: string): Promise<Property | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockProperties.find(p => p.id === id) || null;
  },

  async getSimilarProperties(propertyId: string, count: number = 3): Promise<Property[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    const property = mockProperties.find(p => p.id === propertyId);
    if (!property) return [];
    
    return mockProperties
      .filter(p => p.id !== propertyId && p.type === property.type)
      .slice(0, count);
  },

  async getFeaturedProperties(): Promise<Property[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockProperties.slice(0, 4);
  },

  async getMarketStats() {
    await new Promise(resolve => setTimeout(resolve, 150));
    return {
      totalListings: mockProperties.length,
      avgPrice: Math.round(
        mockProperties.reduce((sum, p) => sum + p.price, 0) / mockProperties.length
      ),
      soldThisMonth: 12,
      avgDaysOnMarket: 28,
    };
  },
};
