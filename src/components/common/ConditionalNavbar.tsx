"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/common/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;

  return <Navbar />;
}
