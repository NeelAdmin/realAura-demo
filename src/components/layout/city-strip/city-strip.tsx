import { CityCard } from "./city-card";
import { cities } from "./city-list";

export function CityStrip() {
  return (
    <section className="w-full px-5 py-8 lg:px-0">
      <h2 className="font-sfui mb-6 text-[16px] leading-none font-medium md:text-[30px] md:font-semibold">
        Select Location
      </h2>
      <div className="scrollbar-hide flex gap-[32px] overflow-x-auto overflow-y-hidden lg:gap-[10px]">
        {cities.map((city) => (
          <div key={city.id}>
            <CityCard city={city} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        <span className="bg-border h-3 w-3 rounded-full" />
        <span className="bg-border h-3 w-3 rounded-full" />
        <span className="bg-border h-3 w-3 rounded-full" />
      </div>
    </section>
  );
}
