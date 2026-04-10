-- BanglaRTP: Local Entrepreneurs / Small Businesses

create table if not exists public.entrepreneurs (
  id               uuid primary key default gen_random_uuid(),
  business_name    text not null,
  owner_name       text not null,
  category         text not null,
  short_description text not null,
  long_description text,
  phone            text,
  whatsapp         text,
  email            text,
  instagram        text,
  facebook         text,
  service_area     text[] not null default '{}',
  years_in_business int,
  price_range      text,
  photo_url        text,
  approved         boolean not null default false,
  created_at       timestamptz not null default now()
);

create index if not exists entrepreneurs_approved_idx  on public.entrepreneurs (approved);
create index if not exists entrepreneurs_category_idx  on public.entrepreneurs (category);

alter table public.entrepreneurs enable row level security;

create policy "Anyone can read approved"
  on public.entrepreneurs for select using (approved = true);

create policy "Anyone can insert"
  on public.entrepreneurs for insert with check (true);
