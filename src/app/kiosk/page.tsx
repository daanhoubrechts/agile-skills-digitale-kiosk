"use client";

import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { events } from "@/data/events";

export default function KioskPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentEvent = events[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const qrUrl = currentEvent.ticketLink;

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${currentEvent.imageUrl})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Top Section - Event Info */}
        <div className="flex-1 flex flex-col justify-start p-8 pt-16">
          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {events.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-12"
                    : "bg-white/40 w-2"
                }`}
              />
            ))}
          </div>

          {/* Event Title & Details */}
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
              {currentEvent.title}
            </h1>
            
            <div className="flex flex-col items-center gap-4 text-xl text-white/90">
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {currentEvent.date}
              </span>
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
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
                {currentEvent.location}
              </span>
            </div>

            <p className="text-2xl text-white/80 leading-relaxed font-light px-4">
              {currentEvent.teaser}
            </p>
          </div>
        </div>

        {/* Bottom Section - QR Code */}
        <div className="pb-8 px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 max-w-[180px] mx-auto shadow-lg">
            <div className="text-center space-y-3">
              <a
                href={qrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-xl mx-auto w-fit block hover:scale-105 transition-transform"
              >
                {qrUrl && (
                  <QRCode
                    value={qrUrl}
                    size={100}
                    level="H"
                  />
                )}
              </a>

              <p className="text-gray-500 text-xs">
                Scan voor info
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
