import { UpcomingProperty } from "./types"

export const upcomingProperties: UpcomingProperty[] = [
  {
    id: 1,
    image: "/images/interior.svg",
    name: "Sobha Sentosa - 3 BHK Apartment",
    location: "Panthur",
    tenantType: "Anyone",
    available: "25/12/2025",
    status: "Rent",
    totalUnits: 388,
    projectSize: "1080 sqft",
    price: "₹60K - 80K",
  },
 {
  id: 2,
  image: "/images/interior.svg",
  name: "Sobha Sentosa - 3 BHK Apartment",
  location: "Panthur",
  tenantType: "Anyone",
  available: "25/12/2025",
  status: "Rent",
  totalUnits: 388,
  projectSize: "1080 sqft",
  price: "₹60K - 80K",
},
 {
  id: 3,
  image: "/images/interior.svg",
  name: "Sobha Sentosa - 3 BHK Apartment",
  location: "Panthur",
  tenantType: "Anyone",
  available: "25/12/2025",
  status: "Rent",
  totalUnits: 388,
  projectSize: "1080 sqft",
  price: "₹60K - 80K",
}
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

  stats: [
    
    {
      label: "BHK",
      value: "3 BHK",
      icon: "/images/bed.svg",
    },
    {
      label: "Total Towers",
      value: "2 Balcony",
      icon: "/images/rent-detail/balcony.svg",
    },
    {
      label: "Project Size",
      value: "Bathroom",
      icon: "/images/rent-detail/shower.svg",
    },
     {
      label: "Project Size",
      value: "1080 sqft",
      icon: "/images/size.svg",
    },
    {
      label: "Launch Date",
      value: "Available from  03 Feb 2026",
      icon: "/images/celendar-grey.svg",
    },
     {
      label: "Total Units",
      value: "Maintenance- 6000/m",
      icon: "/images/rent-detail/settings.svg",
    },
    {
      label: "BHK",
      value: "Fully Furnished",
      icon: "/images/rent-detail/kitchen-cabinets.svg",
    },
    {
      label: "Launch Date",
      value: "Deposite - 4 lac",
      icon: "/images/rent-detail/bank-transfer.svg",
    },
    {
      label: "Launch Date",
      value: "Tenat Type - Anyone",
      icon: "/images/rent-detail/homee.svg",
    },
    {
      label: "Launch Date",
      value: "Full Month Brokerage - 85000",
      icon: "/images/rent-detail/handshake.svg",
    },
  ]
}
