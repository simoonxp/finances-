const peopleNames = { ele: 'Felipe Simon', ela: 'Kauanny Ramos' };

const icons = {
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7V5.5A2.5 2.5 0 0 0 17.5 3H5a3 3 0 0 0 0 6h15v9.5a2.5 2.5 0 0 1-2.5 2.5H5a3 3 0 0 1-3-3V6"/><path d="M16 14h.01"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 20h14"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  overview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="15" cy="12" r="2" fill="currentColor"/><circle cx="11" cy="18" r="2" fill="currentColor"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM17 10h1.5a2.5 2.5 0 0 1 0 5H17M7 21h10"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m5 17-1-5 2-5h12l2 5-1 5"/><path d="M4 12h16M7 17h.01M17 17h.01M6 7l1-3h10l1 3"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3.4 13.4a2 2 0 0 1-.6-1.4V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.4Z"/><circle cx="7.5" cy="7.5" r="1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.8a3.4 3.4 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/></svg>'
};

const categoryMeta = {
  moradia: { label: 'Moradia', icon: 'home', color: '#262626' },
  mercado: { label: 'Mercado', icon: 'cart', color: '#202020' },
  transporte: { label: 'Transporte', icon: 'car', color: '#2d2d2d' },
  lazer: { label: 'Lazer', icon: 'coffee', color: '#242424' },
  pessoal: { label: 'Pessoal', icon: 'heart', color: '#292929' },
  outros: { label: 'Outros', icon: 'tag', color: '#202020' }
};

const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const shortMonths = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
let today = new Date();
let state = emptyState();
let activePerson = null;
let transactionDraftType = 'variavel';
let activeView = 'overview';
let selectedMonth = readPrefMonth() || `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
let activeFilter = 'todos';
let editingTransactionId = null;

const PREF_KEY = 'casal-financas-prefs';
const ID_RE = /^[A-Za-z0-9_.~:@+-]{1,200}$/;
const COLLECTIONS = ['incomes', 'transactions', 'payments', 'goals'];

let sb = null;
try { sb = window.supabase.createClient(window.CASAL_CONFIG.url, window.CASAL_CONFIG.key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } }); } catch { sb = null; }

let gate = 'checking'; // checking | login | denied | error | ok
let loginError = '';
let session = null;
let channel = null;
let channelKey = '';
const remote = { incomes: new Map(), transactions: new Map(), payments: new Map(), goals: new Map() };
let remoteLimits = null;
const overlay = new Map(); // "colecao/id" -> { value }
const chains = new Map();
const cloud = { loaded: false, pending: 0, error: '', stalled: false };
let lastView = new Map();
let renderPending = false;
let loadTimer = null;

function currentMonthKey() { return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`; }
function readPrefMonth() {
  try { const value = JSON.parse(localStorage.getItem(PREF_KEY) || '{}').selectedMonth; return /^\d{4}-\d{2}$/.test(value || '') ? value : null; } catch { return null; }
}
function savePrefMonth() { try { localStorage.setItem(PREF_KEY, JSON.stringify({ selectedMonth })); } catch { /* preferência local opcional */ } }

function emptyState() {
  return { selectedMonth: currentMonthKey(), incomes: [], transactions: [], limits: { ele: 800, ela: 800 }, payments: [], goals: [] };
}
function limitNumber(value, fallback) { return value !== null && value !== undefined && Number.isFinite(Number(value)) ? Number(value) : fallback; }
function viewKey(col, id) { return `${col}/${id}`; }
function cleanRecord(value) { return JSON.parse(JSON.stringify(value)); }

function rebuildState() {
  const next = { selectedMonth };
  for (const col of COLLECTIONS) {
    const merged = new Map(remote[col]);
    for (const [key, entry] of overlay) {
      const [c, id] = key.split('/');
      if (c !== col) continue;
      if (entry.value === null) merged.delete(id); else merged.set(id, entry.value);
    }
    next[col] = [...merged.values()].map((record) => ({ ...record }));
  }
  const lim = overlay.get('meta/limits')?.value || remoteLimits || {};
  next.limits = { ele: limitNumber(lim.ele, 800), ela: limitNumber(lim.ela, 800) };
  state = next;
  lastView = snapshotView(state);
}

function snapshotView(source) {
  const view = new Map();
  for (const col of COLLECTIONS) for (const rec of source[col]) view.set(viewKey(col, rec.id), JSON.stringify(rec));
  view.set('meta/limits', JSON.stringify({ ele: source.limits.ele, ela: source.limits.ela }));
  return view;
}

function queueWrite(key, value) {
  const [collection, id] = key.split('/');
  const entry = { value };
  overlay.set(key, entry);
  cloud.pending += 1; cloud.error = '';
  const task = (chains.get(key) || Promise.resolve()).catch(() => {}).then(async () => {
    const result = value === null
      ? await sb.from('records').delete().eq('collection', collection).eq('id', id)
      : await sb.from('records').upsert({ collection, id, data: cleanRecord(value) }, { onConflict: 'collection,id' });
    if (result.error) throw result.error;
  });
  chains.set(key, task);
  task.then(() => {
    if (overlay.get(key) !== entry) return;
    overlay.delete(key);
    if (collection === 'meta') remoteLimits = value;
    else if (value === null) remote[collection].delete(id);
    else remote[collection].set(id, { ...cleanRecord(value), id });
  }).catch(() => {
    if (overlay.get(key) === entry) overlay.delete(key);
    cloud.error = 'Não foi possível salvar. A alteração foi desfeita.';
    rebuildState(); scheduleRender(); showToast(cloud.error);
  }).finally(() => { cloud.pending = Math.max(0, cloud.pending - 1); updateSyncBadge(); });
  updateSyncBadge();
}

function persist() {
  state.selectedMonth = selectedMonth;
  savePrefMonth();
  if (!sb || gate !== 'ok') return;
  const wanted = snapshotView(state);
  const byKey = new Map();
  for (const col of COLLECTIONS) for (const rec of state[col]) byKey.set(viewKey(col, rec.id), rec);
  byKey.set('meta/limits', { ele: state.limits.ele, ela: state.limits.ela });
  const ops = [];
  for (const [key, json] of wanted) if (lastView.get(key) !== json) { ops.push([key, lastView.has(key) ? 'edit' : 'add']); queueWrite(key, byKey.get(key)); }
  for (const key of lastView.keys()) if (!wanted.has(key)) { ops.push([key, 'delete']); queueWrite(key, null); }
  logChanges(ops, lastView, wanted);
  lastView = wanted;
}

function syncState() {
  if (cloud.error) return { state: 'error', label: 'Erro ao salvar' };
  if (cloud.pending > 0) return { state: 'saving', label: 'Salvando…' };
  if (cloud.stalled) return { state: 'offline', label: 'Sem confirmação da nuvem' };
  if (!cloud.loaded) return { state: 'loading', label: 'Carregando…' };
  return { state: 'synced', label: 'Sincronizado' };
}
function updateSyncBadge() {
  const info = syncState();
  document.querySelectorAll('.sync-badge:not([data-person-badge])').forEach((badge) => { badge.dataset.state = info.state; badge.textContent = info.label; });
}
function cloudReady() { return cloud.loaded; }

function scheduleRender() {
  const el = document.activeElement;
  if (gate === 'ok' && activePerson && el && el.closest && el.closest('#app') && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) {
    if (!renderPending) {
      renderPending = true;
      document.addEventListener('focusout', () => setTimeout(() => { renderPending = false; scheduleRender(); }, 200), { once: true });
    }
    updateSyncBadge();
    return;
  }
  render();
}

async function fetchAllRecords() {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb.from('records').select('collection,id,data').order('collection').order('id').range(from, from + 999);
    if (error) throw error;
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return rows;
}

async function reloadAll() {
  try {
    const rows = await fetchAllRecords();
    const next = { incomes: new Map(), transactions: new Map(), payments: new Map(), goals: new Map() };
    let limits = null;
    for (const row of rows) {
      if (row.collection === 'meta') { if (row.id === 'limits') limits = row.data; }
      else if (next[row.collection]) next[row.collection].set(row.id, { ...row.data, id: row.id });
    }
    for (const col of COLLECTIONS) remote[col] = next[col];
    remoteLimits = limits;
    cloud.loaded = true; cloud.stalled = false; cloud.error = '';
    await loadPeopleData();
    rebuildState(); scheduleRender(); updateSyncBadge();
  } catch {
    cloud.stalled = true; updateSyncBadge();
  }
}

function onRecordChange(payload) {
  const row = payload.eventType === 'DELETE' ? payload.old : payload.new;
  if (!row || !row.collection) return;
  if (row.collection === 'meta') {
    if (row.id === 'limits') remoteLimits = payload.eventType === 'DELETE' ? null : payload.new.data;
  } else if (remote[row.collection]) {
    if (payload.eventType === 'DELETE') remote[row.collection].delete(row.id);
    else remote[row.collection].set(row.id, { ...payload.new.data, id: row.id });
  }
  rebuildState(); scheduleRender(); updateSyncBadge();
}

