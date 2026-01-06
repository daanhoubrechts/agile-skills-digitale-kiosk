"use client";

import { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Zoek evenementen...",
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-clear na 30 seconden inactiviteit (kiosk mode)
  useEffect(() => {
    if (value) {
      const timeout = setTimeout(() => {
        onChange("");
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [value, onChange]);

  return (
    <div
      className={`
        relative flex items-center gap-3 bg-white rounded-xl px-4 py-3
        transition-all duration-200
        ${isFocused ? "ring-2 ring-indigo-500 shadow-lg" : "shadow-md"}
      `}
    >
      {/* Search Icon */}
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-lg"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors active:scale-90"
        >
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
