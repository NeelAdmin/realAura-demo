import { Property } from "@/types/index";
import { PropertyCard } from "./property-card";
import { MoveUpRight } from "lucide-react";
type Props = {
  title: string;
  properties: Property[];
};

export function PropertySection({ title, properties }: Props) {
  return (
    <section className="w-full py-6">
      <div className="mb-4 hidden items-center justify-between lg:flex">
        <h2 className="text-[30px] font-semibold">{title}</h2>
        <a href="#" className="flex items-center gap-1 text-xs font-medium">
          See All Properties
          <MoveUpRight size={14} />
        </a>
      </div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
