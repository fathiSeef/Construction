import { useEffect, useRef } from "react";
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
      className="relative h-screen w-full overflow-hidden bg-[#10131a]"
    >

      {/* =====================================================
          PROGRESS BAR
      ====================================================== */}

      <div
        ref={progressBarRef}
        className="absolute left-0 top-0 z-30 h-[3px] w-0 bg-[#e9c349] shadow-[0_0_10px_rgba(233,195,73,0.8)]"
      />

      {/* =====================================================
          VIDEO CANVAS
      ====================================================== */}

      <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden bg-[#090b10]">

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

      </div>

      {/* =====================================================
          LEFT GRADIENT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2] w-full bg-gradient-to-r from-[#0b0e15]/95 via-[#0b0e15]/80 to-transparent md:w-[75%] lg:w-[65%]" />

      {/* =====================================================
          TOP / BOTTOM GRADIENT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#10131a] via-transparent to-[#10131a]/60" />

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

          ALL 3 TEXT BLOCKS USE SAME POSITION.

          ONLY ONE IS VISIBLE.
      ====================================================== */}

      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">

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

      {/* =====================================================
          VIDEO NUMBER
      ====================================================== */}

      <div className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 sm:flex">

        <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#e9c349]">
          01
        </span>

        <span className="text-[10px] font-mono text-[#555a66]">
          /
        </span>

        <span className="text-[10px] font-mono tracking-[2px] text-[#555a66]">
          03
        </span>

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
            HERO
        ====================================================== */}

        <section
          id="home"
          className="relative flex min-h-[calc(100vh-73px)] w-full items-center justify-center overflow-hidden bg-[#10131a] py-12 sm:py-16"
        >

          {/* =================================================
              HERO BACKGROUND
          ================================================== */}

          <div className="absolute inset-0 z-0 overflow-hidden">

            <img
              src="/assets/images/hero-building.jpg"
              alt="A&Y Luxury Boutique Residences - Twilight Exterior"
              className="h-full w-full scale-105 object-cover object-center brightness-[0.7] contrast-[1.08] filter"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/60 to-[#10131a]/75" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,195,73,0.10)_0%,rgba(16,19,26,0.90)_85%)]" />

          </div>

          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col items-center justify-center px-4 text-center sm:px-6">

            {/* Badge */}

            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.75)] px-3 py-1 backdrop-blur-md shadow-[0_0_20px_rgba(233,195,73,0.15)] sm:mb-6 sm:gap-2 sm:px-5 sm:py-2">

              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#e9c349] sm:h-2 sm:w-2" />

              <span className="text-[8.5px] font-bold uppercase tracking-[1.2px] text-[#e9c349] sm:text-[18px] sm:tracking-[2px]">
                Boutique Residential Living | Dehiwala
              </span>

            </div>

            {/* Heading */}

            <h1 className="font-display text-[30px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#e0e2ec] xs:text-[36px] sm:text-[50px] md:text-[60px] lg:text-[76px]">

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
            ONE BUSINESS SECTION

            Construction
            ↓
            Import & Export
            ↓
            Trading & Distribution
            ↓
            Location
        ====================================================== */}

        <BusinessProgression />

        {/* =====================================================
            LOCATION
        ====================================================== */}

        <section
          id="location"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:px-16"
        >

          <div className="glass-panel-gold rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)] sm:p-12">

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">

              {/* =================================================
                  LOCATION CONTENT
              ================================================== */}

              <div className="flex flex-col gap-6 lg:col-span-5">

                <div>

                  <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#e9c349] sm:text-[11px]">
                    Strategic Epicenter
                  </div>

                  <h2 className="font-display text-3xl font-bold leading-tight text-[#f0ede6] sm:text-4xl lg:text-5xl">
                    Marine Drive Coastal Corridor
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-[#c6c6cb] sm:text-base">
                    Situated in prime Dehiwala with immediate connectivity to
                    both Marine Drive and Galle Road, offering seamless access to
                    Colombo&apos;s Central Business District while preserving a
                    quiet residential environment.
                  </p>

                </div>

                {/* =================================================
                    DEVELOPMENT LOCATION
                ================================================== */}

                <div className="glass-panel rounded-2xl border border-[rgba(233,195,73,0.3)] p-4 sm:p-5">

                  <div className="flex items-start gap-3.5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.15)] text-[#e9c349]">

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

                      <h3 className="mt-0.5 font-display text-base font-bold text-[#e0e2ec] sm:text-lg">
                        A&amp;Y Luxury Residences
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-[#c6c6cb] sm:text-sm">
                        No 55/1 B, Nikape Road,
                        <br />
                        Nedimala, Dehiwala, Sri Lanka
                      </p>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    DISTANCE CARDS
                ================================================== */}

                <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-3">

                  <div className="glass-panel rounded-xl border border-[rgba(233,195,73,0.2)] p-3 text-center">

                    <div className="font-mono text-lg font-bold text-[#e9c349] sm:text-xl">
                      2 Min
                    </div>

                    <div className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[1px] text-[#c6c6cb]">
                      Marine Drive
                    </div>

                  </div>

                  <div className="glass-panel rounded-xl border border-[rgba(233,195,73,0.2)] p-3 text-center">

                    <div className="font-mono text-lg font-bold text-[#e9c349] sm:text-xl">
                      3 Min
                    </div>

                    <div className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[1px] text-[#c6c6cb]">
                      Galle Road
                    </div>

                  </div>

                  <div className="glass-panel rounded-xl border border-[rgba(233,195,73,0.2)] p-3 text-center">

                    <div className="font-mono text-lg font-bold text-[#e9c349] sm:text-xl">
                      8 Min
                    </div>

                    <div className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[1px] text-[#c6c6cb]">
                      Colombo 04 / 05
                    </div>

                  </div>

                </div>

                {/* =================================================
                    GOOGLE MAPS
                ================================================== */}

                <div className="pt-1">

                  <a
                    href="https://maps.app.goo.gl/t5uwqBDFWHekR4xE9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e9c349] px-7 text-xs font-bold uppercase tracking-[1.5px] text-[#3c2f00] shadow-[0_4px_20px_rgba(233,195,73,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#ffd659]"
                  >

                    <svg
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>

                    <span>
                      Open in Google Maps
                    </span>

                  </a>

                </div>

              </div>

              {/* =================================================
                  MAP
              ================================================== */}

              <div className="relative h-[380px] overflow-hidden rounded-2xl border border-[rgba(233,195,73,0.35)] bg-[#0b0e15] shadow-2xl sm:h-[460px] lg:col-span-7">

                <iframe
                  title="A&Y Dehiwala Project Location Map"
                  src="https://maps.google.com/maps?q=Marine+Drive,+Dehiwala,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0 brightness-95 contrast-[1.05] filter"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <div className="glass-panel pointer-events-none absolute left-3.5 top-3.5 flex items-center gap-2 rounded-xl border border-[rgba(233,195,73,0.35)] px-3 py-1.5">

                  <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />

                  <span className="text-[10px] font-mono font-bold uppercase tracking-[1.2px] text-[#e0e2ec]">
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