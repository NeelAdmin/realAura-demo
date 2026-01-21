import { SearchBar } from "@/components/layout/serch-bar/search-bar"
import { CityStrip } from "@/components/layout/city-strip/city-strip"
import { PropertySection } from "@/components/layout/property-section/property-section"
import { scheduledVisit, sarjapura, velendur } from "@/components/layout/property-section/property.mock"
import { PremiumSocietySection } from "@/components/layout/premium-society/premium-society-section"


export default function HomePage() {
    return (
        <>
            <SearchBar />
            <CityStrip />
            <PropertySection
                title="Scheduled Visit"
                properties={scheduledVisit}
            />

            <PropertySection
                title="Top Properties in Sarjapura"
                properties={sarjapura}
            />

            <PropertySection
                title="Top Properties in Velendur"
                properties={velendur}
            />
            <PremiumSocietySection />
        </>
    )
}
