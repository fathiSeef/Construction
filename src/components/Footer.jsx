import React from "react";

function Footer() {
  // =========================================================
  // BUSINESS VIDEO STAGE MAP
  //
  // 0 → Construction
  // 1 → Import & Export
  // 2 → Trading & Distribution
  // =========================================================

  const businessStages = {
    "progression-section-1": 0,
    "progression-section-2": 1,
    "progression-section-3": 2,
  };

  // =========================================================
  // GET DOCUMENT TOP
  // =========================================================

  const getDocumentTop = (element) => {
    let top = 0;
    let currentElement = element;

    while (currentElement) {
      top += currentElement.offsetTop;
      currentElement = currentElement.offsetParent;
    }

    return top;
  };

  // =========================================================
  // SCROLL TO SECTION
  // =========================================================

  const scrollToSection = (sectionId) => {
    // =======================================================
    // BUSINESS VIDEO NAVIGATION
    // =======================================================

    if (businessStages[sectionId] !== undefined) {
      const stageIndex = businessStages[sectionId];

      if (
        typeof window.__businessScrollToStage === "function"
      ) {
        window.__businessScrollToStage(stageIndex);
        return;
      }

      // =====================================================
      // FALLBACK
      // =====================================================

      const businessElement =
        document.getElementById("businesses");

      if (!businessElement) {
        return;
      }

      const headerHeight = 73;

      const elementTop =
        getDocumentTop(businessElement);

      const targetPosition = Math.max(
        0,
        elementTop - headerHeight
      );

      window.scrollTo({
        top: targetPosition,
        behavior: "auto",
      });

      return;
    }

    // =======================================================
    // NORMAL SECTION
    //
    // Home
    // Our Team
    // Contact
    // =======================================================

    const element =
      document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const headerHeight = 73;

    const elementTop =
      getDocumentTop(element);

    const targetPosition = Math.max(
      0,
      elementTop - headerHeight
    );

    // =======================================================
    // URL
    // =======================================================

    window.history.replaceState(
      null,
      "",
      sectionId === "home"
        ? "/"
        : `/#${sectionId}`
    );

    // =======================================================
    // DIRECT JUMP
    // =======================================================

    window.scrollTo({
      top: targetPosition,
      behavior: "auto",
    });
  };

  // =========================================================
  // FOOTER
  // =========================================================

  return (
    <footer
      id="footer"
      className="mt-16 w-full border-t border-[rgba(233,195,73,0.2)] bg-[#0b0e15] py-12 sm:mt-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 xl:px-16">
      {/* =====================================================
          MAIN FOOTER GRID
      ====================================================== */}

      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* ===================================================
            COLUMN 1 — BRAND
        ==================================================== */}

        <div>

          {/* LOGO */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("home")
            }
            className="mb-4 flex items-center gap-3"
          >
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
          </button>

          {/* DESCRIPTION */}

          <p className="text-xs leading-relaxed text-[#c6c6cb] sm:text-sm">
            Building businesses with quality,
            integrity and purpose across
            construction, real estate, import
            &amp; export, trading and
            distribution.
          </p>

          {/* STATUS */}

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
              <button
                type="button"
                onClick={() =>
                  scrollToSection("home")
                }
                className="text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Home
              </button>
            </li>

            {/* CONSTRUCTION */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "progression-section-1"
                  )
                }
                className="text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Construction
              </button>
            </li>

            {/* IMPORT & EXPORT */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "progression-section-2"
                  )
                }
                className="text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Import &amp; Export
              </button>
            </li>

            {/* DISTRIBUTION */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "progression-section-3"
                  )
                }
                className="text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Distribution
              </button>
            </li>

            {/* OUR TEAM */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection("team")
                }
                className="text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Our Team
              </button>
            </li>

            {/* CONTACT */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection("location")
                }
                className="text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Contact
              </button>
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
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "progression-section-1"
                  )
                }
                className="text-left text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Construction &amp;
                Real Estate
              </button>
            </li>

            {/* IMPORT & EXPORT */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "progression-section-2"
                  )
                }
                className="text-left text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Import &amp; Export
              </button>
            </li>

            {/* TRADING & DISTRIBUTION */}

            <li>
              <button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "progression-section-3"
                  )
                }
                className="text-left text-[#c6c6cb] transition-colors hover:text-[#e9c349]"
              >
                Trading &amp;
                Distribution
              </button>
            </li>

          </ul>

        </div>

        {/* ===================================================
            COLUMN 4 — GET IN TOUCH
        ==================================================== */}

        <div>

          <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349]">
            Get In Touch
          </h4>

          <div className="space-y-3 text-xs text-[#c6c6cb]">

            {/* =================================================
                PHONE 1
            ================================================== */}

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
                href="tel:+94779595202"
                className="transition-colors hover:text-[#e9c349]"
              >
                077 959 5202
              </a>

              <span>/</span>

              <a
                href="tel:+94713533202"
                className="transition-colors hover:text-[#e9c349]"
              >
                071 353 3202
              </a>

            </p>

            {/* =================================================
                PHONE 2
            ================================================== */}

            <p className="flex items-center gap-2">

              

            </p>

            {/* =================================================
                EMAIL
            ================================================== */}

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
                href="mailto:info@ayconsolidated.com"
                className="transition-colors hover:text-[#e9c349]"
              >
                info@ayconsolidated.com
              </a>

            </p>

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
                href="mailto:info@ayconsolidated.com"
                className="transition-colors hover:text-[#e9c349]"
              >
                a&yconsolidated@gmail.com
              </a>

            </p>

            {/* =================================================
                ADDRESS
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("location")
              }
              className="flex items-start gap-2 pt-1 text-left text-[11px] leading-5 text-[#8e9099] transition-colors hover:text-[#e9c349]"
            >

              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-[#e9c349]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span>
                No 55/1 B, Nikape Road,
                <br />
                Nedimala, Dehiwala
              </span>

            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[rgba(69,71,75,0.3)] pt-8 text-[11px] text-[#8e9099] sm:flex-row">

        {/* COPYRIGHT */}

        <p>
          © 2024–2026 A&amp;Y
          CONSOLIDATED (PVT) LTD.
          ALL RIGHTS RESERVED.
        </p>

        {/* CURRENT SITE STRUCTURE */}

        <div className="flex items-center gap-5">

          {/* HOME */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("home")
            }
            className="transition-colors hover:text-[#e9c349]"
          >
            Home
          </button>

          {/* OUR TEAM */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("team")
            }
            className="transition-colors hover:text-[#e9c349]"
          >
            Our Team
          </button>

          {/* CONTACT */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("location")
            }
            className="transition-colors hover:text-[#e9c349]"
          >
            Contact
          </button>

        </div>

      </div>
      </div>

    </footer>
  );
}

export default Footer;