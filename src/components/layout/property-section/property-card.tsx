import Image from "next/image";
import { Property } from "@/types/index";
import { ChevronRight } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";

type Props = {
  property: Property;
};

export function PropertyCard({ property }: Props) {
  return (
    <div className="overflow-hidden w-full rounded-md">
      <div className="p-2 lg:hidden">
        <h3 className="text-sm font-semibold whitespace-nowrap">
          {property.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-secondary">
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

      <div className="relative w-full sm:w-full lg:w-auto">
        <Image
          src={property.image}
          alt={property.name}
          width={597}
          height={365}
          className="object-contain w-full h-auto"
          priority
        />

        <button className="absolute right-3 top-3 rounded-full p-2">
          <Image
            src="/images/Vector.svg"
            alt="Wishlist"
            width={22}
            height={22}
          />
        </button>

        <button className="absolute bottom-3 left-3 hidden lg:flex items-center gap-1 rounded-sm text-xs font-medium text-white">
          <p>More Details</p>
          <ChevronRight size={14} />
        </button>

        <span className="absolute bottom-3 right-3 hidden lg:block rounded-sm bg-black/70 px-2 py-1 text-xs text-white">
          {property.price}
        </span>

        {property.openTime && (
          <div className="lg:hidden absolute bottom-0 w-full bg-green-600 px-2 py-2 text-center text-[12px] font-semibold text-white">
            {property.openTime}
          </div>
        )}
        {!property.openTime && (
          <div className="lg:hidden absolute bottom-0 w-full bg-[#EC8A4D] px-2 py-2 text-center text-xs font-semibold text-white">
            <p>Schedual A visit</p>
          </div>
        )}
      </div>
      <div className="lg:hidden flex justify-between w-full bg-[#4DC7EC] px-2 py-2 text-xs font-semibold text-white">
        <div className="flex items-center gap-1">{property.price}/m</div>

        <div className="flex items-center gap-1">
          <Image
            src="/images/calender.svg"
            alt="Calendar"
            width={16}
            height={16}
          />
          <p className="font-light">25/12/2025</p>
        </div>
      </div>
      <div className="lg:hidden flex justify-between w-full bg-[#E6E7EB] px-2 py-2 text-xs font-semibold text-white">
        <span className="flex items-center gap-1 text-[#4C5564]">
          <Image
            src="/images/furnished.svg"
            alt="Furnished"
            width={14}
            height={14}
          />
          {property.furnishedType}
        </span>
        <span className="flex items-center gap-1  text-[#4C5564]">
          <Image src="/images/floor.svg" alt="Floor" width={14} height={14} />
          {property.floor}
        </span>

        <span className="flex items-center gap-1  text-[#4C5564]">
          <Image
            src="/images/available.svg"
            alt="Open Time"
            width={14}
            height={14}
          />
          {property.availableTime}
        </span>
      </div>

      <div className="p-4 hidden lg:block">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold whitespace-nowrap">
            {property.name}
          </h3>

          <div className="flex items-center gap-1 text-xs text-secondary">
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

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1 text-[13px]">
          <span className="flex items-center gap-1">
            <Image src="/images/area.svg" alt="Area" width={14} height={14} />
            {property.sqft}
          </span>

          <span className="flex items-center gap-1">
            <Image src="/images/floor.svg" alt="Floor" width={14} height={14} />
            {property.floor}
          </span>

          <span className="flex items-center gap-1 whitespace-nowrap truncate">
            <Image
              src="/images/furnished.svg"
              alt="Furnished"
              width={14}
              height={14}
            />
            {property.furnishedType}
          </span>

          <span className="flex items-center gap-1 whitespace-nowrap truncate">
            <Image
              src="/images/available.svg"
              alt="Open Time"
              width={14}
              height={14}
            />
            {property.availableTime}
          </span>
        </div>

        {property.openTime && (
          <div className="mt-4 flex items-center justify-between gap-2">
            <div className="rounded-[6px] h-[30px] bg-green-600 p-2 text-center text-xs font-semibold text-white">
              {property.openTime}
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/wp.svg"
                alt="Wishlist"
                width={22}
                height={22}
              />
              <Image
                src="/images/share.svg"
                alt="Wishlist"
                width={22}
                height={22}
              />
            </div>
          </div>
        )}

        {property.showScheduleButton && (
          <div className="mt-4 flex items-center justify-between gap-2">
            <div>
              <AppButton
                label="SCHEDULE A VISIT"
                className="rounded-[6px] p-2 h-[30px] text-[12px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/wp.svg"
                alt="Wishlist"
                width={22}
                height={22}
              />
              <Image
                src="/images/share.svg"
                alt="Wishlist"
                width={22}
                height={22}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
