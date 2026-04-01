import crypto from 'crypto';

import { readData, writeData } from './data';
import type { Session, User } from '@/types/cms';

export function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

export function generateSalt(): string {
  return crypto.randomBytes(16).toString('hex');
}

export function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function verifyPassword(password: string, salt: string, storedHash: string): boolean {
  const computed = hashPassword(password, salt);
  try {
    return crypto.timingSafeEqual(Buffer.from(computed, 'hex'), Buffer.from(storedHash, 'hex'));
  } catch {
    return false;
  }
}

/**
 * Seeds the first admin user from ADMIN_USERNAME / ADMIN_PASSWORD env vars if
 * no users exist yet. Also syncs the admin password if ADMIN_PASSWORD changed —
 * this is the recovery path: update the env var in Vercel to reset the password.
 */
export async function ensureAdminExists(): Promise<void> {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!username || !password) return;

  const data = await readData<{ users: User[] }>('users');

  // First run — no users yet, create the admin
  if (data.users.length === 0) {
    const salt = generateSalt();
    const passwordHash = hashPassword(password, salt);
    data.users.push({
      id: crypto.randomUUID(),
      username,
      passwordHash,
      salt,
      role: 'admin',
      name: username,
    });
    await writeData('users', data);
    return;
  }

  // Admin exists — check if ADMIN_PASSWORD changed and sync if so
  const admin = data.users.find((u) => u.username === username && u.role === 'admin');
  if (!admin) return;
  if (verifyPassword(password, admin.salt, admin.passwordHash)) return; // unchanged

  // Password changed in env — update stored hash (password reset recovery)
  const salt = generateSalt();
  admin.passwordHash = hashPassword(password, salt);
  admin.salt = salt;
  await writeData('users', data);
}

export async function getUsers(): Promise<User[]> {
  return (await readData<{ users: User[] }>('users')).users;
}

export async function getUserById(userId: string): Promise<User | null> {
  return (await getUsers()).find((u) => u.id === userId) ?? null;
}

export async function getUserByUsername(username: string): Promise<User | null> {
  return (await getUsers()).find((u) => u.username === username) ?? null;
}

export async function createUser(
  username: string,
  password: string,
  role: 'admin' | 'editor',
  name: string
): Promise<User> {
  const salt = generateSalt();
  const passwordHash = hashPassword(password, salt);
  const user: User = {
    id: crypto.randomUUID(),
    username,
    passwordHash,
    salt,
    role,
    name,
  };
  const data = await readData<{ users: User[] }>('users');
  data.users.push(user);
  await writeData('users', data);
  return user;
}

export async function createSession(userId: string): Promise<string> {
  const token = generateToken();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const data = await readData<{ sessions: Session[] }>('sessions');
  // Purge expired sessions on each login
  data.sessions = data.sessions.filter((s) => new Date(s.expires) > new Date());
  data.sessions.push({ token, userId, expires });
  await writeData('sessions', data);
  return token;
}

export async function getSession(token: string): Promise<Session | null> {
  const data = await readData<{ sessions: Session[] }>('sessions');
  const session = data.sessions.find((s) => s.token === token);
  if (!session) return null;
  if (new Date(session.expires) < new Date()) return null;
  return session;
}

export async function deleteSession(token: string): Promise<void> {
  const data = await readData<{ sessions: Session[] }>('sessions');
  data.sessions = data.sessions.filter((s) => s.token !== token);
  await writeData('sessions', data);
}
