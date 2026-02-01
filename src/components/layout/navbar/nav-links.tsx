import { cn } from "@/lib/cn";

const navItems = [
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "#", active: true },
  { label: "Upcoming Projects", href: "/upcoming-projects" },
];

export function NavLinks() {
  return (
    <nav className="flex items-center gap-6 sm:gap-10">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            "relative bg-clip-text transition-colors",
            "sm:font-lg text-[16px] font-bold sm:text-base md:text-lg md:font-[800]",
            "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:transition-all sm:after:h-[3px]",
            item.active
              ? "from-secondary-start to-secondary-end after:from-secondary-start after:to-secondary-end bg-gradient-to-r text-transparent after:scale-x-100 after:bg-gradient-to-r"
              : "text-primary after:scale-x-0"
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
