import Image from "next/image"

export function SearchInput() {
  return (
    <div className="flex h-14 w-full items-center rounded-md bg-muted lg:px-4 pr-4">
      {/* City */}
      <div className="hidden lg:block">
      <button className="flex items-center gap-2 border-r border-border pr-4 text-sm font-medium ">
        Bengaluru
        <span>▾</span>
      </button>
      </div>

      {/* Input */}
      <input
        placeholder="Search by project, property, or location"
        className="ml-4 flex-1 bg-transparent text-sm outline-none"
      />

      {/* Icon */}
      <Image src="/images/search-normal.png" alt="Search" width={18} height={18} />
    </div>
  )
}
