import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu, Clock, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Partnerships — White-Label & Technical Delivery",
  description:
    "We provide white-label engineering and technical development partnerships for branding studios, marketing agencies, and independent creative designers.",
};

const partnerProfiles = [
  {
    title: "Marketing Agencies",
    desc: "Scale your digital offering without retaining full-time frontend engineers. We deliver client campaigns, high-converting launch funnels, and corporate web platforms with dependable turnaround times.",
  },
  {
    title: "Branding Studios",
    desc: "You craft world-class brand identities and visual systems. We translate your Figma guidelines into pixel-exact, high-fidelity web implementations that honor your creative direction.",
  },
  {
    title: "Freelance Designers",
    desc: "Offer comprehensive design-and-build services to your clients without needing to write code. We act as your invisible technical co-pilot from initial scoping to live launch.",
  },
  {
    title: "Social Media Managers",
    desc: "Elevate your social campaigns with dedicated campaign destinations, custom landing pages, and interactive brand hubs built for speed and tracking fidelity.",
  },
  {
    title: "Independent Creative Professionals",
    desc: "Art directors, creative technologists, and copywriters looking to ship ambitious client digital work without technical blockers or compromise.",
  },
];

const partnershipSteps = [
  {
    step: "01",
    title: "Partner Brings the Project",
    desc: "You connect with a client opportunity requiring high-end website development, custom web applications, or digital experience design.",
  },
  {
    step: "02",
    title: "Requirements & Scope Agreed",
    desc: "We review the designs, functionality requirements, and timeline together. We provide a transparent, fixed-scope technical proposal.",
  },
  {
    step: "03",
    title: "Webworks Handles Development",
    desc: "Our studio builds the project with modern code, strict type safety, smooth animations, and complete cross-browser responsiveness.",
  },
  {
    step: "04",
    title: "Partner Manages Client Relationship",
    desc: "You remain the primary face and point of contact for your client. We work completely behind the scenes under your brand banner.",
  },
  {
    step: "05",
    title: "Testing, Approval & Delivery",
    desc: "After rigorous QA and partner sign-off, we deploy to your client's hosting or deliver a clean, documented Git repository.",
  },
];

export default function PartnershipsPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <div className="pt-16 pb-16 max-w-[1400px] mx-auto px-6 lg:px-10 border-b border-off-white/10">
        <SectionLabel>White-Label & Technical Collaboration</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Agency Partnerships
          </h1>
          <p className="text-off-white/50 text-sm max-w-sm leading-relaxed">
            Your behind-the-scenes engineering department. Dependable, high-fidelity web development executed under your agency&apos;s brand.
          </p>
        </div>
      </div>

      {/* Intro Mission */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-lime uppercase tracking-widest block mb-4">Behind The Curtain</span>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-off-white tracking-tight leading-tight">
              Focus on design & strategy. We build the code.
            </h2>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Discuss a Partnership <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-off-white/60 font-inter text-base leading-relaxed">
            <p className="text-off-white/80 text-lg">
              Many creative studios, brand designers, and marketing consultants turn away lucrative website and web app projects simply because finding and managing reliable development talent is difficult.
            </p>
            <p>
              Webworks Studio bridges this gap. We function as a specialized technical partner that plugs seamlessly into your workflow. Whether you need white-label delivery under complete NDA discretion or an overt technical collaborator on client calls, we tailor the engagement to your model.
            </p>
            <p>
              No disappearing freelancers, no sloppy interpretations of your Figma files, and no technical debt passed to your clients.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Work With */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Collaborators</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl mt-3 mb-12 text-off-white tracking-tight">
            Who We Partner With Behind the Scenes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerProfiles.map((partner, i) => (
              <div
                key={partner.title}
                className="p-8 bg-obsidian border border-off-white/10 hover:border-lime/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-lime mb-4 block">
                    {"0" + (i + 1) + " // PARTNER"}
                  </span>
                  <h3 className="font-grotesk font-bold text-2xl text-off-white mb-3">
                    {partner.title}
                  </h3>
                  <p className="font-inter text-xs text-off-white/50 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5-Step Process */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <SectionLabel>Step-by-Step Delivery</SectionLabel>
        <h2 className="font-grotesk font-bold text-3xl md:text-5xl mt-3 mb-16 text-off-white tracking-tight">
          How Our Partnership Operates
        </h2>

        <div className="space-y-4">
          {partnershipSteps.map((step) => (
            <div
              key={step.step}
              className="p-8 border border-off-white/10 bg-graphite/40 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-lg text-lime font-bold">{step.step}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-grotesk font-bold text-xl md:text-2xl text-off-white">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="font-inter text-sm text-off-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Guarantees */}
      <div className="bg-graphite border-y border-off-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Assurances</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl mt-3 mb-12 text-off-white tracking-tight">
            Our Commitment to Agency Partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Strict NDA Protection",
                desc: "Your client relationship is yours alone. We never solicit or bypass our agency partners.",
              },
              {
                icon: Cpu,
                title: "Pixel-Fidelity Guarantee",
                desc: "We honor your design specifications down to letter-spacing, easing curves, and micro-interactions.",
              },
              {
                icon: Clock,
                title: "Predictable Timelines",
                desc: "Milestones are locked before coding begins. We communicate early and proactively throughout.",
              },
              {
                icon: CheckCircle2,
                title: "Handover Clarity",
                desc: "Clean Git repositories, recorded video walkthroughs, and well-commented codebases.",
              },
            ].map((guarantee) => {
              const Icon = guarantee.icon;
              return (
                <div key={guarantee.title} className="p-6 bg-obsidian border border-off-white/10 space-y-3">
                  <Icon size={20} className="text-lime" />
                  <h4 className="font-grotesk font-bold text-lg text-off-white">{guarantee.title}</h4>
                  <p className="font-inter text-xs text-off-white/45 leading-relaxed">{guarantee.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final Partnership CTA */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-off-white tracking-tight mb-6">
          Ready to expand your studio&apos;s development bandwidth?
        </h2>
        <p className="text-off-white/50 text-base max-w-xl mx-auto mb-10">
          Schedule a direct conversation. Tell us about your upcoming project pipeline or retain us for ongoing engineering execution.
        </p>
        <Link href="/contact" className="btn-primary text-sm py-4 px-8">
          Discuss a Partnership <ArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  );
}
