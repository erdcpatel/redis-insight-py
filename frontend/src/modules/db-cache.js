// IndexedDB Storage Manager for persistent keyspace snapshots (Phase 4)
// Allows instant keyspace view restoration across page reloads and connection switching without re-scanning Redis.

const DB_NAME = "redis_insight_keys_cache";
const DB_VERSION = 1;
const STORE_NAME = "keyspace_snapshots";

let dbPromise = null;

function openDatabase() {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      resolve(null);
      return;
    }

    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id" });
        }
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        console.warn("IndexedDB open error:", event.target.error);
        resolve(null);
      };
    } catch (e) {
      console.warn("IndexedDB initialization skipped:", e);
      resolve(null);
    }
  });

  return dbPromise;
}

export function makeCacheKey(connId, db = 0) {
  return `${connId}:${db}`;
}

/**
 * Save keyspace snapshot to IndexedDB.
 */
export async function saveKeyspaceSnapshot(connId, db, snapshot) {
  if (!connId || !snapshot || !snapshot.keys || snapshot.keys.length === 0) return false;
  try {
    const dbInst = await openDatabase();
    if (!dbInst) return false;

    return new Promise((resolve) => {
      const tx = dbInst.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const record = {
        id: makeCacheKey(connId, db),
        connId,
        db: db || 0,
        keys: snapshot.keys,
        totalInDb: snapshot.totalInDb || snapshot.keys.length,
        cursor: snapshot.cursor || 0,
        pattern: snapshot.pattern || "*",
        timestamp: Date.now()
      };

      const req = store.put(record);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn("Failed to persist keyspace to IndexedDB:", err);
    return false;
  }
}

/**
 * Retrieve cached keyspace snapshot from IndexedDB.
 */
export async function getKeyspaceSnapshot(connId, db = 0) {
  if (!connId) return null;
  try {
    const dbInst = await openDatabase();
    if (!dbInst) return null;

    return new Promise((resolve) => {
      const tx = dbInst.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(makeCacheKey(connId, db));

      req.onsuccess = (event) => {
        const res = event.target.result;
        resolve(res || null);
      };
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    console.warn("Failed to read keyspace from IndexedDB:", err);
    return null;
  }
}

/**
 * Clear cached keyspace snapshot for a connection.
 */
export async function clearKeyspaceSnapshot(connId, db = 0) {
  if (!connId) return false;
  try {
    const dbInst = await openDatabase();
    if (!dbInst) return false;

    return new Promise((resolve) => {
      const tx = dbInst.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(makeCacheKey(connId, db));
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    return false;
  }
}

/**
 * Clear all cached keyspace snapshots.
 */
export async function clearAllKeyspaceSnapshots() {
  try {
    const dbInst = await openDatabase();
    if (!dbInst) return false;

    return new Promise((resolve) => {
      const tx = dbInst.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    return false;
  }
}
