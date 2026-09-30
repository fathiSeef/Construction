import React, { useEffect, useState } from "react";

function Navbar() {
  // =========================================================
  // MOBILE MENU STATE
  // =========================================================

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // =========================================================
  // ACTIVE SECTION STATE
  // =========================================================

  const [activeSection, setActiveSection] = useState("home");

  // =========================================================
  // NAVIGATION SECTIONS
  // =========================================================

  const sections = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "progression-section-1",
      label: "Construction",
    },
    {
      id: "progression-section-2",
      label: "Import & Export",
    },
    {
      id: "progression-section-3",
      label: "Distribution",
    },
    {
      id: "location",
      label: "Contact",
    },
  ];

  // =========================================================
  // MOBILE MENU
  // =========================================================

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // =========================================================
  // GET ELEMENT DOCUMENT POSITION
  // =========================================================
  // This is intentionally based on offsetTop instead of
  // getBoundingClientRect().
  //
  // Your BuildProgression sections use GSAP pinning.
  // offsetTop gives us the original document position and
  // therefore works more reliably with pinned sections.
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
  // UPDATE ACTIVE SECTION
  // =========================================================

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;

      // Header height + small buffer
      const activationPoint = scrollPosition + 100;

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        const sectionTop = getDocumentTop(element);

        if (activationPoint >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection((previousSection) => {
        if (previousSection === currentSection) {
          return previousSection;
        }

        return currentSection;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateActiveSection();
    };

    // Initial check
    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================================
  // SCROLL TO SECTION
  // =========================================================

  const scrollToHomeSection = (sectionId) => {
    closeMobileMenu();

    const element = document.getElementById(sectionId);

    if (!element) return;

    const headerHeight = 73;

    const elementTop = getDocumentTop(element);

    const targetPosition = Math.max(
      0,
      elementTop - headerHeight
    );

    // Immediately update active navigation
    setActiveSection(sectionId);

    // Update URL without reloading
    window.history.replaceState(
      null,
      "",
      sectionId === "home"
        ? "/"
        : `/#${sectionId}`
    );

    // DIRECT JUMP — no smooth scrolling
    window.scrollTo({
      top: targetPosition,
      behavior: "auto",
    });
  };

  // =========================================================
  // ESC KEY
  // =========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  // =========================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================================
  // DESKTOP NAV LINK STYLE
  // =========================================================

  const desktopLinkClass = (sectionId) =>
    `relative cursor-pointer text-[12px] font-bold tracking-[1.8px] transition-colors duration-300 ${activeSection === sectionId
      ? "text-[#e9c349]"
      : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // MOBILE NAV LINK STYLE
  // =========================================================

  const mobileLinkClass = (sectionId) =>
    `relative flex cursor-pointer items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors duration-300 ${activeSection === sectionId
      ? "text-[#e9c349]"
      : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // DESKTOP ACTIVE DOT
  // =========================================================

  const DesktopActiveDot = ({ sectionId }) => {
    if (activeSection !== sectionId) return null;

    return (
      <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
    );
  };

  // =========================================================
  // MOBILE ACTIVE DOT
  // =========================================================

  const MobileActiveDot = ({ sectionId }) => {
    if (activeSection !== sectionId) return null;

    return (
      <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
    );
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        id="main-header"
        className="fixed left-0 right-0 top-0 z-50 h-[73px] border-b border-[rgba(233,195,73,0.25)] bg-[rgba(16,19,26,0.85)] px-4 py-4 backdrop-blur-[16px] transition-all duration-300 sm:px-6 lg:px-16"
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollToHomeSection("home")}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-[#0b0e15] sm:h-10 sm:w-10">
              <img
                src="/assets/icons/logo.png"
                alt="A&Y Consolidated"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="font-display whitespace-nowrap text-lg font-bold tracking-[-0.03em] text-[#e0e2ec] sm:text-2xl">
              A&amp;Y CONSOLIDATED
            </span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-8 lg:flex">

            {/* ================= HOME ================= */}

            <button
              type="button"
              onClick={() => scrollToHomeSection("home")}
              className={desktopLinkClass("home")}
            >
              Home

              <DesktopActiveDot sectionId="home" />
            </button>

            {/* ================= CONSTRUCTION ================= */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection("progression-section-1")
              }
              className={desktopLinkClass(
                "progression-section-1"
              )}
            >
              Construction

              <DesktopActiveDot
                sectionId="progression-section-1"
              />
            </button>

            {/* ================= IMPORT & EXPORT ================= */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection("progression-section-2")
              }
              className={desktopLinkClass(
                "progression-section-2"
              )}
            >
              Import &amp; Export

              <DesktopActiveDot
                sectionId="progression-section-2"
              />
            </button>

            {/* ================= DISTRIBUTION ================= */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection("progression-section-3")
              }
              className={desktopLinkClass(
                "progression-section-3"
              )}
            >
              Distribution

              <DesktopActiveDot
                sectionId="progression-section-3"
              />
            </button>

            {/* ================= CONTACT ================= */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection("location")
              }
              className={desktopLinkClass("location")}
            >
              Contact

              <DesktopActiveDot sectionId="location" />
            </button>

          </nav>

          {/* =================================================
              DESKTOP GET IN TOUCH
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection("location")
            }
            className="hidden rounded-xl bg-[#e9c349] px-6 py-2.5 text-[12px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_0_15px_rgba(233,195,73,0.3)] transition-all hover:bg-[#ffd659] lg:flex cursor-pointer"
          >
            Get In Touch
          </button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(233,195,73,0.35)] bg-[rgba(28,31,38,0.8)] text-[#e9c349] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:border-[#e9c349] lg:hidden"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`fixed inset-x-0 top-[73px] z-50 flex-col border-b border-[rgba(233,195,73,0.3)] bg-[#10131a] px-6 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.98)] lg:hidden ${isMobileMenuOpen ? "flex" : "hidden"
          }`}
      >

        <nav className="flex flex-col gap-3">

          {/* ================= HOME ================= */}

          <button
            type="button"
            onClick={() => scrollToHomeSection("home")}
            className={mobileLinkClass("home")}
          >
            <span>Home</span>

            <MobileActiveDot sectionId="home" />
          </button>

          {/* ================= CONSTRUCTION ================= */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection("progression-section-1")
            }
            className={mobileLinkClass(
              "progression-section-1"
            )}
          >
            <span>Construction</span>

            <MobileActiveDot
              sectionId="progression-section-1"
            />
          </button>

          {/* ================= IMPORT & EXPORT ================= */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection("progression-section-2")
            }
            className={mobileLinkClass(
              "progression-section-2"
            )}
          >
            <span>Import &amp; Export</span>

            <MobileActiveDot
              sectionId="progression-section-2"
            />
          </button>

          {/* ================= DISTRIBUTION ================= */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection("progression-section-3")
            }
            className={mobileLinkClass(
              "progression-section-3"
            )}
          >
            <span>Distribution</span>

            <MobileActiveDot
              sectionId="progression-section-3"
            />
          </button>

          {/* ================= CONTACT ================= */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection("location")
            }
            className={mobileLinkClass("location")}
          >
            <span>Contact</span>

            <MobileActiveDot sectionId="location" />
          </button>

        </nav>

        {/* =================================================
            MOBILE GET IN TOUCH
        ================================================== */}

        <div className="mt-5 pt-2">

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection("location")
            }
            className="flex h-11 w-full items-center justify-center rounded-xl bg-[#e9c349] text-[11px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] transition-all hover:bg-[#ffd659] cursor-pointer"
          >
            GET IN TOUCH
          </button>

        </div>

      </div>
    </>
  );
}

export default Navbar;