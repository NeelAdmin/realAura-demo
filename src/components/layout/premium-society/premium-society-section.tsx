import { PremiumSocietyCard } from "./premium-society-card";
import { premiumSocieties } from "./premium-society.mock";
import { MoveUpRight } from "lucide-react";

export function PremiumSocietySection() {
  return (
    <section className="w-full px-3.5 py-3 lg:px-0">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[16px] font-bold md:text-[30px]">Premium Society in Bengaluru</h2>
        <button className="hidden items-center gap-1 text-xs font-medium lg:flex">
          See All Society
          <MoveUpRight size={14} />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-4 lg:gap-6">
        {premiumSocieties.map((society) => (
          <PremiumSocietyCard key={society.id} society={society} />
        ))}
      </div>
    </section>
  );
}
