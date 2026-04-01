import Redis from 'ioredis';

import { DEFAULTS } from './defaults';

// Singleton — reuse connection across serverless invocations in the same warm instance
const getRedis = (() => {
  let client: Redis | null = null;
  return () => {
    if (!client) {
      const url = process.env.REDIS_URL;
      if (!url) throw new Error('REDIS_URL environment variable is not set.');
      client = new Redis(url, { lazyConnect: false, maxRetriesPerRequest: 3 });
    }
    return client;
  };
})();

/**
 * Read a value from Redis. If the key doesn't exist, seed it from DEFAULTS and return that.
 */
export async function readData<T>(key: string): Promise<T> {
  const redis = getRedis();
  const raw = await redis.get(key);

  if (raw !== null) return JSON.parse(raw) as T;

  // First-access seed
  const seed = DEFAULTS[key] as T | undefined;
  if (seed !== undefined) {
    await redis.set(key, JSON.stringify(seed));
    return seed;
  }

  throw new Error(`No data found and no default defined for key: ${key}`);
}

export async function writeData<T>(key: string, data: T): Promise<void> {
  const redis = getRedis();
  await redis.set(key, JSON.stringify(data));
}
