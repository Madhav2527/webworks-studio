import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velocity — Automotive Digital Experience",
  description:
    "An independent concept project exploring premium automotive digital experience design. Vehicle inventory, search, enquiry flows.",
};

export default function VelocityPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="relative bg-[#0A0A0A] min-h-[70vh] flex items-end overflow-hidden">
        <svg
          viewBox="0 0 1400 700"
          fill="none"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect x="0" y="0" width="1400" height="700" fill="#080806" />
          <line x1="0" y1="350" x2="1400" y2="350" stroke="#C8A96E" strokeWidth="0.5" opacity="0.15" />
          <line x1="700" y1="0" x2="700" y2="700" stroke="#C8A96E" strokeWidth="0.5" opacity="0.1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1={100 + i * 240} y1="700" x2="700" y2="300" stroke="#C8A96E" strokeWidth="0.3" opacity="0.08" />
          ))}
          <path
            d="M250 420 L330 320 L530 295 L870 295 L1070 320 L1150 420 Z"
            stroke="#C8A96E"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
          <ellipse cx="410" cy="426" rx="58" ry="28" stroke="#C8A96E" strokeWidth="1.5" fill="none" opacity="0.4" />
          <ellipse cx="990" cy="426" rx="58" ry="28" stroke="#C8A96E" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M480 295 L530 260 L870 260 L920 295" stroke="#C8A96E" strokeWidth="0.75" fill="none" opacity="0.3" />
          <rect x="1060" y="358" width="40" height="14" fill="#C8A96E" opacity="0.4" />
          <rect x="300" y="358" width="40" height="14" fill="#C8A96E" opacity="0.4" />
          <text x="60" y="80" fill="#C8A96E" fontSize="11" fontFamily="monospace" letterSpacing="5" opacity="0.4">VELOCITY — AUTOMOTIVE DIGITAL EXPERIENCE</text>
          <text x="60" y="100" fill="#C8A96E" fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.25">INDEPENDENT CONCEPT PROJECT — 2024</text>
          <rect x="0" y="0" width="20" height="1" fill="#C8A96E" opacity="0.4" />
          <rect x="0" y="0" width="1" height="20" fill="#C8A96E" opacity="0.4" />
          <rect x="1380" y="0" width="20" height="1" fill="#C8A96E" opacity="0.4" />
          <rect x="1399" y="0" width="1" height="20" fill="#C8A96E" opacity="0.4" />
          <rect x="0" y="699" width="20" height="1" fill="#C8A96E" opacity="0.4" />
          <rect x="0" y="680" width="1" height="20" fill="#C8A96E" opacity="0.4" />
          <rect x="1380" y="699" width="20" height="1" fill="#C8A96E" opacity="0.4" />
          <rect x="1399" y="680" width="1" height="20" fill="#C8A96E" opacity="0.4" />
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
                <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/40">Digital Experience</span>
                <span className="font-mono text-[10px] bg-[#C8A96E]/10 text-[#C8A96E] px-2 py-1 border border-[#C8A96E]/20">Concept Project</span>
              </div>
              <h1 className="font-grotesk font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight" style={{ color: "#C8A96E" }}>
                VELOCITY
              </h1>
            </div>
            <p className="text-off-white/50 text-sm md:text-base max-w-sm leading-relaxed">
              A premium automotive digital experience built for vehicle
              discovery, specification and enquiry.
            </p>
          </div>
        </div>
      </div>

      {/* Concept notice */}
      <div className="bg-graphite border-b border-off-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
          <p className="font-mono text-[11px] text-off-white/40">
            <span className="text-lime mr-3">Note:</span>
            This is an independent concept project created by Webworks Studio. It is not associated with any real automotive brand, client or business.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl mt-4 tracking-tight">The Concept</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5">
            <p className="text-off-white/70 text-base leading-relaxed">
              Velocity explores how a premium automotive dealership or brand might present its vehicles
              digitally — with the same level of craft and intentionality applied to the physical experience.
            </p>
            <p className="text-off-white/50 text-sm leading-relaxed">
              The project examines vehicle inventory presentation, detail pages, search and filtering
              systems, and enquiry flows — all designed to communicate performance, precision and exclusivity.
            </p>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-off-white/10">
          {[
            { label: "Project Type", value: "Digital Experience" },
            { label: "Category", value: "Automotive" },
            { label: "Year", value: "2024" },
            { label: "Status", value: "Concept" },
          ].map((spec) => (
            <div key={spec.label} className="bg-obsidian p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-2">{spec.label}</p>
              <p className="font-grotesk font-bold text-lg" style={{ color: "#C8A96E" }}>{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Inventory Section */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Interface</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl mt-4 mb-12 tracking-tight">Vehicle Inventory</h2>

          {/* Search bar */}
          <div className="border border-off-white/15 bg-obsidian px-5 py-4 flex flex-wrap items-center gap-4 mb-8">
            <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/30">Filter</span>
            <div className="h-4 w-px bg-off-white/15 hidden sm:block" />
            <div className="flex flex-wrap gap-2">
              {["All Models", "Gran Turismo", "Sports Coupe", "Executive Sedan", "Electric"].map((filter, i) => (
                <button
                  key={filter}
                  className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 transition-colors ${
                    i === 0
                      ? "bg-[#C8A96E] text-obsidian"
                      : "text-off-white/40 hover:text-off-white border border-off-white/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Inventory grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-off-white/10">
            {[
              { name: "Model S-12", type: "Gran Turismo", power: "520 hp", price: "From £ 78,500" },
              { name: "Sport R-8", type: "Sports Coupe", power: "680 hp", price: "From £ 112,000" },
              { name: "Meridian X", type: "Executive Sedan", power: "420 hp", price: "From £ 65,000" },
            ].map((vehicle) => (
              <div key={vehicle.name} className="bg-obsidian p-6 group cursor-pointer hover:bg-graphite transition-colors duration-300">
                <div className="aspect-[4/3] bg-[#0A0A0A] border border-off-white/8 mb-6 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 280 180" fill="none" className="w-full h-full" aria-hidden="true">
                    <path d="M40 120 L70 85 L110 75 L170 75 L210 85 L240 120 Z" stroke="#C8A96E" strokeWidth="1" fill="none" opacity="0.6" />
                    <ellipse cx="90" cy="123" rx="22" ry="11" stroke="#C8A96E" strokeWidth="1" fill="none" opacity="0.5" />
                    <ellipse cx="190" cy="123" rx="22" ry="11" stroke="#C8A96E" strokeWidth="1" fill="none" opacity="0.5" />
                    <path d="M105 75 L125 58 L155 58 L175 75" stroke="#C8A96E" strokeWidth="0.75" fill="none" opacity="0.4" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-off-white/30 mb-1">{vehicle.type}</p>
                  <h3 className="font-grotesk font-bold text-xl tracking-tight group-hover:text-[#C8A96E] transition-colors">{vehicle.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-off-white/40">{vehicle.power}</span>
                    <span className="font-mono text-[11px] text-[#C8A96E]">{vehicle.price}</span>
                  </div>
                  <div className="mt-4 border-t border-off-white/10 pt-4">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 group-hover:text-[#C8A96E] transition-colors inline-flex items-center gap-2">
                      View Details <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Detail View */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionLabel>Detail View</SectionLabel>
        <h2 className="font-grotesk font-bold text-3xl mt-4 mb-12 tracking-tight">Vehicle Detail Page</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-off-white/10">
          <div className="lg:col-span-7 bg-[#0A0A0A] min-h-[360px] flex items-center justify-center p-8">
            <svg viewBox="0 0 560 320" fill="none" className="w-full h-full" aria-hidden="true">
              <rect x="0" y="0" width="560" height="320" fill="#080806" />
              <path d="M80 210 L130 150 L220 130 L340 130 L430 150 L480 210 Z" stroke="#C8A96E" strokeWidth="2" fill="none" opacity="0.7" />
              <ellipse cx="170" cy="214" rx="40" ry="20" stroke="#C8A96E" strokeWidth="2" fill="none" opacity="0.6" />
              <ellipse cx="390" cy="214" rx="40" ry="20" stroke="#C8A96E" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M205 130 L240 105 L320 105 L355 130" stroke="#C8A96E" strokeWidth="1" fill="none" opacity="0.4" />
              <rect x="424" y="174" width="36" height="12" fill="#C8A96E" opacity="0.5" />
              <rect x="100" y="174" width="36" height="12" fill="#C8A96E" opacity="0.5" />
              <text x="30" y="30" fill="#C8A96E" fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.4">MODEL S-12 — GRAN TURISMO</text>
            </svg>
          </div>

          <div className="lg:col-span-5 bg-obsidian p-8 lg:p-10">
            <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-2">Gran Turismo</p>
            <h3 className="font-grotesk font-bold text-3xl tracking-tight mb-2" style={{ color: "#C8A96E" }}>Model S-12</h3>
            <p className="font-grotesk font-bold text-2xl text-off-white/80 mb-8">From £78,500</p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Engine", value: "3.0L Twin-Turbo V6" },
                { label: "Output", value: "520 hp / 620 Nm" },
                { label: "0–60 mph", value: "3.8 seconds" },
                { label: "Top Speed", value: "198 mph" },
                { label: "Transmission", value: "8-speed DCT" },
              ].map((spec) => (
                <div key={spec.label} className="flex items-center justify-between py-3 border-b border-off-white/10">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/30">{spec.label}</span>
                  <span className="font-mono text-[11px] text-off-white/70">{spec.value}</span>
                </div>
              ))}
            </div>

            <button className="w-full font-mono text-[11px] tracking-widest uppercase py-4 px-6 font-semibold" style={{ backgroundColor: "#C8A96E", color: "#0A0A0A" }}>
              Enquire About This Vehicle
            </button>
          </div>
        </div>
      </div>

      {/* Enquiry Interaction section */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionLabel>Enquiry Flow</SectionLabel>
              <h2 className="font-grotesk font-bold text-3xl mt-4 tracking-tight">Request a Viewing</h2>
              <p className="mt-4 text-off-white/40 text-sm leading-relaxed">
                The enquiry interaction is designed to be direct and low-friction — collecting essential information without unnecessary steps.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-4">
                {[
                  { label: "Your Name", placeholder: "Alexander Wright", type: "text" },
                  { label: "Email Address", placeholder: "alexander@example.com", type: "email" },
                  { label: "Vehicle of Interest", placeholder: "Model S-12 Gran Turismo", type: "text" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      defaultValue={field.placeholder}
                      readOnly
                      className="w-full bg-obsidian border border-off-white/15 px-4 py-3 font-mono text-sm text-off-white/60 focus:outline-none focus:border-[#C8A96E] cursor-default"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-off-white/40 block mb-2">Message</label>
                  <textarea
                    readOnly
                    rows={3}
                    className="w-full bg-obsidian border border-off-white/15 px-4 py-3 font-mono text-sm text-off-white/60 resize-none focus:outline-none cursor-default"
                    defaultValue="I would like to arrange an appointment and private demonstration."
                  />
                </div>
                <div className="pt-2">
                  <div className="font-mono text-[11px] tracking-widest uppercase py-4 px-6 text-center cursor-default font-semibold" style={{ backgroundColor: "#C8A96E", color: "#0A0A0A" }}>
                    Send Enquiry
                  </div>
                  <p className="mt-3 text-center font-mono text-[10px] text-off-white/25">
                    Concept interface mockup — no actual transmission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical implementation */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionLabel>Architecture</SectionLabel>
        <h2 className="font-grotesk font-bold text-3xl mt-4 mb-10 tracking-tight">Technical Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-off-white/10 bg-graphite/40">
            <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">01 / Dynamic Inventory</h4>
            <p className="text-sm text-off-white/50 leading-relaxed">
              Fast, client-side filtering system with URL state synchronization allowing bookmarkable search configurations.
            </p>
          </div>
          <div className="p-6 border border-off-white/10 bg-graphite/40">
            <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">02 / Specification Matrix</h4>
            <p className="text-sm text-off-white/50 leading-relaxed">
              Structured technical specifications with high contrast data hierarchy designed for readability on high-DPI displays.
            </p>
          </div>
          <div className="p-6 border border-off-white/10 bg-graphite/40">
            <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">03 / Conversational Forms</h4>
            <p className="text-sm text-off-white/50 leading-relaxed">
              Context-aware vehicle inquiry modal pre-populating configuration metadata to reduce friction.
            </p>
          </div>
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-off-white/10">
        <Link
          href="/work/noir"
          className="block max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex items-center justify-between group hover:bg-graphite transition-colors duration-300"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-2">Next Project</p>
            <h3 className="font-grotesk font-bold text-3xl group-hover:text-lime transition-colors">NOIR</h3>
          </div>
          <ArrowUpRight size={24} className="text-off-white/30 group-hover:text-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </Link>
      </div>
    </main>
  );
}
