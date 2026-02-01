"use client"

import Image from "next/image"
import { PremiumSociety } from "./types"
import { ChevronRight, Star } from "lucide-react"

type Props = {
  society: PremiumSociety
  ratio?: string
}

export function PremiumSocietyCard({ society, ratio = '430/350' }: Props) {
  return (
    <>
      <div
        className="
    relative overflow-hidden rounded-md shrink-0
    /* MOBILE */
    w-[138px] aspect-138/180

    /* LARGE MOBILE */
    sm:w-[180px] sm:aspect-180/220

    /* DESKTOP */
    lg:w-full lg:aspect-430/350
  "
      >

        {/* Image */}
        <Image
          src={society.image}
          alt={society.name}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content overlay */}
        {/* Content overlay */}
<div className="absolute bottom-2 left-2 right-2 text-white">
  <h3
    className="
      text-[11px] font-semibold leading-tight
      sm:text-sm
      md:text-lg
    "
  >
    {society.name}
  </h3>

  <div
    className="
      mt-1
      flex flex-col items-start gap-1

      /* Desktop */
      md:flex-row md:items-center md:justify-between
    "
  >
    {/* More details */}
    <button
      className="
        flex items-center gap-1
        text-[9px] font-medium
        sm:text-xs
      "
    >
      More Details
      <ChevronRight size={12} className="sm:size-[14px]" />
    </button>

    {/* Rating */}
    <div
      className="
        flex items-center gap-1
        text-[8px]
        sm:text-xs
      "
    >
      <Star size={11} fill="gold" stroke="gold" />
      <span>
        {society.rating} ({society.reviews} reviews)
      </span>
    </div>
  </div>
</div>

      </div>
    </>
  )
}
