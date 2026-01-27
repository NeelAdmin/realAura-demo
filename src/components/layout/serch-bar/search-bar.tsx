import { SearchInput } from "./search-input";
import { FilterChips } from "./filter-chips";
import { MobileFilters } from "./mobile-filters";

export function SearchBar() {
  return (
    <section className="flex w-full justify-center bg-green-50 py-6">
      <div className="flex w-full max-w-7xl flex-col items-center gap-4 px-4">
        <div className="w-full">
          <SearchInput />
        </div>

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
  );
}
