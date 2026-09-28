import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// =========================================================
// BLOG ARTICLES
// =========================================================

const articles = [
  {
    category: "company",
    label: "Company · 5 min",
    image: "/assets/images/aboutpageimg.png",
    alt: "A&Y Consolidated company and development",
    title:
      "The A&Y Consolidated Approach to Building Long-Term Value",
    description:
      "Learn about the principles, vision and values that shape A&Y Consolidated and its approach to creating meaningful long-term opportunities.",
    link: "/about",
    linkText: "Discover A&Y Consolidated",
  },

  {
    category: "construction",
    label: "Construction & Real Estate · 6 min",
    image: "/assets/images/construction-article.jpg",
    alt: "Modern construction and real estate development",
    title:
      "Building with Quality, Precision and Purpose",
    description:
      "Explore how A&Y Consolidated approaches construction and real estate with a focus on quality, thoughtful development and long-term value.",
    link: "/construction-real-estate",
    linkText: "Explore Construction & Real Estate",
  },

  {
    category: "business",
    label: "Import & Export · 5 min",
    image: "/assets/images/import-export-article.jpg",
    alt: "International import and export shipping",
    title:
      "Connecting Markets Through Import & Export",
    description:
      "Discover A&Y Consolidated's approach to connecting products, suppliers and markets through reliable import and export operations.",
    link: "/import-export",
    linkText: "Explore Import & Export",
  },

  {
    category: "business",
    label: "Trading & Distribution · 5 min",
    image: "/assets/images/trading-distribution-article.jpg",
    alt: "Trading and distribution warehouse operations",
    title:
      "From Trading to Reliable Distribution",
    description:
      "Learn how efficient trading and distribution can create stronger supply networks and dependable access to products across different markets.",
    link: "/trading-distribution",
    linkText: "Explore Trading & Distribution",
  },

  {
    category: "guide",
    label: "Guide · 4 min",
    image: "/assets/images/faq-article.jpg",
    alt: "Frequently asked questions and customer support",
    title:
      "Frequently Asked Questions About A&Y Consolidated",
    description:
      "Find answers to common questions about A&Y Consolidated, its businesses, services and how to connect with the team.",
    link: "/faq#faq",
    linkText: "View Frequently Asked Questions",
  },

  {
    category: "company",
    label: "Contact · 3 min",
    image: "/assets/images/contact-article.jpg",
    alt: "Business consultation and communication",
    title:
      "How to Connect With A&Y Consolidated",
    description:
      "Whether you are interested in our businesses, partnerships or further information, discover the easiest ways to get in touch with our team.",
    link: "/contact#contact",
    linkText: "Contact Our Team",
  },
];

// =========================================================
// BLOG PAGE
// =========================================================

