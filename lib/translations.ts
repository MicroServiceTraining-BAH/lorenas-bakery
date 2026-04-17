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
      label: 'Manassas, Virginia · Since 2026',
      heading1: 'Fresh Pan Dulce',
      heading2: '& Pastries',
      heading3: 'Made Daily',
      body: 'Conchas, pastelitos, quesadilla salvadoreña, and café de olla — baked fresh every morning using the same recipes Lorena learned from her grandmother in El Salvador.',
      viewMenu: 'View Our Menu',
      orderNow: 'Order Now',
      rating: '4.9 Rating',
      ratingDesc: '200+ Google Reviews',
      familyOwned: 'Family Owned',
      familyDesc: 'Open in Manassas since 2026',
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
      p1: "Lorena started baking conchas out of her home kitchen in 2005, bringing them to neighbors and anyone who'd try one. Five years later, she opened the storefront on Wellington Road. The recipes haven't changed since.",
      p2: "We're in the kitchen before 5am every day. Each concha is shaped by hand. Each empanada is rolled and filled fresh. There are no shortcuts here.",
      p3: 'Come in, grab a coffee, and stay a bit. We know most of our regulars by name.',
      stat1: 'Years Baking',
      stat2: 'Fresh Items Daily',
      stat3: '5-Star Reviews',
      stat4: 'Made From Scratch',
      cta: 'Meet the Family',
      yearsCaption: 'Opened in Manassas',
    },
    // Menu Preview
    menu: {
      label: 'Fresh Daily',
      heading1: 'Baked with',
      heading2: 'Tradition',
      body: 'Everything is made from scratch every morning. We usually sell out of conchas and quesadilla by noon — come early.',
      seeFullMenu: 'See Full Menu',
      customOrders: 'Custom orders welcome · Call',
      items: {
        conchas: {
          description: 'Soft sweet bread with a crumbly sugar crust, available in vanilla, chocolate, and strawberry. Made from a recipe that has been in the family for three generations.',
          tag: 'Fan Favorite',
        },
        pastelitos: {
          description: 'Flaky hand pies baked until golden. Filled with seasoned ground beef and potatoes, or sweet cream cheese. Best eaten warm.',
          tag: 'Bestseller',
        },
        quesadilla: {
          description: 'Nothing like the Mexican version. Dense, slightly sweet pound cake made with rice flour, parmesan, and sour cream. One of our most requested items, especially on Saturday mornings.',
          tag: 'Signature',
        },
        empanadas: {
          description: 'Fried pastry filled with sweet vanilla custard and rolled in cinnamon sugar. They go fast — if you want them, get here early.',
          tag: 'Sweet Pick',
        },
        cafe: {
          description: 'Café de olla brewed with cinnamon and piloncillo. Strong, a little sweet. Good with anything on the menu.',
          tag: 'Morning Must',
        },
        cakes: {
          description: 'Custom cakes for birthdays, quinceañeras, weddings, and whatever else you are celebrating. Call us with the details and we handle the rest.',
          tag: 'Special Order',
        },
      },
    },
    // Gallery
    gallery: {
      label: 'Instagram Gallery',
      heading1: 'Made with',
      heading2: 'Heart',
      followText: 'Follow us',
      followSuffix: '@lorenasbakery.us for photos of what just came out of the oven.',
      viewFull: 'View Full Gallery',
    },
    // Location
    location: {
      label: 'Find Us',
      heading1: 'Come Visit',
      heading2: 'Our Bakery',
      body: '5443 Wellington Rd, Manassas. Park out front, come in.',
      address: 'Address',
      getDirections: 'Get Directions',
      hours: 'Hours',
      days: {
        weekdays: 'Monday – Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
      contact: 'Contact',
      cantMakeIt: "Can't make it in? We take orders.",
      cantMakeItDesc: 'Call ahead or use our contact form for custom orders and pickups.',
      callUs: 'Call (703) 928-0838',
    },
    // Footer
    footer: {
      tagline: 'Pan dulce, pastries, and coffee baked fresh daily in Manassas, VA. Open since 2026.',
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
        body: 'Lorena opened the Manassas location in 2026 with her husband Miguel. The recipes came from her grandmother in El Salvador.',
      },
      story: {
        labelPre: 'From San Salvador',
        labelItalic: 'to Manassas',
        p1: "It started with Lorena's grandmother Carmen, who baked conchas and quesadillas every morning in San Salvador. None of the recipes were written down. Lorena learned them by watching.",
        p2: "When Lorena moved to Virginia in 2005, she kept baking for friends, neighbors, anyone who wanted to try. Eventually enough people said she should open a shop that she actually did.",
        p3: 'In 2026, she and Miguel opened the Manassas location on Wellington Road.',
        p4: "The recipes haven't changed. Same conchas, same quesadilla, same coffee. Just more people who know about it now.",
        cta: 'Visit Us Today',
      },
      team: {
        label: 'The Family',
        heading: 'Meet the Bakers',
        members: [
          { name: 'Lorena', role: 'Founder & Head Baker', bio: 'Grew up baking with her grandmother in El Salvador starting at age seven. Moved to Virginia in 2005, opened the Manassas location in 2026. Still in the kitchen before 5am every day.' },
          { name: 'Miguel', role: 'Co-owner & Coffee', bio: "Handles the coffee and runs the floor. He has been serious about coffee for over 20 years — you'll know it from the first sip." },
          { name: 'Sofia', role: 'Pastry Chef', bio: 'Trained at a culinary school in DC, then came back to work with her parents. She handles most of the custom cake work and has a knack for making traditional Salvadoran pastries look stunning.' },
        ],
      },
      values: {
        label: 'What We Stand For',
        heading: 'Our Values',
        items: [
          { icon: '🤝', title: 'Community First', description: 'We host neighborhood events, support local schools, and donate fresh bread to food banks every week. This neighborhood showed up for us from day one — we try to show up back.' },
          { icon: '🌿', title: 'Real Ingredients', description: 'No preservatives, no pre-made mixes. We source traditional Salvadoran ingredients directly and work with local suppliers where we can. It shows in the taste.' },
          { icon: '❤️', title: 'Made by Hand', description: 'Everything is handmade. Every concha shaped, every pastelito rolled. No industrial equipment, no shortcuts.' },
          { icon: '🎉', title: 'Here for Your Moments', description: 'Birthday cakes, quinceañera pasteles, wedding cookies — we have made them all. Tell us what you need and we will figure it out.' },
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
        body: 'Quinceañera cakes, wedding pastries, corporate trays — call us with what you need.',
        requestOrder: 'Request a Custom Order',
        call: 'Call (703) 928-0838',
      },
    },
    // Services page (/services)
    servicesPage: {
      hero: {
        label: 'What We Offer',
        heading: 'Bakery Services',
        body: 'Custom cakes, catering trays, and reserved pickup orders. All made from scratch out of our Manassas kitchen.',
        requestQuote: 'Request a Quote',
        call: 'Call (703) 928-0838',
      },
      services: [
        {
          title: 'Custom Celebration Cakes',
          tagline: 'Quinceañeras · Weddings · Birthdays · Baby Showers',
          description: 'Sofia handles all custom cake work — layered cakes from one tier to six, in any combination of tres leches, dulce de leche, strawberry cream, and chocolate. Tell us the event, the size, and the look you are going for. We take it from there.',
          details: [
            'Tiered cakes from 1 to 6 layers',
            'Flavors: tres leches, vanilla bean, dulce de leche, strawberry cream, chocolate fudge',
            'Custom fondant, buttercream, or naked finishes',
            'Matching dessert table items available (polvorosas, petit fours, mini pastelitos)',
            'Local delivery available in Prince William and Fairfax counties',
            'Minimum 72 hours notice · large orders require 2 to 3 weeks',
          ],
          cta: 'Request a Custom Cake',
        },
        {
          title: 'Catering & Event Trays',
          tagline: 'Office Events · School Functions · Community Gatherings',
          description: "We put together custom trays for corporate breakfasts, school events, church gatherings, quinceañera receptions, and neighborhood parties. Pan dulce assortments, pastelito trays, empanada spreads — whatever you need. We have been catering events across Northern Virginia for over a decade.",
          details: [
            'Minimum tray order: serves 12 guests',
            'Options: pan dulce assortment, savory pastelitos, empanada trays, dessert spreads',
            'Custom labeling and packaging available for corporate orders',
            'Pickup at our Manassas location or local delivery',
            'Advance notice: at least 48 hours for standard trays, 1 week for large events',
            'Pricing based on tray size and item selection — call for a quote',
          ],
          cta: 'Get a Catering Quote',
        },
        {
          title: 'Custom Pan Dulce Orders',
          tagline: 'Reserved Pickup · Bulk Orders · Weekly Standing Orders',
          description: "If you do not want to risk showing up and finding us sold out, call the day before and we will set your order aside. Everything is baked fresh and ready by 7am. Bulk orders for families, restaurants, and resellers are welcome.",
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
          { value: '2026', label: 'Manassas, VA', color: 'text-rose-blush' },
          { value: '200+', label: 'Five-star Google reviews', color: 'text-teal-sage' },
          { value: '30+', label: 'Fresh items baked daily', color: 'text-gold' },
          { value: '100%', label: 'Made from scratch', color: 'text-rose-blush' },
        ],
      },
      faq: {
        label: 'Before You Order',
        heading: 'Common Questions',
        items: [
          { q: 'How far in advance do I need to order a custom cake?', a: 'Most custom cakes need at least 72 hours notice. For weddings, quinceañeras, or large multi-tier cakes, 2 to 3 weeks is better so we can work out the design and fit it into the schedule.' },
          { q: 'Do you deliver in Northern Virginia?', a: 'Yes. We deliver within Prince William and Fairfax counties for custom orders and catering. There is a flat delivery fee based on distance. Contact us to confirm your area.' },
          { q: 'Can you accommodate dietary restrictions?', a: 'We can work with some dietary needs — ask about dairy-free or egg-free options when you order. Our kitchen uses flour, eggs, and dairy in most products, so we cannot guarantee allergen-free baking.' },
          { q: 'What do you need to place a custom cake order?', a: 'Event date, number of guests, flavor preferences, any design ideas or photos, and a rough budget. We follow up within one business day to confirm the design and pricing.' },
        ],
      },
      cta: {
        heading: 'Ready to place your order?',
        body: 'Call us, send a message, or stop by.',
        sendMessage: 'Send Us a Message',
        phone: '(703) 928-0838',
      },
    },
    // Contact page (/contact)
    contactPage: {
      hero: {
        label: 'Get In Touch',
        heading: "Let's Talk",
        body: 'For orders, questions about the menu, or anything else — reach out. We get back to most messages within a day.',
      },
      info: {
        phone: { label: 'Phone', subtitle: 'Call or text during business hours' },
        email: { label: 'Email', subtitle: 'We reply within 24 hours' },
        location: { label: 'Location', directions: 'Get Directions' },
        hours: {
          label: 'Hours',
          note: 'Best selection is in the morning. If you are coming after noon, call ahead to make sure we still have what you want.',
          days: { weekdays: 'Monday – Friday', saturday: 'Saturday', sunday: 'Sunday' },
          times: { weekdays: '7:00 AM – 7:00 PM', saturday: '6:00 AM – 8:00 PM', sunday: '7:00 AM – 5:00 PM' },
        },
      },
      form: {
        heading: 'Send Us a Message',
        description: 'For cake orders, catering, or general questions. We usually respond within one business day.',
      },
      quickCta: { pre: 'Need something faster?', heading: 'Just give us a call.' },
    },
    // Gallery page (/gallery)
    galleryPage: {
      hero: {
        label: 'Photo Gallery',
        heading: 'Made with Heart',
        body: 'Photos of what we make each morning. Follow us',
        followSuffix: 'to see what is fresh.',
      },
      items: [
        { label: 'Pan Dulce & Pastries', caption: 'A full spread of freshly baked pan dulce, pastries, and sweet breads' },
        { label: 'Fruit Tarts', caption: 'Custard tarts topped with fresh strawberries, kiwi, and blueberries' },
        { label: 'Bakery Display', caption: 'Our daily selection of flaky pastries, cakes, and breads' },
        { label: 'Fruit Tarts & Desserts', caption: 'Individual fruit tarts and cream desserts, made fresh daily' },
        { label: 'Conchas & Cookies', caption: 'Our conchas and butter cookies with colorful sprinkles' },
      ],
      cta: {
        heading: 'Follow Our Daily Bakes',
        body: 'We post daily — new items, seasonal things, and whatever looks good that morning.',
        followBtn: 'Follow on Instagram',
        orderBtn: 'Place a Custom Order',
      },
    },
    // Blog page (/blog)
    blogPage: {
      hero: {
        label: 'From Our Kitchen',
        heading: 'The Bakery Blog',
        body: 'A few posts about how we bake, what is on the menu, and what is going on at the bakery.',
      },
      readMore: 'Read more',
      cta: {
        heading: 'Come try it',
        headingEmphasis: 'for yourself.',
        body: 'Open daily at 5443 Wellington Rd, Manassas, VA. Pan dulce ready by 7am.',
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
      label: 'Manassas, Virginia · Desde 2026',
      heading1: 'Pan Dulce Fresco',
      heading2: 'y Pasteles',
      heading3: 'Horneados a Diario',
      body: 'Conchas, pastelitos, quesadilla salvadoreña y café de olla — horneados cada mañana con las mismas recetas que Lorena aprendió de su abuela en El Salvador.',
      viewMenu: 'Ver Menú',
      orderNow: 'Ordenar',
      rating: 'Calificación 4.9',
      ratingDesc: '+200 Reseñas en Google',
      familyOwned: 'Negocio Familiar',
      familyDesc: 'Abiertos en Manassas desde 2026',
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
      p1: 'Lorena empezó horneando conchas en su cocina en 2005, repartiéndolas entre vecinos y quien quisiera probar. Cinco años después abrió el local en Wellington Road. Las recetas no han cambiado.',
      p2: 'Estamos en la cocina antes de las 5am todos los días. Cada concha se forma a mano. Cada empanada se rellena fresca. Aquí no hay atajos.',
      p3: 'Entra, tómate un café y quédate un rato. A la mayoría de nuestros clientes habituales los conocemos por nombre.',
      stat1: 'Años Horneando',
      stat2: 'Productos Frescos Diarios',
      stat3: 'Reseñas 5 Estrellas',
      stat4: 'Hecho Desde Cero',
      cta: 'Conoce la Familia',
      yearsCaption: 'Apertura en Manassas',
    },
    // Menu Preview
    menu: {
      label: 'Fresco a Diario',
      heading1: 'Horneado con',
      heading2: 'Tradición',
      body: 'Todo se hace desde cero cada mañana. Las conchas y la quesadilla suelen agotarse antes del mediodía — ven temprano.',
      seeFullMenu: 'Ver Menú Completo',
      customOrders: 'Pedidos personalizados · Llama al',
      items: {
        conchas: {
          description: 'Pan dulce suave con cobertura de azúcar desmenuzable, disponible en vainilla, chocolate y fresa. Una receta que ha estado en la familia por tres generaciones.',
          tag: 'Favorito del Público',
        },
        pastelitos: {
          description: 'Empanadas hojaldradas horneadas hasta dorar. Rellenas de carne molida con papas o queso crema dulce. Mejor comerlas calientes.',
          tag: 'El Más Vendido',
        },
        quesadilla: {
          description: 'Nada que ver con la versión mexicana. Pastel denso y ligeramente dulce hecho con harina de arroz, parmesano y crema. Uno de los más pedidos, especialmente los sábados.',
          tag: 'Especialidad',
        },
        empanadas: {
          description: 'Masa frita rellena de natilla de vainilla y cubierta con azúcar y canela. Se acaban rápido — si las quieres, llega temprano.',
          tag: 'Antojo Dulce',
        },
        cafe: {
          description: 'Café de olla con canela y piloncillo. Fuerte, un poco dulce. Bueno con cualquier cosa del menú.',
          tag: 'Imprescindible',
        },
        cakes: {
          description: 'Pasteles personalizados para cumpleaños, quinceañeras, bodas y lo que sea que estés celebrando. Llámanos con los detalles y nosotros nos encargamos.',
          tag: 'Pedido Especial',
        },
      },
    },
    // Gallery
    gallery: {
      label: 'Galería de Instagram',
      heading1: 'Hecho con',
      heading2: 'Amor',
      followText: 'Síguenos en',
      followSuffix: '@lorenasbakery.us para ver lo que acaba de salir del horno.',
      viewFull: 'Ver Galería Completa',
    },
    // Location
    location: {
      label: 'Encuéntranos',
      heading1: 'Visítanos en',
      heading2: 'Nuestra Panadería',
      body: '5443 Wellington Rd, Manassas. Estaciona enfrente y entra.',
      address: 'Dirección',
      getDirections: 'Cómo llegar',
      hours: 'Horario',
      days: {
        weekdays: 'Lunes – Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
      },
      contact: 'Contacto',
      cantMakeIt: '¿No puedes venir? Hacemos pedidos.',
      cantMakeItDesc: 'Llama con anticipación o usa nuestro formulario para pedidos y recogidas.',
      callUs: 'Llama al (703) 928-0838',
    },
    // Footer
    footer: {
      tagline: 'Pan dulce, pasteles y café horneados frescos a diario en Manassas, VA. Abiertos desde 2026.',
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
        body: 'Lorena abrió el local de Manassas en 2026 con su esposo Miguel. Las recetas vienen de su abuela en El Salvador.',
      },
      story: {
        labelPre: 'De San Salvador',
        labelItalic: 'a Manassas',
        p1: 'Todo empieza con la abuela Carmen, que horneaba conchas y quesadillas cada mañana en San Salvador. Ninguna receta estaba escrita. Lorena las aprendió mirando.',
        p2: 'Cuando Lorena llegó a Virginia en 2005, siguió horneando para amigos, vecinos y quien quisiera probar. Con el tiempo, suficiente gente le dijo que abriera una tienda como para que lo hiciera.',
        p3: 'En 2026, ella y Miguel abrieron el local de Manassas en Wellington Road.',
        p4: 'Las recetas no han cambiado. Mismas conchas, misma quesadilla, mismo café. Solo más gente que lo sabe ahora.',
        cta: 'Visítanos Hoy',
      },
      team: {
        label: 'La Familia',
        heading: 'Conoce a los Panaderos',
        members: [
          { name: 'Lorena', role: 'Fundadora y Panadera Principal', bio: 'Creció horneando con su abuela en El Salvador desde los siete años. Se mudó a Virginia en 2005 y abrió el local de Manassas en 2026. Sigue en la cocina antes de las 5am todos los días.' },
          { name: 'Miguel', role: 'Copropietario y Café', bio: 'Se encarga del café y del salón. Lleva más de 20 años tomando el café en serio — se nota desde el primer sorbo.' },
          { name: 'Sofia', role: 'Pastelera', bio: 'Se formó en una escuela culinaria en DC y regresó a trabajar con sus padres. Maneja la mayoría de los pedidos de pasteles y tiene un don para hacer que los dulces salvadoreños tradicionales se vean impresionantes.' },
        ],
      },
      values: {
        label: 'Lo Que Nos Importa',
        heading: 'Nuestros Valores',
        items: [
          { icon: '🤝', title: 'Comunidad Primero', description: 'Organizamos eventos vecinales, apoyamos escuelas locales y donamos pan fresco a bancos de alimentos cada semana. Este vecindario estuvo con nosotros desde el primer día.' },
          { icon: '🌿', title: 'Ingredientes Reales', description: 'Sin conservantes, sin mezclas preparadas. Usamos ingredientes salvadoreños tradicionales importados directamente y trabajamos con proveedores locales cuando podemos.' },
          { icon: '❤️', title: 'Hecho a Mano', description: 'Todo es artesanal. Cada concha formada, cada pastelito enrollado. Sin maquinaria industrial, sin atajos.' },
          { icon: '🎉', title: 'Para Tus Momentos', description: 'Pasteles de cumpleaños, pasteles de quinceañera, galletas de boda — los hemos hecho todos. Dinos qué necesitas y lo resolvemos.' },
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
        body: 'Pasteles de quinceañera, pasteles de boda, bandejas para eventos — llámanos con lo que necesitas.',
        requestOrder: 'Solicitar un Pedido Personalizado',
        call: 'Llamar al (703) 928-0838',
      },
    },
    // Services page (/services)
    servicesPage: {
      hero: {
        label: 'Lo Que Ofrecemos',
        heading: 'Servicios de Panadería',
        body: 'Pasteles personalizados, bandejas de catering y pedidos con recogida reservada. Todo hecho desde cero en nuestra cocina de Manassas.',
        requestQuote: 'Solicitar Cotización',
        call: 'Llamar al (703) 928-0838',
      },
      services: [
        {
          title: 'Pasteles de Celebración',
          tagline: 'Quinceañeras · Bodas · Cumpleaños · Baby Showers',
          description: 'Sofia se encarga de todos los pasteles personalizados — de uno a seis pisos, en cualquier combinación de tres leches, dulce de leche, crema de fresa y chocolate. Cuéntanos el evento, el tamaño y el estilo que buscas. Nosotros nos encargamos del resto.',
          details: [
            'Pasteles de 1 a 6 pisos',
            'Sabores: tres leches, vainilla, dulce de leche, crema de fresa, chocolate',
            'Acabados en fondant, buttercream o naked',
            'Artículos de mesa de postres disponibles (polvorosas, petit fours, mini pastelitos)',
            'Entrega local en los condados de Prince William y Fairfax',
            'Mínimo 72 horas de anticipación · pedidos grandes requieren 2 a 3 semanas',
          ],
          cta: 'Solicitar Pastel Personalizado',
        },
        {
          title: 'Catering y Bandejas para Eventos',
          tagline: 'Eventos Corporativos · Funciones Escolares · Reuniones Comunitarias',
          description: 'Preparamos bandejas para desayunos corporativos, eventos escolares, reuniones de iglesia, recepciones de quinceañera y fiestas de barrio. Surtidos de pan dulce, bandeja de pastelitos, empanadas — lo que necesites. Llevamos más de una década haciendo esto en todo el Norte de Virginia.',
          details: [
            'Pedido mínimo: sirve a 12 personas',
            'Opciones: surtido de pan dulce, pastelitos salados, bandejas de empanadas, postres',
            'Etiquetado y empaquetado personalizado para pedidos corporativos',
            'Recogida en Manassas o entrega local',
            'Anticipación: mínimo 48 horas para bandejas estándar, 1 semana para eventos grandes',
            'Precio según tamaño y selección — llama para cotizar',
          ],
          cta: 'Solicitar Cotización de Catering',
        },
        {
          title: 'Pedidos Personalizados de Pan Dulce',
          tagline: 'Recogida Reservada · Pedidos al Por Mayor · Pedidos Fijos Semanales',
          description: 'Si no quieres arriesgarte a llegar y encontrarnos agotados, llama el día anterior y apartamos tu pedido. Todo se hornea fresco y está listo a las 7am. Pedidos al por mayor para familias, restaurantes y revendedores son bienvenidos.',
          details: [
            'Reserva artículos el día anterior — llama al (703) 928-0838',
            'Pedidos al por mayor disponibles (precios por docena en la mayoría de artículos)',
            'Pedidos fijos semanales para restaurantes y revendedores locales',
            'Artículos: conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, semitas, polvorosas',
            'Recogida en 5443 Wellington Rd, Manassas, VA — desde la apertura',
          ],
          cta: 'Hacer un Pedido',
        },
      ],
      trust: {
        items: [
          { value: '2026', label: 'Manassas, VA', color: 'text-rose-blush' },
          { value: '200+', label: 'Reseñas cinco estrellas en Google', color: 'text-teal-sage' },
          { value: '30+', label: 'Productos frescos horneados a diario', color: 'text-gold' },
          { value: '100%', label: 'Hecho desde cero', color: 'text-rose-blush' },
        ],
      },
      faq: {
        label: 'Antes de Ordenar',
        heading: 'Preguntas Frecuentes',
        items: [
          { q: '¿Con cuánta anticipación necesito pedir un pastel personalizado?', a: 'La mayoría necesita al menos 72 horas. Para bodas, quinceañeras o pasteles grandes de varios pisos, 2 a 3 semanas es mejor para cuadrar el diseño y el horario.' },
          { q: '¿Ofrecen entrega en el Norte de Virginia?', a: 'Sí. Entregamos en los condados de Prince William y Fairfax para pedidos personalizados y catering. Hay una tarifa fija según la distancia. Contáctanos para confirmar tu zona.' },
          { q: '¿Pueden adaptarse a restricciones dietéticas?', a: 'Podemos trabajar con algunas necesidades — pregunta por opciones sin lácteos o sin huevo al ordenar. Nuestra cocina usa harina, huevos y lácteos en la mayoría de los productos, así que no podemos garantizar cocina libre de alérgenos.' },
          { q: '¿Qué información necesitan para un pastel personalizado?', a: 'Fecha del evento, número de personas, sabores, ideas de diseño o fotos de referencia y presupuesto aproximado. Te respondemos en un día hábil para confirmar diseño y precio.' },
        ],
      },
      cta: {
        heading: '¿Listo para hacer tu pedido?',
        body: 'Llámanos, mándanos un mensaje o pasa por la panadería.',
        sendMessage: 'Envíanos un Mensaje',
        phone: '(703) 928-0838',
      },
    },
    // Contact page (/contact)
    contactPage: {
      hero: {
        label: 'Contáctanos',
        heading: 'Hablemos',
        body: 'Para pedidos, preguntas sobre el menú o cualquier otra cosa — escríbenos. Respondemos la mayoría de los mensajes en un día.',
      },
      info: {
        phone: { label: 'Teléfono', subtitle: 'Llama durante el horario de atención' },
        email: { label: 'Correo', subtitle: 'Respondemos en 24 horas' },
        location: { label: 'Ubicación', directions: 'Cómo llegar' },
        hours: {
          label: 'Horario',
          note: 'La mejor selección es por la mañana. Si llegas después del mediodía, llama antes para asegurarte de que tengamos lo que buscas.',
          days: { weekdays: 'Lunes – Viernes', saturday: 'Sábado', sunday: 'Domingo' },
          times: { weekdays: '7:00 AM – 7:00 PM', saturday: '6:00 AM – 8:00 PM', sunday: '7:00 AM – 5:00 PM' },
        },
      },
      form: {
        heading: 'Envíanos un Mensaje',
        description: 'Para pedidos de pasteles, catering o preguntas generales. Respondemos en un día hábil.',
      },
      quickCta: { pre: '¿Necesitas algo más rápido?', heading: 'Solo danos una llamada.' },
    },
    // Gallery page (/gallery)
    galleryPage: {
      hero: {
        label: 'Galería de Fotos',
        heading: 'Hecho con Amor',
        body: 'Fotos de lo que hacemos cada mañana. Síguenos en',
        followSuffix: 'para ver lo que hay fresco.',
      },
      items: [
        { label: 'Pan Dulce y Pasteles', caption: 'Una selección completa de pan dulce y pasteles recién horneados' },
        { label: 'Tartas de Frutas', caption: 'Tartas de crema con fresas frescas, kiwi y arándanos' },
        { label: 'Vitrina de la Panadería', caption: 'Nuestra selección diaria de pasteles hojaldrados, pasteles y panes' },
        { label: 'Tartas y Postres', caption: 'Tartas de frutas individuales y postres de crema, hechos frescos a diario' },
        { label: 'Conchas y Galletas', caption: 'Nuestras conchas y galletas de mantequilla con confites de colores' },
      ],
      cta: {
        heading: 'Sigue Nuestros Horneados Diarios',
        body: 'Publicamos todos los días — lo que hay nuevo, las cosas de temporada y lo que quedó bonito esa mañana.',
        followBtn: 'Seguir en Instagram',
        orderBtn: 'Hacer un Pedido Personalizado',
      },
    },
    // Blog page (/blog)
    blogPage: {
      hero: {
        label: 'Desde Nuestra Cocina',
        heading: 'El Blog de la Panadería',
        body: 'Algunas publicaciones sobre cómo horneamos, qué hay en el menú y lo que pasa en la panadería.',
      },
      readMore: 'Leer más',
      cta: {
        heading: 'Ven a probarlo',
        headingEmphasis: 'por ti mismo.',
        body: 'Abierto a diario en 5443 Wellington Rd, Manassas, VA. Pan dulce listo a las 7am.',
        viewMenu: 'Ver Nuestro Menú',
        placeOrder: 'Hacer un Pedido',
      },
    },
  },
} as const;

export default t;
