import Image from "next/image"

export function Logo({mobile}: {mobile?: boolean}) {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src={mobile ? "/images/mobile-logo.png" : "/images/LOGO.png"} 
        alt="RealAura Logo" 
        width={mobile ? 53 : 297} 
        height={mobile ? 46 : 62}
        className="h-10 w-auto"
      />
    </div>
  )
}
