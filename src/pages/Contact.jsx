import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const WHATSAPP_URL = "https://wa.me/94771234567?text=Hello%20A%26Y%20Consolidated,%20I%20would%20like%20to%20schedule%20a%20VIP%20consultation.";

function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", residency: "resident", unit: "suite-a",
    date: "", consultationType: "in-person",
  });
  const [preselectedUnit, setPreselectedUnit] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan") || params.get("unit");
    const unit = plan === "suite-a" || plan === "unit-a" ? "suite-a" : plan === "suite-b" || plan === "unit-b" ? "suite-b" : "";
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const date = tomorrow.toISOString().split("T")[0];
    setForm((p) => ({ ...p, unit: unit || p.unit, date }));
    if (unit) setPreselectedUnit(unit);
  }, []);

  const update = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.whatsapp.trim()) {
      alert("Please complete all required fields.");
      return;
    }
    setSubmitting(true);
    const url = `/booking-confirmation.html?name=${encodeURIComponent(form.name.trim())}&email=${encodeURIComponent(form.email.trim())}&plan=${encodeURIComponent(form.unit)}&date=${encodeURIComponent(form.date)}`;
    window.setTimeout(() => { window.location.href = url; }, 600);
  };

  return (
    <>
      <Helmet>
        <title>Contact &amp; Site Visit | A&amp;Y Consolidated</title>
        <meta name="description" content="Schedule a VIP consultation or visit our showroom to experience the blueprint of modern luxury living." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 pb-16 pt-[100px] md:gap-8 md:px-16 md:pt-[130px]">
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <h1 className="font-display mb-4 text-[36px] font-semibold leading-[1.2] md:text-[48px] md:leading-[1.2]">Connect With Us</h1>
          <p className="text-base leading-relaxed text-[#c6c6cb] md:text-lg">Schedule a VIP consultation or visit our showroom to experience the blueprint of modern luxury living.</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="glass-panel relative h-72 w-full overflow-hidden rounded-xl border border-[rgba(233,195,73,0.35)] bg-[#0b0e15] shadow-2xl md:h-80">
              <iframe title="A&Y Dehiwala Project Location Map" src="https://maps.google.com/maps?q=Marine+Drive,+Dehiwala,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed" className="h-full w-full border-0 brightness-95 contrast-[1.05]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              <div className="glass-panel pointer-events-none absolute left-3.5 top-3.5 flex items-center gap-2 rounded-xl border border-[rgba(233,195,73,0.35)] px-3 py-1.5">
                <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[1.2px] text-[#e0e2ec]">Live Corridor Map</span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0b0e15] to-transparent" />
            </div>

            <div className="glass-panel flex flex-col gap-6 rounded-xl p-8">
              <div>
                <h3 className="font-display mb-2 text-xl font-semibold text-[#e9c349] md:text-2xl">Showroom &amp; HQ</h3>
                <p className="text-sm leading-relaxed text-[#c6c6cb] md:text-base">Level 12, Prime Tower<br />Marine Drive, Colombo 03<br />Sri Lanka</p>
              </div>
              <div className="h-px w-full bg-[rgba(69,71,75,0.3)]" />
              <div>
                <h3 className="font-display mb-2 text-xl font-semibold text-[#e9c349] md:text-2xl">Direct Inquiry</h3>
                <p className="mb-4 text-sm text-[#c6c6cb] md:text-base">Available Mon–Sat, 9am – 6pm (IST)</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-[1.8px] text-white transition hover:brightness-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.29-1.39a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.18 8.18 0 0 1-1.25-4.4c0-4.53 3.7-8.22 8.24-8.22 4.53 0 8.22 3.69 8.22 8.22 0 4.54-3.69 8.28-8.23 8.28zm4.52-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.15.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01a.9.9 0 0 0-.65.31c-.23.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28z" /></svg>
                  WhatsApp Connect
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-8 md:p-12">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold md:text-[32px]">VIP Consultation</h2>
              <span className="rounded-full border border-[rgba(233,195,73,0.3)] bg-[rgba(233,195,73,0.1)] px-3 py-1 text-[10px] font-mono font-bold text-[#e9c349]">Priority Queue</span>
            </div>
            <p className="mb-6 text-sm text-[#c6c6cb]">Secure your private briefing with our executive architectural specialists.</p>

            {preselectedUnit && (
              <div className="mb-6 flex items-center gap-2 rounded-xl border border-[rgba(233,195,73,0.35)] bg-[#191c24] p-3 text-xs text-[#e9c349]">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#e9c349]" />
                <span>{preselectedUnit === "suite-a" ? "Reservation request pre-selected: Grand Penthouse Residence (Suite A - 1,425 Sq.Ft)" : "Reservation request pre-selected: Executive Luxury Residence (Suite B - 1,273 Sq.Ft)"}</span>
              </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">Full Name *</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={update} placeholder="e.g. Dr. A. Wickramasinghe" className="w-full rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] p-4 text-[#e0e2ec] outline-none transition focus:border-[#e9c349]" />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="email" className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">Email Address *</label><input id="email" name="email" type="email" required value={form.email} onChange={update} placeholder="you@example.com" className="w-full rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] p-4 text-[#e0e2ec] outline-none transition focus:border-[#e9c349]" /></div>
                <div className="flex flex-col gap-2"><label htmlFor="whatsapp" className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">WhatsApp Number *</label><input id="whatsapp" name="whatsapp" type="tel" required value={form.whatsapp} onChange={update} placeholder="+94 77 123 4567" className="w-full rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] p-4 text-[#e0e2ec] outline-none transition focus:border-[#e9c349]" /></div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="residency" className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">Residency Status</label><select id="residency" name="residency" value={form.residency} onChange={update} className="w-full appearance-none rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] p-4 text-[#e0e2ec] outline-none focus:border-[#e9c349]"><option value="resident">Local Resident</option><option value="diaspora">Sri Lankan Diaspora (Expatriate)</option><option value="international">International Foreign Investor</option></select></div>
                <div className="flex flex-col gap-2"><label htmlFor="unit" className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">Preferred Residence</label><select id="unit" name="unit" value={form.unit} onChange={update} className="w-full appearance-none rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] p-4 text-[#e0e2ec] outline-none focus:border-[#e9c349]"><option value="suite-a">Grand Penthouse Residence — Unit A (1,425 Sq.Ft)</option><option value="suite-b">Executive Luxury Residence — Unit B (1,273 Sq.Ft)</option><option value="both">Both Layouts / Flexible Consideration</option></select></div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="date" className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">Preferred Date</label><input id="date" name="date" type="date" min={form.date} value={form.date} onChange={update} className="w-full rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#141821] p-4 text-[#e0e2ec] outline-none focus:border-[#e9c349]" /></div>
                <div className="flex flex-col gap-2"><span className="text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb]">Consultation Type</span><div className="flex h-[58px] items-center rounded-lg border border-[rgba(233,195,73,0.2)] bg-[#0b0e15] p-1"><label className="flex-1 cursor-pointer"><input type="radio" name="consultationType" value="in-person" checked={form.consultationType === "in-person"} onChange={update} className="peer sr-only" /><div className="rounded-md py-2.5 text-center text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb] transition-all peer-checked:bg-[#e9c349] peer-checked:text-[#3c2f00]">In-Person</div></label><label className="flex-1 cursor-pointer"><input type="radio" name="consultationType" value="virtual" checked={form.consultationType === "virtual"} onChange={update} className="peer sr-only" /><div className="rounded-md py-2.5 text-center text-xs font-bold uppercase tracking-[1.8px] text-[#c6c6cb] transition-all peer-checked:bg-[#e9c349] peer-checked:text-[#3c2f00]">Virtual</div></label></div></div>
              </div>

              <button type="submit" disabled={submitting} className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#e9c349] py-4 text-xs font-bold uppercase tracking-[1.8px] text-[#3c2f00] shadow-[0_4px_25px_rgba(233,195,73,0.35)] transition-all hover:bg-[#ffd659] disabled:cursor-not-allowed disabled:opacity-80">
                <span>{submitting ? "Securing VIP Reservation..." : "Confirm My Consultation"}</span>
                {!submitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
