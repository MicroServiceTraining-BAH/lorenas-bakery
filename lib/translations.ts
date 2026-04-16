export type Lang = 'en' | 'es';

const t = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      services: 'Services',
      gallery: 'Gallery',
      blog: 'Blog',
      contact: 'Contact',
      orderNow: 'Order Now',
      call: 'Call',
      address: '5443 Wellington Rd, Manassas, VA 20110',
    },
    // Hero
    hero: {
      label: 'Manassas, Virginia · Since 2010',
      heading1: 'Fresh Pan Dulce',
      heading2: '& Pastries',
      heading3: 'Made Daily',
      body: 'Authentic Salvadoran sweet bread, handcrafted pastries, and rich coffee — baked fresh every morning with love and tradition. Taste the difference of family recipes passed down through generations.',
      viewMenu: 'View Our Menu',
      orderNow: 'Order Now',
      rating: '4.9 Rating',
      ratingDesc: '200+ Google Reviews',
      familyOwned: 'Family Owned',
      familyDesc: '15+ years in Manassas',
      bakedFresh: 'Baked Fresh',
      bakedDesc: 'Every morning by 7am',
      freshToday: 'Fresh Today',
      readyBy: 'Ready by 7am',
    },
    // About
    about: {
      label: 'Our Story',
      heading1: 'A Family Tradition,',
      heading2: 'Baked with Love',
      p1: "Lorena's Bakery was born from a simple dream: to bring the authentic flavors of El Salvador to the heart of Manassas, Virginia. What started as Lorena baking conchas and semitas for neighbors has grown into a beloved community gathering place — but the recipes, and the love, remain exactly the same.",
      p2: 'Every morning before sunrise, our family is in the kitchen hand-crafting each pastry, rolling each empanada, and brewing our signature coffee blend. We use traditional Salvadoran techniques passed down through three generations — because real pan dulce can\'t be rushed.',
      p3: "When you walk through our doors, you're not just a customer — you're family. Pull up a chair, let the aroma of fresh bread wrap around you, and stay a while. This is what home tastes like.",
      stat1: 'Years Baking',
      stat2: 'Fresh Items Daily',
      stat3: '5-Star Reviews',
      stat4: 'Made From Scratch',
      cta: 'Meet the Family',
      yearsCaption: 'Years of serving our community',
    },
    // Menu Preview
    menu: {
      label: 'Fresh Daily',
      heading1: 'Baked with',
      heading2: 'Tradition',
      body: 'Every item on our menu is made fresh daily using authentic Salvadoran recipes. Come early — our bestsellers sell out fast.',
      seeFullMenu: 'See Full Menu',
      customOrders: 'Custom orders welcome · Call',
      items: {
        conchas: {
          description: 'Our signature sweet bread with a crumbly sugar shell — available in vanilla, chocolate, and strawberry. A Salvadoran classic you have to try.',
          tag: 'Fan Favorite',
        },
        pastelitos: {
          description: 'Flaky hand pies filled with savory ground beef & potatoes or sweet cream cheese. Baked golden and served warm — a crowd-pleaser at every table.',
          tag: 'Bestseller',
        },
        quesadilla: {
          description: "Not the Mexican tortilla kind — this is a rich, spongy cake made with rice flour, parmesan, and sesame seeds. Sweet, savory, and completely addictive.",
          tag: 'Signature',
        },
        empanadas: {
          description: 'Crispy fried dough filled with sweet vanilla custard and rolled in cinnamon sugar. A dessert that disappears faster than we can make them.',
          tag: 'Sweet Pick',
        },
        cafe: {
          description: 'Mexican-style brewed coffee with cinnamon and piloncillo. Rich, aromatic, and made fresh to order. The perfect companion for your morning pastry.',
          tag: 'Morning Must',
        },
        cakes: {
          description: 'Let us make your special day unforgettable. Tiered cakes, quinceañera cakes, birthdays, and more — all designed and baked to order with your vision in mind.',
          tag: 'Special Order',
        },
      },
    },
    // Gallery
    gallery: {
      label: 'Instagram Gallery',
      heading1: 'Made with',
      heading2: 'Heart',
      followText: 'Every piece tells a story. Follow us',
      followSuffix: 'for daily bakes and specials.',
      viewFull: 'View Full Gallery',
    },
    // Location
    location: {
      label: 'Find Us',
      heading1: 'Come Visit',
      heading2: 'Our Bakery',
      body: "We're in the heart of Manassas. Come for the bread, stay for the warmth.",
      address: 'Address',
      getDirections: 'Get Directions →',
      hours: 'Hours',
      days: {
        weekdays: 'Monday – Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
      contact: 'Contact',
      cantMakeIt: "Can't make it in? We take orders!",
      cantMakeItDesc: 'Call ahead or use our contact form for custom orders and pickups.',
      callUs: 'Call (703) 928-0838',
    },
    // Footer
    footer: {
      tagline: 'Authentic Salvadoran pan dulce, pastries, and coffee — baked fresh daily in Manassas, Virginia. Family-owned since 2010.',
      navigation: 'Navigation',
      visitUs: 'Visit Us',
      hours: 'Hours',
      hoursValue: 'Mon – Fri: 7am – 7pm\nSat: 6am – 8pm · Sun: 7am – 5pm',
      rights: 'All rights reserved.',
      websiteBy: 'Website by',
    },
    // About page (/about)
    aboutPage: {
      hero: {
        label: 'Our Story',
        headingPre: 'Family,',
        headingItalic: 'Tradition,',
        headingPost: 'and Fresh Bread',
        body: "Lorena's Bakery was built on three things: generations-old recipes, a deep love for the Manassas community, and the belief that good bread can bring people together.",
      },
      story: {
        labelPre: 'From San Salvador',
        labelItalic: 'to Manassas',
        p1: "It all started in a small kitchen in San Salvador, where Lorena's grandmother Carmen made conchas and quesadillas for the neighborhood. The recipes were never written down — they lived in hands, in memory, in love.",
        p2: 'When Lorena arrived in Virginia in 2005, she brought nothing but a suitcase and those memories. For years she baked for friends, for neighbors, for anyone who would taste. The response was always the same: "You should open a bakery."',
        p3: 'In 2010, with her husband Miguel and two-year-old Sofia on her hip, Lorena did exactly that. She opened a small storefront on Wellington Road and has been feeding the Manassas community ever since.',
        p4: "Today, the recipes are still the same. The kitchen still smells like cinnamon and warm sugar. And Abuela Carmen's spirit is in every single thing we bake.",
        cta: 'Visit Us Today',
      },
      team: {
        label: 'The Family',
        heading: 'Meet the Bakers',
        members: [
          { name: 'Lorena', role: 'Founder & Head Baker', bio: 'Born and raised in El Salvador, Lorena learned to bake alongside her grandmother at age seven. After moving to Virginia in 2005, she carried those recipes in her heart until she could share them with the Manassas community.' },
          { name: 'Miguel', role: 'Co-owner & Coffee Director', bio: 'Miguel sources and roasts our coffee blends with the same care Lorena puts into her bread. A coffee enthusiast for over 20 years, he ensures every cup is as memorable as every bite.' },
          { name: 'Sofia', role: 'Pastry Chef', bio: "Lorena and Miguel's daughter Sofia trained at a culinary institute in DC before coming home to join the family business. She brings modern technique to traditional flavors." },
        ],
      },
      values: {
        label: 'What We Stand For',
        heading: 'Our Values',
        items: [
          { icon: '🤝', title: 'Community First', description: "We believe a bakery is more than a business — it's a gathering place. We host neighborhood events, support local schools, and donate fresh bread to community food banks every week." },
          { icon: '🌿', title: 'Real Ingredients', description: 'No preservatives. No shortcuts. Every ingredient is chosen with intention — we work with local suppliers wherever possible and use traditional Salvadoran ingredients imported direct.' },
          { icon: '❤️', title: 'Made with Love', description: "Every item is handcrafted. We don't use industrial mixers or pre-made mixes. From shaping each concha to rolling each pastelito, human hands touch every piece of bread." },
          { icon: '🎉', title: 'Celebrating Life', description: "Birthday cakes, quinceañera pasteles, wedding cookies — we're honored to be part of your most important moments. Custom orders are our specialty." },
        ],
      },
      cta: {
        heading: 'Come say hello.\nThe bread is warm.',
        address: '5443 Wellington Rd, Manassas, VA · Open daily · (703) 928-0838',
        orderNow: 'Order Now',
        seeMenu: 'See Our Menu',
        customOrders: 'Custom Orders & Catering',
      },
    },
    // Menu page (/menu)
    menuPage: {
      hero: {
        label: 'Baked Fresh Daily',
        heading: 'Our Menu',
        body: 'Everything made from scratch, every morning. Come early — we often sell out by noon.',
        customOrdersNote: 'For custom orders, call',
        advance: 'at least 72 hours in advance.',
      },
      cta: {
        label: 'Special Occasions',
        heading: 'Custom Orders Welcome',
        body: 'From quinceañera cakes to wedding pastries to corporate event trays — we love creating something special just for you.',
        requestOrder: 'Request a Custom Order',
        call: 'Call (703) 928-0838',
      },
    },
    // Services page (/services)
    servicesPage: {
      hero: {
        label: 'What We Offer',
        heading: 'Bakery Services',
        body: "Custom cakes for life's biggest moments, catering trays for every gathering, and reserved pan dulce so your favorites are always waiting. All made from scratch in Manassas, VA.",
        requestQuote: 'Request a Quote',
        call: 'Call (703) 928-0838',
      },
      services: [
        {
          title: 'Custom Celebration Cakes',
          tagline: 'Quinceañeras · Weddings · Birthdays · Baby Showers',
          description: 'Every milestone deserves a cake made with intention. Our pastry chef Sofia creates layered cakes that combine modern design with authentic Salvadoran flavors — tres leches, dulce de leche, strawberry cream, and more. From a simple birthday tier to a six-tier quinceañera centerpiece, we build it to match your vision.',
          details: [
            'Tiered cakes from 1 to 6 layers',
            'Flavors: tres leches, vanilla bean, dulce de leche, strawberry cream, chocolate fudge',
            'Custom fondant, buttercream, or naked finishes',
            'Matching dessert table items available (polvorosas, petit fours, mini pastelitos)',
            'Local delivery available in Prince William and Fairfax counties',
            'Minimum 72 hours notice · large orders require 2–3 weeks',
          ],
          cta: 'Request a Custom Cake',
        },
        {
          title: 'Catering & Event Trays',
          tagline: 'Office Events · School Functions · Community Gatherings',
          description: "Feed a crowd the right way. We build custom catering trays filled with assorted pan dulce, pastries, empanadas, and more — perfect for corporate breakfasts, school events, church gatherings, quinceañera receptions, and neighborhood parties. We've catered events across Northern Virginia for over a decade.",
          details: [
            'Minimum tray order: serves 12 guests',
            'Options: pan dulce assortment, savory pastelitos, empanada trays, dessert spreads',
            'Custom labeling and packaging available for corporate orders',
            'Pickup at our Manassas location or local delivery',
            'Advance notice required: at least 48 hours for standard trays, 1 week for large events',
            'Pricing based on tray size and item selection — call for a quote',
          ],
          cta: 'Get a Catering Quote',
        },
        {
          title: 'Custom Pan Dulce Orders',
          tagline: 'Reserved Pickup · Bulk Orders · Weekly Subscriptions',
          description: "Love our conchas but don't want to risk selling out? We take pre-orders for pickup so your favorites are always waiting when you arrive. Bulk orders for families, restaurants, and resellers are welcome — our items are baked fresh every morning and ready for pickup by 7am.",
          details: [
            'Reserve specific items the day before — call (703) 928-0838',
            'Bulk orders available (dozen pricing on most items)',
            'Weekly standing orders for restaurants and local resellers',
            'Items available: conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, semitas, polvorosas',
            'Pickup at 5443 Wellington Rd, Manassas, VA — available from open',
          ],
          cta: 'Place a Pickup Order',
        },
      ],
      trust: {
        items: [
          { value: '15+', label: 'Years in Manassas, VA', color: 'text-rose-blush' },
          { value: '200+', label: 'Five-star Google reviews', color: 'text-teal-sage' },
          { value: '30+', label: 'Fresh items baked daily', color: 'text-gold' },
          { value: '100%', label: 'Made from scratch', color: 'text-rose-blush' },
        ],
      },
      faq: {
        label: 'Before You Order',
        heading: 'Common Questions',
        items: [
          { q: 'How far in advance do I need to order a custom cake?', a: 'Most custom cakes require at least 72 hours notice. For weddings, quinceañeras, or large multi-tier cakes, we recommend 2–3 weeks in advance to ensure we can accommodate your design and schedule.' },
          { q: 'Do you offer delivery in Northern Virginia?', a: 'Yes — we offer local delivery within Prince William and Fairfax counties for custom orders and catering. Delivery is available for a flat fee based on distance. Contact us to confirm your area.' },
          { q: 'Can you accommodate dietary restrictions?', a: 'We can accommodate some dietary needs — please ask about dairy-free or egg-free options when you place your order. Our kitchen does use flour, eggs, and dairy in most products, so we cannot guarantee allergen-free baking.' },
          { q: 'What information do you need for a custom cake order?', a: "The more detail the better: event date, number of guests, flavor preferences, any design ideas or inspiration images, and your budget range. We follow up within one business day to finalize the design and confirm pricing." },
        ],
      },
      cta: {
        heading: 'Ready to place your order?',
        body: "Call us, send a message, or stop by the bakery. We'll take care of the rest.",
        sendMessage: 'Send Us a Message',
        phone: '(703) 928-0838',
      },
    },
    // Contact page (/contact)
    contactPage: {
      hero: {
        label: 'Get In Touch',
        heading: "Let's Connect",
        body: "Have a custom order? A question about our menu? Just want to say hi? We'd love to hear from you.",
      },
      info: {
        phone: { label: 'Phone', subtitle: 'Call or text anytime during hours' },
        email: { label: 'Email', subtitle: 'We reply within 24 hours' },
        location: { label: 'Location', directions: 'Get Directions →' },
        hours: {
          label: 'Hours',
          note: 'Freshest selection available first thing in the morning. Arriving after noon? Call ahead to reserve.',
          days: { weekdays: 'Monday – Friday', saturday: 'Saturday', sunday: 'Sunday' },
          times: { weekdays: '7:00 AM – 7:00 PM', saturday: '6:00 AM – 8:00 PM', sunday: '7:00 AM – 5:00 PM' },
        },
      },
      form: {
        heading: 'Send Us a Message',
        description: "For custom cake orders, catering requests, or general questions. We'll get back to you within one business day.",
      },
      quickCta: { pre: 'Need something faster?', heading: 'Just give us a call.' },
    },
    // Gallery page (/gallery)
    galleryPage: {
      hero: {
        label: 'Photo Gallery',
        heading: 'Made with Heart',
        body: 'A glimpse into what comes out of our kitchen every day. Follow us',
        followSuffix: 'for daily updates.',
      },
      items: [
        { label: 'Pan Dulce & Pastries', caption: 'A full spread of freshly baked pan dulce, pastries, and sweet breads' },
        { label: 'Fruit Tarts', caption: 'Custard tarts topped with fresh strawberries, kiwi, and blueberries' },
        { label: 'Bakery Display', caption: 'Our daily selection of flaky pastries, cakes, and breads' },
        { label: 'Fruit Tarts & Desserts', caption: 'Individual fruit tarts and cream desserts — made fresh daily' },
        { label: 'Conchas & Cookies', caption: 'Our signature conchas and butter cookies with colorful sprinkles' },
      ],
      cta: {
        heading: 'Follow Our Daily Bakes',
        body: 'We post fresh content every day — new pastries, seasonal specials, behind-the-scenes moments, and more.',
        followBtn: 'Follow on Instagram',
        orderBtn: 'Place a Custom Order',
      },
    },
    // Blog page (/blog)
    blogPage: {
      hero: {
        label: 'From Our Kitchen',
        heading: 'The Bakery Blog',
        body: 'Stories, guides, and a peek behind the counter — everything we love about bread, baking, and the Manassas community.',
      },
      readMore: 'Read more →',
      cta: {
        heading: 'Ready to taste it',
        headingEmphasis: 'for yourself?',
        body: 'Visit us at 5443 Wellington Rd, Manassas, VA — open daily. Fresh pan dulce and pastries baked every morning.',
        viewMenu: 'View Our Menu',
        placeOrder: 'Place an Order',
      },
    },
  },
  es: {
    // Nav
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      menu: 'Menú',
      services: 'Servicios',
      gallery: 'Galería',
      blog: 'Blog',
      contact: 'Contacto',
      orderNow: 'Ordenar',
      call: 'Llamar',
      address: '5443 Wellington Rd, Manassas, VA 20110',
    },
    // Hero
    hero: {
      label: 'Manassas, Virginia · Desde 2010',
      heading1: 'Pan Dulce Fresco',
      heading2: 'y Pasteles',
      heading3: 'Horneados a Diario',
      body: 'Pan dulce salvadoreño auténtico, pasteles artesanales y café rico — horneados frescos cada mañana con amor y tradición. Prueba la diferencia de recetas familiares transmitidas por generaciones.',
      viewMenu: 'Ver Menú',
      orderNow: 'Ordenar',
      rating: 'Calificación 4.9',
      ratingDesc: '+200 Reseñas en Google',
      familyOwned: 'Negocio Familiar',
      familyDesc: '+15 años en Manassas',
      bakedFresh: 'Horneado Fresco',
      bakedDesc: 'Cada mañana antes de las 7am',
      freshToday: 'Fresco Hoy',
      readyBy: 'Listo a las 7am',
    },
    // About
    about: {
      label: 'Nuestra Historia',
      heading1: 'Una Tradición Familiar,',
      heading2: 'Horneada con Amor',
      p1: 'La Panadería Lorena nació de un sueño sencillo: traer los sabores auténticos de El Salvador al corazón de Manassas, Virginia. Lo que comenzó con Lorena horneando conchas y semitas para los vecinos creció hasta convertirse en un querido punto de encuentro comunitario — pero las recetas, y el amor, siguen siendo exactamente los mismos.',
      p2: 'Cada mañana antes del amanecer, nuestra familia está en la cocina elaborando a mano cada pastel, enrollando cada empanada y preparando nuestra mezcla de café especial. Usamos técnicas salvadoreñas tradicionales transmitidas por tres generaciones — porque el pan dulce de verdad no puede apresurarse.',
      p3: 'Cuando cruces nuestras puertas, no eres solo un cliente — eres familia. Siéntate, deja que el aroma del pan fresco te envuelva y quédate un rato. Así sabe el hogar.',
      stat1: 'Años Horneando',
      stat2: 'Productos Frescos Diarios',
      stat3: 'Reseñas 5 Estrellas',
      stat4: 'Hecho Desde Cero',
      cta: 'Conoce la Familia',
      yearsCaption: 'Años sirviendo a nuestra comunidad',
    },
    // Menu Preview
    menu: {
      label: 'Fresco a Diario',
      heading1: 'Horneado con',
      heading2: 'Tradición',
      body: 'Cada producto de nuestro menú se elabora fresco a diario con recetas salvadoreñas auténticas. Ven temprano — los más populares se agotan rápido.',
      seeFullMenu: 'Ver Menú Completo',
      customOrders: 'Pedidos personalizados · Llama al',
      items: {
        conchas: {
          description: 'Nuestro pan dulce signature con cobertura de azúcar desmenuzable — disponible en vainilla, chocolate y fresa. Un clásico salvadoreño que debes probar.',
          tag: 'Favorito del Público',
        },
        pastelitos: {
          description: 'Empanadas hojaldradas rellenas de carne molida con papas o queso crema dulce. Horneadas doradas y servidas calientes — el preferido de todos.',
          tag: 'El Más Vendido',
        },
        quesadilla: {
          description: 'No es la tortilla mexicana — es un pastel esponjoso hecho con harina de arroz, parmesano y semillas de ajonjolí. Dulce, salado y completamente adictivo.',
          tag: 'Especialidad',
        },
        empanadas: {
          description: 'Masa frita crujiente rellena de natilla dulce de vainilla y cubierta con azúcar y canela. Un postre que desaparece más rápido de lo que lo hacemos.',
          tag: 'Antojo Dulce',
        },
        cafe: {
          description: 'Café de olla con canela y piloncillo. Rico, aromático y preparado al momento. El acompañamiento perfecto para tu pan dulce mañanero.',
          tag: 'Imprescindible',
        },
        cakes: {
          description: 'Déjanos hacer tu día especial inolvidable. Pasteles con pisos, pasteles de quinceañera, cumpleaños y más — todos diseñados y horneados a pedido.',
          tag: 'Pedido Especial',
        },
      },
    },
    // Gallery
    gallery: {
      label: 'Galería de Instagram',
      heading1: 'Hecho con',
      heading2: 'Amor',
      followText: 'Cada pieza cuenta una historia. Síguenos en',
      followSuffix: 'para ver lo que horneamos cada día.',
      viewFull: 'Ver Galería Completa',
    },
    // Location
    location: {
      label: 'Encuéntranos',
      heading1: 'Visítanos en',
      heading2: 'Nuestra Panadería',
      body: 'Estamos en el corazón de Manassas. Ven por el pan, quédate por el calor.',
      address: 'Dirección',
      getDirections: 'Cómo llegar →',
      hours: 'Horario',
      days: {
        weekdays: 'Lunes – Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
      },
      contact: 'Contacto',
      cantMakeIt: '¿No puedes venir? ¡Hacemos pedidos!',
      cantMakeItDesc: 'Llama con anticipación o usa nuestro formulario para pedidos personalizados y recogida.',
      callUs: 'Llama al (703) 928-0838',
    },
    // Footer
    footer: {
      tagline: 'Pan dulce salvadoreño auténtico, pasteles y café — horneados frescos a diario en Manassas, Virginia. Negocio familiar desde 2010.',
      navigation: 'Navegación',
      visitUs: 'Visítanos',
      hours: 'Horario',
      hoursValue: 'Lun – Vie: 7am – 7pm\nSáb: 6am – 8pm · Dom: 7am – 5pm',
      rights: 'Todos los derechos reservados.',
      websiteBy: 'Sitio web por',
    },
    // About page (/about)
    aboutPage: {
      hero: {
        label: 'Nuestra Historia',
        headingPre: 'Familia,',
        headingItalic: 'Tradición,',
        headingPost: 'y Pan Fresco',
        body: 'La Panadería Lorena se fundó en tres cosas: recetas de generaciones, un profundo amor por la comunidad de Manassas y la convicción de que el buen pan une a la gente.',
      },
      story: {
        labelPre: 'De San Salvador',
        labelItalic: 'a Manassas',
        p1: 'Todo comenzó en una pequeña cocina en San Salvador, donde la abuela Carmen de Lorena hacía conchas y quesadillas para el vecindario. Las recetas nunca se escribieron — vivían en las manos, en la memoria, en el amor.',
        p2: 'Cuando Lorena llegó a Virginia en 2005, no trajo más que una maleta y esos recuerdos. Durante años horneó para amigos, vecinos, para quien quisiera probar. La respuesta siempre fue la misma: "Deberías abrir una panadería."',
        p3: 'En 2010, con su esposo Miguel y la pequeña Sofia en brazos, Lorena hizo exactamente eso. Abrió un local en Wellington Road y desde entonces ha alimentado a la comunidad de Manassas.',
        p4: 'Hoy, las recetas siguen siendo las mismas. La cocina aún huele a canela y azúcar caliente. Y el espíritu de la abuela Carmen está en cada cosa que horneamos.',
        cta: 'Visítanos Hoy',
      },
      team: {
        label: 'La Familia',
        heading: 'Conoce a los Panaderos',
        members: [
          { name: 'Lorena', role: 'Fundadora y Panadera Principal', bio: 'Nacida y criada en El Salvador, Lorena aprendió a hornear junto a su abuela a los siete años. Después de mudarse a Virginia en 2005, llevó esas recetas en su corazón hasta poder compartirlas con la comunidad de Manassas.' },
          { name: 'Miguel', role: 'Copropietario y Director de Café', bio: 'Miguel selecciona y tuesta nuestras mezclas de café con el mismo cuidado que Lorena pone en su pan. Aficionado al café durante más de 20 años, garantiza que cada taza sea tan memorable como cada bocado.' },
          { name: 'Sofia', role: 'Pastelera', bio: 'La hija de Lorena y Miguel, Sofia, se formó en un instituto culinario de Washington D.C. antes de regresar a casa para unirse al negocio familiar. Aporta técnicas modernas a los sabores tradicionales.' },
        ],
      },
      values: {
        label: 'Lo Que Nos Importa',
        heading: 'Nuestros Valores',
        items: [
          { icon: '🤝', title: 'Comunidad Primero', description: 'Creemos que una panadería es más que un negocio — es un punto de encuentro. Organizamos eventos vecinales, apoyamos escuelas locales y donamos pan fresco a bancos de alimentos comunitarios cada semana.' },
          { icon: '🌿', title: 'Ingredientes Reales', description: 'Sin conservantes. Sin atajos. Cada ingrediente se elige con intención — trabajamos con proveedores locales siempre que es posible y usamos ingredientes salvadoreños tradicionales importados directamente.' },
          { icon: '❤️', title: 'Hecho con Amor', description: 'Todo se hace a mano. No usamos mezcladoras industriales ni mezclas preparadas. Desde darle forma a cada concha hasta enrollar cada pastelito, manos humanas tocan cada pieza de pan.' },
          { icon: '🎉', title: 'Celebrando la Vida', description: 'Pasteles de cumpleaños, pasteles de quinceañera, galletas de boda — nos honra ser parte de tus momentos más importantes. Los pedidos personalizados son nuestra especialidad.' },
        ],
      },
      cta: {
        heading: 'Ven a saludar.\nEl pan está caliente.',
        address: '5443 Wellington Rd, Manassas, VA · Abierto a diario · (703) 928-0838',
        orderNow: 'Ordenar',
        seeMenu: 'Ver Menú',
        customOrders: 'Pedidos y Catering',
      },
    },
    // Menu page (/menu)
    menuPage: {
      hero: {
        label: 'Fresco a Diario',
        heading: 'Nuestro Menú',
        body: 'Todo hecho desde cero, cada mañana. Ven temprano — a menudo nos agotamos antes del mediodía.',
        customOrdersNote: 'Para pedidos personalizados, llama al',
        advance: 'con al menos 72 horas de anticipación.',
      },
      cta: {
        label: 'Ocasiones Especiales',
        heading: 'Pedidos Personalizados Bienvenidos',
        body: 'Desde pasteles de quinceañera hasta pasteles de boda y bandejas para eventos corporativos — nos encanta crear algo especial solo para ti.',
        requestOrder: 'Solicitar un Pedido Personalizado',
        call: 'Llamar al (703) 928-0838',
      },
    },
    // Services page (/services)
    servicesPage: {
      hero: {
        label: 'Lo Que Ofrecemos',
        heading: 'Servicios de Panadería',
        body: 'Pasteles personalizados para los momentos más importantes de tu vida, bandejas de catering para cada reunión y pan dulce reservado para que tus favoritos siempre estén esperando. Todo hecho desde cero en Manassas, VA.',
        requestQuote: 'Solicitar Cotización',
        call: 'Llamar al (703) 928-0838',
      },
      services: [
        {
          title: 'Pasteles de Celebración',
          tagline: 'Quinceañeras · Bodas · Cumpleaños · Baby Showers',
          description: 'Cada hito merece un pastel hecho con intención. Nuestra pastelera Sofia crea pasteles en capas que combinan diseño moderno con sabores salvadoreños auténticos — tres leches, dulce de leche, crema de fresa y más. Desde un sencillo piso de cumpleaños hasta una pieza central de quinceañera de seis pisos, lo construimos según tu visión.',
          details: [
            'Pasteles en capas de 1 a 6 pisos',
            'Sabores: tres leches, vainilla, dulce de leche, crema de fresa, chocolate',
            'Acabados en fondant, buttercream o naked personalizados',
            'Artículos de mesa de postres combinados disponibles (polvorosas, petit fours, mini pastelitos)',
            'Entrega local disponible en los condados de Prince William y Fairfax',
            'Mínimo 72 horas de anticipación · pedidos grandes requieren 2-3 semanas',
          ],
          cta: 'Solicitar Pastel Personalizado',
        },
        {
          title: 'Catering y Bandejas para Eventos',
          tagline: 'Eventos Corporativos · Funciones Escolares · Reuniones Comunitarias',
          description: 'Alimenta a un grupo de la manera correcta. Preparamos bandejas de catering personalizadas llenas de pan dulce variado, pasteles, empanadas y más — perfectas para desayunos corporativos, eventos escolares, reuniones de iglesia, recepciones de quinceañera y fiestas de vecindario. Hemos atendido eventos en todo el Norte de Virginia por más de una década.',
          details: [
            'Pedido mínimo de bandeja: sirve a 12 personas',
            'Opciones: surtido de pan dulce, pastelitos salados, bandejas de empanadas, postres',
            'Etiquetado y empaquetado personalizado para pedidos corporativos',
            'Recogida en nuestra ubicación de Manassas o entrega local',
            'Anticipación requerida: mínimo 48 horas para bandejas estándar, 1 semana para eventos grandes',
            'Precio según tamaño de bandeja y selección — llama para cotización',
          ],
          cta: 'Solicitar Cotización de Catering',
        },
        {
          title: 'Pedidos Personalizados de Pan Dulce',
          tagline: 'Recogida Reservada · Pedidos al Por Mayor · Suscripciones Semanales',
          description: '¿Te encantan nuestras conchas pero no quieres arriesgarte a que se agoten? Aceptamos pedidos anticipados para recogida, así que tus favoritos siempre te esperarán cuando llegues. Los pedidos al por mayor para familias, restaurantes y revendedores son bienvenidos — nuestros productos se hornean frescos cada mañana y están listos para recoger a las 7am.',
          details: [
            'Reserva artículos específicos el día anterior — llama al (703) 928-0838',
            'Pedidos al por mayor disponibles (precios por docena en la mayoría de artículos)',
            'Pedidos fijos semanales para restaurantes y revendedores locales',
            'Artículos disponibles: conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, semitas, polvorosas',
            'Recogida en 5443 Wellington Rd, Manassas, VA — disponible desde la apertura',
          ],
          cta: 'Hacer un Pedido',
        },
      ],
      trust: {
        items: [
          { value: '15+', label: 'Años en Manassas, VA', color: 'text-rose-blush' },
          { value: '200+', label: 'Reseñas cinco estrellas en Google', color: 'text-teal-sage' },
          { value: '30+', label: 'Productos frescos horneados a diario', color: 'text-gold' },
          { value: '100%', label: 'Hecho desde cero', color: 'text-rose-blush' },
        ],
      },
      faq: {
        label: 'Antes de Ordenar',
        heading: 'Preguntas Frecuentes',
        items: [
          { q: '¿Con cuánta anticipación necesito pedir un pastel personalizado?', a: 'La mayoría de los pasteles personalizados requieren al menos 72 horas de anticipación. Para bodas, quinceañeras o pasteles grandes de varios pisos, recomendamos 2-3 semanas de antelación para garantizar que podamos adaptarnos a tu diseño y horario.' },
          { q: '¿Ofrecen entrega en el Norte de Virginia?', a: 'Sí — ofrecemos entrega local en los condados de Prince William y Fairfax para pedidos personalizados y catering. La entrega está disponible con una tarifa plana según la distancia. Contáctanos para confirmar tu área.' },
          { q: '¿Pueden adaptarse a restricciones dietéticas?', a: 'Podemos adaptarnos a algunas necesidades dietéticas — pregunta sobre opciones sin lácteos o sin huevo al hacer tu pedido. Nuestra cocina usa harina, huevos y lácteos en la mayoría de los productos, por lo que no podemos garantizar hornear sin alérgenos.' },
          { q: '¿Qué información necesitan para un pedido de pastel personalizado?', a: 'Cuantos más detalles, mejor: fecha del evento, número de personas, preferencias de sabor, ideas de diseño o imágenes de inspiración y tu presupuesto aproximado. Hacemos seguimiento en un día hábil para finalizar el diseño y confirmar precios.' },
        ],
      },
      cta: {
        heading: '¿Listo para hacer tu pedido?',
        body: 'Llámanos, envíanos un mensaje o pasa por la panadería. Nosotros nos encargamos del resto.',
        sendMessage: 'Envíanos un Mensaje',
        phone: '(703) 928-0838',
      },
    },
    // Contact page (/contact)
    contactPage: {
      hero: {
        label: 'Contáctanos',
        heading: 'Hablemos',
        body: '¿Tienes un pedido personalizado? ¿Una pregunta sobre nuestro menú? ¿Solo quieres saludar? Nos encantaría saber de ti.',
      },
      info: {
        phone: { label: 'Teléfono', subtitle: 'Llama o envía un mensaje durante el horario' },
        email: { label: 'Correo', subtitle: 'Respondemos en 24 horas' },
        location: { label: 'Ubicación', directions: 'Cómo llegar →' },
        hours: {
          label: 'Horario',
          note: 'La selección más fresca está disponible temprano en la mañana. ¿Llegas después del mediodía? Llama con anticipación para reservar.',
          days: { weekdays: 'Lunes – Viernes', saturday: 'Sábado', sunday: 'Domingo' },
          times: { weekdays: '7:00 AM – 7:00 PM', saturday: '6:00 AM – 8:00 PM', sunday: '7:00 AM – 5:00 PM' },
        },
      },
      form: {
        heading: 'Envíanos un Mensaje',
        description: 'Para pedidos de pasteles personalizados, solicitudes de catering o preguntas generales. Te responderemos en un día hábil.',
      },
      quickCta: { pre: '¿Necesitas algo más rápido?', heading: 'Solo danos una llamada.' },
    },
    // Gallery page (/gallery)
    galleryPage: {
      hero: {
        label: 'Galería de Fotos',
        heading: 'Hecho con Amor',
        body: 'Un vistazo a lo que sale de nuestra cocina cada día. Síguenos en',
        followSuffix: 'para actualizaciones diarias.',
      },
      items: [
        { label: 'Pan Dulce y Pasteles', caption: 'Una selección completa de pan dulce, pasteles y panes dulces recién horneados' },
        { label: 'Tartas de Frutas', caption: 'Tartas de crema con fresas frescas, kiwi y arándanos' },
        { label: 'Vitrina de la Panadería', caption: 'Nuestra selección diaria de pasteles hojaldrados, pasteles y panes' },
        { label: 'Tartas y Postres', caption: 'Tartas de frutas individuales y postres de crema — hechos frescos a diario' },
        { label: 'Conchas y Galletas', caption: 'Nuestras conchas características y galletas de mantequilla con confites de colores' },
      ],
      cta: {
        heading: 'Sigue Nuestros Horneados Diarios',
        body: 'Publicamos contenido fresco todos los días — nuevos pasteles, especiales de temporada, momentos detrás de cámara y más.',
        followBtn: 'Seguir en Instagram',
        orderBtn: 'Hacer un Pedido Personalizado',
      },
    },
    // Blog page (/blog)
    blogPage: {
      hero: {
        label: 'Desde Nuestra Cocina',
        heading: 'El Blog de la Panadería',
        body: 'Historias, guías y un vistazo detrás del mostrador — todo lo que amamos del pan, la repostería y la comunidad de Manassas.',
      },
      readMore: 'Leer más →',
      cta: {
        heading: '¿Listo para probarlo',
        headingEmphasis: 'por ti mismo?',
        body: 'Visítanos en 5443 Wellington Rd, Manassas, VA — abierto a diario. Pan dulce y pasteles frescos horneados cada mañana.',
        viewMenu: 'Ver Nuestro Menú',
        placeOrder: 'Hacer un Pedido',
      },
    },
  },
} as const;

export default t;
