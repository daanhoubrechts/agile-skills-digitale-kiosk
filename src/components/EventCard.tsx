"use client";

import { useState } from "react";
import { Event, categoryColors } from "@/types/event";
import Image from "next/image";

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

// Generic fallback if category placeholder also fails
const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop";

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Get the appropriate image URL with fallbacks
  const getImageUrl = () => {
    if (!imageError && event.imageUrl) {
      return event.imageUrl;
    }
    return categoryPlaceholders[event.category] || DEFAULT_PLACEHOLDER;
  };
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("nl-BE", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  const isToday = (date: Date) => {
    const today = new Date();
    const eventDate = new Date(date);
    return (
      eventDate.getDate() === today.getDate() &&
      eventDate.getMonth() === today.getMonth() &&
      eventDate.getFullYear() === today.getFullYear()
    );
  };

  const isTomorrow = (date: Date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const eventDate = new Date(date);
    return (
      eventDate.getDate() === tomorrow.getDate() &&
      eventDate.getMonth() === tomorrow.getMonth() &&
      eventDate.getFullYear() === tomorrow.getFullYear()
    );
  };

  const getDateLabel = (date: Date) => {
    if (isToday(date)) return "Vandaag";
    if (isTomorrow(date)) return "Morgen";
    return formatDate(date);
  };

  return (
    <button
      onClick={() => onClick(event)}
      className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-lg 
                 transition-all duration-200 active:scale-[0.98] hover:shadow-xl
                 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={getImageUrl()}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
          onError={() => setImageError(true)}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-medium ${categoryColors[event.category]}`}
        >
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold">
          {event.price}
        </div>

        {/* Date overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
            {getDateLabel(event.startDate)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-1">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {event.teaser}
        </p>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </button>
  );
}
