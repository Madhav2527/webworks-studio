"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function PartnerSection() {
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
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-6">
          <SectionLabel index="06" className="reveal">Partnerships</SectionLabel>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight leading-tight reveal">
            The Technical
            <br />
            Partner You
            <br />
            <span className="text-lime">Don&apos;t See.</span>
          </h2>

          <p className="mt-8 text-off-white/50 text-sm md:text-base leading-relaxed max-w-md reveal">
            Webworks Studio works behind the scenes with agencies, branding
            studios and freelance designers who need reliable development
            expertise without adding headcount.
          </p>

          <Link href="/partnerships" className="mt-10 btn-outline inline-flex reveal">
            Discuss a Partnership
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Right — partner types */}
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="space-y-px">
            {[
              "Marketing Agencies",
              "Branding Studios",
              "Freelance Designers",
              "Social Media Managers",
              "Creative Professionals",
            ].map((type, i) => (
              <div
                key={type}
                className={`flex items-center gap-4 py-4 border-b border-off-white/10 reveal`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-mono text-[10px] text-off-white/25 tabular-nums w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-grotesk font-medium text-lg text-off-white/70">
                  {type}
                </span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-lime/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
