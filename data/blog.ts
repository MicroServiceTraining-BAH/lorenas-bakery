export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  coverGradient: string;
  content: BlogSection[];
};

export type BlogSection = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'cta';
  text?: string;
  items?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

const POSTS: BlogPost[] = [
  {
    slug: 'best-salvadoran-pan-dulce-northern-virginia',
    title: 'A Guide to Authentic Salvadoran Pan Dulce in Northern Virginia',
    excerpt:
      "Pan dulce means something different depending on who you ask. Here is what makes Salvadoran pan dulce its own thing, and where to find the real version in Manassas.",
    publishedAt: '2025-11-10',
    readingTime: '6 min read',
    category: 'Our Baked Goods',
    coverGradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)',
    content: [
      {
        type: 'p',
        text: "If you have been to a Salvadoran bakery, you already know pan dulce is different. It is not a croissant, not a doughnut — it has its own thing going on. Soft, lightly sweet, with toppings and fillings that vary by family and region. It is the bread people grew up eating, and the thing they miss most when they move somewhere new.",
      },
      {
        type: 'h2',
        text: 'What Is Pan Dulce?',
      },
      {
        type: 'p',
        text: "Pan dulce — literally 'sweet bread' in Spanish — refers to a wide family of soft, slightly sweet breads common across Latin America. The Salvadoran tradition has its own distinct character: lighter than Mexican variations, with subtle spicing, a tender crumb, and toppings that range from colorful sugar paste to sesame seeds to cinnamon streusel.",
      },
      {
        type: 'p',
        text: "In El Salvador, pan dulce shows up twice a day — at breakfast with café de olla or hot chocolate, and again in the late afternoon during merienda. For families who moved to Northern Virginia, finding a bakery that gets it right matters more than most people outside that community would realize.",
      },
      {
        type: 'h2',
        text: 'The Most Popular Salvadoran Pan Dulce Varieties',
      },
      {
        type: 'h3',
        text: 'Conchas',
      },
      {
        type: 'p',
        text: "Conchas are arguably the most iconic pan dulce. Named for their shell-like appearance, they feature a soft enriched dough topped with a colored sugar paste scored into a decorative pattern. Our conchas at Lorena's Bakery are made with a family recipe passed down from Abuela Carmen — the dough enriched with egg and butter, the sugar crust just firm enough to crack when you bite in.",
      },
      {
        type: 'h3',
        text: 'Quesadilla Salvadoreña',
      },
      {
        type: 'p',
        text: "Don't let the name fool you — quesadilla salvadoreña is nothing like the Mexican flour tortilla dish. It's a dense, slightly sweet pound cake made with rice flour, sour cream, and a generous amount of aged cheese. The result is a buttery, tangy bread that pairs perfectly with black coffee. It's one of the most requested items at our bakery, especially on weekend mornings.",
      },
      {
        type: 'h3',
        text: 'Semitas',
      },
      {
        type: 'p',
        text: "Semitas are oval-shaped sweet rolls with a distinctive sesame seed topping and a faintly spiced, anise-forward flavor. The crumb is tight and pillowy — perfect for dipping in hot coffee. They're a traditional staple that often gets overlooked in favor of more colorful options, but loyal semita fans will tell you there's nothing better.",
      },
      {
        type: 'h3',
        text: 'Polvorosas',
      },
      {
        type: 'p',
        text: "Polvorosas are crumbly shortbread-style cookies made with lard or butter, flour, and sugar — simple, but delicate. The name comes from 'polvo,' meaning dust or powder, because they practically dissolve on your tongue. They're often made during holidays and celebrations, and we carry them year-round at Lorena's Bakery.",
      },
      {
        type: 'h2',
        text: 'Why Most Pan Dulce in Northern Virginia Falls Short',
      },
      {
        type: 'p',
        text: "The challenge with pan dulce in the DMV area is that most commercial bakeries don't use traditional recipes. Mass-produced pan dulce often uses shortening instead of butter, pre-mixed dough, and artificial flavoring. The result is bread that looks right but tastes hollow.",
      },
      {
        type: 'p',
        text: "At Lorena's Bakery, we do things the old way. We mix our doughs by hand, we use real butter and eggs, and we bake in small batches every morning. We don't use preservatives — which means our bread sells out. That's by design.",
      },
      {
        type: 'h2',
        text: 'Where to Find Authentic Pan Dulce in Manassas, VA',
      },
      {
        type: 'p',
        text: "Lorena's Bakery is located at 5443 Wellington Rd in Manassas, VA 20110. We open at 7am Monday through Friday and at 6am on Saturdays. Sunday hours are 7am to 5pm. We're conveniently located for residents across Northern Virginia — Centreville, Gainesville, Woodbridge, Dale City, and Bristow are all within a 20–30 minute drive.",
      },
      {
        type: 'p',
        text: "We recommend arriving early, especially on weekends. Our conchas and quesadillas typically sell out before noon. If you want to guarantee a specific item, call ahead at (703) 928-0838 and we'll set it aside.",
      },
      {
        type: 'cta',
        ctaLabel: 'See Our Full Menu',
        ctaHref: '/menu',
      },
    ],
  },
  {
    slug: 'custom-celebration-cakes-manassas-va',
    title: 'Custom Celebration Cakes in Manassas, VA: Quinceañeras, Birthdays & Weddings',
    excerpt:
      "Lorena's Bakery has been making custom cakes for Northern Virginia families since we opened — quinceañeras, weddings, birthdays, corporate events. Here is how the order process works and what to expect.",
    publishedAt: '2025-12-05',
    readingTime: '7 min read',
    category: 'Custom Orders',
    coverGradient: 'linear-gradient(145deg, #F9E8F5 0%, #E8C5E0 50%, #D4A0C8 100%)',
    content: [
      {
        type: 'p',
        text: "For a quinceañera, a wedding, or a milestone birthday, the cake is not just dessert. It needs to work — look right, taste right, feed the right number of people. At Lorena's Bakery, we have been doing custom orders long enough to know what makes them go smoothly and what does not.",
      },
      {
        type: 'h2',
        text: 'Our Custom Cake Philosophy',
      },
      {
        type: 'p',
        text: "Every custom cake starts with a conversation. We want to know who is being celebrated, the vibe of the event, what flavors matter, and how many people need to eat. We do not have a catalog. We figure out what you need and build it.",
      },
      {
        type: 'p',
        text: "Our head pastry chef Sofia trained at a culinary institute in Washington, DC before returning to work alongside her mother Lorena. She brings modern cake design technique to traditional Salvadoran flavors, which means you get a cake that looks stunning and tastes like something your grandmother would have made.",
      },
      {
        type: 'h2',
        text: 'Quinceañera Cakes',
      },
      {
        type: 'p',
        text: "The quinceañera cake is one of the most important elements of the entire celebration. It needs to match the dress, the décor, the vibe — and it needs to serve a crowd. We specialize in layered quinceañera cakes from 3 to 6 tiers, with flavors including tres leches, vanilla bean, dulce de leche, strawberry cream, and chocolate fudge.",
      },
      {
        type: 'p',
        text: "We also create matching dessert tables with mini pastelitos, polvorosas, and petit fours that echo the color palette of the cake. Many families order full dessert spreads from us for their quinceañera receptions, and we offer package pricing for large events.",
      },
      {
        type: 'h2',
        text: 'Wedding Cakes & Pastry Tables',
      },
      {
        type: 'p',
        text: "We've supplied wedding cakes and dessert tables for celebrations across Northern Virginia, from intimate backyard ceremonies to large receptions at venues in Manassas and Gainesville. Our wedding cakes are available in classic round, square, and petal shapes, with custom floral décor, fondant details, or exposed buttercream finishes.",
      },
      {
        type: 'p',
        text: "For couples who want to honor Salvadoran heritage at their wedding, we offer traditional elements like decorative pan dulce towers, individual wedding cookies, and tres leches centerpiece cakes — all customizable to match your theme.",
      },
      {
        type: 'h2',
        text: 'Birthday Cakes for All Ages',
      },
      {
        type: 'p',
        text: "From a child's first birthday to a grandparent's 80th, we make birthday cakes that feel personal. Our most popular birthday flavors are tres leches (our classic), strawberry cream, chocolate fudge, and caramel coconut. We can accommodate dietary restrictions — ask us about dairy-free and egg-free options when you place your order.",
      },
      {
        type: 'h2',
        text: 'How to Place a Custom Cake Order',
      },
      {
        type: 'p',
        text: "Custom cake orders require at least 72 hours' notice. For large or complex orders (weddings, quinceañeras, full dessert tables), we recommend reaching out at least 2–3 weeks in advance.",
      },
      {
        type: 'ul',
        items: [
          'Call us at (703) 928-0838 or submit our contact form with your event date and details',
          "We'll follow up within one business day to discuss design, flavors, and sizing",
          'A 50% deposit is required to confirm your order',
          'Final balance is due at pickup or delivery',
          'We offer local delivery within Prince William and Fairfax counties for a flat fee',
        ],
      },
      {
        type: 'h2',
        text: 'Serving Manassas and All of Northern Virginia',
      },
      {
        type: 'p',
        text: "We're based in Manassas, VA, and we serve customers throughout Northern Virginia — including Gainesville, Woodbridge, Dale City, Centreville, Chantilly, Bristow, and Haymarket. If you're planning an event in the greater DC area, we'd love to be part of your celebration.",
      },
      {
        type: 'cta',
        ctaLabel: 'See All Custom Cake Services',
        ctaHref: '/services#custom-cakes',
      },
    ],
  },
  {
    slug: 'how-conchas-are-made-traditional-salvadoran-recipe',
    title: "How We Make Our Conchas: A Look Inside Lorena's Bakery Kitchen",
    excerpt:
      "Every morning before sunrise, the conchas go in the oven. Here is a look at how we actually make them — from mixing the dough the night before to scoring the sugar crust — the way Abuela Carmen taught Lorena to do it.",
    publishedAt: '2026-01-20',
    readingTime: '5 min read',
    category: 'Behind the Scenes',
    coverGradient: 'linear-gradient(145deg, #F9E3C7 0%, #F0B87A 50%, #E8906A 100%)',
    content: [
      {
        type: 'p',
        text: "It's 4:30 in the morning and the kitchen at Lorena's Bakery is already alive. The dough was mixed the night before and has been proofing in the walk-in cooler overnight — a slow, cold fermentation that builds flavor the fast approach can't replicate. By the time the first customers arrive at 7am, the conchas have been baked, cooled, and set out in the case.",
      },
      {
        type: 'h2',
        text: 'What Makes a Good Concha',
      },
      {
        type: 'p',
        text: "A great concha has three qualities: a soft, pillowy interior; a lightly sweet, slightly crisp sugar crust that doesn't shatter when you bite in; and a flavor that's rich but not overwhelming. Most commercial conchas fail on the interior — they're too dry, too dense, or too sweet. The sugar crust is where the real artistry lives.",
      },
      {
        type: 'p',
        text: "The original recipe came from Lorena's grandmother Carmen, who made conchas in San Salvador every Sunday. The family recipe uses more egg yolk than most versions — which gives the crumb its golden color and custardy richness — and real unsalted butter rather than shortening.",
      },
      {
        type: 'h2',
        text: 'The Dough',
      },
      {
        type: 'p',
        text: "Our concha dough starts with high-protein bread flour, whole milk warmed to exactly the right temperature, eggs, a touch of sugar, a pinch of salt, and active dry yeast. The butter goes in last, incorporated gradually after the gluten network is established — this is a brioche-style technique that keeps the crumb open and soft.",
      },
      {
        type: 'p',
        text: "We mix by hand, not by machine. It takes longer — about 20 minutes of working the dough — but the results are different. You develop a feel for the dough, an intuition for when it's ready that no timer can replicate.",
      },
      {
        type: 'h2',
        text: 'The Sugar Crust',
      },
      {
        type: 'p',
        text: "The crust — called the concha topping or pasta — is made from powdered sugar, shortening, flour, and vanilla. We divide the paste into batches and color each one with natural food coloring. The most common colors are pink, chocolate (cocoa powder), and plain white, though we sometimes do seasonal colors for holidays.",
      },
      {
        type: 'p',
        text: "Applying the crust is the most skill-dependent part of the process. You roll a ball of paste between your palms and then press it flat onto the top of the proofed dough ball. Then comes the scoring — using a curved plastic scraper or the back of a knife, you cut the classic shell pattern into the crust. Too deep and the crust falls apart during baking. Too shallow and the pattern disappears.",
      },
      {
        type: 'h2',
        text: 'Baking and Timing',
      },
      {
        type: 'p',
        text: "Conchas bake at a moderate temperature — around 350°F — for about 18 to 22 minutes. The goal is a fully baked, soft interior without over-browning the sugar crust. We rotate the trays halfway through for even color.",
      },
      {
        type: 'p',
        text: "The hardest part is leaving them alone after they come out of the oven. The crumb needs at least 15 minutes to set before cutting, and the full flavor develops another 10 minutes after that. We're strict about this — it's the difference between a good concha and a great one.",
      },
      {
        type: 'h2',
        text: 'Come Try Them Yourself',
      },
      {
        type: 'p',
        text: "Our conchas come out fresh every morning and we typically sell out before noon — especially on Saturdays. If you want to guarantee a batch, call us the day before at (703) 928-0838 and we'll set them aside for you. We're located at 5443 Wellington Rd, Manassas, VA 20110.",
      },
      {
        type: 'cta',
        ctaLabel: 'View Our Full Menu',
        ctaHref: '/menu',
      },
    ],
  },
];

export function getBlogPosts(): BlogPost[] {
  return POSTS.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
