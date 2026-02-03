import { upcomingProperties } from "./mock"
import { UpcomingPropertyCard } from "./components/upcoming-property-card"
import { DistanceCalculator } from "./components/distance-calculator"
import { PremiumSocietyCard } from "@/components/layout/premium-society/premium-society-card"
import { premiumSocieties } from "@/components/layout/premium-society/premium-society.mock"

export default function UpcomingPropertiesPage() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl p-1">
        <div
          className="
        flex flex-col gap-4 lg:gap-6
        lg:flex-row lg:items-start
      "
        >
          {/* LEFT */}
          <div
            className="
          w-full
          lg:w-[68%]
          xl:w-[70%]

          space-y-6
        "
          >
            {upcomingProperties.map((property) => (
              <UpcomingPropertyCard
                key={property.id + 1}
                property={property}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div
            className="
          w-full
          flex flex-col items-center
          lg:w-[32%]
          xl:w-[30%]
          space-y-6
        "
          >
            <div className="px-4 lg:p-4 md:p-0">
              <DistanceCalculator wnatBg={true} />
            </div>
            <div
              className="
    w-full
    flex gap-4
    px-4 pb-6 md:px-6
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
