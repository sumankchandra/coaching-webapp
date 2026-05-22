"use client";

import { useState } from "react";
import { supabase } from "./lib/supabaseClient";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    const { error } = await supabase.from("leads").insert({
      name,
      email,
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setName("");
      setEmail("");

      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 1500);
    } else {
      alert("Error saving data");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Elevate Your Leadership Presence
        </h1>

        <p className="text-slate-300 mb-8">
          Executive coaching for mid-career professionals
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold"
        >
          Book a Session
        </button>
      </section>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-2xl w-[90%] max-w-md">

            <h2 className="text-xl font-bold mb-4">
              Book Discovery Session
            </h2>

            <input
              className="w-full border p-2 mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border p-2 mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-black text-white px-4 py-2 rounded w-full"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {success && (
              <p className="text-green-600 mt-3">
                Submitted successfully!
              </p>
            )}

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-sm text-gray-500"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </main>
  );
}