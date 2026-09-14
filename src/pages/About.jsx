import { Helmet } from "react-helmet-async";

function About() {
    return (
        <>
            <Helmet>
                <title>About Us - A&Y Consolidated</title>
                <meta
                    name="description"
                    content="Learn about A&Y Consolidated, our engineering philosophy, buyer protection, quality standards, and commitment to building lasting luxury residences."
                />
            </Helmet>

            <main className="pt-[73px]">

                {/* Intro Section */}
                <section
                    className="min-h-[460px] bg-gradient-to-b from-[#10131a] via-[#131720] to-[#0e1117] border-b border-[rgba(233,195,73,0.15)] flex items-center justify-center px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,195,73,0.07)_0%,transparent_70%)] pointer-events-none"></div>

                    <div className="mx-auto max-w-[900px] text-center py-10 relative z-10">

                        {/* Heading */}
                        <h1
                            className="font-serif text-[28px] sm:text-[46px] md:text-[64px] font-bold leading-[1.12] tracking-[-1px] sm:tracking-[-1.5px] text-[#f1eee7] drop-shadow-[0_0_8px_rgba(245,239,220,0.25)]">
                            Engineering Value.<br />
                            Protecting Buyer Equity.
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-4 sm:mt-7 max-w-[650px] text-[14px] sm:text-[17px] leading-[1.6] sm:leading-[1.7] text-[#d5d8df] px-2">
                            A development philosophy built to eliminate buyer risk through zero land
                            encumbrances, meticulous statutory compliance, and uncompromising
                            architectural integrity. We build not just for luxury, but for
                            generational security.
                        </p>

                    </div>

                </section>

                {/* Architecture of Trust Section */}
                <section className="bg-[#0b0e15] px-6 py-24 relative">

                    <div className="mx-auto max-w-7xl">

                        {/* Heading */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
                                Our Core Pillars
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe5]">
                                The Architecture of Trust
                            </h2>
                        </div>

                        {/* Cards with Glassmorphism */}
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                            {/* Card 1 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)]">
                                    <i className="fa-solid fa-gavel text-xl text-[#e0b93f]"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-[#ece8df]">
                                    100% Clear Title Deeds
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                                    Unencumbered land ownership ensuring total legal security for every
                                    investor from day one. Zero liens, zero disputes.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)]">
                                    <i className="fa-solid fa-certificate text-xl text-[#e0b93f]"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-[#ece8df]">
                                    Statutory Approvals
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                                    Full compliance with all regulatory bodies before breaking ground.
                                    Transparent documentation available for every buyer.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)]">
                                    <i className="fa-solid fa-network-wired text-xl text-[#e0b93f]"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-[#ece8df]">
                                    Full Redundancy Systems
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                                    Dual-layered backup power, water filtration, and HVAC systems
                                    engineered to ensure uninterrupted premium living.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)]">
                                    <i className="fa-solid fa-building-columns text-xl text-[#e0b93f]"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-[#ece8df]">
                                    Prudent Financial Structure
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                                    Self-funded foundational phases and strict escrow management. We
                                    eliminate dependency on erratic market fluctuations.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)]">
                                    <i className="fa-solid fa-gem text-xl text-[#e0b93f]"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-[#ece8df]">
                                    Boutique Scale Advantage
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                                    Limited residences mean hyper-focused quality control and an exclusive
                                    community atmosphere unattainable in mass developments.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)]">
                                    <i className="fa-solid fa-handshake text-xl text-[#e0b93f]"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold leading-tight text-[#ece8df]">
                                    Turnkey Post-Handover Care
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                                    Dedicated estate management ensuring the property's pristine condition
                                    and long-term asset value appreciation.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

                {/* Leadership Manifesto Section with Gold Glassmorphic Panel */}
                <section className="bg-[#10131a] px-6 sm:px-8 py-20">

                    <div className="mx-auto max-w-[1200px] glass-panel-gold rounded-3xl p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

                        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

                            {/* Left Image */}
                            <div
                                className="relative h-[320px] md:h-[480px] overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.35)] shadow-2xl">
                                <img src="/assets/images/aboutpageimg.png" alt="Architectural blueprint"
                                    className="h-full w-full object-cover transition duration-700 hover:scale-105" />

                                {/* Bottom Fade */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#10131a]/80 to-transparent"></div>
                            </div>


                            {/* Right Content */}
                            <div className="lg:pl-4">

                                {/* Small Heading */}
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-0.5 w-8 bg-[#e9c349]"></span>
                                    <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349]">
                                        Leadership Manifesto
                                    </span>
                                </div>


                                {/* Main Heading */}
                                <h2
                                    className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.08] tracking-[-1.5px] text-[#f0ede6]">
                                    Built to Outlast
                                    <br />
                                    <span className="italic text-[#e9c349]">
                                        Generations.
                                    </span>
                                </h2>


                                {/* Paragraph 1 */}
                                <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-[#c4c6cb]">
                                    At A&Y CONSOLIDATED, we do not merely construct buildings; we
                                    engineer legacy assets. Our approach to luxury real estate is rooted
                                    in an unwavering commitment to structural durability and material
                                    honesty. Every design decision, from the depth of the pilings to the
                                    origin of the marble, is scrutinized through the lens of longevity.
                                </p>


                                {/* Paragraph 2 */}
                                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#c4c6cb]">
                                    We reject the ephemeral trends of modern construction in favor of
                                    timeless engineering principles. By maintaining a boutique scale, our
                                    leadership is intimately involved in every phase of development,
                                    ensuring that the promise of ultra-luxury is matched by the reality
                                    of flawless execution.
                                </p>


                                {/* Founder */}
                                <div className="mt-8 border-t border-[rgba(233,195,73,0.2)] pt-6 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <h3 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#eeeae2]">
                                            Alaric Vance
                                        </h3>
                                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[1.5px] text-[#e9c349]">
                                            Founder & Chief Architect
                                        </p>
                                    </div>
                                    <div className="h-10 w-24 rounded-lg bg-[rgba(233,195,73,0.1)] border border-[rgba(233,195,73,0.25)] flex items-center justify-center font-serif italic text-xs text-[#e9c349]">
                                        A&Y Exec
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================================================================= */}
                {/* THE 5-TIER ENGINEERING QUALITY PROTOCOL */}
                {/* ================================================================= */}
                <section className="bg-[#0b0e15] px-6 sm:px-8 py-20">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
                                Technical Rigor
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe5]">
                                The 5-Tier Quality Protocol
                            </h2>
                            <p className="mx-auto mt-4 max-w-[650px] text-sm sm:text-base text-[#c6c6cb] leading-relaxed">
                                Every phase of our development lifecycle undergoes multi-tier independent audits to ensure absolute zero-defect delivery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Protocol 1 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="font-mono text-2xl font-bold text-[#e9c349] mb-4">01</div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Geotechnical Bedrock Sounding</h3>
                                <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                    Continuous seismic soil tomography and deep core borehole sampling ensuring all pilings anchor securely into monolithic bedrock layers.
                                </p>
                            </div>

                            {/* Protocol 2 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="font-mono text-2xl font-bold text-[#e9c349] mb-4">02</div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Laser-Guided Post-Tensioning</h3>
                                <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                    Millimeter-accurate optical laser leveling during post-tensioned concrete slab casting, eliminating micro-deflections and hairline settling.
                                </p>
                            </div>

                            {/* Protocol 3 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="font-mono text-2xl font-bold text-[#e9c349] mb-4">03</div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Triple-Barrier Acoustic Envelope</h3>
                                <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                    Integration of German thermal glazing, decoupled drywalls, and acoustic rubber floor underlays to achieve less than 35 dB ambient interior noise.
                                </p>
                            </div>

                            {/* Protocol 4 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="font-mono text-2xl font-bold text-[#e9c349] mb-4">04</div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Statutory Pre-Pour Audits</h3>
                                <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                    Mandatory third-party structural engineer rebar inspection and cube-compression lab certification prior to every structural concrete pour.
                                </p>
                            </div>

                            {/* Protocol 5 */}
                            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-1">
                                <div className="font-mono text-2xl font-bold text-[#e9c349] mb-4">05</div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">10-Year Structural Handover Warranty</h3>
                                <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                    Comprehensive written warranty backed by institutional structural insurance and dedicated turnkey facility management support.
                                </p>
                            </div>

                            {/* Protocol 6 CTA */}
                            <div className="glass-panel-gold rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1">
                                <div>
                                    <div className="font-mono text-xs font-bold text-[#e9c349] uppercase tracking-[1.5px] mb-2">Technical Dossier</div>
                                    <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Request Engineering Audit Report</h3>
                                    <p className="mt-2 text-sm text-[#c6c6cb] leading-relaxed">
                                        Review certified laboratory test certificates, soil reports, and structural calculations.
                                    </p>
                                </div>
                                <a
                                    href="/contact#contact"
                                    className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#e9c349] text-xs font-bold tracking-[1.5px] uppercase text-[#3c2f00] shadow-[0_4px_15px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] transition-all"
                                >
                                    Request Technical Files
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ================================================================= */}
                {/* HISTORICAL MILESTONE TIMELINE */}
                {/* ================================================================= */}
                <section className="bg-[#10131a] px-6 sm:px-8 py-20">
                    <div className="mx-auto max-w-[1100px]">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
                                Delivery Record
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe5]">
                                Our Milestone Journey
                            </h2>
                            <p className="mx-auto mt-4 max-w-[650px] text-sm sm:text-base text-[#c6c6cb] leading-relaxed">
                                A clean track record of uninterrupted progress, zero legal disputes, and timely deed execution.
                            </p>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative border-l border-[rgba(233,195,73,0.3)] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
                            {/* Milestone 1 */}
                            <div className="relative group">
                                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#10131a] bg-[#e9c349] shadow-[0_0_12px_#e9c349]"></div>
                                <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-[#e9c349] transition-all">
                                    <span className="font-mono text-xs font-bold text-[#e9c349] uppercase tracking-[1.5px]">2018 — Inception & Governance</span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f0ede6] mt-1">Unencumbered Land Acquisition Strategy</h3>
                                    <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                        Formed with a foundational policy: purchase land 100% debt-free without developer bank mortgages, eliminating buyer completion risks.
                                    </p>
                                </div>
                            </div>

                            {/* Milestone 2 */}
                            <div className="relative group">
                                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#10131a] bg-[#e9c349] shadow-[0_0_12px_#e9c349]"></div>
                                <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-[#e9c349] transition-all">
                                    <span className="font-mono text-xs font-bold text-[#e9c349] uppercase tracking-[1.5px]">2021 — Handover Milestone</span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f0ede6] mt-1">Kawdana Residence (100% Sold & Handed Over)</h3>
                                    <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                        Successfully delivered ahead of timeline during challenging macroeconomic conditions, executing individual freehold deeds to all purchasers.
                                    </p>
                                </div>
                            </div>

                            {/* Milestone 3 */}
                            <div className="relative group">
                                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#10131a] bg-[#e9c349] shadow-[0_0_12px_#e9c349]"></div>
                                <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-[#e9c349] transition-all">
                                    <span className="font-mono text-xs font-bold text-[#e9c349] uppercase tracking-[1.5px]">2023 — Architectural Marvel</span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f0ede6] mt-1">Hill Street Project (Fully Booked & Handed Over)</h3>
                                    <p className="mt-3 text-sm text-[#b5b8bf] leading-relaxed">
                                        Set a new standard in boutique luxury living with full standby dual generators and superior acoustic glass facades.
                                    </p>
                                </div>
                            </div>

                            {/* Milestone 4 */}
                            <div className="relative group">
                                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#10131a] bg-[#e9c349] shadow-[0_0_12px_#e9c349] animate-pulse"></div>
                                <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 border border-[rgba(233,195,73,0.4)] shadow-xl">
                                    <span className="font-mono text-xs font-bold text-[#e9c349] uppercase tracking-[1.5px]">2024–2026 — Current Flagship</span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f0ede6] mt-1">Marine Drive Corridor Flagship Residences</h3>
                                    <p className="mt-3 text-sm text-[#c6c6cb] leading-relaxed">
                                        Our landmark 5-story development featuring 10 exclusive ocean-facing suites with EV infrastructure, rooftop infinity pool, and smart home tech.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ================================================================= */}
                {/* EXECUTIVE ADVISORY & MASTER CRAFTSMEN BOARD */}
                {/* ================================================================= */}
                <section className="bg-[#0b0e15] px-6 sm:px-8 py-20">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
                                Leadership & Stewardship
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe5]">
                                Executive Advisory Board
                            </h2>
                            <p className="mx-auto mt-4 max-w-[650px] text-sm sm:text-base text-[#c6c6cb] leading-relaxed">
                                Spearheaded by industry-leading structural consultants, legal conveyancing experts, and architectural masters.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Member 1 */}
                            <div className="glass-panel rounded-2xl p-6 hover:-translate-y-1">
                                <div className="h-20 w-20 rounded-2xl bg-[rgba(233,195,73,0.1)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center font-serif text-2xl font-bold text-[#e9c349] mb-6">
                                    AV
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Alaric Vance</h3>
                                <div className="text-xs font-mono font-semibold text-[#e9c349] mt-0.5">Founder & Chief Architect</div>
                                <p className="mt-3 text-xs text-[#b5b8bf] leading-relaxed">
                                    RIBA Fellow with 20+ years commanding prime boutique residential developments across London and Colombo.
                                </p>
                            </div>

                            {/* Member 2 */}
                            <div className="glass-panel rounded-2xl p-6 hover:-translate-y-1">
                                <div className="h-20 w-20 rounded-2xl bg-[rgba(233,195,73,0.1)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center font-serif text-2xl font-bold text-[#e9c349] mb-6">
                                    NJ
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Eng. Nihal Jayasuriya</h3>
                                <div className="text-xs font-mono font-semibold text-[#e9c349] mt-0.5">Head of Structural Engineering</div>
                                <p className="mt-3 text-xs text-[#b5b8bf] leading-relaxed">
                                    Chartered Structural Consultant specializing in post-tensioned superstructures and seismic foundation design.
                                </p>
                            </div>

                            {/* Member 3 */}
                            <div className="glass-panel rounded-2xl p-6 hover:-translate-y-1">
                                <div className="h-20 w-20 rounded-2xl bg-[rgba(233,195,73,0.1)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center font-serif text-2xl font-bold text-[#e9c349] mb-6">
                                    TM
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">Eng. Tariq Mansoor</h3>
                                <div className="text-xs font-mono font-semibold text-[#e9c349] mt-0.5">Chief MEP Director</div>
                                <p className="mt-3 text-xs text-[#b5b8bf] leading-relaxed">
                                    Expert in continuous redundant power distribution, acoustic HVAC ventilation, and central water purification.
                                </p>
                            </div>

                            {/* Member 4 */}
                            <div className="glass-panel rounded-2xl p-6 hover:-translate-y-1">
                                <div className="h-20 w-20 rounded-2xl bg-[rgba(233,195,73,0.1)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center font-serif text-2xl font-bold text-[#e9c349] mb-6">
                                    JF
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[#f0ede6]">J. L. Fernando, PC</h3>
                                <div className="text-xs font-mono font-semibold text-[#e9c349] mt-0.5">Senior Legal Counsel</div>
                                <p className="mt-3 text-xs text-[#b5b8bf] leading-relaxed">
                                    Senior conveyancing specialist overseeing title verification, regulatory CMA filings, and direct freehold transfers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ================================================================= */}
                {/* INVESTOR PROTECTION & ESCROW GOVERNANCE MODEL */}
                {/* ================================================================= */}
                <section className="bg-[#10131a] px-6 sm:px-8 py-20">
                    <div className="mx-auto max-w-[1200px] glass-panel-gold rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-6 flex flex-col gap-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
                                        Financial Sovereignty
                                    </div>
                                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0ede6] leading-tight">
                                        Buyer Protection & Escrow Architecture
                                    </h2>
                                    <p className="mt-4 text-sm sm:text-base text-[#c6c6cb] leading-relaxed">
                                        Unlike developers reliant on heavy bank debt, A&Y operates on a zero-encumbrance self-funded model. Investor capital is managed through structured milestone billing tied to verified physical construction.
                                    </p>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-3 text-sm text-[#f0ede6]">
                                        <i className="fa-solid fa-circle-check text-[#e9c349] text-base"></i>
                                        <span>Zero developer mortgage encumbrances on property titles</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#f0ede6]">
                                        <i className="fa-solid fa-circle-check text-[#e9c349] text-base"></i>
                                        <span>Funds allocated directly to certified construction milestones</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#f0ede6]">
                                        <i className="fa-solid fa-circle-check text-[#e9c349] text-base"></i>
                                        <span>Guaranteed individual freehold title deed execution</span>
                                    </div>
                                </div>

                                <div className="pt-2 flex flex-wrap items-center gap-4">
                                    <a
                                        href="/contact?subject=legal-due-diligence#contact"
                                        className="inline-flex h-11 items-center justify-center rounded-xl bg-[#e9c349] px-7 text-xs font-bold tracking-[1.5px] uppercase text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] transition-all"
                                    >
                                        Inquire Legal Documentation
                                    </a>
                                    <a
                                        href="/faq#title-deeds"
                                        className="glass-panel inline-flex h-11 items-center justify-center rounded-xl px-6 text-xs font-bold tracking-[1.5px] uppercase text-[#e0e2ec] hover:border-[#e9c349] hover:text-[#e9c349] transition-all"
                                    >
                                        Review Legal FAQ &rarr;
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                                <div className="glass-panel rounded-2xl p-6 text-center border border-[rgba(233,195,73,0.2)]">
                                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#e9c349]">100%</div>
                                    <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-1">Clear Freehold Titles</div>
                                </div>
                                <div className="glass-panel rounded-2xl p-6 text-center border border-[rgba(233,195,73,0.2)]">
                                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#e9c349]">0%</div>
                                    <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-1">Bank Mortgage Risk</div>
                                </div>
                                <div className="glass-panel rounded-2xl p-6 text-center border border-[rgba(233,195,73,0.2)]">
                                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#e9c349]">10-Yr</div>
                                    <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-1">Structural Warranty</div>
                                </div>
                                <div className="glass-panel rounded-2xl p-6 text-center border border-[rgba(233,195,73,0.2)]">
                                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#e9c349]">2 / Flr</div>
                                    <div className="text-[11px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-1">Maximum Density</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    );
}

export default About;
