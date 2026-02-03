import Image from "next/image"

type StatsItem = {
  label: string
  value: string | number
  icon: string
}

export function PropertyStatsRow({ stats }: { stats: StatsItem[] }) {
  return (
    <div className="bg-[#F3F4F6] rounded-sm overflow-hidden">

      {/* MOBILE */}
      <div className="lg:hidden divide-y divide-gray-300">
        {stats.map((stat ,index) => (
          <MobileStat key={index} {...stat} />
        ))}
      </div>

     {/* Desktop */}
      <div className="hidden lg:block px-4 py-4">
        <div className="flex flex-wrap">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                flex items-center gap-2
                py-4 px-2
                w-1/5
              "
            >
              <Image
                src={stat.icon}
                alt={stat.label}
                width={22}
                height={22}
                className="opacity-70"
              />

              <span className="text-[10px] font-medium text-gray-900 whitespace-nowrap">
                {stat.value}
              </span>

              {/* Vertical divider (not last in row) */}
              {(index + 1) % 5 !== 0 && (
                <span className="ml-auto h-6 w-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

/* ===== Mobile / Tablet stat row ===== */
function MobileStat({ label, value, icon }: StatsItem) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Image src={icon} alt={label} width={16} height={16} />

      <div className="leading-tight">
        <p className="text-xs font-medium text-gray-900">
          {value}
        </p>
      </div>
    </div>
  )
}
