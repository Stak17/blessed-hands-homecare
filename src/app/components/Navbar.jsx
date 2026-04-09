"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false); // dropdown for Services
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Care%20Axis%20Agency%20logo.png"
            alt="Care Axis Agency logo"
            width={45}
            height={45}
            className="rounded-full shadow-md hover:scale-105 transition"
          />
          <span className="text-lg font-bold text-blue-700 tracking-wide hidden sm:block">
            Care Axis Agency
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 relative">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Services ▾
            </button>
            {open && (
              <div className="absolute mt-2 w-56 bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50">
                <Link
                  href="/services"
                  className="block px-5 py-3 text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  All Services
                </Link>
                <Link
                  href="/booking"
                  className="block px-5 py-3 text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  Book Service
                </Link>
                <Link
                  href="/contact"
                  className="block px-5 py-3 text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          <Link href="/booking" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Booking
          </Link>
          <Link href="/payment" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Payment
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Contact
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-5 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium transition">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium transition">
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Services ▾
            </button>
            {open && (
              <div className="mt-2 pl-4 space-y-1 border-l-2 border-blue-500">
                <Link
                  href="/services"
                  className="block px-3 py-2 bg-blue-50 text-blue-800 font-semibold rounded hover:bg-blue-100 transition"
                >
                  All Services
                </Link>
                <Link
                  href="/booking"
                  className="block px-3 py-2 bg-blue-50 text-blue-800 font-semibold rounded hover:bg-blue-100 transition"
                >
                  Book Service
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 bg-blue-50 text-blue-800 font-semibold rounded hover:bg-blue-100 transition"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          <Link href="/booking" className="block text-gray-700 hover:text-blue-600 font-medium transition">
            Booking
          </Link>
          <Link href="/payment" className="block text-gray-700 hover:text-blue-600 font-medium transition">
            Payment
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}