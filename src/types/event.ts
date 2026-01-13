export interface Event {
  id: string;
  title: string;
  description: string;
  teaser: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  address?: string;
  imageUrl: string;
  ticketLink?: string;
  category: EventCategory;
  price: string; // "Gratis" of bedrag
  source: "API" | "MANUAL";
}

export type EventCategory =
  | "muziek"
  | "kunst"
  | "food"
  | "sport"
  | "theater"
  | "film"
  | "familie"
  | "nightlife"
  | "markt"
  | "overig";

export const categoryLabels: Record<EventCategory, string> = {
  muziek: "🎵 Muziek",
  kunst: "🎨 Kunst",
  food: "🍽️ Food",
  sport: "⚽ Sport",
  theater: "🎭 Theater",
  film: "🎬 Film",
  familie: "👨‍👩‍👧 Familie",
  nightlife: "🌙 Nightlife",
  markt: "🛍️ Markt",
  overig: "📌 Overig",
};

export const categoryColors: Record<EventCategory, string> = {
  muziek: "bg-purple-500",
  kunst: "bg-pink-500",
  food: "bg-orange-500",
  sport: "bg-green-500",
  theater: "bg-red-500",
  film: "bg-blue-500",
  familie: "bg-yellow-500",
  nightlife: "bg-indigo-500",
  markt: "bg-teal-500",
  overig: "bg-gray-500",
};
