import Link from "next/link";
import { ArrowUpRight, Check, Code, Layout, ShoppingBag, Handshake } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities — Digital Experiences & Engineering",
  description:
    "Explore our technical and design capabilities across Digital Experiences, Web Applications, Commerce Systems, and Development Partnerships.",
};

const capabilitiesData = [
  {
    id: "digital-experiences",
    number: "01",
    title: "Digital Experiences",
    tagline: "Purposeful digital spaces engineered for impact.",
    icon: Layout,
    description:
      "We design and build bespoke digital experiences that balance artful creative direction with disciplined performance. Every transition, typeface, and layout is constructed to elevate how discerning brands present themselves.",
    services: [
      { name: "Business Websites", desc: "Flagship websites for established organizations, studios, and pioneering brands." },
      { name: "Landing Pages", desc: "High-conversion product and launch pages built with singular focus and speed." },
      { name: "Website Redesigns", desc: "Complete architectural and visual transformations for legacy web properties." },
      { name: "Interactive Websites", desc: "Three-dimensional, motion-driven, and immersive narrative web experiences." },
    ],
    deliverables: ["Custom Next.js & React Architectures", "Sub-second LCP Performance", "Accessible Semantic Structures", "Creative Motion & Interaction Systems"],
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    tagline: "High-density software interfaces built for everyday utility.",
    icon: Code,
    description:
      "Modern web applications demand strict state management, accessible form systems, and resilient component architecture. We engineer web-based tools that handle high complexity without slowing down users.",
    services: [
      { name: "Custom Dashboards", desc: "Real-time telemetry, administrative control rooms, and data visualization tools." },
      { name: "Booking Systems", desc: "Streamlined reservation, calendar scheduling, and appointment flows." },
      { name: "Web-Based Tools", desc: "Internal software, calculators, configurators, and workflow automation apps." },
      { name: "Custom Interfaces", desc: "Tailored component design systems and bespoke user application interfaces." },
    ],
    deliverables: ["Full TypeScript Rigor", "Predictable Data Fetching & Caching", "Keyboard-Accessible Workflows", "Zero-Latency Input Feedback"],
  },
  {
    id: "commerce-systems",
    number: "03",
    title: "Commerce Systems",
    tagline: "Modern transactional platforms without the generic template feel.",
    icon: ShoppingBag,
    description:
      "E-commerce shouldn't feel like a commodity store. We craft tailor-made commerce experiences that seamlessly connect storytelling, product catalog exploration, and secure payment processing.",
    services: [
      { name: "E-Commerce Websites", desc: "Custom brand storefronts engineered for high average order values and distinct identity." },
      { name: "Product Catalogues", desc: "High-speed filtering, faceted search, and multi-attribute product display systems." },
      { name: "Shopping Experiences", desc: "Editorial lookbooks, interactive product customizers, and curated collections." },
      { name: "Checkout Integrations", desc: "Frictionless Stripe, payment gateway, and headless commerce integrations." },
    ],
    deliverables: ["Headless Commerce Architectures", "Optimized Core Web Vitals for SEO", "Fluid Cart & Drawer Interactions", "Secure PCI-Compliant Checkout Workflows"],
  },
  {
    id: "development-partnerships",
    number: "04",
    title: "Development Partnerships",
    tagline: "Reliable engineering behind top design agencies and studios.",
    icon: Handshake,
    description:
      "We partner behind the scenes with branding agencies, creative directors, and independent designers who require a dedicated technical implementation team that values pixel-fidelity as much as they do.",
    services: [
      { name: "White-Label Website Development", desc: "Flawless code execution delivered quietly under your agency's banner." },
      { name: "Agency Overflow Support", desc: "Immediate capacity expansion when client demand outpaces your in-house team." },
      { name: "Technical Implementation", desc: "Translating complex Figma or Penpot design files into bulletproof production code." },
      { name: "Ongoing Development Support", desc: "Retainer maintenance, continuous feature rollouts, and infrastructure monitoring." },
    ],
    deliverables: ["Transparent Git Handover", "NDA Protected Discretion", "Rigorous QA & Cross-Browser Audits", "Direct Slack / Asynchronous Comms"],
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="pt-24">
      {/* Page Header */}
      <div className="pt-16 pb-16 max-w-[1400px] mx-auto px-6 lg:px-10 border-b border-off-white/10">
        <SectionLabel>What We Do</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Capabilities
          </h1>
          <p className="text-off-white/50 text-sm max-w-sm leading-relaxed">
            Four specialized technical disciplines. Focused execution with no bloated offerings, generalist dilution, or cut corners.
          </p>
        </div>
      </div>

      {/* Capabilities List */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 space-y-24">
        {capabilitiesData.map((category) => {
          const Icon = category.icon;
          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 border border-off-white/10 bg-graphite/40 p-8 md:p-14"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Header info */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-lime">{category.number}</span>
                    <span className="h-px w-8 bg-lime/30" />
                    <Icon size={16} className="text-lime" />
                  </div>
                  <h2 className="font-grotesk font-bold text-4xl md:text-5xl tracking-tight text-off-white">
                    {category.title}
                  </h2>
                  <p className="font-grotesk font-medium text-lg text-lime/90 leading-snug">
                    {category.tagline}
                  </p>
                  <p className="text-off-white/50 text-sm leading-relaxed">
                    {category.description}
                  </p>

                  <div className="pt-6 border-t border-off-white/10">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-4">Core Standards</p>
                    <ul className="space-y-2.5">
                      {category.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 font-mono text-xs text-off-white/70">
                          <Check size={12} className="text-lime flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specific Sub-Services */}
                <div className="lg:col-span-7 space-y-4">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/30 mb-2">Scope of Services</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.services.map((svc) => (
                      <div
                        key={svc.name}
                        className="p-6 bg-obsidian border border-off-white/10 hover:border-lime/30 transition-colors"
                      >
                        <h3 className="font-grotesk font-bold text-lg text-off-white mb-2">
                          {svc.name}
                        </h3>
                        <p className="font-inter text-xs text-off-white/45 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime hover:text-off-white transition-colors"
                    >
                      Enquire about {category.title} <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Conversion Bar */}
      <div className="bg-graphite border-t border-off-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel>Collaborate</SectionLabel>
            <h3 className="font-grotesk font-bold text-3xl text-off-white mt-2">Need a custom technical scope?</h3>
            <p className="text-sm text-off-white/45 mt-1">We assemble project-tailored architectures based on exact requirements.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
