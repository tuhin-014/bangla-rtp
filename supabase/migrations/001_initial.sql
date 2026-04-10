-- BanglaRTP Database Schema

-- Businesses (halal grocery + restaurants)
create table if not exists public.businesses (
  id          text primary key,
  name        text not null,
  category    text not null check (category in ('grocery', 'restaurant')),
  address     text not null,
  city        text not null,
  phone       text,
  website     text,
  hours       text,
  maps_url    text,
  cuisine     text,
  price_range text check (price_range in ('$', '$$', '$$$')),
  halal_certified boolean default false,
  description text,
  approved    boolean default false,
  created_at  timestamptz default now()
);

-- Masjids
create table if not exists public.masjids (
  id               text primary key,
  name             text not null,
  address          text not null,
  city             text not null,
  phone            text,
  website          text,
  prayer_times_url text,
  maps_url         text,
  description      text,
  jummah_time      text,
  created_at       timestamptz default now()
);

-- Events
create table if not exists public.events (
  id          text primary key default gen_random_uuid()::text,
  title       text not null,
  description text,
  date        date not null,
  time        text,
  location    text not null,
  organizer   text,
  event_type  text check (event_type in ('cultural','religious','sports','educational','professional','social')),
  url         text,
  approved    boolean default false,
  created_at  timestamptz default now()
);

-- Professionals directory
create table if not exists public.professionals (
  id           text primary key default gen_random_uuid()::text,
  name         text not null,
  profession   text not null,
  specialty    text,
  phone        text,
  email        text,
  languages    text[] default '{}',
  city         text not null,
  practice_name text,
  approved     boolean default false,
  created_at   timestamptz default now()
);

-- Submission queue (for moderation)
create table if not exists public.submissions (
  id                  uuid primary key default gen_random_uuid(),
  type                text not null,
  data_json           jsonb not null,
  submitted_by_email  text,
  status              text default 'pending' check (status in ('pending','approved','rejected')),
  created_at          timestamptz default now()
);

-- Row Level Security
alter table public.businesses    enable row level security;
alter table public.masjids       enable row level security;
alter table public.events        enable row level security;
alter table public.professionals enable row level security;
alter table public.submissions   enable row level security;

-- Public read access for approved records
create policy "public read businesses"    on public.businesses    for select using (approved = true);
create policy "public read masjids"       on public.masjids       for select using (true);
create policy "public read events"        on public.events        for select using (approved = true);
create policy "public read professionals" on public.professionals for select using (approved = true);

-- Submissions: anyone can insert, only service role can read
create policy "anyone can submit" on public.submissions for insert with check (true);
