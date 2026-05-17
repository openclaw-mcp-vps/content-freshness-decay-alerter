export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SEO Content Monitoring
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Alert When Your Content Goes Stale
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Google Search Console and Analytics to track content freshness scores. Get email alerts before stale content tanks your rankings.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $12/mo
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Google Search Console</span>
          <span>✓ GA4 Integration</span>
          <span>✓ Email Alerts</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep content fresh</p>
          <ul className="space-y-3 text-sm mb-8">
            {[
              "Unlimited content pages monitored",
              "Google Search Console integration",
              "Google Analytics 4 integration",
              "Freshness decay scoring",
              "Email alerts on threshold breach",
              "Weekly digest reports",
              "Ranking drop detection",
              "Traffic decline alerts"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does content freshness scoring work?</h3>
            <p className="text-[#8b949e] text-sm">We combine content age, ranking position changes, and traffic trends into a single freshness score. When the score drops below your threshold, you get an alert.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which Google APIs do I need to connect?</h3>
            <p className="text-[#8b949e] text-sm">You connect Google Search Console for ranking data and Google Analytics 4 for traffic data. Setup takes under 5 minutes with OAuth.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How often is content performance checked?</h3>
            <p className="text-[#8b949e] text-sm">Background jobs run daily to pull fresh data from Google APIs. You can also trigger manual checks anytime from your dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pt-8 border-t border-[#30363d]">
        © {new Date().getFullYear()} Content Freshness Decay Alerter. All rights reserved.
      </footer>
    </main>
  );
}
