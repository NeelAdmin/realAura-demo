import { City } from "./city-list";
import Image from "next/image";

type CityCardProps = {
  city: City;
};

export function CityCard({ city }: CityCardProps) {
  return (
    <div className="flex h-[90px] w-[80px] flex-col items-center gap-[5px] rounded-[5px] bg-[#F7F7F7] p-[8px] transition-transform duration-200 hover:scale-105 lg:h-[130px] lg:w-[158px] lg:gap-[9px] lg:rounded-[12px] lg:px-[10px] lg:py-[15px]">
      <div className="flex h-[49px] w-[57px] items-center justify-center lg:h-[74px] lg:w-[80px]">
        <Image
          src={city.image}
          alt={city.name}
          width={80}
          height={74}
          className="h-full w-full object-contain"
        />
      </div>

      <span className="font-sfui text-primary text-center text-[15px] leading-none font-[650]">
        {city.name}
      </span>
    </div>
  );
}
