import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  pages: [
    { href: "/work", label: "Work" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/studio", label: "Studio" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { label: "Digital Experiences" },
    { label: "Web Applications" },
    { label: "Commerce Systems" },
    { label: "Development Partnerships" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite border-t border-off-white/10 mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-off-white/10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group flex-shrink-0">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <Logo className="w-8 h-8" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-off-white/60 group-hover:text-lime transition-colors">
                Webworks Studio
              </span>
            </Link>
            <p className="font-grotesk text-2xl font-bold leading-tight text-off-white/80 max-w-xs">
              Build Beyond.
            </p>
            <p className="mt-4 text-sm text-off-white/40 leading-relaxed">
              Independent technology and development studio. Thoughtful design,
              reliable engineering.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="section-label mb-6">Pages</p>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-off-white/50 hover:text-off-white transition-colors duration-200 font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="section-label mb-6">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((svc) => (
                <li key={svc.label}>
                  <span className="text-sm text-off-white/50 font-inter">
                    {svc.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA bar */}
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-off-white/10">
          <div>
            <p className="section-label mb-2">Ready to build?</p>
            <p className="font-grotesk text-xl font-bold">
              Have something worth building?
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Start a Project
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-widest uppercase text-off-white/25">
            &copy; {year} Webworks Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/partnerships"
              className="font-mono text-[10px] tracking-widest uppercase text-off-white/25 hover:text-lime transition-colors"
            >
              Agency Partnerships
            </Link>
            <span className="text-off-white/20 text-[10px] font-mono tracking-widest uppercase">
              Engineered for What&apos;s Next
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
