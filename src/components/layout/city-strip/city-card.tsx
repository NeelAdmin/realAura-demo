import { City } from "./city-list";
import Image from "next/image";

type CityCardProps = {
  city: City;
};

export function CityCard({ city }: CityCardProps) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        h-[70px] w-[70px]
        lg:h-[120px] lg:w-[110px]
        gap-2
        rounded-[10px] bg-[#F7F7F7]
        transition-transform duration-200 hover:scale-105
      "
    >
      {/* Icon wrapper */}
      <div
        className="
          flex items-center justify-center
          h-[35px] w-[35px]
          lg:h-[60px] lg:w-[60px]
        "
      >
        <Image
          src={city.image}
          alt={city.name}
          width={60}
          height={60}
          className="
            object-contain
            h-[35px] w-[35px]
            lg:h-[60px] lg:w-[60px]
          "
        />
      </div>

      {/* City name */}
      <span
        className="
          font-sfui text-primary text-center font-medium leading-none
          text-[12px]
          lg:text-[16px]
        "
      >
        {city.name}
      </span>
    </div>
  );
}
