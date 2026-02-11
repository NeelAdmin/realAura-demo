"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  bgColor?: string; // icon background color
}

export default function StatCard({ title, value, icon: Icon, bgColor = "#FFDCD7" }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#FFDCD7]`}>
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <p className="text-lg font-medium text-gray-600">{title}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
      </div>
    </div>
  );
}
