import { SearchInput } from "./search-input"
import { FilterChips } from "./filter-chips"
import { MobileFilters } from "./mobile-filters"

export function SearchBar() {
    return (
        <section className="w-full bg-white py-6 flex justify-center">
            <div className="flex flex-col items-center gap-4 max-w-7xl w-full px-4">
                {/* Search Bar */}
                <div className="w-full">
                    <SearchInput />
                </div>

                {/* Desktop Filters */}
                <div>
                    <div className="hidden lg:block">
                        <FilterChips />
                    </div>
                    <div className="lg:hidden">
                        <MobileFilters />
                    </div>
                </div>
            </div>
        </section>
    )
}
