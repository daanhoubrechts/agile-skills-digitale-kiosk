export interface Event {
  id: string;
  title: string;
  teaser: string;
  description: string;
  imageUrl: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  price: string;
  category: string;
  ticketLink?: string;
}

export const categoryColors: Record<string, string> = {
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
