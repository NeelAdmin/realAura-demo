"use client";

import { useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavActions } from "./nav-actions";
import { useAuth } from "@/feature/auth/useAuth";
import SidebarDrawer from "@/app/(main)/dashboard/components/sidebar/SidebarDrawer";
import { SearchInput } from "../serch-bar/search-input";

export default function DashboardNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const auth = useAuth();

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden border-b border-gray-200 bg-white px-6 py-4 md:flex">
        <div className="flex w-full items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Search - Center */}
          <div className="mx-8 max-w-2xl flex-1">
            <div className="relative">
              <SearchInput />
            </div>
          </div>

          {/* NavActions - Right */}
          <div className="flex items-center">
            <NavActions
              isAuthenticated={auth.isAuthenticated}
              user={auth.user}
              setIsOpen={() => {}}
              setIsPostPopupOpen={() => {}}
              setIsProfileRatingModalOpen={() => {}}
            />
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <div className="flex w-full items-center justify-between">
          {/* chevron - Left */}
          <ChevronLeft className="h-6 w-6" />
          {/* Search - Center */}
          <div className="mx-4 flex-1">
            <div className="relative">
              <SearchInput />
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      <SidebarDrawer
        isMobile={true}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
