// components/Header.jsx
import React, { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ————————— Memoised links so they never re-render —————————— */
const SidebarLinks = memo(() => (
  <ul className="space-y-3 text-gray-800">
    <li><Link href="/store/all" prefetch={false}>All Games</Link></li>
    <li><Link href="/store/pc"  prefetch={false}>PC Games</Link></li>
    <li><Link href="/store/console" prefetch={false}>Console Games</Link></li>
    <li><Link href="/store/sale" prefetch={false}>Sales & Deals</Link></li>
    <li><Link href="/favorites/wishlist" prefetch={false}>Wishlist</Link></li>
  </ul>
));
SidebarLinks.displayName = 'SidebarLinks';

/* ————————— Header component —————————— */
export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* Freeze background scroll only while sidebar is open */
  useEffect(() => {
    const { body } = document;
    if (sidebarOpen) body.style.overflow = 'hidden';
    else body.style.overflow = '';
    return () => { body.style.overflow = ''; };
  }, [sidebarOpen]);

  /* Stable callbacks = no re-creates on every render */
  const openSidebar  = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <>
      {/* ── Fixed toolbar ── */}
      <div
        className="fixed top-0 left-0 w-full z-50 flex items-center p-4 bg-white shadow"
        style={{ willChange: 'transform', contain: 'paint' }}  /* isolates paints */
      >
        {/* Left group */}
        <div className="flex items-center space-x-2">
          <button onClick={openSidebar} className="p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <form action="/store/all" className="flex items-center border rounded p-2 w-60 sm:w-72">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17 17l5 5m-5-5A7 7 0 1110 3a7 7 0 017 7z"/>
            </svg>
            <input
              type="search"
              name="text"
              placeholder="Search…"
              className="outline-none w-full text-sm"
              autoComplete="off"
            />
          </form>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" prefetch={false}>
            <Image
              src="https://static.eneba.games/branding/v2/logoFull.svg"
              alt="Logo"
              width={144} height={32} priority
              sizes="144px"
            />
          </Link>
        </div>

        {/* Right group */}
        <div className="flex items-center space-x-4 ml-auto">
          <button className="flex items-center space-x-2 border p-2 rounded bg-white hover:bg-gray-100">
            <Image
              src="https://static.eneba.games/flags/lang/v2/latvia.svg"
              alt="Latvia"
              width={20} height={20} priority
              sizes="20px"
            />
            <span className="text-sm">English EU</span>
            <span className="text-sm font-bold">EUR</span>
          </button>

          <Link href="/favorites/wishlist" className="text-gray-500 hover:text-gray-700" prefetch={false}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" strokeWidth={1.5}>
              <path d="M12 21.844l-9.588-10A5.672 5.672 0 011.349 5.293h0a5.673 5.673 0 019.085-1.474L12 5.384l1.566-1.565a5.673 5.673 0 019.085 1.474h0a5.673 5.673 0 01-1.062 6.548Z"/>
            </svg>
          </Link>

          <button className="text-gray-500 hover:text-gray-700" aria-label="Cart">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4.031 9.75h8.047c.446 0 .879-.15 1.231-.425.352-.275.602-.659.709-1.092l.967-3.867A.483.483 0 0014.5 4h-11"/>
              <circle cx="6.75" cy="12.75" r=".75"/>
              <circle cx="11.75" cy="12.75" r=".75"/>
            </svg>
          </button>

          <div className="flex items-center space-x-2 text-sm">
            <Link href="https://my.eneba.com/login?ref=/" className="text-gray-500 hover:text-gray-700" prefetch={false}>
              Log in
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="https://my.eneba.com/registration?ref=/" className="text-gray-500 hover:text-gray-700" prefetch={false}>
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* ── Overlay (CSS-only fade) ── */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-200
                    ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeSidebar}
      />

      {/* ── Sidebar (CSS-only slide-in) ── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg overflow-y-auto
                    transform transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ willChange: 'transform' }}
      >
        <nav className="p-4">
          <button className="mb-4" onClick={closeSidebar} aria-label="Close sidebar">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <SidebarLinks />
        </nav>
      </aside>
    </>
  );
}
