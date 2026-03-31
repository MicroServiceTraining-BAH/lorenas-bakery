'use client';

import { useEffect, useState } from 'react';

import type { Role } from '@/types/cms';

type PublicUser = { id: string; username: string; name: string; role: Role };
type ViewState = 'list' | 'add';

export default function UsersPage() {
  const [users, setUsers] = useState<PublicUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewState>('list');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [resetId, setResetId] = useState<string | null>(null);
  const [resetPw, setResetPw] = useState('');
  const [resetStatus, setResetStatus] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then((r) => r.json())
      .then((d: { users: PublicUser[] }) => setUsers(d.users))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Delete account "${name}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      const d = (await res.json()) as { error?: string };
      if (!res.ok) { alert(d.error ?? 'Delete failed.'); return; }
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  async function handleResetPassword(id: string) {
    if (!resetPw || resetPw.length < 6) {
      setResetStatus('Password must be at least 6 characters.');
      return;
    }
    const res = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: resetPw }),
    });
    const d = (await res.json()) as { error?: string };
    if (!res.ok) { setResetStatus(d.error ?? 'Failed.'); return; }
    setResetId(null);
    setResetPw('');
    setResetStatus('');
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="h-4 bg-gray-100 rounded w-48 animate-pulse mb-2" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Users</h1>
          <p className="text-sm text-gray-500">Manage who can access this CMS.</p>
        </div>
        {view === 'list' && (
          <button
            onClick={() => setView('add')}
            className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            + Add user
          </button>
        )}
      </div>

      {view === 'add' ? (
        <AddUserForm
          onCreated={(user) => { setUsers((prev) => [...prev, user]); setView('list'); }}
          onCancel={() => setView('list')}
        />
      ) : (
        <div className="space-y-3">
          {users.map((u) => (
            <div
              key={u.id}
              className="bg-white rounded-xl border border-gray-200 px-5 py-4"
            >
              {resetId === u.id ? (
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      Reset password for <span className="font-bold">{u.name}</span>
                    </p>
                    <input
                      type="password"
                      value={resetPw}
                      onChange={(e) => { setResetPw(e.target.value); setResetStatus(''); }}
                      placeholder="New password (min 6 chars)"
                      autoFocus
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
                    />
                    {resetStatus && <p className="text-xs text-red-500 mt-1">{resetStatus}</p>}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleResetPassword(u.id)}
                      className="px-3 py-1.5 bg-stone-900 text-white text-xs rounded-lg hover:bg-stone-800 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => { setResetId(null); setResetPw(''); setResetStatus(''); }}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{u.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          u.role === 'admin'
                            ? 'bg-stone-100 text-stone-700'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {u.role}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">@{u.username}</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => { setResetId(u.id); setResetPw(''); setResetStatus(''); }}
                      className="text-xs text-gray-500 hover:text-gray-900 transition-colors px-2 py-1"
                    >
                      Reset password
                    </button>
                    <button
                      onClick={() => handleDelete(u.id, u.name)}
                      disabled={deletingId === u.id}
                      className="text-xs text-red-400 hover:text-red-600 disabled:opacity-50 transition-colors px-2 py-1"
                    >
                      {deletingId === u.id ? '...' : 'Delete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Add user form ────────────────────────────────────────────────────────────

type AddUserFormProps = {
  onCreated: (user: PublicUser) => void;
  onCancel: () => void;
};

function AddUserForm({ onCreated, onCancel }: AddUserFormProps) {
  const [form, setForm] = useState({ username: '', name: '', password: '', role: 'editor' as Role });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((p) => ({ ...p, [k]: v }));
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const d = (await res.json()) as { user?: PublicUser; error?: string };
      if (!res.ok || !d.user) { setError(d.error ?? 'Failed to create user.'); return; }
      onCreated(d.user);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-base font-semibold text-gray-900 mb-5">New user</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="u-name" className="block text-sm font-medium text-gray-700 mb-1">
              Display name
            </label>
            <input
              id="u-name"
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              required
              placeholder="Lorena"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>
          <div>
            <label htmlFor="u-username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="u-username"
              type="text"
              value={form.username}
              onChange={(e) => update('username', e.target.value)}
              required
              placeholder="lorena"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>
        </div>

        <div>
          <label htmlFor="u-password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="u-password"
            type="password"
            value={form.password}
            onChange={(e) => update('password', e.target.value)}
            required
            placeholder="Min 6 characters"
            autoComplete="new-password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
          />
        </div>

        <div>
          <label htmlFor="u-role" className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            id="u-role"
            value={form.role}
            onChange={(e) => update('role', e.target.value as Role)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-stone-300"
          >
            <option value="editor">Editor — can edit content</option>
            <option value="admin">Admin — full access including user management</option>
          </select>
        </div>

        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

        <div className="flex justify-end gap-3 pt-1">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Creating...' : 'Create user'}
          </button>
        </div>
      </form>
    </div>
  );
}
