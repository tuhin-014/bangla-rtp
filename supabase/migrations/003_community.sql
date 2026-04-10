-- BanglaRTP Community Posts Feed

-- User profiles (linked to Supabase auth.users)
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  city         text,
  avatar_url   text,
  created_at   timestamptz not null default now()
);

-- Posts
create table if not exists public.posts (
  id           uuid primary key default gen_random_uuid(),
  author_id    uuid not null references public.profiles(id) on delete cascade,
  category     text not null check (category in ('needs','offers','help','stories','ride_share','lost_found')),
  title        text not null,
  body         text not null,
  contact_info text,
  photo_url    text,
  city         text,
  flagged      boolean not null default false,
  flag_count   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Comments
create table if not exists public.comments (
  id        uuid primary key default gen_random_uuid(),
  post_id   uuid not null references public.posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body      text not null,
  created_at timestamptz not null default now()
);

-- Post flags / reports
create table if not exists public.post_flags (
  id         uuid primary key default gen_random_uuid(),
  post_id    uuid not null references public.posts(id) on delete cascade,
  flagger_id uuid not null references public.profiles(id) on delete cascade,
  reason     text,
  created_at timestamptz not null default now(),
  unique (post_id, flagger_id)
);

-- Indexes
create index if not exists posts_category_idx on public.posts (category);
create index if not exists posts_created_idx  on public.posts (created_at desc);
create index if not exists comments_post_idx  on public.comments (post_id, created_at);

-- Row Level Security
alter table public.profiles   enable row level security;
alter table public.posts       enable row level security;
alter table public.comments    enable row level security;
alter table public.post_flags  enable row level security;

-- Profile policies
create policy "Profiles readable by all"    on public.profiles for select using (true);
create policy "Users insert own profile"    on public.profiles for insert with check (auth.uid() = id);
create policy "Users update own profile"    on public.profiles for update using (auth.uid() = id);

-- Post policies
create policy "Non-flagged posts readable"  on public.posts for select  using (flagged = false);
create policy "Auth users create posts"     on public.posts for insert  with check (auth.uid() = author_id);
create policy "Authors update own posts"    on public.posts for update  using (auth.uid() = author_id);
create policy "Authors delete own posts"    on public.posts for delete  using (auth.uid() = author_id);

-- Comment policies
create policy "Comments readable by all"    on public.comments for select using (true);
create policy "Auth users create comments"  on public.comments for insert with check (auth.uid() = author_id);
create policy "Authors delete own comments" on public.comments for delete using (auth.uid() = author_id);

-- Flag policies
create policy "Auth users flag posts"       on public.post_flags for insert with check (auth.uid() = flagger_id);

-- Auto-update updated_at on posts
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger posts_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

-- Auto-create profile on sign-up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
