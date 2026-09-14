import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* HEADER */}
            <header
                id="main-header"
                className="fixed left-0 right-0 top-0 z-50 h-[73px] border-b border-[rgba(233,195,73,0.25)] bg-[rgba(16,19,26,0.85)] px-4 py-4 backdrop-blur-[16px] transition-all duration-300 sm:px-6 lg:px-16"
            >
                <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">

                    {/* LOGO */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-3 sm:gap-4"
                        onClick={closeMobileMenu}
                    >
                        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-[#0b0e15] sm:h-10 sm:w-10">
                            <img
                                src="https://www.figma.com/api/mcp/asset/4c30c0ab-fe3d-4ae3-bee8-e5f401a68cba.png"
                                alt="A&Y Consolidated"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <span className="font-display whitespace-nowrap text-lg font-bold tracking-[-0.03em] text-[#e0e2ec] sm:text-2xl">
                            A&amp;Y CONSOLIDATED
                        </span>
                    </NavLink>

                    {/* DESKTOP NAVIGATION */}
                    <nav
                        id="desktop-nav"
                        className="hidden items-center gap-8 lg:flex"
                    >

                        {/* HOME */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
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


                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
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

                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    Services

                                    {isActive && (
                                        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                                    )}
                                </>
                            )}
                        </NavLink>


                        <NavLink
                            to="/residences"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    Residences

                                    {isActive && (
                                        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                                    )}
                                </>
                            )}
                        </NavLink>


                        <NavLink
                            to="/investment"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    Investment

                                    {isActive && (
                                        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e9c349] shadow-[0_0_8px_#e9c349]" />
                                    )}
                                </>
                            )}
                        </NavLink>


                        <NavLink
                            to="/testimonials"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
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

                        <NavLink
                            to="/faq"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
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

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `relative text-[12px] font-bold tracking-[1.8px] transition ${isActive
                                    ? "text-[#e9c349]"
                                    : "text-[#c6c6cb] hover:text-[#e9c349]"
                                }`
                            }
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

                    {/* DESKTOP ACTION BUTTON */}
                    <NavLink
                        id="desktop-enquire-btn"
                        to="/contact"
                        className="hidden rounded-xl bg-[#e9c349] px-6 py-2.5 text-[12px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_0_15px_rgba(233,195,73,0.3)] transition-all hover:bg-[#ffd659] lg:flex"
                    >
                        Enquire Now
                    </NavLink>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        id="mobile-menu-btn"
                        type="button"
                        onClick={toggleMobileMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(233,195,73,0.35)] bg-[rgba(28,31,38,0.8)] text-[#e9c349] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:border-[#e9c349] lg:hidden"
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            /* CLOSE ICON */
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
                            /* HAMBURGER ICON */
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

            {/* MOBILE NAVIGATION DRAWER */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 top-[73px] z-50 flex-col border-b border-[rgba(233,195,73,0.3)] bg-[#10131a] px-6 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.98)] transition-all duration-300 lg:hidden ${isMobileMenuOpen ? "flex" : "hidden"
                    }`}
            >
                <nav className="flex flex-col gap-3">

                    {/* HOME */}
                    <NavLink
                        to="/"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>Home</span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* ABOUT US */}
                    <NavLink
                        to="/about"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>About Us</span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* SERVICES */}
                    <NavLink
                        to="/services"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>Services</span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* RESIDENCES */}
                    <NavLink
                        to="/residences"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>Residences</span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* INVESTMENT */}
                    <NavLink
                        to="/investment"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.15)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>Investment</span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* TESTIMONIALS */}
                    <NavLink
                        to="/testimonials"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>Testimonials</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* FAQ */}
                    <NavLink
                        to="/faq"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>FAQ</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>

                    {/* CONTACT */}
                    <NavLink
                        to="/contact"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between border-b border-[rgba(233,195,73,0.1)] py-2.5 text-[13px] font-bold tracking-[1.5px] transition-colors ${isActive
                                ? "text-[#e9c349]"
                                : "text-[#c6c6cb] hover:text-[#e9c349]"
                            }`
                        }
                    >
                        <span>Contact</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    </NavLink>
                </nav>

                {/* MOBILE ENQUIRE BUTTON */}
                <div className="mt-5 pt-2">
                    <NavLink
                        to="/contact"
                        onClick={closeMobileMenu}
                        className="flex h-11 w-full items-center justify-center rounded-xl bg-[#e9c349] text-[11px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] transition-all hover:bg-[#ffd659]"
                    >
                        ENQUIRE NOW
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;