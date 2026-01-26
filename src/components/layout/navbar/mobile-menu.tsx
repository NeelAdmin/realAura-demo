"use client";

import { useState } from "react";
import { AppButton } from "@/components/ui/AppButton";
import Image from "next/image";

export function MobileMenu({
  setIsOpen,
  setIsPostPopupOpen,
}: {
  setIsOpen: (open: boolean) => void;
  setIsPostPopupOpen: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <AppButton
          label="Post Property"
          className="h-9 px-3 text-sm font-medium text-white"
          onClick={() => setIsPostPopupOpen(true)}
        />

        <button
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1"
        >
          <Image src="/images/hamburg.png" alt="Menu" width={24} height={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-6">
            <a className="text-lg font-medium">Rent</a>
            <a className="text-lg font-medium">Sell</a>
            <a className="text-lg font-medium">Upcoming Projects</a>
            <a className="text-lg font-medium" onClick={() => setIsOpen(true)}>
              Login
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
