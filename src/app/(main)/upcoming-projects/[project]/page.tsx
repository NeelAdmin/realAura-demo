"use client"

import { PropertyDetailCard } from "@/app/(main)/upcoming-projects/components/Detail-page/PropertyDetailCard"
import { DistanceCalculator } from "@/app/(main)/upcoming-projects/components/distance-calculator"
import Amenities from "@/app/(main)/upcoming-projects/components/Detail-page/Amenities"
import dynamic from "next/dynamic"
import { sarjapura } from "@/components/layout/property-section/property.mock"
import { UpcomingCard } from "../components/Detail-page/UpcomingCard"
import { PropertyCard } from "@/components/layout/property-section/property-card"

const LeafletMap = dynamic(
  () => import("@/app/(main)/upcoming-projects/components/Detail-page/LocationMap"),
  { ssr: false }
)

type Props = {
  params: {
    project: string
  }
}

export default function ProjectPage({ params }: Props) {


  return (
    <section className="w-full py-3">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* LEFT — 70% */}
          <div className="w-full lg:w-[68%] xl:w-[70%] space-y-6 sm:space-y-8">
            <PropertyDetailCard />
            <Amenities />
            <DistanceCalculator wnatBg={false} />
            <LeafletMap center={[12.9716, 77.5946]} />

            <h3 className=" hidden lg:flex text-[16px] font-bold">Upcoming Projects in Velundur</h3>

            <div
              className="
              hidden lg:flex
              px-2 gap-4
              items-center
              scrollbar-hide
              snap-x snap-mandatory
            "
            >
              <PropertyCard property={sarjapura[0]} />
              <PropertyCard property={sarjapura[0]} />
            </div>
          </div>

          {/* RIGHT — 30% */}
          <div className="w-full lg:w-[28%] xl:w-[30%] space-y-6">
            <h3 className="text-[16px] font-semibold">Recommended Properties</h3>

            <div
              className="
              px-2 w-full
              flex gap-4
              flex-col
              md:flex-row
              lg:flex-col
              items-center
              scrollbar-hide
              snap-x snap-mandatory
            "
            >
              <UpcomingCard property={sarjapura[0]} />
              <UpcomingCard property={sarjapura[0]} />
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}