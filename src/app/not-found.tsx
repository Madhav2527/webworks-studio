import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pt-24 px-6">
      <div className="max-w-xl text-center space-y-8">
        <SectionLabel className="justify-center">Error 404</SectionLabel>
        
        <h1 className="font-grotesk font-bold text-7xl md:text-9xl text-off-white tracking-tighter">
          4<span className="text-lime">0</span>4
        </h1>

        <p className="font-grotesk text-2xl text-off-white/80">
          Route Not Located
        </p>

        <p className="font-inter text-sm text-off-white/50 max-w-md mx-auto leading-relaxed">
          The requested path does not exist in the studio architecture or has been moved to an alternative namespace.
        </p>

        <div className="pt-4">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={14} />
            Return to Studio Index
          </Link>
        </div>
      </div>
    </main>
  );
}
