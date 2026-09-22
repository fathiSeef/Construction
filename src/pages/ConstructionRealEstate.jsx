import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const projectFacts = [
  ["05", "Floors"],
  ["10", "Apartments"],
  ["03", "Bedroom Units"],
  ["1,273–1,425", "Approx. Sq.Ft."],
];

const stages = [
  [
    "01",
    "Land & Feasibility",
    "Site review, title due diligence and project feasibility.",
  ],
  [
    "02",
    "Planning & Approvals",
    "Engineering coordination, planning and required approvals.",
  ],
  [
    "03",
    "Construction",
    "Structured construction, quality control and milestone management.",
  ],
  [
    "04",
    "Handover",
    "Completion, documentation, handover and owner support.",
  ],
];

const propertyServices = [
  "Apartment Construction",
  "Property Buy & Sell",
  "Property Leasing & Lease Arrangement",
  "Property Development",
  "Construction Management",
  "Investment & Sales Support",
  "Interior & Turnkey Delivery",
  "After-Sales Property Care",
];

const fallback = "/assets/images/hero-building.jpg";

function Image({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = fallback;
      }}
    />
  );
}

export default function ConstructionRealEstate() {
  return (
    <>
      <Helmet>
        <title>
          Construction & Real Estate | A&Y CONSOLIDATED
        </title>

        <meta
          name="description"
          content="Construction, residential development, property buying, selling and leasing activities by A&Y Consolidated."
        />
      </Helmet>

      <div className="min-h-screen bg-[#10131a] text-[#e0e2ec]">

        {/* =====================================================
            01 — CINEMATIC HERO
        ====================================================== */}

        <section className="relative min-h-[760px] overflow-hidden">

          {/* Hero Image */}
          <Image
            src="/assets/images/hero-building.jpg"
            alt="Luxury residential development"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10131a] via-[#10131a]/80 to-[#10131a]/20" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-[#10131a]/20" />

          {/* Hero Content */}
          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10">

            <div className="max-w-4xl">

              <p className="text-xs font-bold uppercase tracking-[4px] text-[#e9c349]">
                Construction · Development · Real Estate
              </p>

              <h1 className="mt-5 font-display text-5xl leading-[0.96] text-white md:text-8xl">
                Building spaces
                <br />
                <span className="gold-gradient-text">
                  for long-term value.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                A&Y Consolidated brings land, development, construction
                and property delivery together through one coordinated
                journey.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/residences"
                  className="rounded-xl bg-[#e9c349] px-7 py-3 text-xs font-bold uppercase tracking-[2px] text-[#3c2f00] shadow-[0_0_20px_rgba(233,195,73,0.15)] transition-all duration-300 hover:bg-[#ffd659] hover:shadow-[0_0_30px_rgba(233,195,73,0.3)]"
                >
                  View Residences
                </Link>

                <Link
                  to="/contact#contact"
                  className="rounded-xl border border-white/20 bg-black/20 px-7 py-3 text-xs font-bold uppercase tracking-[2px] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#e9c349]/50 hover:text-[#e9c349]"
                >
                  Discuss a Requirement
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            02 — PROJECT FACTS
        ====================================================== */}

        <section className="border-y border-white/10 bg-[#0c0f15]">

          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

            {projectFacts.map(([value, label]) => (
              <div
                key={label}
                className="border-r border-white/10 px-6 py-10 last:border-r-0 md:px-10"
              >
                <div className="font-display text-3xl text-[#e9c349] md:text-4xl">
                  {value}
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[2px] text-white/40">
                  {label}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* =====================================================
            03 — FEATURED RESIDENTIAL DEVELOPMENT
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">

            {/* Text */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
                Featured residential development
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-6xl">
                A project shaped around{" "}
                <span className="gold-gradient-text">
                  location, clarity and lifestyle.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/55">
                The proposed Dehiwala development is documented as a
                five-floor residential project with ten three-bedroom
                apartments, basement parking and lifestyle facilities
                including a gym and rooftop.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/65">

                <div className="border-l border-[#e9c349] pl-4">
                  Residential development in Dehiwala
                </div>

                <div className="border-l border-[#e9c349] pl-4">
                  Approx. 1,273–1,425 sq.ft. apartment sizes
                </div>

                <div className="border-l border-[#e9c349] pl-4">
                  Basement parking with shared lifestyle facilities
                </div>

              </div>

              <Link
                to="/investment"
                className="mt-9 inline-block text-xs font-bold uppercase tracking-[2px] text-[#e9c349] transition-colors hover:text-[#ffd659]"
              >
                Explore Investment Information →
              </Link>

            </div>

            {/* Featured Image */}
            <div className="overflow-hidden rounded-[32px] border border-[#e9c349]/20 bg-[#161b22]">

              <Image
                src="/assets/images/high_end_architectural_engineering_and_luxury_real_estate_construction_site_at.png"
                alt="Architectural engineering and luxury construction"
                className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            04 — DEVELOPMENT JOURNEY
        ====================================================== */}

        <section className="bg-[#161b22] px-6 py-24 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
                Development journey
              </p>

              <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
                From land to{" "}
                <span className="gold-gradient-text">
                  living space.
                </span>
              </h2>

            </div>

            <div className="mt-14 grid gap-0 border-y border-white/10 md:grid-cols-4">

              {stages.map(([number, title, text]) => (
                <div
                  key={number}
                  className="border-b border-white/10 px-6 py-9 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8"
                >

                  <div className="text-sm text-[#e9c349]">
                    {number}
                  </div>

                  <h3 className="mt-10 font-display text-2xl text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            05 — PROPERTY SERVICES
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            {/* Section Heading */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
                What we do
              </p>

              <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
                Property services with{" "}
                <span className="gold-gradient-text">
                  one connected approach.
                </span>
              </h2>

            </div>

            {/* Services List */}
            <div className="divide-y divide-white/10">

              {propertyServices.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-5 py-6"
                >

                  <div className="flex items-center gap-5">

                    <span className="text-xs text-[#e9c349]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-display text-xl text-white md:text-2xl">
                      {item}
                    </h3>

                  </div>

                  <span className="text-white/25">
                    ↗
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            06 — CTA
        ====================================================== */}

        <section className="mx-6 mb-20 rounded-[32px] border border-[#e9c349]/20 bg-gradient-to-br from-[#e9c349]/10 to-[#161b22] px-7 py-14 text-center lg:mx-auto lg:max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
            Property enquiries
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-white md:text-5xl">
            Have a property or development requirement?
          </h2>

          <Link
            to="/contact#contact"
            className="mt-8 inline-flex rounded-xl bg-[#e9c349] px-8 py-3 text-xs font-bold uppercase tracking-[2px] text-[#3c2f00] shadow-[0_0_20px_rgba(233,195,73,0.15)] transition-all duration-300 hover:bg-[#ffd659] hover:shadow-[0_0_30px_rgba(233,195,73,0.3)]"
          >
            Start a Conversation
          </Link>

        </section>

      </div>
    </>
  );
}