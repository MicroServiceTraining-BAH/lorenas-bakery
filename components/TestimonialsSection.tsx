const REVIEWS = [
  {
    name: 'Maria T.',
    location: 'Manassas, VA',
    rating: 5,
    text: "Lorena's has been my family's Saturday morning tradition for 6 years. The conchas are the real thing — nothing like them anywhere else in Northern Virginia. My kids refuse to eat any other pan dulce now.",
    avatar: 'MT',
    gradient: 'linear-gradient(135deg, #E88FA3 0%, #F5B8C8 100%)',
  },
  {
    name: 'Carlos R.',
    location: 'Gainesville, VA',
    rating: 5,
    text: 'Had Lorena make my daughter\'s quinceañera cake and dessert table. Everyone at the party kept asking who made the cake — it was absolutely stunning and tasted even better than it looked. Will be back for every celebration.',
    avatar: 'CR',
    gradient: 'linear-gradient(135deg, #5F8F8A 0%, #7AADA8 100%)',
  },
  {
    name: 'Jennifer M.',
    location: 'Woodbridge, VA',
    rating: 5,
    text: 'Drive 35 minutes from Woodbridge every weekend because nothing compares. The quesadilla salvadoreña alone is worth the trip. Staff is warm, the bakery smells incredible, and the prices are fair. Genuine gem.',
    avatar: 'JM',
    gradient: 'linear-gradient(135deg, #F4C27A 0%, #F9D99B 100%)',
  },
  {
    name: 'Alejandro V.',
    location: 'Centreville, VA',
    rating: 5,
    text: "We ordered catering trays for our company holiday party — three dozen pastelitos and two trays of assorted pan dulce. Everything was perfect. Arrived on time, looked beautiful, disappeared in 20 minutes. Will order again.",
    avatar: 'AV',
    gradient: 'linear-gradient(135deg, #E88FA3 0%, #D4A0C8 100%)',
  },
  {
    name: 'Rosa G.',
    location: 'Dale City, VA',
    rating: 5,
    text: "I grew up in El Salvador and haven't found a bakery outside of home that gets it right — until this one. The empanadas de leche taste exactly like my grandmother's. I brought my mother to visit and she cried.",
    avatar: 'RG',
    gradient: 'linear-gradient(135deg, #5F8F8A 0%, #A8C5C2 100%)',
  },
  {
    name: 'David K.',
    location: 'Haymarket, VA',
    rating: 5,
    text: 'Called in a birthday cake order with 4 days notice and they delivered exactly what I described — tres leches with fresh flowers, feeds 30 people. My whole family is still talking about it. These people are professionals.',
    avatar: 'DK',
    gradient: 'linear-gradient(135deg, #F4C27A 0%, #E88FA3 100%)',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F4C27A" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-warm-gradient" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-5">Customer Reviews</div>
            <h2
              id="reviews-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
            >
              What our community{' '}
              <span className="italic text-rose-blush">is saying</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <div className="font-serif text-3xl font-bold text-stone-900">4.9</div>
              <Stars count={5} />
              <div className="font-sans text-xs text-stone-500 mt-1">200+ Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="bg-white rounded-3xl p-7 shadow-card flex flex-col gap-5"
              aria-label={`Review by ${review.name}`}
            >
              {/* Stars */}
              <Stars count={review.rating} />

              {/* Quote */}
              <blockquote className="font-sans text-sm text-stone-700 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer */}
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-sans text-xs font-bold text-white"
                  style={{ background: review.gradient }}
                  aria-hidden="true"
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-stone-900">{review.name}</div>
                  <div className="font-sans text-xs text-stone-400">{review.location}</div>
                </div>
                {/* Google badge */}
                <div className="ml-auto flex-shrink-0" aria-label="Google review">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-stone-500 text-sm mb-4">
            Join thousands of families who make Lorena&apos;s their go-to bakery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=5443+Wellington+Rd+Manassas+VA+20110"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal text-sm px-7 py-3"
              aria-label="Get directions to Lorena's Bakery on Google Maps"
            >
              Get Directions
            </a>
            <a
              href="tel:7039280838"
              className="btn-outline text-sm px-7 py-3"
              aria-label="Call us at (703) 928-0838"
            >
              Call (703) 928-0838
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
