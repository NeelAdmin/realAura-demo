export type UpcomingProperty = {
  id: number
  image: string
  name: string
  location: string

  tenantType: string
  available: string
  status: "Rent" | "Sale"

  totalUnits: number
  projectSize: string
  price: string
}

    

export type PropertyMedia = {
  id: string
  image: string
}

export type StatsItem = {
  label: string
  value: string | number
  icon: string
}

export type PropertyDetail = {
  id: string
  title: string
  location: string
  priceRange: string
  status: "For Sale" | "For Rent"

  tags: string[]

  media: PropertyMedia[]

  stats: StatsItem[]
}
