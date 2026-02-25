"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const MotionLink = motion(Link);
const bgColors = [
  "#121212",
  "rgba(131, 58, 180, 1)",
  "rgba(253, 29, 29, 1)",
  "rgba(252, 176, 69, 1)",
  "rgba(131, 58, 180, 1)",
  "#121212",
];

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="mt-2 h-auto object-contain"
        src="/images/logo.svg"
        alt="Logo"
        width={74}
        height={74}
      />
    </div>
  );
}
