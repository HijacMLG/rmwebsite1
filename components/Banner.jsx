// components/Slider.jsx
import React from "react";

/**
 * Slider Component
 * @param {Object[]} slides - Array of slide objects:
 *   {
 *     link: string,
 *     image: string,
 *     alt: string,
 *     badgeClass: string, // e.g. "bg-gradient-to-t from-[#8D0507] to-[#F8070B]"
 *     badgeText: string,
 *     title: string,
 *     subtitle: string
 *   }
 */
export default function Slider({ slides }) {
  return (
    <div className="relative flex w-full flex-wrap justify-center slider">
      <section
        className="relative flex shrink-0 flex-col w-[1170px] text-left light"
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div className="Article_StyledArticle-sc-k8Iao3sm-0 hfjQOU">
          <style>
            {`div:has(.altar) { padding-left: 0; padding-right: 0; }`}
          </style>

          <div className="altar max-w-[1170px] mx-auto lg:grid lg:grid-cols-4 snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-p-4 px-4 lg:px-0 lg:overflow-x-visible lg:snap-none flex gap-[8px] lg:gap-[30px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="relative overflow-hidden shadow-lg rounded-2xl w-[292px] h-[340px] lg:h-[432px] lg:w-[270px] flex-shrink-0 hover:scale-105 transition-transform duration-300 snap-center"
              >
                <a href={slide.link}>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-neutral-0 p-4 bg-[linear-gradient(360deg,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,0.5)_66%,_rgba(0,0,0,0)_100%)]">
                    <span
                      className={`${slide.badgeClass} text-neutral-0 text-caption2 font-semibold uppercase py-1 px-2 rounded-xl inline-block mb-1`}
                    >
                      {slide.badgeText}
                    </span>
                    <div className="text-body2 lg:text-h5 font-extrabold text-opacity-100">
                      {slide.title}
                    </div>
                    <div className="text-overline lg:text-caption1 font-regular text-opacity-100">
                      {slide.subtitle}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
