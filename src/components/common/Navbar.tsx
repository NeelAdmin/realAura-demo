"use client";

import { Logo } from "@/components/layout/navbar/logo";
import { NavLinks } from "@/components/layout/navbar/nav-links";
import { NavActions } from "@/components/layout/navbar/nav-actions";
import { MobileMenu } from "@/components/layout/navbar/mobile-menu";
import { useEffect, useState } from "react";
import LoginForm from "../Login/LoginForm";
import { OwnerSelectionModal } from "../NavbarModal/OwnerSelectionModal";
import RentalAuraPopup from "../NavbarModal/RentalAuraModal";
import { MobileFilters } from "../layout/serch-bar/mobile-filters";
import { FilterChips } from "../layout/serch-bar/filter-chips";
import { SearchInput } from "../layout/serch-bar/search-input";
import { usePathname } from "next/navigation";
import { RegisterForm } from "../auth/RegisterForm";
import { useAuth } from "@/feature/auth/useAuth";

export function Navbar() {
  const auth = useAuth();
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);
  const [isProfileRatingModalOpen, setIsProfileRatingModalOpen] = useState(false);

  const pathname = usePathname();

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

  const isHome = pathname === "/";
  const isDashboard = pathname === "/dashboard";
  const isDesktop = !mobile;

  const showBottomSection = !isDashboard;

  const showSearchBelow = isHome || (!isHome && mobile);

  const showDesktopFilters = isDesktop && !isDashboard;
  const showMobileFilters = mobile && !isDashboard;

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
              <Logo mobile={mobile} />
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
                isAuthenticated={auth.isAuthenticated}
                user={auth.user}
                setIsOpen={setIsOpen}
                setIsPostPopupOpen={setIsPostPopupOpen}
                setIsProfileRatingModalOpen={setIsProfileRatingModalOpen}
              />
            </div>
            <div className="lg:hidden">
              <MobileMenu setIsPostPopupOpen={setIsPostPopupOpen} />
            </div>
          </div>
        </header>

        <div className="items-center px-6 lg:hidden">{mobile && <NavLinks />}</div>

        {/* LOGIN MODAL – self managed */}
        <LoginForm open={isOpen} onClose={() => setIsOpen(false)} />

        <RegisterForm
          open={registerOpen}
          onClose={() => setRegisterOpen(false)}
          onOpenLogin={() => {
            setRegisterOpen(false);
            setIsOpen(true);
          }}
        />

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

      {showBottomSection && (
        <section className="flex w-full justify-center py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4">
            {showSearchBelow && (
              <div className="flex w-full justify-center">
                <SearchInput />
              </div>
            )}

            {showDesktopFilters && (
              <div className="hidden w-full justify-center lg:flex">
                <FilterChips />
              </div>
            )}

            {showMobileFilters && (
              <div className="flex w-full justify-center lg:hidden">
                <MobileFilters />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
