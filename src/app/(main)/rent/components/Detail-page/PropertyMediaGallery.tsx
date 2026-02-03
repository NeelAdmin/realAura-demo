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

    aspect-[4/5]        
    sm:aspect-[3/2]     
    md:aspect-video    
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

      </div>

      {/* Thumbnails */}
      <div
        className="
          flex gap-2 px-6 lg:px-0 sm:gap-6
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
              h-[50px] w-[50px]
              sm:h-[70px] sm:w-[100px]
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
