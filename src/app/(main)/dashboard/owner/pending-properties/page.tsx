"use client";

import Image from "next/image";
import { Pencil, Trash2, MessageCircle, LucideWheat, Globe, Globe2 } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

type PropertyStatus = "Active" | "Draft" | "Pending" | "Rejected";

interface Property {
  id: number;
  image: string;
  name: string;
  location: string;
  postedOn: string;
  status: PropertyStatus;
}

export default function PropertyManagementSection() {
  const properties: Property[] = [
    {
      id: 1,
      image: "/images/owner/property.svg",
      name: "Sobha Sentosa - 3 BHK Apartment",
      location: "Panthur",
      postedOn: "2023-01-01",
      status: "Pending",
    },
    {
      id: 2,
      image: "/images/owner/property.svg",
      name: "Sobha Sentosa - 3 BHK Apartment",
      location: "Panthur",
      postedOn: "2023-01-01",
      status: "Active",
    },
    {
      id: 3,
      image: "/images/owner/property.svg",
      name: "Sobha Sentosa - 3 BHK Apartment",
      location: "Panthur",
      postedOn: "2023-01-01",
      status: "Rejected",
    },
    {
      id: 4,
      image: "/images/owner/property.svg",
      name: "Sobha Sentosa - 3 BHK Apartment",
      location: "Panthur",
      postedOn: "2023-01-01",
      status: "Draft",
    },
  ];

  return (
    <section className="space-y-6 px-6 py-4">

      {/* ================= BUTTONS ================= */}
      <div className="flex flex-col gap-4 md:flex-row">
        <AppButton
          label="Message us on WhatsApp to list your Property"
          type="button"
          className="h-12 w-full text-[15px] font-semibold text-white"
          icon={<LucideWheat />}
        />
        <AppButton
          label="List your property yourself"
          type="button"
          className="h-12 w-full text-[15px] font-semibold text-white"
          icon={<Globe className="h-5 w-5" />}
        />
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">
        <table className="w-full border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="px-6">Image</th>
              <th>Society Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Posted Date</th>
              <th className="text-right pr-6">Action</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className="bg-white backdrop-blur-[8px] 
                           shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]
                           rounded-[5px]"
              >
                <td className="px-6 py-4">
                  <Image
                    src={property.image}
                    alt={property.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                </td>

                <td className="font-medium text-[15px] text-gray-800">
                  {property.name}
                </td>

                <td className="text-gray-500 text-[13px]">
                  {property.location}
                </td>

                <td>
                  <StatusBadge status={property.status} />
                </td>

                <td>
                  {property.postedOn}
                </td>

                <td className="pr-6">
                  <div className="flex justify-end gap-4">
                    <Pencil className="h-5 w-5 cursor-pointer text-blue-600" />
                    <Trash2 className="h-5 w-5 cursor-pointer text-red-600" />
                    <MessageCircle className="h-5 w-5 cursor-pointer text-green-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-4 md:hidden">
        {properties.map((property) => (
          <div
            key={property.id}
            className="rounded-xl bg-white p-4 
                       shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]"
          >
            {/* TOP */}
            <div className="flex gap-4">
              <Image
                src={property.image}
                alt={property.name}
                width={84}
                height={84}
                className="h-20 w-20 rounded-md object-cover"
              />

              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-gray-800">
                  {property.name}
                </p>
                <p className="text-xs text-gray-500">
                  Location: {property.location}
                </p>
                <p className="text-xs text-gray-500">
                  Posted Date: {property.postedOn}
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-4 flex items-center justify-between">
              <StatusBadge status={property.status} />

              <div className="flex gap-4">
                <Pencil className="h-5 w-5 text-blue-600" />
                <Trash2 className="h-5 w-5 text-red-600" />
                <MessageCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: PropertyStatus }) {
  const base = "rounded-full px-3 py-1 text-xs font-medium";

  switch (status) {
    case "Active":
      return <span className={`${base} bg-green-100 text-green-600`}>{status}</span>;
    case "Rejected":
      return <span className={`${base} bg-[#FFEEF2] text-[#FF0037]`}>{status}</span>;
    case "Pending":
      return <span className={`${base} bg-[#FFF5D7] text-[#C78800]`}>{status}</span>;
    case "Draft":
      return <span className={`${base} bg-[#FFF6DA] text-[#EAB308]`}>{status}</span>;
  }
}

