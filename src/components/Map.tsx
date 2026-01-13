"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import type { LatLngTuple } from "leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// Import marker images for Next.js compatibility
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


// ✅ Fix default marker icons (Leaflet 1.9+) for Next.js
if (typeof window !== "undefined") {
  L.Marker.prototype.options.icon = L.icon({
    iconUrl: markerIcon.src ?? markerIcon,
    iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
    shadowUrl: markerShadow.src ?? markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
}

// Routing component
function Routing({ start, destination }: { start: LatLngTuple; destination: LatLngTuple }) {
  const map = useMap();

  useEffect(() => {
    if (!start || !destination || !map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(destination[0], destination[1]),
      ],
      lineOptions: { styles: [{ color: "blue", opacity: 0.6, weight: 5 }] },
      addWaypoints: false,
      routeWhileDragging: false,
      show: false,
      createMarker: () => null,
    }).addTo(map);

    const bounds = L.latLngBounds([start, destination]);
    map.fitBounds(bounds, { padding: [10, 10] });

    return () => {
      if (map && routingControl) {
        try {
          map.removeControl(routingControl);
        } catch (e) {
          // ignore errors if map is already unmounted
        }
      }
    };
  }, [start, destination, map]);

  return null;
}

type Props = {
  address?: string;
};

export default function Map({ address = "" }: Props) {
  const [coords, setCoords] = useState<LatLngTuple | null>(null);
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);

  // Geocode the address
  useEffect(() => {
    if (!address) return;

    async function geocode() {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setCoords([+data[0].lat, +data[0].lon]);
      }
    }

    geocode();
  }, [address]);

  // Get user's current location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  if (!address) return <p>No address provided</p>;
  if (!coords) return <p>Loading map...</p>;
  if (!userLocation) return <p>Fetching your location...</p>;

  return (
    <div className="w-full mx-auto h-[400px] rounded-xl overflow-hidden shadow">
      <MapContainer center={coords} zoom={15} className="h-full w-full">
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Marker for user's location */}
        <Marker position={userLocation} />
        {/* Marker for destination */}
        <Marker position={coords} />
        <Routing start={userLocation} destination={coords} />
      </MapContainer>
    </div>
  );
}
