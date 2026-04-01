import { kv } from '@vercel/kv';

import { DEFAULTS } from './defaults';

/**
 * Read a value from KV. If the key doesn't exist, seed it from DEFAULTS and return that.
 */
export async function readData<T>(key: string): Promise<T> {
  const value = await kv.get<T>(key);
  if (value !== null && value !== undefined) return value;

  // First-access seed
  const seed = DEFAULTS[key] as T | undefined;
  if (seed !== undefined) {
    await kv.set(key, seed);
    return seed;
  }

  throw new Error(`No data found and no default defined for key: ${key}`);
}

export async function writeData<T>(key: string, data: T): Promise<void> {
  await kv.set(key, data);
}
