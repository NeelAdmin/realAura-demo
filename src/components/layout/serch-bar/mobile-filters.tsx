
import { ChevronLeft, ChevronRight } from "lucide-react"

export function MobileFilters() {
    return (
        <div className="flex items-center gap-3">
            <button className="h-6 w-6 rounded-sm bg-muted flex items-center justify-center">
                <ChevronLeft size={16} />
            </button>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                <button className="rounded-sm bg-muted px-2 py-2 text-xs">
                    2 & 3 BHK
                </button>
                <button className="rounded-sm bg-muted px-2 py-2 text-xs">
                    3 & 4 BHK
                </button>
                <button className="rounded-sm bg-muted px-2 py-2 text-xs">
                    4 BHK +
                </button>
            </div>
            <button className="h-6 w-6 rounded-sm bg-muted flex items-center justify-center">
                <ChevronRight size={16} />
            </button>
        </div>
    )
}
