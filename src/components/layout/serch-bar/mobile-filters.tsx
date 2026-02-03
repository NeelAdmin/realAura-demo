import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function MobileFilters() {
  return (
    <div className="flex items-center gap-3">
      <button className="bg-muted flex h-6 w-6 items-center justify-center rounded-sm">
        <ChevronLeft size={16} />
      </button>

      <div className="scrollbar-hide flex gap-2 overflow-x-auto">
        <button className="bg-muted rounded-sm px-2 py-2 text-[11px] font-medium flex gap-1">
          <Image src="/images/Filter Icon.svg" alt="Filter" width={10} height={8} />
          Filters
        </button>
        <button className="bg-muted rounded-sm px-2 py-2 text-[10px] font-medium">3 & 4 BHK</button>
        <button className="bg-muted rounded-sm px-2 py-2 text-[10px] font-medium">4 BHK +</button>
      </div>
      <button className="bg-muted flex h-6 w-6 items-center justify-center rounded-sm">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
