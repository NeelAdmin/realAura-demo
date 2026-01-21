import { AppButton } from "@/components/ui/AppButton"

export function NavActions() {
  return (
    <div className="flex items-center gap-2.5">
      <AppButton
        label="Profile Rating"
        className="h-10 px-4 text-sm"
      />

      <AppButton
        label="Post a Property"
        chipText="Free"
        className="h-10 px-4 text-sm"
      />

      <button className="text-[14px] font-bold text-primary px-4 py-2">
        LOGIN
      </button>
    </div>
  )
}
