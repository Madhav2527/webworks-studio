"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  {
    id: "01",
    title: "Digital Experiences",
    description:
      "Business websites, landing pages, redesigns and interactive digital experiences engineered for performance and impact.",
    href: "/capabilities#digital-experiences",
  },
  {
    id: "02",
    title: "Web Applications",
    description:
      "Custom dashboards, booking systems, web-based tools and bespoke interfaces designed for usability and scale.",
    href: "/capabilities#web-applications",
  },
  {
    id: "03",
    title: "Commerce Systems",
    description:
      "E-commerce websites, product catalogues, custom shopping experiences and checkout integrations.",
    href: "/capabilities#commerce-systems",
  },
  {
    id: "04",
    title: "Development Partnerships",
    description:
      "White-label development, agency overflow support and ongoing technical partnership for studios and agencies.",
    href: "/capabilities#development-partnerships",
  },
];

export default function CapabilitiesSection() {
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div className="reveal">
            <SectionLabel index="03">What We Do</SectionLabel>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight">
              Capabilities
            </h2>
          </div>
          <p className="text-off-white/40 text-sm max-w-xs leading-relaxed reveal">
            Four areas of focused expertise. No generalist padding, no
            inflated service lists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-off-white/10">
          {capabilities.map((cap, i) => (
            <Link
              key={cap.id}
              href={cap.href}
              className={`bg-graphite p-8 md:p-10 group hover:bg-obsidian transition-colors duration-300 reveal ${
                i === 0 ? "" : i === 1 ? "delay-100" : i === 2 ? "delay-200" : "delay-300"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/25">
                  {cap.id}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-off-white/20 group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <h3 className="font-grotesk font-bold text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-lime transition-colors duration-300">
                {cap.title}
              </h3>
              <p className="text-off-white/40 text-sm leading-relaxed">{cap.description}</p>

              <div className="mt-8 h-px bg-off-white/10 group-hover:bg-lime/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/capabilities" className="btn-outline">
            Full Capabilities
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
