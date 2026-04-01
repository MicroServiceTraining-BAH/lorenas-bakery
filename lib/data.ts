import { Redis } from '@upstash/redis';

import { DEFAULTS } from './defaults';

// Upstash Redis client — reads UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from env
const redis = Redis.fromEnv();

/**
 * Read a value from Redis. If the key doesn't exist, seed it from DEFAULTS and return that.
 */
export async function readData<T>(key: string): Promise<T> {
  const value = await redis.get<T>(key);
  if (value !== null && value !== undefined) return value;

  // First-access seed
  const seed = DEFAULTS[key] as T | undefined;
  if (seed !== undefined) {
    await redis.set(key, seed);
    return seed;
  }

  throw new Error(`No data found and no default defined for key: ${key}`);
}

export async function writeData<T>(key: string, data: T): Promise<void> {
  await redis.set(key, data);
}
