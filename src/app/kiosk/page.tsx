"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Event, EventCategory } from "@/types/event";
import { fetchEvents } from "@/lib/event-api";
import {
  filterEventsByCategory,
  searchEvents,
  getUpcomingEvents,
} from "@/data/events";
import EventCard from "@/components/EventCard";
import CategoryTabs from "@/components/CategoryTabs";
import DateFilter from "@/components/DateFilter";
import SearchBar from "@/components/SearchBar";

type DateFilterValue = "today" | "tomorrow" | "week" | "all";

export default function KioskPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "alle">("alle");
  const [selectedDate, setSelectedDate] = useState<DateFilterValue>("all");

  // Fetch events from API on mount
  useEffect(() => {
    async function loadEvents() {
      setIsLoading(true);
      try {
        const apiEvents = await fetchEvents({ limit: 100 });
        setEvents(apiEvents);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, []);

  // Available categories (only show categories that have events)
  const availableCategories = useMemo(() => {
    const cats = new Set(events.map((e) => e.category));
    return ["alle", ...Array.from(cats)] as (EventCategory | "alle")[];
  }, [events]);

  // Filter events based on all criteria
  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Filter by date (using actual current date)
    if (selectedDate !== "all" && filtered.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate === "today") {
        // Events that are happening today (started today or before AND end today or later)
        const endOfToday = new Date(today);
        endOfToday.setHours(23, 59, 59, 999);
        filtered = filtered.filter((e) => {
          const start = new Date(e.startDate);
          const end = e.endDate ? new Date(e.endDate) : start;
          const startDay = new Date(start);
          const endDay = new Date(end);
          startDay.setHours(0, 0, 0, 0);
          endDay.setHours(23, 59, 59, 999);
          // Event is on today if it starts on or before today AND ends on or after today
          return startDay <= endOfToday && endDay >= today;
        });
      } else if (selectedDate === "tomorrow") {
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const endOfTomorrow = new Date(tomorrow);
        endOfTomorrow.setHours(23, 59, 59, 999);
        
        filtered = filtered.filter((e) => {
          const start = new Date(e.startDate);
          const end = e.endDate ? new Date(e.endDate) : start;
          const startDay = new Date(start);
          const endDay = new Date(end);
          startDay.setHours(0, 0, 0, 0);
          endDay.setHours(23, 59, 59, 999);
          
          return startDay <= endOfTomorrow && endDay >= tomorrow;
        });
      } else if (selectedDate === "week") {
        const weekEnd = new Date(today);
        weekEnd.setDate(weekEnd.getDate() + 7);
        weekEnd.setHours(23, 59, 59, 999);
        
        filtered = filtered.filter((e) => {
          const start = new Date(e.startDate);
          const end = e.endDate ? new Date(e.endDate) : start;
          
          return start <= weekEnd && end >= today;
        });
      }
    }

    // Filter by category
    filtered = filterEventsByCategory(filtered, selectedCategory);

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = searchEvents(filtered, searchQuery);
    }

    // Sort by date
    return getUpcomingEvents(filtered);
  }, [events, selectedDate, selectedCategory, searchQuery]);

  const handleEventClick = (event: Event) => {
    router.push(`/event/${event.id}`);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("alle");
    setSelectedDate("all");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="px-4 py-4">
          {/* Logo & Title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white text-xl">🎉</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Evenementen in Gent</h1>
                <p className="text-xs text-gray-500">Live data van Visit Gent</p>
              </div>
            </div>
            
            {/* Reset button */}
            {(searchQuery || selectedCategory !== "alle" || selectedDate !== "all") && (
              <button
                onClick={resetFilters}
                className="px-3 py-1.5 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Search Bar */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {/* Date Filter */}
          <div className="mt-3">
            <DateFilter selectedDate={selectedDate} onSelect={setSelectedDate} />
          </div>
        </div>

        {/* Category Tabs */}
        <CategoryTabs
          categories={availableCategories}
          activeCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </header>

      {/* Main Content */}
      <main className="px-4 py-4 pb-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            {isLoading ? (
              "Laden..."
            ) : (
              `${filteredEvents.length} ${filteredEvents.length === 1 ? "evenement" : "evenementen"} gevonden`
            )}
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-40 bg-gray-200" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length > 0 ? (
          /* Events Grid */
          <div className="grid grid-cols-2 gap-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onClick={handleEventClick} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Geen evenementen gevonden
            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Probeer andere zoektermen of filters om meer te ontdekken.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium 
                         hover:bg-indigo-700 transition-colors active:scale-95"
            >
              Toon alle evenementen
            </button>
          </div>
        )}
      </main>

      {/* Touch hint for kiosk */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur rounded-full">
        <p className="text-white text-sm flex items-center gap-2">
          <span className="animate-bounce">👆</span>
          Tik op een event voor meer info
        </p>
      </div>
    </div>
  );
}
