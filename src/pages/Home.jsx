import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 80;

/* =========================================================
   BUSINESS DATA
========================================================= */

const BUSINESS_DATA = [
  {
    id: "construction",
    framePath: "/assets/video/webp",
    eyebrow: "REAL ESTATE & CONSTRUCTION",
    titleLine1: "Real Estate",
    titleLine2: "& Construction",
    description:
      "We provide complete Real Estate & Construction services including construction, apartment construction, house construction, property services, property buying and selling with agent services, lease arrangements, and property management.",
  },

  {
    id: "import-export",
    framePath: "/assets/video/webp-2",
    eyebrow: "IMPORT & EXPORT",
    titleLine1: "Import",
    titleLine2: "& Export",
    description:
      "Our import and export services cover vehicle imports, vehicle spare parts importing and general export services, creating reliable solutions for businesses and customers across different markets.",
  },

  {
    id: "distribution",
    framePath: "/assets/video/webp-3",
    eyebrow: "TRADING & DISTRIBUTION",
    titleLine1: "Trading",
    titleLine2: "& Distribution",
    description:
      "From construction materials and garment items to vehicle spare parts, we provide buying, selling and wholesale distribution services designed to connect essential products with the markets that need them.",
  },
];

/* =========================================================
   BUSINESS PROGRESSION

   ONE PINNED SECTION

   Video 1
   Construction
   Frame 001 → 080

   Video 2
   Import & Export
   Frame 001 → 080

   Video 3
   Trading & Distribution
   Frame 001 → 080

   Then section unpins and Location starts.
========================================================= */

