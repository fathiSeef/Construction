import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "market",
    label: "Market · 6 min",
    image: "/assets/images/aboutpageimg.png",
    alt: "Dehiwala city and property market",
    title: "Why Dehiwala Remains a Strategic Residential Location",
    description:
      "Connectivity through Galle Road, Marine Drive and rail—combined with schools, hospitals and retail—supports broad owner-occupier and rental demand.",
    link: "/contact#contact",
    linkText: "Discuss the location",
  },
  {
    category: "buyer",
    label: "Buyer Guide · 7 min",
    image: "/assets/images/unit.jpg",
    alt: "Apartment interior and buyer checklist",
    title: "10 Checks Before Reserving a New Apartment",
    description:
      "Review title clarity, approvals, developer track record, construction quality, parking, maintenance and backup systems before committing funds.",
    link: "/faq#faq",
    linkText: "Open due-diligence FAQ",
  },
  {
    category: "investment",
    label: "Investment · 5 min",
    title: "Rental Yield Is Only Half the Investment Story",
    description:
      "Capital appreciation, vacancy risk, maintenance cost, financing expense and legal certainty should be evaluated together—not as isolated metrics.",
    link: "/investment",
    linkText: "Use ROI calculator",
    metric: "6–7%",
    metricLabel: "Indicative premium rental yield",
    icon: "chart",
  },
  {
    category: "buyer",
    label: "Buyer Guide · 4 min",
    title: "Completed, Near-Complete or Off-Plan?",
    description:
      "Each stage carries different pricing, choice, delay and completion risks. The right option depends on your risk tolerance and funding timeline.",
    link: "/contact#contact",
    linkText: "Request guidance",
    icon: "checks",
  },
  {
    category: "market",
    label: "Design · 5 min",
    image: "/assets/images/hero-building.jpg",
    alt: "Boutique apartment building",
    title: "The Boutique Advantage: Two Residences Per Floor",
    description:
      "Lower density can improve privacy, ventilation, noise control and the sense of ownership—qualities increasingly valued by family buyers.",
    link: "/residences",
    linkText: "View residences",
  },
  {
    category: "investment",
    label: "Finance · 8 min",
    title: "How to Read a Property Development Feasibility",
    description:
      "Look beyond headline profit: test land cost, construction assumptions, sales pace, contingency, interest and cash-flow timing under downside scenarios.",
    link: "/investment",
    linkText: "Explore investment case",
    metric: "20–25%",
    metricLabel: "Project IRR*",
    icon: "irr",
  },
];

function ChartIcon() {
  return (
    <svg className="h-9 w-9 text-[#e9c349]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19V5m0 14h16M7 15l3-4 3 2 5-7" />
    </svg>
  );
}

function ChecksVisual() {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <svg className="h-7 w-7 text-[#e9c349]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3l8 4v5c0 4.5-3.1 7.9-8 9-4.9-1.1-8-4.5-8-9V7l8-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4" />
        </svg>
        <p className="mt-9 text-xs font-semibold text-[#c8cbd2]">Legal clarity</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <svg className="h-7 w-7 text-[#e9c349]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 3h6l1 4h3v4H5V7h3l1-4zM8 11v8m8-8v8M6 19h12" />
        </svg>
        <p className="mt-9 text-xs font-semibold text-[#c8cbd2]">Build quality</p>
      </div>
    </div>
  );
}

