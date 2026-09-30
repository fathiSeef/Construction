import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 80;

function BuildProgression({
  framePath,
  sectionId,
  eyebrow,
  titleLine1,
  titleLine2,
  description,
}) {
  const canvasRef = useRef(null);
  const progressionRef = useRef(null);
  const progressBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = progressionRef.current;

    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frames = new Array(TOTAL_FRAMES);
    let currentFrameIndex = 0;
    let targetFrameIndex = 0;
    let animationFrameId = null;
    let destroyed = false;

    const renderFrame = (index) => {
      if (destroyed) return;

      const safeIndex = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(index))
      );

      let img = frames[safeIndex];

      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset += 1) {
          const previous = safeIndex - offset;
          const next = safeIndex + offset;

          if (
            previous >= 0 &&
            frames[previous] &&
            frames[previous].complete &&
            frames[previous].naturalWidth > 0
          ) {
            img = frames[previous];
            break;
          }

          if (
            next < TOTAL_FRAMES &&
            frames[next] &&
            frames[next].complete &&
            frames[next].naturalWidth > 0
          ) {
            img = frames[next];
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.max(1, Math.floor(rect.width * dpr));
      const targetH = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = rect.width / rect.height;

      let drawW;
      let drawH;
      let drawX;
      let drawY;

      if (canvasAspect > imgAspect) {
        drawW = rect.width;
        drawH = rect.width / imgAspect;
        drawX = 0;
        drawY = (rect.height - drawH) / 2;
      } else {
        drawH = rect.height;
        drawW = rect.height * imgAspect;
        drawX = (rect.width - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    const loadFrame = (index) => {
      const frameNumber = String(index + 1).padStart(3, "0");
      const img = new Image();
      frames[index] = img;

      let fallbackTried = false;

      img.onload = () => {
        if (destroyed) return;
        if (index === 0) renderFrame(0);
      };

      img.onerror = () => {
        if (fallbackTried || destroyed) return;

        fallbackTried = true;
        img.src = `${framePath}/frame_${frameNumber}.png`;
      };

      img.src = `${framePath}/frame_${frameNumber}.webp`;
    };

    for (let i = 0; i < TOTAL_FRAMES; i += 1) {
      loadFrame(i);
    }

    const frameInterpolationLoop = () => {
      if (destroyed) return;

      const difference = targetFrameIndex - currentFrameIndex;

      if (Math.abs(difference) > 0.01) {
        currentFrameIndex += difference * 0.18;
        renderFrame(currentFrameIndex);
      } else {
        currentFrameIndex = targetFrameIndex;
        renderFrame(currentFrameIndex);
      }

      animationFrameId = requestAnimationFrame(frameInterpolationLoop);
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=3600",
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        targetFrameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.round(self.progress * (TOTAL_FRAMES - 1))
        );

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${self.progress * 100}%`;
        }

        if (scrollIndicatorRef.current) {
          scrollIndicatorRef.current.style.opacity =
            self.progress > 0.08
              ? "0"
              : `${1 - self.progress * 12.5}`;
        }
      },
    });

    // Keep this section's text visible for the complete frame sequence.
    gsap.set(`#${sectionId}-text`, {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
    });

    frameInterpolationLoop();

    const handleResize = () => {
      renderFrame(currentFrameIndex);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("resize", handleResize);
      scrollTrigger.kill();
    };
  }, [framePath, sectionId]);

  return (
    <section
      ref={progressionRef}
      id={sectionId}
      className="relative w-full h-screen overflow-hidden bg-[#10131a] my-8"
    >
      <div
        ref={progressBarRef}
        className="absolute top-0 left-0 h-[3px] bg-[#e9c349] z-30 w-0 shadow-[0_0_10px_rgba(233,195,73,0.8)]"
      />

      <div className="absolute inset-0 z-[1] w-full h-full overflow-hidden bg-[#090b10]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0e15]/95 via-[#0b0e15]/80 to-transparent z-[2] w-full md:w-[75%] lg:w-[65%]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-[#10131a]/60 z-[2]" />

      <div
        ref={scrollIndicatorRef}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 transition-opacity duration-300"
      >
        <div className="w-5 h-8 rounded-full border-2 border-[rgba(233,195,73,0.5)] flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-[#e9c349] animate-bounce" />
        </div>

        <span className="text-[9px] font-mono font-bold uppercase tracking-[2px] text-[#8e9099]">
          Scroll to explore build
        </span>
      </div>

      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex items-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pointer-events-none">
        <div className="relative w-full max-w-[540px] sm:max-w-[580px] min-h-[460px] sm:min-h-[480px] lg:min-h-[500px]">
          <div
            id={`${sectionId}-text`}
            className="text-stage active pointer-events-auto p-0"
          >
            <div className="text-xs sm:text-[13px] font-mono font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-[#e9c349] mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#e9c349]" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {titleLine1}
              <br />
              <span className="gold-gradient-text">{titleLine2}</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#d4d6df] leading-relaxed max-w-[480px] mb-5 sm:mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              {description}
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [selectedPlan, setSelectedPlan] = useState("suite-a");

  // =========================================================
  // PLAN SWITCHING
  // =========================================================

  const activeTabClass =
    "px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold tracking-[1px] uppercase transition-all bg-[#e9c349] text-[#3c2f00] shadow-[0_4px_15px_rgba(233,195,73,0.3)] cursor-pointer";

  const inactiveTabClass =
    "px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold tracking-[1px] uppercase transition-all text-[#c6c6cb] hover:text-[#e9c349] cursor-pointer";

  return (
    <>
      <Helmet>
        <title>A&Y Consolidated | Luxury Residences in Dehiwala</title>
        <meta
          name="description"
          content="Discover A&Y Consolidated luxury residences in Dehiwala, featuring exclusive three-bedroom homes designed for quality, integrity, privacy, and long-term value."
        />
        <meta
          name="keywords"
          content="A&Y Consolidated, luxury residences, Dehiwala, luxury apartments, residential property, Sri Lanka"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="relative pt-[73px]">

        {/* =====================================================
          SECTION 1: HERO
      ====================================================== */}

        <section
          id="home"
          className="relative w-full min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden bg-[#10131a] py-12 sm:py-16"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/assets/images/hero-building.jpg"
              alt="A&Y Luxury Boutique Residences - Twilight Exterior"
              className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.08]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/60 to-[#10131a]/75" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,195,73,0.10)_0%,rgba(16,19,26,0.90)_85%)]" />
          </div>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col items-center justify-center px-4 sm:px-6 text-center">

            <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.75)] px-3 sm:px-5 py-1 sm:py-2 backdrop-blur-md shadow-[0_0_20px_rgba(233,195,73,0.15)]">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#e9c349] animate-ping" />

              <span className="text-[8.5px] sm:text-[16px] font-bold uppercase tracking-[1.2px] sm:tracking-[2px] text-[#e9c349]">
                Boutique Residential Living | Dehiwala
              </span>
            </div>

            <h1 className="font-display text-[30px] xs:text-[36px] sm:text-[50px] md:text-[60px] lg:text-[76px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#e0e2ec]">
              <span className="block drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
                Driven by Quality.
              </span>

              <span className="block gold-gradient-text text-glow-gold">
                Defined by Integrity.
              </span>
            </h1>
          </div>
        </section>

        {/* =====================================================
    SECTION 3: REAL ESTATE & CONSTRUCTION
====================================================== */}

        <BuildProgression
          sectionId="progression-section-1"
          framePath="/assets/video/webp"
          eyebrow="REAL ESTATE & CONSTRUCTION"
          titleLine1="Every Legacy"
          titleLine2="Starts With Solid Ground"
          description="From apartment and house construction to property buying, selling and lease arrangements, we deliver complete real estate and construction services with a focus on quality, reliability and lasting value."
        />


        {/* =====================================================
    SECTION 4: IMPORT & EXPORT
====================================================== */}

        <BuildProgression
          sectionId="progression-section-2"
          framePath="/assets/video/webp-2"
          eyebrow="IMPORT & EXPORT"
          titleLine1="Connecting Markets"
          titleLine2="Beyond Borders"
          description="Our import and export services cover vehicle imports, vehicle spare parts importing and general export services, creating reliable solutions for businesses and customers across different markets."
        />


        {/* =====================================================
    SECTION 5: TRADING & DISTRIBUTION
====================================================== */}

        <BuildProgression
          sectionId="progression-section-3"
          framePath="/assets/video/webp-3"
          eyebrow="TRADING & DISTRIBUTION"
          titleLine1="Supplying With Purpose"
          titleLine2="Built For Every Need"
          description="From construction materials and garment items to vehicle spare parts, we provide buying, selling and wholesale distribution services designed to connect essential products with the markets that need them."
        />

        {/* =====================================================
          SECTION 7: LOCATION
      ====================================================== */}

        <section
          id="location"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 sm:px-6 py-16 sm:py-24 lg:px-16"
        >

          <div className="glass-panel-gold rounded-3xl p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-5 flex flex-col gap-6">

                <div>

                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
                    Strategic Epicenter
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f0ede6] leading-tight">
                    Marine Drive Coastal Corridor
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-[#c6c6cb] leading-relaxed">
                    Situated in prime Dehiwala with immediate connectivity to
                    both Marine Drive and Galle Road, offering seamless access to
                    Colombo&apos;s Central Business District while preserving a
                    quiet residential environment.
                  </p>

                </div>


                <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[rgba(233,195,73,0.3)]">

                  <div className="flex items-start gap-3.5">

                    <div className="h-10 w-10 shrink-0 rounded-xl bg-[rgba(233,195,73,0.15)] border border-[rgba(233,195,73,0.3)] flex items-center justify-center text-[#e9c349]">

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                    </div>

                    <div>

                      <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#e9c349]">
                        Development Location
                      </span>

                      <h3 className="font-display text-base sm:text-lg font-bold text-[#e0e2ec] mt-0.5">
                        A&amp;Y Luxury Residences
                      </h3>

                      <p className="text-xs sm:text-sm text-[#c6c6cb] mt-1 leading-relaxed">
                        Dehiwala Coastal Enclave,
                        <br />
                        Dehiwala-Mount Lavinia 10350, Sri Lanka
                      </p>

                    </div>
                  </div>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">

                  <div className="glass-panel rounded-xl p-3 border border-[rgba(233,195,73,0.2)] text-center">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[#e9c349]">
                      2 Min
                    </div>

                    <div className="text-[9.5px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-0.5">
                      Marine Drive
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3 border border-[rgba(233,195,73,0.2)] text-center">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[#e9c349]">
                      3 Min
                    </div>

                    <div className="text-[9.5px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-0.5">
                      Galle Road
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3 border border-[rgba(233,195,73,0.2)] text-center">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[#e9c349]">
                      8 Min
                    </div>

                    <div className="text-[9.5px] font-bold uppercase tracking-[1px] text-[#c6c6cb] mt-0.5">
                      Colombo 04 / 05
                    </div>
                  </div>

                </div>


                <div className="pt-1">

                  <a
                    href="https://maps.google.com/?q=Dehiwala,+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e9c349] px-7 text-xs font-bold tracking-[1.5px] uppercase text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] transition-all transform hover:-translate-y-0.5"
                  >

                    <svg
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>

                    <span>Open in Google Maps</span>

                  </a>

                </div>

              </div>


              <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-[rgba(233,195,73,0.35)] shadow-2xl bg-[#0b0e15]">

                <iframe
                  title="A&Y Dehiwala Project Location Map"
                  src="https://maps.google.com/maps?q=Marine+Drive,+Dehiwala,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.05] brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <div className="pointer-events-none absolute top-3.5 left-3.5 glass-panel flex items-center gap-2 rounded-xl px-3 py-1.5 border border-[rgba(233,195,73,0.35)]">

                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />

                  <span className="text-[10px] font-mono font-bold tracking-[1.2px] text-[#e0e2ec] uppercase">
                    Live Corridor Map
                  </span>

                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;