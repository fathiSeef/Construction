import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Investment() {
  return (
    <>
      <Helmet>
        <title>Investment | A&Y Consolidated</title>
        <meta
          name="description"
          content="Explore investment opportunities at A&Y Consolidated and discover premium residential property investment in Dehiwala and Colombo's prime coastal growth corridor."
        />
        <meta
          name="keywords"
          content="A&Y Consolidated investment, property investment, Dehiwala property, Colombo real estate, Sri Lanka real estate, residential investment"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div id="investment" className="pt-[73px]">

      {/* Intro Section */}
      <section
        className="
          min-h-[360px] sm:min-h-[440px] md:min-h-[480px]
          bg-[#0f1218]
          border-b border-[#4a4225]/40
          flex items-center justify-center
          px-4 sm:px-6
          py-12 sm:py-16
          relative overflow-hidden
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-[radial-gradient(circle_at_center,rgba(233,195,73,0.08)_0%,transparent_75%)]
          "
        />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">

          {/* Badge */}
          <div
            className="
              mb-3
              inline-flex items-center gap-2
              rounded-full
              border border-[rgba(233,195,73,0.4)]
              bg-[rgba(29,32,39,0.75)]
              px-3.5 py-1
              text-[9px] sm:text-[11px]
              font-bold uppercase
              tracking-[1.8px]
              text-[#e9c349]
            "
          >
            Strategic Real Estate
          </div>

          {/* Heading */}
          <h1
            className="
              font-display
              text-[28px] xs:text-[32px] sm:text-[44px] md:text-[56px]
              font-bold
              leading-[1.15]
              tracking-[-0.02em]
              text-[#f1eee7]
              drop-shadow-[0_0_12px_rgba(245,239,220,0.15)]
            "
          >
            Real Yields in Colombo’s
            <br className="hidden xs:inline" />

            <span className="text-[#e9c349]">
              Prime Coastal Growth Corridor
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto mt-4 sm:mt-6
              max-w-[650px]
              text-[14px] sm:text-[16px] md:text-[17px]
              leading-[1.6] sm:leading-[1.7]
              text-[#d5d8df]
              px-2
            "
          >
            Discover unparalleled investment opportunities in Sri Lanka&apos;s
            most sought-after coastal developments, designed for astute global
            investors.
          </p>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

            {/* ROI Calculator */}
            <Link
              to="/investment-calculator"
              className="
                inline-flex h-11
                items-center justify-center gap-2
                rounded-xl
                bg-[#e9c349]
                px-7
                text-xs
                font-bold uppercase
                tracking-[1.5px]
                text-[#3c2f00]
                hover:bg-[#ffd659]
                shadow-[0_4px_20px_rgba(233,195,73,0.35)]
                transition-all
              "
            >
              <i className="fa-solid fa-calculator"></i>
              Open ROI Calculator
            </Link>

            {/* Prospectus */}
            <Link
              to="/brochure"
              className="
                inline-flex h-11
                items-center justify-center gap-2
                rounded-xl
                border border-[rgba(233,195,73,0.3)]
                bg-[rgba(20,24,33,0.7)]
                px-6
                text-xs
                font-bold uppercase
                tracking-[1.5px]
                text-[#e0e2ec]
                hover:border-[#e9c349]
                hover:text-[#e9c349]
                transition-all
              "
            >
              <i className="fa-solid fa-download text-[#e9c349]"></i>
              Download Prospectus
            </Link>

          </div>
        </div>
      </section>

      {/* KPI Grid Section */}
      <section className="bg-[#0f1218] px-4 sm:px-6 py-10 sm:py-16">
        <div className="mx-auto max-w-[1150px]">

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div
              className="
                rounded-xl
                border border-[#4a4225]
                bg-[#171b22]
                p-6 sm:p-8
                transition-all duration-300
                hover:border-[#e0b93f]
                hover:shadow-[0_0_12px_rgba(224,185,63,0.15)]
              "
            >
              <div
                className="
                  mb-6
                  flex h-11 w-11 sm:h-12 sm:w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#2a2924]
                "
              >
                <i className="fa-solid fa-arrow-trend-up text-lg sm:text-xl text-[#e0b93f]"></i>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#ece8df]">
                6.0%–7.0%
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                Net Projected Rental Yields
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                rounded-xl
                border border-[#4a4225]
                bg-[#171b22]
                p-6 sm:p-8
                transition-all duration-300
                hover:border-[#e0b93f]
                hover:shadow-[0_0_12px_rgba(224,185,63,0.15)]
              "
            >
              <div
                className="
                  mb-6
                  flex h-11 w-11 sm:h-12 sm:w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#2a2924]
                "
              >
                <i className="fa-solid fa-file-contract text-lg sm:text-xl text-[#e0b93f]"></i>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#ece8df]">
                LKR 35k–42.5k
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                Competitive Entry / Sq.Ft
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                rounded-xl
                border border-[#4a4225]
                bg-[#171b22]
                p-6 sm:p-8
                transition-all duration-300
                hover:border-[#e0b93f]
                hover:shadow-[0_0_12px_rgba(224,185,63,0.15)]
              "
            >
              <div
                className="
                  mb-6
                  flex h-11 w-11 sm:h-12 sm:w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#2a2924]
                "
              >
                <i className="fa-solid fa-map-location-dot text-lg sm:text-xl text-[#e0b93f]"></i>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#ece8df]">
                Prime Access
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                Marine Drive Coastal Corridor
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
                rounded-xl
                border border-[#4a4225]
                bg-[#171b22]
                p-6 sm:p-8
                transition-all duration-300
                hover:border-[#e0b93f]
                hover:shadow-[0_0_12px_rgba(224,185,63,0.15)]
              "
            >
              <div
                className="
                  mb-6
                  flex h-11 w-11 sm:h-12 sm:w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#2a2924]
                "
              >
                <i className="fa-solid fa-chart-pie text-lg sm:text-xl text-[#e0b93f]"></i>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#ece8df]">
                18%–20%
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 text-[#b5b8bf]">
                Capital Appreciation Target
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Diaspora Investor Concierge */}
      <section className="bg-[#0f1218] px-4 sm:px-6 py-12 sm:py-16 pb-20 sm:pb-28">

        <div
          className="
            mx-auto w-full max-w-[1150px]
            rounded-2xl
            border border-[#4a4225]
            bg-[#171b22]
            p-6 sm:p-10 md:p-12
            transition-all duration-300
            hover:border-[#e0b93f]
            hover:shadow-[0_0_20px_rgba(224,185,63,0.15)]
          "
        >

          {/* Header */}
          <div
            className="
              flex flex-col
              items-center
              text-center
              max-w-[760px]
              mx-auto
              pb-10
              border-b border-[#252a32]
            "
          >

            <h2
              className="
                font-display
                text-[30px] sm:text-[38px] md:text-[44px]
                font-bold
                leading-[1.15]
                tracking-[-0.5px]
                text-[#f0ede6]
              "
            >
              Diaspora Investor Concierge
            </h2>

            <p
              className="
                mt-4
                text-[14px] sm:text-[16px]
                leading-[1.6]
                text-[#c4c6cb]
              "
            >
              Tailored investment roadmaps for our international clientele
              across the UK, UAE, and Canada. We simplify cross-border real
              estate acquisition with compliant IIA banking procedures.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 w-full">

              <Link
                to="/contact?subject=diaspora-investment#contact"
                className="
                  inline-flex h-[46px]
                  items-center justify-center gap-2
                  rounded-xl
                  bg-[#e8c342]
                  px-8
                  text-[12px] sm:text-[13px]
                  font-bold
                  tracking-[0.5px]
                  text-[#151515]
                  transition-all duration-200
                  hover:bg-[#f0cf55]
                  shadow-[0_4px_15px_rgba(232,195,66,0.3)]
                  whitespace-nowrap
                "
              >
                <span>Book a Virtual Consultation</span>
                <span className="text-base leading-none">→</span>
              </Link>

              <Link
                to="/investment-calculator"
                className="
                  inline-flex h-[46px]
                  items-center justify-center gap-2
                  rounded-xl
                  border border-[rgba(233,195,73,0.35)]
                  bg-[rgba(20,24,33,0.8)]
                  px-7
                  text-[12px] sm:text-[13px]
                  font-bold
                  tracking-[0.5px]
                  text-[#e0e2ec]
                  hover:border-[#e9c349]
                  hover:text-[#e9c349]
                  transition-all
                "
              >
                Interactive Yield Calculator
              </Link>

            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-10 text-left">

            {/* Step 1 */}
            <div className="flex flex-col">

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-[rgba(233,195,73,0.4)]
                    bg-[rgba(233,195,73,0.12)]
                    font-mono
                    text-xs font-bold
                    text-[#e9c349]
                  "
                >
                  01
                </span>

                <div className="h-px flex-1 bg-[#252a32]" />

              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#eeeae2]">
                Unit Reservation
              </h3>

              <p className="mt-2 text-sm leading-[1.6] text-[#b5b8bf]">
                Secure your preferred premium residence with a streamlined
                digital reservation process and initial deposit.
              </p>

            </div>

            {/* Step 2 */}
            <div className="flex flex-col">

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-[rgba(233,195,73,0.4)]
                    bg-[rgba(233,195,73,0.12)]
                    font-mono
                    text-xs font-bold
                    text-[#e9c349]
                  "
                >
                  02
                </span>

                <div className="h-px flex-1 bg-[#252a32]" />

              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#eeeae2]">
                IIA Account Setup
              </h3>

              <p className="mt-2 text-sm leading-[1.6] text-[#b5b8bf]">
                Guided assistance in establishing an Inward Investment Account
                (IIA) for secure, compliant fund transfers.
              </p>

            </div>

            {/* Step 3 */}
            <div className="flex flex-col">

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-[rgba(233,195,73,0.4)]
                    bg-[rgba(233,195,73,0.12)]
                    font-mono
                    text-xs font-bold
                    text-[#e9c349]
                  "
                >
                  03
                </span>

                <div className="h-px flex-1 bg-[#252a32]" />

              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#eeeae2]">
                Legal & Execution
              </h3>

              <p className="mt-2 text-sm leading-[1.6] text-[#b5b8bf]">
                Finalize Sales & Purchase Agreements with our partnered
                top-tier legal counsel, ensuring full regulatory compliance.
              </p>

            </div>

          </div>
        </div>
      </section>

      </div>
    </>
  );
}

export default Investment;