function BusinessProgression() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const progressBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const textRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    /* =======================================================
       TOTAL FRAMES

       80 × 3 = 240
    ======================================================= */

    const totalFrames =
      BUSINESS_DATA.length *
      TOTAL_FRAMES;

    const frames =
      new Array(totalFrames);

    /* =======================================================
       FRAME STATE
    ======================================================= */

    let currentFrameIndex = 0;
    let targetFrameIndex = 0;

    let currentBusinessIndex = 0;

    let animationFrameId = null;

    let destroyed = false;

    /* =======================================================
       GET BUSINESS INDEX FROM GLOBAL FRAME

       0 - 79     → Construction
       80 - 159   → Import & Export
       160 - 239  → Distribution
    ======================================================= */

    const getBusinessIndex = (
      frameIndex
    ) => {
      return Math.min(
        BUSINESS_DATA.length - 1,
        Math.floor(
          frameIndex / TOTAL_FRAMES
        )
      );
    };

    /* =======================================================
       GET GLOBAL FRAME FROM SCROLL PROGRESS

       IMPORTANT:

       We calculate the frame PER VIDEO.

       This prevents the boundary problem where
       2/3 progress could otherwise produce frame 159
       instead of frame 160.
    ======================================================= */

    const getFrameFromProgress = (
      progress
    ) => {
      const safeProgress = Math.max(
        0,
        Math.min(0.999999999, progress)
      );

      /*
        0.00 → 0.3333
        Video 1

        0.3333 → 0.6666
        Video 2

        0.6666 → 1
        Video 3
      */

      const scaledProgress =
        safeProgress *
        BUSINESS_DATA.length;

      const businessIndex = Math.min(
        BUSINESS_DATA.length - 1,
        Math.floor(
          scaledProgress
        )
      );

      const localProgress =
        scaledProgress -
        businessIndex;

      const localFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(
          0,
          Math.round(
            localProgress *
            (TOTAL_FRAMES - 1)
          )
        )
      );

      return {
        businessIndex,
        localFrame,
        globalFrame:
          businessIndex *
          TOTAL_FRAMES +
          localFrame,
      };
    };

    /* =======================================================
       RENDER FRAME
    ======================================================= */

    const renderFrame = (
      index
    ) => {
      if (destroyed) {
        return;
      }

      const safeIndex =
        Math.max(
          0,
          Math.min(
            totalFrames - 1,
            Math.round(index)
          )
        );

      let img =
        frames[safeIndex];

      /* -----------------------------------------------------
         If requested frame isn't loaded,
         find nearest available frame.
      ----------------------------------------------------- */

      if (
        !img ||
        !img.complete ||
        img.naturalWidth === 0
      ) {
        for (
          let offset = 1;
          offset < totalFrames;
          offset += 1
        ) {
          const previous =
            safeIndex - offset;

          const next =
            safeIndex + offset;

          if (
            previous >= 0 &&
            frames[previous] &&
            frames[previous].complete &&
            frames[previous]
              .naturalWidth > 0
          ) {
            img =
              frames[previous];

            break;
          }

          if (
            next < totalFrames &&
            frames[next] &&
            frames[next].complete &&
            frames[next]
              .naturalWidth > 0
          ) {
            img =
              frames[next];

            break;
          }
        }
      }

      if (
        !img ||
        !img.complete ||
        img.naturalWidth === 0
      ) {
        return;
      }

      const rect =
        canvas.getBoundingClientRect();

      if (
        !rect.width ||
        !rect.height
      ) {
        return;
      }

      /* -----------------------------------------------------
         Device Pixel Ratio
      ----------------------------------------------------- */

      const dpr = Math.min(
        window.devicePixelRatio ||
        1,
        2
      );

      const targetW =
        Math.max(
          1,
          Math.floor(
            rect.width * dpr
          )
        );

      const targetH =
        Math.max(
          1,
          Math.floor(
            rect.height * dpr
          )
        );

      if (
        canvas.width !==
        targetW ||
        canvas.height !==
        targetH
      ) {
        canvas.width =
          targetW;

        canvas.height =
          targetH;
      }

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      ctx.clearRect(
        0,
        0,
        rect.width,
        rect.height
      );

      /* -----------------------------------------------------
         IMAGE ASPECT RATIO
      ----------------------------------------------------- */

      const imgAspect =
        img.naturalWidth /
        img.naturalHeight;

      const canvasAspect =
        rect.width /
        rect.height;

      let drawW;
      let drawH;
      let drawX;
      let drawY;

      /* -----------------------------------------------------
         OBJECT COVER
      ----------------------------------------------------- */

      if (
        canvasAspect >
        imgAspect
      ) {
        drawW =
          rect.width;

        drawH =
          rect.width /
          imgAspect;

        drawX = 0;

        drawY =
          (rect.height -
            drawH) /
          2;
      } else {
        drawH =
          rect.height;

        drawW =
          rect.height *
          imgAspect;

        drawX =
          (rect.width -
            drawW) /
          2;

        drawY = 0;
      }

      /* -----------------------------------------------------
         DRAW
      ----------------------------------------------------- */

      ctx.drawImage(
        img,
        drawX,
        drawY,
        drawW,
        drawH
      );
    };

    /* =======================================================
       LOAD FRAME
    ======================================================= */

    const loadFrame = (
      businessIndex,
      frameIndex
    ) => {
      const globalIndex =
        businessIndex *
        TOTAL_FRAMES +
        frameIndex;

      const frameNumber =
        String(
          frameIndex + 1
        ).padStart(3, "0");

      const img =
        new Image();

      frames[globalIndex] =
        img;

      let fallbackTried =
        false;

      /* -----------------------------------------------------
         WEBP LOAD SUCCESS
      ----------------------------------------------------- */

      img.onload = () => {
        if (destroyed) {
          return;
        }

        /*
          Render first frame immediately.
        */

        if (
          globalIndex === 0
        ) {
          renderFrame(0);
        }
      };

      /* -----------------------------------------------------
         WEBP FALLBACK → PNG
      ----------------------------------------------------- */

      img.onerror = () => {
        if (
          fallbackTried ||
          destroyed
        ) {
          return;
        }

        fallbackTried = true;

        img.src =
          `${BUSINESS_DATA[businessIndex].framePath}/frame_${frameNumber}.png`;
      };

      /* -----------------------------------------------------
         INITIAL WEBP
      ----------------------------------------------------- */

      img.src =
        `${BUSINESS_DATA[businessIndex].framePath}/frame_${frameNumber}.webp`;
    };

    /* =======================================================
       LOAD ALL 240 FRAMES
    ======================================================= */

    BUSINESS_DATA.forEach(
      (_, businessIndex) => {
        for (
          let frameIndex = 0;
          frameIndex <
          TOTAL_FRAMES;
          frameIndex += 1
        ) {
          loadFrame(
            businessIndex,
            frameIndex
          );
        }
      }
    );

    /* =======================================================
       SHOW BUSINESS TEXT
       
       IMPORTANT:

       Text does NOT change during the video.

       Construction text:
       frame 001 → 080

       Import text:
       frame 001 → 080

       Distribution text:
       frame 001 → 080
    ======================================================= */

    const showBusinessText = (
      businessIndex,
      animate = true
    ) => {
      textRefs.current.forEach(
        (
          textElement,
          index
        ) => {
          if (!textElement) {
            return;
          }

          /* -------------------------------------------------
             ACTIVE TEXT
          ------------------------------------------------- */

          if (
            index ===
            businessIndex
          ) {
            if (animate) {
              gsap.fromTo(
                textElement,
                {
                  opacity: 0,
                  y: 20,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  ease: "power2.out",
                  overwrite: true,
                }
              );
            } else {
              gsap.set(
                textElement,
                {
                  opacity: 1,
                  y: 0,
                }
              );
            }

            textElement.style.pointerEvents =
              "auto";
          }

          /* -------------------------------------------------
             INACTIVE TEXT
          ------------------------------------------------- */

          else {
            gsap.to(
              textElement,
              {
                opacity: 0,
                y: 20,
                duration: animate
                  ? 0.2
                  : 0,
                ease: "power2.out",
                overwrite: true,
              }
            );

            textElement.style.pointerEvents =
              "none";
          }
        }
      );
    };

    /* =======================================================
       INITIAL TEXT
    ======================================================= */

    showBusinessText(
      0,
      false
    );

    currentBusinessIndex = 0;

    /* =======================================================
       FRAME INTERPOLATION

       Smoothly moves canvas from current frame
       to target frame.
    ======================================================= */

    const frameInterpolationLoop =
      () => {
        if (destroyed) {
          return;
        }

        const difference =
          targetFrameIndex -
          currentFrameIndex;

        if (
          Math.abs(
            difference
          ) > 0.01
        ) {
          currentFrameIndex +=
            difference *
            0.18;

          renderFrame(
            currentFrameIndex
          );
        } else {
          currentFrameIndex =
            targetFrameIndex;

          renderFrame(
            currentFrameIndex
          );
        }

        animationFrameId =
          requestAnimationFrame(
            frameInterpolationLoop
          );
      };

    /* =======================================================
       MAIN SCROLLTRIGGER

       ONE SECTION

       3600px × 3 = 10800px

       Video 1:
       0 → 3600

       Video 2:
       3600 → 7200

       Video 3:
       7200 → 10800
    ======================================================= */

    const scrollTrigger =
      ScrollTrigger.create({
        id: "business-scroll",

        trigger: section,

        start: "top top",

        end:
          `+=${3600 * BUSINESS_DATA.length}`,

        pin: true,

        pinSpacing: true,

        scrub: 0.5,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          /* ===============================================
             CALCULATE CURRENT VIDEO + FRAME
          =============================================== */

          const {
            businessIndex,
            globalFrame,
          } =
            getFrameFromProgress(
              self.progress
            );

          /* ===============================================
             TARGET FRAME
          =============================================== */

          targetFrameIndex =
            globalFrame;

          /* ===============================================
             CHANGE TEXT ONLY WHEN
             VIDEO CHANGES
          =============================================== */

          if (
            businessIndex !==
            currentBusinessIndex
          ) {
            currentBusinessIndex =
              businessIndex;

            showBusinessText(
              businessIndex,
              true
            );

            /* ---------------------------------------------
               Tell Navbar about active business stage.
            --------------------------------------------- */

            window.dispatchEvent(
              new CustomEvent(
                "business:stageChange",
                {
                  detail: {
                    stageIndex:
                      businessIndex,
                  },
                }
              )
            );
          }

          /* ===============================================
             PROGRESS BAR
          =============================================== */

          if (
            progressBarRef.current
          ) {
            progressBarRef.current.style.width =
              `${self.progress * 100}%`;
          }

          /* ===============================================
             SCROLL INDICATOR
          =============================================== */

          if (
            scrollIndicatorRef.current
          ) {
            scrollIndicatorRef.current.style.opacity =
              self.progress >
                0.08
                ? "0"
                : `${Math.max(
                  0,
                  1 -
                  self.progress *
                  12.5
                )}`;
          }
        },

        onEnter: () => {
          window.dispatchEvent(
            new CustomEvent(
              "business:stageChange",
              {
                detail: {
                  stageIndex: 0,
                },
              }
            )
          );
        },

        onEnterBack: () => {
          window.dispatchEvent(
            new CustomEvent(
              "business:stageChange",
              {
                detail: {
                  stageIndex: 2,
                },
              }
            )
          );
        },
      });

    /* =======================================================
       IMPORTANT:
       NAVBAR + FOOTER USE THIS FUNCTION
       
       stageIndex:
       0 → Construction
       1 → Import & Export
       2 → Distribution
    ======================================================= */

    window.__businessScrollToStage =
      (stageIndex) => {
        if (destroyed) {
          return;
        }

        const safeStageIndex =
          Math.max(
            0,
            Math.min(
              BUSINESS_DATA.length -
              1,
              stageIndex
            )
          );

        /*
          Each business gets exactly
          1 / 3 of the pinned scroll.

          Stage 0 = 0%
          Stage 1 = 33.333%
          Stage 2 = 66.666%
        */

        const stageProgress =
          safeStageIndex /
          BUSINESS_DATA.length;

        const scrollDistance =
          scrollTrigger.end -
          scrollTrigger.start;

        const targetScroll =
          scrollTrigger.start +
          scrollDistance *
          stageProgress;

        /*
          Immediately update text.

          This makes the clicked business
          appear immediately, without waiting
          for the next tiny scroll event.
        */

        currentBusinessIndex =
          safeStageIndex;

        targetFrameIndex =
          safeStageIndex *
          TOTAL_FRAMES;

        currentFrameIndex =
          targetFrameIndex;

        showBusinessText(
          safeStageIndex,
          false
        );

        /* -----------------------------------------------
           Update Navbar
        ----------------------------------------------- */

        window.dispatchEvent(
          new CustomEvent(
            "business:stageChange",
            {
              detail: {
                stageIndex:
                  safeStageIndex,
              },
            }
          )
        );

        /* -----------------------------------------------
           Direct jump
           
           NO SMOOTH SCROLL
        ----------------------------------------------- */

        window.scrollTo({
          top: targetScroll,
          behavior: "auto",
        });

        /*
          Force ScrollTrigger to recalculate
          immediately after direct jump.
        */

        requestAnimationFrame(
          () => {
            if (!destroyed) {
              ScrollTrigger.update();
            }
          }
        );
      };

    /* =======================================================
       START FRAME LOOP
    ======================================================= */

    frameInterpolationLoop();

    /* =======================================================
       RESIZE
    ======================================================= */

    const handleResize =
      () => {
        renderFrame(
          currentFrameIndex
        );

        ScrollTrigger.refresh();
      };

    window.addEventListener(
      "resize",
      handleResize
    );

    /* =======================================================
       INITIAL REFRESH
    ======================================================= */

    requestAnimationFrame(
      () => {
        if (!destroyed) {
          ScrollTrigger.refresh();

          renderFrame(0);
        }
      }
    );

    /* =======================================================
       CLEANUP
    ======================================================= */

    return () => {
      destroyed = true;

      if (
        animationFrameId
      ) {
        cancelAnimationFrame(
          animationFrameId
        );
      }

      window.removeEventListener(
        "resize",
        handleResize
      );

      /*
        Remove global function only if
        this component owns it.
      */

      if (
        window.__businessScrollToStage
      ) {
        delete window.__businessScrollToStage;
      }

      scrollTrigger.kill();

      /*
        Remove any GSAP text animations.
      */

      textRefs.current.forEach(
        (element) => {
          if (element) {
            gsap.killTweensOf(
              element
            );
          }
        }
      );
    };
  }, []);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      ref={sectionRef}
      id="businesses"
      className="relative h-screen w-full overflow-hidden bg-[#080b10]"
    >

      
      
      {/* =====================================================
          VIDEO STAGE
          Kept visually separate from the section header.
      ====================================================== */}

      <div className="absolute inset-0 z-[1] overflow-hidden bg-[#090b10]">

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Video dark treatment */}
        <div className="pointer-events-none absolute inset-0 bg-[#05070b]/15" />

        {/* Left readability gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-full bg-gradient-to-r from-[#070a10]/95 via-[#070a10]/72 to-transparent md:w-[78%] lg:w-[68%]" />

        {/* Cinematic top/bottom separation */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#080b10]/90 via-transparent to-[#080b10]/25" />

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        ref={scrollIndicatorRef}
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 transition-opacity duration-300"
      >

        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-[rgba(233,195,73,0.5)] p-1">

          <div className="h-2 w-1.5 animate-bounce rounded-full bg-[#e9c349]" />

        </div>

        <span className="text-[9px] font-mono font-bold uppercase tracking-[2px] text-[#8e9099]">
          Scroll to explore
        </span>

      </div>

      {/* =====================================================
          TEXT AREA

          Text is positioned inside the video stage only.
      ====================================================== */}

      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-0 pt-0 sm:px-10 md:px-14 lg:px-16 xl:px-20">

        <div className="relative min-h-[460px] w-full max-w-[540px] sm:min-h-[480px] sm:max-w-[580px] lg:min-h-[500px]">

          {BUSINESS_DATA.map(
            (
              business,
              index
            ) => (
              <div
                key={business.id}
                ref={(element) => {
                  textRefs.current[
                    index
                  ] = element;
                }}
                className="absolute left-0 top-1/2 w-full -translate-y-1/2"
                style={{
                  opacity:
                    index === 0
                      ? 1
                      : 0,

                  pointerEvents:
                    index === 0
                      ? "auto"
                      : "none",
                }}
              >

                {/* =================================================
                    EYEBROW
                ================================================== */}

                <div className="mb-2.5 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[2px] text-[#e9c349] sm:mb-3 sm:text-[13px] sm:tracking-[2.5px]">

                  <span className="h-2 w-2 rounded-full bg-[#e9c349]" />

                  <span>
                    {
                      business.eyebrow
                    }
                  </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h2 className="mb-3 text-2xl font-display font-bold leading-[1.15] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] xs:text-3xl sm:mb-4 sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px]">

                  {
                    business.titleLine1
                  }

                  <br />

                  <span className="gold-gradient-text">
                    {
                      business.titleLine2
                    }
                  </span>

                </h2>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p className="mb-5 max-w-[480px] text-xs leading-relaxed text-[#d4d6df] drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:mb-6 sm:text-sm md:text-[15px] lg:text-base">
                  {
                    business.description
                  }
                </p>

              </div>
            )
          )}

        </div>
      </div>

    </section>
  );
}

