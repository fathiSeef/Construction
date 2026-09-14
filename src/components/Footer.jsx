import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim()) {
      alert(
        "Thank you for subscribing to A&Y Consolidated Investor Briefings."
      );

      setEmail("");
    }
  };

  return (
    <footer
      id="footer"
      className="mx-auto mt-16 w-full max-w-[1280px] border-t border-[rgba(233,195,73,0.2)] bg-[#0b0e15] px-4 py-12 sm:mt-24 sm:px-6 lg:px-16"
    >
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* =====================================================
            COLUMN 1 - BRAND PROFILE
        ====================================================== */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-xl border border-[rgba(233,195,73,0.3)] bg-[#0b0e15]">
              <img
                src="https://www.figma.com/api/mcp/asset/4c30c0ab-fe3d-4ae3-bee8-e5f401a68cba.png"
                alt="A&Y Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="font-display text-lg font-bold text-[#e0e2ec]">
              A&amp;Y CONSOLIDATED
            </span>
          </div>

          <p className="text-xs leading-relaxed text-[#c6c6cb] sm:text-sm">
            Engineered Luxury. Structural Integrity. Exclusive Boutique
            Residences in Dehiwala designed for generational equity and peace
            of mind.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.08)] px-3 py-1 text-[10px] font-bold text-[#e9c349]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
            Licensed Developer | CMA Compliant
          </div>
        </div>

        {/* =====================================================
            COLUMN 2 - NAVIGATION
        ====================================================== */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            Navigation
          </h4>

          <ul className="space-y-2.5 text-xs text-[#c6c6cb]">
            <li>
              <a
                href="/#home"
                className="transition-colors hover:text-[#e9c349]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about.html#about"
                className="transition-colors hover:text-[#e9c349]"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/Residences.html"
                className="transition-colors hover:text-[#e9c349]"
              >
                Residences
              </a>
            </li>

            <li>
              <a
                href="/investment.html#investment"
                className="font-bold text-[#e9c349]"
              >
                Investment
              </a>
            </li>

            <li>
              <a
                href="/testimonials.html#testimonials"
                className="transition-colors hover:text-[#e9c349]"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                href="/FAQ.html#faq"
                className="transition-colors hover:text-[#e9c349]"
              >
                FAQ &amp; Due Diligence
              </a>
            </li>

            <li>
              <a
                href="/contact.html#contact"
                className="transition-colors hover:text-[#e9c349]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* =====================================================
            COLUMN 3 - PORTFOLIOS & SUITES
        ====================================================== */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            Portfolios &amp; Suites
          </h4>

          <ul className="space-y-2.5 text-xs text-[#c6c6cb]">
            <li>
              <a
                href="/Residences.html"
                className="font-semibold text-[#e0e2ec] transition-colors hover:text-[#e9c349]"
              >
                Grand Suite A (1,425 Sq.Ft) — 3 Bed
              </a>
            </li>

            <li>
              <a
                href="/Residences.html"
                className="font-semibold text-[#e0e2ec] transition-colors hover:text-[#e9c349]"
              >
                Executive Suite B (1,273 Sq.Ft) — 3 Bed
              </a>
            </li>

            <li>
              <a
                href="/investment-calculator.html"
                className="mt-1 flex items-center gap-1 text-[#e9c349] hover:underline"
              >
                ROI &amp; Yield Calculator →
              </a>
            </li>

            <li>
              <a
                href="/brochure.html"
                className="flex items-center gap-1 text-[#e9c349] hover:underline"
              >
                Download Prospectus (PDF) →
              </a>
            </li>

            <li className="pt-2 text-[11px] text-[#8e9099]">
              Kawdana Residence — 100% Sold Out
            </li>

            <li className="text-[11px] text-[#8e9099]">
              Hill Street Project — Fully Booked
            </li>
          </ul>
        </div>

        {/* =====================================================
            COLUMN 4 - VIP CONCIERGE
        ====================================================== */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            VIP Concierge
          </h4>

          <div className="space-y-2.5 text-xs text-[#c6c6cb]">

            {/* PHONE */}
            <p className="flex items-center gap-2">
              <svg
                className="h-4 w-4 shrink-0 text-[#e9c349]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <a
                href="tel:+94771234567"
                className="hover:text-[#e9c349]"
              >
                +94 77 123 4567
              </a>
            </p>

            {/* EMAIL */}
            <p className="flex items-center gap-2">
              <svg
                className="h-4 w-4 shrink-0 text-[#e9c349]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <a
                href="mailto:concierge@ayconsolidated.com"
                className="hover:text-[#e9c349]"
              >
                concierge@ayconsolidated.com
              </a>
            </p>

            {/* ADDRESS */}
            <p className="pt-1 text-[11px] text-[#8e9099]">
              Level 12, Prime Tower, Marine Drive, Colombo 03
            </p>

            {/* WHATSAPP */}
            <div className="mt-3">
              <a
                href="https://wa.me/94771234567?text=Hello%20A%26Y%20Consolidated,%20I%20would%20like%20to%20inquire%20about%20the%20residences."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/20 px-3 py-1.5 text-[11px] font-bold text-emerald-300 transition-all hover:bg-[#25D366]/30"
              >
                <span>Direct WhatsApp Chat</span> →
              </a>
            </div>

            {/* =================================================
                NEWSLETTER
            ================================================== */}
            <div className="mt-4 border-t border-[rgba(69,71,75,0.3)] pt-2">

              <span className="mb-1.5 block text-[11px] font-semibold text-[#e0e2ec]">
                Quarterly Investor Briefing
              </span>

              <form
                onSubmit={handleSubmit}
                className="flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email..."
                  required
                  className="w-full rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] px-3 py-1.5 text-xs text-white placeholder-[rgba(198,198,203,0.4)] focus:border-[#e9c349] focus:outline-none"
                />

                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#e9c349] px-3 py-1.5 text-xs font-bold text-[#3c2f00] transition-all hover:bg-[#ffd659]"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LEGAL BAR
      ====================================================== */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(69,71,75,0.3)] pt-8 text-[11px] text-[#8e9099] sm:flex-row">

        <p>
          © 2024–2026 A&amp;Y CONSOLIDATED (PVT) LTD. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="/privacy-terms.html#privacy"
            className="transition-colors hover:text-[#e9c349]"
          >
            Privacy Policy
          </a>

          <a
            href="/privacy-terms.html#terms"
            className="transition-colors hover:text-[#e9c349]"
          >
            Terms of Service
          </a>

          <a
            href="/privacy-terms.html#disclaimers"
            className="transition-colors hover:text-[#e9c349]"
          >
            Legal Disclaimers
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;