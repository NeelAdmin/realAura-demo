"use client";

import { Building, Users, FileText, TrendingUp } from "lucide-react";
import StatCard from "./owner/StatCard";
import OfferBanner from "@/app/(main)/dashboard/components/owner/OfferBanner";

export default function OwnerDashboard() {
  const stats = [
    { title: "Total Properties", value: "12", icon: Building, bgColor: "#FFDCD7" },
    { title: "Active Tenants", value: "8", icon: Users, bgColor: "#FFDCD7" },
    {
      title: "Monthly Revenue",
      value: "20",
      icon: TrendingUp,
      bgColor: "#FFDCD7",
    },
    { title: "Pending Requests", value: "49", icon: FileText, bgColor: "#FFDCD7" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <OfferBanner
        imageSrc="/images/owner/grab image.svg"
        description="Limited-Time Offer: Best Property Deals Available Now!"
      />
    </div>
  );
}
