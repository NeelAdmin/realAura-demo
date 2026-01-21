import { Property } from "@/types/index"
import { PropertyCard } from "./property-card"
import { MoveUpRight } from "lucide-react"
type Props = {
  title: string
  properties: Property[]
}

export function PropertySection({ title, properties }: Props) {
  return (
    <section className="w-full py-6">
      <div className="max-w-7xl lg:px-4">
        <div className="mb-4 items-center justify-between hidden lg:flex">
          <h2 className="text-2xl font-bold">{title}</h2>
          <a href="#" className="text-xs font-medium flex items-center gap-1">
            See All Properties 
            <MoveUpRight size={14} />
          </a>
        </div>
        <div
          className="
            flex flex-col gap-6

            lg:grid lg:grid-cols-3 lg:gap-6
          "
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

