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
   environment: window.location.origin,
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
      <nav className="sticky top-0 bg-white border-b shadow-sm z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm md:text-base font-medium">
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
  className="px-6 py-24"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

    {/* Left Column */}
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-800">
        Transform Your Life With Purpose-Driven Coaching
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed">
        Gain clarity, confidence, and direction through personalized coaching
        programs designed to help you unlock your full potential.
      </p>

      <p className="mt-4 text-slate-600 font-medium">
        Executive Coach • Leadership Mentor • Transformation Advisor
      </p>

      <a
        href="#contact"
        className="inline-block mt-8 bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition"
      >
        Book Complimentary Session
      </a>
    </div>

    {/* Right Column */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/coach-hero.jpg"
        alt="Suman Chandra"
        className="w-full max-w-[280px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
      />
    </div>

  </div>
</section>
      <section
  id="services"
  className="px-6 py-20"
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
<div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col h-full">
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
      className="inline-block bg-slate-800 text-white hover:bg-slate-700 transition px-6 py-3 rounded-xl"
    >
      Pay Now
    </a>
  </div>
</div>

      {/* 4-Week Program */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col h-full">
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
          className="inline-block bg-slate-800 text-white hover:bg-slate-700 transition px-6 py-3 rounded-xl"
        >
          Pay Now
        </a>
      </div>

      {/* Executive Coaching */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
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
          className="inline-block bg-slate-800 text-white hover:bg-slate-700 transition px-6 py-3 rounded-xl"
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
  className="px-6 py-20 bg-slate-50"
>
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-8">
      About Suman
    </h2>
    <div className="flex flex-wrap justify-center gap-3 mb-8">
  <span className="bg-white border px-4 py-2 rounded-full shadow-sm">
    25+ Years Experience
  </span>

  <span className="bg-white border px-4 py-2 rounded-full shadow-sm">
    Leadership Development
  </span>

  <span className="bg-white border px-4 py-2 rounded-full shadow-sm">
    Career Growth
  </span>

  <span className="bg-white border px-4 py-2 rounded-full shadow-sm">
    Executive Presence
  </span>

  <span className="bg-white border px-4 py-2 rounded-full shadow-sm">
    Purpose-Driven Coaching
  </span>
</div>
<p className="text-2xl font-medium text-center text-slate-800 mb-10">
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
{/* Testimonials Section */}
<section
  id="testimonials"
  className="px-6 py-20"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-4">
      Testimonials
    </h2>

    <p className="text-center text-gray-600 mb-10">
      Feedback from professionals and leaders.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="italic text-gray-700 mb-4">
          "Suman has a unique ability to listen deeply, ask powerful questions, and help people find clarity and direction."
        </p>

        <p className="font-semibold">
          Technology Leader
        </p>
      </div>

      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="italic text-gray-700 mb-4">
          "His structured approach and genuine commitment helped me gain confidence and take meaningful action toward my goals."
        </p>

        <p className="font-semibold">
          Program Manager
        </p>
      </div>

      <div className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="italic text-gray-700 mb-4">
          "Working with Suman provided valuable insights, accountability, and practical guidance that made a real difference."
        </p>

        <p className="font-semibold">
          Business Professional
        </p>
      </div>

    </div>

  </div>
</section>
<section
  id="contact"
  className="px-6 pb-20 scroll-mt-24"
>
      
        <div className="max-w-xl mx-auto bg-slate-50 rounded-2xl p-10 shadow-sm">

          <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
            Enroll for Complimentary Session
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-800 text-white hover:bg-slate-700 transition py-4 rounded-xl text-lg hover:opacity-90"
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
      className="inline-block bg-slate-800 text-white hover:bg-slate-700 transition px-8 py-4 rounded-xl"
    >
      Schedule Your Session
    </a>

  </div>
)}

        </div>
      </section>
{/* Footer */}
<footer className="bg-slate-900 text-white py-12 mt-16">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h3 className="text-xl font-semibold mb-4">
      Suman Chandra Coaching
    </h3>

    <p className="text-gray-300 mb-4">
      Helping professionals gain clarity, confidence, and meaningful transformation.
    </p>
<p className="mb-6 text-xl font-medium">
  Ready to start your transformation journey?
</p>
    <div className="flex justify-center gap-6 mb-6">

      <a
        href="https://www.linkedin.com/in/sumankchandra"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300"
      >
        LinkedIn
      </a>

    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sumankchandra@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-gray-300"
>
  Email
</a>
      <a
        href="#contact"
        className="hover:text-gray-300"
      >
        Contact
      </a>

    </div>

    <p className="text-sm text-gray-400">
      © {new Date().getFullYear()} Suman Chandra Coaching. All rights reserved.
    </p>

  </div>
</footer>
    </main>
  )
}