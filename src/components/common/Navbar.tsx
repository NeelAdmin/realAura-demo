"use client";

import { Logo } from "@/components/layout/navbar/logo";
import { NavLinks } from "@/components/layout/navbar/nav-links";
import { NavActions } from "@/components/layout/navbar/nav-actions";
import { MobileMenu } from "@/components/layout/navbar/mobile-menu";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import LoginForm from "../Login/LoginForm";
import ForgotPasswordForm from "../Login/ForgotPasswordForm";
import { OwnerSelectionModal } from "../NavbarModal/OwnerSelectionModal";
import RentalAuraPopup from "../NavbarModal/RentalAuraModal";

export function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);
  const [isProfileRatingModalOpen, setIsProfileRatingModalOpen] =
    useState(false);

  const [view, setView] = useState<"login" | "forgot">("login");

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setView("login"), 300);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setMobile(window.innerWidth < 1024);
      };

      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);
  return (
    <div className="flex flex-col items-start gap-2">
      <header
        className={
          "w-full border-b border-border lg:px-10 px-1 " +
          (mobile ? "bg-black" : "bg-background")
        }
      >
        <div className="flex h-20  items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo mobile={mobile} />
          </div>

          <div className="hidden items-center gap-10 lg:flex">
            <NavLinks />
          </div>
          <div className="hidden items-center gap-10 lg:flex">
            <NavActions
              setIsOpen={setIsOpen}
              setIsPostPopupOpen={setIsPostPopupOpen}
              setIsProfileRatingModalOpen={setIsProfileRatingModalOpen}
            />
          </div>
          <div className="lg:hidden">
            <MobileMenu
              setIsOpen={setIsOpen}
              setIsPostPopupOpen={setIsPostPopupOpen}
            />
          </div>
        </div>
      </header>
      <div className="lg:hidden items-center px-6">
        {mobile && <NavLinks />}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div
            className="relative bg-white rounded-[10px] shadow-2xl
        w-full max-w-[326px] p-5
        md:max-w-[539px] md:px-[45px] md:py-[70px]
        animate-in fade-in zoom-in duration-200
      "
          >
            <button
              onClick={handleClose}
              className="
          absolute top-4 right-4
          md:top-6 md:right-6
          text-gray-400 hover:text-gray-600 transition-colors
        "
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-[449px] mx-auto">
              {view === "login" ? (
                <LoginForm onSwitchToForgot={() => setView("forgot")} />
              ) : (
                <ForgotPasswordForm onSwitchToLogin={() => setView("login")} />
              )}
            </div>
          </div>
        </div>
      )}
      {isPostPopupOpen && (
        <OwnerSelectionModal
          isOpen={isPostPopupOpen}
          onClose={() => setIsPostPopupOpen(false)}
        />
      )}
      {isProfileRatingModalOpen && (
        <RentalAuraPopup
          open={isProfileRatingModalOpen}
          onClose={() => setIsProfileRatingModalOpen(false)}
        />
      )}
    </div>
  );
}
