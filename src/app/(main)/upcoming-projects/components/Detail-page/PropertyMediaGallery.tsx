import Image from "next/image"
import { PropertyMedia } from "../../types"
import { AppButton } from "@/components/ui/AppButton"

type Props = {
  media: PropertyMedia[]
  tags: string[]
}

export function PropertyMediaGallery({ media, tags }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 items-center w-full">

      {/* Main Image */}
      <div
        className="
          relative w-full
          aspect-[16/9]
          sm:aspect-[16/8]
          lg:aspect-[16/7]
          max-w-full lg:max-w-[900px]
          overflow-hidden rounded-xl
        "
      >
        <Image
          src={media[0].image}
          alt="Property"
          fill
          className="object-cover"
          priority
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
              flex items-center justify-center rounded-full
              bg-secondaryStart
              h-10 w-10
              sm:h-12 sm:w-12
              lg:h-14 lg:w-14
            "
          >
            <Image
              src="/images/play.svg"
              alt="play"
              width={45}
              height={45}
              className="sm:w-7 sm:h-7 lg:w-14 lg:h-14"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="absolute right-2 top-2 sm:right-4 sm:top-4 flex gap-2">
          <AppButton
            label="Upcoming Project"
            variant="outline-gradient"
            className="
    h-7 lg:h-8
    px-3 lg:px-4
    text-[12px] lg:text-[14px]"
          />
          <AppButton
            label="RERA Approved"
            className=" 
              h-6 sm:h-7 lg:h-8
              px-2 sm:px-3 lg:px-4
              text-[10px] sm:text-[12px] lg:text-[14px]
            "
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div
        className="
          flex gap-2 sm:gap-6
          overflow-x-auto scrollbar-hide
          w-full
          justify-center
        "
      >
        {media.map((item) => (
          <div
            key={item.id}
            className="
              relative flex-shrink-0
              h-[60px] w-[55px]
              sm:h-[90px] sm:w-[120px]
              lg:h-[130px] lg:w-[150px]
              overflow-hidden rounded-lg
            "
          >
            <Image
              src={item.image}
              alt="thumbnail"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
