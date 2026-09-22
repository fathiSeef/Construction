import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  // =========================================================
  // DESKTOP DROPDOWN STATES
  // =========================================================

  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  // =========================================================
  // MOBILE MENU STATES
  // =========================================================

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isMobileBusinessOpen, setIsMobileBusinessOpen] =
    useState(false);

  const [isMobileProjectsOpen, setIsMobileProjectsOpen] =
    useState(false);

  // =========================================================
  // REFS
  // =========================================================

  const businessMenuRef = useRef(null);
  const projectsMenuRef = useRef(null);

  const location = useLocation();

  // =========================================================
  // DROPDOWN ROUTES
  // =========================================================

  const businessPaths = [
    "/construction-real-estate",
    "/import-export",
    "/trading-distribution",
  ];

  const projectPaths = [
    "/residences",
    "/investment",
  ];

  // =========================================================
  // ACTIVE PARENT STATES
  // =========================================================

  const isBusinessActive = businessPaths.includes(
    location.pathname
  );

  const isProjectsActive = projectPaths.includes(
    location.pathname
  );

  // =========================================================
  // MOBILE MENU
  // =========================================================

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);

    setIsMobileBusinessOpen(false);
    setIsMobileProjectsOpen(false);
  };

  // =========================================================
  // DESKTOP OUTSIDE CLICK
  // =========================================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        businessMenuRef.current &&
        !businessMenuRef.current.contains(event.target)
      ) {
        setIsBusinessOpen(false);
      }

      if (
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(event.target)
      ) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  // =========================================================
  // ESC KEY
  // =========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsBusinessOpen(false);
        setIsProjectsOpen(false);

        setIsMobileBusinessOpen(false);
        setIsMobileProjectsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // =========================================================
  // DESKTOP NAV LINK STYLE
  // =========================================================

  const navLinkClass = ({ isActive }) =>
    `relative text-[12px] font-bold tracking-[1.8px] transition ${
      isActive
        ? "text-[#e9c349]"
        : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // MOBILE NAV LINK STYLE
  // =========================================================

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${
      isActive
        ? "text-[#e9c349]"
        : "text-[#c6c6cb] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // DESKTOP DROPDOWN ITEM
  // =========================================================

  const dropdownItemClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-[12px] font-bold tracking-[1px] transition-all ${
      isActive
        ? "bg-[rgba(233,195,73,0.10)] text-[#e9c349]"
        : "text-[#c6c6cb] hover:bg-[rgba(233,195,73,0.08)] hover:text-[#e9c349]"
    }`;

  // =========================================================
  // MOBILE DROPDOWN ITEM
  // =========================================================

  const mobileDropdownItemClass = ({ isActive }) =>
    `block rounded-md py-2 text-[12px] font-semibold tracking-[1px] transition-all ${
      isActive
        ? "bg-[rgba(233,195,73,0.08)] text-[#e9c349]"
        : "text-[#a9a9b0] hover:text-[#e9c349]"
    }`;

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

          <NavLink
            to="/"
            onClick={closeMobileMenu}
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
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-8 lg:flex">

            {/* HOME */}

            <NavLink
              to="/"
              end
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  Home

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                  )}
                </>
              )}
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  About Us

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                  )}
                </>
              )}
            </NavLink>

            {/* =================================================
                OUR BUSINESSES
            ================================================== */}

            <div
              ref={businessMenuRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => {
                  setIsBusinessOpen((prev) => !prev);
                  setIsProjectsOpen(false);
                }}
                className={`relative flex cursor-pointer items-center gap-2 text-[12px] font-bold tracking-[1.8px] transition ${
                  isBusinessActive
                    ? "text-[#e9c349]"
                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                }`}
              >
                Our Businesses

                <svg
                  className={`h-3 w-3 transition-transform ${
                    isBusinessOpen
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                {isBusinessActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                )}
              </button>

              {isBusinessOpen && (
                <div className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-xl border border-[rgba(233,195,73,0.25)] bg-[#10131a] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

                  <NavLink
                    to="/construction-real-estate"
                    onClick={() => {
                      setIsBusinessOpen(false);
                      setIsProjectsOpen(false);
                    }}
                    className={dropdownItemClass}
                  >
                    Construction &amp; Real Estate
                  </NavLink>

                  <NavLink
                    to="/import-export"
                    onClick={() => {
                      setIsBusinessOpen(false);
                      setIsProjectsOpen(false);
                    }}
                    className={dropdownItemClass}
                  >
                    Import &amp; Export
                  </NavLink>

                  <NavLink
                    to="/trading-distribution"
                    onClick={() => {
                      setIsBusinessOpen(false);
                      setIsProjectsOpen(false);
                    }}
                    className={dropdownItemClass}
                  >
                    Trading &amp; Distribution
                  </NavLink>

                </div>
              )}
            </div>

            {/* =================================================
                PROJECTS
            ================================================== */}

            <div
              ref={projectsMenuRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => {
                  setIsProjectsOpen((prev) => !prev);
                  setIsBusinessOpen(false);
                }}
                className={`relative flex cursor-pointer items-center gap-2 text-[12px] font-bold tracking-[1.8px] transition ${
                  isProjectsActive
                    ? "text-[#e9c349]"
                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                }`}
              >
                Projects

                <svg
                  className={`h-3 w-3 transition-transform ${
                    isProjectsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                {isProjectsActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                )}
              </button>

              {isProjectsOpen && (
                <div className="absolute left-1/2 top-full mt-5 w-56 -translate-x-1/2 rounded-xl border border-[rgba(233,195,73,0.25)] bg-[#10131a] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

                  <NavLink
                    to="/residences"
                    onClick={() => {
                      setIsProjectsOpen(false);
                      setIsBusinessOpen(false);
                    }}
                    className={dropdownItemClass}
                  >
                    Residences
                  </NavLink>

                  <NavLink
                    to="/investment"
                    onClick={() => {
                      setIsProjectsOpen(false);
                      setIsBusinessOpen(false);
                    }}
                    className={dropdownItemClass}
                  >
                    Investment
                  </NavLink>

                </div>
              )}
            </div>

            {/* TESTIMONIALS */}

            <NavLink
              to="/testimonials"
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  Testimonials

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                  )}
                </>
              )}
            </NavLink>

            {/* FAQ */}

            <NavLink
              to="/faq"
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  FAQ

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                  )}
                </>
              )}
            </NavLink>

            {/* CONTACT */}

            <NavLink
              to="/contact"
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  Contact

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                  )}
                </>
              )}
            </NavLink>

          </nav>

          {/* =================================================
              DESKTOP GET IN TOUCH
          ================================================== */}

          <NavLink
            to="/contact#contact"
            className="hidden rounded-xl bg-[#e9c349] px-6 py-2.5 text-[12px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_0_15px_rgba(233,195,73,0.3)] transition-all hover:bg-[#ffd659] lg:flex"
          >
            Get In Touch
          </NavLink>

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
        className={`fixed inset-x-0 top-[73px] z-50 flex-col border-b border-[rgba(233,195,73,0.3)] bg-[#10131a] px-6 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.98)] lg:hidden ${
          isMobileMenuOpen
            ? "flex"
            : "hidden"
        }`}
      >

        <nav className="flex flex-col gap-3">

          {/* HOME */}

          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
            className={mobileLinkClass}
          >
            {({ isActive }) => (
              <>
                <span>Home</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                )}
              </>
            )}
          </NavLink>

          {/* ABOUT */}

          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={mobileLinkClass}
          >
            {({ isActive }) => (
              <>
                <span>About Us</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                )}
              </>
            )}
          </NavLink>

          {/* =================================================
              MOBILE OUR BUSINESSES
          ================================================== */}

          <button
            type="button"
            onClick={() => {
              setIsMobileBusinessOpen((prev) => !prev);
              setIsMobileProjectsOpen(false);
            }}
            className={`flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-left text-[13px] font-bold tracking-[1.5px] transition-colors ${
              isBusinessActive
                ? "text-[#e9c349]"
                : "text-[#c6c6cb] hover:text-[#e9c349]"
            }`}
          >
            <span>Our Businesses</span>

            <svg
              className={`h-4 w-4 transition-transform ${
                isMobileBusinessOpen
                  ? "rotate-180"
                  : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* MOBILE BUSINESS DROPDOWN */}

          {isMobileBusinessOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-[rgba(233,195,73,0.2)] pl-4">

              <NavLink
                to="/construction-real-estate"
                onClick={closeMobileMenu}
                className={mobileDropdownItemClass}
              >
                Construction &amp; Real Estate
              </NavLink>

              <NavLink
                to="/import-export"
                onClick={closeMobileMenu}
                className={mobileDropdownItemClass}
              >
                Import &amp; Export
              </NavLink>

              <NavLink
                to="/trading-distribution"
                onClick={closeMobileMenu}
                className={mobileDropdownItemClass}
              >
                Trading &amp; Distribution
              </NavLink>

            </div>
          )}

          {/* =================================================
              MOBILE PROJECTS
          ================================================== */}

          <button
            type="button"
            onClick={() => {
              setIsMobileProjectsOpen((prev) => !prev);
              setIsMobileBusinessOpen(false);
            }}
            className={`flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-left text-[13px] font-bold tracking-[1.5px] transition-colors ${
              isProjectsActive
                ? "text-[#e9c349]"
                : "text-[#c6c6cb] hover:text-[#e9c349]"
            }`}
          >
            <span>Projects</span>

            <svg
              className={`h-4 w-4 transition-transform ${
                isMobileProjectsOpen
                  ? "rotate-180"
                  : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* MOBILE PROJECT DROPDOWN */}

          {isMobileProjectsOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-[rgba(233,195,73,0.2)] pl-4">

              <NavLink
                to="/residences"
                onClick={closeMobileMenu}
                className={mobileDropdownItemClass}
              >
                Residences
              </NavLink>

              <NavLink
                to="/investment"
                onClick={closeMobileMenu}
                className={mobileDropdownItemClass}
              >
                Investment
              </NavLink>

            </div>
          )}

          {/* TESTIMONIALS */}

          <NavLink
            to="/testimonials"
            onClick={closeMobileMenu}
            className={mobileLinkClass}
          >
            {({ isActive }) => (
              <>
                <span>Testimonials</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                )}
              </>
            )}
          </NavLink>

          {/* FAQ */}

          <NavLink
            to="/faq"
            onClick={closeMobileMenu}
            className={mobileLinkClass}
          >
            {({ isActive }) => (
              <>
                <span>FAQ</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                )}
              </>
            )}
          </NavLink>

          {/* CONTACT */}

          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={mobileLinkClass}
          >
            {({ isActive }) => (
              <>
                <span>Contact</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                )}
              </>
            )}
          </NavLink>

        </nav>

        {/* =================================================
            MOBILE GET IN TOUCH
        ================================================== */}

        <div className="mt-5 pt-2">

          <NavLink
            to="/contact#contact"
            onClick={closeMobileMenu}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-[#e9c349] text-[11px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] transition-all hover:bg-[#ffd659]"
          >
            GET IN TOUCH
          </NavLink>

        </div>

      </div>
    </>
  );
}

export default Navbar;