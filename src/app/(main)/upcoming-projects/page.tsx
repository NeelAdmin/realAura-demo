import { upcomingProperties } from "./mock"
import { UpcomingPropertyCard } from "./components/upcoming-property-card"
import { DistanceCalculator } from "./components/distance-calculator"
import { PremiumSocietyMiniCard } from "./components/premium-society-mini-card"
import { PremiumSocietyCard } from "@/components/layout/premium-society/premium-society-card"
import { premiumSocieties } from "@/components/layout/premium-society/premium-society.mock"

export default function UpcomingPropertiesPage() {
  return (
    <section className="w-full py-6">
      <div className="mx-auto max-w-7xl">
        <div
          className="
        flex flex-col gap-8
        lg:flex-row lg:items-start
      "
        >
          {/* LEFT */}
          <div
            className="
          w-full
          lg:w-[68%]
          xl:w-[70%]

          space-y-8
        "
          >
            {upcomingProperties.map((property) => (
              <UpcomingPropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div
            className="
          w-full
          flex flex-col items-start
          lg:w-[32%]
          xl:w-[30%]
          space-y-6
        "
          >
            <div className="p-4 md:p-0">
              <DistanceCalculator wnatBg={true} />
            </div>
            <div
  className="
    w-full
    flex gap-4
    px-4 md:px-0
    overflow-x-auto scrollbar-hide
    flex-nowrap

    /* Desktop */
    lg:flex-col lg:overflow-visible
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
        </div>
      </div>
    </section>

  )
}
