"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<SVGSVGElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const elements = [
        headlineRef.current,
        subRef.current,
        ctaRef.current,
        hudRef.current,
      ].filter(Boolean);

      elements.forEach((el, i) => {
        if (!el) return;
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(24px)";
        setTimeout(() => {
          (el as HTMLElement).style.transition =
            "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "translateY(0)";
        }, 120 + i * 140);
      });
    }

    // Interactive mouse parallax on desktop
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Slow orbital rotation for inner geometric rings
    let frame: number;
    let angle = 0;
    const animate = () => {
      angle += 0.0035;
      if (geometryRef.current) {
        const ring1 = geometryRef.current.querySelector(".geo-ring-1");
        const ring2 = geometryRef.current.querySelector(".geo-ring-2");
        if (ring1) {
          (ring1 as SVGElement).style.transform = `rotate(${angle}rad)`;
          (ring1 as SVGElement).style.transformOrigin = "260px 260px";
        }
        if (ring2) {
          (ring2 as SVGElement).style.transform = `rotate(${-angle * 0.7}rad)`;
          (ring2 as SVGElement).style.transformOrigin = "260px 260px";
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1080px] flex flex-col justify-between bg-obsidian text-off-white overflow-hidden pt-20 pb-4 lg:pt-24 lg:pb-6">
      {/* Background Grid & Radial Atmosphere */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden lg:block opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 245, 212, 0.12) 0%, rgba(6, 7, 7, 0) 70%)",
        }}
      />

      {/* Subtle Frame Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-off-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-off-white/10" />
      <div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-off-white/[0.04] hidden lg:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-off-white/[0.04] hidden lg:block pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 xl:col-span-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <SectionLabel>Independent Technology Studio</SectionLabel>
              <div className="hidden sm:flex items-center gap-2 border border-lime/30 bg-lime/10 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                <span className="font-mono text-[9px] text-lime tracking-widest uppercase">
                  Available for Projects
                </span>
              </div>
            </div>

            <h1
              ref={headlineRef}
              className="font-grotesk font-bold text-display tracking-tight uppercase text-off-white leading-[0.92]"
            >
              Engineered<br />
              <span className="text-lime">for What&apos;s</span><br />
              Next.
            </h1>

            <p
              ref={subRef}
              className="mt-5 text-sm sm:text-base text-off-white/60 leading-relaxed font-inter max-w-lg"
            >
              Webworks Studio designs and develops digital experiences, flagship
              websites, and bespoke web applications for brands that demand
              technical rigor and visual distinction.
            </p>

            <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/work" className="btn-primary">
                Explore Our Work
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Abstract Interactive Geometric Visual */}
          <div className="lg:col-span-5 xl:col-span-4 hidden lg:flex items-center justify-center relative">
            <div
              className="relative w-[420px] h-[420px] xl:w-[460px] xl:h-[460px] flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
              }}
            >
              <svg
                ref={geometryRef}
                viewBox="0 0 520 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Outer Framing */}
                <rect
                  x="1"
                  y="1"
                  width="518"
                  height="518"
                  stroke="rgba(0, 245, 212, 0.15)"
                  strokeWidth="0.75"
                />

                {/* Coordinate Crosshairs */}
                <line
                  x1="260"
                  y1="10"
                  x2="260"
                  y2="510"
                  stroke="rgba(0, 245, 212, 0.12)"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                />
                <line
                  x1="10"
                  y1="260"
                  x2="510"
                  y2="260"
                  stroke="rgba(0, 245, 212, 0.12)"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                />

                {/* Concentric Rotating Rings */}
                <g className="geo-ring-1">
                  <polygon
                    points="260,60 460,260 260,460 60,260"
                    stroke="#00F5D4"
                    strokeWidth="0.75"
                    strokeOpacity="0.35"
                    fill="none"
                  />
                  <circle
                    cx="260"
                    cy="260"
                    r="150"
                    stroke="#00F5D4"
                    strokeWidth="0.5"
                    strokeDasharray="6 8"
                    strokeOpacity="0.25"
                    fill="none"
                  />
                </g>

                <g className="geo-ring-2">
                  <rect
                    x="150"
                    y="150"
                    width="220"
                    height="220"
                    stroke="#00F5D4"
                    strokeWidth="0.75"
                    strokeOpacity="0.4"
                    fill="none"
                    transform="rotate(45 260 260)"
                  />
                  <circle
                    cx="260"
                    cy="260"
                    r="95"
                    stroke="#00F5D4"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    fill="none"
                  />
                </g>

                {/* Central Focus Gyro */}
                <circle cx="260" cy="260" r="16" fill="rgba(0, 245, 212, 0.15)" />
                <rect
                  x="251"
                  y="251"
                  width="18"
                  height="18"
                  stroke="#00F5D4"
                  strokeWidth="1.5"
                  fill="none"
                  transform="rotate(45 260 260)"
                />
                <circle cx="260" cy="260" r="3" fill="#00F5D4" />

                {/* Corner Cadence Targets */}
                <path d="M12 24 L12 12 L24 12" stroke="#00F5D4" strokeWidth="1" />
                <path d="M508 24 L508 12 L496 12" stroke="#00F5D4" strokeWidth="1" />
                <path d="M12 496 L12 508 L24 508" stroke="#00F5D4" strokeWidth="1" />
                <path d="M508 496 L508 508 L496 508" stroke="#00F5D4" strokeWidth="1" />

                {/* Technical HUD Readout */}
                <text
                  x="20"
                  y="35"
                  fill="#00F5D4"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="3"
                  opacity="0.7"
                >
                  WW-STUDIO // SYS-V2
                </text>
                <text
                  x="380"
                  y="35"
                  fill="#00F5D4"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="2"
                  opacity="0.6"
                >
                  LOC: 51.5°N
                </text>
                <text
                  x="20"
                  y="495"
                  fill="rgba(236, 239, 234, 0.4)"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="2"
                >
                  ROT: 3D-VECTOR
                </text>
                <text
                  x="430"
                  y="495"
                  fill="#00F5D4"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="2"
                  opacity="0.7"
                >
                  60 FPS
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Screen-Fit Bottom HUD Status Bar */}
      <div
        ref={hudRef}
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-4 border-t border-off-white/10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-6 sm:gap-10">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-off-white/30">
                Studio Status
              </p>
              <p className="text-[11px] text-lime mt-0.5 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-lime inline-block" />
                Active Engagement
              </p>
            </div>
            <div className="h-6 w-px bg-off-white/10 hidden sm:block" />
            <div>
              <p className="text-[9px] uppercase tracking-widest text-off-white/30">
                Speciality
              </p>
              <p className="text-[11px] text-off-white/70 mt-0.5">
                Digital Experiences
              </p>
            </div>
            <div className="h-6 w-px bg-off-white/10 hidden sm:block" />
            <div className="hidden md:block">
              <p className="text-[9px] uppercase tracking-widest text-off-white/30">
                Core Stack
              </p>
              <p className="text-[11px] text-off-white/70 mt-0.5">
                Next.js 15 · TypeScript
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-off-white/40 text-[10px] uppercase tracking-widest">
            <span className="hidden sm:inline">Scroll to explore</span>
            <ArrowDown size={12} className="animate-bounce text-lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
