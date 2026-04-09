 import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0 z-50">

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

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
          About
        </Link>
        <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
          Services
        </Link>
        <Link href="/booking" className="text-gray-700 hover:text-blue-600 transition">
          Booking
        </Link>
        <Link href="/payment" className="text-gray-700 hover:text-blue-600 transition">
          Payment
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
          Contact
        </Link>
      </div>

    </nav>
  );
}