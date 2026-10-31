"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data/projects";

export default function WorkPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={sectionRef} className="pt-24">
      {/* Header */}
      <div className="pt-16 pb-16 max-w-[1400px] mx-auto px-6 lg:px-10 border-b border-off-white/10">
        <div className="reveal">
          <SectionLabel>Portfolio</SectionLabel>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight reveal">
            Our Work
          </h1>
          <p className="text-off-white/40 text-sm max-w-xs leading-relaxed reveal">
            Independent concept projects demonstrating our capabilities across
            digital experience design and development.
          </p>
        </div>
      </div>

      {/* Concept notice */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
        <div className="border border-off-white/15 bg-graphite/40 px-6 py-4 flex items-start gap-4 reveal">
          <span className="font-mono text-[10px] tracking-widest uppercase text-lime mt-0.5">Note</span>
          <p className="text-sm text-off-white/50 leading-relaxed">
            The projects below are independent concept work produced by Webworks Studio to
            demonstrate our design and development capabilities. They are not client projects
            and no real client names, testimonials, results or statistics are associated with them.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32">
        {/* Featured large project */}
        {projects.slice(0, 1).map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="group block mt-8 mb-px border border-off-white/10 hover:border-off-white/25 transition-all duration-500 overflow-hidden reveal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
              {/* Visual */}
              <div
                className="relative overflow-hidden flex items-center justify-center min-h-[300px]"
                style={{ backgroundColor: project.color }}
              >
                <LargeProjectVisual projectId={project.id} accent={project.accentColor} />
              </div>
              {/* Info */}
              <div className="p-10 lg:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-off-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/30">
                      {project.type}
                    </span>
                    <span className="font-mono text-[10px] bg-lime/10 text-lime px-2 py-1 border border-lime/20">
                      Concept
                    </span>
                  </div>
                  <h2 className="font-grotesk font-bold text-6xl lg:text-8xl tracking-tight group-hover:text-lime transition-colors duration-300">
                    {project.name}
                  </h2>
                  <p className="mt-6 text-off-white/50 text-base leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-off-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="font-mono text-[9px] tracking-widest uppercase text-off-white/30 border border-off-white/10 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-off-white/40 group-hover:text-lime transition-colors">
                    <span className="font-mono text-[10px] tracking-widest uppercase">Case Study</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Remaining projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-px">
          {projects.slice(1).map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className={`group block border border-off-white/10 hover:border-off-white/25 transition-all duration-500 overflow-hidden reveal ${
                i === 0 ? "" : "delay-150"
              }`}
            >
              <div className="relative overflow-hidden flex items-center justify-center min-h-[280px]" style={{ backgroundColor: project.color }}>
                <LargeProjectVisual projectId={project.id} accent={project.accentColor} />
              </div>
              <div className="p-8 border-t border-off-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-off-white/30">{project.type}</span>
                  <span className="font-mono text-[10px] bg-lime/10 text-lime px-2 py-1 border border-lime/20 ml-auto">Concept</span>
                </div>
                <h2 className="font-grotesk font-bold text-4xl tracking-tight group-hover:text-lime transition-colors duration-300">
                  {project.name}
                </h2>
                <p className="mt-3 text-off-white/40 text-sm leading-relaxed">{project.tagline}</p>
                <div className="mt-6 flex items-center justify-end text-off-white/40 group-hover:text-lime transition-colors">
                  <span className="font-mono text-[10px] tracking-widest uppercase">Case Study</span>
                  <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

function LargeProjectVisual({ projectId, accent }: { projectId: string; accent: string }) {
  if (projectId === "velocity") {
    return (
      <svg viewBox="0 0 600 400" fill="none" className="w-full h-full" aria-hidden="true">
        <rect x="0" y="0" width="600" height="400" fill="#0A0A0A" />
        <line x1="0" y1="200" x2="600" y2="200" stroke={accent} strokeWidth="0.5" opacity="0.2" />
        <path d="M100 240 L140 185 L240 170 L360 170 L460 185 L500 240 Z" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.7" />
        <ellipse cx="185" cy="244" rx="32" ry="16" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="415" cy="244" rx="32" ry="16" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M200 170 L240 150 L360 150 L400 170" stroke={accent} strokeWidth="0.75" fill="none" opacity="0.4" />
        <rect x="460" y="200" width="20" height="8" fill={accent} opacity="0.5" />
        <rect x="120" y="200" width="20" height="8" fill={accent} opacity="0.5" />
        <line x1="30" y1="220" x2="110" y2="220" stroke={accent} strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="232" x2="90" y2="232" stroke={accent} strokeWidth="0.5" opacity="0.2" />
        <line x1="490" y1="220" x2="570" y2="220" stroke={accent} strokeWidth="0.5" opacity="0.3" />
        <text x="30" y="40" fill={accent} fontSize="10" fontFamily="monospace" letterSpacing="4" opacity="0.5">VELOCITY</text>
        <text x="30" y="56" fill={accent} fontSize="7" fontFamily="monospace" letterSpacing="2" opacity="0.3">AUTOMOTIVE DIGITAL EXPERIENCE — CONCEPT 2024</text>
        <rect x="0" y="0" width="10" height="1" fill={accent} opacity="0.5" />
        <rect x="0" y="0" width="1" height="10" fill={accent} opacity="0.5" />
        <rect x="590" y="0" width="10" height="1" fill={accent} opacity="0.5" />
        <rect x="599" y="0" width="1" height="10" fill={accent} opacity="0.5" />
        <rect x="0" y="399" width="10" height="1" fill={accent} opacity="0.5" />
        <rect x="0" y="390" width="1" height="10" fill={accent} opacity="0.5" />
        <rect x="590" y="399" width="10" height="1" fill={accent} opacity="0.5" />
        <rect x="599" y="390" width="1" height="10" fill={accent} opacity="0.5" />
      </svg>
    );
  }
  if (projectId === "noir") {
    return (
      <svg viewBox="0 0 500 380" fill="none" className="w-full h-full" aria-hidden="true">
        <rect x="0" y="0" width="500" height="380" fill="#0D0B08" />
        <rect x="140" y="60" width="220" height="280" stroke={accent} strokeWidth="0.75" fill="none" opacity="0.15" rx="1" />
        <line x1="160" y1="100" x2="340" y2="100" stroke={accent} strokeWidth="0.5" opacity="0.2" />
        <line x1="160" y1="200" x2="340" y2="200" stroke={accent} strokeWidth="0.5" opacity="0.15" />
        <rect x="160" y="115" width="100" height="4" fill={accent} opacity="0.25" rx="1" />
        <rect x="160" y="126" width="70" height="3" fill={accent} opacity="0.15" rx="1" />
        <rect x="160" y="145" width="110" height="4" fill={accent} opacity="0.25" rx="1" />
        <rect x="160" y="156" width="80" height="3" fill={accent} opacity="0.15" rx="1" />
        <rect x="160" y="175" width="90" height="4" fill={accent} opacity="0.25" rx="1" />
        <line x1="250" y1="215" x2="250" y2="295" stroke={accent} strokeWidth="1" opacity="0.3" />
        <ellipse cx="250" cy="295" rx="20" ry="5" stroke={accent} strokeWidth="0.75" fill="none" opacity="0.2" />
        <circle cx="250" cy="212" r="3" fill={accent} opacity="0.6" />
        <line x1="60" y1="140" x2="120" y2="140" stroke={accent} strokeWidth="0.5" opacity="0.1" />
        <line x1="380" y1="140" x2="440" y2="140" stroke={accent} strokeWidth="0.5" opacity="0.1" />
        <text x="30" y="36" fill={accent} fontSize="10" fontFamily="monospace" letterSpacing="4" opacity="0.5">NOIR</text>
        <text x="30" y="50" fill={accent} fontSize="7" fontFamily="monospace" letterSpacing="2" opacity="0.3">HOSPITALITY WEBSITE — CONCEPT 2024</text>
        <rect x="0" y="0" width="10" height="1" fill={accent} opacity="0.4" />
        <rect x="0" y="0" width="1" height="10" fill={accent} opacity="0.4" />
        <rect x="490" y="0" width="10" height="1" fill={accent} opacity="0.4" />
        <rect x="499" y="0" width="1" height="10" fill={accent} opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 500 380" fill="none" className="w-full h-full" aria-hidden="true">
      <rect x="0" y="0" width="500" height="380" fill="#080B10" />
      <rect x="30" y="70" width="180" height="120" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.15" rx="2" />
      <rect x="225" y="70" width="245" height="120" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.15" rx="2" />
      <rect x="30" y="205" width="440" height="140" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.15" rx="2" />
      <rect x="45" y="158" width="18" height="20" fill={accent} opacity="0.5" />
      <rect x="70" y="143" width="18" height="35" fill={accent} opacity="0.6" />
      <rect x="95" y="130" width="18" height="48" fill={accent} opacity="0.7" />
      <rect x="120" y="150" width="18" height="28" fill={accent} opacity="0.5" />
      <rect x="145" y="138" width="18" height="40" fill={accent} opacity="0.6" />
      <polyline points="235,170 270,145 305,158 340,120 375,135 410,105 450,115" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="340" cy="120" r="4" fill={accent} opacity="0.9" />
      <rect x="45" y="220" width="120" height="6" fill={accent} opacity="0.2" rx="2" />
      <rect x="45" y="233" width="80" height="6" fill={accent} opacity="0.3" rx="2" />
      <rect x="45" y="246" width="100" height="6" fill={accent} opacity="0.2" rx="2" />
      <rect x="200" y="220" width="120" height="6" fill={accent} opacity="0.2" rx="2" />
      <rect x="200" y="233" width="80" height="6" fill={accent} opacity="0.15" rx="2" />
      <rect x="200" y="246" width="100" height="6" fill={accent} opacity="0.2" rx="2" />
      <rect x="360" y="220" width="90" height="6" fill={accent} opacity="0.2" rx="2" />
      <rect x="360" y="233" width="60" height="6" fill={accent} opacity="0.3" rx="2" />
      <text x="30" y="40" fill={accent} fontSize="10" fontFamily="monospace" letterSpacing="4" opacity="0.5">NEXUS</text>
      <text x="30" y="55" fill={accent} fontSize="7" fontFamily="monospace" letterSpacing="2" opacity="0.3">SAAS DASHBOARD — CONCEPT 2024</text>
      <rect x="0" y="0" width="10" height="1" fill={accent} opacity="0.4" />
      <rect x="0" y="0" width="1" height="10" fill={accent} opacity="0.4" />
      <rect x="490" y="0" width="10" height="1" fill={accent} opacity="0.4" />
      <rect x="499" y="0" width="1" height="10" fill={accent} opacity="0.4" />
    </svg>
  );
}