function startCloud() {
  stopCloud();
  channelKey = `${activePerson}-${Math.random().toString(36).slice(2, 8)}`;
  channel = sb.channel('casal', { config: { presence: { key: channelKey } } })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'records' }, onRecordChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'presence' }, onPresenceChange)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'activity_log' }, onLogInsert)
    .on('presence', { event: 'sync' }, () => refreshPeopleView())
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') { channel.track({ person: activePerson }).catch(() => {}); reloadAll(); }
      else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') { cloud.stalled = true; updateSyncBadge(); }
    });
  reloadAll();
  clearTimeout(loadTimer);
  loadTimer = setTimeout(() => { if (!cloud.loaded) { cloud.stalled = true; updateSyncBadge(); } }, 10000);
}

function stopCloud() {
  if (channel && sb) { try { sb.removeChannel(channel); } catch { /* ignora */ } }
  channel = null;
  clearTimeout(loadTimer);
}

function resetLocalData() {
  for (const col of COLLECTIONS) remote[col] = new Map();
  remoteLimits = null; overlay.clear(); chains.clear();
  cloud.loaded = false; cloud.pending = 0; cloud.error = ''; cloud.stalled = false;
  state = emptyState(); lastView = new Map();
  logEntries = []; presenceDocs = {}; openLogFor = null;
}

function authMessage(error) {
  const text = String(error && error.message || '').toLowerCase();
  if (text.includes('invalid login') || text.includes('invalid credentials')) return 'E-mail ou senha incorretos.';
  if (text.includes('rate') || text.includes('too many')) return 'Muitas tentativas. Espere um pouco e tente de novo.';
  if (text.includes('fetch') || text.includes('network')) return 'Sem conexão. Verifique a internet e tente de novo.';
  return 'Não foi possível entrar. Tente de novo.';
}

function renderLogin() {
  document.querySelector('#app').innerHTML = `<main class="profile-screen"><section class="profile-panel" aria-labelledby="login-title">
    <div class="profile-brand brand"><div class="brand-mark">${icons.heart}</div><p class="brand-name">casal finanças</p></div>
    <p class="eyebrow">orçamento a dois</p><h1 id="login-title">Entrar</h1>
    <p class="profile-intro">Use o e-mail e a senha cadastrados para vocês dois.</p>
    <form id="login-form" class="login-form">
      <div class="field"><label for="login-email">E-mail</label><input id="login-email" name="email" type="email" autocomplete="username" required /></div>
      <div class="field"><label for="login-password">Senha</label><input id="login-password" name="password" type="password" autocomplete="current-password" required /></div>
      <p class="form-error" id="login-error" role="alert"></p>
      <button class="form-submit" type="submit" id="login-submit">Entrar</button>
    </form></section></main>`;
  document.querySelector('#login-error').textContent = loginError;
  document.querySelector('#login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('#login-submit');
    button.disabled = true; loginError = '';
    try {
      const { data, error } = await sb.auth.signInWithPassword({ email: form.querySelector('#login-email').value.trim(), password: form.querySelector('#login-password').value });
      if (error) throw error;
      session = data.session; gate = 'checking'; render(); await enterApp();
    } catch (error) {
      loginError = authMessage(error); gate = 'login'; render();
    }
  });
}

async function enterApp() {
  try {
    const { data, error } = await sb.rpc('my_person');
    if (error) throw error;
    if (!data) { gate = 'denied'; render(); return; }
    activePerson = data; gate = 'ok';
    rebuildState(); render(); startCloud(); registerEntry();
  } catch {
    gate = 'error'; render();
  }
}

async function signOutApp() {
  if (cloud.pending > 0) { showToast('Espere terminar de salvar antes de sair.'); return; }
  stopCloud();
  try { await sb.auth.signOut(); } catch { /* sessão local limpa abaixo */ }
  session = null; activePerson = null; resetLocalData(); gate = 'login'; loginError = ''; render();
}

async function boot() {
  render();
  if (!sb) { gate = 'error'; render(); return; }
  try {
    const { data } = await sb.auth.getSession();
    session = data.session;
  } catch { session = null; }
  window.addEventListener('online', () => { if (gate === 'ok') reloadAll(); });
  window.addEventListener('offline', () => { if (gate === 'ok') { cloud.stalled = true; updateSyncBadge(); } });
  document.addEventListener('visibilitychange', () => {
    if (gate !== 'ok') return;
    if (document.visibilityState === 'hidden') { hiddenAt = Date.now(); touchPresence({ last_seen: new Date(hiddenAt).toISOString() }); }
    else { reloadAll(); if (hiddenAt && Date.now() - hiddenAt > 5 * 60 * 1000) registerEntry(); hiddenAt = 0; }
  });
  if (!session) { gate = 'login'; render(); return; }
  await enterApp();
}

const personNote = 'O login de cada pessoa é criado por quem administra o projeto. Quem não estiver cadastrado não entra.';
let peerList = [];
let presenceDocs = {};
let logEntries = [];
let openLogFor = null;
let hiddenAt = 0;

function logEvent(text) {
  if (!sb || gate !== 'ok' || !activePerson) return;
  sb.from('activity_log').insert({ person: activePerson, text: String(text).slice(0, 200) }).then(() => {}, () => {});
}

function touchPresence(fields) {
  if (!sb || gate !== 'ok' || !activePerson) return;
  sb.from('presence').upsert({ person: activePerson, ...fields }, { onConflict: 'person' }).then(() => {}, () => {});
}

function registerEntry() {
  if (!activePerson) return;
  const now = new Date().toISOString();
  touchPresence({ last_enter: now, last_seen: now });
  logEvent('Entrou no app');
}

async function loadPeopleData() {
  const [presence, log] = await Promise.all([
    sb.from('presence').select('person,last_enter,last_seen'),
    sb.from('activity_log').select('at,person,text').order('at', { ascending: false }).limit(150)
  ]);
  if (!presence.error) { presenceDocs = {}; presence.data.forEach((row) => { presenceDocs[row.person] = { lastEnter: Date.parse(row.last_enter), lastSeen: Date.parse(row.last_seen) }; }); }
  if (!log.error) logEntries = log.data.map((row) => ({ at: Date.parse(row.at), person: row.person, text: row.text }));
}

function onPresenceChange(payload) {
  const row = payload.new;
  if (!row || !row.person) return;
  presenceDocs[row.person] = { lastEnter: Date.parse(row.last_enter), lastSeen: Date.parse(row.last_seen) };
  refreshPeopleView();
}

function onLogInsert(payload) {
  const row = payload.new;
  if (!row) return;
  logEntries = [{ at: Date.parse(row.at), person: row.person, text: row.text }, ...logEntries].slice(0, 150);
  refreshPeopleView();
}

function refreshPeopleView() { if (gate === 'ok' && activePerson && activeView === 'people') scheduleRender(); }

function isOnline(person) {
  if (person === activePerson) return true;
  if (!channel) return false;
  const stateNow = channel.presenceState();
  return Object.entries(stateNow).some(([key, metas]) => key !== channelKey && metas.some((meta) => meta.person === person));
}

function formatWhen(ms) {
  if (!Number.isFinite(ms)) return '';
  const date = new Date(ms); const now = new Date();
  const time = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const startOf = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const days = Math.round((startOf(now) - startOf(date)) / 86400000);
  if (days === 0) return `hoje às ${time}`;
  if (days === 1) return `ontem às ${time}`;
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')} às ${time}`;
}

function describeRecord(col, record) {
  const label = { incomes: 'receita', transactions: 'lançamento', payments: 'pagamento', goals: 'meta' }[col];
  const name = record.description || record.name || '';
  const value = col === 'goals' ? record.saved : record.amount;
  return `${label}${name ? ` “${String(name).slice(0, 40)}”` : ''}${Number.isFinite(Number(value)) ? ` (${money(value)})` : ''}`;
}

function logChanges(ops, before, after) {
  if (!ops.length) return;
  if (ops.length === 1) {
    const [key, kind] = ops[0];
    if (key === 'meta/limits') { logEvent('Alterou os limites pessoais'); return; }
    const [col] = key.split('/');
    const record = JSON.parse(kind === 'delete' ? before.get(key) : after.get(key));
    logEvent(`${kind === 'add' ? 'Adicionou' : kind === 'edit' ? 'Editou' : 'Removeu'} ${describeRecord(col, record)}`);
    return;
  }
  const count = (kind) => ops.filter((op) => op[1] === kind).length;
  logEvent(`${ops.length} alterações: ${count('add')} novas, ${count('edit')} editadas, ${count('delete')} removidas`);
}

