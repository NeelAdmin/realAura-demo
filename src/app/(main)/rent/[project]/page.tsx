"use client"

import { PropertyDetailCard } from "@/app/(main)/rent/components/Detail-page/PropertyDetailCard"
import { DistanceCalculator } from "@/app/(main)/rent/components/distance-calculator"
import Amenities from "@/app/(main)/rent/components/Detail-page/Amenities"
import dynamic from "next/dynamic"
import { sarjapura } from "@/components/layout/property-section/property.mock"
import { UpcomingCard } from "../components/Detail-page/UpcomingCard"
import { AdditionalDetail } from "../components/Detail-page/AdditionalDetail"
import { Tabs } from "@/components/ui/Tabs"
import { SocietyAmenities } from "../components/Detail-page/SocietyAmenities"
import { Description } from "../components/Detail-page/Description"

const LeafletMap = dynamic(
  () => import("@/app/(main)/rent/components/Detail-page/LocationMap"),
  { ssr: false }
)

type Props = {
  params: {
    project: string
  }
}

export default function ProjectPage({ params }: Props) {

  const tabs = [
    {
      id: "map",
      label: "Map",
      component: <div className="space-y-6">  <DistanceCalculator wnatBg={false} />
        <LeafletMap center={[12.9716, 77.5946]} /></div>
    },
    {
      id: "description",
      label: "Description",
      component: <Description />
    },
    {
      id: "amenities",
      label: "Society Amenities",
      component: <SocietyAmenities />
    }
  ]


  return (
    <section className="w-full py-6">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* LEFT — 70% */}
          <div className="w-full lg:w-[68%] xl:w-[70%] space-y-6 sm:space-y-8">
            <PropertyDetailCard />
            <AdditionalDetail />



            {/* Tabs Component */}
            <Tabs
              tabs={tabs}
              defaultTab="map"
              className="mt-8"
              tabClassName="py-1 text-[11px]"
            />

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