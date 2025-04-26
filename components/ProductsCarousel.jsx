import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsCarousel({ title, items }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scrollBy = dx =>
    trackRef.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section
      className="relative mt-16 mb-8 max-w-7xl mx-auto px-4"
      style={{ perspective: '1000px' }}
    >
      {/* Heading: pushed further left */}
      <h2 className="mb-8 text-2xl md:text-3xl uppercase font-extrabold text-black drop-shadow-lg -ml-8">
        {title}
      </h2>

      {/* Scroll buttons */}
      <button
        onClick={() => scrollBy(-300)}
        disabled={!canScrollLeft}
        className={`absolute top-1/2 left-0 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-lg transition-opacity ${
          canScrollLeft ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
        }`}
        aria-label="Scroll left"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => scrollBy(300)}
        disabled={!canScrollRight}
        className={`absolute top-1/2 right-0 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-lg transition-opacity ${
          canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
        }`}
        aria-label="Scroll right"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex justify-center space-x-6 overflow-x-auto scroll-px-4 snap-x snap-mandatory scrollbar-none py-4"
      >
        {items.map(({ url, image, title: t, region, price }, idx) => {
          const regionUpper = region.toUpperCase();
          const regionColor =
            regionUpper === 'GLOBAL'
              ? 'text-green-600'
              : regionUpper === 'EUROPE'
              ? 'text-blue-600'
              : 'text-gray-800';

          return (
            <Link
              key={idx}
              href={url}
              className="snap-start flex-shrink-0 w-52 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="rounded-lg overflow-hidden bg-white shadow-md transform-gpu transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image}
                    alt={t}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                </div>
                <div className="p-4 text-gray-800">
                  <h3 className="text-sm font-extrabold uppercase line-clamp-2 mb-2 text-gray-900">
                    {t}
                  </h3>
                  <span
                    className={`text-xs font-medium uppercase ${regionColor}`}
                  >
                    {regionUpper}
                  </span>
                  <div className="mt-4 text-lg font-bold">{price}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
