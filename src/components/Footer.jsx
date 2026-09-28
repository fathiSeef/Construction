import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // =========================================================
  // NEWSLETTER
  // =========================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  // =========================================================
  // NAVIGATION LINK STYLE
  // =========================================================

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive
      ? "font-bold text-[#e9c349]"
      : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // FOOTER
  // =========================================================

  return (
    <footer
      id="footer"
      className="mx-auto mt-16 w-full max-w-[1280px] border-t border-[rgba(233,195,73,0.2)] bg-[#0b0e15] px-4 py-12 sm:mt-24 sm:px-6 lg:px-16"
    >
      {/* =====================================================
          MAIN FOOTER GRID
      ====================================================== */}

      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* ===================================================
            COLUMN 1 — BRAND
        ==================================================== */}

        <div>
          {/* Logo */}

          <div className="mb-4 flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-xl border border-[rgba(233,195,73,0.3)] bg-[#0b0e15]">
              <img
                src="/assets/icons/logo.png"
                alt="A&Y Consolidated Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="font-display text-lg font-bold text-[#e0e2ec]">
              A&amp;Y CONSOLIDATED
            </span>
          </div>

          {/* Description */}

          <p className="text-xs leading-relaxed text-[#c6c6cb] sm:text-sm">
            Building businesses with quality, integrity and purpose across
            construction, real estate, import &amp; export, trading and
            distribution.
          </p>

          {/* Status */}

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.08)] px-3 py-1 text-[10px] font-bold text-[#e9c349]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />

            Building Long-Term Value
          </div>
        </div>

        {/* ===================================================
            COLUMN 2 — NAVIGATION
        ==================================================== */}

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            Navigation
          </h4>

          <ul className="space-y-2.5 text-xs">

            {/* HOME */}

            <li>
              <NavLink
                to="/"
                end
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>

            {/* ABOUT */}

            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
              >
                About Us
              </NavLink>
            </li>

            {/* BLOG */}

            <li>
              <NavLink
                to="/blog"
                className={navLinkClass}
              >
                Blog
              </NavLink>
            </li>

            {/* FAQ */}

            <li>
              <NavLink
                to="/faq"
                className={navLinkClass}
              >
                FAQ
              </NavLink>
            </li>

            {/* CONTACT */}

            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

        {/* ===================================================
    COLUMN 3 — OUR BUSINESSES
==================================================== */}

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            Our Businesses
          </h4>

          <ul className="space-y-3 text-xs">

            {/* CONSTRUCTION & REAL ESTATE */}

            <li>
              <NavLink
                to="/construction-real-estate"
                className={navLinkClass}
              >
                Construction &amp; Real Estate
              </NavLink>
            </li>

            {/* IMPORT & EXPORT */}

            <li>
              <NavLink
                to="/import-export"
                className={navLinkClass}
              >
                Import &amp; Export
              </NavLink>
            </li>

            {/* TRADING & DISTRIBUTION */}

            <li>
              <NavLink
                to="/trading-distribution"
                className={navLinkClass}
              >
                Trading &amp; Distribution
              </NavLink>
            </li>

          </ul>
        </div>

        {/* ===================================================
            COLUMN 4 — CONTACT
        ==================================================== */}

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            Get In Touch
          </h4>

          <div className="space-y-3 text-xs text-[#c6c6cb]">

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
                className="transition-colors hover:text-[#e9c349]"
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
                className="transition-colors hover:text-[#e9c349]"
              >
                concierge@ayconsolidated.com
              </a>

            </p>

            {/* ADDRESS */}

            <p className="pt-1 text-[11px] leading-5 text-[#8e9099]">
              Level 12, Prime Tower,
              <br />
              Marine Drive, Colombo 03
            </p>

            {/* WHATSAPP */}

            <div className="mt-4">

              <a
                href="https://wa.me/94771234567?text=Hello%20A%26Y%20Consolidated,%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/20 px-3 py-1.5 text-[11px] font-bold text-emerald-300 transition-all hover:bg-[#25D366]/30"
              >
                <span>WhatsApp Us</span>

                <span aria-hidden="true">
                  →
                </span>
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <div className="border-t border-[rgba(69,71,75,0.3)] pt-8">

        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

          {/* Newsletter Text */}

          <div>

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#e9c349]">
              Stay Connected
            </span>

            <h4 className="mt-2 font-display text-2xl text-[#e0e2ec]">
              Stay updated with A&amp;Y Consolidated.
            </h4>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#8e9099]">
              Receive company updates, business insights and important
              announcements from the A&amp;Y team.
            </p>

          </div>

          {/* Newsletter Form */}

          <form
            onSubmit={handleSubmit}
            className="flex gap-2"
          >

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Your email..."
              required
              className="w-full rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] px-3 py-2 text-xs text-white placeholder:text-[#6f747f] focus:border-[#e9c349] focus:outline-none"
            />

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-[#e9c349] px-4 py-2 text-xs font-bold text-[#3c2f00] transition-all hover:bg-[#ffd659]"
            >
              Join
            </button>

          </form>

          {/* Success */}

          {subscribed && (
            <p className="text-xs text-emerald-300 lg:col-start-2">
              Thank you. You have successfully subscribed.
            </p>
          )}

        </div>

      </div>

      {/* =====================================================
          BOTTOM LEGAL BAR
      ====================================================== */}

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[rgba(69,71,75,0.3)] pt-8 text-[11px] text-[#8e9099] sm:flex-row">

        {/* COPYRIGHT */}

        <p>
          © 2024–2026 A&amp;Y CONSOLIDATED (PVT) LTD.
          ALL RIGHTS RESERVED.
        </p>

        {/* LEGAL LINKS */}

        <div className="flex items-center gap-5">

          <Link
            to="/privacy-terms#privacy"
            className="transition-colors hover:text-[#e9c349]"
          >
            Privacy Policy
          </Link>

          <Link
            to="/privacy-terms#terms"
            className="transition-colors hover:text-[#e9c349]"
          >
            Terms of Service
          </Link>

          <Link
            to="/privacy-terms#disclaimers"
            className="transition-colors hover:text-[#e9c349]"
          >
            Legal
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;