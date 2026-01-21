import { PremiumSocietyCard } from "./premium-society-card"
import { premiumSocieties } from "./premium-society.mock"
import { MoveUpRight } from "lucide-react"

export function PremiumSocietySection() {
  return (
    <section className="w-full py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            Premium Society in Bengaluru
          </h2>
          <button className="hidden lg:flex text-xs font-medium items-center gap-1">
            See All Society 
            <MoveUpRight size={14} />
          </button>
        </div>

        <div
          className="
            flex gap-4 overflow-x-auto
            lg:grid lg:grid-cols-4 lg:gap-6
          "
        >
          {premiumSocieties.map((society) => (
            <PremiumSocietyCard
              key={society.id}
              society={society}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
