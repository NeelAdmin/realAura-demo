"use client"

import Image from "next/image"
import { UpcomingProperty } from "../types"
import { AppButton } from "@/components/ui/AppButton"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"


type Props = {
  property: UpcomingProperty
}

export function UpcomingPropertyCard({ property }: Props) {
  const router = useRouter()

  return (
    <div
      className="
        w-full
        bg-[#F8F8F9] shadow-[0px_4px_4px_0px_#DDDDDD40]
        rounded-[10px]
        pt-[15px] pr-[20px] pb-[15px] pl-[20px]
      "
      onClick={() => {
        router.push(`/upcoming-projects/${property.id}`)
      }}
    >
      {/* TOP */}
      <div className="flex flex-col gap-[30px] lg:flex-row">

        {/* IMAGE */}
        <div
          className="
            relative
             w-full
            lg:w-[58%]
            xl:w-[60%]
            aspect-[695/530]
            rounded-[15px]
            overflow-hidden
          "
        >
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />

          {/* TAGS */}
          <div className="absolute right-4 top-4 flex gap-2">
            <AppButton
              label="Upcoming Project"
              variant="outline-gradient"
              className="
    h-7 lg:h-8
    px-3 lg:px-4
    text-[12px] lg:text-[14px]
  "
            />

            <AppButton
              label="RERA Approved"
              className="h-7 lg:h-8
        px-3 lg:px-4
        text-[12px] lg:text-[14px]"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] lg:text-[18px] font-semibold">
              {property.name}
            </h3>

            <span className="text-[10px] lg:text-sm text-[#717171] flex items-center gap-2">
              <Image src="/images/location.svg" alt="location icon" width={14} height={14} />
              <p>{property.location}</p>
            </span>
          </div>

          <ul className="space-y-2 text-[13px] lg:text-[14px] font-[500]">
            <li>Total Units: {property.totalUnits}</li>
            <li>BHK: {property.bhk}</li>
            <li>Total Tower: {property.totalTower}</li>
            <li>Project Size: {property.projectSize}</li>
            <li>
              Price:{" "}
              <span className="text-secondary-end">
                {property.price}
              </span>
            </li>
            <li>Launch Date: {property.launchDate}</li>
          </ul>

          <button className="text-sm font-bold flex items-center gap-2">
            <p>More Details</p> <Image src="/images/ChevronRight.svg" alt="chevron right" width={4} height={4} />
          </button>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div
        className="
    mt-6 bg-white

    flex flex-col gap-3
    lg:flex-row lg:items-center lg:justify-between

    px-3 py-3
    lg:px-4 lg:py-4
  "
      >
        {/* LEFT TAGS */}
        <div className="flex flex-wrap justify-between gap-2 lg:gap-3">
          <AppButton
            label="Area : 1080 sqft"
            className="
        h-7 lg:h-8
        px-3 lg:px-4
        text-[12px] lg:text-[14px]
        rounded-[10px]
        bg-[#FEF9C3]
        border border-[#FDE047]
        text-black
      "
          />

          <AppButton
            label="RERA APPROVED"
            className="
        h-7 lg:h-8
        px-3 lg:px-4
        rounded-[10px]
        text-[12px] lg:text-[14px]
      "
          />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center justify-between gap-3 lg:gap-4">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/wp.svg"
              alt="whatsapp"
              width={18}
              height={18}
              className="lg:w-[22px] lg:h-[22px]"
            />
            <Image
              src="/images/telephone.svg"
              alt="telephone"
              width={18}
              height={18}
              className="lg:w-[22px] lg:h-[22px]"
            />
            <Image
              src="/images/share.svg"
              alt="share"
              width={18}
              height={18}
              className="lg:w-[22px] lg:h-[22px]"
            />
          </div>

          {/* CTA */}
          <AppButton
            label="SCHEDULE A VISIT"
            className="
        h-7 lg:h-8
        px-3 lg:px-4
        text-[12px] lg:text-[14px]
      "
          />
        </div>
      </div>


    </div>
  )
}
