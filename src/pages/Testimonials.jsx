import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Testimonials() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thank you! Your verified review has been submitted for moderation."
    );

    setIsReviewModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Testimonials - A&amp;Y CONSOLIDATED</title>
        <meta
          name="description"
          content="Read verified feedback from residents, expatriates, and investors across our luxury developments in Sri Lanka."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

<main className="pt-[90px] pb-20">
      {/* HERO SECTION */}
      <section id="testimonials" className="relative px-6 pt-12 pb-10 text-center lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow Badge */}
          <p
            className="inline-block text-[11px] md:text-[12px] font-bold uppercase tracking-[2.4px] text-[#e9c349] mb-4"
          >
            Verified Buyer Perspectives
          </p>

          {/* Main Headline */}
          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.2] text-[#f8f7f4] tracking-[-0.01em]"
          >
            Endorsed by Discerning Families &<br className="hidden sm:inline" />
            Global Investors
          </h1>

          {/* Subtitle */}
          <p
            className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#9ca3af] font-normal"
          >
            Real feedback from residents, expatriates, and investors across our
            completed and upcoming developments.
          </p>
        </div>

        {/* Trust Badges Strip */}
        <div
          className="mx-auto mt-12 max-w-5xl border-y border-[rgba(233,195,73,0.18)] bg-[rgba(18,22,34,0.4)] py-4.5 px-4 backdrop-blur-sm sm:rounded-none"
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 text-xs md:text-sm font-medium text-[#d1d5db]"
          >
            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-circle-check text-[#e9c349] text-base"></i>
              <span>100% On-Time Statutory Delivery</span>
            </div>

            <div
              className="hidden sm:block h-3.5 w-px bg-[rgba(233,195,73,0.2)]"
            ></div>

            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-circle-check text-[#e9c349] text-base"></i>
              <span>0% Land Mortgage Risk</span>
            </div>

            <div
              className="hidden sm:block h-3.5 w-px bg-[rgba(233,195,73,0.2)]"
            ></div>

            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-circle-check text-[#e9c349] text-base"></i>
              <span>100% Clear Title Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS AUTOMATED SLIDING CAROUSEL (LIKE UI-DESIGNS-ETA) */}
      <section className="py-8 sm:py-12 overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#e9c349] animate-pulse"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[1.8px] text-[#e9c349]">
              Live Homeowner Feedback Stream
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.08)] px-3 py-1 text-[10.5px] font-mono text-[#c6c6cb]">
            <i className="fa-solid fa-hand-pointer text-[#e9c349]"></i>
            <span>Hover any card to pause sliding</span>
          </div>
        </div>

        {/* Continuous Automated Sliding Carousel */}
        <div className="carousel-container">
          <div
              id="testimonialTrack"
              className="carousel-track"
              style={{ animationPlayState: isCarouselPaused ? "paused" : "running" }}
              onTouchStart={() => setIsCarouselPaused(true)}
              onTouchEnd={() => setIsCarouselPaused(false)}
            >
            {/* Card 1 */}
            <div className="testimonial-card-auto">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Verified Diaspora Purchaser
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Clear Deeds and Transparent Execution from London
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “Purchasing our 3BHK residence from the UK was seamless. Having clear non-mortgaged deeds, dedicated backup power, and steady weekly photographic updates gave our family complete serenity.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    RP
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Dr. Roshan Perera</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Consultant Physician (UK Diaspora)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card-auto">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Civil Engineering Oversight
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Structural Rigor That Put My Doubts to Rest
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “As an engineer, I inspected the foundation piling and core concrete curing certificates personally. A&Y's commitment to Grade-40 concrete and post-tensioned slabs is evident in every square foot.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    SR
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Eng. S. Ramanathan</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Chartered Structural Consultant (Colombo)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card-auto">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Australia Expat Purchaser
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Unmatched Boutique Privacy and Location
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “Only 10 units in the entire building means no lobby crowding, no elevator queues, and true neighborhood tranquility just 2 minutes from Marine Drive. The finish quality exceeded our expectations.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    MS
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Michael & Sarah de Silva</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Technology Executives (Sydney Diaspora)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="testimonial-card-auto">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Institutional Investor
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Unencumbered Deeds and Bank-Clean Assurance
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “In Sri Lanka's real estate market, legal transparency is paramount. A&Y provided title clearance documents before requesting a single rupee in reservation. Rare professional integrity.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    MR
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">M. F. A. Rahman</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Senior Chartered Accountant (Colombo 03)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="testimonial-card-auto">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Diaspora Returnee
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    A Sanctuary That Feels Like Real Home
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “Dual balconies catching the ocean breeze, German acoustic glazing keeping street noise zero, and VRV cooling make this residence peaceful. Handover was executed precisely on time.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    NW
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Dr. N. Wickramasinghe</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Paediatrician (UK Diaspora)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="testimonial-card-auto">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Toronto Diaspora
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Unconditional Generator Backup Sold It
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “My priority was elderly parent comfort: zero-step elevator access and full automatic generator power for every single AC unit and appliance. A&Y delivered everything on contract.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    CA
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Chandrakanthi Alwis</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Retired Educator (Toronto)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DUPLICATE CARDS 1-6 FOR CONTINUOUS INFINITE SEAMLESS LOOP (LIKE UI-DESIGNS-ETA) */}
            {/* Duplicate Card 1 */}
            <div className="testimonial-card-auto" aria-hidden="true">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Verified Diaspora Purchaser
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Clear Deeds and Transparent Execution from London
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “Purchasing our 3BHK residence from the UK was seamless. Having clear non-mortgaged deeds, dedicated backup power, and steady weekly photographic updates gave our family complete serenity.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    RP
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Dr. Roshan Perera</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Consultant Physician (UK Diaspora)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Card 2 */}
            <div className="testimonial-card-auto" aria-hidden="true">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Civil Engineering Oversight
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Structural Rigor That Put My Doubts to Rest
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “As an engineer, I inspected the foundation piling and core concrete curing certificates personally. A&Y's commitment to Grade-40 concrete and post-tensioned slabs is evident in every square foot.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    SR
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Eng. S. Ramanathan</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Chartered Structural Consultant (Colombo)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Card 3 */}
            <div className="testimonial-card-auto" aria-hidden="true">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Australia Expat Purchaser
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Unmatched Boutique Privacy and Location
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “Only 10 units in the entire building means no lobby crowding, no elevator queues, and true neighborhood tranquility just 2 minutes from Marine Drive. The finish quality exceeded our expectations.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    MS
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Michael & Sarah de Silva</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Technology Executives (Sydney Diaspora)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Card 4 */}
            <div className="testimonial-card-auto" aria-hidden="true">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Institutional Investor
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Unencumbered Deeds and Bank-Clean Assurance
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “In Sri Lanka's real estate market, legal transparency is paramount. A&Y provided title clearance documents before requesting a single rupee in reservation. Rare professional integrity.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    MR
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">M. F. A. Rahman</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Senior Chartered Accountant (Colombo 03)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Card 5 */}
            <div className="testimonial-card-auto" aria-hidden="true">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Diaspora Returnee
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    A Sanctuary That Feels Like Real Home
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “Dual balconies catching the ocean breeze, German acoustic glazing keeping street noise zero, and VRV cooling make this residence peaceful. Handover was executed precisely on time.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    NW
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Dr. N. Wickramasinghe</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Paediatrician (UK Diaspora)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Card 6 */}
            <div className="testimonial-card-auto" aria-hidden="true">
              <div className="glass-panel h-full flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border border-[rgba(233,195,73,0.22)] bg-[rgba(20,24,33,0.7)]">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-5">
                    <div className="flex gap-1 text-[#e9c349] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="rounded-full border border-[rgba(233,195,73,0.28)] bg-[rgba(233,195,73,0.08)] px-2.5 py-1 text-[10px] font-semibold text-[#e9c349]">
                      Toronto Diaspora
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-[#f4f3ef]">
                    Unconditional Generator Backup Sold It
                  </h3>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9ca3af] font-light italic">
                    “My priority was elderly parent comfort: zero-step elevator access and full automatic generator power for every single AC unit and appliance. A&Y delivered everything on contract.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-xs font-bold text-[#e9c349]">
                    CA
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#f4f3ef]">Chandrakanthi Alwis</h4>
                    <p className="text-[11px] text-[#868d9d] mt-0.5">Retired Educator (Toronto)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE OUR DELIVERIES VIDEO SECTION */}
      <section className="px-6 pt-16 pb-12 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <h2
            className="font-display text-center text-2xl sm:text-3xl font-semibold text-[#f8f7f4] mb-10 tracking-tight"
          >
            Experience Our Deliveries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="video-card group cursor-pointer flex flex-col">
              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.15)] bg-gradient-to-br from-[#1b2130] to-[#0e121c] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-[rgba(233,195,73,0.35)]"
              >
                {/* Subtle background pattern / texture */}
                <div
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#e9c349_1px,transparent_1px)] [background-size:16px_16px]"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0f16]/80 via-transparent to-transparent"
                ></div>

                {/* Play Button Icon */}
                <div
                  className="play-btn z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e9c349] bg-[rgba(233,195,73,0.12)] text-[#e9c349] transition-all duration-300 backdrop-blur-sm"
                >
                  <i className="fa-solid fa-play text-base translate-x-0.5"></i>
                </div>
              </div>
              <p
                className="mt-3.5 text-center text-xs sm:text-[13px] font-medium text-[#c6c6cb] transition-colors duration-200 group-hover:text-[#e9c349]"
              >
                Key Handover Ceremony: Kawdana Residences
              </p>
            </div>

            {/* Video 2 */}
            <div className="video-card group cursor-pointer flex flex-col">
              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.15)] bg-gradient-to-br from-[#1b2130] to-[#0e121c] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-[rgba(233,195,73,0.35)]"
              >
                <div
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#e9c349_1px,transparent_1px)] [background-size:16px_16px]"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0f16]/80 via-transparent to-transparent"
                ></div>

                <div
                  className="play-btn z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e9c349] bg-[rgba(233,195,73,0.12)] text-[#e9c349] transition-all duration-300 backdrop-blur-sm"
                >
                  <i className="fa-solid fa-play text-base translate-x-0.5"></i>
                </div>
              </div>
              <p
                className="mt-3.5 text-center text-xs sm:text-[13px] font-medium text-[#c6c6cb] transition-colors duration-200 group-hover:text-[#e9c349]"
              >
                Architectural Walkthrough: Hill Street Development
              </p>
            </div>

            {/* Video 3 */}
            <div className="video-card group cursor-pointer flex flex-col">
              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.15)] bg-gradient-to-br from-[#1b2130] to-[#0e121c] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-[rgba(233,195,73,0.35)]"
              >
                <div
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#e9c349_1px,transparent_1px)] [background-size:16px_16px]"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0f16]/80 via-transparent to-transparent"
                ></div>

                <div
                  className="play-btn z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e9c349] bg-[rgba(233,195,73,0.12)] text-[#e9c349] transition-all duration-300 backdrop-blur-sm"
                >
                  <i className="fa-solid fa-play text-base translate-x-0.5"></i>
                </div>
              </div>
              <p
                className="mt-3.5 text-center text-xs sm:text-[13px] font-medium text-[#c6c6cb] transition-colors duration-200 group-hover:text-[#e9c349]"
              >
                Investor Experience: Purchasing from the UK Diaspora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED REVIEW CTA BANNER */}
      <section className="px-6 pt-6 pb-8 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div
            className="relative overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.22)] bg-gradient-to-r from-[#121622] via-[#151a29] to-[#121622] px-6 py-8 md:px-10 md:py-9 shadow-xl"
          >
            {/* Subtle accent light glow */}
            <div
              className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-[rgba(233,195,73,0.06)] blur-3xl pointer-events-none"
            ></div>

            <div
              className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
            >
              <div>
                <h3
                  className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#f8f7f4]"
                >
                  Are you an A&Y homeowner or investor?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#9ca3af]">
                  Submit your verified project review.
                </p>
              </div>

              <a
                href="#reviewModal"
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center justify-center rounded-xl border border-[#e9c349] bg-transparent px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#e9c349] transition-all duration-300 hover:bg-[#e9c349] hover:text-[#0c0f16] hover:shadow-[0_0_20px_rgba(233,195,73,0.3)] shrink-0"
              >
                Leave a Verified Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>



    {/* Interactive Review Modal */}
    <div
      id="reviewModalContainer"
      className={`fixed inset-0 z-50 items-center justify-center bg-black/80 p-4 backdrop-blur-sm ${isReviewModalOpen ? "flex" : "hidden"}`}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[rgba(233,195,73,0.3)] bg-[#121622] p-6 sm:p-8 shadow-2xl"
      >
        <button
          type="button"
          onClick={() => setIsReviewModalOpen(false)}
          title="Close review modal"
          aria-label="Close review modal"
          className="absolute right-5 top-5 text-gray-400 hover:text-white text-lg"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h3 className="font-display text-xl font-bold text-[#f4f3ef]">
          Submit Verified Review
        </h3>
        <p className="mt-1 text-xs text-[#9ca3af]">
          Share your experience as an owner or investor with A&Y Consolidated.
        </p>

        <form onSubmit={handleReviewSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-300"
              >Your Full Name</label
            >
            <input
              type="text"
              required
              placeholder="e.g. Dr. Roshan Perera"
              className="mt-1 w-full rounded-xl border border-gray-700 bg-[#0c0f16] px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#e9c349] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-300"
                >Designation / Role</label
              >
              <input
                type="text"
                required
                placeholder="e.g. Physician (UK)"
                className="mt-1 w-full rounded-xl border border-gray-700 bg-[#0c0f16] px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#e9c349] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300"
                >Buyer Type</label
              >
              <select
                id="buyerType"
                name="buyerType"
                aria-label="Buyer Type"
                className="mt-1 w-full rounded-xl border border-gray-700 bg-[#0c0f16] px-3.5 py-2.5 text-xs text-white focus:border-[#e9c349] focus:outline-none"
              >
                <option>Verified Diaspora Purchaser</option>
                <option>Verified Resident (Off-Plan)</option>
                <option>Verified Property Investor</option>
                <option>Verified Resident Owner</option>
                <option>Verified Overseas Returnee</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300"
              >Review Headline</label
            >
            <input
              type="text"
              required
              placeholder="e.g. Seamless execution and exceptional build quality"
              className="mt-1 w-full rounded-xl border border-gray-700 bg-[#0c0f16] px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#e9c349] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300"
              >Your Testimonial</label
            >
            <textarea
              rows={3}
              required
              placeholder="Describe your experience with project delivery, customer care, finishes..."
              className="mt-1 w-full rounded-xl border border-gray-700 bg-[#0c0f16] px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#e9c349] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-[#e9c349] py-3 text-xs font-bold uppercase tracking-wider text-[#1a1402] hover:bg-[#f3d368] transition-colors"
            >
              Submit For Verification
            </button>
          </div>
        </form>
      </div>
    </div>


    </>
  );
}

export default Testimonials;
