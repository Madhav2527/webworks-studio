"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data/projects";

const projectVisuals: Record<string, string> = {
  velocity: "bg-[#0A0A0A]",
  noir: "bg-[#0D0B08]",
  nexus: "bg-[#080B10]",
};

export default function SelectedWork() {
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
    <section ref={sectionRef} className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="flex items-end justify-between mb-16 reveal">
        <div>
          <SectionLabel index="02">Selected Work</SectionLabel>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight">
            Concept Projects
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-off-white/40 hover:text-lime transition-colors group"
        >
          View All
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="space-y-px">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className={`block group reveal border border-off-white/8 hover:border-off-white/20 transition-all duration-500 overflow-hidden ${
              i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[280px]">
              {/* Visual panel */}
              <div
                className={`md:col-span-5 ${projectVisuals[project.id]} relative overflow-hidden flex items-center justify-center min-h-[200px] md:min-h-0`}
              >
                <ProjectVisual projectId={project.id} accent={project.accentColor} />
              </div>

              {/* Content panel */}
              <div className="md:col-span-7 p-8 md:p-10 lg:p-12 flex flex-col justify-between border-l border-off-white/8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] text-off-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/30">
                      {project.type}
                    </span>
                    <span className="ml-auto font-mono text-[10px] bg-off-white/10 px-2 py-1 text-off-white/40 rounded-sm">
                      Concept
                    </span>
                  </div>

                  <h3 className="font-grotesk font-bold text-4xl md:text-5xl tracking-tight group-hover:text-lime transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-off-white/50 leading-relaxed text-sm md:text-base max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-widest uppercase text-off-white/30 border border-off-white/10 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-off-white/40 group-hover:text-lime transition-colors">
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                      View
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 md:hidden text-center">
        <Link href="/work" className="btn-outline text-sm">
          View All Projects
        </Link>
      </div>
    </section>
  );
}

function ProjectVisual({ projectId, accent }: { projectId: string; accent: string }) {
  if (projectId === "velocity") {
    return (
      <svg viewBox="0 0 320 240" fill="none" className="w-full h-full opacity-80" aria-hidden="true">
        <rect x="0" y="0" width="320" height="240" fill="#0A0A0A" />
        <line x1="0" y1="120" x2="320" y2="120" stroke={accent} strokeWidth="0.5" opacity="0.3" />
        <line x1="160" y1="0" x2="160" y2="240" stroke={accent} strokeWidth="0.5" opacity="0.15" />
        <path d="M60 145 L80 118 L130 108 L190 108 L240 118 L260 145 Z" stroke={accent} strokeWidth="1" fill="none" opacity="0.6" />
        <ellipse cx="105" cy="147" rx="18" ry="9" stroke={accent} strokeWidth="1" fill="none" opacity="0.5" />
        <ellipse cx="215" cy="147" rx="18" ry="9" stroke={accent} strokeWidth="1" fill="none" opacity="0.5" />
        <line x1="20" y1="130" x2="80" y2="130" stroke={accent} strokeWidth="0.5" opacity="0.2" />
        <line x1="20" y1="138" x2="60" y2="138" stroke={accent} strokeWidth="0.5" opacity="0.15" />
        <line x1="240" y1="130" x2="300" y2="130" stroke={accent} strokeWidth="0.5" opacity="0.2" />
        <text x="20" y="30" fill={accent} fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.5">VELOCITY</text>
        <text x="20" y="42" fill={accent} fontSize="6" fontFamily="monospace" letterSpacing="2" opacity="0.3">AUTOMOTIVE EXPERIENCE</text>
        <rect x="0" y="0" width="6" height="0.5" fill={accent} opacity="0.5" />
        <rect x="0" y="0" width="0.5" height="6" fill={accent} opacity="0.5" />
        <rect x="314" y="0" width="6" height="0.5" fill={accent} opacity="0.5" />
        <rect x="319.5" y="0" width="0.5" height="6" fill={accent} opacity="0.5" />
      </svg>
    );
  }

  if (projectId === "noir") {
    return (
      <svg viewBox="0 0 320 240" fill="none" className="w-full h-full opacity-80" aria-hidden="true">
        <rect x="0" y="0" width="320" height="240" fill="#0D0B08" />
        <line x1="40" y1="60" x2="280" y2="60" stroke={accent} strokeWidth="0.5" opacity="0.15" />
        <line x1="40" y1="180" x2="280" y2="180" stroke={accent} strokeWidth="0.5" opacity="0.15" />
        <path d="M160 80 L180 130 L175 130 L175 160 L185 160 L185 165 L135 165 L135 160 L145 160 L145 130 L140 130 Z" stroke={accent} strokeWidth="1" fill="none" opacity="0.4" />
        <ellipse cx="160" cy="95" rx="26" ry="18" stroke={accent} strokeWidth="0.75" fill="none" opacity="0.3" />
        <circle cx="80" cy="100" r="2" fill={accent} opacity="0.6" />
        <line x1="80" y1="95" x2="80" y2="102" stroke={accent} strokeWidth="1" opacity="0.3" />
        <circle cx="240" cy="100" r="2" fill={accent} opacity="0.6" />
        <line x1="240" y1="95" x2="240" y2="102" stroke={accent} strokeWidth="1" opacity="0.3" />
        <text x="20" y="30" fill={accent} fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.5">NOIR</text>
        <text x="20" y="42" fill={accent} fontSize="6" fontFamily="monospace" letterSpacing="2" opacity="0.3">HOSPITALITY CONCEPT</text>
        <rect x="0" y="0" width="6" height="0.5" fill={accent} opacity="0.5" />
        <rect x="0" y="0" width="0.5" height="6" fill={accent} opacity="0.5" />
        <rect x="314" y="0" width="6" height="0.5" fill={accent} opacity="0.5" />
        <rect x="319.5" y="0" width="0.5" height="6" fill={accent} opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 240" fill="none" className="w-full h-full opacity-80" aria-hidden="true">
      <rect x="0" y="0" width="320" height="240" fill="#080B10" />
      <rect x="20" y="50" width="130" height="80" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.15" rx="2" />
      <rect x="170" y="50" width="130" height="80" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.15" rx="2" />
      <rect x="20" y="145" width="280" height="70" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.15" rx="2" />
      <rect x="30" y="110" width="12" height="12" fill={accent} opacity="0.4" />
      <rect x="48" y="100" width="12" height="22" fill={accent} opacity="0.5" />
      <rect x="66" y="90" width="12" height="32" fill={accent} opacity="0.6" />
      <rect x="84" y="105" width="12" height="17" fill={accent} opacity="0.4" />
      <rect x="102" y="95" width="12" height="27" fill={accent} opacity="0.55" />
      <polyline points="180,120 200,100 220,110 240,85 260,95 280,75" stroke={accent} strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="240" cy="85" r="3" fill={accent} opacity="0.8" />
      <rect x="30" y="155" width="60" height="4" fill={accent} opacity="0.2" rx="2" />
      <rect x="30" y="165" width="40" height="4" fill={accent} opacity="0.3" rx="2" />
      <rect x="120" y="155" width="60" height="4" fill={accent} opacity="0.2" rx="2" />
      <rect x="120" y="165" width="40" height="4" fill={accent} opacity="0.15" rx="2" />
      <rect x="210" y="155" width="60" height="4" fill={accent} opacity="0.2" rx="2" />
      <rect x="210" y="165" width="40" height="4" fill={accent} opacity="0.3" rx="2" />
      <text x="20" y="30" fill={accent} fontSize="8" fontFamily="monospace" letterSpacing="3" opacity="0.5">NEXUS</text>
      <text x="20" y="42" fill={accent} fontSize="6" fontFamily="monospace" letterSpacing="2" opacity="0.3">SAAS DASHBOARD CONCEPT</text>
      <rect x="0" y="0" width="6" height="0.5" fill={accent} opacity="0.5" />
      <rect x="0" y="0" width="0.5" height="6" fill={accent} opacity="0.5" />
      <rect x="314" y="0" width="6" height="0.5" fill={accent} opacity="0.5" />
      <rect x="319.5" y="0" width="0.5" height="6" fill={accent} opacity="0.5" />
    </svg>
  );
}
