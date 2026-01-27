import { SearchInput } from "./search-input";
import { FilterChips } from "./filter-chips";
import { MobileFilters } from "./mobile-filters";

export function SearchBar({
  isHeader,
  isMobile,
  isSearchInputVisible,
  isChipVisible,
}: {
  isHeader?: boolean;
  isMobile?: boolean;
  isSearchInputVisible?: boolean;
  isChipVisible?: boolean;
}) {
  console.log(isMobile, "isSearchInputVisible", isChipVisible);

  return (
    <section className="flex w-full justify-center bg-green-500 py-6">
      <div className="flex w-full max-w-7xl flex-col items-center gap-4 px-4">
        {!isMobile && isSearchInputVisible && (
          <div className="flex w-full justify-center">
            <SearchInput />
          </div>
        )}
        {!isHeader && !isMobile && isChipVisible && (
          <div>
            <div className="hidden lg:block">
              <FilterChips />
            </div>
            <div className="lg:hidden">
              <MobileFilters />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
