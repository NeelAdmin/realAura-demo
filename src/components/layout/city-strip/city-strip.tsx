import { CityCard } from "./city-card"
import { cities } from "./city-list"

export function CityStrip() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-2xl font-bold">
          Select Location
        </h2>

        <div
          className="
            flex gap-4 overflow-x-auto overflow-y-hidden
            scrollbar-hide

            snap-x snap-mandatory

            lg:snap-none
          "
        >
          {cities.map((city) => (
            <div
              key={city.id}
              className="snap-center lg:snap-none"
            >
              <CityCard city={city} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          <span className="h-3 w-3 rounded-full bg-border" />
          <span className="h-3 w-3 rounded-full bg-border" />
          <span className="h-3 w-3 rounded-full bg-border" />
        </div>
      </div>
    </section>
  )
}