function renderPeople() {
  const cards = ['ele', 'ela'].map((person) => {
    const online = isOnline(person);
    const doc = presenceDocs[person] || {};
    const status = online ? (person === 'ela' ? 'Conectada' : 'Conectado') : 'Offline';
    const when = online ? (person === activePerson ? 'você está aqui agora' : 'usando o app agora') : (Number.isFinite(doc.lastEnter) ? `última vez que entrou: ${formatWhen(doc.lastEnter)}` : 'ainda não entrou');
    const entries = logEntries.filter((entry) => entry.person === person).slice(0, 30);
    const logHtml = openLogFor === person ? `<div class="log-list" aria-label="Registro de ${escapeHtml(personLabel(person))}">${entries.length ? entries.map((entry) => `<div class="log-item"><span class="log-when">${escapeHtml(formatWhen(entry.at))}</span><span class="log-text">${escapeHtml(entry.text)}</span></div>`).join('') : '<p class="helper-note">Nenhuma atividade registrada ainda.</p>'}</div>` : '';
    const own = person === activePerson ? `<button class="secondary-button" data-people-password>Trocar senha</button><button class="secondary-button" data-people-signout>Sair</button>` : '';
    return `<section class="panel people-card"><div class="person-top"><span class="avatar">${personInitials(person)}</span><div class="people-name"><p class="person-name">${personLabel(person)}${person === activePerson ? ' (você)' : ''}</p><p class="person-desc">${escapeHtml(when)}</p></div><span class="sync-badge" data-person-badge data-state="${online ? 'online' : 'offline-person'}">${status}</span></div>
      <div class="modal-actions people-actions"><button class="secondary-button" data-people-log="${person}" aria-expanded="${openLogFor === person}">${openLogFor === person ? 'Ocultar registro' : 'Ver registro'}</button><button class="secondary-button" data-people-share="${person}">${icons.upload} Compartilhar</button>${own}</div>${logHtml}</section>`;
  }).join('');
  return `<section class="view"><div class="month-row"><div><p class="eyebrow">quem usa o orçamento</p><h1>Pessoas</h1></div></div>${cards}<p class="helper-note">O registro mostra quando cada um entrou e o que adicionou, editou ou removeu.</p></section>`;
}

function siteLink() { return `${location.origin}${location.pathname}`; }

function openShareModal(person) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="share-title">
    <div class="modal-head"><div><h2 class="modal-title" id="share-title"></h2><p class="panel-kicker">envie o link do site</p></div><button class="modal-close" data-close-modal aria-label="Fechar">×</button></div>
    <div class="field"><label for="share-link">Link do orçamento</label><input id="share-link" readonly /></div>
    <p class="helper-note"></p>
    <div class="modal-actions"><button class="secondary-button" type="button" data-copy>Copiar link</button><button class="form-submit" type="button" data-native-share>Enviar link</button></div>
  </section>`;
  backdrop.querySelector('#share-title').textContent = `Compartilhar com ${personLabel(person)}`;
  backdrop.querySelector('#share-link').value = siteLink();
  backdrop.querySelector('.helper-note').textContent = `Abra o link e entre com o e-mail e a senha de ${personLabel(person)}. ${personNote}`;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', close));
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  backdrop.querySelector('[data-copy]').addEventListener('click', async () => {
    const input = backdrop.querySelector('#share-link');
    try { await navigator.clipboard.writeText(input.value); showToast('Link copiado.'); } catch { input.focus(); input.select(); showToast('Selecione o link e copie.'); }
  });
  const nativeButton = backdrop.querySelector('[data-native-share]');
  if (!navigator.share) nativeButton.hidden = true;
  nativeButton.addEventListener('click', () => { navigator.share({ title: 'Casal Finanças', text: 'Casal Finanças: abra o link e entre com seu e-mail e senha.', url: siteLink() }).catch(() => {}); });
}

function openPasswordModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="password-title">
    <div class="modal-head"><div><h2 class="modal-title" id="password-title">Trocar senha</h2><p class="panel-kicker">use pelo menos 8 caracteres</p></div><button class="modal-close" data-close-modal aria-label="Fechar">×</button></div>
    <form id="password-form">
      <div class="field"><label for="new-password">Nova senha</label><input id="new-password" name="password" type="password" minlength="8" autocomplete="new-password" required /></div>
      <div class="field"><label for="new-password2">Repita a nova senha</label><input id="new-password2" name="password2" type="password" minlength="8" autocomplete="new-password" required /></div>
      <p class="form-error" id="password-error" role="alert"></p>
      <div class="modal-actions"><button class="secondary-button" type="button" data-close-modal>Cancelar</button><button class="form-submit" type="submit">Salvar senha</button></div>
    </form></section>`;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', close));
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  backdrop.querySelector('#password-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget; const error = backdrop.querySelector('#password-error');
    const first = form.querySelector('#new-password').value; const second = form.querySelector('#new-password2').value;
    if (first.length < 8) { error.textContent = 'A senha precisa ter pelo menos 8 caracteres.'; return; }
    if (first !== second) { error.textContent = 'As duas senhas não são iguais.'; return; }
    const { error: failure } = await sb.auth.updateUser({ password: first });
    if (failure) { error.textContent = 'Não foi possível trocar a senha agora. Tente sair e entrar de novo.'; return; }
    close(); showToast('Senha alterada.');
  });
  backdrop.querySelector('#new-password').focus();
}

function renderGate(title, text) {
  document.querySelector('#app').innerHTML = `<main class="profile-screen"><section class="profile-panel" aria-labelledby="gate-title">
    <div class="profile-brand brand"><div class="brand-mark">${icons.heart}</div><p class="brand-name">casal finanças</p></div>
    <h1 id="gate-title">${escapeHtml(title)}</h1><p class="profile-intro">${escapeHtml(text)}</p></section></main>`;
}

function askConfirm(message, yesLabel, onYes, detail = '') {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
    <div class="modal-head"><div><h2 class="modal-title" id="confirm-title"></h2>${detail ? '<p class="panel-kicker confirm-detail"></p>' : ''}</div><button class="modal-close" data-close-modal aria-label="Fechar">×</button></div>
    <div class="modal-actions"><button class="secondary-button" type="button" data-close-modal>Cancelar</button><button class="form-submit" type="button" data-confirm-yes></button></div>
  </section>`;
  backdrop.querySelector('#confirm-title').textContent = message;
  if (detail) backdrop.querySelector('.confirm-detail').textContent = detail;
  backdrop.querySelector('[data-confirm-yes]').textContent = yesLabel;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', close));
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  backdrop.querySelector('[data-confirm-yes]').addEventListener('click', () => { close(); onYes(); });
}

function text(value, max = 160) { return String(value ?? '').slice(0, max); }
function validNumber(value) { return typeof value === 'number' && Number.isFinite(value); }

const importShapes = {
  incomes: (r) => validNumber(r.amount) && isValidRecordDate(r.date) ? { id: r.id, description: text(r.description, 120), amount: r.amount, date: r.date, ...(['ele', 'ela', 'compartilhado'].includes(r.person) ? { person: r.person } : {}), ...(['ele', 'ela'].includes(r.createdBy) ? { createdBy: r.createdBy } : {}), ...(['salary', 'adjustment'].includes(r.kind) ? { kind: r.kind } : {}), ...(['dia5', 'dia20', 'outro'].includes(r.salaryPeriod) ? { salaryPeriod: r.salaryPeriod } : {}) } : null,
  transactions: (r) => validNumber(r.amount) && isValidRecordDate(r.date) && Object.hasOwn(categoryMeta, r.category) && ['fixo', 'variavel', 'pessoal'].includes(r.type) && ['ele', 'ela', 'compartilhado'].includes(r.person) ? { id: r.id, description: text(r.description, 120), amount: r.amount, category: r.category, person: r.person, date: r.date, type: r.type, ...(['ele', 'ela'].includes(r.createdBy) ? { createdBy: r.createdBy } : {}) } : null,
  payments: (r) => validNumber(r.amount) && Number.isInteger(r.day) && r.day >= 1 && r.day <= 31 ? { id: r.id, description: text(r.description, 120), detail: text(r.detail, 160), amount: r.amount, day: r.day, done: Boolean(r.done) } : null,
  goals: (r) => validNumber(r.saved) && validNumber(r.target) ? { id: r.id, name: text(r.name, 120), caption: text(r.caption, 160), saved: r.saved, target: r.target } : null
};

function planImport(imported) {
  if (!imported || typeof imported !== 'object' || !Array.isArray(imported.transactions) || typeof imported.limits !== 'object') throw new Error('Arquivo incompatível');
  const plan = { add: { incomes: [], transactions: [], payments: [], goals: [] }, same: 0, differs: 0, invalid: 0, limits: null };
  for (const col of COLLECTIONS) {
    const list = Array.isArray(imported[col]) ? imported[col] : [];
    const existing = new Map(state[col].map((record) => [record.id, JSON.stringify(record)]));
    const seen = new Set();
    for (const raw of list) {
      const valid = raw && typeof raw === 'object' && typeof raw.id === 'string' && ID_RE.test(raw.id) && raw.id !== '.' && raw.id !== '..' ? importShapes[col](raw) : null;
      if (!valid || seen.has(valid.id)) { plan.invalid += 1; continue; }
      seen.add(valid.id);
      if (existing.has(valid.id)) { if (existing.get(valid.id) === JSON.stringify(valid)) plan.same += 1; else plan.differs += 1; continue; }
      plan.add[col].push(valid);
    }
  }
  const { ele, ela } = imported.limits || {};
  if (remoteLimits === null && validNumber(ele) && validNumber(ela) && ele >= 0 && ela >= 0) plan.limits = { ele, ela };
  return plan;
}

function offerImport(plan) {
  const total = COLLECTIONS.reduce((sum, col) => sum + plan.add[col].length, 0);
  if (!total && !plan.limits) { showToast(plan.same ? 'Esses dados já estão no orçamento.' : 'Nada novo para importar.'); return; }
  const detail = `${plan.add.incomes.length} receitas, ${plan.add.transactions.length} lançamentos, ${plan.add.payments.length} pagamentos e ${plan.add.goals.length} metas serão adicionados. ${plan.same} já existem iguais, ${plan.differs} existem com outro conteúdo e não serão alterados${plan.invalid ? `, ${plan.invalid} foram ignorados por formato inválido` : ''}. Nada é apagado.`;
  askConfirm('Importar para o orçamento compartilhado?', 'Importar', () => {
    for (const col of COLLECTIONS) state[col].push(...plan.add[col]);
    if (plan.limits) state.limits = plan.limits;
    persist(); render(); showToast('Dados importados. Aguarde Sincronizado.');
  }, detail);
}

function money(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value) || 0);
}

function compactMoney(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(Number(value) || 0);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function monthTitle(key) {
  const [year, month] = key.split('-').map(Number);
  return `${monthNames[month - 1]} de ${year}`;
}

function formatDate(date) {
  const d = new Date(`${date}T12:00:00`);
  return `${String(d.getDate()).padStart(2, '0')} ${shortMonths[d.getMonth()]}`;
}

function monthTransactions() {
  return state.transactions.filter((tx) => tx.date.startsWith(selectedMonth));
}

function monthIncome() {
  return state.incomes.filter((income) => income.date.startsWith(selectedMonth)).reduce((sum, income) => sum + Number(income.amount), 0);
}

function monthExpenses() {
  return monthTransactions().reduce((sum, tx) => sum + Number(tx.amount), 0);
}

function isPersonalTransaction(tx) {
  return tx.type === 'pessoal' || tx.category === 'pessoal';
}

function personalTransactions(person = activePerson) {
  return monthTransactions().filter((tx) => isPersonalTransaction(tx) && tx.person === person);
}

function newRecordId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function personLabel(person) {
  return peopleNames[person] || 'Dos dois';
}

function personInitials(person) {
  return personLabel(person).split(' ').map((part) => part[0]).join('');
}

function iconFor(category) {
  const meta = categoryMeta[category] || categoryMeta.outros;
  return `<span class="category-icon" style="background:${meta.color}">${icons[meta.icon]}</span>`;
}

function renderShell(content) {
  const tabs = [
    ['overview', icons.overview, 'Visão geral'],
    ['transactions', icons.list, 'Lançamentos'],
    ['personal', icons.heart, 'Pessoal'],
    ['planning', icons.sliders, 'Planejamento'],
    ['people', icons.users, 'Pessoas']
  ];
  document.querySelector('#app').innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">${icons.heart}</div>
          <div><p class="brand-name">casal finanças</p><p class="brand-note">o dinheiro de vocês, no mesmo lugar</p></div>
        </div>
        <div class="top-actions">
          <button class="soft-button" data-action="export" aria-label="Exportar backup">${icons.download}<span>Backup</span></button>
          <button class="icon-button" data-action="import" aria-label="Importar backup">${icons.upload}</button>
        </div>
      </header>
      <div class="identity-strip"><span class="identity-person"><span class="avatar">${personInitials(activePerson)}</span><span><small>Conta conectada</small><strong>${personLabel(activePerson)}</strong></span></span><span class="identity-side"><span class="sync-badge" data-state="${syncState().state}" role="status">${syncState().label}</span></span></div>
      <main class="page">${emptyNotice()}${content}</main>
      <nav class="tabbar" aria-label="Navegação principal">
        ${tabs.map(([id, icon, label]) => `<button class="tab ${activeView === id ? 'active' : ''}" data-view="${id}">${icon}<span>${label}</span></button>`).join('')}
      </nav>
    </div>`;
  bindShellEvents();
}

