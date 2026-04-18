'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'loading' | 'success' | 'error';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM: FormData = { name: '', email: '', phone: '', message: '' };

const validate = (data: FormData): FieldErrors => {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'That email doesn\'t look right. Please check and try again.';
  }
  if (!data.message.trim()) errors.message = 'Please include a message so we can help you.';
  return errors;
};

type InputProps = {
  id: keyof FormData;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
};

function Field({
  id, label, type = 'text', placeholder, value, error, required, onChange, onBlur, textarea,
}: InputProps) {
  const inputClass = cn(
    'w-full px-4 py-3.5 rounded-2xl border font-sans text-sm text-stone-800 placeholder:text-stone-400 bg-white transition-all duration-200 outline-none',
    error
      ? 'border-rose-400 ring-2 ring-rose-100 focus:border-rose-blush'
      : 'border-stone-200 focus:border-teal-sage focus:ring-2 focus:ring-teal-pale'
  );

  return (
    <div>
      <label htmlFor={id} className="block font-sans text-sm font-medium text-stone-700 mb-2">
        {label}
        {required && <span className="text-rose-blush ml-1" aria-hidden="true">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={cn(inputClass, 'resize-none')}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={inputClass}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-xs text-rose-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name as keyof FormData]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormState('loading');
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState('success');
    setFormData(INITIAL_FORM);
    setTouched({});
    setErrors({});
  };

  if (formState === 'success') {
    return (
      <div
        className="bg-white rounded-3xl p-10 shadow-card text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-teal-pale flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="#6080A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
          Message Sent!
        </h3>
        <p className="font-sans text-stone-600 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out! We&apos;ll get back to you within 24 hours. You can also
          call us at{' '}
          <a href="tel:7037898919" className="text-rose-blush font-medium hover:underline">
            (703) 789-8919
          </a>{' '}
          for faster service.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-8 btn-outline text-sm px-6 py-3"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const isValid = Object.keys(validate(formData)).length === 0;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-8 md:p-10 shadow-card"
      aria-label="Contact form"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Full Name"
          placeholder="Maria Garcia"
          value={formData.name}
          error={touched.name ? errors.name : undefined}
          required
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          id="email"
          label="Email Address"
          type="email"
          placeholder="maria@example.com"
          value={formData.email}
          error={touched.email ? errors.email : undefined}
          required
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="mt-5">
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="(703) 555-1234"
          value={formData.phone}
          error={touched.phone ? errors.phone : undefined}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="mt-5">
        <Field
          id="message"
          label="Your Message"
          placeholder="I'd love to order a custom cake for my daughter's quinceañera on May 15th..."
          value={formData.message}
          error={touched.message ? errors.message : undefined}
          required
          onChange={handleChange}
          onBlur={handleBlur}
          textarea
        />
      </div>

      <p className="mt-3 font-sans text-xs text-stone-400">
        Fields marked with <span className="text-rose-blush">*</span> are required.
      </p>

      <button
        type="submit"
        disabled={formState === 'loading' || (Object.keys(touched).length > 0 && !isValid)}
        className={cn(
          'mt-6 w-full btn-primary text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0',
          formState === 'loading' && 'cursor-wait'
        )}
        aria-label="Send your message"
      >
        {formState === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 010 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sending your message...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
