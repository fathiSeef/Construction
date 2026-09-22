import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const sectors = [
  {
    title: "Construction Materials",
    text: "Trading and distribution of selected construction-related products for commercial requirements.",
    image: "/assets/images/construction-materials.jpg",
  },
  {
    title: "Garments & Apparel",
    text: "Product sourcing and distribution coordination for garment and apparel requirements.",
    image: "/assets/images/garments.jpg",
  },
  {
    title: "Vehicle Spare Parts",
    text: "Supply and distribution support for selected automotive parts and components.",
    image: "/assets/images/vehicle-spare-parts.jpg",
  },
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

export default function TradingDistribution() {
  return (
    <>
      <Helmet>
        <title>Trading & Distribution | A&Y CONSOLIDATED</title>

        <meta
          name="description"
          content="Trading and distribution activities across construction materials, garments and automotive spare parts."
        />
      </Helmet>

      <div className="min-h-screen bg-[#10131a] text-[#e0e2ec]">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}

        <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10">

          {/* Hero Background Image */}
          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=85"
              alt="Warehouse and distribution operations"
              className="h-full w-full object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#10131a]/60" />

            {/* Left dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/95 via-[#10131a]/75 to-[#10131a]/30" />

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/20 to-transparent" />

            {/* Subtle gold glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(233,195,73,0.10),transparent_35%)]" />

          </div>


          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-10">

            <div className="w-full">

              <p className="text-xs font-bold uppercase tracking-[4px] text-[#e9c349]">
                Trading · Distribution · Supply
              </p>


              <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.9] text-white sm:text-7xl md:text-8xl lg:text-[110px]">

                Supply
                <br />

                <span className="gold-gradient-text">
                  with purpose.
                </span>

              </h1>


              <div className="mt-12 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">

                <p className="max-w-2xl text-base leading-8 text-white/65">

                  A multi-sector trading model connecting products,
                  suppliers and commercial customers across construction,
                  garments and automotive categories.

                </p>


                <Link
                  to="/contact#contact"
                  className="rounded-xl border border-[#e9c349]/50 bg-[#10131a]/40 px-7 py-3 text-center text-xs font-bold uppercase tracking-[2px] text-[#e9c349] backdrop-blur-md transition-all duration-300 hover:bg-[#e9c349] hover:text-[#3c2f00]"
                >
                  Talk to Trading Team
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SECTOR MOSAIC
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="mb-12">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
              Our Sectors
            </p>


            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">

              Three commercial{" "}

              <span className="gold-gradient-text">
                categories.
              </span>

            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {sectors.map((sector, i) => (

              <article
                key={sector.title}
                className={`group overflow-hidden rounded-[30px] border border-white/10 bg-[#161b22] transition-all duration-500 hover:border-[#e9c349]/30 ${
                  i === 1
                    ? "md:translate-y-10 lg:translate-y-12"
                    : ""
                }`}
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={sector.image}
                    alt={sector.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/20 to-transparent" />

                </div>


                {/* Content */}
                <div className="p-7">

                  <div className="text-xs font-bold text-[#e9c349]">
                    0{i + 1}
                  </div>


                  <h3 className="mt-3 font-display text-2xl text-white">
                    {sector.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {sector.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            DISTRIBUTION MODEL
        ====================================================== */}

        <section className="bg-[#161b22] px-6 py-24 lg:px-10">

          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">

            {/* Left */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
                Distribution Model
              </p>


              <h2 className="mt-4 font-display text-4xl text-white md:text-6xl">

                From source
                <br />

                <span className="gold-gradient-text">
                  to customer.
                </span>

              </h2>


              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">

                A simple operating flow keeps sourcing, trade and
                distribution connected.

              </p>

            </div>


            {/* Right - Vertical Steps */}
            <div className="relative border-l border-[#e9c349]/30 pl-8 md:pl-12">

              {[
                [
                  "01",
                  "Source",
                  "Identify products and suppliers.",
                ],
                [
                  "02",
                  "Trade",
                  "Coordinate the commercial requirement.",
                ],
                [
                  "03",
                  "Distribute",
                  "Move products through the required channel.",
                ],
                [
                  "04",
                  "Support",
                  "Maintain communication around supply and customer needs.",
                ],
              ].map(([n, t, d]) => (

                <div
                  key={n}
                  className="relative pb-12 last:pb-0"
                >

                  <span className="absolute -left-[49px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#e9c349]/40 bg-[#161b22] text-[10px] text-[#e9c349] md:-left-[65px]">
                    {n}
                  </span>


                  <h3 className="font-display text-3xl text-white">
                    {t}
                  </h3>


                  <p className="mt-2 text-sm leading-7 text-white/45">
                    {d}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            BUSINESS APPROACH
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-3">

            {[
              [
                "Clear sourcing",
                "Understand the requirement before supply.",
              ],
              [
                "Connected distribution",
                "Coordinate products across the relevant channel.",
              ],
              [
                "Long-term relationships",
                "Build repeat business through practical support.",
              ],
            ].map(([t, d]) => (

              <div
                key={t}
                className="bg-[#10131a] p-8 transition-all duration-300 hover:bg-[#141820]"
              >

                <div className="mb-14 h-px w-12 bg-[#e9c349]" />


                <h3 className="font-display text-2xl text-white">
                  {t}
                </h3>


                <p className="mt-3 text-sm leading-7 text-white/45">
                  {d}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="mx-6 mb-20 rounded-[32px] border border-[#e9c349]/20 bg-[#161b22] px-7 py-14 text-center lg:mx-auto lg:max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">
            Trading Enquiries
          </p>


          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-white md:text-5xl">

            Have a product or distribution requirement?

          </h2>


          <Link
            to="/contact#contact"
            className="mt-8 inline-flex rounded-xl bg-[#e9c349] px-8 py-3 text-xs font-bold uppercase tracking-[2px] text-[#3c2f00] shadow-[0_0_20px_rgba(233,195,73,0.15)] transition-all duration-300 hover:bg-[#ffd659] hover:shadow-[0_0_30px_rgba(233,195,73,0.3)]"
          >
            Start an Enquiry
          </Link>

        </section>

      </div>
    </>
  );
}