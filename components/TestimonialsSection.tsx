const REVIEWS = [
  {
    name: 'Alexa Martinez',
    location: 'Google Review',
    rating: 5,
    text: "Lorena's Bakery is an absolute gem! This Salvadoran bakery brings the rich flavors and traditions of El Salvador to every bite. From the moment you walk in, you're greeted with the warm, comforting aroma of freshly baked goods and a welcoming atmosphere.",
    avatar: 'AM',
    gradient: 'linear-gradient(135deg, #E87BA1 0%, #F5B8C8 100%)',
  },
  {
    name: 'Josue Sanchez',
    location: 'Manassas, VA',
    rating: 5,
    text: "I'm so glad I found this spot in Manassas — it instantly gave me that authentic Salvadoran vibe. Everything tastes homemade and full of tradition. The donuts and cakequitos are next level, literally the best I've ever had.",
    avatar: 'JS',
    gradient: 'linear-gradient(135deg, #6080A8 0%, #7A98C0 100%)',
  },
  {
    name: 'Luis Munoz',
    location: 'Google Review',
    rating: 5,
    text: "If you haven't been to Lorena's Bakery yet, you're missing out. This place is the real deal. The pan dulce is fresh, soft, and made with the kind of care and tradition you just can't fake.",
    avatar: 'LM',
    gradient: 'linear-gradient(135deg, #F4C27A 0%, #F9D99B 100%)',
  },
  {
    name: 'Orling & Cristina Guardado',
    location: 'Maryland',
    rating: 5,
    text: "We drove from Maryland to check it out — not disappointed at all! Their bread is very delicious, the wait was very short, and the staff is very friendly. This is why you should always try a place for yourself.",
    avatar: 'OG',
    gradient: 'linear-gradient(135deg, #E87BA1 0%, #D4A0C8 100%)',
  },
  {
    name: 'Chris Jarian',
    location: 'Google Review',
    rating: 5,
    text: "The food and desserts at Lorena's Bakery were phenomenal. Drove 45 minutes and it was absolutely worth it. Amazing customer service and food — will definitely be back very soon.",
    avatar: 'CJ',
    gradient: 'linear-gradient(135deg, #6080A8 0%, #9AB8D4 100%)',
  },
  {
    name: 'Batael Emeshwu',
    location: 'Google Review',
    rating: 5,
    text: "This bakery is so good!! Super affordable, delicious, and amazing customer service. I love this bakery so much — I highly recommend it to everyone.",
    avatar: 'BE',
    gradient: 'linear-gradient(135deg, #F4C27A 0%, #E87BA1 100%)',
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
    <section id="reviews" className="section-padding bg-warm-gradient" aria-labelledby="reviews-heading">
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
              <div className="font-sans text-xs text-stone-500 mt-1">Google Reviews</div>
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
              href="https://maps.google.com/?q=10750+Sudley+Manor+Dr+Manassas+VA+20109"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal text-sm px-7 py-3"
              aria-label="Get directions to Lorena's Bakery on Google Maps"
            >
              Get Directions
            </a>
            <a
              href="tel:7037898919"
              className="btn-outline text-sm px-7 py-3"
              aria-label="Call us at (703) 789-8919"
            >
              Call (703) 789-8919
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
