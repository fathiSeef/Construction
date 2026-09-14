import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

const faqData = {
  "title-deeds": {
    heading: "Title Deeds & Legal Framework",
    items: [
      {
        q: "Are the title deeds freehold or leasehold?",
        a: "All properties developed by A&Y Consolidated are strictly Freehold. Upon completion of the project and full settlement of dues, individual freehold title deeds (Condominium Plan) are executed and transferred directly to the buyer's name, registered at the relevant Land Registry.",
        note: "We provide full legal assistance during the execution of the Deed of Transfer.",
      },
      {
        q: "When is the deed transferred to my name?",
        a: "Deeds are transferred once the property is complete and full payment, including all applicable duties, has been settled and verified by our legal team.",
      },
      {
        q: "What type of title deed will I receive?",
        a: "Buyers receive an individual freehold Condominium Plan deed for their unit, subject to applicable laws and the terms of the sale agreement.",
      },
      {
        q: "Is the title deed registered in the buyer's name?",
        a: "Yes. Once executed, the deed is registered in the buyer's name at the relevant Land Registry.",
      },
      {
        q: "Are there any additional legal or registration charges?",
        a: "Certain statutory and registration charges may apply depending on the transaction. Our legal team will guide the buyer through the applicable process and associated costs.",
      },
      {
        q: "How long does the title transfer process take?",
        a: "Timelines vary depending on documentation and statutory processing at the Land Registry. Our team will keep buyers informed at each stage, subject to applicable laws and the terms of the sale agreement.",
      },
      {
        q: "Will I receive the original title documents?",
        a: "Buyers receive the original registered title deed once the transfer process is complete and verified by our legal team.",
      },
      {
        q: "Who handles the legal documentation and registration?",
        a: "Our in-house legal team coordinates documentation and registration on the buyer's behalf, and can work alongside the buyer's own legal counsel where preferred.",
      },
      {
        q: "Can the property be transferred or sold after receiving the title deed?",
        a: "Once the title deed is registered in the buyer's name, resale or transfer is possible, subject to applicable laws and the terms of the sale agreement.",
      },
    ],
  },

  "building-approvals": {
    heading: "Building Approvals",
    items: [
      {
        q: "Are all necessary building approvals obtained for the project?",
        a: "Required approvals are obtained according to the applicable regulations for the project before the relevant stage of construction proceeds.",
      },
      {
        q: "Which authorities are involved in approving the development?",
        a: "Approvals are sought from the relevant local and national regulatory authorities applicable to the project's location and scope. Our team can provide project-specific details on request.",
      },
      {
        q: "Does the property comply with applicable building regulations?",
        a: "The development is designed and constructed to comply with applicable building regulations for its location and use.",
      },
      {
        q: "Will buyers receive documentation related to building approvals?",
        a: "Relevant approval documentation can be made available to buyers on request, subject to applicable laws and the terms of the sale agreement.",
      },
      {
        q: "What approvals are required before construction begins?",
        a: "Preliminary planning and construction approvals are required before groundwork begins, in line with the applicable regulations for the project.",
      },
      {
        q: "Are construction plans approved before development starts?",
        a: "Yes. Construction plans go through the applicable regulatory approval process prior to the relevant phase of development commencing.",
      },
      {
        q: "What happens if there are changes to the approved building plan?",
        a: "Any material changes to an approved plan would be handled in line with applicable regulations, which may require re-submission or additional approval. Contact our team for project-specific details.",
      },
      {
        q: "Who handles the approval process?",
        a: "Our project and legal teams coordinate the approval process with the relevant authorities on behalf of the development.",
      },
    ],
  },

  utilities: {
    heading: "Utilities (Generator/Water)",
    items: [
      {
        q: "Is a backup generator provided?",
        a: "A backup generator is provided for the development. Utility arrangements may vary by project — please contact our team for project-specific details.",
      },
      {
        q: "How does the generator system operate?",
        a: "The generator is designed to support essential common-area and unit power needs during an outage. Exact operating details are project-specific — please contact our team for confirmation.",
      },
      {
        q: "What areas of the property are covered by the backup generator?",
        a: "Generator coverage is defined per project. Please contact our team for the specific coverage applicable to this development.",
      },
      {
        q: "Is a water supply available at the property?",
        a: "Yes, a water supply is provided to the development in line with applicable utility connections for the area.",
      },
      {
        q: "Is there an overhead or underground water storage system?",
        a: "Water storage arrangements are project-dependent. Please contact our team for project-specific details.",
      },
      {
        q: "What happens to the water supply during a power outage?",
        a: "Water supply continuity during an outage depends on the project's storage and pumping setup. Please contact our team for project-specific details.",
      },
      {
        q: "Who is responsible for utility maintenance?",
        a: "Common-area utility maintenance is typically coordinated by the development's management, with details set out in the applicable sale or management agreement.",
      },
      {
        q: "Are electricity and water charges included in the purchase price?",
        a: "Individual unit utility consumption is generally billed separately from the purchase price. Please contact our team for project-specific details.",
      },
      {
        q: "Are there separate monthly maintenance or utility charges?",
        a: "Maintenance and utility charges may apply and vary by project. Please contact our team for the specific figures applicable to this development.",
      },
      {
        q: "How are common-area utilities managed?",
        a: "Common-area utilities are managed by the development's appointed management arrangement, with costs typically shared among residents according to the applicable agreement.",
      },
    ],
  },

  "diaspora-purchases": {
    heading: "Diaspora Purchases",
    items: [
      {
        q: "Can Sri Lankans living overseas purchase a property?",
        a: "Yes. Overseas buyers can purchase a property with us. Eligibility and documentation requirements may depend on the buyer's status and applicable Sri Lankan regulations — our team can guide you through the process.",
      },
      {
        q: "Can I complete the purchase while living abroad?",
        a: "Yes, much of the process can typically be completed remotely. Our team can guide you through what is required for your specific circumstances.",
      },
      {
        q: "Can someone in Sri Lanka purchase the property on my behalf?",
        a: "This may be possible depending on the applicable legal arrangement. Our team can guide you through the process, including any authorization documentation required.",
      },
      {
        q: "Can payments be made from overseas?",
        a: "Yes. Overseas payments are handled in line with applicable Sri Lankan banking and currency regulations — our team can guide you through the process.",
      },
      {
        q: "What documents are required for a diaspora buyer?",
        a: "Documentation requirements may depend on the buyer's residency and citizenship status. Our team can provide a checklist relevant to your situation.",
      },
      {
        q: "Do I need to travel to Sri Lanka to complete the purchase?",
        a: "Travel is not always necessary, as parts of the process can often be handled remotely or through an authorized representative. Our team can advise based on your specific circumstances.",
      },
      {
        q: "Can the legal documentation be handled remotely?",
        a: "Much of the legal documentation can be coordinated remotely with our legal team, subject to applicable laws and notarization requirements where relevant.",
      },
      {
        q: "How does the title deed transfer work for a buyer living overseas?",
        a: "The transfer process follows the same legal framework as for resident buyers, with additional coordination for remote signing or authorization where required. Our team can guide you through the process.",
      },
      {
        q: "Can I authorize a representative through a Power of Attorney?",
        a: "This may be possible depending on the applicable legal requirements. Our team can guide you through the Power of Attorney process and documentation.",
      },
    ],
  },

  "payment-milestones": {
    heading: "Payment Milestones",
    items: [
      {
        q: "What is the payment structure for purchasing a property?",
        a: "Payments are generally structured according to agreed milestones in the sale agreement. The exact schedule depends on the project and unit selected.",
      },
      {
        q: "Is an initial booking payment required?",
        a: "A booking payment may be required to reserve a selected unit. The amount and conditions are specified in the applicable sale documentation.",
      },
      {
        q: "When are the remaining payments due?",
        a: "Remaining payments are due according to the milestone schedule agreed in the sale agreement.",
      },
      {
        q: "Are payment milestones linked to construction progress?",
        a: "Payment milestones may be linked to agreed stages of construction or other contractual milestones. The applicable schedule will be provided before purchase.",
      },
      {
        q: "Can I make payments in instalments?",
        a: "Instalment arrangements may be available depending on the project and agreed terms. Please contact our sales team for the current options.",
      },
      {
        q: "Are there penalties for late payments?",
        a: "Any applicable late-payment charges or consequences are set out in the sale agreement.",
      },
      {
        q: "Can I settle the outstanding balance early?",
        a: "Early settlement may be possible subject to the terms of the sale agreement. Please contact our team for project-specific details.",
      },
      {
        q: "Are payments refundable if I cancel my purchase?",
        a: "Refund and cancellation conditions depend on the terms of the sale agreement.",
      },
      {
        q: "What payment methods are accepted?",
        a: "Accepted payment methods may vary by project and buyer circumstances. Our team will provide the available options and banking details.",
      },
      {
        q: "Will I receive payment receipts?",
        a: "Yes. Appropriate payment acknowledgements or receipts are provided for payments received.",
      },
    ],
  },

  "bank-loans": {
    heading: "Bank Loans",
    items: [
      {
        q: "Can I obtain a bank loan to purchase a property?",
        a: "Yes. Buyers may explore financing through eligible banks or financial institutions, subject to the lender's approval criteria.",
      },
      {
        q: "Which banks provide financing for the property?",
        a: "Financing options depend on the project and the buyer's eligibility. Our team can advise on available banking arrangements.",
      },
      {
        q: "Does A&Y Consolidated assist with bank loan applications?",
        a: "Our team can assist buyers by providing relevant property and project documentation required for financing applications.",
      },
      {
        q: "What documents are required for a bank loan?",
        a: "Banks typically require identification, income and financial documents, property documentation, and other information based on their lending requirements.",
      },
      {
        q: "Can overseas buyers obtain a bank loan in Sri Lanka?",
        a: "Eligibility for financing by overseas buyers depends on the bank's policies and applicable Sri Lankan regulations. Our team can guide you on the available options.",
      },
      {
        q: "How long does bank loan approval take?",
        a: "Loan approval timelines vary by bank, applicant profile, documentation, and property-related due diligence.",
      },
      {
        q: "Can I reserve a unit while waiting for loan approval?",
        a: "Reservation arrangements may be available subject to the project's terms and the applicable booking conditions. Please discuss your circumstances with our sales team.",
      },
      {
        q: "What happens if my loan application is rejected?",
        a: "If financing is not approved, the applicable booking and payment terms in the sale agreement will determine the available options.",
      },
      {
        q: "Can I use a combination of savings and a bank loan?",
        a: "Yes. Buyers may use personal funds together with approved financing, subject to the payment schedule and lender requirements.",
      },
      {
        q: "Are there additional bank charges or fees?",
        a: "Banks may charge processing, valuation, legal, insurance, or other fees. These are determined by the relevant financial institution.",
      },
    ],
  },
};

