'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "What kind of bakery is Lorena's Bakery?",
    answer:
      "We're a family-owned Salvadoran bakery in Manassas, VA, specializing in authentic Latin American pan dulce — conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, polvorosas, and more. Everything is baked from scratch every morning using traditional family recipes passed down from Abuela Carmen.",
  },
  {
    question: 'Do you make custom cakes and celebration orders?',
    answer:
      'Yes! We create custom cakes for quinceañeras, weddings, birthdays, baby showers, and corporate events. Our pastry chef Sofia trained in Washington, DC and specializes in combining modern cake design with traditional Salvadoran flavors. Custom orders require at least 72 hours notice — call (703) 789-8919 or use our contact form.',
  },
  {
    question: 'What are your hours and location?',
    answer:
      "We're located at 10750 Sudley Manor Dr, Manassas, VA 20109. Monday through Friday we're open 7:00 AM to 7:00 PM. Saturday 6:00 AM to 8:00 PM. Sunday 7:00 AM to 5:00 PM. We recommend arriving early — our most popular items often sell out before noon.",
  },
  {
    question: "Do I need to order in advance or can I just walk in?",
    answer:
      "Walk-ins are always welcome! We bake fresh every morning and have a full display case ready when we open. However, if you want a specific item — especially on weekends — we recommend calling the day before and we'll set it aside for you. Custom orders always require advance notice.",
  },
  {
    question: 'Do you serve Northern Virginia areas outside of Manassas?',
    answer:
      "We're based in Manassas and serve customers from across Northern Virginia, including Gainesville, Woodbridge, Dale City, Centreville, Chantilly, Bristow, and Haymarket. We offer local delivery within Prince William and Fairfax counties for custom orders.",
  },
  {
    question: 'What is quesadilla salvadoreña?',
    answer:
      "Despite the name, quesadilla salvadoreña is nothing like the Mexican dish. It's a dense, buttery pound cake made with rice flour, sour cream, and aged cheese — tangy, slightly sweet, and perfect with black coffee. It's one of our most popular items and a staple of Salvadoran baking.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — label + heading */}
          <div className="lg:col-span-2">
            <div className="section-label mb-5">Common Questions</div>
            <h2
              id="faq-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
            >
              Everything you{' '}
              <span className="italic text-rose-blush">want to know</span>
            </h2>
            <p className="mt-5 font-sans text-stone-500 leading-relaxed">
              Still have questions? Call us at{' '}
              <a href="tel:7037898919" className="text-rose-blush font-medium hover:underline">
                (703) 789-8919
              </a>{' '}
              or visit us at 10750 Sudley Manor Dr, Manassas, VA.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3">
            <dl className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-stone-100 overflow-hidden transition-all duration-200 hover:border-rose-blush/30"
                  >
                    <dt>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span className="font-serif text-base font-bold text-stone-900 leading-snug">
                          {faq.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'bg-rose-blush text-white rotate-45' : 'bg-stone-100 text-stone-500'
                          }`}
                          aria-hidden="true"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M6 1v10M1 6h10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'max-h-60' : 'max-h-0'
                      }`}
                    >
                      <p className="px-6 pb-5 font-sans text-sm text-stone-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
