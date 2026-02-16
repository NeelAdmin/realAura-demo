"use client";

import { Eye, ChevronDown } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { useState } from "react";

type PropertyStatus = "Completed";

interface InterestedUser {
    id: number;
    name: string;
}

interface Property {
    id: number;
    propertyName: string;
    interestedUsers: InterestedUser[];
    scheduleDate: string;
    status: PropertyStatus;
}

export default function PaymentHistorySection() {
    const properties: Property[] = [
        {
            id: 1,
            propertyName: "Sobha Sentosa - 3 BHK Apartment",
            interestedUsers: [
                { id: 1, name: "Vinay Kumar" },
                { id: 2, name: "Rahul Jain" },
            ],
            scheduleDate: "09/01/2015",
            status: "Completed",
        },
        {
            id: 2,
            propertyName: "Sobha Sentosa - 3 BHK Apartment",
            interestedUsers: [
                { id: 1, name: "Amit Sharma" },
                { id: 2, name: "Rohit Verma" },
                { id: 3, name: "Karan Singh" },
            ],
            scheduleDate: "10/01/2015",
            status: "Completed",
        },
    ];
    const [openRow, setOpenRow] = useState<number | null>(null);

    const toggleRow = (id: number) => {
        setOpenRow(openRow === id ? null : id);
    };

    return (
        <section className="space-y-6 px-6 pt-4">

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block">
                <table className="w-full border-separate border-spacing-y-4">
                    <thead>
                        <tr className="text-left text-sm font-semibold text-black">
                            <th>Property</th>
                            <th>Interested Users</th>
                            <th>Schedule Visit Date</th>
                            <th>Status</th>
                            <th className="text-right pr-6">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {properties.map((property, index) => (
                            <tr
                                key={property.id}
                                className="shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] rounded-[8px] text-gray-700"
                            >
                                {/* COLUMN 1 */}
                                <td className="p-6 font-medium flex items-center gap-2">
                                    {index + 1}. Interested User Profile
                                    <Eye size={16} className="text-black" />
                                </td>

                                {/* COLUMN 2 */}
                                <td className="p-6 relative">
                                    <div
                                        onClick={() => toggleRow(property.id)}
                                        className="flex items-center gap-2 cursor-pointer select-none"
                                    >
                                        <span className="font-medium">
                                            {property.interestedUsers.length}){" "}
                                            {property.interestedUsers[0].name}
                                        </span>

                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${openRow === property.id ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>

                                    {openRow === property.id && (
                                        <div className="absolute mt-3 w-64 bg-white border rounded-md shadow-lg z-20">
                                            {property.interestedUsers.map((user, index) => (
                                                <div
                                                    key={user.id}
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 transition"
                                                >
                                                    {index + 1}. {user.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </td>

                                {/* COLUMN 3 */}
                                <td className="p-6 text-sm">{property.scheduleDate}</td>

                                {/* COLUMN 4 */}
                                <td className="p-6">
                                    <StatusBadge status={property.status} />
                                </td>

                                {/* COLUMN 5 */}
                                <td className="p-6 pr-6 text-right">
                                    <AppButton
                                        label="View"
                                        className="h-7 px-6 text-sm bg-[#D4A017] hover:bg-[#c39212] text-white"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="space-y-4 md:hidden">
                {properties.map((property) => (
                    <MobilePropertyCard key={property.id} property={property} />
                ))}
            </div>

        </section>

    );
}

function StatusBadge({ status }: { status: PropertyStatus }) {
    const base = "rounded-full px-4 py-1 text-xs font-medium";

    switch (status) {
        case "Completed":
            return (
                <span className={`${base} bg-[#E1FFE3] text-[#00C90D]`}>
                    {status}
                </span>
            );
    }
}




function MobilePropertyCard({ property }: { property: Property }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="bg-[#F3F3F3] p-4 rounded-lg space-y-1
      shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]"
        >
            <div className="font-medium">
                {property.propertyName}
            </div>
            {/* PROPERTY NAME */}
            <div className="flex items-center gap-2 font-semibold text-sm text-black">
                <span>Interested User Profile</span>
                <Eye size={16} />
            </div>

            {/* INTERESTED USERS */}
            <div className="mt-3">
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between cursor-pointer text-sm font-medium"
                >
                    <span>
                        {property.interestedUsers.length}{" "}
                        {property.interestedUsers[0].name}
                    </span>

                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                            }`}
                    />
                </div>

                {/* DROPDOWN */}
                {open && (
                    <div className="mt-2 bg-white rounded-md border shadow-sm">
                        {property.interestedUsers.map((user, index) => (
                            <div
                                key={user.id}
                                className="px-3 py-2 text-sm border-b last:border-none"
                            >
                                {index + 1}. {user.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* SCHEDULE DATE */}
            <div className="mt-3 text-sm">
                <span className="text-[#717171]">Schedule Visit Date : </span>
                {property.scheduleDate}
            </div>

            {/* STATUS + BUTTON */}
            <div className="mt-4 flex items-center justify-between">
                <StatusBadge status={property.status} />

                <AppButton
                    label="View"
                    className="h-8 px-4 text-sm bg-[#D4A017] hover:bg-[#c39212] text-white"
                />
            </div>
        </div>
    );
}
