'use client';

import { useEffect, useState } from 'react';

import type { MenuCategory, MenuData, MenuItem } from '@/types/cms';

const EMPTY_ITEM: Omit<MenuItem, 'id'> = {
  name: '',
  description: '',
  price: '',
  tag: '',
  emoji: '🍞',
};

type ModalState =
  | { mode: 'closed' }
  | { mode: 'add-item'; categoryId: string }
  | { mode: 'edit-item'; categoryId: string; item: MenuItem }
  | { mode: 'add-category' }
  | { mode: 'edit-category'; categoryId: string; currentName: string };

export default function MenuPage() {
  const [data, setData] = useState<MenuData>({ categories: [] });
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<ModalState>({ mode: 'closed' });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch('/api/menu')
      .then((r) => r.json())
      .then((d: MenuData) => {
        setData(d);
        setExpanded(new Set<string>(d.categories.map((c) => c.id)));
      })
      .finally(() => setLoading(false));
  }, []);

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  async function handleDeleteItem(categoryId: string, itemId: string) {
    const res = await fetch(`/api/menu/${categoryId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'item', itemId }),
    });
    const d = (await res.json()) as { data?: MenuData };
    if (d.data) setData(d.data);
  }

  async function handleDeleteCategory(categoryId: string) {
    const res = await fetch(`/api/menu/${categoryId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'category' }),
    });
    const d = (await res.json()) as { data?: MenuData };
    if (d.data) setData(d.data);
  }

  async function handleSaveItem(
    categoryId: string,
    item: Omit<MenuItem, 'id'> & { id?: string }
  ) {
    const res = await fetch(`/api/menu/${categoryId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'item', item }),
    });
    const d = (await res.json()) as { data?: MenuData };
    if (d.data) setData(d.data);
    setModal({ mode: 'closed' });
  }

  async function handleSaveCategory(name: string, categoryId?: string) {
    if (categoryId) {
      const res = await fetch(`/api/menu/${categoryId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'category', name }),
      });
      const d = (await res.json()) as { data?: MenuData };
      if (d.data) setData(d.data);
    } else {
      const res = await fetch('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const d = (await res.json()) as { data?: MenuData };
      if (d.data) {
        setData(d.data);
        const newId = d.data.categories[d.data.categories.length - 1]?.id;
        if (newId) setExpanded((prev) => { const s = new Set(prev); s.add(newId); return s; });
      }
    }
    setModal({ mode: 'closed' });
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="h-4 bg-gray-100 rounded w-48 animate-pulse mb-2" />
        <div className="h-3 bg-gray-100 rounded w-64 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Menu Items</h1>
          <p className="text-sm text-gray-500">
            {data.categories.reduce((s, c) => s + c.items.length, 0)} items across{' '}
            {data.categories.length} categories
          </p>
        </div>
        <button
          onClick={() => setModal({ mode: 'add-category' })}
          className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
        >
          + Add category
        </button>
      </div>

      {data.categories.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200 border-dashed">
          <p className="text-sm font-medium text-gray-700 mb-1">No categories yet</p>
          <p className="text-xs text-gray-500">Add a category to start building your menu.</p>
        </div>
      )}

      <div className="space-y-4">
        {data.categories.map((category) => (
          <CategoryBlock
            key={category.id}
            category={category}
            expanded={expanded.has(category.id)}
            onToggle={() => toggleExpand(category.id)}
            onAddItem={() => setModal({ mode: 'add-item', categoryId: category.id })}
            onEditItem={(item) =>
              setModal({ mode: 'edit-item', categoryId: category.id, item })
            }
            onDeleteItem={(itemId) => handleDeleteItem(category.id, itemId)}
            onEditCategory={() =>
              setModal({
                mode: 'edit-category',
                categoryId: category.id,
                currentName: category.name,
              })
            }
            onDeleteCategory={() => handleDeleteCategory(category.id)}
          />
        ))}
      </div>

      {/* Modals */}
      {modal.mode === 'add-item' && (
        <ItemModal
          title="Add item"
          initialValues={EMPTY_ITEM}
          onSave={(item) => handleSaveItem(modal.categoryId, item)}
          onClose={() => setModal({ mode: 'closed' })}
        />
      )}
      {modal.mode === 'edit-item' && (
        <ItemModal
          title="Edit item"
          initialValues={modal.item}
          onSave={(item) => handleSaveItem(modal.categoryId, { ...item, id: modal.item.id })}
          onClose={() => setModal({ mode: 'closed' })}
        />
      )}
      {(modal.mode === 'add-category' || modal.mode === 'edit-category') && (
        <CategoryModal
          title={modal.mode === 'add-category' ? 'Add category' : 'Rename category'}
          initialName={modal.mode === 'edit-category' ? modal.currentName : ''}
          onSave={(name) =>
            handleSaveCategory(
              name,
              modal.mode === 'edit-category' ? modal.categoryId : undefined
            )
          }
          onClose={() => setModal({ mode: 'closed' })}
        />
      )}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

