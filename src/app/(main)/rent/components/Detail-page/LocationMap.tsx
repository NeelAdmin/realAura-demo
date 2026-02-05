"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useRef, useState } from "react"

// Fix default icon path issues
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/location.svg",
  iconUrl: "/images/location.svg",
})

type Props = {
  center: LatLngExpression
  zoom?: number
}

export default function LeafletMap({ center, zoom = 13 }: Props) {
  const [mounted, setMounted] = useState(false)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    setMounted(true)
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[60vh] md:h-[50vh] lg:h-[400px] rounded-md bg-gray-100" />
    )
  }

  return (
    <div className="w-full h-[60vh] md:h-[50vh] lg:h-[400px] rounded-* overflow-hidden px-3 pl-3 md:px-0 md:pl-0 z-0">
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full rounded-2xl md:rounded-[0px_0px_0px_0px]"
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        <Marker position={center}>
          <Popup>Property Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
