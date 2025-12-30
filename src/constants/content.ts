import { NavItem, Collection, JournalPost, ContactInfo, SocialLink } from '@/types';

/**
 * Navigation items
 */
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Prints', href: '/prints' },
  { label: 'Journal', href: '/journal' },
  { label: 'Collections', href: '/collections' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Gear', href: '/gear' },
  { label: 'About', href: '/about' },
];

/**
 * Hero section content
 */
export const heroContent = {
  greeting: "Hello, I'm Bryan Minear",
  role: 'Fujifilm Ambassador, Creative Director & Graphic Designer',
  location: 'Michigan, USA',
  buttons: [
    { label: 'View Portfolio', href: '/portfolio', variant: 'primary' as const },
    { label: 'View Collections', href: '/collections', variant: 'secondary' as const },
  ],
};

/**
 * Collections data
 */
export const collections: Collection[] = [
  {
    id: 'seasonal',
    title: 'Seasonal Collection',
    description: 'Seasonal is an exploration of the midwestern landscape told through 40 unique images photographed over the course of 7 years.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=1200&fit=crop',
    stats: {
      year: '2023',
      photos: 40,
      collectors: 32,
      volume: '12.5',
    },
    links: {
      viewCollection: '/seasonal',
      marketplace: 'https://opensea.io/collection/seasonal',
    },
  },
  {
    id: 'legacy',
    title: 'Legacy Art Collection',
    description: 'The Legacy Art Collection is the home of all minted 1/1 photography from Bryan Minear.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&h=1200&fit=crop',
    stats: {
      photos: 25,
      collectors: 18,
      volume: '8.3',
    },
    links: {
      viewCollection: '/legacy',
      marketplace: 'https://superrare.com/bryanminear',
    },
  },
];

/**
 * Journal posts data
 */
export const journalPosts: JournalPost[] = [
  {
    id: '1',
    title: 'Traveler: A Personal Project About Fatherhood, Legacy, and Breaking Generational Cycles – Shot on the GFX100SII and GF500mmF5.6',
    excerpt: 'This is a real special one for me to finally write about. Outside of getting to use a brand new camera and lens in the Fujifilm GFX100SII and GF500mmF5.6, I finally got to create the most meaningful project of my career… alongside and with the help of my oldest son.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1280&h=800&fit=crop',
    link: '/journal/traveler',
    date: '2024-12-15',
  },
  {
    id: '2',
    title: '10 Free Lightroom & Adobe Camera RAW Presets',
    excerpt: 'As I lead up to launching some new preset packs for sale on this site, I wanted to offer some of my favorite presets as',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1280&h=800&fit=crop',
    link: '/journal/free-presets',
    date: '2024-12-10',
  },
  {
    id: '3',
    title: 'Down and dirty in the desert with the Fujifilm X-H2s & XF150-600mm lens',
    excerpt: "The X-H2s is a videographer's dream camera, and the lens is a MUST-BUY if you like shooting long, let's dive in! This camera has been",
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1280&h=800&fit=crop',
    link: '/journal/xh2s',
    date: '2024-12-05',
  },
];

/**
 * Contact information
 */
export const contactInfo: ContactInfo = {
  email: 'create@bryanminear.com',
  location: 'Michigan, US',
};

/**
 * Social links
 */
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/bryanminear', icon: 'instagram' },
  { platform: 'Twitter', url: 'https://twitter.com/bryanminear', icon: 'twitter' },
  { platform: 'YouTube', url: 'https://youtube.com/@bryanminear', icon: 'youtube' },
];

/**
 * Copyright text
 */
export const copyrightText = '© 2024. Copyright Antimatter Media, LLC.';
