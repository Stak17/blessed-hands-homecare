"use client";

import { FaPhone, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-100 via-white to-green-100 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Contact Care Axis Agency
        </h1>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
          Reach out anytime. We are ready to provide compassionate care and support, answer your questions, and assist with bookings.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT: Contact Info & Payment */}
          <div className="space-y-6">

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaPhone className="text-blue-600 text-3xl" />,
                  title: "Phone",
                  content: "0791 263 310",
                  link: "tel:0791263310",
                  color: "text-blue-600",
                },
                {
                  icon: <FaWhatsapp className="text-green-500 text-3xl" />,
                  title: "WhatsApp",
                  content: "0791 263 310",
                  link: "https://wa.me/256791263310",
                  color: "text-green-600",
                },
                {
                  icon: <FaEnvelope className="text-pink-500 text-3xl" />,
                  title: "Email",
                  content: "careaxisagency@gmail.com",
                  link: "mailto:careaxisagency@gmail.com",
                  color: "text-blue-600",
                },
                {
                  icon: <FaClock className="text-yellow-500 text-3xl" />,
                  title: "Service Hours",
                  content: "Calls: 8:00 AM – 9:00 PM\nServices: Available 24/7",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-start gap-4 hover:shadow-2xl transition"
                >
                  {card.icon}
                  <div>
                    <h3 className="font-semibold text-blue-800">{card.title}</h3>
                    {card.link ? (
                      <a href={card.link} className={`text-gray-700 ${card.color}`}>
                        {card.content}
                      </a>
                    ) : (
                      <p className="text-gray-700 whitespace-pre-line">{card.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Payment Methods</h3>
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
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Service Area</h2>
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