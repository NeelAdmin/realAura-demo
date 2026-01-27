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
import { MobileFilters } from "../layout/serch-bar/mobile-filters";
import { FilterChips } from "../layout/serch-bar/filter-chips";
import { SearchInput } from "../layout/serch-bar/search-input";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);
  const [isProfileRatingModalOpen, setIsProfileRatingModalOpen] = useState(false);
  const [view, setView] = useState<"login" | "forgot">("login");
  const pathname = usePathname();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setView("login"), 300);
  };

  const allowedRoutes = ["/"];

  const showComponent = allowedRoutes.includes(pathname);

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
    <>
      <div className="flex flex-col items-start gap-2">
        <header
          className={
            "border-border w-full border-b px-1 lg:px-10 " + (mobile ? "bg-black" : "bg-background")
          }
        >
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo />
            </div>

            {showComponent ? (
              <>
                <div className="hidden items-center gap-10 lg:flex">
                  <NavLinks />
                </div>
              </>
            ) : (
              <>
                {!mobile && (
                  <div className="ml-6 flex-1 items-center justify-center lg:flex">
                    <section className="justify-cente flex w-full">
                      <div className="flex w-full max-w-7xl flex-col items-center gap-4 px-4">
                        <div className="flex w-full justify-center">
                          <SearchInput />
                        </div>
                      </div>
                    </section>
                  </div>
                )}
              </>
            )}

            <div className="hidden items-center gap-10 lg:flex">
              <NavActions
                setIsOpen={setIsOpen}
                setIsPostPopupOpen={setIsPostPopupOpen}
                setIsProfileRatingModalOpen={setIsProfileRatingModalOpen}
              />
            </div>
            <div className="lg:hidden">
              <MobileMenu setIsOpen={setIsOpen} setIsPostPopupOpen={setIsPostPopupOpen} />
            </div>
          </div>
        </header>
        <div className="items-center px-6 lg:hidden">{mobile && <NavLinks />}</div>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

            <div className="animate-in fade-in zoom-in relative w-full max-w-[326px] rounded-[10px] bg-white p-5 shadow-2xl duration-200 md:max-w-[539px] md:px-[45px] md:py-[70px]">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600 md:top-6 md:right-6"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mx-auto max-w-[449px]">
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
          <OwnerSelectionModal isOpen={isPostPopupOpen} onClose={() => setIsPostPopupOpen(false)} />
        )}
        {isProfileRatingModalOpen && (
          <RentalAuraPopup
            open={isProfileRatingModalOpen}
            onClose={() => setIsProfileRatingModalOpen(false)}
          />
        )}
      </div>
      <section className="flex w-full justify-center py-6">
        <div className="flex w-full max-w-7xl flex-col items-center gap-4 px-4">
          {showComponent && (
            <div className="flex w-full justify-center">
              <SearchInput />
            </div>
          )}
          {((showComponent && !mobile) ||
            (showComponent && mobile) ||
            (!showComponent && !mobile)) && (
            <div>
              <div className="hidden lg:block">
                <FilterChips />
              </div>
              <div className="lg:hidden">
                <MobileFilters />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
