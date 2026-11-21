import React from "react";

// Transparent-background version of the brand mark (the original artwork
// shipped with a white square behind it).
const LOGO_URL = "/brand-logo.png";

const SIZES = {
  sm: "h-10",
  md: "h-14",
  lg: "h-24",
};

export default function BrandLogo({ size = "md", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Movement Publisher"
      className={`w-auto object-contain ${SIZES[size] || SIZES.md} ${className}`}
    />
  );
}