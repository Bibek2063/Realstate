/**
 * User Dashboard Page
 * Modern Luxury Minimalism: Tabs for saved properties, recently viewed, and analytics
 */

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/lib/mockData';
import { Heart, Eye, Home, BarChart3, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type TabType = 'saved' | 'viewed' | 'listings' | 'analytics';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('saved');
  const [savedProperties] = useState(mockProperties.slice(0, 3));
  const [viewedProperties] = useState(mockProperties.slice(1, 4));

  // Mock analytics data
  const viewsData = [
    { date: 'Mon', views: 120, saves: 45 },
    { date: 'Tue', views: 180, saves: 62 },
    { date: 'Wed', views: 150, saves: 55 },
    { date: 'Thu', views: 220, saves: 78 },
    { date: 'Fri', views: 280, saves: 95 },
    { date: 'Sat', views: 200, saves: 70 },
    { date: 'Sun', views: 150, saves: 50 },
  ];

  const propertyPerformance = [
    { name: 'Luxury Estate', views: 2847, saves: 156, inquiries: 42 },
    { name: 'Downtown Penthouse', views: 1923, saves: 124, inquiries: 28 },
    { name: 'Suburban Home', views: 1456, saves: 89, inquiries: 18 },
  ];

  const tabs = [
    { id: 'saved', label: 'Saved Properties', icon: Heart },
    { id: 'viewed', label: 'Recently Viewed', icon: Eye },
    { id: 'listings', label: 'My Listings', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties and track performance</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 border-b border-border">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-3 font-semibold whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-accent border-accent'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div>
          {/* Saved Properties */}
          {activeTab === 'saved' && (
            <div className="animate-in fade-in">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Saved Properties ({savedProperties.length})
                </h2>
                <p className="text-muted-foreground">
                  Properties you've bookmarked for later
                </p>
              </div>

              {savedProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} isWishlisted={true} />
                  ))}
                </div>
              ) : (
                <div className="glass-card p-12 rounded-xl text-center">
                  <Heart size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                  <p className="text-lg text-muted-foreground">
                    No saved properties yet
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Start exploring and save your favorite properties
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Recently Viewed */}
          {activeTab === 'viewed' && (
            <div className="animate-in fade-in">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Recently Viewed ({viewedProperties.length})
                </h2>
                <p className="text-muted-foreground">
                  Properties you've recently looked at
                </p>
              </div>

              {viewedProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {viewedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="glass-card p-12 rounded-xl text-center">
                  <Eye size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                  <p className="text-lg text-muted-foreground">
                    No recently viewed properties
                  </p>
                </div>
              )}
            </div>
          )}

          {/* My Listings */}
          {activeTab === 'listings' && (
            <div className="animate-in fade-in">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    My Listings (3)
                  </h2>
                  <p className="text-muted-foreground">
                    Properties you've listed for sale
                  </p>
                </div>
                <a href="/add-property" className="btn-primary">
                  List New Property
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProperties.slice(0, 3).map(property => (
                  <div key={property.id} className="glass-card rounded-xl overflow-hidden group">
                    <div className="relative h-64 bg-muted overflow-hidden">
                      <img
                        src={property.media.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Active
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                        {property.title}
                      </h3>
                      <p className="text-2xl font-bold text-accent mb-4">
                        ${(property.price / 1000000).toFixed(1)}M
                      </p>
                      <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-center">
                        <div className="bg-muted p-2 rounded">
                          <p className="font-bold text-foreground">
                            {property.analytics.views}
                          </p>
                          <p className="text-muted-foreground">Views</p>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <p className="font-bold text-foreground">
                            {property.analytics.saves}
                          </p>
                          <p className="text-muted-foreground">Saves</p>
                        </div>
                        <div className="bg-muted p-2 rounded">
                          <p className="font-bold text-foreground">
                            {Math.floor(Math.random() * 10) + 3}
                          </p>
                          <p className="text-muted-foreground">Inquiries</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 btn-secondary text-sm">Edit</button>
                        <button className="flex-1 btn-secondary text-sm">Stats</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === 'analytics' && (
            <div className="animate-in fade-in space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Calendar size={24} className="text-accent" />
                  Weekly Performance
                </h2>
                <div className="glass-card p-6 rounded-xl">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={viewsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                      <YAxis stroke="var(--muted-foreground)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="views"
                        stroke="var(--accent)"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="saves"
                        stroke="var(--secondary)"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Property Performance
                </h2>
                <div className="glass-card p-6 rounded-xl">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={propertyPerformance}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                      <YAxis stroke="var(--muted-foreground)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Bar dataKey="views" fill="var(--accent)" />
                      <Bar dataKey="saves" fill="var(--secondary)" />
                      <Bar dataKey="inquiries" fill="var(--chart-4)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="glass-card p-6 rounded-xl text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {viewsData.reduce((sum, d) => sum + d.views, 0)}
                  </p>
                  <p className="text-muted-foreground">Total Views</p>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {viewsData.reduce((sum, d) => sum + d.saves, 0)}
                  </p>
                  <p className="text-muted-foreground">Total Saves</p>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {propertyPerformance.reduce((sum, p) => sum + p.inquiries, 0)}
                  </p>
                  <p className="text-muted-foreground">Total Inquiries</p>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {(
                      (viewsData.reduce((sum, d) => sum + d.saves, 0) /
                        viewsData.reduce((sum, d) => sum + d.views, 0)) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                  <p className="text-muted-foreground">Conversion Rate</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
