"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Booking() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const waMessage = `Hello Blessed Hands Home Care, I would like to book a service:
Name: ${formData.full_name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message}`;

    const waLink = `https://wa.me/256791263310?text=${encodeURIComponent(
      waMessage
    )}`;

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking successful! You can also confirm via WhatsApp.");
        setFormData({
          full_name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          message: "",
        });
        window.open(waLink, "_blank");
      } else {
        alert(data.error || "Error submitting booking.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative"
      style={{
        backgroundImage: "url('/images/booking-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Booking Form</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a service</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Postnatal Care (Mother & Baby)">Postnatal Care</option>
                <option value="Home Nursing / Travel Nurse">Home Nursing</option>
                <option value="Disability Support">Disability Support</option>
                <option value="Post-Surgery Recovery Care">Post-Surgery Care</option>
                <option value="Chronic Illness Care">Chronic Illness Care</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 text-white py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-3xl" />
            <div>
              <h3 className="font-semibold text-blue-800">Book via WhatsApp</h3>
              <p className="text-gray-700">0791 263 310</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-3xl" />
            <div>
              <h3 className="font-semibold text-blue-800">Book via Email</h3>
              <p className="text-gray-700">careaxisagency@gmail.com</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl shadow text-gray-700">
            <p>
              <strong>Note:</strong> Advance booking is recommended, but emergency visits are available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}