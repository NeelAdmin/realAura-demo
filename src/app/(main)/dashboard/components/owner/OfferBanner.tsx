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
    <section className="from-secondary-start to-secondary-end rounded-3xl bg-gradient-to-r px-8 py-4">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* LEFT SIDE - Image + Description */}
        <div className="flex items-center gap-5">
          <Image src={imageSrc} alt="Offer" width={120} height={120} className="object-contain" />

          <p className="text-lg font-medium text-white">{description}</p>
        </div>

        {/* RIGHT SIDE - Text + Button */}
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link
            href={buttonLink}
            className="rounded-[5px] bg-white px-6 py-2.5 text-sm font-semibold text-black transition"
          >
            Grab Now
          </Link>
        </div>
      </div>
    </section>
  );
}
