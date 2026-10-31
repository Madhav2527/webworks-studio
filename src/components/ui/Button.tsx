import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  showArrow = false,
  className,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-lime focus-visible:outline-offset-4 disabled:opacity-40 disabled:pointer-events-none";

  const variants = {
    primary: "bg-lime text-obsidian hover:bg-off-white",
    outline:
      "bg-transparent text-off-white border border-off-white/30 hover:border-lime hover:text-lime",
    ghost:
      "bg-transparent text-off-white/60 hover:text-off-white",
  };

  const sizes = {
    sm: "text-[10px] px-4 py-2",
    md: "text-[11px] px-6 py-3",
    lg: "text-[12px] px-8 py-4",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowUpRight size={14} />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {showArrow && <ArrowUpRight size={14} />}
    </button>
  );
}
