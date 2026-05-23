'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showScheduler, setShowScheduler] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)

  const { error } = await supabase.from('leads').insert([
    {
      full_name: fullName,
      email,
      phone,
    },
  ])

  setLoading(false)

  if (!error) {
  setSuccess(true)
  setShowScheduler(true)
  } else {
    alert('Something went wrong.')
  }
}

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transform Your Life With Purpose-Driven Coaching
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Gain clarity, confidence, and direction through personalized coaching
          programs designed to help you unlock your full potential.
        </p>
      </section>

      {/* Lead Capture Form */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">

          <h2 className="text-2xl font-semibold text-center mb-6">
            Enroll for Complimentary Session
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl text-lg hover:opacity-90"
            >
              {loading
                ? 'Submitting...'
                : 'Enroll for Complimentary Session'}
            </button>

          </form>

          {success && (
            <p className="text-green-600 text-center mt-4">
              Details submitted successfully.
            </p>
          )}
          {showScheduler && (
  <div className="mt-8 text-center">

    <h3 className="text-2xl font-semibold mb-4">
      Thank You!
    </h3>

    <p className="text-gray-600 mb-6">
      Your details have been submitted successfully.
      Please book your complimentary coaching session below.
    </p>

    <a
      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1MWlM8C0Cit_M_nY4Qr1a6bzUy11ruNdt3LtSEGnQ1HQFIknrRi9CZ47gdW7gda8VWki3HOJVC"
      target="_blank"
      className="inline-block bg-black text-white px-8 py-4 rounded-xl"
    >
      Schedule Your Session
    </a>

  </div>
)}

        </div>
      </section>

    </main>
  )
}