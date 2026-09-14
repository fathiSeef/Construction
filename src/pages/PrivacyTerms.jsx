import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function PrivacyTerms() {
  return (
    <>
      <Helmet>
        <title>Legal, Privacy & Structural Warranty | A&Y CONSOLIDATED</title>
        <meta
          name="description"
          content="Official legal documentation, clear freehold title assurances, warranty protections, and privacy disclosures for A&Y Consolidated."
        />
      </Helmet>

      {/* Page-specific header — default Navbar is intentionally not used */}
      <header className="sticky top-0 z-50 border-b border-[rgba(233,195,73,0.25)] bg-[rgba(16,19,26,0.92)] px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <button
            type="button"
            onClick={() => window.history.back()}
            id="back-btn"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.8)] px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#e9c349] shadow-[0_2px_15px_rgba(233,195,73,0.15)] transition-all duration-200 hover:bg-[#e9c349] hover:text-[#10131a] cursor-pointer"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Previous Page</span>
          </button>

          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-lg border border-[rgba(233,195,73,0.3)] bg-[#0b0e15]">
              <img
                src="https://www.figma.com/api/mcp/asset/4c30c0ab-fe3d-4ae3-bee8-e5f401a68cba.png"
                alt="A&Y Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-display text-base font-bold tracking-tight text-[#e0e2ec] sm:text-lg">
              A&Y CONSOLIDATED
            </span>
          </Link>
        </div>
      </header>

      {/* MAIN LEGAL CONTENT */}
      <main className="mx-auto max-w-[1000px] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.8)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349]">
            Regulatory Governance &amp; Integrity
          </div>

          <h1 className="font-display text-3xl font-bold leading-tight text-[#e0e2ec] sm:text-5xl">
            Legal Disclosures, Terms &amp;{" "}
            <span className="gold-gradient-text">Privacy Policy</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[700px] text-sm text-[#c6c6cb] sm:text-base">
            Transparency is the bedrock of A&amp;Y Consolidated. Below are the
            statutory declarations, title deed guarantees, structural warranty
            assurances, and data privacy safeguards governing our residential
            projects.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a href="#privacy" className="glass-panel rounded-xl p-4 text-center transition-all hover:border-[#e9c349]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e9c349]">01. Privacy Policy</div>
            <div className="mt-1 text-[11px] text-[#8e9099]">Data security &amp; confidentiality</div>
          </a>

          <a href="#terms" className="glass-panel rounded-xl p-4 text-center transition-all hover:border-[#e9c349]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e9c349]">02. Terms of Service</div>
            <div className="mt-1 text-[11px] text-[#8e9099]">Purchase agreement &amp; warranties</div>
          </a>

          <a href="#disclaimers" className="glass-panel rounded-xl p-4 text-center transition-all hover:border-[#e9c349]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e9c349]">03. Title &amp; Disclaimers</div>
            <div className="mt-1 text-[11px] text-[#8e9099]">CMA registered freehold deeds</div>
          </a>
        </div>

        {/* Privacy Policy */}
        <section id="privacy" className="glass-panel mb-8 rounded-2xl border border-[rgba(233,195,73,0.25)] p-6 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(233,195,73,0.15)] text-[#e9c349]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#e0e2ec]">1. Privacy &amp; Client Data Protection</h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#c6c6cb]">
            <p>A&amp;Y Consolidated (Pvt) Ltd respects your absolute right to privacy. Any information collected during your inquiries, VIP showroom appointments, or reservation agreements is managed under strict confidentiality guidelines.</p>

            <h3 className="pt-2 font-bold text-[#e0e2ec]">Data Collection &amp; Usage</h3>
            <p>We collect personal details (name, email, phone number, residency status) solely to arrange bespoke consultations, provide architectural prospectus packages, and facilitate statutory title processing with relevant land registries. We do not sell, rent, or lease your private information to third-party advertisers or unverified brokers under any circumstances.</p>

            <h3 className="pt-2 font-bold text-[#e0e2ec]">Financial Encryption</h3>
            <p>All financial interactions, including Inward Investment Account (IIA) routing verification and escrow receipts, are encrypted through end-to-end TLS 1.3 protocol standards.</p>
          </div>
        </section>

        {/* Terms & Warranty */}
        <section id="terms" className="glass-panel mb-8 rounded-2xl border border-[rgba(233,195,73,0.25)] p-6 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(233,195,73,0.15)] text-[#e9c349]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#e0e2ec]">2. Terms of Service &amp; Structural Guarantee</h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#c6c6cb]">
            <h3 className="font-bold text-[#e0e2ec]">10-Year Structural Defect Warranty</h3>
            <p>Every residence delivered by A&amp;Y Consolidated is backed by an unconditional 10-year structural stability warranty covering the reinforced concrete core, Grade-40 raft foundation, and subterranean waterproofing barriers.</p>

            <h3 className="pt-2 font-bold text-[#e0e2ec]">Milestone Escrow Protection</h3>
            <p>Investor payments are tied directly to certified engineering milestones verified by independent chartered quantity surveyors. No advance funds are allocated to non-structural expenses, eliminating builder insolvency risks.</p>

            <h3 className="pt-2 font-bold text-[#e0e2ec]">Handover Schedule &amp; Penalties</h3>
            <p>Our legally binding Sales &amp; Purchase Agreement includes clear contractual completion targets with predefined liquidated damages in favor of the purchaser for any unexcused builder delays.</p>
          </div>
        </section>

        {/* Legal Disclaimers */}
        <section id="disclaimers" className="glass-panel mb-12 rounded-2xl border border-[rgba(233,195,73,0.25)] p-6 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(233,195,73,0.15)] text-[#e9c349]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#e0e2ec]">3. Clear Title Registration &amp; Disclaimers</h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#c6c6cb]">
            <p>All lands utilized for our developments are 100% freehold, unencumbered by secondary mortgages, and held with pristine title pedigrees certified by premier legal counsel in Colombo.</p>

            <h3 className="pt-2 font-bold text-[#e0e2ec]">Architectural Visualizations</h3>
            <p>Renderings, digital walkthroughs, and 3D architectural representations on this website are conceptual depictions designed to convey engineering intent. Final materials, fittings, and finishes correspond directly to the technical specification schedule appended to your formal contract.</p>

            <h3 className="pt-2 font-bold text-[#e0e2ec]">Condominium Management Authority (CMA) Compliance</h3>
            <p>All units comply fully with statutory approvals from the Urban Development Authority (UDA), Central Environmental Authority (CEA), and the Condominium Management Authority of Sri Lanka.</p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="pt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#e9c349] px-8 py-3.5 text-xs font-bold uppercase tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_25px_rgba(233,195,73,0.3)] transition-all hover:bg-[#ffd659]"
          >
            <span>← Return to Home</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default PrivacyTerms;
