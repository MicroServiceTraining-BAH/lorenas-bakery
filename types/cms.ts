export type Role = 'admin' | 'editor';

export type User = {
  id: string;
  username: string;
  passwordHash: string;
  salt: string;
  role: Role;
  name: string;
};

export type Session = {
  token: string;
  userId: string;
  expires: string;
};

export type PublicUser = {
  id: string;
  username: string;
  role: Role;
  name: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  emoji: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type MenuData = {
  categories: MenuCategory[];
};

export type BusinessData = {
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
};

export type HomeData = {
  label: string;
  heading1: string;
  heading2: string;
  heading3: string;
  body: string;
  heroImage: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type GalleryData = {
  images: GalleryImage[];
};
