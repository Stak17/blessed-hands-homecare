"use client";

import { FaPhone, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-100 via-white to-green-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Contact Care Axis Agency
        </h1>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
          Reach out anytime. We are ready to provide compassionate care and support, answer your questions, and assist with bookings.
        </p>
      </section>

      {/* MAIN CONTACT GRID */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT: Contact Info & Payment */}
          <div className="space-y-6">

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-2xl transition">
                <FaPhone className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="font-semibold text-blue-800">Phone</h3>
                  <p className="text-gray-700">0791 263 310</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-2xl transition">
                <FaWhatsapp className="text-green-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-blue-800">WhatsApp</h3>
                  <a
                    href="https://wa.me/256791263310"
                    target="_blank"
                    className="text-green-600"
                  >
                    0791 263 310
                  </a>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-2xl transition">
                <FaEnvelope className="text-pink-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-blue-800">Email</h3>
                  <a
                    href="mailto:blessedhandshomecare34@gmail.com"
                    className="text-blue-600"
                  >
                    blessedhandshomecare34@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-2xl transition">
                <FaClock className="text-yellow-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-blue-800">Service Hours</h3>
                  <p className="text-gray-700">Calls: 8:00 AM – 9:00 PM</p>
                  <p className="text-gray-700">Services: Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Payment Methods</h3>
              <ul className="text-gray-700 space-y-2">
                <li>MTN Mobile Money: 0791 263 310</li>
                <li>Airtel Money: 0702 171 661</li>
                <li>Cash & Bank Transfer Accepted</li>
                <li>Online payments available upon request</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Contact Form & Map */}
          <div className="space-y-6">

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Send Us a Message</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Service Area</h2>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                Google Map Placeholder
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Care Axis Agency provides services across Uganda.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}