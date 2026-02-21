'use client';

import React, { useState } from "react";

const CatalogItem = ({ image }: { image: string }) => {
  // 1. Added state to handle mobile taps
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      // 2. Toggle state on click, and reset on mouse leave (for PC)
      onClick={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(false)}
      className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
    >
      <div className="aspect-[5/5] overflow-hidden relative">
        <img
          src={image}
          alt={""}
          // Added logic to stay zoomed when active on mobile
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
        />
        {/* 3. Logic: Show overlay if hovered (PC) OR if isActive is true (Mobile) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 flex items-end p-6 
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          
          <button 
            className={`w-full bg-whatsapp text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transform transition-transform duration-300 
            ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            Inquire on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

const StyleCatalog = () => {
  const items = [
    { id: 1, image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800" },
    { id: 2, image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800" },
    { id: 3, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800" },
    { id: 4, image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800" },
    { id: 5, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800" },
    { id: 6, image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800" },
    { id: 7, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800" },
    { id: 8, image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {items.map((item) => (
          <CatalogItem
            key={item.id}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default StyleCatalog;