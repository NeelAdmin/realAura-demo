import Image from "next/image"

const amenities = [
  { label: "Children's Play Area", icon: "/images/Scoiety-Amenities/Icon 1.svg" },
  { label: "Internet", icon: "/images/Scoiety-Amenities/Icon 2.svg" },
  { label: "Recreation Areas", icon: "/images/Scoiety-Amenities/wifi.svg" },
  { label: "Club House", icon: "/images/Scoiety-Amenities/Icon 4.svg" },
  { label: "Security", icon: "/images/Scoiety-Amenities/Icon 5.svg" },
  { label: "Gymnasium", icon: "/images/Scoiety-Amenities/Icon 6.svg" },
  { label: "Swimming Pool", icon: "/images/Scoiety-Amenities/Icon 7.svg" },
  { label: "Jogging Track", icon: "/images/Scoiety-Amenities/Icon 8.svg" },
  { label: "Indoor Games", icon: "/images/Scoiety-Amenities/Icon 9.svg" },
  { label: "Outdoor Sports", icon: "/images/Scoiety-Amenities/Icon 10.svg" },
  { label: "Power Backup", icon: "/images/Scoiety-Amenities/Icon 11.svg" },
  { label: "Lift", icon: "/images/Scoiety-Amenities/Icon 12.svg" },
  { label: "Parking", icon: "/images/Scoiety-Amenities/Icon 13.svg" },
  { label: "CCTV Surveillance", icon: "/images/Scoiety-Amenities/Icon 14.svg" },
  { label: "Garden", icon: "/images/Scoiety-Amenities/Icon 15.svg" },
  { label: "Community Hall", icon: "/images/Scoiety-Amenities/Icon 16.svg" },
  { label: "Fire Safety", icon: "/images/Scoiety-Amenities/Icon 17.svg" },
]


export function SocietyAmenities() {
  return (
    <div className="w-full">
      {/* Grid */}
      <div
        className="
          grid grid-cols-3 gap-y-6 gap-x-4
          sm:grid-cols-5
        "
      >
        {amenities.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div
              className="
                flex items-center justify-center
                h-10 w-10
                sm:h-12 sm:w-12
                md:h-14 md:w-14
              "
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p
              className="
                mt-2 font-medium text-gray-700
                text-[11px]
                sm:text-xs
                md:text-sm
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
