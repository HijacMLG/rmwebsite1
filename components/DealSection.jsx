// components/DealSection.jsx
import React, { useRef } from 'react';
import Link from 'next/link';

/* ─────────────────── component ─────────────────── */
export default function DealSection({
  deals = [],
  title = 'Daily Deals',
}) {
  /* drop centre card if odd length */
  const list =
    deals.length % 2 ? deals.filter((_, i) => i !== Math.floor(deals.length / 2)) : deals;

  const track = useRef(null);
  const scroll = (dx) => track.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section
      className="relative w-full text-white py-6 mt-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/')"
      }}
    >
      <h2 className="relative z-10 mb-6 text-left text-3xl font-bold">
        {title}
      </h2>

      {/* desktop flex */}
      <div className="relative z-10 hidden md:flex md:gap-4 md:ml-auto">
        {list.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {/* mobile slider */}
      <div className="relative z-10 md:hidden">
        <div
          ref={track}
          className="flex space-x-3 overflow-x-hidden scroll-smooth ml-auto w-max"
        >
          {list.map((p) => (
            <ProductCard key={p.id} {...p} className="flex-shrink-0" />
          ))}
        </div>

        {/* arrows */}
        <Arrow dir="left" onClick={() => scroll(-180)} />
        <Arrow dir="right" onClick={() => scroll(180)} />
      </div>
    </section>
  );
}

/* ─────────── helper components ─────────── */
function ProductCard({ title, img, price, region, href, className = '' }) {
  return (
    <Link
      href={href}
      className={`h-[22rem] w-44 overflow-hidden ${className}`}
    >
      {/* image */}
      <div className="h-[66%] overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* info */}
      <div className="flex h-[34%] flex-col px-3 py-2 text-white">
        <h3 className="mb-0.5 line-clamp-2 text-xs font-medium">{title}</h3>
        <span className="mb-0.5 text-[10px] opacity-75">{region}</span>
        <span className="mt-auto text-lg font-bold">{price}</span>
      </div>
    </Link>
  );
}

function Arrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${dir}`}
      className={`absolute top-1/2 -translate-y-1/2 z-20 p-2 hidden sm:block
                  ${dir === 'left' ? 'left-[-20px]' : 'right-[-20px]'}`}
    >
      <svg
        className="h-4 w-4 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}
