-- Casal Finanças: tabelas e regras de acesso (Supabase / Postgres).
-- Rode UMA vez no SQL Editor. Troque os dois e-mails de exemplo pelos reais
-- (eles ficam só no banco; não os coloque em arquivos do repositório público).

-- 1) Quem pode acessar: só estas duas contas
create table if not exists public.allowed_people (
  email  text primary key,
  person text not null unique check (person in ('ele', 'ela'))
);
insert into public.allowed_people (email, person) values
  ('EMAIL_DO_FELIPE@exemplo.com', 'ele'),
  ('EMAIL_DA_KAUANNY@exemplo.com', 'ela')
on conflict (email) do nothing;
alter table public.allowed_people enable row level security;
revoke all on public.allowed_people from anon, authenticated;

create or replace function public.my_person()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select person from public.allowed_people
  where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  limit 1
$$;
revoke all on function public.my_person() from public, anon;
grant execute on function public.my_person() to authenticated;

-- 2) Orçamento: um registro por receita, lançamento, pagamento, meta e limites
create table if not exists public.records (
  collection text not null check (collection in ('incomes', 'transactions', 'payments', 'goals', 'meta')),
  id         text not null check (id ~ '^[A-Za-z0-9_.:@+~-]{1,200}$'),
  data       jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by text,
  primary key (collection, id)
);
alter table public.records enable row level security;
drop policy if exists records_casal on public.records;
create policy records_casal on public.records
  for all to authenticated
  using (public.my_person() is not null)
  with check (public.my_person() is not null);

create or replace function public.touch_record()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  new.updated_by := public.my_person();
  return new;
end
$$;
create or replace trigger records_touch
  before insert or update on public.records
  for each row execute function public.touch_record();

-- 3) Pessoas: última entrada de cada um
create table if not exists public.presence (
  person     text primary key check (person in ('ele', 'ela')),
  last_enter timestamptz,
  last_seen  timestamptz
);
alter table public.presence enable row level security;
drop policy if exists presence_read on public.presence;
create policy presence_read on public.presence
  for select to authenticated using (public.my_person() is not null);
drop policy if exists presence_insert on public.presence;
create policy presence_insert on public.presence
  for insert to authenticated with check (person = public.my_person());
drop policy if exists presence_update on public.presence;
create policy presence_update on public.presence
  for update to authenticated
  using (person = public.my_person()) with check (person = public.my_person());

-- 4) Registro de atividades (cada um só escreve em seu próprio nome; ninguém apaga)
create table if not exists public.activity_log (
  id     uuid primary key default gen_random_uuid(),
  at     timestamptz not null default now(),
  person text not null check (person in ('ele', 'ela')),
  text   text not null check (char_length(text) <= 200)
);
alter table public.activity_log enable row level security;
drop policy if exists log_read on public.activity_log;
create policy log_read on public.activity_log
  for select to authenticated using (public.my_person() is not null);
drop policy if exists log_insert on public.activity_log;
create policy log_insert on public.activity_log
  for insert to authenticated with check (person = public.my_person());

-- 5) Permissões explícitas (o projeto foi criado sem expor tabelas automaticamente)
grant select, insert, update, delete on public.records to authenticated;
grant select, insert, update on public.presence to authenticated;
grant select, insert on public.activity_log to authenticated;

-- 6) Atualização ao vivo entre os aparelhos
do $$
begin
  begin alter publication supabase_realtime add table public.records; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.presence; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.activity_log; exception when duplicate_object then null; end;
end
$$;
