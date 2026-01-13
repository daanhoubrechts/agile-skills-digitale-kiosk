"use client";

import { EventCategory, categoryLabels } from "@/types/event";

interface CategoryTabsProps {
  categories: (EventCategory | "alle")[];
  activeCategory: EventCategory | "alle";
  onSelect: (category: EventCategory | "alle") => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: CategoryTabsProps) {
  const allLabels: Record<EventCategory | "alle", string> = {
    alle: "✨ Alle",
    ...categoryLabels,
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 px-4 py-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap
              transition-all duration-200 active:scale-95
              ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
              }
            `}
          >
            {allLabels[category]}
          </button>
        ))}
      </div>
    </div>
  );
}
