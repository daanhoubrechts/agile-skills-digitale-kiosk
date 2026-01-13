import { events } from "@/data/events";
import { notFound } from "next/navigation";
import Link from "next/link";

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const generateCalendarUrl = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Image */}
      <div className="relative h-64 sm:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      </div>

      {/* Content */}
      <div className="px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {event.title}
          </h1>

          {/* Date & Location */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-indigo-600"
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
              </div>
              <span className="text-lg">{event.date}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-emerald-600"
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
              </div>
              <span className="text-lg">{event.location}</span>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-6" />

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Over dit evenement
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {event.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-4 px-6 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-indigo-600/30"
          >
            Koop Tickets
          </a>
          <a
            href={generateCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-4 px-6 rounded-xl font-semibold text-lg transition-colors"
          >
            Zet in Agenda
          </a>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}