function render() {
  if (gate === 'checking') { renderGate('Verificando conta…', 'Um instante, estamos abrindo o orçamento do casal.'); return; }
  if (gate === 'login') { renderLogin(); return; }
  if (gate === 'denied') { renderGate('Acesso não autorizado', 'Esta conta não faz parte do orçamento do casal. Saia e entre com o e-mail cadastrado.'); return; }
  if (gate === 'error') { renderGate('Não foi possível abrir o orçamento', 'Verifique a internet e recarregue a página. Se continuar, avise quem administra o projeto.'); return; }
  if (!activePerson) { renderPersonChooser(); return; }
  if (activeView === 'overview') renderShell(renderOverview());
  if (activeView === 'transactions') renderShell(renderTransactions());
  if (activeView === 'personal') renderShell(renderPersonal());
  if (activeView === 'planning') renderShell(renderPlanning());
  if (activeView === 'people') renderShell(renderPeople());
}

function renderPersonChooser() {
  document.querySelector('#app').innerHTML = `<main class="profile-screen"><section class="profile-panel" aria-labelledby="profile-title">
    <div class="profile-brand brand"><div class="brand-mark">${icons.heart}</div><p class="brand-name">casal finanças</p></div>
    <p class="eyebrow">orçamento a dois</p><h1 id="profile-title">Quem está usando?</h1>
    <p class="profile-intro">Escolha seu nome para organizar os gastos pessoais.</p>
    <div class="profile-options">${Object.keys(peopleNames).map((person) => `<button class="profile-option" data-select-person="${person}"><span class="profile-avatar">${personInitials(person)}</span><span class="profile-option-copy"><strong>${personLabel(person)}</strong><small>Entrar no meu perfil</small></span>${icons.chevronRight}</button>`).join('')}</div>
    <p class="helper-note">Escolha local, sem senha. O orçamento é compartilhado neste aparelho; cada um tem sua aba Pessoal.</p>
  </section></main>`;
  document.querySelectorAll('[data-select-person]').forEach((button) => button.addEventListener('click', () => selectPerson(button.dataset.selectPerson)));
}

function selectPerson(person) {
  if (!Object.hasOwn(peopleNames, person)) return false;
  activePerson = person;
  activeView = 'overview';
  activeFilter = 'todos';
  editingTransactionId = null;
  transactionDraftType = 'variavel';
  render();
  return true;
}

function switchPerson() {
  document.querySelectorAll('.modal-backdrop').forEach((modal) => modal.remove());
  activePerson = null;
  editingTransactionId = null;
  transactionDraftType = 'variavel';
  render();
}

function emptyNotice() {
  if (!cloudReady() || state.incomes.length || state.transactions.length || state.payments.length || state.goals.length) return '';
  return '<section class="panel" style="margin-bottom:14px"><p class="panel-kicker">Orçamento vazio</p><p class="helper-note">Ainda não há dados aqui. Para trazer o orçamento do site antigo, abra-o, toque em Backup e, aqui, toque no ícone de importar (seta para cima) e escolha o arquivo.</p></section>';
}

function renderMonthHeader(title = 'Visão do mês') {
  const currentMonthKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  return `<div class="month-row"><div><p class="eyebrow">${title}</p><h1>${monthTitle(selectedMonth)}</h1></div><div class="month-switcher"><button class="icon-button" data-action="prev-month" aria-label="Mês anterior">${icons.chevronLeft}</button><span class="month-label">${selectedMonth === currentMonthKey ? 'mês atual' : 'consultando'}</span><button class="icon-button" data-action="next-month" aria-label="Próximo mês">${icons.chevronRight}</button></div></div>`;
}

