"use client";

import Image from "next/image";
import Link from "next/link";

interface OfferBannerProps {
  imageSrc: string;
  description: string;
  buttonLink?: string;
}

export default function OfferBanner({ imageSrc, description, buttonLink = "/" }: OfferBannerProps) {
  return (
    <section
      className="from-secondary-start to-secondary-end 
             rounded-[10px]
             bg-gradient-to-r 
             px-4 sm:px-6 md:px-8 lg:px-6
             py-3 sm:py-4 md:py-5 lg:py-4"
    >
      <div className="flex 
                  items-center 
                  justify-between 
                  gap-2 sm:gap-5 md:gap-6 lg:gap-4
                  md:flex-row">

        {/* LEFT SIDE */}
        <div className="flex items-center 
                    gap-3 sm:gap-4 md:gap-5 lg:gap-3">

          <Image
            src={imageSrc}
            alt="Offer"
            width={120}
            height={120}
            className="h-14 w-14 
                   sm:h-16 sm:w-16 
                   md:h-20 md:w-20 
                   lg:h-14 lg:w-14 
                   object-contain rounded-lg"
          />

          <p
            className="text-sm 
             sm:text-base 
             md:text-lg 
             lg:text-base
             font-medium 
             text-white
             max-w-[180px] 
             sm:max-w-none"
          >
            {description}
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-start 
                    md:items-end">

          <Link
            href={buttonLink}
            className="rounded-md 
                   bg-white 
                   px-4 sm:px-5 md:px-6 lg:px-4
                   py-2 sm:py-2.5 lg:py-2
                   text-xs sm:text-sm lg:text-xs
                   font-semibold 
                   text-black 
                   transition hover:opacity-90"
          >
            Grab Now
          </Link>

        </div>

      </div>
    </section>

  );
}
