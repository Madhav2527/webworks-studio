"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const stages = [
  {
    id: "01",
    title: "Discover",
    description:
      "We start by understanding your goals, audience and context. This shapes every decision that follows.",
  },
  {
    id: "02",
    title: "Design",
    description:
      "Architecture, visual language and interaction design are developed in close collaboration with agreed direction.",
  },
  {
    id: "03",
    title: "Develop",
    description:
      "Clean, performant code. Modern technology stack. Attention to every detail from component to deployment.",
  },
  {
    id: "04",
    title: "Deliver",
    description:
      "Thorough testing, clear handover documentation and ongoing support when needed.",
  },
];

export default function ProcessSection() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left label column */}
        <div className="lg:col-span-4 reveal">
          <SectionLabel index="04">How We Work</SectionLabel>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl mt-4 tracking-tight">
            The Process
          </h2>
          <p className="mt-6 text-off-white/40 text-sm leading-relaxed">
            A structured approach that removes ambiguity without removing
            flexibility. Every project follows the same rigorous path.
          </p>
        </div>

        {/* Stages */}
        <div className="lg:col-span-8">
          <div className="relative">
            <div className="absolute left-[19px] top-8 bottom-8 w-px bg-off-white/10 hidden sm:block" />

            <div className="space-y-0">
              {stages.map((stage, i) => (
                <div
                  key={stage.id}
                  className={`relative grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 border-b border-off-white/10 last:border-b-0 reveal ${
                    i === 0 ? "" : i === 1 ? "delay-100" : i === 2 ? "delay-200" : "delay-300"
                  }`}
                >
                  <div className="sm:col-span-1 flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                    <div className="relative z-10 w-10 h-10 border border-off-white/20 flex items-center justify-center bg-obsidian">
                      <span className="font-mono text-[10px] text-lime">
                        {stage.id}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-11 sm:pl-4">
                    <h3 className="font-grotesk font-bold text-2xl md:text-3xl tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-off-white/40 text-sm leading-relaxed max-w-lg">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
