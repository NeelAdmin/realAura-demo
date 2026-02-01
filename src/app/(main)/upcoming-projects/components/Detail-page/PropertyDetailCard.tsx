import { propertyDetailMock } from "../../mock"
import { PropertyMediaGallery } from "./PropertyMediaGallery"
import { PropertyActionBar } from "./PropertyActionBar"
import { PropertyStatsRow } from "./PropertyStatsRow"
import { AppButton } from "@/components/ui/AppButton"

export function PropertyDetailCard() {
  const property = propertyDetailMock

  return (
    <div className="w-full rounded-xl bg-[#F8F8F9] p-4 shadow-[0px_4px_4px_0px_#DDDDDD40] space-y-6">
      <PropertyMediaGallery
        media={property.media}
        tags={property.tags}
      />

      <div>
        <PropertyActionBar
          title={`${property.title} - ${property.location}`}
          priceRange={property.priceRange}
          status={property.status}
        />

          <PropertyStatsRow stats={property.stats} />
        <AppButton
          label="Download Brochure"
          className="h-9 w-full text-sm "
        />
      </div>
    </div>
  )
}
