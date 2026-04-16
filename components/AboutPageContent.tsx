'use client';

import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/lib/language-context';

const TEAM_VISUALS = [
  { emoji: '👩‍🍳', gradient: 'linear-gradient(145deg, #FDE8EE 0%, #E88FA3 100%)' },
  { emoji: '☕', gradient: 'linear-gradient(145deg, #F5E8D6 0%, #A0704A 100%)' },
  { emoji: '🎂', gradient: 'linear-gradient(145deg, #E8F5F4 0%, #5F8F8A 100%)' },
];

function LastWordItalic({ text, className }: { text: string; className: string }) {
  const lastSpace = text.lastIndexOf(' ');
  if (lastSpace === -1) return <span className={`${className} italic text-rose-blush`}>{text}</span>;
  return (
    <span className={className}>
      {text.slice(0, lastSpace)} <span className="italic text-rose-blush">{text.slice(lastSpace + 1)}</span>
    </span>
  );
}

export default function AboutPageContent() {
  const { t } = useLanguage();
  const pg = t.aboutPage;

  return (
    <>
      <Breadcrumb items={[{ label: pg.hero.label, href: '/about' }]} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F8 0%, #FDE8EE 50%, #FFF3E8 100%)' }}
        aria-label="About page hero"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-light/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gold-light/30 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">{pg.hero.label}</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            {pg.hero.headingPre}{' '}
            <span className="italic text-rose-blush">{pg.hero.headingItalic}</span><br />
            {pg.hero.headingPost}
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {pg.hero.body}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="rounded-[2.5rem] overflow-hidden shadow-warm"
                style={{
                  background: 'linear-gradient(145deg, #F9E8C0 0%, #F0B87A 40%, #E8906A 100%)',
                  aspectRatio: '4/5',
                }}
                role="img"
                aria-label="The bakery kitchen at sunrise"
              >
                <div className="h-full flex flex-col items-center justify-center text-center px-10">
                  <div className="font-script text-6xl text-white/70 mb-6">El Salvador</div>
                  <div className="font-serif text-white/90 text-xl leading-relaxed max-w-xs">
                    &ldquo;The best recipes are the ones that carry a memory.&rdquo;
                  </div>
                  <p className="font-sans text-white/70 text-sm mt-4">— Abuela Carmen, 1962</p>
                </div>
              </div>
            </div>

            <div>
              <h2
                id="story-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight"
              >
                {pg.story.labelPre}<br />
                <span className="italic text-rose-blush">{pg.story.labelItalic}</span>
              </h2>
              <div className="space-y-5 font-sans text-stone-600 leading-relaxed">
                <p>{pg.story.p1}</p>
                <p>{pg.story.p2}</p>
                <p>{pg.story.p3}</p>
                <p>{pg.story.p4}</p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  {pg.story.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="section-padding bg-warm-gradient" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-5">{pg.team.label}</div>
            <h2 id="team-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
              <LastWordItalic text={pg.team.heading} className="" />
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {pg.team.members.map((member, i) => (
              <div key={member.name} className="card-base overflow-hidden text-center">
                <div
                  className="h-52 flex items-center justify-center text-6xl"
                  style={{ background: TEAM_VISUALS[i].gradient }}
                  role="img"
                  aria-label={`${member.name}, ${member.role}`}
                >
                  <span aria-hidden="true">{TEAM_VISUALS[i].emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">{member.name}</h3>
                  <p className="font-sans text-xs font-semibold text-teal-sage tracking-wide uppercase mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-5">{pg.values.label}</div>
            <h2 id="values-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
              <LastWordItalic text={pg.values.heading} className="" />
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pg.values.items.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-cream rounded-3xl p-7 hover:shadow-card transition-shadow duration-300"
              >
                <div className="text-4xl mb-5" aria-hidden="true">{icon}</div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{title}</h3>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-blush" aria-labelledby="about-cta-heading">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2
            id="about-cta-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {pg.cta.heading.split('\n')[0]}<br />
            {pg.cta.heading.split('\n')[1]}
          </h2>
          <p className="mt-5 font-sans text-rose-light/90 text-lg">{pg.cta.address}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-rose-blush font-semibold text-sm font-sans hover:bg-rose-pale transition-all duration-300"
            >
              {pg.cta.orderNow}
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-sm font-sans hover:bg-white/10 transition-all duration-300"
            >
              {pg.cta.seeMenu}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-sm font-sans hover:bg-white/10 transition-all duration-300"
            >
              {pg.cta.customOrders}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
