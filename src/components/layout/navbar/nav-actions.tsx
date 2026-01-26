import { AppButton } from "@/components/ui/AppButton";

export function NavActions({
  setIsOpen,
  setIsPostPopupOpen,
  setIsProfileRatingModalOpen,
}: {
  setIsOpen: (open: boolean) => void;
  setIsPostPopupOpen: (open: boolean) => void;
  setIsProfileRatingModalOpen: (open: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <AppButton
        label="Profile Rating"
        className="h-10 px-4 text-sm"
        onClick={() => setIsProfileRatingModalOpen(true)}
      />

      <AppButton
        label="Post a Property"
        chipText="Free"
        className="h-10 px-4 text-sm"
        onClick={() => setIsPostPopupOpen(true)}
      />

      <button
        className="text-[14px] font-bold text-primary px-4 py-2"
        onClick={() => setIsOpen(true)}
      >
        LOGIN
      </button>
    </div>
  );
}