function renderOverview() {
  const income = monthIncome();
  const expenses = monthExpenses();
  const available = income - expenses;
  const usedPercent = income ? Math.min(100, Math.round((expenses / income) * 100)) : 0;
  const txs = monthTransactions();
  const categoryTotals = Object.keys(categoryMeta).map((key) => ({ key, value: txs.filter((tx) => tx.category === key).reduce((sum, tx) => sum + Number(tx.amount), 0) })).filter((item) => item.value > 0).sort((a, b) => b.value - a.value);
  const fixed = txs.filter((tx) => tx.type === 'fixo').reduce((sum, tx) => sum + Number(tx.amount), 0);
  const variable = txs.filter((tx) => tx.type === 'variavel').reduce((sum, tx) => sum + Number(tx.amount), 0);
  const personal = txs.filter(isPersonalTransaction).reduce((sum, tx) => sum + Number(tx.amount), 0);
  const reserve = Math.max(0, Math.round(available * 0.2));
  const people = ['ele', 'ela'].map((person) => ({ person, value: personalTransactions(person).reduce((sum, tx) => sum + Number(tx.amount), 0) }));
  const maxCategory = Math.max(...categoryTotals.map((item) => item.value), 1);

  return `<div class="view">
    ${renderMonthHeader('Orçamento conjunto')}
    <section class="hero-card">
      <div class="hero-copy">
        <div><p class="hero-label">livre para o resto do mês</p><div class="hero-number">${money(available)}</div><p class="hero-sub">Depois de considerar o que já saiu, o casal ainda tem este valor para decidir com calma.</p></div>
        <div class="hero-bottom"><button class="primary-button" data-action="add-transaction">${icons.plus} Novo lançamento</button><button class="primary-button" data-action="add-salary">${icons.plus} Adicionar salário</button><button class="ghost-light" data-view="planning">${icons.sliders} Ajustar orçamento</button></div>
      </div>
      <div class="hero-breakdown"><div class="ring-wrap"><div class="ring" style="--progress:${usedPercent}%"></div><div class="ring-text"><span class="ring-percent">${usedPercent}%</span><span class="ring-caption">usado</span></div></div><div><div class="mini-stat"><span class="mini-stat-label">Entrou</span><span class="mini-stat-value">${compactMoney(income)}</span></div><div class="mini-stat"><span class="mini-stat-label">Já saiu</span><span class="mini-stat-value">${compactMoney(expenses)}</span></div></div></div>
    </section>
    <section class="metric-grid">
      ${metricCard('Contas fixas', fixed, 'recorrentes no mês', 'home', '#242424')}
      ${metricCard('Variáveis', variable, 'mercado, lazer e mais', 'trend', '#202020')}
      ${metricCard('Pessoais', personal, 'limites individuais', 'heart', '#292929')}
      ${metricCard('Para reservar', reserve, 'sugestão de 20%', 'target', '#262626')}
    </section>
    ${renderRule503020(income, txs)}
    <div class="section-grid">
      <section class="panel"><div class="panel-heading"><div><h2 class="panel-title">Para onde está indo</h2><p class="panel-kicker">os maiores pedaços do orçamento</p></div><button class="link-button" data-view="transactions">ver tudo</button></div><div class="category-list">${categoryTotals.length ? categoryTotals.slice(0, 5).map((item, index) => { const meta = categoryMeta[item.key]; return `<div class="category-row">${iconFor(item.key)}<div class="category-info"><div class="category-line"><span class="category-name">${meta.label}</span><span class="category-amount">${money(item.value)}</span></div><div class="progress-track"><div class="progress-fill ${index === 1 ? 'sage' : index === 2 ? 'yellow' : ''}" style="width:${Math.round((item.value / maxCategory) * 100)}%"></div></div></div><span class="category-total">${income ? Math.round(item.value / income * 100) : 0}%</span></div>`; }).join('') : emptyState('Ainda não há lançamentos neste mês.')}</div></section>
      <div><section class="panel"><div class="panel-heading"><div><h2 class="panel-title">Um limite para cada um</h2><p class="panel-kicker">liberdade sem perder o combinado</p></div><button class="link-button" data-view="planning">editar</button></div><div class="people-grid">${people.map(({ person, value }, index) => { const limit = state.limits[person] || 0; const percent = limit ? Math.min(100, Math.round(value / limit * 100)) : 0; return `<div class="person-card ${index ? 'sage-card' : ''}"><div class="person-top"><span class="avatar">${personInitials(person)}</span><div><p class="person-name">${personLabel(person)}</p><p class="person-desc">gastos pessoais</p></div></div><div class="person-amount">${money(value)}</div><span class="person-limit">de ${money(limit)} combinados</span><div class="person-bar"><span style="width:${percent}%"></span></div></div>`; }).join('')}</div></section>
        <section class="panel"><div class="panel-heading"><div><h2 class="panel-title">Próximos pagamentos</h2><p class="panel-kicker">para o mês seguir tranquilo</p></div><button class="link-button" data-action="edit-payments">Editar pagamentos</button></div><div class="payment-list">${state.payments.slice().sort((a, b) => a.day - b.day).slice(0, 3).map(paymentRow).join('')}</div></section></div>
    </div>
    <section class="panel" style="margin-top:14px"><div class="panel-heading"><div><h2 class="panel-title">Metas que vocês escolheram</h2><p class="panel-kicker">cada pequeno passo soma</p></div><button class="link-button" data-action="edit-goals">Editar metas</button></div><div class="goal-list">${state.goals.map(goalCard).join('')}</div></section>
  </div>`;
}

const RULE_NEEDS = ['moradia', 'mercado', 'transporte'];

function renderRule503020(income, txs) {
  const sumOf = (list) => list.reduce((total, tx) => total + Number(tx.amount), 0);
  const needs = sumOf(txs.filter((tx) => RULE_NEEDS.includes(tx.category)));
  const wants = sumOf(txs.filter((tx) => !RULE_NEEDS.includes(tx.category)));
  const saved = Math.max(0, income - needs - wants);
  const rows = [
    { name: 'Necessidades', pct: 50, spent: needs, hint: 'moradia, mercado e transporte', kind: 'max' },
    { name: 'Desejos', pct: 30, spent: wants, hint: 'lazer, pessoal e outros', kind: 'max' },
    { name: 'Poupança', pct: 20, spent: saved, hint: 'o que sobra depois dos gastos', kind: 'min' }
  ];
  const body = income ? rows.map((row) => {
    const target = income * row.pct / 100;
    const fill = target ? Math.min(100, Math.round(row.spent / target * 100)) : 0;
    const share = Math.round(row.spent / income * 100);
    const over = row.kind === 'max' && row.spent > target;
    const status = row.kind === 'max'
      ? (over ? `passou ${money(row.spent - target)}` : `restam ${money(target - row.spent)}`)
      : (row.spent >= target ? 'meta batida' : `faltam ${money(target - row.spent)}`);
    return `<div class="rule-row"><div class="rule-head"><span class="rule-name">${row.name} <small>${row.pct}%</small></span><span class="rule-amount">${money(row.spent)} <small>de ${money(target)}</small></span></div><div class="progress-track"><div class="progress-fill ${over ? 'over' : ''}" style="width:${fill}%"></div></div><div class="rule-foot"><span>${row.hint} · ${share}% da renda</span><span class="rule-status${over ? ' over' : ''}">${status}</span></div></div>`;
  }).join('') : '<p class="helper-note">Adicione um salário neste mês para ver a divisão 50 / 30 / 20.</p>';
  return `<section class="panel rule-panel" style="margin-bottom:14px"><div class="panel-heading"><div><h2 class="panel-title">Regra 50 · 30 · 20</h2><p class="panel-kicker">metade para o essencial, 30% para desejos, 20% para o futuro</p></div></div><div class="rule-list">${body}</div></section>`;
}

function metricCard(label, value, detail, icon, bg) {
  return `<article class="metric-card"><div class="metric-head"><span class="metric-label">${label}</span><span class="metric-icon" style="background:${bg};color:var(--ink)">${icons[icon]}</span></div><p class="metric-value">${compactMoney(value)}</p><p class="metric-detail">${detail}</p></article>`;
}

function paymentRow(payment) {
  const month = Number(selectedMonth.split('-')[1]) - 1;
  return `<div class="payment-row"><div class="payment-date"><strong>${payment.day}</strong><small>${shortMonths[month]}</small></div><div class="payment-info"><strong>${escapeHtml(payment.description)}</strong><span>${escapeHtml(payment.detail)}</span></div><span class="payment-value">${money(payment.amount)}</span><button class="payment-check ${payment.done ? 'done' : ''}" data-payment="${payment.id}" aria-label="${payment.done ? 'Marcar como pendente' : 'Marcar como pago'}">${icons.check}</button></div>`;
}

function goalCard(goal) {
  const percent = Math.min(100, Math.round((goal.saved / goal.target) * 100));
  return `<div class="goal-card"><div class="goal-head"><div><p class="goal-name">${escapeHtml(goal.name)}</p><p class="goal-caption">${escapeHtml(goal.caption)}</p></div><span class="goal-percent">${percent}%</span></div><div class="progress-track"><div class="progress-fill ${goal.id === 'goal-2' ? 'sage' : ''}" style="width:${percent}%"></div></div><div class="goal-footer"><span>${money(goal.saved)} guardados</span><span>${money(goal.target)} alvo</span></div></div>`;
}

function renderTransactions() {
  const txs = monthTransactions().filter((tx) => activeFilter === 'todos' || (activeFilter === 'pessoal' ? isPersonalTransaction(tx) : tx.type === activeFilter || tx.person === activeFilter));
  return `<div class="view">${renderMonthHeader('Lançamentos')}
    <div class="transaction-toolbar"><div class="filter-row">${[['todos','Tudo'],['fixo','Fixos'],['variavel','Variáveis'],['pessoal','Pessoais']].map(([key,label]) => `<button class="filter-chip ${activeFilter === key ? 'active' : ''}" data-filter="${key}">${label}</button>`).join('')}</div><button class="primary-button" data-action="add-transaction">${icons.plus}<span>Novo</span></button></div>
    <section class="transaction-list">${txs.length ? txs.sort((a,b) => b.date.localeCompare(a.date)).map(transactionItem).join('') : emptyState('Nenhum lançamento encontrado com esse filtro.')}</section>
  </div>`;
}

function renderPersonal() {
  const txs = personalTransactions();
  const spent = txs.reduce((sum, tx) => sum + Number(tx.amount), 0);
  const limit = Number(state.limits[activePerson] || 0);
  return `<div class="view">${renderMonthHeader(`Pessoal de ${personLabel(activePerson)}`)}
    <section class="personal-summary">
      ${metricCard('Meus gastos', spent, 'pessoais neste mês', 'heart', '#292929')}
      ${metricCard('Meu limite', limit, 'combinado do casal', 'target', '#262626')}
      ${metricCard('Ainda disponível', limit - spent, 'dentro do meu limite', 'wallet', '#242424')}
    </section>
    <div class="personal-toolbar"><div><h2 class="panel-title">Meus lançamentos pessoais</h2><p class="panel-kicker">${personLabel(activePerson)} · só os gastos desta pessoa</p></div><button class="primary-button" data-action="add-personal">${icons.plus} Novo gasto pessoal</button></div>
    <section class="transaction-list">${txs.length ? txs.slice().sort((a, b) => b.date.localeCompare(a.date)).map(transactionItem).join('') : emptyState('Você ainda não registrou gastos pessoais neste mês.')}</section>
  </div>`;
}

