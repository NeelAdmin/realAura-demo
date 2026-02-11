"use client";

import { useState } from "react";
import { AppButton } from "@/components/ui/AppButton";
import Image from "next/image";
import LoginForm from "../../Login/LoginForm";
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import Link from "next/link";

export function MobileMenu({
  setIsPostPopupOpen,
}: {
  setIsPostPopupOpen: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  console.log(isAuthenticated);

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
        <div className="bg-background fixed inset-0 z-50 p-6">
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="text-lg font-bold">
              ✕
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-6">
            <Link href="/rent" onClick={() => setOpen(false)} className="text-lg font-bold">Rent</Link>
            <Link href="/" onClick={() => setOpen(false)} className="text-lg font-bold">Sell</Link>
            <Link href="/upcoming-projects" onClick={() => setOpen(false)} className="text-lg font-bold">Upcoming Projects</Link>
            {isAuthenticated && (
              <Link href="/dashboard" onClick={() => setOpen(false)} className="text-lg font-bold">Dashboard</Link>
            )}
            {!isAuthenticated && (
              <Link href="" onClick={() => {setIsLoginOpen(true); setOpen(false)}} className="text-lg font-bold">
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
      {isLoginOpen && <LoginForm open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}
