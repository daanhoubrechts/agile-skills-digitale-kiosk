"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { Event, categoryLabels, categoryColors } from "@/types/event";
import { fetchEventById } from "@/lib/event-api";

// Default placeholder images per category
const categoryPlaceholders: Record<string, string> = {
  muziek: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
  kunst: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop",
  food: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop",
  sport: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
  theater: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
  film: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
  familie: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
  nightlife: "https://images.unsplash.com/photo-1571266028243-d220c6a9c1d3?w=800&h=600&fit=crop",
  markt: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&h=600&fit=crop",
  overig: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
};

const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop";

export default function EventPage() {
  const router = useRouter();
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Get the appropriate image URL with fallbacks
  const getImageUrl = () => {
    if (!event) return DEFAULT_PLACEHOLDER;
    if (!imageError && event.imageUrl) {
      return event.imageUrl;
    }
    return categoryPlaceholders[event.category] || DEFAULT_PLACEHOLDER;
  };

  useEffect(() => {
    async function loadEvent() {
      setIsLoading(true);
      const id = params.id as string;
      const foundEvent = await fetchEventById(id);
      setEvent(foundEvent);
      setIsLoading(false);
    }
    loadEvent();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Event laden...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔍</span>
          </div>
          <p className="text-gray-600 mb-4">Event niet gevonden</p>
          <button
            onClick={() => router.push("/kiosk")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Terug naar overzicht
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("nl-BE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-72 sm:h-96">
        <Image
          src={getImageUrl()}
          alt={event.title}
          fill
          className="object-cover"
          priority
          unoptimized
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => router.push("/kiosk")}
          className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md text-white p-3 rounded-full 
                     hover:bg-white/30 transition-colors active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Category & Price */}
        <div className="absolute top-4 right-4 flex gap-2">
          <span className={`px-3 py-1.5 rounded-full text-white text-sm font-medium ${categoryColors[event.category]}`}>
            {categoryLabels[event.category]}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/90 text-gray-900 text-sm font-bold">
            {event.price}
          </span>
        </div>

        {/* Title on image */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 relative z-10 pb-32">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Date & Location */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{formatDate(event.startDate)}</p>
                {event.endDate && (
                  <p className="text-gray-600 text-sm">tot {formatDate(event.endDate)}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{event.location}</p>
                {event.address && <p className="text-gray-600 text-sm">{event.address}</p>}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-6" />

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Over dit evenement</h2>
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {event.description || "Geen beschrijving beschikbaar."}
            </p>
          </div>

          {/* Source badge */}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-medium">
              Stad Gent Open Data
            </span>
            <span>Gentse Feesten 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
