"use client";

import Link from "next/link";

type Props = {
  icon: any;
  label: string;
  path: string;
  notificationCount?: number;
};

export default function SidebarItem({ icon: Icon, label, path, notificationCount }: Props) {
  return (
    <Link
      href={path}
      className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        <Icon size={20} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>

      {notificationCount && notificationCount > 0 && (
        <span className="rounded-full bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-white">
          {notificationCount}
        </span>
      )}
    </Link>
  );
}
