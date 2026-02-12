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
    <div className="rounded-xl border border-gray-200 bg-gray-50 
                p-4 sm:p-5 md:p-6 lg:p-4 
                shadow-sm transition-all flex flex-col lg:flex-row lg:block items-center ">

      <div className="flex flex-col lg:flex-row items-center 
                  gap-3 lg:gap-2">

        <div className="flex 
                    h-12 w-12 
                    lg:h-10 lg:w-10
                    items-center justify-center 
                    rounded-full bg-[#FFDCD7]">

          <Icon className="h-5 w-5 lg:h-4 lg:w-4" />
        </div>

        <p className="text-base 
                  md:text-lg 
                  lg:text-sm 
                  font-medium text-gray-600 leading-tight">
          {title}
        </p>
      </div>

      <div className="mt-6 lg:mt-4">
        <h2 className="text-2xl 
                   md:text-3xl 
                   lg:text-xl 
                   font-bold text-gray-900">
          {value}
        </h2>
      </div>

    </div>


  );
}
