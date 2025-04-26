// components/Sidebar.jsx
import React from "react";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-4">
      <button
        onClick={onClose}
        className="mb-4 p-2 rounded hover:bg-gray-100"
      >
        Close ✕
      </button>
      <nav className="space-y-2">
        <Link href="/store/games" className="block hover:text-gray-800">
          Games
        </Link>
      </nav>
    </div>
  );
}
