import React, { useState } from 'react';
import {
  Search, Globe, Menu, User, Heart, Star,
  Compass, Home, Tv, Flame, Snowflake, Mountain, TreePine, Award
} from 'lucide-react';

// ─── Mock Data ────────────────────────────────────────────────────────────────

const propertiesData = [
  {
    id: 1,
    title: "Tranquil Forest Cabin",
    location: "Manali, Himachal Pradesh",
    rating: 4.92,
    distance: "530 km away",
    dates: "Jun 12 – 17",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa",
    location: "Goa, India",
    rating: 4.85,
    distance: "1,240 km away",
    dates: "Oct 20 – 25",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Modern Glass Treehouse",
    location: "Jibhi, Himachal Pradesh",
    rating: 4.98,
    distance: "495 km away",
    dates: "Jul 02 – 07",
    price: "₹8,900",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Heritage Desert Palace",
    location: "Jaisalmer, Rajasthan",
    rating: 4.78,
    distance: "780 km away",
    dates: "Nov 15 – 20",
    price: "₹15,500",
    image: "https://images.unsplash.com/photo-1585983225902-3bb33220e391?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "A-Frame Mountain Chalet",
    location: "Gulmarg, Jammu & Kashmir",
    rating: 4.95,
    distance: "910 km away",
    dates: "Dec 05 – 10",
    price: "₹10,200",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Infinity Pool Cliffside Escape",
    location: "Lonavala, Maharashtra",
    rating: 4.69,
    distance: "140 km away",
    dates: "Aug 18 – 23",
    price: "₹14,000",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
  { id: 'trending',    label: 'Trending',       icon: Flame      },
  { id: 'cabins',     label: 'Cabins',          icon: Home       },
  { id: 'iconic',     label: 'Icons',           icon: Award      },
  { id: 'mountains',  label: 'Mountains',       icon: Mountain   },
  { id: 'pools',      label: 'Amazing pools',   icon: Compass    },
  { id: 'arctic',     label: 'Arctic',          icon: Snowflake  },
  { id: 'country',    label: 'Countryside',     icon: TreePine   },
  { id: 'topworld',   label: 'Top of the world',icon: Tv         },
];

// ─── Airbnb Logo (corrected clean SVG path) ───────────────────────────────────

function AirbnbLogo() {
  return (
    <svg
      className="w-8 h-8 fill-rose-500"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Airbnb"
    >
      {/* Simplified, correct belo/rautenstrauch shape */}
      <path d="M16 2.6c-1.54 0-2.8.78-3.7 2.22-.67 1.04-1.08 2.45-1.17 4.14a30.7 30.7 0 0 0-.03 2.02c.01.68.04 1.4.08 2.16H8.34C6.77 13.14 5.55 13.7 4.7 14.84c-.79 1.07-1.18 2.57-1.18 4.22 0 2.55.97 4.73 2.83 6.43C8.15 27.14 10.55 28 13.35 28c2.08 0 3.93-.52 5.44-1.52.8-.52 1.5-1.16 2.08-1.9.57.74 1.27 1.38 2.08 1.9 1.51 1 3.36 1.52 5.44 1.52 2.8 0 5.2-.86 7-2.51 1.86-1.7 2.83-3.88 2.83-6.43 0-1.65-.39-3.15-1.18-4.22-.85-1.14-2.07-1.7-3.64-1.7h-2.84c.04-.76.07-1.48.08-2.16.01-.7 0-1.37-.03-2.02-.09-1.69-.5-3.1-1.17-4.14C28.8 3.38 27.54 2.6 26 2.6c-1.47 0-2.68.65-3.57 1.88-.82 1.15-1.36 2.83-1.57 4.93h-.04l-.04-.02h-.04c-.21-2.1-.75-3.78-1.57-4.93C18.28 3.25 17.07 2.6 16 2.6zm0 2c.77 0 1.49.48 2.1 1.33.72 1.01 1.18 2.52 1.35 4.48l.06.73h1.5l.06-.73c.17-1.96.63-3.47 1.35-4.48.61-.85 1.33-1.33 2.1-1.33.95 0 1.71.48 2.28 1.44.53.9.85 2.16.92 3.67.03.6.03 1.26.02 1.97-.01.72-.04 1.47-.08 2.26l-.04.8h4.54c.98 0 1.67.34 2.15.99.56.76.85 1.9.85 3.4 0 2.1-.78 3.88-2.33 5.3-1.56 1.43-3.6 2.17-5.98 2.17-1.72 0-3.22-.43-4.46-1.25-.84-.55-1.54-1.27-2.07-2.1l-.73-1.13-.73 1.13c-.53.83-1.23 1.55-2.07 2.1-1.24.82-2.74 1.25-4.46 1.25-2.38 0-4.42-.74-5.98-2.17C5.78 22.94 5 21.16 5 19.06c0-1.5.29-2.64.85-3.4.48-.65 1.17-.99 2.15-.99h4.54l-.04-.8a46.4 46.4 0 0 1-.08-2.26c-.01-.71-.01-1.37.02-1.97.07-1.51.39-2.77.92-3.67C13.93 5.08 14.69 4.6 16 4.6z" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AirbnbClone() {
  const [activeCategory,    setActiveCategory]    = useState('trending');
  const [likedProperties,   setLikedProperties]   = useState({});
  const [mapVisible,        setMapVisible]        = useState(false);

  // FIX: spinning animation via inline style + CSS keyframe injected once
  const spinStyle = `
    @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .spin-slow { animation: spinSlow 3s linear infinite; }
    /* FIX: hide native scrollbar on category strip */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;

  const toggleLike = (id) => {
    setLikedProperties((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Inject keyframe + scrollbar-hide CSS once */}
      <style>{spinStyle}</style>

      <div className="min-h-screen bg-white text-neutral-800 font-sans antialiased">

        {/* ── 1. STICKY NAVBAR ─────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-100">
          <div className="max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-4 px-4 h-20 flex items-center justify-between gap-3">

            {/* Logo */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer select-none">
              <AirbnbLogo />
              <span className="text-rose-500 font-bold text-xl tracking-tight">airbnb</span>
            </div>

            {/* Search Bar */}
            <div className="border border-neutral-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer flex items-center w-full md:w-auto max-w-md">
              <div className="flex items-center justify-between w-full text-sm font-semibold">
                <button className="px-4 border-r border-neutral-200 hover:text-neutral-500 hidden sm:block">
                  Anywhere
                </button>
                <button className="px-4 border-r border-neutral-200 hover:text-neutral-500 hidden sm:block">
                  Any week
                </button>
                <button className="px-4 text-neutral-500 font-normal hover:text-neutral-800 flex items-center gap-2">
                  <span className="hidden sm:inline">Add guests</span>
                  <span className="sm:hidden font-semibold text-neutral-800">Where to?</span>
                </button>
                <div className="p-2 bg-rose-500 text-white rounded-full">
                  <Search size={14} strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden lg:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-50 transition">
                Airbnb your home
              </button>
              <button className="p-3 rounded-full hover:bg-neutral-50 transition hidden sm:block" aria-label="Change language">
                <Globe size={18} />
              </button>
              <div className="flex items-center gap-2 border border-neutral-200 rounded-full p-2 md:py-1.5 md:px-3 hover:shadow-md transition cursor-pointer">
                <Menu size={18} />
                <div className="bg-neutral-500 text-white rounded-full p-1.5 hidden md:block">
                  <User size={16} fill="currentColor" />
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* ── 2. CATEGORY FILTER TABS ──────────────────────────────────── */}
        {/*
          FIX: replaced non-standard `scrollbar-none` Tailwind class with
          custom CSS class `no-scrollbar` injected above via <style>.
        */}
        <section className="max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-4 px-4 bg-white border-b border-neutral-100">
          <div className="flex items-center gap-8 pt-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center pb-3 gap-2 border-b-2 transition min-w-[70px] whitespace-nowrap group ${
                    isActive
                      ? 'border-neutral-800 text-neutral-800'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  <Icon
                    size={24}
                    className={`transition-transform group-hover:scale-105 ${
                      isActive ? 'text-neutral-800' : 'text-neutral-500'
                    }`}
                  />
                  <span className="text-xs font-semibold tracking-wide">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── 3. PROPERTY GRID ─────────────────────────────────────────── */}
        <main className="max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-4 px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {propertiesData.map((property) => (
              <div
                key={property.id}
                className="group flex flex-col gap-2 cursor-pointer"
              >
                {/* Image with like button */}
                <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-neutral-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300 ease-out"
                    loading="lazy"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleLike(property.id); }}
                    aria-label={likedProperties[property.id] ? 'Unlike' : 'Like'}
                    className="absolute top-3 right-3 p-1 rounded-full transition hover:scale-110 active:scale-95"
                  >
                    <Heart
                      size={24}
                      className={
                        likedProperties[property.id]
                          ? 'fill-rose-500 stroke-rose-500'
                          : 'stroke-white fill-black/30'
                      }
                    />
                  </button>
                </div>

                {/* Card info */}
                <div className="flex flex-col gap-0.5 text-sm">
                  <div className="flex justify-between items-center font-bold text-neutral-900">
                    <span className="truncate">{property.location}</span>
                    <div className="flex items-center gap-1 font-normal text-neutral-800 ml-2 shrink-0">
                      <Star size={14} className="fill-current text-neutral-900" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 font-light truncate">{property.title}</p>
                  <p className="text-neutral-500 font-light">{property.distance}</p>
                  <p className="text-neutral-500 font-light">{property.dates}</p>
                  <p className="mt-1 font-semibold text-neutral-900">
                    {property.price}{' '}
                    <span className="font-light text-neutral-600">/ night</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* ── 4. FLOATING MAP BUTTON ───────────────────────────────────── */}
        {/*
          FIX: replaced non-existent `animate-spin-slow` Tailwind utility with
          custom CSS class `spin-slow` injected above. The Compass icon now
          actually rotates smoothly.
        */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => setMapVisible((v) => !v)}
            className="bg-neutral-900 hover:bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 text-sm tracking-wide"
          >
            <span>{mapVisible ? 'Hide map' : 'Show map'}</span>
            <Compass size={16} className={mapVisible ? 'spin-slow' : ''} />
          </button>
        </div>

        {/* Map placeholder panel (toggled by button above) */}
        {mapVisible && (
          <div className="fixed inset-x-0 bottom-0 top-[88px] z-30 bg-neutral-100 flex items-center justify-center">
            <div className="text-center text-neutral-400 select-none">
              <Compass size={48} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Map view coming soon</p>
              <p className="text-sm">Close with the button below</p>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
