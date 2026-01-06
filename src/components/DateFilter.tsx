"use client";

interface DateFilterProps {
  selectedDate: "today" | "tomorrow" | "week" | "all";
  onSelect: (date: "today" | "tomorrow" | "week" | "all") => void;
}

export default function DateFilter({ selectedDate, onSelect }: DateFilterProps) {
  const options: { value: "today" | "tomorrow" | "week" | "all"; label: string }[] = [
    { value: "all", label: "Alles" },
    { value: "today", label: "Vandaag" },
    { value: "tomorrow", label: "Morgen" },
    { value: "week", label: "Deze week" },
  ];

  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`
            flex-1 px-3 py-2 rounded-lg text-sm font-medium
            transition-all duration-200 active:scale-95
            ${
              selectedDate === option.value
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
