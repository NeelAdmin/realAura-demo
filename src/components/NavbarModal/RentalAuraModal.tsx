"use client";

import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

interface RentalAuraPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function RentalAuraPopup({
  open,
  onClose,
}: RentalAuraPopupProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="
          w-full
          sm:max-w-3xl
          lg:max-w-5xl
          bg-[#F6F8FC]
       rounded-3xl
          px-5 py-6
          sm:px-8 sm:py-10
          lg:px-12 lg:py-14
          max-h-[95vh]
          overflow-y-auto
          mx-4 sm:mx-0
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="
              text-[22px]
              sm:text-[28px]
              lg:text-[36px]
              font-semibold
              text-[#0F172A]
            "
          >
            Improve Your Rental Aura
          </h2>
          <p
            className="
              mt-2
              text-[14px]
              sm:text-[16px]
              lg:text-[18px]
              text-[#64748B]
            "
          >
            Select your profile to begin the verification process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          <Link href="/select-role/owner" onClick={onClose}>
            <div
              className="
                h-full
                bg-white
                rounded-2xl
                px-6 py-8
                sm:px-8 sm:py-10
                text-center
                shadow-sm
                transition
                hover:shadow-md
                hover:scale-[1.02]
              "
            >
              <div className="mx-auto mb-5 flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-full border">
                <CheckCircle className="h-8 w-8 sm:h-9 sm:w-9 text-green-500" />
              </div>

              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#0F172A]">
                Asset Owner
              </h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed">
                Post a verified performance ledger for your tenant.
              </p>
            </div>
          </Link>

          <Link href="/select-role/tenant" onClick={onClose}>
            <div
              className="
                h-full
                bg-white
                rounded-2xl
                px-6 py-8
                sm:px-8 sm:py-10
                text-center
                shadow-sm
                transition
                hover:shadow-md
                hover:scale-[1.02]
              "
            >
              <div className="mx-auto mb-5 flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-full border">
                <XCircle className="h-8 w-8 sm:h-9 sm:w-9 text-red-500" />
              </div>

              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#0F172A]">
                Premium Tenant
              </h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed">
                Build your reputation and rate the property owner.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
