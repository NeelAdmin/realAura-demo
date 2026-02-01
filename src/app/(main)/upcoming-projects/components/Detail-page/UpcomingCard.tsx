import Image from "next/image";
import { Property } from "@/types/index";
import { ChevronRight } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

type Props = {
  property: Property;
  upcoming?: boolean;
  height?: number;
};

export function UpcomingCard({ property, height }: Props) {
  return (
    <div
      className="
    relative group
    flex-shrink-0
    w-[85vw] sm:w-[320px] lg:w-full
    snap-start
  "
    >
      <div
        className="
          pointer-events-none
          absolute -inset-2
          rounded-[14px]
          bg-gray-200/70
          opacity-0
          scale-[0.96]
          transition-all
          duration-300
          ease-out
          group-hover:opacity-100
          group-hover:scale-100
        "
      />
      <div className="relative z-10 overflow-hidden w-full rounded-md bg-white">
        <div className="overflow-hidden w-full rounded-md">
          <div className="relative w-full">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/3]">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover rounded-[12px]"
                priority
              />
            </div>

            <button className="absolute top-3 right-3 rounded-full p-2">
              <Image src="/images/Vector.svg" alt="Wishlist" width={22} height={22} />
            </button>

            <button className="absolute bottom-3 left-3 flex items-center gap-1 rounded-sm bg-black/70 px-2 py-1 text-xs font-medium text-white">
              <p>More Details</p>
              <ChevronRight size={14} />
            </button>

            <span className="absolute right-3 bottom-3 rounded-sm bg-black/70 px-2 py-1 text-xs text-white">
              {property.price}
            </span>

            {property.openTime && (
              <div className="absolute bottom-0 w-full bg-green-600 px-2 py-2 text-center text-xs font-semibold text-white">
                {property.openTime}
              </div>
            )}
          </div>

          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-semibold whitespace-nowrap">{property.name}</h3>

              <div className="text-secondary flex items-center gap-1 text-xs">
                <Image
                  src="/images/location.svg"
                  alt="Location"
                  width={12}
                  height={15}
                  className="shrink-0"
                />
                <p className="leading-none">{property.location}</p>
              </div>
            </div>

            <div className="text-muted-foreground mt-3 flex flex-wrap h-[25px] items-center justify-between text-[13px]">
              <span className="flex items-center gap-[4px]">
                <Image src="/images/area.svg" alt="Area" width={14} height={14} />
                {property.sqft}
              </span>

              <span className="flex items-center gap-[4px]">
                <Image src="/images/floor.svg" alt="Floor" width={14} height={14} />
                {property.floor}
              </span>

              <span className="flex items-center gap-[4px] truncate whitespace-nowrap">
                <Image src="/images/furnished.svg" alt="Furnished" width={14} height={14} />
                {property.furnishedType}
              </span>

              <span className="flex items-center gap-[4px] truncate whitespace-nowrap">
                <Image src="/images/available.svg" alt="Open Time" width={14} height={14} />
                {property.availableTime}
              </span>
            </div>

            {property.openTime && (
              <div className="mt-4 hidden sm:flex items-center justify-between gap-2">
                <div className="h-[30px] rounded-[6px] bg-green-600 p-2 text-center text-xs font-semibold text-white">
                  {property.openTime}
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/images/wp.svg" alt="Wishlist" width={22} height={22} />
                  <Image src="/images/share.svg" alt="Wishlist" width={22} height={22} />
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}