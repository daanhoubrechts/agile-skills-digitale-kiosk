import { Event } from "@/types/event";
import { getDummyEvents } from "@/data/dummy-events";

// Dummy data only - API removed for reliable event data

export interface FetchEventsOptions {
  limit?: number;
  offset?: number;
  futureOnly?: boolean;
}

export async function fetchEvents(options: FetchEventsOptions = {}): Promise<Event[]> {
  // Return only dummy events - they are dynamically generated relative to today
  const dummyEvents = getDummyEvents();
  
  // Sort by start date
  const sortedEvents = [...dummyEvents].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  
  return sortedEvents;
}

// Fetch a single event by ID
export async function fetchEventById(id: string): Promise<Event | null> {
  const dummyEvents = getDummyEvents();
  const event = dummyEvents.find(e => e.id === id);
  return event || null;
}

// Get total event count
export async function getEventCount(): Promise<number> {
  return getDummyEvents().length;
}
