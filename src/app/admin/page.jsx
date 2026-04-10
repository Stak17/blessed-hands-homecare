/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  // ✅ AUTH CHECK
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");

    if (!isAuth) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // ✅ FETCH BOOKINGS ONLY IF AUTHORIZED
  useEffect(() => {
    if (!authorized) return;

    fetch("/api/getBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [authorized]);

  if (!authorized) return null;

  return (
    <main className="p-10 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">
          Admin Dashboard – Bookings
        </h1>

        {/* ✅ LOGOUT BUTTON */}
        <button
          onClick={() => {
            localStorage.removeItem("adminAuth");
            window.location.href = "/admin/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

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

              {b.message && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Message:
                  </p>
                  <p className="text-gray-800">{b.message}</p>
                </div>
              )}

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