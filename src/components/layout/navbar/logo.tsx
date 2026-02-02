import Image from "next/image";

export function Logo({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex items-center">
      <Image
        src={mobile ? "/images/mobile-logo.svg" : "/images/LOGO.png"}
        alt="RealAura Logo"
        width={mobile ? 53 : 160}   
        height={mobile ? 46 : 48}
        className={
          mobile
            ? "h-[46px] w-auto mx-[13px]"
            : "h-[40px] w-auto"
        }
        priority
      />
    </div>
  );
}
