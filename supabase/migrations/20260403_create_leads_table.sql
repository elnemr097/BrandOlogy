-- Brandology: leads table
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/hvnkcilglwflkiaghcjb/sql

create type lead_status as enum ('new', 'contacted', 'converted');
create type service_type as enum (
  'ai-automation',
  'marketing',
  'software',
  'design',
  'video',
  'other'
);

create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  email       text,
  service     text not null,
  message     text,
  source      text not null,
  status      lead_status not null default 'new',
  created_at  timestamptz not null default now()
);

-- Index for dashboard queries
create index leads_created_at_idx on leads (created_at desc);
create index leads_status_idx on leads (status);

-- Row Level Security
alter table leads enable row level security;

-- Only authenticated users (admins) can read leads
create policy "Admins can read leads"
  on leads for select
  to authenticated
  using (true);

-- Anyone can insert a lead (public form submissions)
create policy "Public can insert leads"
  on leads for insert
  to anon
  with check (true);
