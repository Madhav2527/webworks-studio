import React from "react";

interface LogoProps {
  className?: string;
  showMark?: boolean;
}

export default function Logo({ className = "w-8 h-8", showMark = true }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-label="Webworks Studio mark"
      role="img"
    >
      {/* Outer square — thin technical border */}
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        stroke="#D5FF36"
        strokeWidth="0.75"
      />
      {/* Diagonal slash — bold identity mark */}
      <line
        x1="8"
        y1="32"
        x2="32"
        y2="8"
        stroke="#D5FF36"
        strokeWidth="3"
        strokeLinecap="square"
      />
      {/* Bottom-left dot */}
      <rect x="7" y="29" width="3" height="3" fill="#D5FF36" />
      {/* Top-right dot */}
      <rect x="30" y="8" width="3" height="3" fill="#D5FF36" />
      {/* Horizontal crossbar */}
      <line
        x1="10"
        y1="20"
        x2="30"
        y2="20"
        stroke="#D5FF36"
        strokeWidth="0.75"
        strokeDasharray="2 3"
      />
    </svg>
  );
}
