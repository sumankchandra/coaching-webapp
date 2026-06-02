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

const { error } = await supabase.from("leads").insert([
  {
    full_name: fullName,
    email,
    phone,
    source: "website",
  },
]);

if (!error) {
  await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: fullName,
      email,
      phone,
    }),
  });
}

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
      <nav className="sticky top-0 bg-white border-b z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8">
    <a href="#home" className="hover:text-gray-600">
      Home
    </a>

    <a href="#services" className="hover:text-gray-600">
      Services
    </a>

    <a href="#about" className="hover:text-gray-600">
      About
    </a>

    <a href="#testimonials" className="hover:text-gray-600">
      Testimonials
    </a>

    <a href="#contact" className="hover:text-gray-600">
      Contact
    </a>
  </div>
</nav>

      {/* Hero Section */}
      <section
        id="home"
        className="px-6 py-20 max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transform Your Life With Purpose-Driven Coaching
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Gain clarity, confidence, and direction through personalized coaching
          programs designed to help you unlock your full potential.
        </p>
      </section>
      <section
  id="services"
  className="px-6 pb-16"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-4">
      Coaching Services
    </h2>

    <p className="text-center text-gray-600 mb-10">
      Choose the coaching option that best fits your goals.
    </p>

    
      <div className="grid md:grid-cols-3 gap-8">

      {/* Discovery Session */}
<div className="bg-white border rounded-2xl p-8 shadow-sm text-center flex flex-col h-full">
  <h3 className="text-2xl font-semibold mb-3">
    Discovery Session
  </h3>

  <p className="text-gray-600 mb-6">
    Gain clarity and actionable next steps in one focused session.
  </p>

  <p className="text-4xl font-bold mb-6">
    $99
  </p>

  <div className="mt-auto">
    <a
      href="https://buy.stripe.com/14A6oG0rU5HK8SU1hR6kg01"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white px-6 py-3 rounded-xl"
    >
      Pay Now
    </a>
  </div>
</div>

      {/* 4-Week Program */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm text-center flex flex-col h-full">
        <h3 className="text-2xl font-semibold mb-3">
          4-Week Coaching Program
        </h3>

        <p className="text-gray-600 mb-6">
          Build momentum and achieve meaningful progress in 4 weeks.
        </p>

        <p className="text-4xl font-bold mb-6">
          $499
        </p>

        <a
          href="https://buy.stripe.com/8x228q5Me6LO8SU6Cb6kg02"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl"
        >
          Pay Now
        </a>
      </div>

      {/* Executive Coaching */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm text-center">
        <h3 className="text-2xl font-semibold mb-3">
          90-Day Transformation Program
        </h3>

        <p className="text-gray-600 mb-6">
            Create lasting personal and professional transformation in 90 days.
        </p>

        <p className="text-4xl font-bold mb-6">
          $1499
        </p>

        <a
          href="https://buy.stripe.com/6oUaEW1vYfik7OQ7Gf6kg03"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl"
        >
          Pay Now
        </a>
      </div>

    </div>
  </div>
</section>
{/* About Section */}
<section
  id="about"
  className="px-6 py-16 bg-gray-50"
>
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-8">
      About Suman
    </h2>
    <div className="flex flex-wrap justify-center gap-3 mb-8">
  <span className="bg-gray-100 px-4 py-2 rounded-full">
    25+ Years Experience
  </span>

  <span className="bg-gray-100 px-4 py-2 rounded-full">
    Leadership Development
  </span>

  <span className="bg-gray-100 px-4 py-2 rounded-full">
    Career Growth
  </span>

  <span className="bg-gray-100 px-4 py-2 rounded-full">
    Executive Presence
  </span>

  <span className="bg-gray-100 px-4 py-2 rounded-full">
    Purpose-Driven Coaching
  </span>
</div>
<p className="text-xl font-medium text-center mb-8">
  Hi, I'm Suman. My mission is to help professionals gain clarity,
  build confidence, and create meaningful personal and professional
  transformation.
</p>
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <p className="text-lg text-gray-700 mb-4">
        I bring over 25 years of experience leading technology,
        digital transformation, product delivery, and organizational
        change initiatives across global organizations.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Throughout my career, I have helped individuals and teams
        navigate complexity, build confidence, improve leadership
        effectiveness, and achieve meaningful outcomes.
      </p>

      <p className="text-lg text-gray-700">
        My coaching approach combines practical experience,
        structured guidance, accountability, and a deep commitment
        to helping people unlock their potential and create lasting
        personal and professional growth.
      </p>

    </div>
  </div>
</section>
      <section
  id="contact"
  className="px-6 pb-20"
>
      
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