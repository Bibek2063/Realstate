import React from 'react';
import Navbar from '@/components/Navbar';
import { mockProperties } from '@/lib/mockData';
import PropertyCard from '@/components/PropertyCard';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Link } from 'wouter';

export default function Favorites() {
  const { favorites } = useFavorites();
  const favoriteProperties = mockProperties.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Your Favorites</h1>
          <Link href="/listings"><a className="text-sm text-accent">Browse Listings</a></Link>
        </div>

        {favoriteProperties.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            <p className="mb-4">You haven't added any properties to your favorites yet.</p>
            <Link href="/listings"><a className="px-6 py-3 bg-accent text-white rounded-lg">Explore Properties</a></Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProperties.map(p => (
              <PropertyCard key={p.id} property={p} isWishlisted={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
