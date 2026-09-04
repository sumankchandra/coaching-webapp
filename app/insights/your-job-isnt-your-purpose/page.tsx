import Link from "next/link";

export default function YourJobIsntYourPurposePage() {
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
            Purpose & Career
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Your Job Isn't Your Purpose — But It Can Be Part of It
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Your career can be important without being your purpose. Sometimes,
            finding meaning begins with understanding where your work belongs
            in the larger life you are building.
          </p>

          <div className="mt-6 flex justify-center flex-wrap gap-4 text-sm text-slate-500">
            <span>August 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-7">
            A few days ago, I heard about a young man from a middle-class
            Indian family who followed the roadmap he was handed about as well
            as anyone could: study hard, earn a good degree, build a career,
            support the family, get married, settle down. By his early
            thirties, he had all of it — an excellent education, a senior role
            at a major investment bank in New York, and the kind of financial
            success and recognition most people would call a dream.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-7">
            And yet, something was missing.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            After years of chasing one milestone after another, a quiet
            question started following him around: <em>What next?</em> Another
            promotion could answer that for a while. So could more money, a
            bigger title, more recognition. But none of them could answer the
            question underneath it: <em>What am I actually living for?</em>
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-7">
            At one point, he asked his parents what he should do next. Their
            answer was disarmingly honest: "We don't know. This is what we
            always hoped for, and you achieved it." They had handed him the
            only roadmap they had — one that ended at success, with nothing
            written for what comes after. He is still sitting with that blank
            page, and to his credit, he hasn't rushed to fill it with another
            milestone just to make the discomfort go away.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            Around the same time, I came across the story of a single mother in
            Queens, NY, raising two children on her own. She lost her retail
            job, and after months of searching, found another — lower pay, a
            90-minute commute each way, at a restaurant that was never anyone's
            dream job. She took it anyway, and there is real strength in that
            decision, not just necessity. There were bills to pay and children
            to feed, and some responsibilities don't wait politely for anyone
            to discover their passion first. Her paycheck didn't bring
            professional pride. It brought something that mattered just as
            much in that moment — the lights stayed on, and her kids ate. Her
            job wasn't her purpose either. But it plainly served one: hers, and
            theirs.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            A Job Is Important. Is It Your Purpose?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            These two lives could hardly look more different — one built on
            achievement, the other on necessity. But they point to the same
            quiet truth: a job and a purpose are not automatically the same
            thing. That doesn't make careers unimportant. Work can give us
            income, identity, intellectual stimulation, relationships, and a
            real way to contribute. But there's a difference between "my work
            matters to me" and "my work is the reason I'm here" — and most of us
            never pause long enough to notice which one we're actually living.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Think of oxygen. We cannot live without it, and yet breathing isn't
            why we're alive. Earning money can be essential, and building a
            career can matter enormously, without either one answering the
            deeper question of what makes your life meaningful.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            Where This Question Tends to Get Postponed
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Most of us don't consciously choose our definition of success — we
            absorb it, the way we absorb an accent, from parents, culture,
            school, and the people around us. None of that inheritance is wrong
            on its own. The trouble starts when we hit every one of its marks
            without ever asking whether it was the life we actually wanted.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            That question tends to arrive uninvited: after a promotion that
            somehow doesn't feel different, when the children leave home, after
            retirement, or on some ordinary Tuesday when a career you spent two
            decades building quietly stops feeling like enough. It's an
            uncomfortable moment. It's also, if you let it be, an invitation to
            actually look.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            So What Is Your Purpose?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Purpose rarely arrives as one grand mission. For one person it's
            raising a family with real presence. For another, it's mentoring,
            making things, serving a community, or a slow return to something
            spiritual they set aside years ago. It's specific to you, and it
            tends to shift as your life does.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            The more useful question usually isn't "what should I do with the
            rest of my life," but something smaller and more honest: what
            actually gives my life meaning, and how do I want that to show up
            in the life I'm already living?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Once you start asking that seriously, your relationship to your job
            can change without the job itself needing to. You might stay exactly
            where you are, but hold it differently — as something that funds a
            life outside of it, or as a place where your experience now lets
            you mentor someone else. You might make a change. Or you might
            simply notice you've been asking your job to give you something it
            was never built to provide.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            Your Job Can Be Part of Your Purpose
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            The answer isn't necessarily to leave. It's to understand where
            the job actually sits inside the larger life you're building. A
            career can be the enabler — the thing that funds, trains, and
            connects you toward something that matters more. It doesn't have to
            be the destination itself.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Getting there often just takes sitting with a few questions most
            of us avoid for years: <em>Whose definition of success have I
            actually been living?</em>{" "}
            <em>What matters to me now, not twenty years ago?</em>{" "}
            <em>
              If my job title disappeared tomorrow, what would still make my
              life meaningful?
            </em>
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-700 p-6 md:p-8 rounded-lg mb-12">
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
              Your job may be an important part of your life without having to
              be the whole story.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            None of these are easy questions. But a meaningful life was never
            about having no responsibilities or hard tradeoffs — the banker
            still has a career to run, the single mother still needs her
            paycheck every week. It's about growing steadily more conscious of
            why you're doing what you're doing, and what you actually want it
            to add up to.
          </p>

          {/* Final Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
            Your Job Doesn't Have to Be the Whole Book
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-7">
            Your job may be one of the most important chapters in that story.
            It doesn't have to be the whole book. Whether you're the executive
            weighing the next promotion or the mother counting the hours until
            payday, the invitation is the same one: to keep writing a life
            that's actually yours, one honest question at a time.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            The best moment to start usually isn't once everything is finally
            figured out — it's the quiet one, like a phone call with your
            parents, when you catch yourself wondering what's next. That's not
            a problem waiting to be solved. It's an invitation, finally, to
            answer in your own words.
          </p>

          {/* Closing Statement */}
          <div className="bg-slate-800 text-white rounded-2xl p-8 md:p-10 text-center mb-12">
            <p className="text-2xl md:text-3xl font-serif font-semibold">
              Your job can be part of your purpose. It doesn't have to be your
              whole purpose.
            </p>
          </div>

          {/* Coaching Connection */}
          <div className="border-t border-slate-200 pt-10 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              If you're at a point in life where you're questioning what your
              work, purpose, or next chapter means to you, coaching can provide
              a structured space to pause, reflect, gain clarity, and turn
              insight into meaningful action.
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