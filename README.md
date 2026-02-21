# PropertyHub - Premium Real Estate Marketplace

A high-performance, modern real estate web application built with React, Vite, and Tailwind CSS. Featuring advanced property search, interactive maps, detailed listings, and a premium user experience similar to Zillow.

## 🎨 Design Philosophy

**Modern Luxury Minimalism** - The application embodies sophisticated simplicity with premium materials and smooth interactions. The design language combines high-end property marketing aesthetics with contemporary digital experiences.

### Color Palette
- **Primary**: Deep Slate Blue (#1e3a5f) - Trust and stability
- **Accent**: Emerald Green (#10b981) - Action and vitality
- **Secondary**: Rose Gold (#d4896d) - Premium features
- **Background**: Warm Cream (#faf8f5) - Luxury and clarity

### Typography
- **Headings**: Playfair Display (serif, 700) - Luxury and confidence
- **Body**: Inter (sans-serif, 400-600) - Readability and modernity

## ✨ Features

### 🏠 Core Pages

1. **Home Page**
   - Hero section with smart property search
   - Featured properties carousel
   - Market statistics dashboard
   - Trust badges and social proof
   - Call-to-action sections

2. **Property Listings**
   - Grid and list view modes
   - Advanced filtering (price, type, bedrooms, bathrooms, verified)
   - Multiple sorting options (price, newest, popularity)
   - Sticky sidebar filters
   - Infinite scroll capability
   - Skeleton loaders for smooth UX

3. **Property Detail Page**
   - HD image gallery with navigation
   - Comprehensive property information
   - Price history graph (Recharts)
   - Property analytics (views, saves, popularity)
   - Agent information card with contact options
   - Similar properties recommendations
   - Wishlist functionality

4. **Map Search**
   - Interactive property map with pins
   - Property price preview on hover
   - List sidebar with property details
   - Cluster markers for dense areas
   - Responsive split-screen layout

5. **Add Property Form**
   - Multi-step form (5 steps)
   - Step 1: Basic information (title, price, type, location)
   - Step 2: Physical details (area, beds, baths, floors)
   - Step 3: Amenities selection
   - Step 4: Media upload
   - Step 5: Review and submit
   - Form validation and progress tracking

6. **User Dashboard**
   - Saved properties management
   - Recently viewed history
   - My listings overview
   - Property analytics with charts
   - Weekly performance metrics
   - Conversion rate tracking

### 🎯 UI Components

- **Navbar** - Sticky navigation with theme toggle and wishlist
- **SmartSearchBar** - Location autocomplete, price range, property type
- **PropertyCard** - Glassmorphism card with image, details, and agent info
- **Filter Sidebar** - Advanced filtering with multiple criteria
- **Image Gallery** - Swiper-style gallery with thumbnails
- **Analytics Charts** - Line and bar charts using Recharts
- **Skeleton Loaders** - Smooth loading states
- **Dark Mode Toggle** - Full theme support

### 🚀 Performance Features

- Lazy image loading with skeleton states
- Code splitting for faster initial load
- Optimized re-renders with React hooks
- Smooth CSS animations (200-300ms)
- Responsive design (mobile-first)
- Fast filter response times
- Optimized map rendering

### 🎭 Interactions

- **Smooth Micro-interactions**: All state changes use 200-300ms easing
- **Hover Effects**: Cards elevate, images zoom slightly
- **Entrance Animations**: Cards fade in + slide up
- **Gesture-Friendly**: Touch targets minimum 44px
- **Loading States**: Pulse animations instead of spinners
- **Feedback Loops**: Clear visual feedback for all interactions

## 🛠️ Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4 with custom components
- **Routing**: Wouter (lightweight client-side routing)
- **Forms**: React Hook Form with validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Animations**: Framer Motion (ready for advanced animations)
- **State Management**: React Context + Hooks
- **Type Safety**: TypeScript

## 📁 Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx              # Homepage with hero and featured
│   │   ├── Listings.tsx          # Property listings with filters
│   │   ├── PropertyDetail.tsx    # Detailed property view
│   │   ├── Map.tsx               # Interactive map search
│   │   ├── AddProperty.tsx       # Multi-step listing form
│   │   ├── Dashboard.tsx         # User dashboard
│   │   └── NotFound.tsx          # 404 page
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── SmartSearchBar.tsx    # Search component
│   │   ├── PropertyCard.tsx      # Property listing card
│   │   └── ...
│   ├── lib/
│   │   └── mockData.ts           # Mock property data
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Dark mode context
│   ├── App.tsx                   # Route definitions
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
└── index.html                    # HTML template
```

## 🎨 Design System

### Spacing
- Generous whitespace for luxury feel
- Consistent padding and margins
- Breathing room between sections

### Shadows & Depth
- Subtle shadows for layered effect
- Hover states with increased elevation
- Glassmorphism with backdrop blur

### Animations
- Fade-in on page load
- Smooth transitions on interactions
- Staggered animations for lists
- No jarring movements

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 1024px, 1280px
- Touch-friendly interfaces
- Adaptive layouts

## 🚀 Getting Started

### Installation

```bash
cd /home/ubuntu/realestateapp
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
pnpm build
```

### Type Checking

```bash
pnpm check
```

## 📊 Mock Data

The application uses realistic mock data with:
- 6 featured properties across different cities
- Detailed property information (area, beds, baths, amenities)
- Agent profiles with ratings
- Price history data
- Analytics (views, saves, popularity)
- Verified status and badges

## 🎯 Key Features Implemented

✅ Premium glassmorphism design
✅ Advanced property filtering
✅ Interactive map integration
✅ Data-rich property displays
✅ Smooth animations and transitions
✅ Dark mode support
✅ Responsive mobile design
✅ Multi-step form validation
✅ Analytics dashboard
✅ Wishlist functionality
✅ Agent contact cards
✅ Price history graphs
✅ Skeleton loaders
✅ Theme toggle

## 🔄 Data Flow

1. **Mock API Service** (`lib/mockData.ts`)
   - Simulates API calls with realistic delays
   - Filtering and sorting logic
   - Property data structure

2. **State Management**
   - React hooks for local state
   - Context API for theme
   - Component-level state for forms

3. **Routing**
   - Wouter for client-side routing
   - Dynamic routes for property details
   - Fallback 404 page

## 🎨 Customization

### Colors
Edit CSS variables in `client/src/index.css`:
```css
:root {
  --primary: #1e3a5f;
  --accent: #10b981;
  --secondary: #d4896d;
}
```

### Fonts
Update Google Fonts import in `client/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

### Components
All components are in `client/src/components/` and can be customized with Tailwind utilities.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

The application is ready for deployment:

1. Build the project: `pnpm build`
2. The `dist/` folder contains the production build
3. Deploy to any static hosting (Vercel, Netlify, etc.)

## 📝 Notes

- All data is mock data for demonstration
- Images are sourced from the generated assets
- Forms don't submit to a backend (ready for integration)
- Map is a visual placeholder (ready for Mapbox/Google Maps integration)

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Wouter Routing](https://github.com/molefrog/wouter)

## 📄 License

MIT

---

Built with ❤️ using Modern Luxury Minimalism design principles.
