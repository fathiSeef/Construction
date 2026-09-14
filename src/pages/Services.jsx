import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Architectural & Structural Engineering",
    description:
      "Boutique condominium master-planning adhering strictly to seismic safety, grade-40 concrete mixes, and premium soundproofing between residential floors.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    points: [
      "Two units per floor privacy designs",
      "Dual-layer acoustic wall insulation",
      "Comprehensive MEP & automated generator backup",
    ],
  },
  {
    number: "02",
    title: "Legal & Title Verification Guarantee",
    description:
      "Independent due diligence audits verifying unencumbered land registry titles, CMA approvals, and zero financial liens prior to pre-sale launch.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    points: [
      "Condominium Management Authority (CMA) certified",
      "100% debt-free project land documentation",
      "Transparent stage payment escrow milestones",
    ],
  },
  {
    number: "03",
    title: "Diaspora Inward Investment Advisory",
    description:
      "Specialized guidance for overseas buyers in the UK, Australia, UAE, and North America to navigate Central Bank Inward Investment Accounts (IIA).",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    points: [
      "Direct IIA foreign currency remittance routing",
      "Weekly photographic construction milestones",
      "Remote power-of-attorney execution support",
    ],
  },
  {
    number: "04",
    title: "Custom Interior Bespoke Tailoring",
    description:
      "Personalized spatial layouts during early structural stages, providing curated teak millwork, European sanitaryware, and smart automation.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    points: [
      "Early-stage internal partition adjustments",
      "Custom pantry and solid timber fitting upgrades",
      "Integrated smart home climate and security",
    ],
  },
  {
    number: "05",
    title: "Asset Management & Leasing Concierge",
    description:
      "Turnkey tenant onboarding, expatriate executive leasing, and routine property preservation ensuring consistent ~7% net yields for investors.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    points: [
      "Corporate & embassy tenant vetting",
      "Full maintenance and preventive facility audits",
      "Automated dividend & rental remittance reports",
    ],
  },
  {
    number: "06",
    title: "Key Handover & Deed Registration",
    description:
      "Formal execution of individual condominium deed of transfer through Colombo District Land Registry, accompanied by a lifetime warranty booklet.",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    points: [
      "Direct Land Registry freehold deed transfer",
      "Certificate of Conformity (COC) handover",
      "12-month structural defect liability guarantee",
    ],
  },
];

const stages = [
  {
    number: "01",
    title: "Title Due Diligence",
    description:
      "Title deed scrutiny by leading legal counsel and 100% upfront equity settlement without bank mortgages.",
  },
  {
    number: "02",
    title: "Engineering & Sanction",
    description:
      "Full approval from Dehiwala-Mount Lavinia Municipal Council, CMA, Fire Department, and CEB.",
  },
  {
    number: "03",
    title: "Boutique Construction",
    description:
      "High-grade structural pouring with weekly photo updates sent via private client investor portals.",
  },
  {
    number: "04",
    title: "Deed Handover & Care",
    description:
      "Individual freehold deed registration, COC certificate, and ongoing asset management support.",
  },
];

const CheckIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 text-[#D4AF37]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

function Services() {
  return (
    <>
      <Helmet>
        <title>Services - A&Y Consolidated</title>
        <meta
          name="description"
          content="Comprehensive luxury property development services from concept to legacy by A&Y Consolidated."
        />
      </Helmet>

      <main className="min-h-screen bg-[#0E1117] text-white antialiased">
        {/* Hero Section */}
        <section
          id="services"
          className="relative overflow-hidden border-b border-white/5 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[rgba(212,175,55,0.10)] via-transparent to-transparent blur-3xl opacity-50" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.15)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37] sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4AF37]" />
              End-To-End Development Mastery
            </div>

            <h1 className="mx-auto mb-6 max-w-4xl font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
              Comprehensive Solutions from{" "}
              <span className="bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] bg-clip-text text-transparent">
                Concept to Legacy
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-sm font-normal leading-relaxed text-[#94A3B8] sm:text-base md:text-lg">
              We orchestrate luxury property development with uncompromising
              rigor. From unencumbered deed procurement to turnkey interior
              delivery and diaspora asset care.
            </p>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#161B22]/60 p-5 text-center backdrop-blur-sm">
                <div className="mb-1 font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">
                  100% Clear
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-[#94A3B8]">
                  Deed &amp; Title Verification
                </div>
              </div>

              <div className="rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#161B22]/60 p-5 text-center backdrop-blur-sm">
                <div className="mb-1 font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">
                  Zero Debt
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-[#94A3B8]">
                  Unmortgaged Project Lands
                </div>
              </div>

              <div className="rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#161B22]/60 p-5 text-center backdrop-blur-sm">
                <div className="mb-1 font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">
                  Turnkey Care
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-[#94A3B8]">
                  Dedicated Overseas Support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Service Visual Banner */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="group relative overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.25)] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.4),inset_0_0_12px_rgba(212,175,55,0.03)] transition-all duration-300 hover:border-[rgba(212,175,55,0.5)] hover:shadow-[0_10px_30px_-2px_rgba(212,175,55,0.12),inset_0_0_18px_rgba(212,175,55,0.05)]">
            <img
              src="/assets/high_end_architectural_engineering_and_luxury_real_estate_construction_site_at.png"
              alt="High-rise luxury condominium tower under construction at dusk, cranes overhead and city skyline behind"
              className="h-[300px] w-full object-cover brightness-[0.8] contrast-[1.05] transition-transform duration-700 group-hover:scale-105 sm:h-[380px] md:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/50 to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-3xl p-6 sm:p-8 md:p-12">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Prime Engineering Standard
              </span>
              <h2 className="mb-3 font-serif text-xl font-bold text-white sm:text-2xl md:text-4xl">
                Institutional Precision &amp; Timely Handover
              </h2>
              <p className="text-sm font-normal leading-relaxed text-gray-300 md:text-base">
                Every project is built on our own unmortgaged prime land,
                audited by independent structural engineers and delivered with
                full legal compliance from Colombo&apos;s Municipal Council and
                Central Environmental Authority.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services 6-Card Grid */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Our Core Pillars
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl">
              Structured Development Services
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col justify-between rounded-2xl border border-[rgba(212,175,55,0.25)] bg-[#161B22]/80 p-6 backdrop-blur-md shadow-[0_4px_24px_-1px_rgba(0,0,0,0.4),inset_0_0_12px_rgba(212,175,55,0.03)] transition-all duration-300 hover:border-[rgba(212,175,55,0.5)] hover:shadow-[0_10px_30px_-2px_rgba(212,175,55,0.12),inset_0_0_18px_rgba(212,175,55,0.05)] sm:p-8"
              >
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.15)] text-[#D4AF37]">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d={service.icon}
                      />
                    </svg>
                  </div>

                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Pillar {service.number}
                  </span>

                  <h3 className="mb-3 font-serif text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-sm font-normal leading-relaxed text-[#94A3B8]">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-white/10 pt-4 text-xs text-gray-300">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <CheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="mx-auto max-w-7xl border-t border-white/5 px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Flawless Delivery
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Our 4-Stage Development Lifecycle
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8]">
              From site acquisition to resident onboarding, clarity is embedded
              into every milestone.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-6">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="relative rounded-xl border border-white/10 bg-[#161B22]/60 p-6"
              >
                <div className="mb-4 font-serif text-4xl font-bold text-[rgba(212,175,55,0.3)]">
                  {stage.number}
                </div>
                <h4 className="mb-2 font-serif text-lg font-bold text-white">
                  {stage.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#94A3B8]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="mx-auto mb-14 max-w-7xl px-4 py-10 sm:mb-16 sm:px-6 sm:py-12">
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.25)] bg-gradient-to-r from-[#161B22] via-[#1A202C] to-[#161B22] p-8 text-center sm:p-10 md:p-14">
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Direct Engagement
              </span>

              <h2 className="mb-4 font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Ready to Discuss Your Residence or Investment?
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-[#94A3B8]">
                Connect with our development directors for private project
                dossiers, legal verification packs, and pre-launch pricing.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact#contact"
                  className="w-full rounded-full bg-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0E1117] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:bg-[#c49f2c] sm:w-auto"
                >
                  Schedule Private Consultation
                </Link>

                <Link
                  to="/brochure"
                  className="w-full rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white/5 sm:w-auto"
                >
                  Download Legal Dossier
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;
