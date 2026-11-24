
import Link from "next/link";
import ArticleComments from "@/components/ArticleComments";

export default function ThanksgivingLetterPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-4 text-sm font-medium md:gap-8 md:text-base">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>

          <Link href="/#services" className="hover:text-gray-600">
            Services
          </Link>

          <Link href="/#about" className="hover:text-gray-600">
            About
          </Link>

          <Link href="/insights" className="font-semibold text-indigo-900">
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
      <header className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Back to Insights
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-900">
            Purpose & Meaningful Living
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
            A Thanksgiving Letter to an Uncertain World
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            A reflection on finding purpose, meaning, and the courage to
            transform ourselves in an increasingly uncertain world.
          </p>

          <div className="mt-8 border-l-4 border-slate-400 pl-5">
            <p className="font-semibold text-slate-800">
              Suman Chandra
            </p>

            <p className="mt-1 text-slate-600">
              Founder, Anvesha Coaching
            </p>

            <p className="mt-3 text-sm text-slate-500">
              November 2026 · 5 min read
            </p>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-lg leading-8 text-gray-700">
          <p>
            Dear uncertain world — I know that’s an unusual way to begin,
            but it’s exactly where my mind has been. Every year, right
            before Thanksgiving, I find a quiet half hour before the house
            fills with noise and gratitude lists — the one stretch of the
            season where I’m not performing thankfulness for anyone, just
            sitting with it. This year, in that quiet, this letter is what
            came: thinking less about what I already have, and more about
            what so many of us, myself included, are still becoming —
            especially given how unsettled you feel right now.
          </p>

          <p className="mt-6">
            Because it does feel unsettled. Artificial intelligence is
            reshaping how we work faster than most of us can process, with
            real promise and real reasons for concern tangled together.
            Wars and political fractures touch lives far beyond their
            borders. Economies wobble in ways that ripple into ordinary
            households. No credible expert will tell you with confidence
            exactly where any of this leads — only forecasts, and forecasts
            have always been fallible.
          </p>

          <p className="mt-6">
            Here’s what I’d gently offer, though: every generation has
            believed its moment was unprecedented. The people who lived
            through the printing press, industrialization, and the first
            machines that could “think” all felt the ground shifting
            beneath them too. That doesn’t make today’s uncertainty any
            less real. It does mean we’re not the first humans to have to
            find our footing without a map — and that others did find it.
          </p>

          <p className="mt-6">
            I remain a realist, not a naive optimist, but I’m genuinely
            confident that of the roughly eight billion people sharing
            this planet, enormous numbers of them are quietly trying to act
            responsibly — thinking not only of their own gain but of the
            people and the world their choices touch. That instinct, in
            its simplest form, is what makes us good to one another. And
            here is something worth sitting with: when you live only for
            yourself, satisfaction tends to be thin and temporary. When
            you let your work and your choices serve something beyond
            yourself, the fulfillment that follows tends to last.
          </p>

          <p className="mt-6">
            This is true no matter your title. A dishwasher, a receptionist,
            a doctor, a teacher, a police officer, an engineer — none of
            them are ultimately doing their work only for themselves.
            Whatever your job looks like in the years ahead, however
            technology reshapes its shape or its name, that underlying
            truth doesn’t change: you are still doing something that
            reaches other people. And when you can genuinely feel the
            relief or joy of the person your work touches — whether they’re
            sitting beside you or on the other side of the world — your
            own sense of meaning expands well past your own four walls.
          </p>

          <p className="mt-6">
            That expansion isn’t just a nice idea to me — I’ve watched it
            play out across continents, because I’ve had to. Nearly three
            decades of leading teams across India, Australia, and the
            United States taught me that the shape of a transformation
            changes from place to place, but the courage it takes never
            does. A manager in Mumbai quietly rebuilding her confidence
            after a setback, and an executive in New Jersey quietly
            reinventing himself after decades in one industry, are climbing
            the same mountain in different weather, in different languages.
            Transformation, like purpose, travels well. It asks the same
            thing of everyone, everywhere: not certainty, just the
            willingness to begin, and to keep climbing until you reach
            the top.
          </p>

          <p className="mt-6">
            This is part of why I have so much respect for the work of
            coaching, whatever title it goes by. Many believe that even
            managers, in the years ahead, will be asked to coach more than
            track. A good coach doesn’t hand you answers. They help you
            use skills you already have, in your own specific context, to
            uncover energy and potential you may not have fully noticed
            in yourself — the kind of capability that was always there,
            just waiting to be seen clearly.
          </p>

          <p className="mt-6">
            The world will stay unfair. It will never be perfect. People
            will keep carrying pain from every direction, and that won’t
            disappear just because the tools around us get smarter. But
            you can still find a guide for the road ahead — your own
            conscience, a friend you trust completely, or a coach who
            understands the terrain — and with them, find not just a way
            through the pain, but a way to transform because of what
            you’ve lived through, not despite it.
          </p>

          <p className="mt-6">
            So this Thanksgiving, here is my wish for you: that you find
            the courage to begin whatever transformation is quietly
            calling you. Maybe it’s finding work that still fits who you
            are as the world around that work changes. Maybe it’s becoming
            the parent you want to be. Maybe it’s finally setting down a
            mask you’ve worn for years, or letting yourself be comfortably,
            unguardedly seen. Maybe it’s pursuing a talent you’ve doubted
            for far too long, or growing into a better version of yourself
            without losing the character that makes you you.
          </p>

          <p className="mt-6">
            Whatever it is, may this season find you a little more
            grateful, a little more hopeful, and quietly, steadily,
            already becoming. Happy Thanksgiving — to you, and to
            everyone still finding their way.
          </p>
        </div>
        <ArticleComments articleSlug="a-thanksgiving-letter-to-an-uncertain-world" />
      </article>

      {/* Closing Reflection */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-900">
            A Reflection for You
          </p>

          <h2 className="mt-5 text-3xl font-serif font-semibold leading-tight text-slate-800">
            What transformation is quietly calling you?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            You don’t need to have all the answers or know exactly where
            the road leads. Sometimes, finding the courage to begin is
            enough.
          </p>

          <Link
            href="/insights"
            className="mt-8 inline-block rounded-xl bg-slate-800 px-7 py-3 text-white transition hover:bg-slate-700"
          >
            Explore More Insights
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-xl font-semibold">
            Anvesha Coaching
          </h3>

          <p className="mt-3 text-gray-300">
            Helping professionals gain clarity, live with purpose, and
            create a meaningful future.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link href="/insights" className="hover:text-gray-300">
              Insights
            </Link>

            <Link href="/#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          <p className="mt-7 text-sm text-gray-400">
            © {new Date().getFullYear()} Anvesha Coaching. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
