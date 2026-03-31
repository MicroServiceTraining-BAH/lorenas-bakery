'use client';

import { useEffect, useState } from 'react';

import type { BusinessData } from '@/types/cms';

type Status = 'idle' | 'saving' | 'saved' | 'error';

const EMPTY: BusinessData = {
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  hours: { weekdays: '', saturday: '', sunday: '' },
};

export default function BusinessPage() {
  const [data, setData] = useState<BusinessData>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/business')
      .then((r) => r.json())
      .then((d: BusinessData) => setData(d))
      .finally(() => setLoading(false));
  }, []);

  function set(field: keyof Omit<BusinessData, 'hours'>, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setStatus('idle');
  }

  function setHours(field: keyof BusinessData['hours'], value: string) {
    setData((prev) => ({ ...prev, hours: { ...prev.hours, [field]: value } }));
    setStatus('idle');
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    setErrorMsg('');
    try {
      const res = await fetch('/api/business', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const d = (await res.json()) as { error?: string };
        throw new Error(d.error ?? 'Save failed.');
      }
      setStatus('saved');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Save failed. Please try again.');
    }
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
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Business Info</h1>
      <p className="text-sm text-gray-500 mb-8">
        Update your contact details, address, and hours.
      </p>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Contact */}
        <fieldset className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <legend className="text-sm font-semibold text-gray-700 mb-2">Contact</legend>
          <Field
            label="Phone number"
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(v) => set('phone', v)}
            placeholder="(703) 928-0838"
          />
          <Field
            label="Email address"
            id="email"
            type="email"
            value={data.email}
            onChange={(v) => set('email', v)}
            placeholder="contact@lorenasbakery.com"
          />
        </fieldset>

        {/* Address */}
        <fieldset className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <legend className="text-sm font-semibold text-gray-700 mb-2">Address</legend>
          <Field
            label="Street address"
            id="address"
            value={data.address}
            onChange={(v) => set('address', v)}
            placeholder="5443 Wellington Rd"
          />
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <Field
                label="City"
                id="city"
                value={data.city}
                onChange={(v) => set('city', v)}
                placeholder="Manassas"
              />
            </div>
            <Field
              label="State"
              id="state"
              value={data.state}
              onChange={(v) => set('state', v)}
              placeholder="VA"
            />
          </div>
          <Field
            label="ZIP code"
            id="zip"
            value={data.zip}
            onChange={(v) => set('zip', v)}
            placeholder="20110"
          />
        </fieldset>

        {/* Hours */}
        <fieldset className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <legend className="text-sm font-semibold text-gray-700 mb-2">Hours</legend>
          <Field
            label="Monday – Friday"
            id="weekdays"
            value={data.hours.weekdays}
            onChange={(v) => setHours('weekdays', v)}
            placeholder="7:00 AM – 7:00 PM"
          />
          <Field
            label="Saturday"
            id="saturday"
            value={data.hours.saturday}
            onChange={(v) => setHours('saturday', v)}
            placeholder="6:00 AM – 8:00 PM"
          />
          <Field
            label="Sunday"
            id="sunday"
            value={data.hours.sunday}
            onChange={(v) => setHours('sunday', v)}
            placeholder="7:00 AM – 5:00 PM"
          />
        </fieldset>

        {/* Footer */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === 'saving'}
            className="px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'saving' ? 'Saving...' : 'Save changes'}
          </button>
          {status === 'saved' && (
            <span className="text-sm text-green-600">Changes saved.</span>
          )}
          {status === 'error' && (
            <span role="alert" className="text-sm text-red-600">
              {errorMsg}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
};

function Field({ label, id, value, onChange, placeholder, type = 'text' }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent"
      />
    </div>
  );
}
