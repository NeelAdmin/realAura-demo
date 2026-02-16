"use client";

import Image from "next/image";
import { Pencil, Trash2, MessageCircle } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

type PropertyStatus = "Completed";

interface Property {
    id: number;
    invoice: string,
    RecipientName: string;
    date: string;
    location: string;
    status: PropertyStatus;
}

export default function PaymentHistorySection() {
    const properties: Property[] = [
        {
            id: 1,
            invoice: "INV-001",
            RecipientName: "Rahul Verma",
            date: "2023-01-01",
            location: "Panthur",
            status: "Completed",
        },
        {
            id: 2,
            invoice: "INV-002",
            RecipientName: "Rahul Verma",
            date: "2023-01-01",
            location: "Panthur",
            status: "Completed",
        },
        {
            id: 3,
            invoice: "INV-003",
            RecipientName: "Rahul Verma",
            date: "2023-01-01",
            location: "Panthur",
            status: "Completed",
        },
    ];

    return (
        <section className="space-y-6 px-6 pt-4">

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block">
                <table className="w-full border-separate border-spacing-y-4">
                    <thead>
                        <tr className="text-left text-sm font-semibold text-black">
                            <th>Invoice</th>
                            <th>Recipient Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th className="text-right pr-6">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {properties.map((property) => (
                            <tr
                                key={property.id}
                                className="bg-white backdrop-blur-[8px] 
                           shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]
                           rounded-[5px] p-6 text-gray-500"
                            >
                                <td className="p-6">
                                    ID : {property.invoice}
                                </td>

                                <td className="font-medium text-[15px]">
                                    {property.RecipientName}
                                </td>

                                <td className="text-[13px]">
                                    {property.date}
                                </td>

                                <td className="text-[13px]">
                                    {property.location}
                                </td>

                                <td>
                                    <StatusBadge status={property.status} />
                                </td>

                                <td className="pr-6">
                                    <div className="flex justify-end gap-4">
                                        <Image src="/images/telephone.svg" alt="telephone" width={20} height={20} />
                                        <Image src="/images/wp.svg" alt="whatsapp" width={20} height={20} />
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
                        className="bg-white p-4 
                       shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]"
                    >
                        {/* TOP */}
                        <div className="flex gap-4">

                            <div className="flex flex-col gap-1 text-[12px] font-medium text-black">
                                <p><span className="text-[#717171]">Invoice : </span>{property.invoice}</p>
                                <p>
                                   <span className="text-[#717171]">Receipt Name : </span> {property.RecipientName}
                                </p>
                                <p><span className="text-[#717171]">Date : </span>{property.date}</p>
                                <p>
                                   <span className="text-[#717171]">Location : </span> {property.location}
                                </p>
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                             <span className="text-[12px] text-[#717171]">Status : </span><StatusBadge status={property.status} />
                             </div>

                            <div className="flex gap-4">
                                <Image src="/images/telephone.svg" alt="telephone" width={13} height={13} />
                                <Image src="/images/wp.svg" alt="whatsapp" width={13} height={13} />
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
        case "Completed":
            return <span className={`${base} bg-[#E1FFE3] text-[#00C90D]`}>{status}</span>;

    }
}



