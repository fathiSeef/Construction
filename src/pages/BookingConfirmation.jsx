import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";

function BookingConfirmation() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const interest = searchParams.get("unit");

  const summaryInterest = useMemo(() => {
    if (plan === "suite-a") return "Grand Penthouse Residence (Suite A - 1,425 Sq.Ft)";
    if (plan === "suite-b") return "Executive Luxury Residence (Suite B - 1,273 Sq.Ft)";
    if (interest) return `${interest.toUpperCase()} Residence`;
    return "3-Bedroom Boutique Residence";
  }, [plan, interest]);

  const bookingRef = useMemo(() => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    return `#AYC-${randomCode}-VIP`;
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello A&Y Consolidated, I have confirmed my consultation with reference ${bookingRef}.`
  );

  return (
    <>
      <Helmet>
        <title>VIP Consultation Confirmed | A&Y CONSOLIDATED</title>
        <meta
          name="description"
          content="Your private appointment and residential reservation consultation has been confirmed with A&Y Consolidated."
        />
      </Helmet>

      {/* Header - Booking page intentionally has no Navbar */}
      <header className="sticky top-0 z-50 border-b border-[rgba(233,195,73,0.25)] bg-[rgba(16,19,26,0.92)] px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.8)] px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#e9c349] shadow-[0_2px_15px_rgba(233,195,73,0.15)] transition-all duration-200 hover:bg-[#e9c349] hover:text-[#10131a]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Return to Home</span>
          </Link>

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

      <main className="mx-auto max-w-[860px] px-4 py-12 sm:px-8 sm:py-20">
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-[rgba(233,195,73,0.3)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(233,195,73,0.2)_0%,transparent_70%)]" />

          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#e9c349] bg-[rgba(233,195,73,0.15)] text-[#e9c349] shadow-[0_0_25px_rgba(233,195,73,0.3)]">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="mb-2 text-xs font-mono font-bold uppercase tracking-[2px] text-[#e9c349]">
              VIP Reservation Received
            </span>
            <h1 className="font-display text-3xl font-bold text-[#e0e2ec] sm:text-4xl">
              Your Consultation is Confirmed
            </h1>
            <p className="mt-3 max-w-[540px] text-sm text-[#c6c6cb]">
              Thank you. Our Executive Client Director has been assigned to your portfolio and will coordinate your private briefing.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-[rgba(233,195,73,0.2)] bg-[#11141c] p-6">
            <div className="mb-4 flex flex-col justify-between gap-2 border-b border-[rgba(233,195,73,0.15)] pb-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e9099]">Booking Reference</span>
                <div className="font-mono text-lg font-bold text-[#e9c349]">{bookingRef}</div>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8e9099]">Priority Status</span>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Secured in Executive Queue
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
              <div>
                <span className="text-[#8e9099]">Consultation Format:</span>
                <div className="mt-0.5 font-semibold text-[#e0e2ec]">Private In-Person / Virtual Showroom</div>
              </div>
              <div>
                <span className="text-[#8e9099]">Area of Interest:</span>
                <div className="mt-0.5 font-semibold text-[#e0e2ec]">{summaryInterest}</div>
              </div>
              <div>
                <span className="text-[#8e9099]">Showroom Location:</span>
                <div className="mt-0.5 font-semibold text-[#e0e2ec]">Level 12, Prime Tower, Marine Drive, Colombo 03</div>
              </div>
              <div>
                <span className="text-[#8e9099]">Assigned Concierge:</span>
                <div className="mt-0.5 font-semibold text-[#e9c349]">Mr. K. Perera (Head of Client Advisory)</div>
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-[#e0e2ec]">What Happens Next?</h3>
            <div className="grid grid-cols-1 gap-4 text-xs text-[#c6c6cb] sm:grid-cols-3">
              <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                <span className="mb-1 block font-mono font-bold text-[#e9c349]">01. Direct Call</span>
                Within 2 business hours, your concierge will reach out via phone or email to finalize your schedule.
              </div>
              <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                <span className="mb-1 block font-mono font-bold text-[#e9c349]">02. Prospectus</span>
                Receive the password-protected digital technical dossier, structural calculations, and deed copies.
              </div>
              <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                <span className="mb-1 block font-mono font-bold text-[#e9c349]">03. Site Walkthrough</span>
                Private escorted site inspection of the Dehiwala project structure and floor views.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/94771234567?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-[1.5px] text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all hover:brightness-105 sm:w-auto"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.18 8.18 0 0 1-1.25-4.4c0-4.53 3.7-8.22 8.24-8.22 4.53 0 8.22 3.69 8.22 8.22 0 4.54-3.69 8.28-8.23 8.28zm4.52-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.15.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01a.9.9 0 0 0-.65.31c-.23.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
              Instant WhatsApp Connect
            </a>

            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[rgba(233,195,73,0.4)] bg-[rgba(233,195,73,0.1)] px-6 py-3 text-xs font-bold uppercase tracking-[1.5px] text-[#e9c349] transition-all hover:bg-[#e9c349] hover:text-[#3c2f00] sm:w-auto"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default BookingConfirmation;
