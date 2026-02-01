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
        router.push(`/rent/${property.id}`)
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
            <li>
              Price:{" "}
              <span className="text-secondary-end">
                {property.price}
              </span>
            </li>
            <li>Tenat type: {property.tenantType}</li>
            <li>Available From: {property.available}</li>
            <li>Status: {property.status}</li>
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

    px-2 py-3
    lg:px-4 lg:py-4
  "
      >
        {/* LEFT TAGS */}
        <div className="flex flex-wrap gap-2">
          <AppButton
            label="Area : 1080 sqft"
            variant="pill-yellow"
          />

          <AppButton
            label="Semi Furnished"
            variant="pill-pink"
          />

          <AppButton
            label="9th Floor"
            variant="pill-blue"
          />

          <AppButton
            label="Car Park"
            variant="pill-green"
          />
        </div>


        {/* RIGHT ACTIONS */}
        <div className="flex items-center justify-between gap-3 lg:gap-4">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/wp.svg"
              alt="whatsapp"
              width={12}
              height={12}
              className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
            />
            <Image
              src="/images/telephone.svg"
              alt="telephone"
              width={12}
              height={12}
              className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
            />
            <Image
              src="/images/share.svg"
              alt="share"
              width={12}
              height={12}
              className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
            />
          </div>

          {/* CTA */}
          <AppButton
            label="SCHEDULE A VISIT"
            className="
        h-7 lg:h-8
        px-2 lg:px-3
        text-[10px] lg:text-[12px]
      "
          />
        </div>
      </div>


    </div>
  )
}
