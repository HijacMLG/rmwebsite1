// pages/HomePage.jsx
import React, { useState, useEffect } from "react";

import Sidebar               from "../components/Sidebar";
import Header                from "../components/Header";
import CategoriesNav         from "../components/CategoriesNav";
import Banner                from "../components/Banner";
import BannerSwiper          from "../components/BannerSwiper";
import ProductsCarousel      from "../components/ProductsCarousel";
import DealSection           from "../components/DealSection";
import CategoriesSection     from "../components/CategoriesSection";
import CreditCardsSection    from "../components/CreditCardsSection";
import FooterSection         from "../components/FooterSection";

import {
  bannerImages,
  sampleProducts,
  categories,
} from "../data";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen]       = useState(false);
  const [scrolled,    setScrolled]          = useState(false);
  const [showCatsSticky, setShowCatsSticky] = useState(true);
  const [lastY, setLastY]                   = useState(0);

  /* hide/show categories bar on scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowCatsSticky(y <= lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      {/* off-canvas menu + header */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header  scrolled={scrolled} onMenu={() => setSidebarOpen(true)} />

      <CategoriesNav visible={showCatsSticky} />

      {/* hero + category slider */}
      {/* pass your slides data into Banner via the `slides` prop */}
      <Banner slides={bannerImages} />
      <BannerSwiper categories={categories} />

      {/* product rows */}
      <ProductsCarousel title="Recently Viewed"     items={sampleProducts} />
      <ProductsCarousel title="Recommended for you" items={sampleProducts} />

      {/* flash-deal block */}
      <DealSection />

      {/* extra rows */}
      <ProductsCarousel title="Hot right now" items={sampleProducts} />
      <ProductsCarousel title="Top Sellers"   items={sampleProducts} />
      <ProductsCarousel title="Hot Deals"     items={sampleProducts} />

      {/* categories grid at the bottom */}
      <CategoriesSection />

      {/* credit cards payment logos - now at very bottom */}
      <CreditCardsSection />

      {/* footer section */}
      <FooterSection />
    </>
  );
}
