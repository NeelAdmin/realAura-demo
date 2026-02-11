"use client";

import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectIsLoading,
} from "@/feature/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import OwnerDashboard from "@/app/(main)/dashboard/components/ownerDashboard";
import TenantDashboard from "@/app/(main)/dashboard/components/TenateDashboard";
import Sidebar from "./components/sidebar/Sidebar";

export default function DashboardPage() {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      router.replace("/");
    }
  }, [isLoading, isAuthenticated, user]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading dashboard...</div>;
  }

  if (!isAuthenticated || !user) return null;

  /* -------------------- ROLE BASED DASHBOARD -------------------- */
  const renderDashboard = () => {
    switch (user.role) {
      case "OWNER":
        return <OwnerDashboard />;
      case "TENANT":
        return <TenantDashboard />;
      default:
        return (
          <div className="flex h-screen items-center justify-center">
            <p className="text-red-600">Unauthorized role access</p>
          </div>
        );
    }
  };

  /* -------------------- FINAL LAYOUT -------------------- */
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">{renderDashboard()}</div>
    </div>
  );
}
