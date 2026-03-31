import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Meet the family behind Lorena's Bakery — a family-owned Salvadoran bakery in Manassas, VA, serving the community with authentic pan dulce and pastries since 2010.",
};

const TEAM = [
  {
    name: 'Lorena',
    role: 'Founder & Head Baker',
    bio: 'Born and raised in El Salvador, Lorena learned to bake alongside her grandmother at age seven. After moving to Virginia in 2005, she carried those recipes in her heart until she could share them with the Manassas community.',
    emoji: '👩‍🍳',
    gradient: 'linear-gradient(145deg, #FDE8EE 0%, #E88FA3 100%)',
  },
  {
    name: 'Miguel',
    role: 'Co-owner & Coffee Director',
    bio: 'Miguel sources and roasts our coffee blends with the same care Lorena puts into her bread. A coffee enthusiast for over 20 years, he ensures every cup is as memorable as every bite.',
    emoji: '☕',
    gradient: 'linear-gradient(145deg, #F5E8D6 0%, #A0704A 100%)',
  },
  {
    name: 'Sofia',
    role: 'Pastry Chef',
    bio: 'Lorena and Miguel\'s daughter Sofia trained at a culinary institute in DC before coming home to join the family business. She brings modern technique to traditional flavors.',
    emoji: '🎂',
    gradient: 'linear-gradient(145deg, #E8F5F4 0%, #5F8F8A 100%)',
  },
];

const VALUES = [
  {
    icon: '🤝',
    title: 'Community First',
    description:
      "We believe a bakery is more than a business — it's a gathering place. We host neighborhood events, support local schools, and donate fresh bread to community food banks every week.",
  },
  {
    icon: '🌿',
    title: 'Real Ingredients',
    description:
      'No preservatives. No shortcuts. Every ingredient is chosen with intention — we work with local suppliers wherever possible and use traditional Salvadoran ingredients imported direct.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    description:
      "Every item is handcrafted. We don't use industrial mixers or pre-made mixes. From shaping each concha to rolling each pastelito, human hands touch every piece of bread.",
  },
  {
    icon: '🎉',
    title: 'Celebrating Life',
    description:
      "Birthday cakes, quinceañera pasteles, wedding cookies — we're honored to be part of your most important moments. Custom orders are our specialty.",
  },
];

export default function AboutPage() {
  return (
    <>
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
          <div className="section-label justify-center mb-6">Our Story</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            Family, <span className="italic text-rose-blush">Tradition</span>,<br />
            and Fresh Bread
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Lorena&apos;s Bakery was built on three things: generations-old recipes, a deep love
            for the Manassas community, and the belief that good bread can bring people together.
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
              <h2 id="story-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                From San Salvador<br />
                <span className="italic text-rose-blush">to Manassas</span>
              </h2>
              <div className="space-y-5 font-sans text-stone-600 leading-relaxed">
                <p>
                  It all started in a small kitchen in San Salvador, where Lorena&apos;s grandmother
                  Carmen made conchas and quesadillas for the neighborhood. The recipes were never
                  written down — they lived in hands, in memory, in love.
                </p>
                <p>
                  When Lorena arrived in Virginia in 2005, she brought nothing but a suitcase and
                  those memories. For years she baked for friends, for neighbors, for anyone who
                  would taste. The response was always the same: &ldquo;You should open a bakery.&rdquo;
                </p>
                <p>
                  In 2010, with her husband Miguel and two-year-old Sofia on her hip, Lorena did
                  exactly that. She opened a small storefront on Wellington Road and has been
                  feeding the Manassas community ever since.
                </p>
                <p>
                  Today, the recipes are still the same. The kitchen still smells like cinnamon
                  and warm sugar. And Abuela Carmen&apos;s spirit is in every single thing we bake.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Visit Us Today
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
            <div className="section-label justify-center mb-5">The Family</div>
            <h2 id="team-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
              Meet the <span className="italic text-rose-blush">Bakers</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="card-base overflow-hidden text-center">
                <div
                  className="h-52 flex items-center justify-center text-6xl"
                  style={{ background: member.gradient }}
                  role="img"
                  aria-label={`${member.name}, ${member.role}`}
                >
                  <span aria-hidden="true">{member.emoji}</span>
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
            <div className="section-label justify-center mb-5">What We Stand For</div>
            <h2 id="values-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
              Our <span className="italic text-rose-blush">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon, title, description }) => (
              <div key={title} className="bg-cream rounded-3xl p-7 hover:shadow-card transition-shadow duration-300">
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
          <h2 id="about-cta-heading" className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Come say hello.<br />
            The bread is warm.
          </h2>
          <p className="mt-5 font-sans text-rose-light/90 text-lg">
            5443 Wellington Rd, Manassas, VA · Open daily · (703) 928-0838
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-rose-blush font-semibold text-sm font-sans hover:bg-rose-pale transition-all duration-300"
            >
              Order Now
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-sm font-sans hover:bg-white/10 transition-all duration-300"
            >
              See Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
