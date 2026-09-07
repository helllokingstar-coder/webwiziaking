const DB_NAME = 'webwizia_storage_db';
const STORE_NAME = 'hero_images';
const KEY = 'active_hero_image';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveImageToStorage(dataUrl: string): Promise<boolean> {
  // 1. Try saving to IndexedDB (unlimited storage, survives refreshes)
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.warn('IndexedDB save error:', e);
  }

  // 2. Also try localStorage for instant sync fallback
  try {
    localStorage.setItem('webwizia_hero_custom_image', dataUrl);
  } catch {
    // Quota might be exceeded for high-res images, which is why IndexedDB is primary
  }

  // 3. Also post to backend if available so it writes to disk
  try {
    await fetch('/api/save-hero-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dataUrl })
    });
  } catch {
    // Dev server API might be optional
  }

  return true;
}

export async function getImageFromStorage(): Promise<string | null> {
  // 1. First check IndexedDB
  try {
    const db = await openDB();
    const data = await new Promise<string | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY);
      req.onsuccess = () => resolve((req.result as string) || null);
      req.onerror = () => reject(req.error);
    });
    if (data) return data;
  } catch (e) {
    console.warn('IndexedDB get error:', e);
  }

  // 2. Fallback to localStorage
  try {
    const local = localStorage.getItem('webwizia_hero_custom_image');
    if (local) return local;
  } catch {}

  return null;
}

export async function clearImageFromStorage(): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {}

  try {
    localStorage.removeItem('webwizia_hero_custom_image');
  } catch {}
}
