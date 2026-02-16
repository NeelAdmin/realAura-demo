"use client";

import React from "react";

type DocumentItem = {
    id: number;
    title: string;
    link: string;
};

const mockDocuments: DocumentItem[] = [
    {
        id: 1,
        title: "View Aadhar Card",
        link: "#",
    },
    {
        id: 2,
        title: "View Pan Card",
        link: "#",
    },
    {
        id: 3,
        title: "View Company Identity Card",
        link: "#",
    },
];

const DocumentsSection = () => {
    return (
        <div className= "rounded-sm">
            <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Documents & Agreements
                </h2>
            </div>

            <div>
                {mockDocuments.map((doc, index) => (
                    <div key={doc.id}>
                        <div className="flex items-center justify-between px-6 py-5">
                            <p className="text-gray-700 font-medium">{doc.title}</p>

                            <a
                                href={doc.link}
                                className="text-gray-700 underline hover:text-black transition-colors"
                            >
                                View
                            </a>
                        </div>

                        {/* Divider */}
                        {index !== mockDocuments.length - 1 && (
                            <div className="h-[1px] bg-gray-300 mx-6" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentsSection;
