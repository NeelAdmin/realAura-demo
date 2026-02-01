import Image from "next/image"
import React from "react"

interface IAmenity {
  image: string
  area: string
  size: string
  price: string
  availibility: string
}

const AMENITIES: IAmenity[] = [
  {
    image: "/images/amenities.svg",
    area: "Super Area",
    size: "1656 sq.ft | 3 BHK",
    price: "₹ 60,000 - ₹ 80,000",
    availibility: "2026-02-03",
  },
  {
    image: "/images/amenities.svg",
    area: "Super Area",
    size: "1656 sq.ft | 3 BHK",
    price: "₹ 60,000 - ₹ 80,000",
    availibility: "2026-02-03",
  },
  {
    image: "/images/amenities.svg",
    area: "Super Area",
    size: "1656 sq.ft | 3 BHK",
    price: "₹ 60,000 - ₹ 80,000",
    availibility: "2026-02-03",
  },
]

const Amenities = () => {
  return (
    <div className="mt-6 p-4 md:p-0">
      {/* Heading */}
      <h4 className="mb-4 text-sm font-semibold text-gray-900 sm:text-base">
        snn raj etternia Floor Plans & Pricing
      </h4>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AMENITIES.map((amenity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl bg-white p-3 shadow-sm"
          >
            {/* Image */}
            <Image
              src={amenity.image}
              alt="Floor Plan"
              width={72}
              height={72}
              className="rounded-md object-contain"
            />

            {/* Content */}
            <div className="flex flex-col gap-1">
              <p className="text-[11px] font-medium text-gray-500">
                {amenity.area}
              </p>

              <p className="text-xs text-gray-700">
                {amenity.size}
              </p>

              <p className="text-xs font-semibold text-gray-900">
                {amenity.price}
              </p>

              <p className="text-[11px] text-gray-500">
                Available from – {amenity.availibility}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amenities
