import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Brochure() {
  const navigate = useNavigate();

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const triggerBrochureDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setDownloadStarted(false);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadStarted(true);

      window.print();

      setTimeout(() => {
        setDownloadStarted(false);
      }, 3000);
    }, 700);
  };

  return (
    <>
      <Helmet>
        <title>
          Architectural Prospectus & Specifications | A&Y CONSOLIDATED
        </title>

        <meta
          name="description"
          content="Official architectural prospectus, structural blueprints, and engineering finishing schedule for A&Y Consolidated Luxury Residences."
        />

      </Helmet>

      {/* Print-only styles */}
      <style>{`
        .glass-panel {
          background: rgba(20, 24, 33, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(233, 195, 73, 0.2);
          transition: all 0.3s ease;
        }

        .glass-panel:hover {
          border-color: rgba(233, 195, 73, 0.5);
          box-shadow: 0 10px 30px rgba(233, 195, 73, 0.12);
        }

        .gold-gradient-text {
          background: linear-gradient(135deg, #fff2c4 0%, #e9c349 50%, #b38b1f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .font-display {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .brochure-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @media print {
          header,
          footer,
          .no-print {
            display: none !important;
          }

          body {
            background: white !important;
            color: black !important;
          }

          .glass-panel,
          .glass-panel:hover {
            box-shadow: none !important;
          }
        }
      `}</style>

      <div
        className="
          brochure-page
          min-h-screen
          bg-[#10131a]
          text-[#e0e2ec]
          antialiased
          selection:bg-[#e9c349]
          selection:text-[#10131a]
        "
      >
        {/* =========================================
            TOP BAR
        ========================================== */}

        <header
          className="
            sticky
            top-0
            z-50
            border-b
            border-[rgba(233,195,73,0.25)]
            bg-[rgba(16,19,26,0.92)]
            px-4
            py-4
            backdrop-blur-md
            no-print
            sm:px-8
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[1280px]
              items-center
              justify-between
            "
          >
            {/* Back Button */}

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                border
                border-[rgba(233,195,73,0.4)]
                bg-[rgba(29,32,39,0.8)]
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#e9c349]
                shadow-[0_2px_15px_rgba(233,195,73,0.15)]
                transition-all
                duration-200
                hover:bg-[#e9c349]
                hover:text-[#10131a]
                cursor-pointer
              "
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
                  strokeWidth="2.2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>

              <span>Back to Previous</span>
            </button>

            {/* Quick Action Buttons */}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.3)]
                  bg-[rgba(233,195,73,0.1)]
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-[#e9c349]
                  transition-all
                  hover:bg-[#e9c349]
                  hover:text-[#3c2f00]
                  sm:inline-flex
                  cursor-pointer
                "
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
                    strokeWidth="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>

                Print / Save PDF
              </button>

              <Link
                to="/contact#contact"
                className="
                  rounded-xl
                  bg-[#e9c349]
                  px-5
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#3c2f00]
                  shadow-[0_2px_15px_rgba(233,195,73,0.3)]
                  transition-all
                  hover:bg-[#ffd659]
                "
              >
                Reserve Suite
              </Link>
            </div>
          </div>
        </header>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <main
          className="
            mx-auto
            max-w-[1200px]
            px-4
            py-12
            sm:px-8
            sm:py-16
          "
        >
          {/* =========================================
              HEADER BANNER
          ========================================== */}

          <div className="mb-12 text-center">
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[rgba(233,195,73,0.4)]
                bg-[rgba(29,32,39,0.8)]
                px-4
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#e9c349]
              "
            >
              Official Architectural Documentation
            </div>

            <h1
              className="
                font-display
                text-3xl
                font-bold
                leading-tight
                text-[#e0e2ec]
                sm:text-5xl
              "
            >
              Architectural Prospectus &{" "}
              <span className="gold-gradient-text">
                Engineering Dossier
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-[760px]
                text-sm
                leading-relaxed
                text-[#c6c6cb]
                sm:text-base
              "
            >
              Comprehensive technical blueprints, spatial layouts,
              dimensional schedules, and premium European material
              specifications for our boutique G+5 residences in Dehiwala
              Marine Corridor.
            </p>

            {/* PDF DOWNLOAD */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                no-print
              "
            >
              <button
                type="button"
                onClick={triggerBrochureDownload}
                disabled={isDownloading}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#e9c349]
                  px-7
                  py-3.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[1.8px]
                  text-[#3c2f00]
                  shadow-[0_4px_25px_rgba(233,195,73,0.35)]
                  transition-all
                  hover:bg-[#ffd659]
                  disabled:cursor-not-allowed
                  disabled:opacity-80
                "
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>

                    Generating PDF...
                  </>
                ) : downloadStarted ? (
                  <>✓ Download Started</>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>

                    <span>Download Complete Dossier (PDF)</span>
                  </>
                )}
              </button>

              {downloadStarted && (
                <span
                  className="
                    text-xs
                    font-semibold
                    text-emerald-400
                    transition-opacity
                    duration-300
                  "
                >
                  ✓ Technical dossier prepared. Downloading brochure
                  package...
                </span>
              )}
            </div>
          </div>

          {/* =========================================
              SUITE SELECTION SHOWCASE
          ========================================== */}

          <div
            className="
              mb-16
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-2
            "
          >
            {/* =====================================
                SUITE TYPE A
            ====================================== */}

            <div
              className="
                glass-panel
                flex
                flex-col
                justify-between
                rounded-2xl
                p-6
                sm:p-8
              "
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="
                      rounded-lg
                      border
                      border-[rgba(233,195,73,0.3)]
                      bg-[rgba(233,195,73,0.15)]
                      px-3
                      py-1
                      font-mono
                      text-xs
                      font-bold
                      text-[#e9c349]
                    "
                  >
                    SUITE TYPE A
                  </span>

                  <span className="font-mono text-xs text-[#8e9099]">
                    LEVELS 1 – 5
                  </span>
                </div>

                <h2
                  className="
                    font-display
                    text-2xl
                    font-bold
                    text-[#e0e2ec]
                  "
                >
                  Grand Penthouse Residence
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                    sm:text-sm
                  "
                >
                  1,425 Sq.Ft of uncompromised coastal luxury featuring
                  private elevator access, 3 expansive ensuite bedrooms,
                  dedicated maid&apos;s quarters, and twin ocean-view
                  terraces.
                </p>

                <div
                  className="
                    my-6
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-[rgba(233,195,73,0.25)]
                    bg-[#0b0e15]
                    p-4
                  "
                >
                  <img
                    src="/assets/images/unit.jpg"
                    alt="Floor Plan Suite Type A"
                    className="
                      max-h-[260px]
                      w-auto
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  />
                </div>

                {/* Dimension Breakdown */}

                <div className="space-y-2 text-xs">
                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Total Usable Area:
                    </span>

                    <span className="font-bold text-[#e9c349]">
                      1,425 Sq.Ft
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Master Suite:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      16&apos; 4&quot; × 13&apos; 8&quot; (Ensuite + Terrace)
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Living & Dining:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      24&apos; 6&quot; × 15&apos; 2&quot; (Panoramic Glass)
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Kitchen:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      European Modular + Quartz Island
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-[#8e9099]">
                      Maid&apos;s Quarters:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      Dedicated Room + Private Bath
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[rgba(233,195,73,0.15)]
                  pt-4
                "
              >
                <Link
                  to="/contact?plan=suite-a#contact"
                  className="
                    rounded-xl
                    bg-[#e9c349]
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#3c2f00]
                    transition-all
                    hover:bg-[#ffd659]
                  "
                >
                  Reserve Suite A
                </Link>

                <span className="font-mono text-xs text-[#e9c349]">
                  Only 3 Units Remaining
                </span>
              </div>
            </div>

            {/* =====================================
                SUITE TYPE B
            ====================================== */}

            <div
              className="
                glass-panel
                flex
                flex-col
                justify-between
                rounded-2xl
                p-6
                sm:p-8
              "
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="
                      rounded-lg
                      border
                      border-[rgba(233,195,73,0.3)]
                      bg-[rgba(233,195,73,0.15)]
                      px-3
                      py-1
                      font-mono
                      text-xs
                      font-bold
                      text-[#e9c349]
                    "
                  >
                    SUITE TYPE B
                  </span>

                  <span className="font-mono text-xs text-[#8e9099]">
                    LEVELS 1 – 5
                  </span>
                </div>

                <h2
                  className="
                    font-display
                    text-2xl
                    font-bold
                    text-[#e0e2ec]
                  "
                >
                  Executive Luxury Residence
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                    sm:text-sm
                  "
                >
                  1,273 Sq.Ft of intelligently engineered space with
                  double-glazed acoustic separation, open-concept chef&apos;s
                  kitchen, soundproof master suite, and cross-ventilation
                  corridors.
                </p>

                <div
                  className="
                    my-6
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-[rgba(233,195,73,0.25)]
                    bg-[#0b0e15]
                    p-4
                  "
                >
                  <img
                    src="/assets/images/unit.jpg"
                    alt="Floor Plan Suite Type B"
                    className="
                      max-h-[260px]
                      w-auto
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-105
                      filter
                      hue-rotate-15
                    "
                  />
                </div>

                {/* Dimension Breakdown */}

                <div className="space-y-2 text-xs">
                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Total Usable Area:
                    </span>

                    <span className="font-bold text-[#e9c349]">
                      1,273 Sq.Ft
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Master Bedroom:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      15&apos; 0&quot; × 12&apos; 6&quot; (Ensuite + Wardrobe)
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Living Corridor:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      21&apos; 8&quot; × 14&apos; 0&quot; (Dual Balconies)
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-b
                      border-[rgba(233,195,73,0.1)]
                      py-1.5
                    "
                  >
                    <span className="text-[#8e9099]">
                      Bedrooms:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      3 Bed / 2 Luxury Bathrooms
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-[#8e9099]">
                      Acoustic Insulation:
                    </span>

                    <span className="font-semibold text-[#e0e2ec]">
                      German 24mm Double Glazing
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[rgba(233,195,73,0.15)]
                  pt-4
                "
              >
                <Link
                  to="/contact?plan=suite-b#contact"
                  className="
                    rounded-xl
                    bg-[#e9c349]
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#3c2f00]
                    transition-all
                    hover:bg-[#ffd659]
                  "
                >
                  Reserve Suite B
                </Link>

                <span className="font-mono text-xs text-[#e9c349]">
                  Only 2 Units Remaining
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              TECHNICAL SPECIFICATION SCHEDULE
          ========================================== */}

          <div
            className="
              glass-panel
              mb-12
              rounded-2xl
              p-6
              sm:p-10
            "
          >
            <div
              className="
                mx-auto
                mb-8
                max-w-[650px]
                text-center
              "
            >
              <h3
                className="
                  font-display
                  text-2xl
                  font-bold
                  text-[#e0e2ec]
                  sm:text-3xl
                "
              >
                Master Specification Schedule
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  text-[#c6c6cb]
                  sm:text-sm
                "
              >
                Certified to exceed BS 8110 and Eurocode 2 statutory
                building standards.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {/* 01 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.2)]
                  bg-[#13161f]
                  p-5
                "
              >
                <div
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#e9c349]
                  "
                >
                  01. Substructure & Frame
                </div>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                  "
                >
                  Grade-40 ready-mix concrete reinforced with high-yield
                  TMT steel. Monolithic raft foundation with 4mm torch-on
                  waterproof membrane against coastal salinity.
                </p>
              </div>

              {/* 02 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.2)]
                  bg-[#13161f]
                  p-5
                "
              >
                <div
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#e9c349]
                  "
                >
                  02. Acoustic Envelope
                </div>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                  "
                >
                  Powder-coated anodized architectural aluminum framing
                  fitted with 24mm hermetically sealed double glazing
                  with Argon gas filling (42 dB sound attenuation).
                </p>
              </div>

              {/* 03 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.2)]
                  bg-[#13161f]
                  p-5
                "
              >
                <div
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#e9c349]
                  "
                >
                  03. Vertical Mobility
                </div>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                  "
                >
                  High-speed 10-passenger Kone/Schindler elevator equipped
                  with Automatic Rescue Device (ARD) and direct floor
                  biometric access.
                </p>
              </div>

              {/* 04 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.2)]
                  bg-[#13161f]
                  p-5
                "
              >
                <div
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#e9c349]
                  "
                >
                  04. Power & Backup
                </div>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                  "
                >
                  100% prime-rated Cummins/Perkins standby generator with
                  automatic changeover switch (AMF) supplying full
                  apartment power including A/C and cooking.
                </p>
              </div>

              {/* 05 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.2)]
                  bg-[#13161f]
                  p-5
                "
              >
                <div
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#e9c349]
                  "
                >
                  05. Bathrooms & Plumbing
                </div>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                  "
                >
                  Concealed Grohe German thermostatic fixtures, wall-hung
                  Kohler water closets, frameless tempered glass shower
                  cubicles, and solar hot water loop.
                </p>
              </div>

              {/* 06 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[rgba(233,195,73,0.2)]
                  bg-[#13161f]
                  p-5
                "
              >
                <div
                  className="
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#e9c349]
                  "
                >
                  06. Security & Telecom
                </div>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-[#c6c6cb]
                  "
                >
                  Fiber-to-the-Home (FTTH) high-speed data infrastructure,
                  IP video intercom linked to security lobby, and 24/7 HD
                  CCTV covering all perimeters.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              BOTTOM BACK BUTTON
          ========================================== */}

          <div className="pt-4 text-center no-print">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[rgba(233,195,73,0.4)]
                bg-[rgba(29,32,39,0.8)]
                px-8
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[1.8px]
                text-[#e9c349]
                shadow-[0_4px_20px_rgba(233,195,73,0.2)]
                transition-all
                hover:bg-[#e9c349]
                hover:text-[#10131a]
                cursor-pointer
              "
            >
              <span>← Back to Previous</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Brochure;