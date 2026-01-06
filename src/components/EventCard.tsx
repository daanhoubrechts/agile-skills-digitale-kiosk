"use client";

import { Event, categoryColors } from "@/types/event";
import Image from "next/image";

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
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
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
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
