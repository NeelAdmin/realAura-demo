// import { AppButton } from "@/components/ui/AppButton";
// import Image from "next/image";

// type prop = {
//   wnatBg: boolean
// }

// export function DistanceCalculator({ wnatBg }: prop) {
//   return (
//     <>

//       <div className={`rounded-lg ${wnatBg ? 'bg-[#F5F5F5]' : 'bg-white'} ${wnatBg ? "p-4" : ""} ${wnatBg ? "shadow-sm" : ""} space-y-5`}>

//         {wnatBg && <h5 className="mb-2 font-medium text-[14px]">Enter your Location</h5>}

//         <input
//           placeholder="E.g. Proper Society"
//           className="w-full rounded-md px-8 py-3 text-sm shadow-[3px_3px_3px_0px_#DDDDDD]"
//         />

//         <h4 className="mb-3 font-semibold text-[24px] ">
//           Enter your office, school, work to calculate distance
//         </h4>

//         <div
//           className={`mt-3 flex w-full items-center justify-between gap-4 rounded-md bg-[#EAB30838] p-6`}
//         >
//           {/* LEFT SIDE */}
//           <div className={`flex ${wnatBg ? "items-center" : "items-start"} gap-8`}>
//             <div
//               className={`flex ${wnatBg ? "h-[45px] w-[51px]" : "h-[100px] w-[115px]"
//                 } items-center justify-center rounded-[8px] bg-[#FFD140]`}
//             >
//               <Image
//                 src="/images/location.svg"
//                 alt="location"
//                 width={wnatBg ? 20 : 50}
//                 height={wnatBg ? 20 : 50}
//               />
//             </div>

//             <div className="flex flex-col justify-center gap-2">
//               <p className="text-[18px] font-medium">Orchid Whitefield</p>
//               <p className="text-[14px] text-[#A6A6A6]">Panthur</p>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           {wnatBg ? null : <AppButton label="View map" className="h-8 px-10 py-2 text-[14px] rounded-[5px]" />}
//         </div>


//         <AppButton label="Calculate Distance" className="h-8 px-4.5 py-3 w-full text-[18px] rounded-[5px]" />

//       </div>
//     </>
//   )
// }

import { AppButton } from "@/components/ui/AppButton"
import Image from "next/image"

type Props = {
  wnatBg: boolean
}

export function DistanceCalculator({ wnatBg }: Props) {
  return (
    <>
      {/* Heading */}
      
        <h5 className={`text-[16px] font-semibold md:text-[20px] ${wnatBg ? "" : "px-6 md:px-0"}`}>
          Enter your office, school, work to calculate distance form the society
        </h5>

      {/* ================= MOBILE (same everywhere) ================= */}
      <div className={`w-full ${wnatBg ? "" : "px-6"} space-y-4 md:p-0 md:hidden`}>
      

        <input
          placeholder="E.g. Proper Society"
          className="w-full rounded-md border px-4 py-2 text-sm"
        />

        {/* Society Card */}
        <div className="flex items-center gap-4 rounded-md bg-[#FFF3CC] p-4">
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-md bg-[#FFD140]">
            <Image src="/images/locationW.svg" alt="location" width={18} height={18} />
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
          <Image src="/images/location.svg" alt="location" width={20} height={20} />
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

/* ================= DESKTOP VARIANT: INLINE ================= */
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

