import Link from "next/link";

export default function WhoseDefinitionOfSuccessPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm md:text-base font-medium">

          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>

          <Link href="/#services" className="hover:text-gray-600">
            Services
          </Link>

          <Link href="/#about" className="hover:text-gray-600">
            About
          </Link>

          <Link
            href="/insights"
            className="text-indigo-900 font-semibold"
          >
            Insights
          </Link>

          <Link href="/#testimonials" className="hover:text-gray-600">
            Testimonials
          </Link>

          <Link href="/#contact" className="hover:text-gray-600">
            Contact
          </Link>

        </div>
      </nav>

      {/* Article Header */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm font-semibold tracking-wider text-indigo-900 uppercase mb-5">
            Purpose & Meaningful Living
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Whose Definition of Success Are You Living?
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            A reflection on success, purpose, and the courage to define a life
            that is truly your own.
          </p>

          <div className="mt-6 flex justify-center flex-wrap gap-4 text-sm text-slate-500">
            <span>August 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

        </div>
      </section>

      {/* Article */}
      <article className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">

          {/* Introduction */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-7">
            Long before we're old enough to question it, most of us inherit a
            script for success: study hard, get good grades, land a good job,
            earn more, move up, buy a house, raise a family, achieve, get
            recognized.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-7">
            Somewhere along the way, we learn to equate "more" with
            "better," and "better" with "success."
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            None of these goals are wrong — education, financial security,
            career, and family all matter. The real question isn't whether
            they're valuable. It's <em>who decided</em> they should define
            your success. Are you actually driving your own life?
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            The Uber Driver Problem
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Picture an Uber driver. They're fully in control — choosing the
            route, changing lanes, stopping at lights, getting the passenger
            safely to the destination.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            But whose destination is it?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Many of us live the same way. We work hard, hit milestones, move
            from one achievement to the next — but a lot of those destinations
            were chosen by someone else: parents, teachers, employers, society,
            social media, family expectations. Because we love or depend on
            these people and institutions, we often accept their definition of
            success without ever consciously choosing it ourselves.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            We get the promotion. We buy the house. We collect the recognition.
            Then, sometimes years later, a quiet question surfaces:
            <em> Is this actually the life I wanted?</em>
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            Success Without Ownership
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Success isn't just about reaching a destination — it's about
            knowing why you chose it. You can achieve something the world calls
            a huge success and still feel oddly disconnected from it. You can
            also make a choice that looks ordinary to everyone else and feel
            deeply meaningful to you.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Psychological research on meaning in life points to three
            ingredients: feeling your life matters, having a sense of
            direction, and being able to make sense of how the pieces fit
            together. That's very different from simply accumulating
            achievements.
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-700 p-6 md:p-8 rounded-lg mb-12">
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
              The real question: does the life you're building make sense to
              <em> you</em> — not your parents, not your colleagues, not your
              social media audience?
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            The Cost of Someone Else's Definition
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Bronnie Ware, an Australian palliative care nurse, spent years
            listening to the regrets of the dying. The most common one:
            wishing they'd had the courage to live a life true to themselves,
            rather than the life others expected of them.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            We don't need to wait for a final chapter to ask that question. We
            can ask it now — and the answer doesn't require blowing up your
            life. You don't have to quit your job, sell your house, or reinvent
            yourself overnight. Course correction often starts small.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            Success Has More Than One Dimension
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Maybe success isn't a single destination — it's more like a wheel:
            career, financial security, family and relationships, health,
            learning, creativity, contribution, spirituality, time, inner
            peace, and purpose.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            The weight you give each spoke doesn't have to stay the same
            forever. Some seasons call for more focus on career; others pull
            you toward family, creativity, or contribution. The goal isn't
            perfect balance every day — it's <em>alignment over time.</em>
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            Small Choices, Real Change
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Someone who loved painting as a kid doesn't need to quit their job
            to become an artist — they can just start painting again, one
            evening a week. Someone who fills every weekend with a social life
            that looks good online might actually be craving one honest
            conversation with a close friend.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            The shift doesn't need to look impressive from the outside. It just
            needs to feel more authentic from the inside — and that's where
            purpose does its work. Purpose isn't a single grand mission waiting
            to reveal itself. It grows out of what matters to you, what
            energizes you, what strengths you want to use, and who you want to
            become.
          </p>

          <div className="my-10 bg-slate-50 rounded-2xl p-7 md:p-9 text-center">
            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
              Purpose gives direction.
              <br />
              Values give you the compass.
              <br />
              Action turns intention into reality.
              <br />
              Reflection tells you whether you're still headed the right way.
            </p>
          </div>

          {/* Final Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            So, Whose Definition Are You Living?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            The real question isn't "Am I successful?" It's "Am I successful
            by a definition I consciously chose?"
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            And maybe the deeper one: if you keep living exactly as you are
            for the next five or ten years, will you be proud of the life
            you're building?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            You don't need every answer today. But you owe yourself the pause —
            the moment to step out of autopilot and ask whether you're chasing
            what you truly want, or what you simply learned to want.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Because life isn't only about reaching destinations. It's about
            making sure the journey — and the destination — actually belongs
            to you.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            You have one life. Maybe it's time to stop being the driver who
            follows someone else's map.
          </p>

          {/* Closing Statement */}
          <div className="bg-slate-800 text-white rounded-2xl p-8 md:p-10 text-center mb-12">
            <p className="text-2xl md:text-3xl font-serif font-semibold">
              Take the wheel. Choose your destination.
            </p>
          </div>

          {/* Coaching Connection */}
          <div className="border-t border-slate-200 pt-10 text-center">

            <p className="text-lg text-gray-700 leading-relaxed">
              If you're at a point in life where you're questioning what
              success, purpose, or your next chapter means to you, coaching can
              provide a structured space to pause, reflect, gain clarity, and
              turn insight into meaningful action.
            </p>

            <Link
              href="/#contact"
              className="inline-block mt-7 bg-slate-800 text-white px-7 py-3 rounded-xl hover:bg-slate-700 transition"
            >
              Explore Coaching
            </Link>

          </div>

        </div>
      </article>

      {/* Back to Insights */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center">

          <Link
            href="/insights"
            className="text-indigo-900 font-semibold hover:text-indigo-700"
          >
            ← Back to All Insights
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-xl font-semibold">
            Anvesha Coaching
          </h3>

          <p className="mt-3 text-gray-300">
            Helping professionals gain clarity, live with purpose, and
            create a meaningful future.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-6 hover:text-gray-300"
          >
            Contact
          </Link>

          <p className="mt-6 text-sm text-gray-400">
            © {new Date().getFullYear()} Anvesha Coaching. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}