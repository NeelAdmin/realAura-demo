"use client";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/feature/auth/authSlice";
import { SIDEBAR_CONFIG } from "./sidebar.config";
import SidebarSection from "./SidebarSection";

type Props = {
  notifications?: Record<string, number>;
};

export default function Sidebar({ notifications }: Props) {
  const user = useSelector(selectCurrentUser);

  if (!user) return null;

  return (
    <aside className="h-screen w-72 space-y-4 overflow-y-auto bg-white p-4 shadow-xl">
      {SIDEBAR_CONFIG.map((section) => (
        <SidebarSection
          key={section.title}
          section={section}
          role={user.role}
          notifications={notifications}
        />
      ))}
    </aside>
  );
}
