import Image from "next/image";

interface OwnerSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OwnerSelectionModal({
  isOpen,
  onClose,
}: OwnerSelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="
          relative rounded-[10px] shadow-2xl
          bg-[#FFFAECCC] md:bg-white
          w-[240px] p-5 flex flex-col gap-5
         
          md:max-w-[1184px] md:w-[calc(100%-40px)] md:px-[45px] md:py-[30px] md:flex-row md:gap-5
          animate-in fade-in zoom-in duration-200 justify-center
        "
      >
        <button
          className="
            w-full rounded-[10px] border border-secondary-end
            bg-white
            p-5   flex flex-col gap-[23px]
           md:flex-1 md:max-w-[630px] md:h-[420px] md:p-6
            hover:bg-gray-50 transition shadow-[1px_0px_9px_-3px_#EAB30880]
          "
        >
          <div className="hidden md:block relative w-[200px] h-[190px] mx-auto rounded-lg bg-gray-100 overflow-hidden">
            <Image
              src={"/images/OwnerImage.png"}
              alt="Property Owner"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:hidden h-[145px] rounded-[10px] flex items-center justify-center">
            <Image
              src={"/images/BusinessIcon.png"}
              alt="Business Icon"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="text-center space-y-1 md:space-y-0.5">
            <h3 className="text-[18px] md:text-[32px] font-Bold text-[#111111]">
              Property Owner
            </h3>
            <p className="hidden md:block text-[22px] text-gray-600">
              Are you a property owner?
            </p>
            <p className="hidden md:block text-[22px] text-gray-600">
              Click here to list your property.
            </p>
          </div>
        </button>

        <button
          className="
            w-full rounded-[10px] border border-gray-300
            bg-white
            p-5 flex flex-col gap-[23px]
            md:flex-1 md:max-w-[630px] md:h-[420px] md:p-6
            hover:bg-gray-50 transition
          "
        >
          <div className="hidden md:block relative w-[200px] h-[190px] mx-auto rounded-lg bg-gray-100 overflow-hidden">
            <Image
              src={"/images/ReferEarn.png"}
              alt="Refer & Earn"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:hidden h-[145px] rounded-[10px] flex items-center justify-center">
            <Image
              src={"/images/Ruppe-icon.png"}
              alt="Ruppee Icon"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="text-center space-y-1 md:space-y-0.5">
            <h3 className="text-[18px] md:text-[32px] font-Bold text-[#111111]">
              Refer an Owner & Earn
            </h3>
            <p className="hidden md:block text-[22px] text-gray-600">
              Are you a property owner?
            </p>
            <p className="hidden md:block text-[22px] text-gray-600">
              Click here to list your property.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