function transactionItem(tx) {
  const meta = categoryMeta[tx.category] || categoryMeta.outros;
  return `<div class="transaction-item">${iconFor(tx.category)}<div class="transaction-main"><div class="transaction-title"><span>${escapeHtml(tx.description)}</span></div><div class="transaction-meta"><span>${meta.label}</span><span>•</span><span>${personLabel(tx.person)}</span><span>•</span><span>${formatDate(tx.date)}</span></div></div><span class="transaction-amount">${money(tx.amount)}</span><button class="transaction-delete" data-edit="${tx.id}" aria-label="Editar lançamento">${icons.sliders}</button><button class="transaction-delete" data-delete="${tx.id}" aria-label="Excluir lançamento">${icons.trash}</button></div>`;
}

function defaultDateForMonth() {
  const current = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  return `${selectedMonth}-${selectedMonth === current ? String(today.getDate()).padStart(2, '0') : '05'}`;
}

function renderTransactionForm(editing) {
  const type = editing?.type || transactionDraftType;
  const category = editing?.category || (type === 'pessoal' ? 'pessoal' : 'mercado');
  const personal = isPersonalTransaction({ type, category });
  const person = editing?.person || activePerson;
  return `<section class="form-card"><div class="panel-heading"><div>
    <h2 class="panel-title">${editing ? 'Editar lançamento' : personal ? 'Novo gasto pessoal' : 'Adicionar lançamento'}</h2>
    <p class="panel-kicker">${editing ? 'ajuste o que mudou' : 'registre assim que acontecer'}</p></div>${icons.sparkle}</div>
    <form id="transaction-form">
      <div class="field"><label for="description">O que foi?</label><input id="description" name="description" value="${editing ? escapeHtml(editing.description) : ''}" placeholder="Ex.: feira do mês" required /></div>
      <div class="form-row"><div class="field"><label for="amount">Valor</label><input id="amount" name="amount" inputmode="decimal" type="number" min="0.01" step="0.01" value="${editing ? editing.amount : ''}" placeholder="0,00" required /></div><div class="field"><label for="date">Data</label><input id="date" name="date" type="date" value="${editing?.date || defaultDateForMonth()}" required /></div></div>
      <div class="form-row"><div class="field"><label for="category">Categoria</label><select id="category" name="category">${Object.entries(categoryMeta).map(([key, meta]) => `<option value="${key}" ${category === key ? 'selected' : ''}>${meta.label}</option>`).join('')}</select></div><div class="field"><label for="type">Tipo</label><select id="type" name="type">${[['variavel', 'Variável'], ['fixo', 'Fixo'], ['pessoal', 'Pessoal']].map(([key, label]) => `<option value="${key}" ${type === key ? 'selected' : ''}>${label}</option>`).join('')}</select></div></div>
      <div class="field"><label for="person">Quem assumiu?</label><select id="person" name="person" ${personal ? 'disabled' : ''}>${['compartilhado', 'ele', 'ela'].map((key) => `<option value="${key}" ${person === key ? 'selected' : ''}>${personLabel(key)}</option>`).join('')}</select></div>
      <p class="helper-note" id="person-note">${personal ? `Gasto pessoal vinculado a ${personLabel(person)}.` : 'Você pode marcar contas compartilhadas como Dos dois.'}</p>
      <button class="form-submit" type="submit">${editing ? 'Salvar alterações' : 'Salvar lançamento'}</button>
      ${editing ? '<button class="secondary-button" type="button" data-action="cancel-edit" style="width:100%;margin-top:8px">Cancelar edição</button>' : ''}
    </form>
  </section>`;
}

function syncTransactionPerson() {
  const ownerField = document.querySelector('#person');
  const typeField = document.querySelector('#type');
  const categoryField = document.querySelector('#category');
  if (!ownerField || !typeField || !categoryField) return;
  const personal = isPersonalTransaction({ type: typeField.value, category: categoryField.value });
  const editing = state.transactions.find((tx) => tx.id === editingTransactionId);
  ownerField.disabled = personal;
  if (personal) ownerField.value = editing && isPersonalTransaction(editing) ? editing.person : activePerson;
  const note = document.querySelector('#person-note');
  if (note) note.textContent = personal ? `Gasto pessoal vinculado a ${personLabel(ownerField.value)}.` : 'Você pode marcar contas compartilhadas como Dos dois.';
}

function renderIncomeSection() {
  const incomes = state.incomes.filter((income) => income.date.startsWith(selectedMonth));
  return `<section class="form-card salary-section"><div class="panel-heading"><div><h2 class="panel-title">Salários e receita do mês</h2><p class="panel-kicker">cada entrada somada ao orçamento</p></div>${icons.wallet}</div>
    <button class="primary-button" data-action="add-salary">${icons.plus} Adicionar salário</button>
    <div class="salary-list">${incomes.length ? incomes.slice().sort((a, b) => b.date.localeCompare(a.date)).map((income) => `<div class="salary-row"><div><strong>${escapeHtml(income.description)}</strong><small>${personLabel(income.person)} · ${salaryDateLabel(income)}</small></div><span class="salary-value">${money(income.amount)}</span></div>`).join('') : '<p class="helper-note">Nenhum salário ou receita cadastrado neste mês.</p>'}</div>
    <form id="income-form"><div class="field"><label for="income">Total que entrou</label><input id="income" name="income" type="number" min="0" step="0.01" value="${monthIncome()}" required /></div><p class="helper-note">O ajuste do total preserva os salários cadastrados e registra somente a diferença no orçamento conjunto.</p><button class="form-submit" type="submit">Atualizar receita</button></form>
  </section>`;
}

function salaryDateLabel(income) {
  return income.salaryPeriod === 'outro' ? `Outro · ${monthTitle(income.date.slice(0, 7))}` : formatDate(income.date);
}

function renderPlanning() {
  const editing = editingTransactionId ? state.transactions.find((tx) => tx.id === editingTransactionId) : null;
  return `<div class="view">${renderMonthHeader('Planejamento')}
    <div class="planning-grid">${renderTransactionForm(editing)}
      <section class="form-card"><div class="panel-heading"><div><h2 class="panel-title">Limites pessoais</h2><p class="panel-kicker">um combinado que protege o conjunto</p></div>${icons.heart}</div><div class="range-block"><div class="range-head"><label for="limit-ele">Limite de ${personLabel('ele')}</label><span class="range-value" id="limit-ele-value">${money(state.limits.ele)}</span></div><input id="limit-ele" type="range" min="0" max="2500" step="50" value="${state.limits.ele}" /></div><div class="range-block"><div class="range-head"><label for="limit-ela">Limite de ${personLabel('ela')}</label><span class="range-value" id="limit-ela-value">${money(state.limits.ela)}</span></div><input id="limit-ela" type="range" min="0" max="2500" step="50" value="${state.limits.ela}" /></div><p class="helper-note">O limite pessoal é só para gastos livres. Contas da casa e escolhas compartilhadas continuam no orçamento conjunto.</p><button class="form-submit" data-action="save-limits">Salvar limites</button></section>
      ${renderIncomeSection()}
    </div>
    <section class="panel" style="margin-top:14px"><div class="panel-heading"><div><h2 class="panel-title">Backup e compartilhamento</h2><p class="panel-kicker">leve o orçamento de um iPhone para o outro</p></div>${icons.download}</div><p class="helper-note">Os dados ficam salvos na nuvem e aparecem para os dois automaticamente. Use o backup para guardar uma cópia ou para trazer dados de outro navegador; a importação só adiciona o que falta e nunca apaga.</p><div class="modal-actions"><button class="secondary-button" data-action="export">${icons.download} Exportar dados</button><button class="secondary-button" data-action="import">${icons.upload} Importar dados</button></div>${hasNovemberBackup() ? `<p class="helper-note">Uma cópia dos dados anteriores à limpeza foi guardada neste aparelho.</p><button class="secondary-button" data-action="export-before-reset" style="width:100%;margin-top:10px">Baixar backup anterior à limpeza de novembro</button>` : ''}</section>
  </div>`;
}

function emptyState(message) { return `<div class="empty">${icons.sparkle}<p>${message}</p></div>`; }

