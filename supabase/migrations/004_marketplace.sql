-- Marketplace listings table
create table if not exists marketplace_listings (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('for_sale','rental','job_offered','job_wanted','service')),
  title text not null,
  description text not null,
  price text,
  category text,
  city text,
  contact_name text not null,
  contact_phone text,
  contact_email text,
  whatsapp text,
  photo_url text,
  author_id uuid references profiles(id) on delete set null,
  status text not null default 'active' check (status in ('active','sold','expired','removed')),
  expires_at timestamptz not null default (now() + interval '30 days'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists marketplace_type_idx    on marketplace_listings (type);
create index if not exists marketplace_status_idx  on marketplace_listings (status);
create index if not exists marketplace_created_idx on marketplace_listings (created_at desc);

alter table marketplace_listings enable row level security;

create policy "Active listings readable by all" on marketplace_listings
  for select using (status = 'active' and expires_at > now());

create policy "Authenticated users create listings" on marketplace_listings
  for insert with check (auth.uid() = author_id or author_id is null);

create policy "Authors update own listings" on marketplace_listings
  for update using (auth.uid() = author_id);

-- Auto-update updated_at
create trigger set_marketplace_updated_at
  before update on marketplace_listings
  for each row execute function set_updated_at();
