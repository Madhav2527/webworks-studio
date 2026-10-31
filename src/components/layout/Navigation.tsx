"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/studio", label: "Studio" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/95 backdrop-blur-sm border-b border-off-white/10"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Webworks Studio — Home">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <Logo className="w-8 h-8" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-off-white/80 group-hover:text-lime transition-colors duration-300">
              Webworks Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 relative ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-lime"
                      : "text-off-white/60 hover:text-off-white"
                  }`}
                >
                  {pathname === link.href || pathname.startsWith(link.href + "/") ? (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-lime" />
                  ) : null}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary text-[11px] py-2.5 px-5"
            >
              Start a Project
            </Link>
            <button
              className="md:hidden p-2 text-off-white/70 hover:text-off-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-obsidian md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          {/* Grid decoration */}
          <div className="absolute top-0 left-0 right-0 bottom-0 grid-overlay opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-px h-full bg-off-white/10" />

          <ul className="flex flex-col gap-2 mt-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`transition-all duration-500 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link
                  href={link.href}
                  className={`block font-grotesk text-5xl font-bold tracking-tight py-3 border-b border-off-white/10 transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-lime"
                      : "text-off-white hover:text-lime"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto transition-all duration-500 delay-300 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/contact"
              className="btn-primary w-full justify-center text-sm py-4"
            >
              Start a Project
            </Link>
            <p className="mt-6 font-mono text-[10px] tracking-widest uppercase text-off-white/30">
              Engineered for What&apos;s Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
