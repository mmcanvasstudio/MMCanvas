import { NavItem, Collection, JournalPost, ContactInfo, SocialLink } from '@/types';

/**
 * Navigation items
 */
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Menu', href: '/menu' },
  { label: 'Collections', href: '/collections' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Hero section content
 */
export const heroContent = {
  greeting: 'We are MMCanvas',
  role: 'Professional Food Photography & Creative Studio',
  location: 'Capturing Delicious Moments',
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
    id: 'beverages',
    title: 'Beverages Collection',
    description: 'A stunning collection of refreshing beverages and milkshakes, capturing the essence of taste and presentation through 8 unique shots.',
    image: '/images/Photography/Chocolate_Milkshake.jpg',
    stats: {
      year: '2024',
      photos: 8,
      collectors: 25,
      volume: '15.2',
    },
    links: {
      viewCollection: '/beverages',
      marketplace: '',
    },
  },
  {
    id: 'desserts',
    title: 'Desserts & Ice Cream',
    description: 'The premium collection showcasing artisanal ice cream scoops and sweet treats, highlighting texture, color, and mouth-watering appeal.',
    image: '/images/Photography/Strawberry_Scoop.jpg',
    stats: {
      photos: 10,
      collectors: 18,
      volume: '12.8',
    },
    links: {
      viewCollection: '/desserts',
      marketplace: '',
    },
  },
];

/**
 * Journal posts data
 */
export const journalPosts: JournalPost[] = [
  {
    id: '1',
    title: 'Crafting the Perfect Milkshake Shot: Behind the Scenes',
    excerpt: 'Discover the techniques and lighting setup we used to capture the creamy texture and vibrant colors of our signature milkshakes. From props to post-processing, every detail matters.',
    image: '/images/Photography/Coffee_Milkshake.jpg',
    link: '/journal/milkshake-photography',
    date: '2024-12-28',
  },
  {
    id: '2',
    title: 'Ice Cream Photography: Tips for Capturing Frozen Perfection',
    excerpt: 'Working with ice cream presents unique challenges. Learn our secrets for keeping subjects fresh while achieving that perfect melting moment in every shot.',
    image: '/images/Photography/Chocolate_Scoop.jpg',
    link: '/journal/ice-cream-tips',
    date: '2024-12-20',
  },
  {
    id: '3',
    title: 'Food Styling Essentials: Creating Visual Appeal',
    excerpt: 'From color theory to composition, explore the fundamental principles of food styling that make our photographs stand out. Essential knowledge for every food photographer.',
    image: '/images/Photography/Masala_FrenchFires.jpg',
    link: '/journal/food-styling',
    date: '2024-12-15',
  },
];

/**
 * Contact information
 */
export const contactInfo: ContactInfo = {
  email: 'hello@mmcanvas.com',
  location: 'Hyderabad, India',
};

/**
 * Social links
 */
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/mmcanvas', icon: 'instagram' },
  { platform: 'Twitter', url: 'https://twitter.com/mmcanvas', icon: 'twitter' },
  { platform: 'YouTube', url: 'https://youtube.com/@mmcanvas', icon: 'youtube' },
];

/**
 * Copyright text
 */
export const copyrightText = '© 2024. Copyright MMCanvas Studio. All Rights Reserved.';
