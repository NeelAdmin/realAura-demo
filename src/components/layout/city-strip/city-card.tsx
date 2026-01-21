import { City } from "./city-list"
import Image from "next/image"

type CityCardProps = {
    city: City
}

export function CityCard({ city }: CityCardProps) {
    return (
        <div
              className="
        flex flex-col items-center gap-2
        bg-muted transition-transform duration-200
        hover:scale-105
        min-w-[30%] rounded-[5px] p-2
        sm:min-w-[160px] sm:p-3
        lg:min-w-[120px] lg:py-4 lg:px-2
      "
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-[5px] bg-muted">
                <Image
                    src={city.image}
                    alt={city.name}
                    width={24}
                    height={24}
                    className="h-14 w-14 object-cover"
                />
            </div>

            <span className="
          font-medium text-primary
          text-xs
          sm:text-sm
        ">
                {city.name}
            </span>
        </div>
    )
}
