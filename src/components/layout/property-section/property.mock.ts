import { Property } from "@/types/index"

export const scheduledVisit: Property[] = [
  {
    id: 1,
    image: "/images/__before.svg",
    price: "₹ 55,000",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Kolhapur",
    floor: "9th Floor",
    furnishedType: "Semi Furnished",
    sqft: "1080 sqft",
    openTime: "JOIN OPEN HOUSE TODAY BETWEEN 9 - 5 PM",
    availableTime: "Available from 1st Jan",
  },
  {
    id: 2,
    image: "/images/__before.svg",
    price: "₹ 55,000",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Kolhapur",
    floor: "9th Floor",
    furnishedType: "Semi Furnished",
    sqft: "1080 sqft",
    openTime: "JOIN OPEN HOUSE TODAY BETWEEN 9 - 5 PM",
    availableTime: "Available from 1st Jan",
  },
  {
    id: 3,
    image: "/images/__before.svg",
    price: "₹ 55,000",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Kolhapur",
    floor: "9th Floor",
    furnishedType: "Semi Furnished",
    sqft: "1080 sqft",
    openTime: "JOIN OPEN HOUSE TODAY BETWEEN 9 - 5 PM",
    availableTime: "Available from 1st Jan",
  },
]

export const sarjapura: Property[] = scheduledVisit.map(p => ({
  ...p,
  openTime: undefined,
  showScheduleButton: true,
}))

export const velendur: Property[] = scheduledVisit.map(p => ({
  ...p,
  openTime: undefined,
  showScheduleButton: true,
}))