function bindShellEvents() {
  document.querySelectorAll('[data-view]').forEach((el) => el.addEventListener('click', () => {
    activeView = el.dataset.view;
    if (activeView !== 'planning') editingTransactionId = null;
    if (activeView === 'planning' && !editingTransactionId) transactionDraftType = 'variavel';
    render();
  }));
  document.querySelectorAll('[data-filter]').forEach((el) => el.addEventListener('click', () => { activeFilter = el.dataset.filter; render(); }));
  document.querySelectorAll('[data-action]').forEach((el) => el.addEventListener('click', () => handleAction(el.dataset.action)));
  document.querySelectorAll('[data-people-log]').forEach((el) => el.addEventListener('click', () => { openLogFor = openLogFor === el.dataset.peopleLog ? null : el.dataset.peopleLog; render(); }));
  document.querySelectorAll('[data-people-share]').forEach((el) => el.addEventListener('click', () => openShareModal(el.dataset.peopleShare)));
  document.querySelectorAll('[data-people-password]').forEach((el) => el.addEventListener('click', openPasswordModal));
  document.querySelectorAll('[data-people-signout]').forEach((el) => el.addEventListener('click', signOutApp));
  document.querySelectorAll('[data-payment]').forEach((el) => el.addEventListener('click', () => togglePayment(el.dataset.payment)));
  document.querySelectorAll('[data-edit]').forEach((el) => el.addEventListener('click', () => editTransaction(el.dataset.edit)));
  document.querySelectorAll('[data-delete]').forEach((el) => el.addEventListener('click', () => deleteTransaction(el.dataset.delete)));
  document.querySelectorAll('[data-goal]').forEach((el) => el.addEventListener('click', () => {}));
  const form = document.querySelector('#transaction-form');
  if (form) form.addEventListener('submit', (event) => { event.preventDefault(); addTransaction(new FormData(form)); });
  const incomeForm = document.querySelector('#income-form');
  if (incomeForm) incomeForm.addEventListener('submit', (event) => { event.preventDefault(); saveIncome(new FormData(incomeForm)); });
  document.querySelector('#type')?.addEventListener('change', syncTransactionPerson);
  document.querySelector('#category')?.addEventListener('change', syncTransactionPerson);
  const limitEle = document.querySelector('#limit-ele');
  const limitEla = document.querySelector('#limit-ela');
  if (limitEle) limitEle.addEventListener('input', () => { document.querySelector('#limit-ele-value').textContent = money(limitEle.value); });
  if (limitEla) limitEla.addEventListener('input', () => { document.querySelector('#limit-ela-value').textContent = money(limitEla.value); });
}

function handleAction(action) {
  if (action === 'switch-person') { switchPerson(); return; }
  if (!activePerson) { render(); return; }
  if (action === 'prev-month' || action === 'next-month') {
    const [year, month] = selectedMonth.split('-').map(Number);
    const d = new Date(year, month - 1 + (action === 'prev-month' ? -1 : 1), 1);
    selectedMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    persist(); render(); return;
  }
  if (action === 'add-transaction' || action === 'add-personal') {
    editingTransactionId = null;
    transactionDraftType = action === 'add-personal' ? 'pessoal' : 'variavel';
    activeView = 'planning'; render(); document.querySelector('#description')?.focus(); return;
  }
  if (action === 'add-salary') { openSalaryModal(); return; }
  if (action === 'edit-payments') { openPaymentsModal(); return; }
  if (action === 'edit-goals') { openGoalModal(); return; }
  if (action === 'cancel-edit') { editingTransactionId = null; render(); return; }
  if (action === 'export-before-reset') { exportPreviousNovemberBackup(); return; }
  if (action === 'export') { exportData(); return; }
  if (action === 'import') { document.querySelector('#import-file').click(); return; }
  if (action === 'save-limits') { const ele = document.querySelector('#limit-ele'); const ela = document.querySelector('#limit-ela'); state.limits = { ele: Number(ele?.value || state.limits.ele), ela: Number(ela?.value || state.limits.ela) }; persist(); showToast('Limites atualizados.'); return; }
}

function addTransaction(formData) {
  if (!activePerson) return false;
  const editing = state.transactions.find((item) => item.id === editingTransactionId);
  const type = formData.get('type');
  const category = formData.get('category');
  const personal = isPersonalTransaction({ type, category });
  const requestedPerson = formData.get('person');
  const person = personal
    ? (editing && isPersonalTransaction(editing) ? editing.person : activePerson)
    : (['ele', 'ela', 'compartilhado'].includes(requestedPerson) ? requestedPerson : activePerson);
  const tx = {
    ...editing,
    id: editing?.id || newRecordId('tx'),
    description: String(formData.get('description') || '').trim(),
    amount: Number(formData.get('amount')),
    category, person, date: formData.get('date'), type,
    createdBy: editing ? (editing.createdBy || (Object.hasOwn(peopleNames, editing.person) ? editing.person : undefined)) : activePerson
  };
  if (!tx.description || !Number.isFinite(tx.amount) || tx.amount <= 0 || !isValidRecordDate(tx.date) || !Object.hasOwn(categoryMeta, category) || !['fixo', 'variavel', 'pessoal'].includes(type)) return false;
  if (editingTransactionId) {
    const index = state.transactions.findIndex((item) => item.id === editingTransactionId);
    if (index < 0) return false;
    state.transactions[index] = tx;
  } else state.transactions.push(tx);
  const wasEditing = Boolean(editingTransactionId);
  editingTransactionId = null;
  transactionDraftType = 'variavel';
  selectedMonth = tx.date.slice(0, 7);
  persist(); activeView = personal && tx.person === activePerson ? 'personal' : 'transactions'; activeFilter = 'todos'; render(); showToast(wasEditing ? 'Lançamento atualizado.' : 'Lançamento salvo no orçamento.');
  return true;
}

function editTransaction(id) {
  if (!state.transactions.some((item) => item.id === id)) return;
  editingTransactionId = id; activeView = 'planning'; render(); document.querySelector('#description')?.focus();
}

function saveIncome(formData) {
  if (!activePerson) return false;
  const amount = Number(formData.get('income'));
  if (!Number.isFinite(amount) || amount < 0) return false;
  const adjustmentId = `income-adjustment-${selectedMonth}`;
  state.incomes = state.incomes.filter((income) => income.id !== adjustmentId);
  const difference = Math.round((amount - monthIncome()) * 100) / 100;
  if (difference !== 0) state.incomes.push({ id: adjustmentId, description: 'Ajuste do total do mês', amount: difference, date: defaultDateForMonth(), person: 'compartilhado', createdBy: activePerson, kind: 'adjustment' });
  persist(); render(); showToast('Receita do mês atualizada.');
  return true;
}

function isValidRecordDate(date) {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00`);
  return Number.isFinite(parsed.getTime()) && `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}-${String(parsed.getDate()).padStart(2, '0')}` === date;
}

function addSalary(formData) {
  if (!activePerson) return false;
  const amount = Math.round(Number(formData.get('amount')) * 100) / 100;
  const salaryPeriod = formData.get('salaryPeriod');
  if (!['dia5', 'dia20', 'outro'].includes(salaryPeriod)) return false;
  const day = salaryPeriod === 'dia5' ? '05' : salaryPeriod === 'dia20' ? '20' : '01';
  const date = `${selectedMonth}-${day}`;
  const person = formData.get('person') || activePerson;
  if (!Number.isFinite(amount) || amount <= 0 || !isValidRecordDate(date) || !Object.hasOwn(peopleNames, person)) return false;
  state.incomes.push({
    id: newRecordId('salary'),
    description: salaryPeriod === 'outro' ? (String(formData.get('description') || '').trim() || 'Outro') : 'Salario',
    amount,
    date, salaryPeriod, person, createdBy: activePerson, kind: 'salary'
  });
  selectedMonth = date.slice(0, 7);
  persist(); render(); showToast('Salário adicionado à receita do mês.');
  return true;
}

function deleteTransaction(id) {
  const tx = state.transactions.find((item) => item.id === id);
  if (!tx) return;
  askConfirm(`Excluir “${tx.description}”?`, 'Excluir', () => {
    state.transactions = state.transactions.filter((item) => item.id !== id); persist(); render(); showToast('Lançamento removido.');
  });
}

function togglePayment(id) {
  const payment = state.payments.find((item) => item.id === id);
  if (!payment) return;
  payment.done = !payment.done; persist(); render(); showToast(payment.done ? 'Pagamento marcado como feito.' : 'Pagamento voltou para pendente.');
}

function exportData() {
  const payload = { ...state, exportedAt: new Date().toISOString(), app: 'Casal Finanças' };
  downloadBackup(payload, `casal-financas-${selectedMonth}.json`);
}

function downloadBackup(payload, filename) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const link = document.createElement('a');
  link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url); showToast('Backup pronto para compartilhar.');
}

function hasNovemberBackup() { return false; }

function exportPreviousNovemberBackup() { showToast('Não há backup anterior neste endereço.'); }

document.querySelector('#import-file').addEventListener('change', async (event) => {
  const file = event.target.files?.[0]; if (!file) return;
  try { offerImport(planImport(JSON.parse(await file.text()))); }
  catch { showToast('Não foi possível ler esse arquivo.'); }
  event.target.value = '';
});

function syncSalaryDescription(modal) {
  const period = modal.querySelector('#salary-period');
  const field = modal.querySelector('#salary-description-field');
  const input = modal.querySelector('#salary-description');
  if (!period || !field || !input) return;
  const isOther = period.value === 'outro';
  field.hidden = !isOther;
  field.style.display = isOther ? 'grid' : 'none';
  input.disabled = !isOther;
}

function openSalaryModal() {
  if (!activePerson) return;
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="salary-modal-title">
    <div class="modal-head"><div><h2 class="modal-title" id="salary-modal-title">Adicionar salário</h2><p class="panel-kicker">uma nova entrada para o orçamento do casal</p></div><button class="modal-close" data-close-modal aria-label="Fechar">×</button></div>
    <form id="salary-form">
      <div class="field"><label for="salary-person">Salário de quem?</label><select id="salary-person" name="person">${Object.keys(peopleNames).map((person) => `<option value="${person}" ${person === activePerson ? 'selected' : ''}>${personLabel(person)}</option>`).join('')}</select></div>
      <div class="form-row"><div class="field"><label for="salary-amount">Valor líquido recebido</label><input id="salary-amount" name="amount" type="number" inputmode="decimal" min="0.01" step="0.01" placeholder="0,00" required /></div><div class="field"><label for="salary-period">Tipo de recebimento</label><select id="salary-period" name="salaryPeriod" required><option value="dia5">Salário dia 5</option><option value="dia20">Salário dia 20</option><option value="outro">Outro</option></select></div></div>
      <div class="field" id="salary-description-field" hidden style="display:none"><label for="salary-description">Descrição (opcional)</label><input id="salary-description" name="description" maxlength="120" placeholder="Ex.: bônus ou renda extra" disabled /></div>
      <p class="helper-note">Este valor será somado à receita de ${monthTitle(selectedMonth)}. Outro registra uma entrada no mês, sem pedir data. Os salários já cadastrados não serão substituídos.</p>
      <div class="modal-actions"><button class="secondary-button" type="button" data-close-modal>Cancelar</button><button class="form-submit" type="submit">Adicionar salário</button></div>
    </form>
  </section>`;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', close));
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  backdrop.querySelector('#salary-period').addEventListener('change', () => syncSalaryDescription(backdrop));
  syncSalaryDescription(backdrop);
  backdrop.querySelector('#salary-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (addSalary(new FormData(event.currentTarget))) close();
  });
  backdrop.querySelector('#salary-amount')?.focus();
}

