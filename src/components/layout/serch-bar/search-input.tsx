import Image from "next/image";

export function SearchInput() {
  return (
    <div className="bg-muted flex h-14 w-full items-center rounded-md pr-2 lg:px-4">
      <div className="hidden lg:block">
        <button className="border-border flex items-center gap-2 border-r pr-4 text-sm font-medium">
          Bengaluru
          <span>▾</span>
        </button>
      </div>

      <input
        placeholder="Search by project, property, or location"
        className="ml-4 flex-1 bg-transparent text-xs lg:text-sm outline-none placeholder:text-[#000000]"
      />

      <Image src="/images/search-normal.png" alt="Search" width={12} height={12} className="w-[18px] h-[18px]"/>
    </div>
  );
}
