import Image from "next/image"

type StatsItem = {
  label: string
  value: string | number
  icon: string
}

export function PropertyStatsRow({ stats }: { stats: StatsItem[] }) {
  return (
    <div
      className="
        bg-[#F3F4F6]
        rounded-sm
        overflow-hidden
      "
    >
      {/* Desktop: Horizontal */}
      <div
        className="
          hidden md:grid
          grid-cols-[repeat(auto-fit,minmax(140px,1fr))]
          divide-x divide-gray-300
          p-0 md:p-4
        "
      >
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} center />
        ))}
      </div>

      {/* Mobile: Vertical */}
      <div className="md:hidden divide-y divide-gray-200">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}

function Stat({
  label,
  value,
  icon,
  center = false,
}: {
  label: string
  value: string | number
  icon: string
  center?: boolean
}) {
  return (
    <div
      className={`
        flex items-center gap-3
        px-4 py-3
        ${center ? "justify-center text-center" : ""}
      `}
    >
      <Image src={icon} alt={label} width={20} height={20} />

      <div className="leading-tight flex items-center gap-1 lg:block">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  )
}
