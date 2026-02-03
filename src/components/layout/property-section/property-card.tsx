import Image from "next/image";
import { Property } from "@/types/index";
import { ChevronRight } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { Icon } from "@iconify/react";

type Props = {
  property: Property;
  upcoming?: boolean;
  height?: number;
};

export function PropertyCard({ property, height }: Props) {
  return (
    <div className="relative group">
      <div
        className="
      pointer-events-none
      absolute -inset-2
      hidden lg:block
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
          <div className="p-2 lg:hidden">
            <h3 className="text-md  font-bold whitespace-nowrap">{property.name}</h3>

            <div className="text-secondary flex items-center gap-1 text-xs">
              <Image
                src="/images/home-page/location-yellow.png"
                alt="Location"
                width={12}
                height={height ? height : 15}
                className="shrink-0"
              />
              <p className="text-semibold leading-none">{property.location}</p>
            </div>
          </div>

          <div className="relative w-full sm:w-full lg:w-auto">
            <div className="relative min-h-[380px] w-full overflow-hidden md:aspect-[597/365] md:min-h-0">
              <Image src={property.image} alt={property.name} fill className="object-cover" priority />

              {/* Mobile Action Bar */}
              <div className="absolute bottom-8 left-0 right-0 z-10 w-full px-2 py-2 text-xs font-semibold text-white lg:hidden">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-1">
                    <p className="text-[13px] leading-none">More Details</p>
                    <ChevronRight size={14} />
                    <Image
                      src="/images/ChevronRight.svg"
                      alt="right"
                      height={5}
                      width={5}
                      className="mt-0.5"
                    />
                  </div>


                  <div className="flex items-center gap-[14px]">
                    {[
                      { icon: "logos:whatsapp-icon", color: "" },
                      { icon: "famicons:call", color: "black" },
                      { icon: "tdesign:share-1", color: "blue" },
                    ].map((icon) => (
                      <div
                        key={icon.icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full
                        bg-white/10 backdrop-blur-lg
                        border border-white/30
                        shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
                      >
                        <Icon icon={icon.icon} width={16} height={16} color={icon.color} />
                      </div>
                    ))}
                  </div>



                </div>
              </div>
            </div>

            <button className="absolute top-3 right-3 rounded-full p-2">
              <Image src="/images/Vector.svg" alt="Wishlist" width={22} height={22} />
            </button>

            <button className="absolute bottom-3 left-3 hidden items-center gap-1 rounded-sm text-xs font-medium text-white lg:flex">
              <p>More Details</p>
              <ChevronRight size={14} />
            </button>

            <span className="absolute right-3 bottom-3 hidden rounded-sm bg-black/70 px-2 py-1 text-xs text-white lg:block">
              {property.price}
            </span>

            {property.openTime && (
              <div className="absolute bottom-0 w-full bg-green-600 px-2 py-2 text-center text-[10px] font-medium text-white lg:hidden">
                {property.openTime}
              </div>
            )}
            {!property.openTime && (
              <div className="absolute bottom-0 w-full bg-[#EC8A4D] px-2 py-2 text-center text-xs font-medium text-white lg:hidden">
                <p>Schedual A visit</p>
              </div>
            )}
          </div>
          <div className="flex w-full justify-between bg-[#4DC7EC] px-2 py-2 text-xs font-medium text-white lg:hidden">
            <div className="flex items-center gap-1 text-[15px]">{property.price}/m</div>

            <div className="flex items-center gap-3">
              <Image src="/images/calender.svg" alt="Calendar" width={20} height={18.51} />
              <p className="text-[15px] font-medium">25/12/2025</p>
            </div>
          </div>
          <div className="flex w-full justify-between bg-[#E6E7EB] px-2 py-2 text-[10px] font-semibold text-white lg:hidden">
            <span className="flex items-center gap-1 font-medium text-[#4C5564] lg:text-black">
              <Image src="/images/area.svg" alt="Area" width={14} height={14} />
              {property.sqft}
            </span>
            <span className="flex items-center gap-1 font-medium text-[#4C5564] lg:text-black">
              <Image src="/images/floor.svg" alt="Floor" width={18} height={18} className="lg:w-[14px] h-[14px]" />
              {property.floor}
            </span>


            <span className="flex items-center gap-1 font-medium text-[#4C5564] lg:text-black">
              <Image src="/images/furnished.svg" alt="Furnished" width={18} height={18} className="lg:w-[14px] h-[14px]" />
              {property.furnishedType}
            </span>
          </div>


          <div className="hidden p-4 lg:block">
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

            <div className="text-muted-foreground mt-3 flex flex-wrap gap-2 h-[25px] items-center justify-between text-[11px]">
              <span className="flex items-center gap-1">
                <Image src="/images/area.svg" alt="Area" width={14} height={14} />
                {property.sqft}
              </span>

              <span className="flex items-center gap-1">
                <Image src="/images/floor.svg" alt="Floor" width={14} height={14} />
                {property.floor}
              </span>

              <span className="flex items-center gap-1 truncate whitespace-nowrap">
                <Image src="/images/furnished.svg" alt="Furnished" width={14} height={14} />
                {property.furnishedType}
              </span>

              <span className="flex items-center gap-1 truncate whitespace-nowrap">
                <Image src="/images/available.svg" alt="Open Time" width={14} height={14} />
                {property.availableTime}
              </span>
            </div>

            {property.openTime && (
              <div className="mt-4 flex items-center justify-between gap-2">
                <div className="h-[30px] rounded-[6px] bg-green-600 p-2 text-center text-xs font-semibold text-white">
                  {property.openTime}
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/images/wp.svg" alt="Wishlist" width={22} height={22} />
                  <Image src="/images/share.svg" alt="Wishlist" width={22} height={22} />
                </div>
              </div>
            )}

            {property.showScheduleButton && (
              <div className="mt-4 flex items-center justify-between gap-2">
                <div>
                  <AppButton
                    label="SCHEDULE A VISIT"
                    className="h-[30px] rounded-[6px] p-2 text-[12px]"
                  />
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
