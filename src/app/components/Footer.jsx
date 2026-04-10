"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 relative">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">

        {/* Brand & Contact */}
        <div>
          <h2 className="text-xl font-semibold">
            Care Axis Agency
          </h2>

          <p className="mt-3 text-gray-200">
            Phone: 0791 263 310 <br />
            Email: careaxisagency@gmail.com <br />
            Service Hours: 24/7
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/booking" className="hover:underline">Booking</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>

          {/* Icons */}
          <div className="flex space-x-5 items-center mt-2">

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition text-xl"
            >
              <FaFacebookF />
            </a>

            {/* Instagram (FIXED LINK) */}
            <a
              href="https://www.instagram.com/care.axisagency?igsh=MWtoNG90bXJ0YjQyMg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-200 hover:scale-110 transition text-xl"
            >
              <FaInstagram />
            </a>

            {/* TikTok (FIXED LINK) */}
            <a
              href="https://www.tiktok.com/@care.axis.agency?_r=1&_t=ZS-95PllPK2LM9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 hover:scale-110 transition text-xl"
            >
              <FaTiktok />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* 👇 NEW TEXT (IMPROVED VISIBILITY) */}
          <p className="text-sm text-gray-200 mt-3">
            Follow Care Axis Agency on social media
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-gray-300 text-sm">
        © 2026 Care Axis Agency. All rights reserved.
      </p>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/256791263310"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition"
      >
        <FaWhatsapp size={26} />
      </a>
    </footer>
  );
}