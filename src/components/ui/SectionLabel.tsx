import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  index?: string;
}

export default function SectionLabel({ children, className, index }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index && (
        <span className="font-mono text-[10px] text-off-white/30 tabular-nums">
          {index}
        </span>
      )}
      <span className="section-label">{children}</span>
      <div className="flex-1 h-px bg-lime/20 max-w-[60px]" />
    </div>
  );
}