const categoryOrder = [
  "title-deeds",
  "building-approvals",
  "utilities",
  "diaspora-purchases",
  "payment-milestones",
  "bank-loans",
];

const categoryIcons = {
  "title-deeds": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M4 21h16M6 21V9l6-5 6 5v12M10 21v-6h4v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  "building-approvals": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  utilities: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  "diaspora-purchases": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
        strokeLinecap="round"
      />
    </svg>
  ),

  "payment-milestones": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" strokeLinecap="round" />
    </svg>
  ),

  "bank-loans": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M12 3l9 5H3l9-5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function Faq() {
  const [currentCategory, setCurrentCategory] = useState("title-deeds");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (faqData[hash]) {
        setCurrentCategory(hash);
        setSearchTerm("");
        setOpenIndex(0);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const changeCategory = (categoryId) => {
    if (!faqData[categoryId]) return;

    setCurrentCategory(categoryId);
    setSearchTerm("");
    setOpenIndex(0);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${categoryId}`
    );
  };

  const data = faqData[currentCategory];

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return data.items;
    }

    return data.items.filter((item) => {
      return (
        item.q.toLowerCase().includes(normalizedSearch) ||
        item.a.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [data, searchTerm]);

  useEffect(() => {
    if (filteredItems.length === 0) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(0);
    }
  }, [currentCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>FAQ - A&Y Consolidated</title>

        <meta
          name="description"
          content="Frequently Asked Questions regarding title deeds, building approvals, utilities, diaspora purchases, payment milestones and bank loans at A&Y Consolidated."
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="min-h-screen bg-[#10131a] text-[#e0e2ec] antialiased">
        {/* HERO */}
        <section className="mx-auto max-w-[1280px] px-5 pt-28 pb-10 text-center md:px-16 md:pt-36">
          <h1 className="mx-auto max-w-3xl font-display text-[36px] font-semibold leading-[1.2] text-[#e0e2ec] md:text-[64px] md:font-bold md:leading-[1.1]">
            Due Diligence &amp; Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#c6c6cb] md:text-lg">
            Transparency and meticulous engineering form the core of A&Y
            Consolidated. Explore comprehensive answers regarding
            documentation, structural integrity, and financial processes.
          </p>

          {/* SEARCH */}
          <div className="mx-auto mt-10 max-w-xl">
            <div className="flex items-center gap-3 rounded border border-[#45474b] bg-[#0b0e15] px-5 py-4 transition-colors focus-within:border-[rgba(212,175,55,0.6)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#909095"
                strokeWidth="1.8"
                className="shrink-0"
              >
                <circle cx="11" cy="11" r="7" />
                <path
                  d="M21 21l-4.35-4.35"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Type a keyword…"
                className="w-full bg-transparent text-sm text-[#e0e2ec] outline-none placeholder:text-[#c6c6cb]/60 md:text-base"
              />
            </div>
          </div>
        </section>

        {/* MAIN */}
        <section className="mx-auto max-w-[1280px] px-5 pt-16 pb-24 md:px-16 md:pt-20 md:pb-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
            {/* CATEGORIES */}
            <aside>
              <div className="rounded-lg border border-[#45474b] bg-[#0b0e15]/40 p-6 lg:sticky lg:top-24">
                <h2 className="mb-5 font-display text-xl font-semibold md:text-2xl">
                  Categories
                </h2>

                <nav
                  id="categoryNav"
                  className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible"
                  aria-label="FAQ categories"
                >
                  {categoryOrder.map((categoryId) => {
                    const category = faqData[categoryId];
                    const isActive = currentCategory === categoryId;

                    return (
                      <button
                        key={categoryId}
                        type="button"
                        onClick={() => changeCategory(categoryId)}
                        className={`flex w-auto cursor-pointer shrink-0 items-center justify-between gap-3 rounded-full border-b-2 px-4 py-2.5 text-left text-sm transition-all lg:w-full lg:rounded-md lg:border-b-0 lg:border-l-2 lg:px-4 lg:py-3 ${
                          isActive
                            ? "border-[#e9c349] bg-[rgba(233,195,73,0.1)] font-semibold text-[#e9c349] lg:border-l-[#e9c349]"
                            : "border-transparent bg-transparent text-[#c6c6cb] hover:bg-[rgba(233,195,73,0.06)] hover:text-[#e0e2ec]"
                        }`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span>
                          {category.heading.replace(
                            " & Legal Framework",
                            ""
                          )}
                        </span>

                        <svg
                          className={`shrink-0 transition-all ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0"
                          }`}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* FAQ CONTENT */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 font-display text-xl font-semibold text-[#e9c349] md:text-2xl">
                <span className="shrink-0">
                  {categoryIcons[currentCategory]}
                </span>

                <span>{data.heading}</span>
              </h2>

              <div
                id="faqListWrap"
                className="flex flex-col gap-4"
              >
                {filteredItems.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={`${currentCategory}-${index}`}
                      className={`group overflow-hidden rounded-lg border bg-[rgba(28,31,38,0.6)] backdrop-blur-[12px] transition-all duration-200 ${
                        isOpen
                          ? "border-[rgba(212,175,55,0.6)] shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                          : "border-[rgba(212,175,55,0.25)]"
                      }`}
                    >
                      {/* QUESTION BUTTON */}
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? -1 : index)
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-base font-semibold text-[#e0e2ec] md:text-lg">
                          {item.q}
                        </span>

                        <span className="shrink-0 text-[#e9c349]">
                          {isOpen ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                d="M6 6l12 12M18 6L6 18"
                                strokeLinecap="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                d="M12 5v14M5 12h14"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                        </span>
                      </button>

                      {/* ANSWER */}
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-sm leading-relaxed text-[#c6c6cb] md:text-base">
                            {item.a}
                          </p>

                          {item.note && (
                            <div className="mt-5 flex items-center gap-3 rounded border border-[#45474b] bg-[#0b0e15] px-5 py-4">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#e9c349"
                                strokeWidth="1.8"
                                className="shrink-0"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                />

                                <path
                                  d="M8.5 12.5l2.5 2.5 5-5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <span className="text-sm text-[#e0e2ec]">
                                {item.note}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {filteredItems.length === 0 && (
                  <p className="mt-4 text-sm text-[#c6c6cb]">
                    No questions match your search in this category. Try
                    another keyword or category.
                  </p>
                )}
              </div>

              {/* CONSULTATION CTA */}
              <div className="relative mt-10 overflow-hidden rounded-lg border border-[#45474b]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#191c22] via-[#1d2027] to-[#0b0e15]" />

                <svg
                  className="absolute right-6 top-6 opacity-20 md:right-10 md:top-10"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c4c6cf"
                  strokeWidth="1.2"
                >
                  <path d="M12 3a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0v-2a5 5 0 0 1 5-5z" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>

                <div className="relative max-w-lg px-6 py-10 md:px-12 md:py-14">
                  <h3 className="font-display text-2xl font-semibold leading-[1.3] text-[#e0e2ec] md:text-[32px]">
                    Require specialized clarification?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#c6c6cb] md:text-base">
                    Complex queries require precise answers. Schedule a
                    consultation directly with our Head of Legal &amp;
                    Engineering to review documentation and structural
                    specifications.
                  </p>

                  <a
                    href="/contact#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#e9c349] px-6 py-3 text-[#e9c349] transition-colors hover:bg-[rgba(233,195,73,0.1)]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                      />

                      <path
                        d="M3 10h18M8 3v4M16 3v4"
                        strokeLinecap="round"
                      />
                    </svg>

                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Faq;