/* =========================================================
   A&Y COMPANY SHOWCASE
========================================================= */

function CompanyShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      eyebrow: "LEADERSHIP",
      title: "Chief Executive",
      accent: "Officer.",
      quote:
        "Leading A&Y Consolidated with a clear focus on quality, integrity, responsible growth, and long-term value. The leadership approach is centred on building a strong foundation for the company while maintaining high standards across every area of operation.",
      detail:
        "CEO · A&Y Consolidated",
      image: "/assets/images/ceo-profile.jpg",
    },
    {
      eyebrow: "LEADERSHIP",
      title: "Executive",
      accent: "Director.",
      quote:
        "Supporting the continued growth of A&Y Consolidated through strong leadership, collaboration, and disciplined execution. The role focuses on strengthening internal coordination and ensuring that the company’s vision is translated into effective day-to-day operations.",
      detail:
        "Executive Director · A&Y Consolidated",
      image: "/assets/images/team-placeholder-02.svg",
    },
    {
      eyebrow: "LEADERSHIP",
      title: "Business",
      accent: "Director.",
      quote:
        "Helping shape efficient business operations while maintaining the standards and values that define A&Y Consolidated. The focus is on developing sustainable business relationships, improving operational efficiency, and supporting opportunities for continued growth.",
      detail:
        "Business Director · A&Y Consolidated",
      image: "/assets/images/team-placeholder-03.svg",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide(
        (previous) => (previous + 1) % slides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setActiveSlide(
      (previous) => (previous + 1) % slides.length
    );
  };

  const previousSlide = () => {
    setActiveSlide(
      (previous) =>
        (previous - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="team"
      className="relative w-full overflow-hidden bg-[#10131a] py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#e9c349]/[0.025] blur-[100px]" />
        <div className="absolute right-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-[#e9c349]/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <span className="h-px w-10 bg-[#e9c349]/70" />
          <span className="text-[9px] font-mono font-bold uppercase tracking-[3px] text-[#e9c349] sm:text-[10px] sm:tracking-[4px]">
            The People Behind A&amp;Y
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[rgba(233,195,73,0.22)] bg-[#0c0f15] shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-12">

            <div className="relative min-h-[330px] overflow-hidden lg:col-span-5 lg:min-h-[570px]">
              <img
                key={`${activeSlide}-${currentSlide.image}`}
                src={currentSlide.image}
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#080b11]/10 via-[#080b11]/15 to-[#080b11]/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b11]/90 via-transparent to-[#080b11]/20" />
              <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e9c349]/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="border-l border-[#e9c349]/70 pl-4">
                  <p className="text-[8px] font-mono uppercase tracking-[3px] text-[#e9c349]">
                    A&amp;Y Consolidated
                  </p>
                  <p className="mt-1 font-display text-xl font-medium text-white sm:text-2xl">
                    Luxury Residences
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:col-span-7 lg:p-14 xl:p-16">
              <div className="max-w-[650px]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#e9c349]" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[3px] text-[#e9c349]">
                    {currentSlide.eyebrow}
                  </span>
                </div>

                <h2 className="font-display text-[34px] font-medium leading-[1.05] tracking-[-0.025em] text-[#f1eee7] sm:text-[42px] md:text-[48px] lg:text-[52px]">
                  {currentSlide.title}
                  <br />
                  <span className="gold-gradient-text">
                    {currentSlide.accent}
                  </span>
                </h2>

                <div className="mt-7 font-display text-[58px] leading-none text-[#e9c349]/20">
                  “
                </div>

                <p className="-mt-3 max-w-[590px] text-[13px] font-medium italic leading-[1.9] text-[#d2d4dc] sm:text-[14px] md:text-[15px]">
                  {currentSlide.quote}
                </p>

                <p className="mt-5 max-w-[580px] text-[11px] leading-[1.9] text-[#777c87] sm:text-xs md:text-[13px]">
                  {currentSlide.detail}
                </p>

                <div className="my-7 h-px w-full bg-gradient-to-r from-[#e9c349]/45 via-[#e9c349]/10 to-transparent" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold tracking-[2px] text-[#e9c349]">
                    {String(activeSlide + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#4c5059]">/</span>
                  <span className="font-mono text-[10px] tracking-[2px] text-[#555a65]">
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-[3px] rounded-full transition-all duration-500 ${
                        activeSlide === index
                          ? "w-9 bg-[#e9c349]"
                          : "w-4 bg-[#454a54] hover:bg-[#8b7a3b]"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(233,195,73,0.25)] text-[#aeb1ba] transition-all duration-300 hover:border-[#e9c349] hover:bg-[#e9c349]/10 hover:text-[#e9c349]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(233,195,73,0.25)] text-[#aeb1ba] transition-all duration-300 hover:border-[#e9c349] hover:bg-[#e9c349]/10 hover:text-[#e9c349]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <span className="text-[8px] font-mono uppercase tracking-[2.5px] text-[#555a65]">
            A&amp;Y CONSOLIDATED (PVT, LTD)
          </span>
          <span className="text-[8px] font-mono uppercase tracking-[2.5px] text-[#555a65]">
            Excellence · Integrity · Quality
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
      {/* =====================================================
          SEO
      ====================================================== */}

      <Helmet>

        <title>
          A&Y Consolidated | Luxury Residences in Dehiwala
        </title>

        <meta
          name="description"
          content="Discover A&Y Consolidated luxury residences in Dehiwala, featuring exclusive three-bedroom homes designed for quality, integrity, privacy, and long-term value."
        />

        <meta
          name="keywords"
          content="A&Y Consolidated, luxury residences, Dehiwala, luxury apartments, residential property, Sri Lanka"
        />

        <meta
          name="robots"
          content="index, follow"
        />

      </Helmet>

      <main className="relative pt-[73px]">

        {/* =====================================================
    PREMIUM HERO
====================================================== */}

        <section
          id="home"
          className="relative flex min-h-[calc(100vh-73px)] w-full items-center justify-center overflow-hidden bg-[#10131a]"
        >
          {/* =================================================
      BACKGROUND
  ================================================== */}

          <div className="absolute inset-0 overflow-hidden">

            <img
              src="/assets/images/hero-building.jpg"
              alt="A&Y Luxury Boutique Residences - Twilight Exterior"
              className="h-full w-full scale-[1.04] object-cover object-center"
            />

            {/* Cinematic dark overlay */}
            <div className="absolute inset-0 bg-[#080b11]/45" />

            {/* Left dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080b11]/75 via-[#080b11]/35 to-transparent" />

            {/* Refined bottom cinematic fade */}
            <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-[#10131a] via-[#10131a]/45 to-transparent" />

            {/* Clear visual separation from the next section */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-[#e9c349]/45 to-transparent" />

            {/* Very subtle luxury glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(233,195,73,0.07),transparent_45%)]" />

          </div>

          {/* =================================================
      HERO CONTENT
  ================================================== */}

          <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-center px-5 text-center sm:px-8 md:px-12 lg:px-16">

            <div className="flex max-w-[1100px] flex-col items-center">

              {/* =================================================
          COMPANY NAME
      ================================================== */}

              <div className="mb-8 sm:mb-6">

                <h1
                  className="
            font-display
            text-[38px]
            font-semibold
            leading-none
            tracking-[-0.035em]
            text-[#f3eee2]
            drop-shadow-[0_8px_30px_rgba(0,0,0,0.75)]
            sm:text-[52px]
            md:text-[64px]
            lg:text-[72px]
            xl:text-[74px]
          "
                >
                  A&amp;Y CONSOLIDATED
                  <span className="ml-2 text-[#e9c349]">
                    (PVT, LTD)
                  </span>
                </h1>

                {/* Elegant gold line */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-3">

                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#e9c349]/70 sm:w-16" />

                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349] shadow-[0_0_12px_rgba(233,195,73,0.8)]" />

                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#e9c349]/70 sm:w-16" />

                </div>

              </div>

              {/* =================================================
          TAGLINE
      ================================================== */}

              <h2
                className="
          font-display
          text-[25px]
          font-medium
          leading-tight
          tracking-[-0.02em]
          text-[#f1eee7]
          drop-shadow-[0_5px_22px_rgba(0,0,0,0.9)]
          sm:text-[34px]
          md:text-[42px]
          lg:text-[32px]
        "
              >
                <span>
                  Driven by Quality.
                </span>

                <span className="mx-2 sm:mx-3">
                  <span className="text-[#e9c349]/70">·</span>
                </span>

                <span className="gold-gradient-text text-glow-gold">
                  Defined by Integrity.
                </span>
              </h2>

            </div>

          </div>

          {/* =================================================
      SUBTLE BOTTOM SCROLL INDICATOR
  ================================================== */}

          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">

            <div className="h-7 w-px bg-gradient-to-b from-[#e9c349]/70 to-transparent" />

            <span className="text-[7px] font-mono uppercase tracking-[3px] text-[#858995]">
              Scroll
            </span>

          </div>

        </section>

        {/* =====================================================
            BUSINESS SECTION

            Visually separated from Hero
            Construction
            ↓
            Import & Export
            ↓
            Trading & Distribution
            ↓
            Company Showcase
            ↓
            Location
        ====================================================== */}

        <BusinessProgression />

        {/* =====================================================
            VISUAL SECTION BREAK
        ====================================================== */}

        <div className="relative h-16 w-full bg-[#080b10] sm:h-20">
          <div className="absolute left-1/2 top-1/2 h-px w-[min(420px,70%)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#e9c349]/20 to-transparent" />
        </div>

        {/* =====================================================
            A&Y COMPANY SHOWCASE
            Auto + manual premium slider
        ====================================================== */}

        <CompanyShowcase />


        {/* =====================================================
            LOCATION
        ====================================================== */}

        <section
          id="location"
          className="relative w-full overflow-hidden bg-[#0b0e15] py-14 sm:py-18 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e9c349]/30 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 xl:px-16">

            {/* SECTION HEADER */}

            <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#e9c349]" />

                  <span className="text-[9px] font-mono font-bold uppercase tracking-[3px] text-[#e9c349]">
                    Our Location
                  </span>
                </div>

                <h2 className="font-display text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-[#f1eee7] sm:text-[42px] lg:text-[50px]">
                  A Prime Address
                  <span className="gold-gradient-text"> in Dehiwala.</span>
                </h2>
              </div>

              <p className="max-w-[390px] text-xs leading-[1.8] text-[#858995] sm:text-sm lg:pb-1">
                A well-connected coastal address with convenient access to
                Marine Drive, Galle Road and Colombo&apos;s key destinations.
              </p>

            </div>

            {/* MAIN LOCATION CARD */}

            <div className="overflow-hidden rounded-[24px] border border-[rgba(233,195,73,0.2)] bg-[#0c0f15] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* DETAILS */}

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10 xl:p-12">

                  <div>

                    <div className="mb-4 inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349] shadow-[0_0_8px_rgba(233,195,73,0.7)]" />

                      <span className="text-[8px] font-mono font-bold uppercase tracking-[2px] text-[#e9c349]">
                        Strategic Epicenter
                      </span>
                    </div>

                    <h3 className="font-display text-[27px] font-medium leading-[1.12] text-[#f1eee7] sm:text-[32px]">
                      Marine Drive
                      <br />
                      <span className="gold-gradient-text">
                        Coastal Corridor
                      </span>
                    </h3>

                    <p className="mt-4 max-w-[470px] text-xs leading-[1.85] text-[#aeb1ba] sm:text-sm">
                      Situated in prime Dehiwala with immediate connectivity
                      to Marine Drive and Galle Road, while maintaining a
                      refined residential environment.
                    </p>

                    {/* ADDRESS */}

                    <div className="mt-6 rounded-2xl border border-[rgba(233,195,73,0.18)] bg-[rgba(233,195,73,0.045)] p-4">

                      <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(233,195,73,0.25)] bg-[rgba(233,195,73,0.08)] text-[#e9c349]">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.7"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.7"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>

                        <div>
                          <span className="text-[8px] font-mono uppercase tracking-[1.8px] text-[#e9c349]">
                            Development Location
                          </span>

                          <h4 className="mt-1 font-display text-base text-[#f0ede6]">
                            A&amp;Y Luxury Residences
                          </h4>

                          <p className="mt-1 text-[11px] leading-[1.7] text-[#858995]">
                            No 55/1 B, Nikape Road,
                            <br />
                            Nedimala, Dehiwala, Sri Lanka
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* DISTANCE CARDS */}

                    <div className="mt-4 grid grid-cols-3 gap-2.5">

                      <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#10131a] p-3 text-center">
                        <div className="font-mono text-base font-bold text-[#e9c349]">
                          2 Min
                        </div>
                        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.8px] text-[#777c87]">
                          Marine Drive
                        </div>
                      </div>

                      <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#10131a] p-3 text-center">
                        <div className="font-mono text-base font-bold text-[#e9c349]">
                          3 Min
                        </div>
                        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.8px] text-[#777c87]">
                          Galle Road
                        </div>
                      </div>

                      <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#10131a] p-3 text-center">
                        <div className="font-mono text-base font-bold text-[#e9c349]">
                          8 Min
                        </div>
                        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.8px] text-[#777c87]">
                          Colombo 04 / 05
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* MAP BUTTON */}

                  <div className="mt-6">
                    <a
                      href="https://maps.app.goo.gl/t5uwqBDFWHekR4xE9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#e9c349] px-5 text-[9px] font-bold uppercase tracking-[1.4px] text-[#3c2f00] shadow-[0_5px_20px_rgba(233,195,73,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd659] sm:h-11 sm:px-6"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                      </svg>

                      Open in Google Maps
                    </a>
                  </div>

                </div>

                {/* MAP */}

                <div className="relative min-h-[330px] overflow-hidden border-t border-[rgba(233,195,73,0.16)] bg-[#080b10] sm:min-h-[390px] lg:col-span-7 lg:min-h-[500px] lg:border-l lg:border-t-0">

                  <iframe
                    title="A&Y Dehiwala Project Location Map"
                    src="https://maps.google.com/maps?q=Marine+Drive,+Dehiwala,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 h-full w-full border-0 brightness-[0.88] contrast-[1.08] saturate-[0.7]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b10]/65 via-transparent to-[#080b10]/10" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-[rgba(233,195,73,0.25)] bg-[rgba(11,14,21,0.78)] px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">

                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e9c349] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e9c349]" />
                    </span>

                    <span className="text-[8px] font-mono font-bold uppercase tracking-[1.3px] text-[#e0e2ec]">
                      Live Corridor Map
                    </span>

                  </div>

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