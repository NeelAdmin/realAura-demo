import { cn } from "@/lib/cn"

const navItems = [
    { label: "Rent", href: "#" },
    { label: "Sell", href: "#", active: true },
    { label: "Upcoming Projects", href: "#" },
]

export function NavLinks() {
    return (
        <nav className="flex items-center gap-6 sm:gap-10">
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                        "relative transition-colors bg-clip-text",

                        "text-[16px] font-semibold sm:text-base sm:font-bold md:text-lg md:font-[800]",

                        "after:absolute after:left-0 after:-bottom-1 after:h-[2px] sm:after:h-[3px] after:w-full after:rounded-full after:transition-all",

                        item.active
                            ? "text-transparent bg-gradient-to-r from-secondary-start to-secondary-end after:bg-gradient-to-r after:from-secondary-start after:to-secondary-end after:scale-x-100"
                            : "text-primary after:scale-x-0"
                    )}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    )
}
