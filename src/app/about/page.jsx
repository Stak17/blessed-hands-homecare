"use client";

import {
  FaHeart,
  FaUserTie,
  FaBalanceScale,
  FaCheckCircle,
  FaHandshake,
  FaUser,
} from "react-icons/fa";

export default function About() {
  const coreValues = [
    {
      icon: <FaHeart className="text-red-500 w-6 h-6 mr-2" />,
      title: "Compassion",
      desc: "We approach every client with genuine care, kindness, and empathy.",
    },
    {
      icon: <FaUserTie className="text-blue-500 w-6 h-6 mr-2" />,
      title: "Professionalism",
      desc: "Our caregivers maintain high standards of training and conduct.",
    },
    {
      icon: <FaBalanceScale className="text-green-500 w-6 h-6 mr-2" />,
      title: "Dignity",
      desc: "We respect the independence and privacy of every client.",
    },
    {
      icon: <FaCheckCircle className="text-yellow-500 w-6 h-6 mr-2" />,
      title: "Reliability",
      desc: "We deliver consistent and dependable care services.",
    },
    {
      icon: <FaHandshake className="text-purple-500 w-6 h-6 mr-2" />,
      title: "Integrity",
      desc: "We uphold honesty and ethical practices in all we do.",
    },
    {
      icon: <FaUser className="text-pink-500 w-6 h-6 mr-2" />,
      title: "Client-Centered Care",
      desc: "We tailor care to meet each client’s unique needs.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />,
      text: "Personalized care in the comfort of your home",
    },
    {
      icon: <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />,
      text: "Skilled and trained caregivers",
    },
    {
      icon: <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />,
      text: "Reliable and trustworthy services",
    },
    {
      icon: <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />,
      text: "Compassionate human-centered approach",
    },
    {
      icon: <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />,
      text: "Affordable and flexible care",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO / INTRO */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-100 via-white to-green-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          About Care Axis Agency
        </h1>
        <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
          Care Axis Agency provides compassionate, personalized home care services designed to
          support healing, dignity, and comfort in your own home. Our team of professionally trained
          nurses and caregivers assists patients recovering from illness, new mothers, elderly individuals, and more.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 px-6 md:px-20 bg-white/70 backdrop-blur-md">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-6">
          <p>
            We deliver personalized, one-to-one care services in the comfort of each client’s home.
          </p>
          <p>
            Services include skilled nursing, post-hospital recovery support, maternal care, elderly care,
            disability support, companionship, and assistance with daily living activities.
          </p>
          <p>
            Our goal is to bridge the gap between hospital treatment and home recovery, providing
            reliable, professional, and heart-centered care for every stage of healing.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">Mission</h2>
            <p className="text-gray-700">
              To provide compassionate and professional home care services that promote
              comfort, dignity, and quality living.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">Vision</h2>
            <p className="text-gray-700">
              To become a trusted leader in home care services known for kindness,
              excellence, and transforming home-based healing experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 md:px-20 bg-white/70 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 flex items-start gap-3 transition"
            >
              {item.icon}
              <div>
                <h3 className="font-semibold text-blue-700">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-green-100 to-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Why Choose Us
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/80 p-4 rounded-xl shadow"
            >
              {item.icon}
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}