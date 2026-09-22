import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  { no: "01", title: "Vehicle Imports", text: "Coordinating vehicle sourcing and import requirements with a focus on documentation, communication and delivery planning.", image: "/assets/images/vehicle-imports.jpg" },
  { no: "02", title: "Automotive Spare Parts", text: "Sourcing selected vehicle parts and components for business and distribution requirements.", image: "/assets/images/auto-spare-parts.jpg" },
  { no: "03", title: "Export Coordination", text: "Connecting suitable products with overseas requirements through sourcing, documentation and logistics coordination.", image: "/assets/images/export-logistics.jpg" },
  { no: "04", title: "Supplier Sourcing", text: "Identifying products and suppliers according to the required specification, quantity and market.", image: "/assets/images/supplier-sourcing.jpg" },
  { no: "05", title: "Documentation Support", text: "Organising the commercial and shipping information needed to move a transaction through its required stages.", image: "/assets/images/import-documentation.jpg" },
  { no: "06", title: "Logistics Coordination", text: "Keeping sourcing, shipping and delivery communication connected from origin to destination.", image: "/assets/images/logistics-coordination.jpg" },
];
const fallback = "/assets/images/hero-building.jpg";
function SafeImage({ src, alt, className = "" }) { return <img src={src} alt={alt} className={className} onError={(e) => { e.currentTarget.src = fallback; }} loading="lazy" />; }

export default function ImportExport() {
  return <>
    <Helmet><title>Import & Export | A&Y CONSOLIDATED</title><meta name="description" content="Import, export, sourcing and logistics coordination services by A&Y Consolidated." /></Helmet>
    <div className="min-h-screen bg-[#10131a] text-[#e0e2ec]">
      {/* Editorial hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[4px] text-[#e9c349]">Import · Export · Sourcing</p><h1 className="mt-5 font-display text-5xl leading-[.98] text-white md:text-7xl">From Source<br /><span className="gold-gradient-text">to Market.</span></h1><p className="mt-7 max-w-xl leading-8 text-white/55">A structured approach to product sourcing, import coordination and export support — connecting commercial requirements with suppliers and logistics.</p><Link to="/contact#contact" className="mt-8 inline-flex rounded-xl bg-[#e9c349] px-7 py-3 text-xs font-bold uppercase tracking-[2px] text-[#3c2f00]">Discuss a Requirement</Link></div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10"><SafeImage src="/assets/images/import-export-hero.jpg" alt="International trade and logistics" className="h-[480px] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#10131a]/90 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">{[["VEHICLES","Import"],["PARTS","Supply"],["PRODUCTS","Export"]].map(([a,b]) => <div key={a} className="rounded-2xl border border-white/10 bg-[#10131a]/75 p-4 backdrop-blur-md"><div className="text-[10px] tracking-[2px] text-[#e9c349]">{a}</div><div className="mt-1 text-xs text-white/60">{b}</div></div>)}</div></div>
        </div>
      </section>

      {/* Service gallery */}
      <section className="bg-[#0c0f15] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">What we handle</p><h2 className="mt-3 font-display text-4xl text-white md:text-5xl">Trade services <span className="gold-gradient-text">with a visual workflow.</span></h2></div><p className="max-w-md text-sm leading-7 text-white/45">Each service is presented as a clear stage of the commercial journey, from finding the right product to coordinating its movement.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(s => <article key={s.no} className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-white/10"><SafeImage src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-[#080b10]/45 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7"><span className="text-xs font-bold tracking-[2px] text-[#e9c349]">{s.no}</span><h3 className="mt-2 font-display text-2xl text-white">{s.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/55">{s.text}</p></div></article>)}</div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">How it moves</p><h2 className="mt-4 font-display text-4xl text-white md:text-5xl">One connected <span className="gold-gradient-text">trade journey.</span></h2></div><div className="divide-y divide-white/10">{[["01","Source","Understand the requirement and identify suitable products or suppliers."],["02","Verify","Review specifications, commercial information and required documentation."],["03","Coordinate","Connect sourcing, shipping and transaction communication."],["04","Deliver","Coordinate the final movement and handover to the required destination."]].map(([n,t,d]) => <div key={n} className="grid gap-4 py-7 sm:grid-cols-[60px_180px_1fr]"><div className="text-sm text-[#e9c349]">{n}</div><h3 className="font-display text-2xl text-white">{t}</h3><p className="text-sm leading-7 text-white/45">{d}</p></div>)}</div></div></section>

      <section className="mx-6 mb-20 overflow-hidden rounded-[32px] border border-[#e9c349]/20 lg:mx-auto lg:max-w-7xl"><div className="grid lg:grid-cols-[1fr_1.1fr]"><div className="p-8 lg:p-14"><p className="text-xs font-bold uppercase tracking-[3px] text-[#e9c349]">Business enquiries</p><h2 className="mt-4 font-display text-4xl text-white md:text-5xl">Tell us what you need to source or move.</h2><Link to="/contact#contact" className="mt-8 inline-flex rounded-xl bg-[#e9c349] px-8 py-3 text-xs font-bold uppercase tracking-[2px] text-[#3c2f00]">Contact Trade Team</Link></div><SafeImage src="/assets/images/export-logistics.jpg" alt="Export logistics" className="min-h-[320px] w-full object-cover" /></div></section>
    </div>
  </>;
}