type CategoryBlockProps = {
  category: MenuCategory;
  expanded: boolean;
  onToggle: () => void;
  onAddItem: () => void;
  onEditItem: (item: MenuItem) => void;
  onDeleteItem: (itemId: string) => void;
  onEditCategory: () => void;
  onDeleteCategory: () => void;
};

function CategoryBlock({
  category,
  expanded,
  onToggle,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onEditCategory,
  onDeleteCategory,
}: CategoryBlockProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Category header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-left flex-1 min-w-0"
          aria-expanded={expanded}
        >
          <span
            className={`text-gray-400 text-xs transition-transform ${expanded ? 'rotate-90' : ''}`}
            aria-hidden="true"
          >
            ▶
          </span>
          <span className="font-medium text-gray-900 truncate">{category.name}</span>
          <span className="text-xs text-gray-400 flex-shrink-0">
            {category.items.length} item{category.items.length !== 1 ? 's' : ''}
          </span>
        </button>
        <div className="flex items-center gap-2 ml-4 flex-shrink-0">
          <button
            onClick={onEditCategory}
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors px-2 py-1"
          >
            Rename
          </button>
          <button
            onClick={() => {
              if (window.confirm(`Delete "${category.name}" and all its items?`)) {
                onDeleteCategory();
              }
            }}
            className="text-xs text-red-400 hover:text-red-600 transition-colors px-2 py-1"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Items list */}
      {expanded && (
        <div>
          {category.items.length === 0 ? (
            <p className="px-5 py-4 text-sm text-gray-400 italic">No items in this category.</p>
          ) : (
            <div className="divide-y divide-gray-50">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded flex-shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => onEditItem(item)}
                      className="text-xs text-gray-500 hover:text-gray-900 transition-colors px-2 py-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete "${item.name}"?`)) onDeleteItem(item.id);
                      }}
                      className="text-xs text-red-400 hover:text-red-600 transition-colors px-2 py-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="px-5 py-3 border-t border-gray-50">
            <button
              onClick={onAddItem}
              className="text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
            >
              + Add item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

type ItemModalProps = {
  title: string;
  initialValues: Omit<MenuItem, 'id'> & { id?: string };
  onSave: (item: Omit<MenuItem, 'id'>) => void;
  onClose: () => void;
};

function ItemModal({ title, initialValues, onSave, onClose }: ItemModalProps) {
  const [form, setForm] = useState({ ...EMPTY_ITEM, ...initialValues });
  const [saving, setSaving] = useState(false);

  function update(field: keyof typeof EMPTY_ITEM, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await onSave(form);
    setSaving(false);
  }

  return (
    <ModalOverlay onClose={onClose}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <div className="w-20">
            <label htmlFor="item-emoji" className="block text-sm font-medium text-gray-700 mb-1">
              Emoji
            </label>
            <input
              id="item-emoji"
              type="text"
              value={form.emoji}
              onChange={(e) => update('emoji', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="item-name"
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              required
              placeholder="Conchas"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>
        </div>

        <div>
          <label htmlFor="item-desc" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="item-desc"
            rows={2}
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
            placeholder="Describe this item..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-stone-300"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor="item-price" className="block text-sm font-medium text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              id="item-price"
              type="text"
              value={form.price}
              onChange={(e) => update('price', e.target.value)}
              required
              placeholder="$2.50"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="item-tag" className="block text-sm font-medium text-gray-700 mb-1">
              Tag <span className="text-gray-400">(optional)</span>
            </label>
            <input
              id="item-tag"
              type="text"
              value={form.tag}
              onChange={(e) => update('tag', e.target.value)}
              placeholder="Bestseller"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving...' : 'Save item'}
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
}

type CategoryModalProps = {
  title: string;
  initialName: string;
  onSave: (name: string) => void;
  onClose: () => void;
};

function CategoryModal({ title, initialName, onSave, onClose }: CategoryModalProps) {
  const [name, setName] = useState(initialName);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    await onSave(name.trim());
    setSaving(false);
  }

  return (
    <ModalOverlay onClose={onClose}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cat-name" className="block text-sm font-medium text-gray-700 mb-1">
            Category name <span className="text-red-500">*</span>
          </label>
          <input
            id="cat-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Pan Dulce & Sweet Bread"
            autoFocus
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
          />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
}

type ModalOverlayProps = { onClose: () => void; children: React.ReactNode };

function ModalOverlay({ onClose, children }: ModalOverlayProps) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
