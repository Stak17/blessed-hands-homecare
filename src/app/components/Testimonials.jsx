"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Grace Nakato",
      feedback:
        "Care Axis Agency provided exceptional support to my mother. The nurses were kind, professional, and attentive to every need.",
    },
    {
      name: "John Kato",
      feedback:
        "The postnatal care service was amazing! The nurse helped me and my baby adjust smoothly. Highly recommend!",
    },
    {
      name: "Susan Achieng",
      feedback:
        "I hired Care Axis Agency for disability support for my brother. They were compassionate and reliable 24/7.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full"
            >
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="text-blue-600 mr-2 mt-1" />
                <p className="text-gray-700 flex-1">{testi.feedback}</p>
                <FaQuoteRight className="text-blue-600 ml-2 mt-1" />
              </div>
              <p className="mt-auto text-right text-sm font-semibold text-blue-700">
                — {testi.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}