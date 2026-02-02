import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/" },
  { label: "Upcoming Projects", href: "/upcoming-projects" },
];

export function NavLinks() {
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center gap-6 sm:gap-10">
      {navItems.map((item) => {
        const isActive = pathname === item.href || 
                        (item.href !== '/' && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "relative bg-clip-text transition-colors",
              "sm:font-lg text-[16px] font-bold sm:text-base md:text-lg md:font-[800]",
              "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:transition-all sm:after:h-[3px]",
              isActive
                ? "from-secondary-start to-secondary-end after:from-secondary-start after:to-secondary-end bg-gradient-to-r text-transparent after:scale-x-100 after:bg-gradient-to-r"
                : "text-primary after:scale-x-0"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
} 