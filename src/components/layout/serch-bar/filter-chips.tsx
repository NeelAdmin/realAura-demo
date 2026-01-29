import { filters } from "./mock";
import Image from "next/image";

export function FilterChips() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button className="bg-muted flex items-center gap-2 rounded-[5px] px-4 py-2 text-sm font-medium">
        <Image src="/images/Filter Icon.svg" alt="Filter" width={12} height={10} />
        Filters
      </button>

      {filters.map((item) => (
        <button key={item.label} className="bg-muted rounded-[5px] px-4 py-2 text-sm font-semibold">
          {item.label}
        </button>
      ))}
    </div>
  );
}
