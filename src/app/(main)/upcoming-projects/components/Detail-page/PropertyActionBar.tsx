import Image from "next/image"
import ActionBar from "@/components/ui/ActionBar"

type Props = {
  title: string
  priceRange: string
  status: string
}

export function PropertyActionBar({ title, priceRange, status }: Props) {
  return (
    <div className="w-full rounded-sm bg-[#D1D5DB]">

      {/* 🔥 Desktop / Laptop Layout */}
      <div className="hidden lg:flex items-center justify-between py-2">
        {/* Left: Title */}
        <h3 className="font-semibold text-base px-4">
          {title}
        </h3>

        {/* Right: Icons + ActionBar */}
        <div className="flex items-center gap-8">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <Image src="/images/wp.svg" alt="wp" width={22} height={22} />
            <Image src="/images/telephone.svg" alt="call" width={22} height={22} />
            <Image src="/images/share.svg" alt="share" width={22} height={22} />
          </div>

          {/* ActionBar */}
          <ActionBar
            items={[
              {
                label: "Schedule a Visit",
                className: "bg-gradient-to-r from-secondary-start to-secondary-end",
              },
              {
                label: status,
                className: "bg-black",
              },    
              {
                label: `Rent - ₹${priceRange}/m`,
                className: "bg-[#4BC3EB]",
              },
            ]}
          />
        </div>
      </div>

      {/* 📱 Mobile Layout */}
      <div className="lg:hidden">
        {/* Title + Icons */}
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="font-semibold text-xs">
            {title}
          </h3>

          <div className="flex items-center gap-4">
            <Image src="/images/wp.svg" alt="wp" width={15} height={14} />
            <Image src="/images/telephone.svg" alt="call" width={15} height={14} />
            <Image src="/images/share.svg" alt="share" width={15} height={14} />
          </div>
        </div>

        {/* Stacked Buttons */}
        <div className="flex flex-col">
          <button className="h-10 w-full bg-[#F4B400] text-white text-sm font-medium">
            Schedule A Visit
          </button>

          <button className="h-10 w-full bg-[#4BC3EB] text-white text-sm font-medium">
            Rent - ₹{priceRange}/m
          </button>

          <button className="h-10 w-full bg-[#17A81A] text-white text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
