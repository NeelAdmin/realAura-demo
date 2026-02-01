import { AppButton } from "@/components/ui/AppButton"
import Image from "next/image"

type Props = {
  wnatBg: boolean
}

export function DistanceCalculator({ wnatBg }: Props) {
  return (
    <>
      {/* Heading */}
      
        <h5 className={`text-[16px] font-semibold md:text-[20px] ${wnatBg ? "" : "px-6 md:px-0"} mb-2`}>
          Enter your office, school, work to calculate distance form the society
        </h5>

      {/* MOBILE */}
      <div className={`w-full ${wnatBg ? "" : "px-6"} space-y-4 md:p-0 md:hidden`}>
      

        <input
          placeholder="E.g. Proper Society"
          className="w-full rounded-md border px-4 py-2 text-sm"
        />

        {/* Society Card */}
        <div className="flex items-center gap-4 rounded-md bg-[#FFF3CC] p-4">
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-md bg-[#FFD140]">
            <Image src="/images/location.svg" alt="location" width={18} height={18} />
          </div>

          <div>
            <p className="text-sm font-medium">Orchid Whitefield</p>
            <p className="text-xs text-gray-500">Panthur</p>
          </div>
        </div>

        <AppButton
          label="Calculate Distance"
          className="h-10 w-full text-sm rounded-md"
        />
      </div>

      {/* ================= DESKTOP ================= */}
      {wnatBg ? <DesktopWithBg /> : <DesktopInline />}
    </>
  )
}

/* ================= DESKTOP VARIANT: WITH BG ================= */
function DesktopWithBg() {
  return (
    <div className="hidden space-y-5 rounded-lg bg-white p-4 shadow-sm md:block">
      <p className="text-sm font-medium">Enter your Location</p>

      <input
        placeholder="E.g. Proper Society"
        className="w-full rounded-md px-4 py-2 text-sm shadow-sm"
      />

      <div className="flex items-center gap-6 rounded-md bg-[#EAB30838] p-4">
        <div className="flex h-[45px] w-[51px] items-center justify-center rounded-md bg-[#FFD140]">
          <Image src="/images/locationW.svg" alt="location" width={20} height={20} />
        </div>

        <div>
          <p className="text-sm font-medium">Orchid Whitefield</p>
          <p className="text-xs text-gray-400">Panthur</p>
        </div>
      </div>

      <AppButton
        label="Calculate Distance"
        className="h-10 w-full text-sm rounded-md"
      />
    </div>
  )
}

/* DESKTOP VARIANT: INLINE*/
function DesktopInline() {
  return (
    <div className="hidden space-y-4 md:block">
      <input
        placeholder="E.g. Proper Society"
        className="w-full rounded-md px-4 py-2 text-sm shadow-sm"
      />

      <div className="flex items-center justify-between rounded-md bg-[#EAB30838] p-6">
        {/* Left */}
        <div className="flex items-start gap-6">
          <div className="flex h-[100px] w-[115px] items-center justify-center rounded-md bg-[#FFD140]">
            <Image src="/images/locationW.svg" alt="location" width={50} height={50} />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Orchid Whitefield</p>
            <p className="text-sm text-gray-400">Panthur</p>
          </div>
        </div>

        {/* Right */}
        <AppButton
          label="View Map"
          className="h-8 px-10 text-sm rounded-md"
        />
      </div>

      <AppButton
        label="Calculate Distance"
        className="h-10 w-full text-sm rounded-md"
      />
    </div>
  )
}

