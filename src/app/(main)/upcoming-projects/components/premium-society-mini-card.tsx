
import Image from "next/image"

export function PremiumSocietyMiniCard() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm">
      <Image
        src="/images/premium.png"
        alt="Green Valley"
        width={400}
        height={240}
        className="object-cover"
      />

      <div className="absolute bottom-3 left-3 text-white">
        <p className="font-semibold">Green Valley</p>
        <p className="text-sm">⭐ 4.96 (20 reviews)</p>
      </div>
    </div>
  )
}

