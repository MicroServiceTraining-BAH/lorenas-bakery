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
