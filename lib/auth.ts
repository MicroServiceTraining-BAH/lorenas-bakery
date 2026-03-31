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

export function getUsers(): User[] {
  return readData<{ users: User[] }>('users.json').users;
}

export function getUserById(userId: string): User | null {
  return getUsers().find((u) => u.id === userId) ?? null;
}

export function getUserByUsername(username: string): User | null {
  return getUsers().find((u) => u.username === username) ?? null;
}

export function createUser(
  username: string,
  password: string,
  role: 'admin' | 'editor',
  name: string
): User {
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
  const data = readData<{ users: User[] }>('users.json');
  data.users.push(user);
  writeData('users.json', data);
  return user;
}

export function createSession(userId: string): string {
  const token = generateToken();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const data = readData<{ sessions: Session[] }>('sessions.json');
  // Purge expired sessions on each login
  data.sessions = data.sessions.filter((s) => new Date(s.expires) > new Date());
  data.sessions.push({ token, userId, expires });
  writeData('sessions.json', data);
  return token;
}

export function getSession(token: string): Session | null {
  const data = readData<{ sessions: Session[] }>('sessions.json');
  const session = data.sessions.find((s) => s.token === token);
  if (!session) return null;
  if (new Date(session.expires) < new Date()) return null;
  return session;
}

export function deleteSession(token: string): void {
  const data = readData<{ sessions: Session[] }>('sessions.json');
  data.sessions = data.sessions.filter((s) => s.token !== token);
  writeData('sessions.json', data);
}
