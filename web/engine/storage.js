/* Deutschweg — single storage layer (PROMPT §5, §15, D11).
   Nothing else may touch localStorage or IndexedDB. */
(function (DW) {
  const KEY = 'deutschweg_v2';
  const MEDIA_DB = 'deutschweg_media';

  DW.clock = DW.clock || { offset: 0 };
  DW.now = function () { return new Date(Date.now() + (DW.clock.offset || 0)); };
  DW.today = function () { return DW.now().toISOString().slice(0, 10); };
  DW.plusDays = function (n) {
    const d = DW.now();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  };

  function defaultState() {
    const today = DW.today();
    return {
      schemaVersion: 2,
      learner: { name: '', startDate: today, targetExam: 'goethe-b2', weeklyHours: 10 },
      gates: {
        G1: { state: 'diagnostic', passedOn: null, certificate: null },
        G2: { state: 'locked', passedOn: null, certificate: null },
        G3: { state: 'locked', passedOn: null, certificate: null },
        G4: { state: 'locked', passedOn: null, certificate: null },
        G5: { state: 'locked', passedOn: null, certificate: null }
      },
      capabilities: [],
      lessons: [],
      progress: [],
      indicators: { R1: 0, R2: null, R3: 0, R4: null, R5: null, R6: { productive: 0, chunks: 0 } },
      indicatorLog: [],
      drills: [],
      allocation: { srs: 90, grammar: 120, speaking: 60, reading: 60, listening: 90, pronunciation: 30, writing: 60, foundations: 30 },
      weekPlan: { weekOf: null, allocation: {}, consumed: {}, decision: null, sessions: [] },
      errorLedger: [],
      srs: { cards: [], intervals: [0, 1, 2, 4, 7, 15, 30], leitner: true, reviewedToday: 0, reviewedOn: null },
      portfolio: { recordings: [], texts: [] },
      mocks: [],
      gaps: { lastSessionDate: null, reentryPending: false },
      rotation: { lastChange: null, variant: 'A' },
      settings: { uiLanguage: 'ar', rtl: true, reviewDay: 'friday', speechScoring: 'local', aiConversation: false, writingChecker: true, pauseUntil: null },
      checkLog: [],
      stats: { lastExport: null, sessionsCompleted: 0, startedAt: new Date().toISOString(), workshopDone: false, mediaError: null }
    };
  }

  /* non-destructive merge: defaults are the floor, saved data wins, unknown keys kept */
  function mergeState(base, saved) {
    if (Array.isArray(base)) return Array.isArray(saved) ? saved : base;
    if (base && typeof base === 'object') {
      const out = {};
      for (const k of Object.keys(base)) out[k] = mergeState(base[k], saved ? saved[k] : undefined);
      if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
        for (const k of Object.keys(saved)) if (!(k in out)) out[k] = saved[k];
      }
      return out;
    }
    return saved === undefined || saved === null ? base : saved;
  }

  function load() {
    const base = defaultState();
    try {
      if (typeof localStorage === 'undefined') return base;
      const raw = localStorage.getItem(KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      const merged = mergeState(base, saved);
      if (saved && saved.schemaVersion && saved.schemaVersion < 2) {
        merged.legacy = merged.legacy || { schemaVersion: saved.schemaVersion, kept: true };
      }
      return merged;
    } catch (e) {
      console.error('state load failed', e);
      return base;
    }
  }

  function save(S) {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {
      if (typeof alert === 'function') alert('تعذّر الحفظ في هذا المتصفح: ' + e.message);
    }
  }
  function keepSafety(S) {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(KEY + '_backup_' + Date.now(), JSON.stringify(S));
    } catch (e) { /* the import still proceeds; the user is told if the safety copy failed */ }
  }

  function mediaDB() {
    if (typeof indexedDB === 'undefined') return Promise.reject(new Error('لا يوجد IndexedDB'));
    return new Promise((res, rej) => {
      const r = indexedDB.open(MEDIA_DB, 1);
      r.onupgradeneeded = () => {
        if (!r.result.objectStoreNames.contains('recordings')) r.result.createObjectStore('recordings', { keyPath: 'id' });
      };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  function mediaPut(rec) {
    return mediaDB().then(db => new Promise((res, rej) => {
      const tx = db.transaction('recordings', 'readwrite');
      tx.objectStore('recordings').put(rec);
      tx.oncomplete = res;
      tx.onerror = () => rej(tx.error);
    }));
  }
  function mediaGet(id) {
    return mediaDB().then(db => new Promise((res, rej) => {
      const tx = db.transaction('recordings', 'readonly');
      const q = tx.objectStore('recordings').get(id);
      q.onsuccess = () => res(q.result);
      q.onerror = () => rej(q.error);
    }));
  }
  function mediaAll() {
    return mediaDB().then(db => new Promise((res, rej) => {
      const tx = db.transaction('recordings', 'readonly');
      const q = tx.objectStore('recordings').getAll();
      q.onsuccess = () => res(q.result || []);
      q.onerror = () => rej(q.error);
    }));
  }

  /* ---- store-only ZIP (no compression, no library) ---- */
  function crc32(bytes) {
    let c = ~0;
    for (let i = 0; i < bytes.length; i++) {
      c ^= bytes[i];
      for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
    }
    return (~c) >>> 0;
  }
  function u16(n) { return [n & 255, (n >>> 8) & 255]; }
  function u32(n) { return [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255]; }
  function zipStore(files) {
    const enc = new TextEncoder();
    const locals = [];
    const centrals = [];
    let offset = 0;
    files.forEach(f => {
      const name = enc.encode(f.name);
      const data = f.data instanceof Uint8Array ? f.data : enc.encode(String(f.data));
      const crc = crc32(data);
      const local = [].concat(
        [0x50, 0x4b, 0x03, 0x04], u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0),
        Array.from(name), Array.from(data)
      );
      const central = [].concat(
        [0x50, 0x4b, 0x01, 0x02], u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0),
        u16(0), u16(0), u32(0), u32(offset), Array.from(name)
      );
      locals.push(local);
      centrals.push(central);
      offset += local.length;
    });
    const cd = centrals.flat();
    const eocd = [].concat(
      [0x50, 0x4b, 0x05, 0x06], u16(0), u16(0), u16(files.length), u16(files.length),
      u32(cd.length), u32(offset), u16(0)
    );
    return new Uint8Array(locals.flat().concat(cd, eocd));
  }

  DW.storage = {
    KEY, MEDIA_DB, defaultState, mergeState, load, save, keepSafety,
    mediaPut, mediaGet, mediaAll, zipStore, crc32
  };
  DW.session = DW.session || { S: null };
})(window.DW = window.DW || {});
