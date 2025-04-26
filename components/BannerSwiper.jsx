// @ts-nocheck         /*  ← delete this line if you want TypeScript handling  */

import React, { useRef } from "react";

/**
 * BannerSwiper – horizontal slider with hidden scrollbar
 *
 * Props:
 *   categories: [{ id, name, url, iconLight, iconColor }]
 */
export default function BannerSwiper({ categories }) {
  const trackRef = useRef(null);

  const scrollBy = (dx) =>
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  /* forward vertical wheel to the page so the user can keep scrolling */
  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      window.scrollBy({ top: e.deltaY, behavior: "smooth" });
    }
  };

  return (
    <section id="banner-swiper" className="w-full my-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative px-4">
          {/* scrollable track */}
          <div
            ref={trackRef}
            onWheel={handleWheel}
            className="no-scrollbar flex overflow-x-auto gap-3 snap-x snap-mandatory scroll-smooth"
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.url}
                className="swiper-no-swiping flex-shrink-0 w-[135px] snap-start"
              >
                <div className="group flex flex-col items-center h-full transition hover:scale-[1.03]">
                  <div className="flex items-center justify-center pt-2 w-16 h-16">
                    <img
                      src={cat.iconColor || cat.iconLight}
                      alt=""
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                  <div className="mb-2 px-1 text-center text-[15px] font-medium whitespace-normal">
                    {cat.name}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* arrows (desktop only) */}
          <button
            onClick={() => scrollBy(-160)}
            aria-label="Scroll left"
            className="md:flex hidden items-center justify-center
                       absolute left-0 top-1/2 -translate-y-1/2
                       w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow"
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => scrollBy(160)}
            aria-label="Scroll right"
            className="md:flex hidden items-center justify-center
                       absolute right-0 top-1/2 -translate-y-1/2
                       w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow"
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
