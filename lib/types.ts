export type City =
  | "Raleigh"
  | "Durham"
  | "Chapel Hill"
  | "Cary"
  | "Morrisville"
  | "Apex"
  | "Carrboro";

export interface Business {
  id: string;
  name: string;
  category: "grocery" | "restaurant";
  address: string;
  city: City;
  phone?: string;
  website?: string;
  hours?: string;
  maps_url: string;
  cuisine?: string;
  price_range?: "$" | "$$" | "$$$";
  halal_certified?: boolean;
  description?: string;
  approved: boolean;
}

export interface Masjid {
  id: string;
  name: string;
  address: string;
  city: City;
  phone?: string;
  website?: string;
  prayer_times_url?: string;
  maps_url: string;
  description?: string;
  jummah_time?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  time: string;
  location: string;
  organizer: string;
  event_type: "cultural" | "religious" | "sports" | "educational" | "professional" | "social";
  url?: string;
  approved: boolean;
}

export interface Professional {
  id: string;
  name: string;
  profession: string;
  specialty?: string;
  phone?: string;
  email?: string;
  languages: string[];
  city: City;
  practice_name?: string;
  approved: boolean;
}

export type CuisineType =
  | "Bangladeshi"
  | "Indian"
  | "Pakistani"
  | "Middle Eastern"
  | "Mediterranean"
  | "American Halal"
  | "Turkish"
  | "African"
  | "Mixed";
