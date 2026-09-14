import { useState } from "react";
import { Helmet } from "react-helmet-async";

const unitData = {
  "suite-a": {
    title: "Grand Master Suite (Unit A)",
    typePill: "3 BED / 3 BATH + MAID'S",
    description:
      "Expansive coastal living featuring a dedicated maid's suite, wraparound sea-view balcony, European designer wet/dry kitchen, and soundproofed bedrooms.",
    area: "1,425 Sq.Ft",
    ceiling: "10.5 Ft Clear",
    glazing: "German Acoustic",
    ac: "Full Inverter VRV",
    image:
      "https://www.figma.com/api/mcp/asset/4c000ff6-ce64-42b7-8d26-aa099d3fc4b7.png",
    reserveUrl: "/contact.html?plan=suite-a#contact",
  },
  "suite-b": {
    title: "Executive Luxury Suite (Unit B)",
    typePill: "3 BED / 2 BATH",
    description:
      "Optimized ergonomic layout with spacious open-plan living, designer European kitchen, master suite with private sea-facing terrace, and acoustic sound isolation.",
    area: "1,273 Sq.Ft",
    ceiling: "10.5 Ft Clear",
    glazing: "German Acoustic",
    ac: "Full Inverter VRV",
    image:
      "https://www.figma.com/api/mcp/asset/3632f001-9abc-4c48-af35-2ce388441613.png",
    reserveUrl: "/contact.html?plan=suite-b#contact",
  },
};

