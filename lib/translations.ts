export type Lang = 'en' | 'es';

const t = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      gallery: 'Gallery',
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
  },
  es: {
    // Nav
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      menu: 'Menú',
      gallery: 'Galería',
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
  },
} as const;

export default t;
