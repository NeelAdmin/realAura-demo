import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  transactionId: string;
}

export function SuccessModal({ isOpen, transactionId }: SuccessModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleFinish = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-blue-50 p-4 md:p-12">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full md:w-[60vw] p-6 md:p-8 animate-in fade-in zoom-in duration-300">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Check
                className="w-10 h-10 md:w-12 md:h-12 text-green-600"
                strokeWidth={2.5}
              />
            </div>
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-2 md:mb-3">
            Entry Verified
          </h2>

          <p className="text-center text-gray-500 mb-4 text-sm md:text-base">
            The trust record has been added to the Realaura ledger.
          </p>

          <div className="flex justify-center text-center text-md md:text-sm mb-2 md:mb-2">
            <p className="text-center border border-gray-200 text-yellow-600 text-md md:text-sm mb-6 md:mb-8 bg-gray-100 px-6 py-2 rounded-md font-semibold">
              TXN ID: {transactionId}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleFinish}
              className="bg-black text-white px-11 py-3 rounded-[16px] font-medium hover:bg-gray-800 transition-colors"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
