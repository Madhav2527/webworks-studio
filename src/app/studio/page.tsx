import Link from "next/link";
import { ArrowUpRight, Terminal, Compass, Layers, ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio — Independent Technology & Development",
  description:
    "Webworks Studio is an independent technology and development studio focused on thoughtful design, reliable engineering, and useful digital experiences.",
};

export default function StudioPage() {
  return (
    <main className="pt-24">
      {/* Studio Header */}
      <div className="pt-16 pb-16 max-w-[1400px] mx-auto px-6 lg:px-10 border-b border-off-white/10">
        <SectionLabel>About The Studio</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Studio
          </h1>
          <p className="text-off-white/50 text-sm max-w-sm leading-relaxed">
            An independent technology and development studio. Focused on thoughtful design, reliable engineering, and useful digital experiences.
          </p>
        </div>
      </div>

      {/* Manifest & Philosophy */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-mono text-xs text-lime uppercase tracking-widest">Brand Positioning</p>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl tracking-tight leading-[1.05] text-off-white">
              ENGINEERED FOR WHAT&apos;S NEXT.
            </h2>
            <p className="font-grotesk text-2xl text-off-white/60">
              BUILD BEYOND.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-off-white/60 leading-relaxed font-inter text-base">
            <p className="text-off-white/80 text-lg leading-relaxed">
              Webworks Studio was established as an independent practice with a straightforward conviction: the digital web is filled with commoditized, generic templates that lack care, identity, and technical rigor.
            </p>
            <p>
              We operate deliberately without agency overhead, unnecessary hierarchy, or account managers buffering the conversation. When you work with Webworks Studio, you work directly with the developers and designers building your product.
            </p>
            <p>
              We don&apos;t pretend to be a global agency with dozens of offices, nor do we boast inflated vanity metrics. We are an agile, dedicated technical studio building high-performance websites, custom web applications, and digital experiences that perform reliably in the real world.
            </p>
          </div>
        </div>
      </div>

      {/* Studio Principles */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <SectionLabel>Core Disciplines</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl mt-3 text-off-white tracking-tight">
              Our Operating Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Terminal,
                number: "01",
                title: "Code as Craft",
                desc: "We write clean, strictly-typed TypeScript and modular CSS. No bloatware libraries, no mystery dependencies, and no compromises on maintainability.",
              },
              {
                icon: Compass,
                number: "02",
                title: "Thoughtful Design",
                desc: "Interfaces designed with typographic harmony, intentional negative space, and clear visual hierarchy. Every aesthetic choice serves a functional purpose.",
              },
              {
                icon: Layers,
                number: "03",
                title: "Reliable Performance",
                desc: "Speed is foundational. We prioritize Core Web Vitals, minimal client bundle sizes, instant interactions, and resilient multi-device responsiveness.",
              },
              {
                icon: ShieldCheck,
                number: "04",
                title: "Independent Honesty",
                desc: "We provide truthful technical guidance. If a simpler architecture solves your problem better, we will tell you directly rather than upselling complexity.",
              },
            ].map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.number} className="bg-obsidian border border-off-white/10 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-lime">{principle.number}</span>
                      <Icon size={16} className="text-off-white/40" />
                    </div>
                    <h3 className="font-grotesk font-bold text-xl text-off-white mb-3">
                      {principle.title}
                    </h3>
                    <p className="font-inter text-xs text-off-white/50 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Technical Tooling & Stack */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionLabel>Engineering Stack</SectionLabel>
        <h2 className="font-grotesk font-bold text-3xl md:text-4xl mt-3 mb-10 text-off-white tracking-tight">
          Tools Selected for Purpose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-off-white/10 p-6 bg-graphite/40 space-y-4">
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest">Frontend & Frameworks</h3>
            <ul className="space-y-2 font-mono text-xs text-off-white/70">
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>Next.js (App Router)</span>
                <span className="text-off-white/30">SSR / RSC</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>TypeScript</span>
                <span className="text-off-white/30">Strict Typing</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>Tailwind CSS</span>
                <span className="text-off-white/30">Utility Tokens</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>GSAP & WebGL</span>
                <span className="text-off-white/30">Controlled Motion</span>
              </li>
            </ul>
          </div>

          <div className="border border-off-white/10 p-6 bg-graphite/40 space-y-4">
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest">Backend & Data</h3>
            <ul className="space-y-2 font-mono text-xs text-off-white/70">
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>Node.js & Edge Runtimes</span>
                <span className="text-off-white/30">Serverless</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>PostgreSQL & Prisma</span>
                <span className="text-off-white/30">Relational</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>REST & GraphQL</span>
                <span className="text-off-white/30">API Layer</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Redis</span>
                <span className="text-off-white/30">State & Caching</span>
              </li>
            </ul>
          </div>

          <div className="border border-off-white/10 p-6 bg-graphite/40 space-y-4">
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest">Infrastructure & Deployment</h3>
            <ul className="space-y-2 font-mono text-xs text-off-white/70">
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>Vercel / Cloudflare Edge</span>
                <span className="text-off-white/30">Global CDN</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>GitHub Actions</span>
                <span className="text-off-white/30">Automated CI/CD</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-off-white/5">
                <span>Lighthouse / Web Vitals</span>
                <span className="text-off-white/30">Quality Gates</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Semantic HTML & ARIA</span>
                <span className="text-off-white/30">Accessibility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-graphite border-t border-off-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel>Collaborate</SectionLabel>
            <h3 className="font-grotesk font-bold text-3xl text-off-white mt-2">Ready to discuss your requirements?</h3>
            <p className="text-sm text-off-white/45 mt-1">Direct communication with the technical team from day one.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
