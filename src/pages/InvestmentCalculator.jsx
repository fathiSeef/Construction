import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const exchangeRates = {
  USD: 1,
  LKR: 310,
  GBP: 0.78,
  AUD: 1.52,
};

const currencySymbols = {
  USD: "$",
  LKR: "Rs. ",
  GBP: "£",
  AUD: "A$",
};

function InvestmentCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState("A");
  const [price, setPrice] = useState(180000);
  const [rent, setRent] = useState(1350);
  const [appreciation, setAppreciation] = useState(11.5);
  const [years, setYears] = useState(5);

  const formatMoney = (amount) => {
    const converted = amount * exchangeRates[currency];
    return currencySymbols[currency] + Math.round(converted).toLocaleString();
  };

  const results = useMemo(() => {
    const annualRent = rent * 12;
    const rentalYield = (annualRent / price) * 100;
    const cumulativeRent = annualRent * years;

    // Compound appreciation: P * (1 + r)^t
    const futureVal = price * Math.pow(1 + appreciation / 100, years);
    const capitalGain = futureVal - price;

    const totalGain = cumulativeRent + capitalGain;
    const totalRoi = (totalGain / price) * 100;

    return {
      rentalYield,
      cumulativeRent,
      futureVal,
      capitalGain,
      totalGain,
      totalRoi,
    };
  }, [price, rent, appreciation, years]);

  const handleCurrency = (curr) => {
    setCurrency(curr);
  };

  const handleUnit = (tier) => {
    setUnit(tier);

    if (tier === "A") {
      setPrice(180000);
      setRent(1350);
    } else {
      setPrice(155000);
      setRent(1150);
    }
  };

  const currencies = [
    ["USD", "USD ($)"],
    ["LKR", "LKR (Rs.)"],
    ["GBP", "GBP (£)"],
    ["AUD", "AUD (A$)"],
  ];

  return (
    <>
      <Helmet>
        <title>Investment & Rental Yield Calculator | A&Y CONSOLIDATED</title>
        <meta
          name="description"
          content="Calculate your projected capital appreciation, net rental yields, and cash-on-cash returns for A&Y Consolidated Luxury Residences."
        />
      </Helmet>

      {/* Page-specific top header — default Navbar is intentionally not used */}
      <header className="sticky top-0 z-50 border-b border-[rgba(233,195,73,0.25)] bg-[rgba(16,19,26,0.92)] px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <Link
            to="/investment#investment"
            id="back-btn"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.8)] px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#e9c349] shadow-[0_2px_15px_rgba(233,195,73,0.15)] transition-all duration-200 hover:bg-[#e9c349] hover:text-[#10131a]"
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
            <span>Back to Investment</span>
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

      {/* Calculator */}
      <main className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.8)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-[#e9c349]">
            Financial Modeling &amp; Yield Estimator
          </div>

          <h1 className="font-display text-3xl font-bold leading-tight text-[#e0e2ec] sm:text-5xl">
            Residential Investment{" "}
            <span className="gold-gradient-text">ROI Calculator</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[750px] text-sm leading-relaxed text-[#c6c6cb] sm:text-base">
            Model your expected returns, coastal rental yield curves, and
            capital appreciation over a 1 to 10-year holding window for our
            boutique Dehiwala residences.
          </p>

          <div className="mt-6 inline-flex items-center rounded-xl border border-[rgba(233,195,73,0.3)] bg-[#141821] p-1 text-xs">
            {currencies.map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => handleCurrency(value)}
                className={
                  currency === value
                    ? "rounded-lg bg-[#e9c349] px-3.5 py-1.5 font-bold text-[#3c2f00] transition-all"
                    : "rounded-lg px-3.5 py-1.5 font-bold text-[#c6c6cb] transition-all hover:text-white"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Inputs */}
          <div className="glass-panel space-y-6 rounded-2xl p-6 sm:p-8 lg:col-span-6">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#e9c349]">
                Select Apartment Unit Tier
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleUnit("A")}
                  id="btn-unit-a"
                  className={`rounded-xl border p-3 text-left transition-all ${
                    unit === "A"
                      ? "border-[#e9c349] bg-[rgba(233,195,73,0.15)]"
                      : "border-[rgba(233,195,73,0.2)] bg-[#131620] hover:border-[#e9c349]"
                  }`}
                >
                  <div className="text-xs font-bold text-white">
                    Suite Type A
                  </div>
                  <div className="text-[11px] text-[#e9c349]">
                    1,425 Sq.Ft (Penthouse)
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleUnit("B")}
                  id="btn-unit-b"
                  className={`rounded-xl border p-3 text-left transition-all ${
                    unit === "B"
                      ? "border-[#e9c349] bg-[rgba(233,195,73,0.15)]"
                      : "border-[rgba(233,195,73,0.2)] bg-[#131620] hover:border-[#e9c349]"
                  }`}
                >
                  <div className="text-xs font-bold text-white">
                    Suite Type B
                  </div>
                  <div className="text-[11px] text-[#8e9099]">
                    1,273 Sq.Ft (Executive)
                  </div>
                </button>
              </div>
            </div>

            {/* Purchase Price */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs">
                <label className="font-bold text-[#e0e2ec]">
                  Initial Purchase Price
                </label>
                <span
                  id="label-price"
                  className="font-mono text-sm font-bold text-[#e9c349]"
                >
                  {formatMoney(price)}
                </span>
              </div>

              <input
                type="range"
                id="input-price"
                min="120000"
                max="300000"
                step="5000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="h-2 w-full cursor-pointer rounded-lg bg-[#262a36]"
              />

              <div className="mt-1 flex justify-between text-[10px] font-mono text-[#8e9099]">
                <span>Min: $120,000</span>
                <span>Max: $300,000</span>
              </div>
            </div>

            {/* Rent */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs">
                <label className="font-bold text-[#e0e2ec]">
                  Expected Monthly Rent
                </label>
                <span
                  id="label-rent"
                  className="font-mono text-sm font-bold text-[#e9c349]"
                >
                  {formatMoney(rent)} / mo
                </span>
              </div>

              <input
                type="range"
                id="input-rent"
                min="800"
                max="3000"
                step="50"
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                className="h-2 w-full cursor-pointer rounded-lg bg-[#262a36]"
              />

              <div className="mt-1 flex justify-between text-[10px] font-mono text-[#8e9099]">
                <span>$800</span>
                <span>Average Luxury Dehiwala: $1,350</span>
                <span>$3,000</span>
              </div>
            </div>

            {/* Appreciation */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs">
                <label className="font-bold text-[#e0e2ec]">
                  Annual Capital Appreciation (%)
                </label>
                <span
                  id="label-appreciation"
                  className="font-mono text-sm font-bold text-[#e9c349]"
                >
                  {appreciation.toFixed(1)}% p.a.
                </span>
              </div>

              <input
                type="range"
                id="input-appreciation"
                min="5"
                max="20"
                step="0.5"
                value={appreciation}
                onChange={(e) => setAppreciation(Number(e.target.value))}
                className="h-2 w-full cursor-pointer rounded-lg bg-[#262a36]"
              />

              <div className="mt-1 flex justify-between text-[10px] font-mono text-[#8e9099]">
                <span>Conservative: 5%</span>
                <span>Colombo Coastal Average: 11.5%</span>
                <span>High: 20%</span>
              </div>
            </div>

            {/* Holding Period */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs">
                <label className="font-bold text-[#e0e2ec]">
                  Holding Period (Years)
                </label>
                <span
                  id="label-years"
                  className="font-mono text-sm font-bold text-[#e9c349]"
                >
                  {years} {years === 1 ? "Year" : "Years"}
                </span>
              </div>

              <input
                type="range"
                id="input-years"
                min="1"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="h-2 w-full cursor-pointer rounded-lg bg-[#262a36]"
              />

              <div className="mt-1 flex justify-between text-[10px] font-mono text-[#8e9099]">
                <span>1 Year</span>
                <span>5 Years (Standard)</span>
                <span>10 Years</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-panel rounded-2xl border border-[rgba(233,195,73,0.35)] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.6)] sm:p-8 lg:col-span-6">
            <div className="mb-6 flex items-center justify-between border-b border-[rgba(233,195,73,0.2)] pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8e9099]">
                Pro Forma Financial Summary
              </span>
              <span className="rounded-md bg-emerald-500/20 px-2.5 py-1 text-[11px] font-bold text-emerald-300">
                Audited Projection
              </span>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl border border-[rgba(233,195,73,0.25)] bg-[#11141c] p-5 text-center">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#8e9099]">
                  Total Estimated Return on Capital
                </div>
                <div
                  id="res-roi"
                  className="gold-gradient-text mt-1 font-display text-4xl font-bold sm:text-5xl"
                >
                  +{results.totalRoi.toFixed(1)}%
                </div>
                <div
                  id="res-total-gain"
                  className="mt-1 text-xs font-mono text-emerald-400"
                >
                  Total Net Gain: +{formatMoney(results.totalGain)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                  <span className="block text-[11px] text-[#8e9099]">
                    Gross Rental Yield (p.a.)
                  </span>
                  <span
                    id="res-yield"
                    className="font-mono text-lg font-bold text-[#e9c349]"
                  >
                    {results.rentalYield.toFixed(1)}%
                  </span>
                </div>

                <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                  <span className="block text-[11px] text-[#8e9099]">
                    Cumulative Rental Income
                  </span>
                  <span
                    id="res-cumulative-rent"
                    className="font-mono text-lg font-bold text-white"
                  >
                    {formatMoney(results.cumulativeRent)}
                  </span>
                </div>

                <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                  <span className="block text-[11px] text-[#8e9099]">
                    Projected Asset Value
                  </span>
                  <span
                    id="res-future-val"
                    className="font-mono text-lg font-bold text-white"
                  >
                    {formatMoney(results.futureVal)}
                  </span>
                </div>

                <div className="rounded-xl border border-[rgba(233,195,73,0.15)] bg-[#131620] p-4">
                  <span className="block text-[11px] text-[#8e9099]">
                    Capital Appreciation
                  </span>
                  <span
                    id="res-capital-gain"
                    className="font-mono text-lg font-bold text-emerald-400"
                  >
                    +{formatMoney(results.capitalGain)}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-[11px] leading-relaxed text-emerald-300">
                <strong className="font-semibold text-white">
                  Foreign Investor Exemption:
                </strong>{" "}
                Sri Lankan Inward Investment Accounts (IIA) allow 100% tax-free
                capital repatriation, rental income transfer in convertible
                currency, and zero stamp duty on first-hand freehold deed
                transfers.
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?subject=investment-consultation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e9c349] px-6 py-3.5 text-xs font-bold uppercase tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_25px_rgba(233,195,73,0.3)] transition-all hover:bg-[#ffd659]"
                >
                  <span>Secure Investment Consultation</span> &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/investment#investment"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(233,195,73,0.4)] bg-[rgba(29,32,39,0.8)] px-8 py-3.5 text-xs font-bold uppercase tracking-[1.8px] text-[#e9c349] shadow-[0_4px_20px_rgba(233,195,73,0.2)] transition-all hover:bg-[#e9c349] hover:text-[#10131a]"
          >
            <span>&larr; Back to Investment Overview</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default InvestmentCalculator;
