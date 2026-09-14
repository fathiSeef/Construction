import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 80;

function Home() {
  const canvasRef = useRef(null);
  const progressionRef = useRef(null);
  const progressBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const [selectedPlan, setSelectedPlan] = useState("suite-a");

  // =========================================================
  // 80 FRAME BUILD PROGRESSION
  // =========================================================

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = progressionRef.current;

    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    const frames = [];

    let currentFrameIndex = 0;
    let targetFrameIndex = 0;
    let animationFrameId;

    const renderFrame = (index) => {
      const safeIndex = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(index))
      );

      let img = frames[safeIndex];

      // Find nearest loaded frame if target isn't loaded yet
      if (!img || !img.complete) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          if (
            safeIndex - offset >= 0 &&
            frames[safeIndex - offset] &&
            frames[safeIndex - offset].complete
          ) {
            img = frames[safeIndex - offset];
            break;
          }

          if (
            safeIndex + offset < TOTAL_FRAMES &&
            frames[safeIndex + offset] &&
            frames[safeIndex + offset].complete
          ) {
            img = frames[safeIndex + offset];
            break;
          }
        }
      }

      if (!img || !img.complete) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      const targetW = Math.floor(rect.width * dpr);
      const targetH = Math.floor(rect.height * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.save();

      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const imgAspect = img.width / img.height;
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

      ctx.restore();
    };

    // ---------------------------------------------------------
    // Preload frames
    // ---------------------------------------------------------

    const preloadFrames = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();

        const frameNumber = String(i).padStart(3, "0");

        img.src = `/assets/video/webp/frame_${frameNumber}.webp`;

        img.onload = () => {
          frames[i - 1] = img;

          if (i === 1) {
            renderFrame(0);
          }
        };

        img.onerror = () => {
          img.src = `/assets/video/frame_${frameNumber}.png`;
        };
      }
    };

    // ---------------------------------------------------------
    // Smooth frame interpolation
    // ---------------------------------------------------------

    const frameInterpolationLoop = () => {
      if (Math.abs(targetFrameIndex - currentFrameIndex) > 0.01) {
        currentFrameIndex +=
          (targetFrameIndex - currentFrameIndex) * 0.15;

        renderFrame(currentFrameIndex);
      }

      animationFrameId = requestAnimationFrame(frameInterpolationLoop);
    };

    // ---------------------------------------------------------
    // GSAP ScrollTrigger
    // ---------------------------------------------------------

    const stage1 = section.querySelector("#stage-1");
    const stage2 = section.querySelector("#stage-2");
    const stage3 = section.querySelector("#stage-3");
    const stage4 = section.querySelector("#stage-4");

    gsap.set(stage1, {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
    });

    gsap.set(stage2, {
      opacity: 0,
      y: 40,
      pointerEvents: "none",
    });

    gsap.set(stage3, {
      opacity: 0,
      y: 40,
      pointerEvents: "none",
    });

    gsap.set(stage4, {
      opacity: 0,
      y: 40,
      pointerEvents: "none",
    });

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=3600",
        pin: true,
        pinSpacing: true,
        scrub: 0.5,

        onUpdate: (self) => {
          targetFrameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(self.progress * TOTAL_FRAMES)
          );

          // Progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width =
              `${self.progress * 100}%`;
          }

          // Scroll indicator
          if (scrollIndicatorRef.current) {
            if (self.progress > 0.08) {
              scrollIndicatorRef.current.style.opacity = "0";
            } else {
              scrollIndicatorRef.current.style.opacity =
                `${1 - self.progress * 12.5}`;
            }
          }
        },
      },
    });

    // Stage 1
    masterTl.to(
      stage1,
      {
        opacity: 0,
        y: -40,
        pointerEvents: "none",
        duration: 0.06,
        ease: "power2.inOut",
      },
      0.18
    );

    // Stage 2
    masterTl
      .fromTo(
        stage2,
        {
          opacity: 0,
          y: 40,
          pointerEvents: "none",
        },
        {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.06,
          ease: "power2.out",
        },
        0.24
      )
      .to(
        stage2,
        {
          opacity: 0,
          y: -40,
          pointerEvents: "none",
          duration: 0.06,
          ease: "power2.in",
        },
        0.44
      );

    // Stage 3
    masterTl
      .fromTo(
        stage3,
        {
          opacity: 0,
          y: 40,
          pointerEvents: "none",
        },
        {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.06,
          ease: "power2.out",
        },
        0.49
      )
      .to(
        stage3,
        {
          opacity: 0,
          y: -40,
          pointerEvents: "none",
          duration: 0.06,
          ease: "power2.in",
        },
        0.69
      );

    masterTl.fromTo(
      stage4,
      {
        opacity: 0,
        y: 40,
        pointerEvents: "none",
      },
      {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.06,
        ease: "power2.out",
      },
      0.74
    );

    // Stage 4
    masterTl.fromTo(
      stage4,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.06,
        ease: "power2.out",
      },
      0.74
    );

    // Initial loading
    preloadFrames();
    frameInterpolationLoop();

    const handleResize = () => {
      renderFrame(currentFrameIndex);

      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);

      masterTl.scrollTrigger?.kill();
      masterTl.kill();

      ScrollTrigger.refresh();
    };
  }, []);

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

              <span className="text-[8.5px] sm:text-[11px] font-bold uppercase tracking-[1.2px] sm:tracking-[2px] text-[#e9c349]">
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

            <div className="mt-3 sm:mt-5 max-w-[720px] px-2 sm:px-4 text-[13px] sm:text-[16px] lg:text-[18px] font-light leading-[1.5] text-[#c6c6cb]">
              <p>
                An exclusive 5-story sanctuary featuring 10 three-bedroom
                residences, engineered for generational equity and unencumbered
                peace of mind.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto max-w-[320px] sm:max-w-none">

              <a
                href="#residences"
                className="flex h-[46px] sm:h-[52px] w-full sm:w-auto items-center justify-center rounded-xl bg-[#e9c349] px-7 text-[11px] sm:text-[12px] font-bold tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_25px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] hover:shadow-[0_6px_35px_rgba(233,195,73,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                EXPLORE RESIDENCES
              </a>

              <a
                href="#progression-section"
                className="glass-panel group flex h-[46px] sm:h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl px-6 text-[11px] sm:text-[12px] font-bold tracking-[1.8px] text-[#e0e2ec] hover:border-[#e9c349] hover:text-[#e9c349] transition-all cursor-pointer"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(233,195,73,0.2)] text-[#e9c349] group-hover:scale-110 transition-transform">
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <span>WATCH BUILD PROGRESS</span>
              </a>
            </div>

            <div className="mt-8 sm:mt-12 w-full max-w-[1100px] px-0 sm:px-2">
              <div className="glass-panel-gold rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">

                <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 md:divide-x md:divide-[rgba(233,195,73,0.2)]">

                  <div className="flex flex-col items-center justify-center text-center p-1 sm:p-2">
                    <div className="font-display text-xl sm:text-3xl font-bold text-[#e9c349]">
                      10
                    </div>
                    <div className="mt-0.5 text-[8.5px] sm:text-[11px] font-bold uppercase tracking-[1px] sm:tracking-[1.4px] text-[#c6c6cb]">
                      Exclusive Units
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center p-1 sm:p-2">
                    <div className="font-display text-base sm:text-2xl font-bold text-[#e9c349]">
                      1,273–1,425
                    </div>
                    <div className="mt-0.5 text-[8.5px] sm:text-[11px] font-bold uppercase tracking-[1px] sm:tracking-[1.4px] text-[#c6c6cb]">
                      Sq.Ft Suites
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center p-1 sm:p-2">
                    <div className="font-display text-xl sm:text-3xl font-bold text-[#e9c349]">
                      G+5
                    </div>
                    <div className="mt-0.5 text-[8.5px] sm:text-[11px] font-bold uppercase tracking-[1px] sm:tracking-[1.4px] text-[#c6c6cb]">
                      Density (2/Floor)
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center p-1 sm:p-2">
                    <div className="font-display text-xl sm:text-3xl font-bold text-[#e9c349]">
                      100%
                    </div>
                    <div className="mt-0.5 text-[8.5px] sm:text-[11px] font-bold uppercase tracking-[1px] sm:tracking-[1.4px] text-[#c6c6cb]">
                      Past Sellout Rate
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
          SECTION 2: PROVEN LEGACY
      ====================================================== */}

        <section
          id="legacy"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 sm:gap-16 rounded-2xl bg-[rgba(11,14,21,0.5)] px-4 sm:px-6 py-14 sm:py-20 lg:px-16 mt-8"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-2">
              Track Record
            </div>

            <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] font-semibold leading-[1.2] text-[#e0e2ec]">
              Proven Legacy
            </h2>

            <p className="mx-auto mt-3 sm:mt-4 max-w-[672px] text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.6] sm:leading-[1.7] text-[#c6c6cb] px-2">
              A testament to our commitment to excellence, our past projects
              stand as pillars of structural integrity, timeless design, and
              prime investment security.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">

            <article className="group overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.25)] bg-[rgba(28,31,38,0.6)] backdrop-blur-md transition-all duration-300 hover:border-[#e9c349] hover:shadow-[0_10px_30px_rgba(233,195,73,0.15)]">
              <div className="relative h-[220px] sm:h-[280px] overflow-hidden">
                <img
                  src="/assets/images/nidapark-istinye.jpg"
                  alt="Kawdana Residence"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f26] via-transparent to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#e0e2ec]">
                    Kawdana Residence
                  </h3>

                  <div className="flex items-center gap-1.5 rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.1)] px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#e9c349]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    100% Sold Out
                  </div>
                </div>

                <p className="mt-2 text-xs text-[#c6c6cb]">
                  Completed ahead of schedule with flawless handover record.
                </p>
              </div>
            </article>


            <article className="group overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.25)] bg-[rgba(28,31,38,0.6)] backdrop-blur-md transition-all duration-300 hover:border-[#e9c349] hover:shadow-[0_10px_30px_rgba(233,195,73,0.15)]">
              <div className="relative h-[220px] sm:h-[280px] overflow-hidden">
                <img
                  src="/assets/images/img1.jpg"
                  alt="Hill Street Project"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f26] via-transparent to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#e0e2ec]">
                    Hill Street Project
                  </h3>

                  <div className="flex items-center gap-1.5 rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.1)] px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#e9c349]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" />
                    Fully Booked
                  </div>
                </div>

                <p className="mt-2 text-xs text-[#c6c6cb]">
                  Modern architectural marvel featuring sustainable engineering.
                </p>
              </div>
            </article>

          </div>
        </section>


        {/* =====================================================
          SECTION 3: BUILD PROGRESSION
      ====================================================== */}

        <section
          ref={progressionRef}
          id="progression-section"
          className="relative w-full h-screen overflow-hidden bg-[#10131a] my-8"
        >

          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-[3px] bg-[#e9c349] z-30 transition-all duration-75 w-0 shadow-[0_0_10px_rgba(233,195,73,0.8)]"
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

            <div className="relative w-full max-w-[540px] sm:max-w-[580px] h-[360px] sm:h-[400px] lg:h-[420px]">

              {/* STAGE 1 */}

              <div
                id="stage-1"
                className="text-stage active pointer-events-auto p-0"
              >
                <div className="text-xs sm:text-[13px] font-mono font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-[#e9c349] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e9c349]" />
                  <span>A&amp;Y CONSOLIDATED</span>
                </div>

                <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  Every Legacy
                  <br />
                  <span className="gold-gradient-text">
                    Starts With Solid Ground
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#d4d6df] leading-relaxed max-w-[480px] mb-5 sm:mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                  From deep bored piling to bedrock to reinforced raft
                  foundations, engineered with precision for seismic resilience
                  and generational equity.
                </p>

                <a
                  href="#craftsmanship"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[rgba(233,195,73,0.8)] bg-[rgba(233,195,73,0.1)] backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[13px] font-bold uppercase tracking-[1.8px] text-[#e9c349] hover:bg-[#e9c349] hover:text-[#10131a] transition-all duration-300 shadow-[0_0_25px_rgba(233,195,73,0.25)] pointer-events-auto"
                >
                  <span>Explore Build Specs</span>

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>


              {/* STAGE 2 */}

              <div
                id="stage-2"
                className="text-stage active pointer-events-auto p-0"
              >
                <div className="text-xs sm:text-[13px] font-mono font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-[#e9c349] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e9c349]" />
                  <span>A&amp;Y CONSOLIDATED</span>
                </div>

                <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  A Strong Base
                  <br />
                  <span className="gold-gradient-text">
                    For The Future
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#d4d6df] leading-relaxed max-w-[480px] mb-5 sm:mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                  Laying an unshakable monolithic framework. G+5 levels of
                  post-tensioned reinforced columns and floor slabs rising with
                  millimeter accuracy.
                </p>

                <a
                  href="#residences"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[rgba(233,195,73,0.8)] bg-[rgba(233,195,73,0.1)] backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[13px] font-bold uppercase tracking-[1.8px] text-[#e9c349] hover:bg-[#e9c349] hover:text-[#10131a] transition-all duration-300 shadow-[0_0_25px_rgba(233,195,73,0.25)] pointer-events-auto"
                >
                  <span>Our Build Process</span>

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>


              {/* STAGE 3 */}

              <div
                id="stage-3"
                className="text-stage active pointer-events-auto p-0"
              >
                <div className="text-xs sm:text-[13px] font-mono font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-[#e9c349] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e9c349]" />
                  <span>A&amp;Y CONSOLIDATED</span>
                </div>

                <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  Modern Design,
                  <br />
                  <span className="gold-gradient-text">
                    Flawlessly Executed
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#d4d6df] leading-relaxed max-w-[480px] mb-5 sm:mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                  As the acoustic double-glazed curtain walls ascend,
                  architectural elegance becomes reality. Engineered to isolate
                  coastal weather and street noise.
                </p>

                <a
                  href="#residences"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[rgba(233,195,73,0.8)] bg-[rgba(233,195,73,0.1)] backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[13px] font-bold uppercase tracking-[1.8px] text-[#e9c349] hover:bg-[#e9c349] hover:text-[#10131a] transition-all duration-300 shadow-[0_0_25px_rgba(233,195,73,0.25)] pointer-events-auto"
                >
                  <span>Explore The Suites</span>

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>


              {/* STAGE 4 */}

              <div
                id="stage-4"
                className="text-stage active pointer-events-auto p-0"
              >
                <div className="text-xs sm:text-[13px] font-mono font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-[#e9c349] mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e9c349]" />
                  <span>A&amp;Y CONSOLIDATED</span>
                </div>

                <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  Your Dream Home,
                  <br />
                  <span className="gold-gradient-text">
                    Delivered.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#d4d6df] leading-relaxed max-w-[480px] mb-5 sm:mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                  This is what we build for. A boutique 10-residence sanctuary
                  crafted to perfection with unencumbered freehold deeds and
                  turnkey handover.
                </p>

                <a
                  href="/contact#contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#e9c349] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[1.8px] text-[#3c2f00] hover:bg-[#ffd659] transition-all duration-300 shadow-[0_4px_25px_rgba(233,195,73,0.4)] pointer-events-auto"
                >
                  <span>Book Consultation &amp; Site Visit</span>

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
          SECTION 4: RESIDENCES
      ====================================================== */}

        <section
          id="residences"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 sm:gap-14 px-4 sm:px-6 py-16 sm:py-24 lg:px-16"
        >

          <div className="text-center">

            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
              Architectural Floor Plans
            </div>

            <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] font-semibold leading-[1.2] text-[#e0e2ec]">
              Curated Living Sanctuaries
            </h2>

            <p className="mx-auto mt-3 sm:mt-4 max-w-[680px] text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.6] sm:leading-[1.7] text-[#c6c6cb] px-2">
              Engineered with spatial intelligence, dual-aspect natural
              ventilation, acoustic isolation, and panoramic ocean vistas.
              Only two residences per floor for consummate privacy.
            </p>

            <div className="mt-8 inline-flex p-1.5 rounded-2xl glass-panel border border-[rgba(233,195,73,0.3)] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">

              <button
                type="button"
                onClick={() => setSelectedPlan("suite-a")}
                className={
                  selectedPlan === "suite-a"
                    ? activeTabClass
                    : inactiveTabClass
                }
              >
                Suite Type A (1,425 Sq.Ft)
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan("suite-b")}
                className={
                  selectedPlan === "suite-b"
                    ? activeTabClass
                    : inactiveTabClass
                }
              >
                Suite Type B (1,273 Sq.Ft)
              </button>

            </div>
          </div>


          {/* =================================================
            SUITE A
        ================================================== */}

          {selectedPlan === "suite-a" && (
            <div
              id="plan-view-suite-a"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all"
            >

              <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.25)] bg-[#0c0f16]/90 p-4 sm:p-8 flex items-center justify-center min-h-[340px] sm:min-h-[420px] relative group">

                <img
                  src="/assets/images/unit.jpg"
                  alt="Floor Plan Suite Type A"
                  className="max-h-[380px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-4 right-4 glass-panel rounded-xl px-3 py-1.5 text-[10px] font-mono text-[#e9c349] border border-[rgba(233,195,73,0.3)]">
                  LEVEL 1 – LEVEL 5
                </div>
              </div>


              <div className="lg:col-span-5 flex flex-col gap-6">

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#e9c349]">
                    3 Bed + Maid / 3 Bath
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f0ede6] mt-1">
                    Grand Penthouse Residence
                  </h3>

                  <p className="text-sm text-[#c6c6cb] mt-2 leading-relaxed">
                    Featuring direct elevator foyer access, expansive master
                    suite with walk-in closet, dedicated maid&apos;s quarters
                    with private bath, and dual balconies capturing ocean
                    breezes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Total Area
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      1,425 Sq.Ft
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Ceiling Height
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      10.5 Ft Clear
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Glazing System
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      German Acoustic
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Air Conditioning
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      Full Inverter VRV
                    </div>
                  </div>

                </div>

                <div className="flex items-center gap-4 pt-2">

                  <a
                    href="/contact?plan=suite-a#contact"
                    className="flex h-11 items-center justify-center rounded-xl bg-[#e9c349] px-6 text-xs font-bold tracking-[1.5px] uppercase text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] transition-all"
                  >
                    Reserve Suite A
                  </a>

                  <a
                    href="/brochure"
                    className="glass-panel flex h-11 items-center justify-center rounded-xl px-5 text-xs font-bold tracking-[1.5px] uppercase text-[#e0e2ec] hover:border-[#e9c349] hover:text-[#e9c349] transition-all"
                  >
                    Request Architectural PDF
                  </a>

                </div>
              </div>
            </div>
          )}


          {/* =================================================
            SUITE B
        ================================================== */}

          {selectedPlan === "suite-b" && (
            <div
              id="plan-view-suite-b"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all"
            >

              <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.25)] bg-[#0c0f16]/90 p-4 sm:p-8 flex items-center justify-center min-h-[340px] sm:min-h-[420px] relative group">

                <img
                  src="/assets/images/unit.jpg"
                  alt="Floor Plan Suite Type B"
                  className="max-h-[380px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-4 right-4 glass-panel rounded-xl px-3 py-1.5 text-[10px] font-mono text-[#e9c349] border border-[rgba(233,195,73,0.3)]">
                  LEVEL 1 – LEVEL 5
                </div>
              </div>


              <div className="lg:col-span-5 flex flex-col gap-6">

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#e9c349]">
                    3 Bed / 2 Bath
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f0ede6] mt-1">
                    Executive Luxury Suite
                  </h3>

                  <p className="text-sm text-[#c6c6cb] mt-2 leading-relaxed">
                    Optimized layout with spacious open-plan living, designer
                    European kitchen, master suite with private sea-facing
                    terrace, and sound-isolated bedrooms.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Total Area
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      1,273 Sq.Ft
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Ceiling Height
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      10.5 Ft Clear
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Glazing System
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      German Acoustic
                    </div>
                  </div>

                  <div className="glass-panel rounded-xl p-3.5 border border-[rgba(233,195,73,0.15)]">
                    <div className="text-[10px] font-mono uppercase tracking-[1px] text-[#8e9099]">
                      Air Conditioning
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e9c349]">
                      Full Inverter VRV
                    </div>
                  </div>

                </div>

                <div className="flex items-center gap-4 pt-2">

                  <a
                    href="/contact?plan=suite-b#contact"
                    className="flex h-11 items-center justify-center rounded-xl bg-[#e9c349] px-6 text-xs font-bold tracking-[1.5px] uppercase text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] hover:bg-[#ffd659] transition-all"
                  >
                    Reserve Suite B
                  </a>

                  <a
                    href="/brochure"
                    className="glass-panel flex h-11 items-center justify-center rounded-xl px-5 text-xs font-bold tracking-[1.5px] uppercase text-[#e0e2ec] hover:border-[#e9c349] hover:text-[#e9c349] transition-all"
                  >
                    Request Architectural PDF
                  </a>

                </div>
              </div>
            </div>
          )}

        </section>


        {/* =====================================================
          SECTION 5: CRAFTSMANSHIP
      ====================================================== */}

        <section
          id="craftsmanship"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 sm:px-6 py-16 sm:py-20 lg:px-16"
        >

          <div className="text-center">

            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
              Material Honesty &amp; Durability
            </div>

            <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] font-semibold leading-[1.2] text-[#e0e2ec]">
              Precision Engineering Standards
            </h2>

            <p className="mx-auto mt-3 sm:mt-4 max-w-[650px] text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#c6c6cb] px-2">
              Every component is specified beyond standard statutory codes to
              guarantee structural longevity, acoustic tranquility, and
              resilience against coastal weathering.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* FOUNDATION */}

            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-1">

              <div>

                <div className="h-12 w-12 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.25)] flex items-center justify-center text-[#e9c349] mb-6">

                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>

                </div>

                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  Grade-40 Raft Foundation
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  40 N/mm² yield concrete anchored 18m into bedrock. Protected by
                  4mm multi-layer sulphate-resisting waterproof membrane against
                  water table salinity.
                </p>

              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(233,195,73,0.15)] flex items-center justify-between text-[11px] font-mono text-[#e9c349]">
                <span>BS 8110 Compliant</span>
                <span>18m Anchor</span>
              </div>

            </div>


            {/* GLAZING */}

            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-1">

              <div>

                <div className="h-12 w-12 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.25)] flex items-center justify-center text-[#e9c349] mb-6">

                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>

                </div>

                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  German Acoustic Glazing
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  Dual-pane 24mm thermal insulation glass with Argon gas cavity.
                  Blocks 99% UV radiation and reduces ambient coastal traffic
                  noise by up to 42 dB.
                </p>

              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(233,195,73,0.15)] flex items-center justify-between text-[11px] font-mono text-[#e9c349]">
                <span>42 dB Sound Cut</span>
                <span>Low-E Tint</span>
              </div>

            </div>


            {/* POWER */}

            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-1">

              <div>

                <div className="h-12 w-12 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.25)] flex items-center justify-center text-[#e9c349] mb-6">

                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>

                </div>

                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  100% Standby Power
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  Heavy-duty Perkins generator with synchronized zero-second ATS
                  switchover powering all apartment loads, elevators, and air
                  conditioning units uninterruptedly.
                </p>

              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(233,195,73,0.15)] flex items-center justify-between text-[11px] font-mono text-[#e9c349]">
                <span>Zero-Second ATS</span>
                <span>100% AC Coverage</span>
              </div>

            </div>


            {/* WATER */}

            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-1">

              <div>

                <div className="h-12 w-12 rounded-xl bg-[rgba(233,195,73,0.12)] border border-[rgba(233,195,73,0.25)] flex items-center justify-center text-[#e9c349] mb-6">

                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>

                </div>

                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  Central UV Water Security
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  3-stage central filtration with ultraviolet purification,
                  7-day reserve storage tanks, and dual Grundfos variable
                  frequency pumps for constant water pressure.
                </p>

              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(233,195,73,0.15)] flex items-center justify-between text-[11px] font-mono text-[#e9c349]">
                <span>7-Day Reserve</span>
                <span>UV Sterilized</span>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
          SECTION 6: AMENITIES
      ====================================================== */}

        <section
          id="amenities"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 sm:px-6 py-16 sm:py-20 lg:px-16"
        >

          <div className="text-center">

            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#e9c349] mb-3">
              Boutique Scale Privilege
            </div>

            <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] font-semibold leading-[1.2] text-[#e0e2ec]">
              Curated Resident Amenities
            </h2>

            <p className="mx-auto mt-3 sm:mt-4 max-w-[650px] text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#c6c6cb] px-2">
              Designed for wellness, privacy, and seamless executive
              entertaining high above the coastal horizon.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* POOL */}

            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#e9c349] transition-all">

              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-[rgba(233,195,73,0.2)]">

                <img
                  src="/assets/images/pool.jpg"
                  alt="Rooftop Infinity Pool"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 glass-panel rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#e9c349]">
                  LEVEL 6 ROOFTOP
                </span>

              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  Rooftop Infinity Pool &amp; Skydeck
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  Heated infinity pool and sun lounger terrace with 360°
                  unobstructed panoramic views of the Indian Ocean sunset.
                </p>
              </div>

            </div>


            {/* PARKING */}

            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#e9c349] transition-all">

              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-[rgba(233,195,73,0.2)]">

                <img
                  src="/assets/images/parking.jpg"
                  alt="Smart RFID Parking"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 glass-panel rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#e9c349]">
                  GROUND &amp; BASEMENT
                </span>

              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  EV Charging &amp; Smart RFID Parking
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  Dedicated 22kW AC fast-charging bays for electric vehicles,
                  automated license plate recognition, and wide turning bays.
                </p>
              </div>

            </div>


            {/* SECURITY */}

            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#e9c349] transition-all">

              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-[rgba(233,195,73,0.2)]">

                <img
                  src="/assets/images/security.png"
                  alt="24/7 Biometric Security"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 glass-panel rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#e9c349]">
                  MULTI-TIER ACCESS
                </span>

              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-[#f0ede6]">
                  24/7 AI Biometric Security
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#c6c6cb] leading-relaxed">
                  Facial recognition building entry, smart video intercom in
                  every suite, 32-channel perimeter CCTV, and round-the-clock
                  trained guards.
                </p>
              </div>

            </div>

          </div>
        </section>


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