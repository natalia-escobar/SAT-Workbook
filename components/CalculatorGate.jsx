"use client";

// components/CalculatorGate.jsx
// Shows the floating Desmos calculator only on pages where students work problems.
// To add or remove a section, edit CALCULATOR_PATHS.

import { usePathname } from "next/navigation";
import DesmosCalculator from "@/components/DesmosCalculator";

const CALCULATOR_PATHS = ["/workbook", "/classroom", "/quiz"];

export default function CalculatorGate() {
  const pathname = usePathname() || "";
  const show = CALCULATOR_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  return show ? <DesmosCalculator /> : null;
}