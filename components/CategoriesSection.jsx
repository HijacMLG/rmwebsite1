// components/CategoriesSection.jsx
import React, { useState } from 'react';
import Link from 'next/link';

/* ───────── demo data – swap for API / props ───────── */
const allCategories = [
  { id: 1, name: 'Action',     count: 5123 },
  { id: 2, name: 'Adventure',  count: 3444 },
  { id: 3, name: 'FPS / TPS',  count: 2000 },
  { id: 4, name: 'RPG',        count: 1887 },
  { id: 5, name: 'Simulation', count: 1844 },
  { id: 6, name: 'Indie',      count: 1836 },
  { id: 7, name: 'Strategy',   count: 1665 },
  // add more as needed
];

// simple inline SVG icons for each category
function getIcon(name) {
  switch (name) {
    case 'Action':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Adventure':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 20L12 4L20 20H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'FPS / TPS':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 12H18M6 12H2M12 6V2M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'RPG':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 8H20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'Simulation':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'Indie':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 21C12 21 5 14.5 5 9.5C5 7 7 5 9.5 5C11 5 12 6 12 6C12 6 13 5 14.5 5C17 5 19 7 19 9.5C19 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Strategy':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M8 17L16 9M8 9L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function CategoriesSection() {
  const [visibleCount, setVisibleCount] = useState(7);
  const visible = allCategories.slice(0, visibleCount);

  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6">
          {visible.map(({ id, name, count }) => (
            <Link
              key={id}
              href={`/categories/${name.toLowerCase().replace(/ /g, '-')}`}
              className="bg-gray-100 p-6 flex flex-col items-center shadow hover:bg-gray-200 transition"
            >
              <span className="text-sm font-semibold mb-4">{count}</span>
              <div className="mb-4 text-black">
                {getIcon(name)}
              </div>
              <span className="mt-auto text-base font-medium">{name}</span>
            </Link>
          ))}
        </div>
        {visibleCount < allCategories.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount(allCategories.length)}
              className="border border-black px-6 py-2 hover:bg-black hover:text-white transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
