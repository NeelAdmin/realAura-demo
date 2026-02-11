'use client';

import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectIsLoading,
} from '@/feature/auth/authSlice';
import { redirect } from 'next/navigation';
import OwnerDashboard from '@/app/(main)/dashboard/components/ownerDashboard';
import TenantDashboard from '@/app/(main)/dashboard/components/TenateDashboard';

export default function DashboardPage() {
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);

  /* -------------------- LOADING -------------------- */
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  /* -------------------- NOT AUTHENTICATED -------------------- */
  if (!isAuthenticated || !user) {
    redirect('/'); // or /login
  }

  /* -------------------- ROLE BASED DASHBOARD -------------------- */
  switch (user.role) {
    case 'OWNER':
      return <OwnerDashboard />;

    case 'TENANT':
      return <TenantDashboard />;

    default:
      return (
        <div className="flex h-screen items-center justify-center">
          <p className="text-red-600">
            Unauthorized role access
          </p>
        </div>
      );
  }
}
