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
    <aside className="h-screen w-72 overflow-y-auto bg-white py-4 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
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
