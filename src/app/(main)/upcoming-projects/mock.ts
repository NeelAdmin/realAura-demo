import { UpcomingProperty } from "./types"

export const upcomingProperties: UpcomingProperty[] = [
  {
    id: 1,
    image: "/images/interior.svg",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Panthur",
    totalUnits: 388,
    bhk: "2,3",
    totalTower: 5,
    projectSize: "1080 sqft",
    price: "₹60K - 80K",
    launchDate: "25/12/2025",
  },
  {
    id: 2,
    image: "/images/interior.svg",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Panthur",
    totalUnits: 388,
    bhk: "2,3",
    totalTower: 5,
    projectSize: "1080 sqft",
    price: "₹60K - 80K",
    launchDate: "25/12/2025",
  },
   {
    id: 3,
    image: "/images/interior.svg",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Panthur",
    totalUnits: 388,
    bhk: "2,3",
    totalTower: 5,
    projectSize: "1080 sqft",
    price: "₹60K - 80K",
    launchDate: "25/12/2025",
  },
]


import { PropertyDetail } from "./types"

export const propertyDetailMock: PropertyDetail = {
  id: "1",
  title: "SNN Raj Etternia",
  location: "Harlur",
  priceRange: "₹ 60K - ₹ 80K",
  status: "For Sale",

  tags: ["Upcoming Project", "RERA Approved"],

  media: [
    { id: "1", image: "/images/interior.svg" },
    { id: "2", image: "/images/interior.svg" },
    { id: "3", image: "/images/interior.svg" },
    { id: "4", image: "/images/interior.svg" },
  ],

  stats :[
    {
      label: "Total Units",
      value: 388,
      icon: "/images/key.svg",
    },
    {
      label: "BHK",
      value: "2, 3",
      icon: "/images/bed.svg",
    },
    {
      label: "Total Towers",
      value: 5,
      icon: "/images/building.svg",
    },
    {
      label: "Project Size",
      value: "1080 sqft",
      icon: "/images/size.svg",
    },
    {
      label: "Launch Date",
      value: "03 Feb 2026",
      icon: "/images/celendar-grey.svg",
    },
  ]
}
