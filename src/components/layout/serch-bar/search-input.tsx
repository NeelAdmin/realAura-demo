import Image from "next/image";
import { usePathname } from "next/navigation";

export function SearchInput() {
  const isDashboard = usePathname() === "/dashboard";
  return (
    <div className="bg-muted flex h-14 w-full items-center rounded-md pr-2 lg:px-4">
      {!isDashboard && (
        <div className="hidden lg:block">
          <button className="border-border flex items-center gap-2 border-r pr-4 text-sm font-medium">
            Bengaluru
            <span>▾</span>
          </button>
        </div>
      )}

      <input
        placeholder="Search by project, property, or location"
        className="ml-4 flex-1 bg-transparent text-xs outline-none placeholder:text-[#000000] lg:text-sm"
      />

      <Image
        src="/images/search-normal.png"
        alt="Search"
        width={12}
        height={12}
        className="h-[18px] w-[18px]"
      />
    </div>
  );
}
