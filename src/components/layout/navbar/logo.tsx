import Image from "next/image";

export function Logo({ mobile }: { mobile?: boolean }) {
  const className = mobile ? "h-[46px] w-auto mx-[13px]" : "h-16 w-auto";
  return (
    <div className="flex items-center gap-2">
      <Image
        src={mobile ? "/images/mobile-logo.svg" : "/images/LOGO.png"}
        alt="RealAura Logo"
        width={mobile ? 53 : 297}
        height={mobile ? 46 : 62}
        className={className}
      />
    </div>
  );
}
