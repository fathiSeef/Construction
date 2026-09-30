import React, { useEffect, useState } from "react";

function Navbar() {
  // =========================================================
  // MOBILE MENU STATE
  // =========================================================

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  // =========================================================
  // ACTIVE SECTION
  // =========================================================

  const [activeSection, setActiveSection] =
    useState("home");

  // =========================================================
  // NAVIGATION IDs
  //
  // progression-section-1 = Construction
  // progression-section-2 = Import & Export
  // progression-section-3 = Distribution
  // team = Our Team
  //
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
      id: "team",
      label: "Our Team",
    },
    {
      id: "location",
      label: "Contact",
    },
  ];

  // =========================================================
  // BUSINESS STAGE MAP
  // =========================================================

  const businessStages = {
    "progression-section-1": 0,
    "progression-section-2": 1,
    "progression-section-3": 2,
  };

  // =========================================================
  // MOBILE MENU
  // =========================================================

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(
      (previous) => !previous
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // =========================================================
  // GET DOCUMENT TOP
  // =========================================================

  const getDocumentTop = (element) => {
    let top = 0;
    let currentElement = element;

    while (currentElement) {
      top += currentElement.offsetTop;

      currentElement =
        currentElement.offsetParent;
    }

    return top;
  };

  // =========================================================
  // UPDATE ACTIVE SECTION
  //
  // Normal sections:
  //
  // Home
  // Our Team
  // Location
  //
  // Business stages are handled using the actual
  // pinned BusinessProgression ScrollTrigger.
  // =========================================================

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY;

      const activationPoint =
        scrollPosition + 100;

      // Start with no active navigation item.
      //
      // This is important for the small transition area
      // between the pinned Business section and Our Team.
      // Home should NOT remain active in that gap.
      let currentSection = "";

      // =====================================================
      // SECTION ELEMENTS
      // =====================================================

      const homeElement =
        document.getElementById("home");

      const businessElement =
        document.getElementById(
          "businesses"
        );

      const teamElement =
        document.getElementById(
          "team"
        );

      const locationElement =
        document.getElementById(
          "location"
        );

      const homeTop = homeElement
        ? getDocumentTop(homeElement)
        : 0;

      const businessTop = businessElement
        ? getDocumentTop(businessElement)
        : null;

      const teamTop = teamElement
        ? getDocumentTop(teamElement)
        : null;

      const locationTop = locationElement
        ? getDocumentTop(locationElement)
        : null;

      // =====================================================
      // HOME
      //
      // Home is active ONLY while the user is inside
      // the actual Hero/Home section.
      // =====================================================

      if (
        homeElement &&
        activationPoint >= homeTop &&
        businessTop !== null &&
        activationPoint < businessTop
      ) {
        currentSection = "home";
      }

      // =====================================================
      // BUSINESS SECTION
      //
      // 3 videos
      // 3600px each
      //
      // Video 1 = Construction
      // Video 2 = Import & Export
      // Video 3 = Distribution
      // =====================================================

      if (
        businessTop !== null &&
        activationPoint >= businessTop
      ) {
        const totalBusinessScroll =
          3600 * 3;

        const businessEnd =
          businessTop +
          totalBusinessScroll;

        // ===================================================
        // INSIDE PINNED BUSINESS VIDEO SECTION
        // ===================================================

        if (
          activationPoint <
          businessEnd
        ) {
          const progress =
            Math.max(
              0,
              Math.min(
                0.999999,
                (activationPoint -
                  businessTop) /
                  totalBusinessScroll
              )
            );

          const stageIndex =
            Math.min(
              2,
              Math.floor(
                progress * 3
              )
            );

          if (stageIndex === 0) {
            currentSection =
              "progression-section-1";
          } else if (
            stageIndex === 1
          ) {
            currentSection =
              "progression-section-2";
          } else {
            currentSection =
              "progression-section-3";
          }
        }

        // ===================================================
        // TRANSITION GAP
        //
        // Business section has finished but Our Team
        // has not started yet.
        //
        // Keep every navigation item inactive here.
        // ===================================================

        else if (
          teamTop !== null &&
          activationPoint < teamTop
        ) {
          currentSection = "";
        }

        // ===================================================
        // OUR TEAM
        // ===================================================

        else if (
          teamTop !== null &&
          activationPoint >= teamTop
        ) {
          currentSection = "team";
        }
      }

      // =====================================================
      // OUR TEAM
      //
      // This also handles cases where businessTop is not
      // available for any reason.
      // =====================================================

      if (
        currentSection === "" &&
        teamTop !== null &&
        activationPoint >= teamTop
      ) {
        currentSection = "team";
      }

      // =====================================================
      // LOCATION
      // =====================================================

      if (
        locationTop !== null &&
        activationPoint >= locationTop
      ) {
        currentSection = "location";
      }

      // =====================================================
      // ONLY UPDATE IF CHANGED
      // =====================================================

      setActiveSection(
        (previousSection) => {
          if (
            previousSection ===
            currentSection
          ) {
            return previousSection;
          }

          return currentSection;
        }
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateActiveSection
        );

        ticking = true;
      }
    };

    const handleResize = () => {
      updateActiveSection();
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // =========================================================
  // SCROLL TO SECTION
  // =========================================================

  const scrollToHomeSection = (
    sectionId
  ) => {
    closeMobileMenu();

    // =======================================================
    // BUSINESS VIDEO NAVIGATION
    // =======================================================

    if (
      businessStages[sectionId] !==
      undefined
    ) {
      const stageIndex =
        businessStages[
          sectionId
        ];

      /*
        BusinessProgression in Home.jsx
        creates this function.

        stage 0
        → Construction frame 001

        stage 1
        → Import & Export frame 001

        stage 2
        → Distribution frame 001
      */

      if (
        typeof window
          .__businessScrollToStage ===
        "function"
      ) {
        window.__businessScrollToStage(
          stageIndex
        );

        setActiveSection(
          sectionId
        );

        return;
      }

      // =====================================================
      // FALLBACK
      //
      // If BusinessProgression has not registered
      // its function yet, go to the beginning of
      // the business section.
      // =====================================================

      const businessElement =
        document.getElementById(
          "businesses"
        );

      if (!businessElement) {
        return;
      }

      const headerHeight = 73;

      const elementTop =
        getDocumentTop(
          businessElement
        );

      const targetPosition =
        Math.max(
          0,
          elementTop -
            headerHeight
        );

      window.scrollTo({
        top: targetPosition,
        behavior: "auto",
      });

      setActiveSection(
        sectionId
      );

      return;
    }

    // =======================================================
    // NORMAL SECTION NAVIGATION
    //
    // Home
    // Our Team
    // Contact
    // =======================================================

    const element =
      document.getElementById(
        sectionId
      );

    if (!element) {
      return;
    }

    const headerHeight = 73;

    const elementTop =
      getDocumentTop(element);

    const targetPosition =
      Math.max(
        0,
        elementTop -
          headerHeight
      );

    setActiveSection(
      sectionId
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
  // ESC KEY
  // =========================================================

  useEffect(() => {
    const handleEscape = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        setIsMobileMenuOpen(
          false
        );
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU ON DESKTOP
  // =========================================================

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >=
        1024
      ) {
        setIsMobileMenuOpen(
          false
        );
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // =========================================================
  // DESKTOP LINK STYLE
  // =========================================================

  const desktopLinkClass = (
    sectionId
  ) =>
    `relative cursor-pointer text-[12px] font-bold tracking-[1.8px] transition-colors duration-300 ${
      activeSection ===
      sectionId
        ? "text-[#e9c349]"
        : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // MOBILE LINK STYLE
  // =========================================================

  const mobileLinkClass = (
    sectionId
  ) =>
    `relative flex cursor-pointer items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors duration-300 ${
      activeSection ===
      sectionId
        ? "text-[#e9c349]"
        : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // DESKTOP ACTIVE DOT
  // =========================================================

  const DesktopActiveDot = ({
    sectionId,
  }) => {
    if (
      activeSection !==
      sectionId
    ) {
      return null;
    }

    return (
      <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
    );
  };

  // =========================================================
  // MOBILE ACTIVE DOT
  // =========================================================

  const MobileActiveDot = ({
    sectionId,
  }) => {
    if (
      activeSection !==
      sectionId
    ) {
      return null;
    }

    return (
      <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

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

          {/* LOGO */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "home"
              )
            }
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

            {/* HOME */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection(
                  "home"
                )
              }
              className={desktopLinkClass(
                "home"
              )}
            >
              Home

              <DesktopActiveDot
                sectionId="home"
              />
            </button>

            {/* CONSTRUCTION */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection(
                  "progression-section-1"
                )
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

            {/* IMPORT & EXPORT */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection(
                  "progression-section-2"
                )
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

            {/* DISTRIBUTION */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection(
                  "progression-section-3"
                )
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

            {/* OUR TEAM */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection(
                  "team"
                )
              }
              className={desktopLinkClass(
                "team"
              )}
            >
              Our Team

              <DesktopActiveDot
                sectionId="team"
              />
            </button>

            {/* CONTACT */}

            <button
              type="button"
              onClick={() =>
                scrollToHomeSection(
                  "location"
                )
              }
              className={desktopLinkClass(
                "location"
              )}
            >
              Contact

              <DesktopActiveDot
                sectionId="location"
              />
            </button>
          </nav>

          {/* GET IN TOUCH */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "location"
              )
            }
            className="hidden cursor-pointer rounded-xl bg-[#e9c349] px-6 py-2.5 text-[12px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_0_15px_rgba(233,195,73,0.3)] transition-all hover:bg-[#ffd659] lg:flex"
          >
            Get In Touch
          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={
              toggleMobileMenu
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(233,195,73,0.35)] bg-[rgba(28,31,38,0.8)] text-[#e9c349] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:border-[#e9c349] lg:hidden"
            aria-label="Toggle Navigation Menu"
            aria-expanded={
              isMobileMenuOpen
            }
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
        className={`fixed inset-x-0 top-[73px] z-50 flex-col border-b border-[rgba(233,195,73,0.3)] bg-[#10131a] px-6 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.98)] lg:hidden ${
          isMobileMenuOpen
            ? "flex"
            : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-3">

          {/* HOME */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "home"
              )
            }
            className={mobileLinkClass(
              "home"
            )}
          >
            <span>Home</span>

            <MobileActiveDot
              sectionId="home"
            />
          </button>

          {/* CONSTRUCTION */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "progression-section-1"
              )
            }
            className={mobileLinkClass(
              "progression-section-1"
            )}
          >
            <span>
              Construction
            </span>

            <MobileActiveDot
              sectionId="progression-section-1"
            />
          </button>

          {/* IMPORT & EXPORT */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "progression-section-2"
              )
            }
            className={mobileLinkClass(
              "progression-section-2"
            )}
          >
            <span>
              Import &amp; Export
            </span>

            <MobileActiveDot
              sectionId="progression-section-2"
            />
          </button>

          {/* DISTRIBUTION */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "progression-section-3"
              )
            }
            className={mobileLinkClass(
              "progression-section-3"
            )}
          >
            <span>
              Distribution
            </span>

            <MobileActiveDot
              sectionId="progression-section-3"
            />
          </button>

          {/* OUR TEAM */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "team"
              )
            }
            className={mobileLinkClass(
              "team"
            )}
          >
            <span>
              Our Team
            </span>

            <MobileActiveDot
              sectionId="team"
            />
          </button>

          {/* CONTACT */}

          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "location"
              )
            }
            className={mobileLinkClass(
              "location"
            )}
          >
            <span>
              Contact
            </span>

            <MobileActiveDot
              sectionId="location"
            />
          </button>
        </nav>

        {/* MOBILE GET IN TOUCH */}

        <div className="mt-5 pt-2">
          <button
            type="button"
            onClick={() =>
              scrollToHomeSection(
                "location"
              )
            }
            className="flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-[#e9c349] text-[11px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] transition-all hover:bg-[#ffd659]"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;