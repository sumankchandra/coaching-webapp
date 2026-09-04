import Link from "next/link";

const insights = [
  {
    category: "PURPOSE VS. CAREER",
    title: "Your Job Isn't Your Purpose — But It Can Be Part of It",
    description:
      "A reflection on the difference between a career and a meaningful life, and why your job can be an important part of your purpose without becoming the definition of it.",
    date: "September 2026",
    readTime: "8 min read",
    href: "/insights/your-job-isnt-your-purpose",
  },
  {
    category: "PURPOSE & SUCCESS",
    title: "Whose Definition of Success Are You Living?",
    description:
      "A reflection on success, expectations, purpose, and the courage to create a life that is meaningful on your own terms.",
    date: "August 2026",
    readTime: "7 min read",
    href: "/insights/whos-definition-of-success",
  },
  {
    category: "PERSONAL TRANSFORMATION",
    title:
      "From Dark Green to Clear Blue: What My Swimming Pool Taught Me About Transforming Your Life",
    description:
      "A personal story about what a difficult pool-cleaning journey revealed about clarity, coaching, patience, and meaningful transformation.",
    date: "July 2026",
    readTime: "8 min read",
    href: "/insights/from-dark-green-to-clear-blue",
  },
];

export default function InsightsPage() {
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

      {/* Page Header */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-serif font-bold tracking-[0.12em] text-indigo-900">
            ANVESHA
            <span className="ml-2 text-xl md:text-2xl font-sans font-medium tracking-normal text-slate-600">
              Coaching
            </span>
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800">
            Insights
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Reflections, stories, and practical perspectives to help you
            gain clarity, reconnect with what matters most, and create a
            meaningful future.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight) => (
              <article
                key={insight.href}
                className="group bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Category */}
                <p className="text-sm font-semibold text-indigo-900 uppercase tracking-wider">
                  {insight.category}
                </p>

                {/* Article Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-800 leading-tight group-hover:text-indigo-900 transition-colors">
                  {insight.title}
                </h2>

                {/* Description */}
                <p className="mt-5 text-lg text-gray-700 leading-relaxed">
                  {insight.description}
                </p>

                {/* Date / Reading time */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span>{insight.date}</span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                </div>

                {/* Read Button */}
                <div className="mt-auto pt-8">
                  <Link
                    href={insight.href}
                    className="inline-block bg-slate-800 text-white px-7 py-3 rounded-xl hover:bg-slate-700 transition"
                  >
                    Read the Insight →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future Insights Message */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-t border-slate-200 pt-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              More reflections and insights on purpose, transformation,
              meaningful living, and creating a future aligned with what
              matters most will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-slate-800">
            A Journey of Discovery
          </h2>

          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Anvesha means “the seeker”—a journey of exploring deeper
            questions, discovering what matters most, and creating a future
            aligned with your values.
          </p>
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