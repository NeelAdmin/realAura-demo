import Image from "next/image"
import { PremiumSociety } from "./types"
import { ChevronRight, Star } from "lucide-react"

type Props = {
  society: PremiumSociety
}

export function PremiumSocietyCard({ society }: Props) {
  return (
    <div
      className="
        relative overflow-hidden rounded-md
        min-w-[260px] h-[200px]
        bg-black
      "
    >
      <Image
        src={society.image}
        alt={society.name}
        width={430}
        height={350}
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-3 left-3 right-3 text-white">
        <h3 className="text-sm font-semibold">{society.name}</h3>

        <div className="mt-1 flex items-center justify-between text-xs">
          <button className="flex items-center gap-1 font-medium">
            More Details
            <ChevronRight size={14} />
          </button>

          <div className="flex items-center gap-1">
            <Star size={14} fill="gold" stroke="gold" />
            <span>
              {society.rating} ({society.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
