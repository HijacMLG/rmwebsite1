import React from 'react';
import Link from 'next/link';

const categories = [
  { href: '/categories', label: 'Categories' },
  { href: '/store/cheap-games', label: 'Cheap Games' },
  { href: '/store/windows-10-11', label: 'Windows 10/11' },
  { href: '/store/make-a-wish', label: 'Make-A-Wish' },
  { href: '/store/oblivion', label: 'Oblivion' },
  { href: '/store/expedition-33', label: 'Expedition 33' },
];

export default function CategoriesNav({ visible }) {
  return (
    <nav
      className={`bg-gray-100 sticky top-16 z-40 transform transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Categories navigation"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Fade overlays */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-100 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-100 pointer-events-none" />

        <div className="overflow-x-auto flex justify-center items-center space-x-6 px-4 py-3 snap-x snap-mandatory scrollbar-hide">
          {categories.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap snap-start font-medium text-black hover:text-gray-700"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/store/sale"
            className="ml-4 flex-shrink-0 snap-start rounded-full bg-red-300 px-3 py-1 font-medium text-black hover:bg-red-400 whitespace-nowrap"
          >
            Sale
          </Link>
        </div>
      </div>
    </nav>
  );
}