function Blog() {
  const [filter, setFilter] = useState("all");

  const [subscribed, setSubscribed] = useState(false);

  const [email, setEmail] = useState("");

  // =======================================================
  // FILTER ARTICLES
  // =======================================================

  const visibleArticles = articles.filter(
    (article) =>
      filter === "all" || article.category === filter
  );

  // =======================================================
  // NEWSLETTER
  // =======================================================

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email) return;

    setSubscribed(true);

    setEmail("");
  };

  return (
    <>
      {/* =====================================================
          SEO
      ====================================================== */}

      <Helmet>
        <title>Insights | A&Y Consolidated</title>

        <meta
          name="description"
          content="Insights, business perspectives and practical information from A&Y Consolidated across construction, real estate, import and export, trading and distribution."
        />
      </Helmet>

      {/* =====================================================
          BLOG PAGE
      ====================================================== */}

      <main
        id="blog"
        className="pt-[73px]"
      >

        {/* ===================================================
            HERO SECTION
        ==================================================== */}

        <section className="relative overflow-hidden border-b border-[rgba(233,195,73,.15)] px-6 py-20 sm:py-28">

          {/* Background Glow */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(233,195,73,.13),transparent_34%),radial-gradient(circle_at_88%_75%,rgba(72,93,130,.15),transparent_38%)]" />

          {/* Hero Content */}

          <div className="relative mx-auto max-w-[1180px] text-center">

            <span className="inline-flex rounded-full border border-[rgba(233,195,73,.35)] bg-[rgba(233,195,73,.08)] px-4 py-2 text-[10px] font-bold uppercase tracking-[2.4px] text-[#e9c349]">
              A&amp;Y Business Journal
            </span>

            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] text-[#f3efe5] sm:text-6xl lg:text-7xl">

              Insights for{" "}

              <span className="gold-gradient-text">
                Better Business Decisions.
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-sm leading-7 text-[#bfc3cc] sm:text-base">
              Practical perspectives on construction, real estate,
              import and export, trading, distribution and the
              businesses that shape A&amp;Y Consolidated.
            </p>

          </div>

        </section>

        {/* ===================================================
            FEATURED ARTICLE
        ==================================================== */}

        <section className="px-5 py-14 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-[rgba(233,195,73,.25)] bg-[#141821] shadow-[0_22px_70px_rgba(0,0,0,.48)]">

            <div className="grid lg:grid-cols-2">

              {/* Featured Image */}

              <div className="min-h-[330px] overflow-hidden lg:min-h-[500px]">

                <img
                  src="/assets/images/hero-building.jpg"
                  alt="A&Y Consolidated construction and business development"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

              </div>

              {/* Featured Content */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[1.8px]">

                  <span className="rounded-full bg-[#e9c349] px-3 py-1.5 text-[#3c2f00]">
                    Featured
                  </span>

                  <span className="text-[#aeb2bd]">
                    A&amp;Y Business Insight · 8 min read
                  </span>

                </div>

                <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-[#f4efe4] sm:text-4xl">

                  Building Businesses With Quality,
                  Integrity and Purpose

                </h2>

                <p className="mt-5 text-sm leading-7 text-[#b9bdc7]">

                  A&amp;Y Consolidated brings together different
                  business areas with a shared focus on quality,
                  reliability, responsible growth and long-term
                  relationships.

                </p>

                {/* Feature Points */}

                <div className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5 text-center">

                  <div>

                    <strong className="block text-lg text-[#e9c349]">
                      Quality
                    </strong>

                    <span className="text-[10px] uppercase tracking-[1px] text-[#8e939f]">
                      Our Standard
                    </span>

                  </div>

                  <div>

                    <strong className="block text-lg text-[#e9c349]">
                      Integrity
                    </strong>

                    <span className="text-[10px] uppercase tracking-[1px] text-[#8e939f]">
                      Our Value
                    </span>

                  </div>

                  <div>

                    <strong className="block text-lg text-[#e9c349]">
                      Growth
                    </strong>

                    <span className="text-[10px] uppercase tracking-[1px] text-[#8e939f]">
                      Our Vision
                    </span>

                  </div>

                </div>

                {/* Explore */}

                <a
                  href="#articles"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[1.5px] text-[#e9c349] transition-colors hover:text-[#ffd659]"
                >
                  Explore the journal

                  <span aria-hidden="true">
                    ↓
                  </span>
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            ARTICLES
        ==================================================== */}

        <section
          id="articles"
          className="px-5 pb-20 sm:px-8 lg:px-12"
        >

          <div className="mx-auto max-w-[1200px]">

            {/* =================================================
                ARTICLES HEADER
            ================================================== */}

            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">

              <div>

                <span className="text-[10px] font-bold uppercase tracking-[2.2px] text-[#e9c349]">
                  Latest Intelligence
                </span>

                <h2 className="font-display mt-2 text-3xl font-bold text-[#f2eee5] sm:text-4xl">
                  Articles &amp; Guides
                </h2>

              </div>

              {/* =================================================
                  FILTER BUTTONS
              ================================================== */}

              <div
                className="flex flex-wrap gap-2"
                aria-label="Filter articles"
              >

                {[
                  ["all", "All"],
                  ["company", "Company"],
                  ["construction", "Construction & Real Estate"],
                  ["business", "Business"],
                  ["guide", "Guides"],
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

            {/* =================================================
                ARTICLE GRID
            ================================================== */}

            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {visibleArticles.map((article) => (

                <article
                  key={article.title}
                  className="glass-panel group overflow-hidden rounded-2xl"
                >

                  {/* ===========================================
                      ARTICLE IMAGE
                  ============================================ */}

                  <div className="h-52 overflow-hidden">

                    <img
                      src={article.image}
                      alt={article.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                  {/* ===========================================
                      ARTICLE CONTENT
                  ============================================ */}

                  <div className="p-6">

                    {/* Category */}

                    <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#e9c349]">
                      {article.label}
                    </div>

                    {/* Title */}

                    <h3 className="font-display mt-3 text-2xl font-bold leading-snug text-[#f2eee5]">
                      {article.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-3 text-sm leading-6 text-[#aeb3be]">
                      {article.description}
                    </p>

                    {/* Link */}

                    {article.link.startsWith("/") && (

                      <Link
                        to={article.link}
                        className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#e9c349] transition-colors hover:text-[#ffd659]"
                      >

                        {article.linkText}

                        <span aria-hidden="true">
                          →
                        </span>

                      </Link>

                    )}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            NEWSLETTER
        ==================================================== */}

        <section className="border-y border-[rgba(233,195,73,.14)] bg-[#0d1016] px-5 py-16 sm:px-8">

          <div className="glass-panel mx-auto grid max-w-[1100px] gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

            {/* Newsletter Content */}

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#e9c349]">
                Stay Connected
              </span>

              <h2 className="font-display mt-3 text-3xl font-bold text-[#f2eee5] sm:text-4xl">

                Stay informed about
                A&amp;Y Consolidated.

              </h2>

              <p className="mt-4 max-w-[650px] text-sm leading-7 text-[#aeb3be]">

                Receive business updates, company insights,
                industry perspectives and important information
                from the A&amp;Y team.

              </p>

            </div>

            {/* Newsletter Form */}

            <form
              className="space-y-3"
              onSubmit={handleSubscribe}
            >

              <label
                className="sr-only"
                htmlFor="blog-email"
              >
                Email address
              </label>

              <input
                id="blog-email"
                type="email"
                required
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Your email address"
                className="h-12 w-full rounded-xl border border-[rgba(233,195,73,.22)] bg-[#10131a] px-4 text-sm text-white outline-none transition-colors placeholder:text-[#777c87] focus:border-[#e9c349]"
              />

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#e9c349] text-xs font-bold uppercase tracking-[1.5px] text-[#3c2f00] transition-all hover:bg-[#ffd659]"
              >
                Join Our Updates
              </button>

              {/* Success Message */}

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