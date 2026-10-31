"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StudioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-graphite border-y border-off-white/10 py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5 reveal">
            <SectionLabel index="05">Studio</SectionLabel>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight leading-tight">
              Built on
              <br />
              <span className="text-lime">Purpose,</span>
              <br />
              Not Volume.
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:pt-16">
            <div className="space-y-6 reveal">
              <p className="text-off-white/70 text-base md:text-lg leading-relaxed">
                Webworks Studio is an independent technology and development
                studio focused on thoughtful design, reliable engineering and
                useful digital experiences.
              </p>
              <p className="text-off-white/50 text-sm leading-relaxed">
                We work directly with brands, founders and creative
                professionals who need a technical partner that takes the work
                seriously — without the overhead of a large agency.
              </p>
              <p className="text-off-white/50 text-sm leading-relaxed">
                Every project is approached with the same care: understand the
                problem properly, design something purposeful, build it
                correctly and deliver it reliably.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-off-white/10 flex flex-wrap gap-6 reveal">
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25 mb-1">
                  Approach
                </p>
                <p className="font-grotesk font-bold text-sm">Independent studio</p>
              </div>
              <div className="w-px bg-off-white/10 self-stretch" />
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25 mb-1">
                  Focus
                </p>
                <p className="font-grotesk font-bold text-sm">Quality over quantity</p>
              </div>
              <div className="w-px bg-off-white/10 self-stretch" />
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25 mb-1">
                  Stack
                </p>
                <p className="font-grotesk font-bold text-sm">Modern & reliable</p>
              </div>
            </div>

            <Link
              href="/studio"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-off-white/40 hover:text-lime transition-colors group reveal"
            >
              Learn more about the studio
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
