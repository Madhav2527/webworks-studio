"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const elements = [
      headlineRef.current,
      subRef.current,
      ctaRef.current,
    ].filter(Boolean);

    elements.forEach((el, i) => {
      if (!el) return;
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition =
          "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 180);
    });

    // Slow rotation for geometry
    let frame: number;
    let angle = 0;
    const animate = () => {
      angle += 0.003;
      if (geometryRef.current) {
        const inner = geometryRef.current.querySelector(".geo-rotate");
        if (inner) {
          (inner as SVGElement).style.transform = `rotate(${angle}rad)`;
          (inner as SVGElement).style.transformOrigin = "center";
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-obsidian overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-off-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-off-white/10" />

      {/* Vertical column guides */}
      <div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-off-white/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-off-white/5 hidden lg:block" />

      {/* Abstract geometric composition — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center">
        <svg
          ref={geometryRef}
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[520px] h-[520px]"
          aria-hidden="true"
        >
          {/* Static outer frame */}
          <rect
            x="1"
            y="1"
            width="518"
            height="518"
            stroke="rgba(213,255,54,0.08)"
            strokeWidth="0.5"
          />
          {/* Cross-hair */}
          <line
            x1="260"
            y1="0"
            x2="260"
            y2="520"
            stroke="rgba(213,255,54,0.06)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="260"
            x2="520"
            y2="260"
            stroke="rgba(213,255,54,0.06)"
            strokeWidth="0.5"
          />

          {/* Slow-rotating inner group */}
          <g className="geo-rotate">
            {/* Large diamond */}
            <polygon
              points="260,40 460,260 260,480 60,260"
              stroke="rgba(213,255,54,0.12)"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Medium square rotated */}
            <rect
              x="130"
              y="130"
              width="260"
              height="260"
              stroke="rgba(213,255,54,0.08)"
              strokeWidth="0.5"
              fill="none"
              transform="rotate(45 260 260)"
            />
            {/* Inner circle */}
            <circle
              cx="260"
              cy="260"
              r="100"
              stroke="rgba(213,255,54,0.15)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4 8"
            />
          </g>

          {/* Static elements on top */}
          {/* Corner marks */}
          <rect x="0" y="0" width="8" height="1" fill="#D5FF36" opacity="0.6" />
          <rect x="0" y="0" width="1" height="8" fill="#D5FF36" opacity="0.6" />
          <rect x="512" y="0" width="8" height="1" fill="#D5FF36" opacity="0.6" />
          <rect x="519" y="0" width="1" height="8" fill="#D5FF36" opacity="0.6" />
          <rect x="0" y="519" width="8" height="1" fill="#D5FF36" opacity="0.6" />
          <rect x="0" y="512" width="1" height="8" fill="#D5FF36" opacity="0.6" />
          <rect x="512" y="519" width="8" height="1" fill="#D5FF36" opacity="0.6" />
          <rect x="519" y="512" width="1" height="8" fill="#D5FF36" opacity="0.6" />

          {/* Central element */}
          <rect
            x="248"
            y="248"
            width="24"
            height="24"
            fill="none"
            stroke="#D5FF36"
            strokeWidth="1"
            transform="rotate(45 260 260)"
          />
          <rect x="257" y="257" width="6" height="6" fill="#D5FF36" />

          {/* Diagonal accent line */}
          <line
            x1="80"
            y1="440"
            x2="440"
            y2="80"
            stroke="rgba(213,255,54,0.2)"
            strokeWidth="0.75"
          />

          {/* Technical labels */}
          <text
            x="12"
            y="12"
            fill="rgba(213,255,54,0.3)"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="2"
          >
            WW001
          </text>
          <text
            x="12"
            y="510"
            fill="rgba(213,255,54,0.3)"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="2"
          >
            520x520
          </text>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="max-w-[680px]">
          <div className="mb-10">
            <SectionLabel>Independent Studio</SectionLabel>
          </div>

          <h1
            ref={headlineRef}
            className="font-grotesk font-bold text-display-lg text-off-white leading-[0.88] tracking-tight uppercase"
          >
            Engineered<br />
            <span className="text-lime">for What&apos;s</span><br />
            Next.
          </h1>

          <p
            ref={subRef}
            className="mt-8 text-base md:text-lg text-off-white/50 leading-relaxed max-w-[480px] font-inter"
          >
            We design and develop digital experiences, websites and web
            applications for brands that demand precision, quality and
            originality.
          </p>

          <div ref={ctaRef} className="mt-12 flex flex-wrap gap-4">
            <Link href="/work" className="btn-primary">
              Explore Our Work
              <ArrowUpRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Start a Project
            </Link>
          </div>

          {/* Technical detail */}
          <div className="mt-16 pt-6 border-t border-off-white/10 flex items-center gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25">
                Status
              </p>
              <p className="font-mono text-[11px] text-lime/70 mt-1">
                Available for projects
              </p>
            </div>
            <div className="h-6 w-px bg-off-white/10" />
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25">
                Speciality
              </p>
              <p className="font-mono text-[11px] text-off-white/50 mt-1">
                Digital Experiences
              </p>
            </div>
            <div className="h-6 w-px bg-off-white/10" />
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25">
                Stack
              </p>
              <p className="font-mono text-[11px] text-off-white/50 mt-1">
                Next.js · TS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-off-white/25">
        <ArrowDown size={14} className="animate-bounce" />
        <span className="font-mono text-[9px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
