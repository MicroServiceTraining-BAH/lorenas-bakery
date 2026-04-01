/**
 * Default data seeded into KV on first access.
 * Mirrors what was previously in /data/*.json.
 */
import type { BusinessData, GalleryData, HomeData, MenuData } from '@/types/cms';

export const DEFAULTS: Record<string, unknown> = {
  menu: {
    categories: [
      {
        id: 'pan-dulce',
        name: 'Pan Dulce & Sweet Bread',
        items: [
          { id: 'conchas', name: 'Conchas', description: 'Classic Mexican sweet bread with a crumbly sugar shell in vanilla, chocolate, or strawberry.', price: '$2.50', tag: 'Fan Favorite', emoji: '🍞', image: '' },
          { id: 'semitas', name: 'Semitas', description: 'Dense, sweet bread made with piloncillo and anise seeds. A traditional Salvadoran staple.', price: '$2.75', tag: '', emoji: '🥖', image: '' },
          { id: 'pan-de-yema', name: 'Pan de Yema', description: 'Egg-enriched sweet rolls with a golden crust, pillowy interior, and hint of orange zest.', price: '$2.50', tag: '', emoji: '🫓', image: '' },
          { id: 'cuernos', name: 'Cuernos', description: 'Horn-shaped pastry with a flaky exterior and sweet cream or chocolate filling.', price: '$3.00', tag: 'New', emoji: '🥐', image: '' },
        ],
      },
      {
        id: 'pastries',
        name: 'Savory & Sweet Pastries',
        items: [
          { id: 'pastelitos-carne', name: 'Pastelitos de Carne', description: 'Flaky hand pies filled with seasoned ground beef, potatoes, and spices. Baked golden.', price: '$3.00', tag: 'Bestseller', emoji: '🥙', image: '' },
          { id: 'pastelitos-queso', name: 'Pastelitos de Queso', description: 'Hand pies filled with cream cheese and jalapeño. Crispy exterior, melty center.', price: '$3.00', tag: '', emoji: '🫔', image: '' },
          { id: 'empanadas-leche', name: 'Empanadas de Leche', description: 'Fried dough filled with sweet vanilla custard and rolled in cinnamon sugar.', price: '$2.75', tag: 'Sweet', emoji: '🧁', image: '' },
          { id: 'empanadas-loroco', name: 'Empanadas de Loroco', description: 'Savory Salvadoran empanadas filled with loroco flower and cheese. Authentically ours.', price: '$3.50', tag: 'Signature', emoji: '🌿', image: '' },
        ],
      },
      {
        id: 'cakes',
        name: 'Cakes & Specialty Items',
        items: [
          { id: 'quesadilla', name: 'Quesadilla Salvadoreña', description: 'Rice flour cake with parmesan, sesame seeds, and sour cream. Sweet, savory, and spongy.', price: '$4.00', tag: 'Must Try', emoji: '🍰', image: '' },
          { id: 'tres-leches', name: 'Tres Leches Cake', description: 'Classic tres leches soaked in three milks with fresh whipped cream and cinnamon topping.', price: 'from $28 (6")', tag: '', emoji: '🎂', image: '' },
          { id: 'quinceanera-cakes', name: 'Quinceañera Cakes', description: 'Custom tiered cakes designed for your special day. Consult with Lorena for your vision.', price: 'Custom pricing', tag: 'Custom Order', emoji: '👑', image: '' },
          { id: 'birthday-cakes', name: 'Birthday Cakes', description: 'Fully custom cakes in your choice of flavor, filling, and decoration. Order 72hrs in advance.', price: 'from $45', tag: '', emoji: '🎉', image: '' },
        ],
      },
      {
        id: 'drinks',
        name: 'Coffee & Drinks',
        items: [
          { id: 'cafe-de-olla', name: 'Café de Olla', description: 'Traditional Mexican coffee brewed with cinnamon and piloncillo in a clay pot.', price: '$3.00', tag: 'Morning Must', emoji: '☕', image: '' },
          { id: 'horchata', name: 'Horchata de Morro', description: 'Authentic Salvadoran horchata made with morro seeds, cinnamon, and sesame. Refreshingly different.', price: '$4.00', tag: 'Signature', emoji: '🥛', image: '' },
          { id: 'atol-de-elote', name: 'Atol de Elote', description: 'Sweet corn drink made the traditional way — warm, thick, and utterly comforting.', price: '$3.50', tag: '', emoji: '🌽', image: '' },
          { id: 'licuados', name: 'Fresh Licuados', description: "Blended fresh fruit drinks with milk or water. Ask about today's seasonal fruits.", price: 'from $4.00', tag: '', emoji: '🍓', image: '' },
        ],
      },
    ],
  } satisfies MenuData,

  business: {
    phone: '(703) 928-0838',
    email: 'contact@lorenasbakery.com',
    address: '5443 Wellington Rd',
    city: 'Manassas',
    state: 'VA',
    zip: '20110',
    hours: {
      weekdays: '7:00 AM – 7:00 PM',
      saturday: '6:00 AM – 8:00 PM',
      sunday: '7:00 AM – 5:00 PM',
    },
  } satisfies BusinessData,

  home: {
    label: 'Manassas, Virginia · Since 2010',
    heading1: 'Fresh Pan Dulce',
    heading2: '& Pastries',
    heading3: 'Made Daily',
    body: 'Authentic Salvadoran sweet bread, handcrafted pastries, and rich coffee — baked fresh every morning with love and tradition.',
    heroImage: '',
  } satisfies HomeData,

  gallery: {
    images: [
      { id: 'bakery-full', src: '/bakery-full.jpg', alt: "Lorena's Bakery display case filled with fresh pan dulce, pastries, and baked goods", caption: 'Pan Dulce & Pastries' },
      { id: 'fruit-tarts-closeup', src: '/fruit-tarts-closeup.jpg', alt: 'Close-up of fresh fruit tarts', caption: 'Fruit Tarts' },
      { id: 'bakery-display', src: '/bakery-display.jpg', alt: 'Fresh bakery display', caption: 'Fresh Display' },
      { id: 'conchas-display', src: '/conchas-display.jpg', alt: 'Conchas and cookies on display', caption: 'Conchas & Cookies' },
      { id: 'fruit-tarts-case', src: '/fruit-tarts-case.jpg', alt: 'Fruit tarts and desserts in the display case', caption: 'Fruit Tarts & Desserts' },
    ],
  } satisfies GalleryData,

  users: { users: [] },
  sessions: { sessions: [] },
};
