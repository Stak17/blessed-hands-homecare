"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("/api/getBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <main className="p-10 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-blue-800 mb-10 text-center tracking-wide">
        Admin Dashboard – Bookings
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-600 text-lg font-medium">
            No bookings yet
          </p>
        ) : (
          bookings.map((b, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
            >
              {/* Name */}
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {b.full_name}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">

                <p>
                  <span className="font-semibold text-gray-700">📞 Phone:</span>{" "}
                  <span className="text-gray-900">{b.phone}</span>
                </p>

                <p>
                  <span className="font-semibold text-gray-700">📧 Email:</span>{" "}
                  <span className="text-gray-900">{b.email}</span>
                </p>

                <p>
                  <span className="font-semibold text-gray-700">🛠 Service:</span>{" "}
                  <span className="text-blue-700 font-medium">
                    {b.service}
                  </span>
                </p>

                <p>
                  <span className="font-semibold text-gray-700">📅 Date:</span>{" "}
                  <span className="text-gray-900">{b.date}</span>
                </p>
              </div>

              {/* Message */}
              {b.message && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Message:
                  </p>
                  <p className="text-gray-800">{b.message}</p>
                </div>
              )}

              {/* Footer */}
              <p className="text-xs text-gray-500 mt-4 text-right">
                Submitted: {new Date(b.created_at).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}