import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ProcessSection from "@/components/home/ProcessSection";
import StudioSection from "@/components/home/StudioSection";
import PartnerSection from "@/components/home/PartnerSection";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webworks Studio — Engineered For What's Next",
  description:
    "Independent technology and development studio. We design and build digital experiences, websites and web applications that are engineered for what's next.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <CapabilitiesSection />
      <ProcessSection />
      <StudioSection />
      <PartnerSection />
      <FinalCTA />
    </>
  );
}
