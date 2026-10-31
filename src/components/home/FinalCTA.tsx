"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-graphite border-t border-off-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-obsidian to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-widest uppercase text-lime mb-6 reveal">
            Ready?
          </p>
          <h2 className="font-grotesk font-bold text-display tracking-tight leading-tight text-off-white reveal">
            Have something
            <br />
            worth building?
          </h2>
          <p className="mt-8 text-off-white/40 text-sm md:text-base leading-relaxed max-w-md reveal">
            Tell us about your project. We&apos;ll respond quickly and honestly
            about whether we&apos;re the right fit.
          </p>
          <div className="mt-10 reveal">
            <Link href="/contact" className="btn-primary text-sm py-4 px-8">
              Start a Project
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