function MetricVisual({ article }) {
  if (article.icon === "checks") {
    return (
      <div className="h-52 overflow-hidden bg-[#151a23] p-7">
        <ChecksVisual />
      </div>
    );
  }

  if (article.icon === "irr") {
    return (
      <div className="flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#11151d] via-[#1d222d] to-[#11151d] p-7">
        <div className="relative h-32 w-32 rounded-full border border-[rgba(233,195,73,.35)]">
          <div className="absolute inset-4 flex items-center justify-center rounded-full border border-[rgba(233,195,73,.18)] text-center">
            <div>
              <strong className="text-2xl text-[#e9c349]">{article.metric}</strong>
              <span className="block text-[9px] uppercase tracking-[1px] text-[#9ea3ae]">
                {article.metricLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-52 overflow-hidden bg-gradient-to-br from-[#242a36] to-[#0d1016] p-7">
      <div className="flex h-full flex-col justify-between rounded-xl border border-[rgba(233,195,73,.25)] bg-[rgba(233,195,73,.05)] p-5">
        <ChartIcon />
        <div>
          <span className="text-4xl font-bold text-[#f2eee5]">{article.metric}</span>
          <p className="mt-2 text-xs uppercase tracking-[1.4px] text-[#9ea3ae]">
            {article.metricLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  const [filter, setFilter] = useState("all");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const visibleArticles = articles.filter(
    (article) => filter === "all" || article.category === filter
  );

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <Helmet>
        <title>Insights | A&Y Consolidated</title>
        <meta
          name="description"
          content="Property, investment and construction insights from A&Y Consolidated."
        />
      </Helmet>

      <main id="blog" className="pt-[73px]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[rgba(233,195,73,.15)] px-6 py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(233,195,73,.13),transparent_34%),radial-gradient(circle_at_88%_75%,rgba(72,93,130,.15),transparent_38%)]" />

          <div className="relative mx-auto max-w-[1180px] text-center">
            <span className="inline-flex rounded-full border border-[rgba(233,195,73,.35)] bg-[rgba(233,195,73,.08)] px-4 py-2 text-[10px] font-bold uppercase tracking-[2.4px] text-[#e9c349]">
              A&Y Property Journal
            </span>

            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] text-[#f3efe5] sm:text-6xl lg:text-7xl">
              Intelligence for{" "}
              <span className="gold-gradient-text">
                Better Property Decisions.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-sm leading-7 text-[#bfc3cc] sm:text-base">
              Research-led perspectives on apartment living, construction
              quality, investment risk and the evolving residential market in
              Dehiwala and Greater Colombo.
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-[rgba(233,195,73,.25)] bg-[#141821] shadow-[0_22px_70px_rgba(0,0,0,.48)]">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[330px] overflow-hidden lg:min-h-[500px]">
                <img
                  src="/assets/images/hero-building.jpg"
                  alt="Modern apartment development"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[1.8px]">
                  <span className="rounded-full bg-[#e9c349] px-3 py-1.5 text-[#3c2f00]">
                    Featured
                  </span>
                  <span className="text-[#aeb2bd]">
                    Market Insight · 8 min read
                  </span>
                </div>

                <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-[#f4efe4] sm:text-4xl">
                  Why Apartment Demand Is Moving Beyond Central Colombo
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#b9bdc7]">
                  High urban land costs, improved suburban connectivity and
                  changing buyer priorities are reshaping residential demand.
                  Dehiwala combines city access with stronger value,
                  family-oriented space and established infrastructure.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5 text-center">
                  <div>
                    <strong className="block text-lg text-[#e9c349]">15%+</strong>
                    <span className="text-[10px] uppercase tracking-[1px] text-[#8e939f]">
                      Price growth
                    </span>
                  </div>
                  <div>
                    <strong className="block text-lg text-[#e9c349]">6–7%</strong>
                    <span className="text-[10px] uppercase tracking-[1px] text-[#8e939f]">
                      Rental yield
                    </span>
                  </div>
                  <div>
                    <strong className="block text-lg text-[#e9c349]">10 Units</strong>
                    <span className="text-[10px] uppercase tracking-[1px] text-[#8e939f]">
                      Boutique model
                    </span>
                  </div>
                </div>

                <a
                  href="#articles"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[1.5px] text-[#e9c349]"
                >
                  Explore the journal
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section id="articles" className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2.2px] text-[#e9c349]">
                  Latest Intelligence
                </span>
                <h2 className="font-display mt-2 text-3xl font-bold text-[#f2eee5] sm:text-4xl">
                  Articles & Guides
                </h2>
              </div>

              <div className="flex flex-wrap gap-2" aria-label="Filter articles">
                {[
                  ["all", "All"],
                  ["market", "Market"],
                  ["investment", "Investment"],
                  ["buyer", "Buyer Guide"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFilter(value)}
                    className={`rounded-full border px-4 py-2 text-[11px] font-bold transition-all ${
                      filter === value
                        ? "border-[#e9c349] bg-[#e9c349] text-[#3c2f00]"
                        : "border-[rgba(233,195,73,.25)] text-[#c6c6cb] hover:border-[#e9c349] hover:text-[#e9c349]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article) => (
                <article
                  key={article.title}
                  className="glass-panel overflow-hidden rounded-2xl"
                >
                  {article.image ? (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.alt}
                        className={`h-full w-full object-cover ${
                          article.title.includes("Boutique") ? "object-bottom" : ""
                        }`}
                      />
                    </div>
                  ) : (
                    <MetricVisual article={article} />
                  )}

                  <div className="p-6">
                    <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#e9c349]">
                      {article.label}
                    </div>

                    <h3 className="font-display mt-3 text-2xl font-bold leading-snug text-[#f2eee5]">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#aeb3be]">
                      {article.description}
                    </p>

                    {article.link.startsWith("/") ? (
                      <Link
                        to={article.link}
                        className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#e9c349] transition-colors hover:text-[#ffd659]"
                      >
                        {article.linkText}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-[10px] leading-5 text-[#767c88]">
              *Indicative figures are based on the project proposal assumptions
              and are not a guarantee of future returns. Independent legal and
              financial advice is recommended.
            </p>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="border-y border-[rgba(233,195,73,.14)] bg-[#0d1016] px-5 py-16 sm:px-8">
          <div className="glass-panel mx-auto grid max-w-[1100px] gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#e9c349]">
                Quarterly Briefing
              </span>

              <h2 className="font-display mt-3 text-3xl font-bold text-[#f2eee5] sm:text-4xl">
                Receive practical property intelligence—not sales noise.
              </h2>

              <p className="mt-4 max-w-[650px] text-sm leading-7 text-[#aeb3be]">
                Market updates, buyer checklists, construction milestones and
                investment explainers from the A&Y team.
              </p>
            </div>

            <form className="space-y-3" onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="blog-email">
                Email address
              </label>

              <input
                id="blog-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="h-12 w-full rounded-xl border border-[rgba(233,195,73,.22)] bg-[#10131a] px-4 text-sm text-white outline-none focus:border-[#e9c349]"
              />

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#e9c349] text-xs font-bold uppercase tracking-[1.5px] text-[#3c2f00] transition-all hover:bg-[#ffd659]"
              >
                Join Investor Briefing
              </button>

              {subscribed && (
                <p className="text-xs text-emerald-300">
                  Thank you. Your interest has been recorded.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Blog;
