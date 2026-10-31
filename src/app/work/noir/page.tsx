import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOIR — Premium Hospitality Website",
  description:
    "An independent concept project exploring digital hospitality design. Atmosphere, tasting menu, culinary gallery, and reservation enquiry.",
};

export default function NoirPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="relative bg-[#0D0B08] min-h-[70vh] flex items-end overflow-hidden border-b border-off-white/10">
        <svg
          viewBox="0 0 1400 700"
          fill="none"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect x="0" y="0" width="1400" height="700" fill="#0D0B08" />
          <line x1="0" y1="350" x2="1400" y2="350" stroke="#C4A882" strokeWidth="0.5" opacity="0.1" />
          <line x1="700" y1="0" x2="700" y2="700" stroke="#C4A882" strokeWidth="0.5" opacity="0.08" />
          
          {/* Subtle architectural arches */}
          <path d="M400 600 C 400 300, 1000 300, 1000 600" stroke="#C4A882" strokeWidth="1" fill="none" opacity="0.25" />
          <path d="M480 600 C 480 360, 920 360, 920 600" stroke="#C4A882" strokeWidth="0.5" fill="none" opacity="0.15" />
          <line x1="700" y1="200" x2="700" y2="550" stroke="#C4A882" strokeWidth="0.5" opacity="0.2" />

          {/* Minimalist candlelight marks */}
          <circle cx="700" cy="280" r="3" fill="#C4A882" opacity="0.7" />
          <circle cx="550" cy="380" r="2" fill="#C4A882" opacity="0.5" />
          <circle cx="850" cy="380" r="2" fill="#C4A882" opacity="0.5" />

          {/* Labels */}
          <text x="60" y="80" fill="#C4A882" fontSize="11" fontFamily="monospace" letterSpacing="5" opacity="0.4">NOIR — CONTEMPORARY GASTRONOMY</text>
          <text x="60" y="100" fill="#C4A882" fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.25">HOSPITALITY CONCEPT DESIGN — 2024</text>

          <rect x="0" y="0" width="20" height="1" fill="#C4A882" opacity="0.3" />
          <rect x="0" y="0" width="1" height="20" fill="#C4A882" opacity="0.3" />
          <rect x="1380" y="0" width="20" height="1" fill="#C4A882" opacity="0.3" />
          <rect x="1399" y="0" width="1" height="20" fill="#C4A882" opacity="0.3" />
        </svg>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-14 w-full">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-off-white/40 hover:text-off-white transition-colors mb-10"
          >
            <ArrowLeft size={12} />
            Back to Work
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/40">Hospitality Website</span>
                <span className="font-mono text-[10px] bg-[#C4A882]/10 text-[#C4A882] px-2 py-1 border border-[#C4A882]/20">Concept Project</span>
              </div>
              <h1 className="font-grotesk font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight" style={{ color: "#C4A882" }}>
                NOIR
              </h1>
            </div>
            <p className="text-off-white/50 text-sm md:text-base max-w-sm leading-relaxed">
              An intimate digital experience for a progressive dining room — balancing sensory atmosphere with effortless reservations.
            </p>
          </div>
        </div>
      </div>

      {/* Concept Notice */}
      <div className="bg-graphite border-b border-off-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
          <p className="font-mono text-[11px] text-off-white/40">
            <span className="text-lime mr-3">Note:</span>
            This is an independent concept project created by Webworks Studio. NOIR is a fictional concept designed to showcase restaurant & hospitality interface capabilities.
          </p>
        </div>
      </div>

      {/* Overview & Restaurant Info */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Restaurant Vision</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl mt-4 tracking-tight">Cuisine & Atmosphere</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-off-white/70 text-base leading-relaxed">
              NOIR is conceived around Nordic precision and wood-fired gastronomy. The digital platform mirrors this restraint: generous dark negative space, tactile serif and grotesk typography, and quiet motion that mimics candlelight.
            </p>
            <p className="text-off-white/50 text-sm leading-relaxed">
              Instead of generic restaurant templates clogged with popups and pdf downloads, NOIR presents an interactive seasonal tasting menu, cellar curation, dining room spatial gallery, and an intuitive guest booking flow.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-off-white/10">
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-1">Location</p>
                <p className="font-grotesk font-medium text-sm text-off-white/80">Mayfair, London (Concept)</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-1">Capacity</p>
                <p className="font-grotesk font-medium text-sm text-off-white/80">36 Seats · Chef&apos;s Table</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-1">Service</p>
                <p className="font-grotesk font-medium text-sm text-off-white/80">Tasting Menu Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tasting Menu */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionLabel>Culinary Program</SectionLabel>
              <h2 className="font-grotesk font-bold text-3xl md:text-4xl mt-4 tracking-tight">Autumn Degustation Menu</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#C4A882]">Nine Courses — £145</span>
              <span className="h-4 w-px bg-off-white/15" />
              <span className="font-mono text-xs text-off-white/40">Wine Pairing — £95</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { course: "I", name: "Smoked Birch Broth", ingredients: "Fermented cep mushrooms, pine oil, toasted sourdough crisps" },
                { course: "II", name: "Orkney Scallop", ingredients: "Charred leek emulsion, preserved sea buckthorn, kelp crisps" },
                { course: "III", name: "Ember-Roasted Beetroot", ingredients: "Cultured goat curd, blackcurrant wood smoke, walnut ash" },
                { course: "IV", name: "Wild Turbot", ingredients: "Braised salsify, brown butter dashi, coastal succulents" },
                { course: "V", name: "Dry-Aged Venison Loin", ingredients: "Juniper glaze, smoked parsnip puree, fermented lingonberry" },
              ].map((item) => (
                <div key={item.course} className="p-6 bg-obsidian border border-off-white/10 group hover:border-[#C4A882]/40 transition-colors">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs text-[#C4A882]">{item.course}</span>
                    <h3 className="font-grotesk font-bold text-lg text-off-white group-hover:text-[#C4A882] transition-colors">{item.name}</h3>
                  </div>
                  <p className="font-inter text-xs text-off-white/40 leading-relaxed">{item.ingredients}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { course: "VI", name: "Raw Milk Cheese", ingredients: "Heather honey comb, fermented rye wafers, elderberry vinegar" },
                { course: "VII", name: "Sorrel & Wood Sorrel", ingredients: "Frozen granite, apple marigold, crisp sweet woodruff" },
                { course: "VIII", name: "Smoked Barley & Dark Cocoa", ingredients: "Roasted malt ice cream, smoked caramel, toasted birch syrup" },
                { course: "IX", name: "Mignardises", ingredients: "Pine cone jelly, sea salt caramel fudge, roasted dandelion tea" },
              ].map((item) => (
                <div key={item.course} className="p-6 bg-obsidian border border-off-white/10 group hover:border-[#C4A882]/40 transition-colors">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs text-[#C4A882]">{item.course}</span>
                    <h3 className="font-grotesk font-bold text-lg text-off-white group-hover:text-[#C4A882] transition-colors">{item.name}</h3>
                  </div>
                  <p className="font-inter text-xs text-off-white/40 leading-relaxed">{item.ingredients}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric Gallery Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionLabel>Spatial Environment</SectionLabel>
        <h2 className="font-grotesk font-bold text-3xl mt-4 mb-12 tracking-tight">The Space & Table</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "The Dining Room", desc: "Charred oak tables, blackened steel, acoustic wool drapery", tone: "bg-[#110E0A]" },
            { title: "The Hearth", desc: "Open kitchen fire pit burning seasoned birch and applewood", tone: "bg-[#17120C]" },
            { title: "The Cellar Room", desc: "Low-temperature subterranean reserve for natural low-intervention wines", tone: "bg-[#0E0B08]" },
          ].map((panel, idx) => (
            <div key={panel.title} className={`${panel.tone} border border-off-white/10 p-8 flex flex-col justify-between min-h-[300px]`}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-off-white/30">0{idx + 1} / AMBIENCE</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4A882" }} />
              </div>
              <div className="my-8 flex justify-center">
                {/* Abstract geometric illustration for each room */}
                <svg viewBox="0 0 160 120" fill="none" className="w-36 h-28 opacity-40">
                  <circle cx="80" cy="60" r="45" stroke="#C4A882" strokeWidth="0.75" strokeDasharray="3 3" />
                  <line x1="20" y1="60" x2="140" y2="60" stroke="#C4A882" strokeWidth="0.5" />
                  <line x1="80" y1="10" x2="80" y2="110" stroke="#C4A882" strokeWidth="0.5" />
                  <rect x="65" y="45" width="30" height="30" stroke="#C4A882" strokeWidth="1" transform="rotate(45 80 60)" />
                </svg>
              </div>
              <div>
                <h3 className="font-grotesk font-bold text-xl text-off-white mb-2">{panel.title}</h3>
                <p className="font-inter text-xs text-off-white/50 leading-relaxed">{panel.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Enquiry Workflow */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Table Reservations</SectionLabel>
              <h2 className="font-grotesk font-bold text-3xl mt-4 tracking-tight">Reservation Enquiry</h2>
              <p className="mt-4 text-off-white/40 text-sm leading-relaxed">
                Reservations release 30 days in advance at midnight. For private dining or dining room takeovers, our guest relations team prepares personalized arrangements.
              </p>
              <div className="mt-8 space-y-3 font-mono text-xs text-off-white/50">
                <p>• Lunch: Thursday — Sunday, 12:30</p>
                <p>• Dinner: Wednesday — Sunday, 18:30 & 20:30</p>
                <p>• Dietary requirements accommodated with 48h notice</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-obsidian border border-off-white/10 p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Guests</label>
                    <select disabled className="w-full bg-graphite border border-off-white/15 px-3 py-2.5 font-mono text-xs text-off-white/80 focus:outline-none">
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>Chef&apos;s Table (6-8)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Seating Date</label>
                    <input type="text" readOnly defaultValue="Friday, November 28" className="w-full bg-graphite border border-off-white/15 px-3 py-2 font-mono text-xs text-off-white/80 focus:outline-none" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Service Time</label>
                    <select disabled className="w-full bg-graphite border border-off-white/15 px-3 py-2.5 font-mono text-xs text-off-white/80 focus:outline-none">
                      <option>Dinner — 20:00</option>
                      <option>Dinner — 18:30</option>
                      <option>Lunch — 12:30</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Lead Guest Name</label>
                    <input type="text" readOnly defaultValue="Helena Vane" className="w-full bg-graphite border border-off-white/15 px-3 py-2 font-mono text-xs text-off-white/80 focus:outline-none" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Contact Email</label>
                    <input type="email" readOnly defaultValue="helena.vane@studio.uk" className="w-full bg-graphite border border-off-white/15 px-3 py-2 font-mono text-xs text-off-white/80 focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Special Notes & Allergens</label>
                  <textarea readOnly rows={2} defaultValue="Celebrating our 5th anniversary. One guest has a crustacean allergy." className="w-full bg-graphite border border-off-white/15 px-3 py-2 font-mono text-xs text-off-white/80 focus:outline-none resize-none" />
                </div>

                <button className="w-full py-3.5 font-mono text-xs tracking-widest uppercase font-semibold text-obsidian" style={{ backgroundColor: "#C4A882" }}>
                  Confirm Reservation Request
                </button>
                <p className="text-center font-mono text-[10px] text-off-white/30">
                  Concept demonstration flow — bookings are simulated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-off-white/10">
        <Link
          href="/work/nexus"
          className="block max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex items-center justify-between group hover:bg-graphite transition-colors duration-300"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-2">Next Project</p>
            <h3 className="font-grotesk font-bold text-3xl group-hover:text-lime transition-colors">NEXUS</h3>
          </div>
          <ArrowUpRight size={24} className="text-off-white/30 group-hover:text-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </Link>
      </div>
    </main>
  );
}