function Residences() {
  const [selectedUnit, setSelectedUnit] = useState("suite-a");

  return (
    <>
      <Helmet>
        <title>Luxury Residences &amp; Floor Plans | A&amp;Y CONSOLIDATED</title>
        <meta
          name="description"
          content="Explore boutique 3-bedroom luxury residences in Dehiwala by A&Y Consolidated. Only two residences per floor with acoustic isolation and panoramic coastal views."
        />
        <meta
          name="robots"
          content="index, follow"
        />
      </Helmet>

<main className="pt-24 sm:pt-28">
    {/* HERO SECTION */}
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16 pt-8 pb-12 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.08)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]"></span>
        Boutique Coastal Sanctuaries
      </div>
      <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] text-[#e0e2ec]">
        Engineered for Generational Living
      </h1>
      <p className="mx-auto mt-4 max-w-[700px] text-sm sm:text-base leading-relaxed text-[#c6c6cb]">
        Only two residences per floor to ensure consummate privacy, dual-aspect ocean cross-ventilation, and German acoustic insulation in every room.
      </p>

      {/* Unit Selector Tabs */}
      <div className="flex items-center justify-center gap-3 mt-10" aria-label="Unit selection">
        <button id="tab-unit-a" onClick={() => setSelectedUnit("suite-a")} type="button" onClick={() => setSelectedUnit("suite-a")} className={`px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-[1px] uppercase transition-all ${
            selectedUnit === "suite-a"
              ? "bg-[#e9c349] text-[#3c2f00] shadow-[0_4px_15px_rgba(233,195,73,0.3)]"
              : "border border-[rgba(233,195,73,0.3)] bg-[#191c24] text-[#c6c6cb] hover:text-[#e9c349]"
          } cursor-pointer`}>
          Grand Suite — Unit A (1,425 Sq.Ft)
        </button>
        <button id="tab-unit-b" onClick={() => setSelectedUnit("suite-b")} type="button" onClick={() => setSelectedUnit("suite-b")} className={`px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-[1px] uppercase transition-all ${
            selectedUnit === "suite-b"
              ? "bg-[#e9c349] text-[#3c2f00] shadow-[0_4px_15px_rgba(233,195,73,0.3)]"
              : "border border-[rgba(233,195,73,0.3)] bg-[#191c24] text-[#c6c6cb] hover:text-[#e9c349]"
          } cursor-pointer`}>
          Compact Luxury — Unit B (1,273 Sq.Ft)
        </button>
      </div>
    </section>

    {/* INTERACTIVE SHOWCASE AREA */}
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-3xl p-6 sm:p-10">
        
        {/* Floor Plan Visual Card */}
        <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.25)] bg-[#0c0f16]/90 p-4 sm:p-8 flex flex-col items-center justify-center min-h-[360px] sm:min-h-[440px] relative group">
          <img id="unit-image" src={unitData[selectedUnit].image} alt="Architectural Floor Plan" className="max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-4 right-4 glass-panel rounded-xl px-3 py-1.5 text-[11px] font-mono text-[#e9c349] border border-[rgba(233,195,73,0.3)]">
            <span id="unit-levels">LEVEL 1 – LEVEL 5</span>
          </div>
        </div>

        {/* Specifications & Reservation Actions Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span id="unit-type-pill" className="text-[11px] font-mono uppercase tracking-[2px] text-[#e9c349]">{unitData[selectedUnit].typePill}</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">Available</span>
            </div>
            <h2 id="unit-title" className="font-display text-2xl sm:text-3xl font-bold text-[#f0ede6] mt-2">
              {unitData[selectedUnit].title}
            </h2>
            <p id="unit-description" className="text-sm text-[#c6c6cb] mt-2 leading-relaxed">
              {unitData[selectedUnit].description}
            </p>
          </div>

          {/* Specs Matrix */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
              <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">Total Area</div>
              <div id="spec-area" className="text-base sm:text-lg font-bold text-[#e9c349]">{unitData[selectedUnit].area}</div>
            </div>
            <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
              <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">Ceiling Height</div>
              <div id="spec-ceiling" className="text-base sm:text-lg font-bold text-[#e9c349]">{unitData[selectedUnit].ceiling}</div>
            </div>
            <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
              <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">Glazing System</div>
              <div id="spec-glazing" className="text-base sm:text-lg font-bold text-[#e9c349]">{unitData[selectedUnit].glazing}</div>
            </div>
            <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
              <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">Air Conditioning</div>
              <div id="spec-ac" className="text-base sm:text-lg font-bold text-[#e9c349]">{unitData[selectedUnit].ac}</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a id="reserve-unit-btn" href={unitData[selectedUnit].reserveUrl} className="flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-[#e9c349] px-6 text-xs font-bold tracking-[1.5px] uppercase text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] transition-all">
              Reserve This Unit
            </a>
            <a id="brochure-download-btn" href="/brochure" className="glass-panel flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-5 text-xs font-bold tracking-[1.5px] uppercase text-[#e0e2ec] hover:border-[#e9c349] hover:text-[#e9c349] transition-all">
              <i className="fa-solid fa-file-pdf text-[#e9c349]"></i> Download Prospectus
            </a>
            <a href="investment-calculator.html" className="text-xs font-bold text-[#e9c349] hover:underline whitespace-nowrap ml-auto pt-2 sm:pt-0">
              Calculate ROI →
            </a>
          </div>
        </div>

      </div>
    </section>

    {/* AMENITIES & ENGINEERING EXCELLENCE */}
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16 py-12">
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#e9c349]">Architectural Benchmark</span>
        <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#e0e2ec] mt-2">
          Engineered Residential Amenities
        </h2>
        <p className="mx-auto mt-3 max-w-[650px] text-xs sm:text-sm text-[#c6c6cb]">
          Every lifestyle provision is constructed with commercial-grade engineering and enduring materials.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            <div className="h-10 w-10 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-[#e9c349] mb-4">
              <i className="fa-solid fa-dumbbell"></i>
            </div>
            <h3 className="font-semibold text-base text-[#f0ede6]">Panoramic Rooftop Gym</h3>
            <p className="text-xs text-[#c6c6cb] mt-2 leading-relaxed">
              Equipped with cardiovascular and resistance machinery overlooking unobstructed vistas of the Indian Ocean.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            <div className="h-10 w-10 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-[#e9c349] mb-4">
              <i className="fa-solid fa-champagne-glasses"></i>
            </div>
            <h3 className="font-semibold text-base text-[#f0ede6]">Sunset Sky Lounge</h3>
            <p className="text-xs text-[#c6c6cb] mt-2 leading-relaxed">
              Private open-air rooftop observation terrace designed for evening relaxation, social gatherings, and coastal sunset views.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            <div className="h-10 w-10 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-[#e9c349] mb-4">
              <i className="fa-solid fa-square-parking"></i>
            </div>
            <h3 className="font-semibold text-base text-[#f0ede6]">Subterranean Secured Car Park</h3>
            <p className="text-xs text-[#c6c6cb] mt-2 leading-relaxed">
              Access-controlled vehicle parking with wide turning bays, EV charging capabilities, and direct high-speed elevator access.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            <div className="h-10 w-10 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-[#e9c349] mb-4">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="font-semibold text-base text-[#f0ede6]">Multi-Tier Smart Security</h3>
            <p className="text-xs text-[#c6c6cb] mt-2 leading-relaxed">
              Biometric access readers, 24/7 CCTV surveillance coverage, video intercom linking lobby to suite, and manned guard post.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16 py-12">
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 text-center border border-[rgba(233,195,73,0.35)]">
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-3">
          Experience the Residences In Person
        </h2>
        <p className="mx-auto max-w-[600px] text-sm text-[#c6c6cb] mb-6">
          Schedule a private VIP walk-through with our architectural directors and review physical material samples.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="contact.html#contact" className="rounded-xl bg-[#e9c349] px-8 py-3 text-xs font-bold uppercase tracking-[1.5px] text-[#3c2f00] hover:bg-[#ffd659] transition-all shadow-[0_4px_20px_rgba(233,195,73,0.35)]">
            Schedule Private Consultation
          </a>
          <a href="/brochure" className="glass-panel rounded-xl px-7 py-3 text-xs font-bold uppercase tracking-[1.5px] text-[#e0e2ec] hover:border-[#e9c349] hover:text-[#e9c349] transition-all">
            Download Architectural Brochure (PDF)
          </a>
        </div>
      </div>
    </section>
  </main>


    </>
  );
}

export default Residences;
