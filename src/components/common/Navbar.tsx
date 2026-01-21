"use client"

import { Logo } from "@/components/layout/navbar/logo"
import { NavLinks } from "@/components/layout/navbar/nav-links"
import { NavActions } from "@/components/layout/navbar/nav-actions"
import { MobileMenu } from "@/components/layout/navbar/mobile-menu"
import { useEffect, useState } from "react"

export function Navbar() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkIfMobile = () => {
                setMobile(window.innerWidth < 1024)
            }

            checkIfMobile()
            window.addEventListener('resize', checkIfMobile)
            return () => window.removeEventListener('resize', checkIfMobile)
        }
    }, [])
    return (
        <div className="flex flex-col items-start gap-2">
        <header className={"w-full border-b border-border " + (mobile ? "bg-black" : "bg-background")}>
            <div className="flex h-20 max-w-7xl items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Logo mobile={mobile} />
                </div>

                <div className="hidden items-center gap-10 lg:flex">
                    <NavLinks />
                </div>
                <div className="hidden items-center gap-10 lg:flex">
                    <NavActions />
                </div>
                <div className="lg:hidden">
                    <MobileMenu />
                </div>
            </div>
        </header>
        <div className="lg:hidden items-center px-6">
        {mobile && <NavLinks />}
        </div>
        </div>
    )
}
