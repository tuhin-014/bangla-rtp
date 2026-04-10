"use client";

import { useState } from "react";
import { CalendarDays, MapPin, Clock, ExternalLink, Users } from "lucide-react";
import { events } from "@/data/events";
import { FilterBar } from "@/components/ui/FilterBar";
import { Badge } from "@/components/ui/Badge";
import { formatDate, isUpcoming } from "@/lib/utils";
import type { Event } from "@/lib/types";

type EventType = Event["event_type"] | "all";

const eventTypes: { value: EventType; label: string }[] = [
  { value: "all", label: "All Events" },
  { value: "cultural", label: "Cultural" },
  { value: "religious", label: "Religious" },
  { value: "sports", label: "Sports" },
  { value: "educational", label: "Educational" },
  { value: "professional", label: "Professional" },
  { value: "social", label: "Social" },
];

const typeColors: Record<Event["event_type"], string> = {
  cultural: "yellow",
  religious: "green",
  sports: "blue",
  educational: "gray",
  professional: "gray",
  social: "red",
};

export default function EventsPage() {
  const [filter, setFilter] = useState<EventType>("all");

  const sorted = events
    .filter((e) => e.approved)
    .sort((a, b) => a.date.localeCompare(b.date));

  const filtered = sorted.filter(
    (e) => filter === "all" || e.event_type === filter
  );

  const upcoming = filtered.filter((e) => isUpcoming(e.date));
  const past = filtered.filter((e) => !isUpcoming(e.date));

  return (
    <div className="page-container py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <CalendarDays size={20} />
          <span className="text-sm font-medium uppercase tracking-wide">Community Events</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Community Events
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl">
          Eid celebrations, cricket tournaments, Pohela Boishakh, professional meetups, and more — organized by your community.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <FilterBar
          options={eventTypes}
          value={filter}
          onChange={setFilter}
          label="Type"
        />
        <a
          href="/about#contact"
          className="text-sm font-medium text-brand-green hover:underline"
        >
          + Submit an event
        </a>
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {upcoming.length === 0 && (
        <p className="text-gray-400 py-8">No upcoming events matching that filter.</p>
      )}

      {/* Past */}
      {past.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-400 dark:text-gray-600 mb-4">
            Past Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 opacity-60">
            {past.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          Organizing a community event?
        </p>
        <a href="/about#contact" className="btn-primary text-sm">
          Submit Your Event →
        </a>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="card flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <Badge variant={typeColors[event.event_type] as "green" | "red" | "gray" | "blue" | "yellow"}>
          {event.event_type}
        </Badge>
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {formatDate(event.date).split(",").slice(0, 2).join(",")}
        </span>
      </div>

      <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
        {event.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {event.description}
      </p>

      <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
        <p className="flex items-center gap-2">
          <Clock size={13} className="text-gray-400 shrink-0" />
          {event.time}
        </p>
        <p className="flex items-start gap-2">
          <MapPin size={13} className="mt-0.5 text-gray-400 shrink-0" />
          <span className="text-xs">{event.location}</span>
        </p>
        <p className="flex items-center gap-2">
          <Users size={13} className="text-gray-400 shrink-0" />
          <span className="text-xs text-gray-500">{event.organizer}</span>
        </p>
      </div>

      {event.url && (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-brand-green hover:underline"
        >
          <ExternalLink size={11} />
          Event details
        </a>
      )}
    </div>
  );
}