function openPaymentsModal() {
  if (!activePerson) return;
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="payments-modal-title">
    <div class="modal-head"><div><h2 class="modal-title" id="payments-modal-title">Editar pagamentos</h2><p class="panel-kicker">ajuste os compromissos já cadastrados</p></div><button class="modal-close" data-close-modal aria-label="Fechar">×</button></div>
    <div class="payment-list">${state.payments.slice().sort((a, b) => a.day - b.day).map(paymentRow).join('') || emptyState('Nenhum pagamento cadastrado.')}</div>
    ${state.payments.length ? `<form id="payment-edit-form" style="margin-top:22px">
      <div class="field"><label for="payment-edit-id">Qual pagamento você quer editar?</label><select id="payment-edit-id" name="id">${state.payments.slice().sort((a, b) => a.day - b.day).map((payment) => `<option value="${escapeHtml(payment.id)}">${escapeHtml(payment.description)}</option>`).join('')}</select></div>
      <div class="field"><label for="payment-edit-description">Descrição</label><input id="payment-edit-description" name="description" maxlength="120" required /></div>
      <div class="form-row"><div class="field"><label for="payment-edit-amount">Valor</label><input id="payment-edit-amount" name="amount" type="number" inputmode="decimal" min="0.01" step="0.01" required /></div><div class="field"><label for="payment-edit-day">Dia do vencimento</label><input id="payment-edit-day" name="day" type="number" inputmode="numeric" min="1" max="31" step="1" required /></div></div>
      <div class="field"><label for="payment-edit-detail">Observação (opcional)</label><input id="payment-edit-detail" name="detail" maxlength="160" placeholder="Ex.: débito automático" /></div>
      <p class="helper-note">Sem observação, o app mostra automaticamente o dia do vencimento. A marcação de pago ou pendente será preservada.</p>
      <div class="modal-actions"><button class="secondary-button" type="button" data-close-modal>Cancelar</button><button class="form-submit" type="submit">Salvar alterações</button></div>
    </form>` : ''}
  </section>`;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', close));
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  backdrop.querySelectorAll('[data-payment]').forEach((button) => button.addEventListener('click', () => {
    togglePayment(button.dataset.payment);
    const payment = state.payments.find((item) => item.id === button.dataset.payment);
    button.classList.toggle('done', Boolean(payment?.done));
    button.setAttribute('aria-label', payment?.done ? 'Marcar como pendente' : 'Marcar como pago');
  }));
  if (state.payments.length) {
    backdrop.querySelector('#payment-edit-id').addEventListener('change', () => fillPaymentEditor(backdrop));
    fillPaymentEditor(backdrop);
    backdrop.querySelector('#payment-edit-form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (savePaymentEdit(new FormData(event.currentTarget))) close();
    });
  }
}

function fillPaymentEditor(modal) {
  const select = modal.querySelector('#payment-edit-id');
  const payment = select.value ? state.payments.find((item) => item.id === select.value) : state.payments.slice().sort((a, b) => a.day - b.day)[0];
  if (!payment) return;
  select.value = payment.id;
  modal.querySelector('#payment-edit-description').value = payment.description;
  modal.querySelector('#payment-edit-amount').value = String(payment.amount);
  modal.querySelector('#payment-edit-day').value = String(payment.day);
  modal.querySelector('#payment-edit-detail').value = /^vence dia\s+\d+$/i.test(String(payment.detail || '').trim()) ? '' : payment.detail || '';
}

function savePaymentEdit(formData) {
  if (!activePerson) return false;
  const index = state.payments.findIndex((item) => item.id === formData.get('id'));
  const description = String(formData.get('description') || '').trim();
  const amount = Math.round(Number(formData.get('amount')) * 100) / 100;
  const day = Number(formData.get('day'));
  if (index < 0 || !description || !Number.isFinite(amount) || amount <= 0 || !Number.isInteger(day) || day < 1 || day > 31) return false;
  const detail = String(formData.get('detail') || '').trim() || `vence dia ${day}`;
  state.payments[index] = { ...state.payments[index], description, amount, day, detail };
  persist(); render(); showToast('Pagamento atualizado.');
  return true;
}

function openGoalModal() {
  if (!activePerson) return;
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="goal-modal-title">
    <div class="modal-head"><div><h2 class="modal-title" id="goal-modal-title">Editar metas</h2><p class="panel-kicker">atualize os planos que vocês já escolheram</p></div><button class="modal-close" data-close-modal aria-label="Fechar">×</button></div>
    ${state.goals.length ? `<form id="goal-edit-form">
      <div class="field"><label for="goal-edit-id">Qual meta você quer editar?</label><select id="goal-edit-id" name="id">${state.goals.map((goal) => `<option value="${escapeHtml(goal.id)}">${escapeHtml(goal.name)}</option>`).join('')}</select></div>
      <div class="field"><label for="goal-edit-name">Nome da meta</label><input id="goal-edit-name" name="name" maxlength="120" required /></div>
      <div class="field"><label for="goal-edit-caption">Descrição (opcional)</label><input id="goal-edit-caption" name="caption" maxlength="160" /></div>
      <div class="form-row"><div class="field"><label for="goal-edit-saved">Já guardamos</label><input id="goal-edit-saved" name="saved" type="number" inputmode="decimal" min="0" step="0.01" required /></div><div class="field"><label for="goal-edit-target">Valor-alvo</label><input id="goal-edit-target" name="target" type="number" inputmode="decimal" min="0.01" step="0.01" required /></div></div>
      <div class="modal-actions"><button class="secondary-button" type="button" data-close-modal>Cancelar</button><button class="form-submit" type="submit">Salvar alterações</button></div>
    </form>` : emptyState('Não há metas cadastradas para editar.')}
  </section>`;
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', close));
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  if (state.goals.length) {
    backdrop.querySelector('#goal-edit-id').addEventListener('change', () => fillGoalEditor(backdrop));
    fillGoalEditor(backdrop);
    backdrop.querySelector('#goal-edit-form').addEventListener('submit', (event) => {
      event.preventDefault();
      if (saveGoalEdit(new FormData(event.currentTarget))) close();
    });
  }
}

function fillGoalEditor(modal) {
  const select = modal.querySelector('#goal-edit-id');
  const goal = select.value ? state.goals.find((item) => item.id === select.value) : state.goals[0];
  if (!goal) return;
  select.value = goal.id;
  modal.querySelector('#goal-edit-name').value = goal.name;
  modal.querySelector('#goal-edit-caption').value = goal.caption || '';
  modal.querySelector('#goal-edit-saved').value = String(goal.saved);
  modal.querySelector('#goal-edit-target').value = String(goal.target);
}

function saveGoalEdit(formData) {
  if (!activePerson) return false;
  const index = state.goals.findIndex((item) => item.id === formData.get('id'));
  const name = String(formData.get('name') || '').trim();
  const saved = Math.round(Number(formData.get('saved')) * 100) / 100;
  const target = Math.round(Number(formData.get('target')) * 100) / 100;
  if (index < 0 || !name || !Number.isFinite(saved) || saved < 0 || !Number.isFinite(target) || target <= 0) return false;
  const caption = String(formData.get('caption') || '').trim();
  state.goals[index] = { ...state.goals[index], name, caption, saved, target };
  persist(); render(); showToast('Meta atualizada.');
  return true;
}

function showToast(message) {
  document.querySelector('.toast')?.remove(); const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = message; document.body.appendChild(toast); setTimeout(() => toast.remove(), 2600);
}

boot();
