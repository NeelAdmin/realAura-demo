import { AppButton } from "@/components/ui/AppButton"

export function AdditionalDetail () {
    return (
    <div className="flex flex-col gap-4">
          <h3 className="text-[20px] font-semibold">Additional Details</h3>
          <div className="flex gap-2 items-center">

            <AppButton
              label="Amzing View"
              variant="pill-pink"
              className="border border-none bg-[#F9D5DF] text-[#8F5568]"
            />

            <AppButton
              label="Scenic View"
              variant="pill-yellow"
              className="border border-none bg-[#FAE4AA] text-[#887529]"
            />

            <AppButton
              label="Vastu Complaint"
              variant="pill-green"
              className="border border-none bg-[#C5F3EE] text-[#156764]"
            />
          </div>
        </div>
    )
}