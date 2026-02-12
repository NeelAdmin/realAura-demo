"use client";

import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectIsLoading,
} from "@/feature/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProfileForm from "../../components/owner/ProfileForm";

export default function OwnerProfilePage() {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      router.replace("/");
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading profile...</div>;
  }

  if (!isAuthenticated || !user) return null;

  if (user.role !== "OWNER") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-600">Access denied. Owner only.</p>
      </div>
    );
  }

  return (
    <div className="">
      <ProfileForm />
    </div>
  );
}
