// src/components/ui/Tabs.tsx
"use client"

import { useState } from "react"
import { cn } from "@/lib/cn"

interface Tab {
    id: string
    label: string
    component: React.ReactNode
}

interface TabsProps {
    tabs: Tab[]
    defaultTab?: string
    className?: string
    tabClassName?: string
    activeTabClassName?: string
    contentClassName?: string
}

export function Tabs({
    tabs,
    defaultTab,
    className = "",
    tabClassName = "",
    activeTabClassName = "text-yellow-500 border-b-2 border-yellow-500",
    contentClassName = "mt-4",
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

    if (!tabs.length) return null

    return (
        <div className={className} >
            {/* Tabs header */}
            <div className="flex gap-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "transition-colors duration-200",
                            activeTab === tab.id
                                ? "text-[#EAB308]"
                                : "text-black hover:text-gray-700",
                            tabClassName
                        )}
                    >
                        <span
                            className={cn(
                                "inline-block font-medium",

                                "text-[11px] lg:text-[19px]",

                                activeTab === tab.id &&
                                "border-b-2 border-yellow-500 pb-[2px]"
                            )}
                        >
                            {tab.label}
                        </span>
                    </button>


                ))}
            </div>

            {/* Content */}
            <div className={contentClassName}>
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
        </div>
    )
}
