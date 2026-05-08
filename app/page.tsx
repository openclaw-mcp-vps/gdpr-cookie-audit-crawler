export default function Home() {
  const faqs = [
    {
      q: "Which regulations does this cover?",
      a: "The crawler checks for GDPR (EU), ePrivacy Directive, and common consent management patterns used across Europe and beyond."
    },
    {
      q: "How does the crawler work?",
      a: "A headless browser visits your pages, intercepts all cookies set before and after consent, categorizes them (analytics, marketing, functional), and flags any that fire without consent."
    },
    {
      q: "Can I white-label the reports?",
      a: "Yes. Reports export as PDF or JSON and can be branded with your agency or client logo — perfect for web agencies managing multiple sites."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Audit your site&apos;s cookie compliance{" "}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Crawl any website to detect every cookie, categorize it by purpose,
          verify your consent banner, and generate a ready-to-share GDPR report
          — in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $19 / mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">
          No credit card required for the free trial &middot; Cancel anytime
        </p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {["Cookie Detection", "Consent Check", "Risk Scoring", "PDF Reports"].map((f) => (
            <div
              key={f}
              className="rounded-lg bg-[#161b22] border border-[#30363d] px-4 py-3 text-sm text-[#c9d1d9]"
            >
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-[#161b22] border border-[#30363d] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-sm text-[#6e7681] mb-6">per month</p>
          <ul className="text-sm text-[#8b949e] space-y-2 mb-8 text-left">
            {[
              "Unlimited crawls",
              "Up to 10 domains",
              "Automated monthly scans",
              "PDF & JSON export",
              "White-label reports",
              "Email alerts on violations"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
              <p className="font-semibold text-[#c9d1d9] mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} GDPR Cookie Audit Crawler. All rights reserved.
      </footer>
    </main>
  );
}
