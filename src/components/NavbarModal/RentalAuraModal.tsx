"use client";

import { Crown, KeyRound } from "lucide-react";
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
              font-bold
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <Link href="/select-role/owner" onClick={onClose}>
            <div
              className="
                h-full
                bg-white
                rounded-2xl
                sm:rounded-3xl
                px-6 py-10
                sm:px-8 sm:py-12
                md:px-10 md:py-14
                lg:px-12 lg:py-16
                text-center
                border border-gray-100
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                cursor-pointer
              "
            >
              <div className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-amber-50 shadow-lg shadow-black/15">
                <Crown className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-600 drop-shadow-sm drop-shadow-black/20" />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Asset Owner
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
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
                sm:rounded-3xl
                px-6 py-10
                sm:px-8 sm:py-12
                md:px-10 md:py-14
                lg:px-12 lg:py-16
                text-center
                border border-gray-100
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                cursor-pointer
              "
            >
              <div className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-amber-50 shadow-lg shadow-black/15">
                <KeyRound className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-600 drop-shadow-sm drop-shadow-black/20" />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Premium Tenant
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                Build your reputation and rate the property owner.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
