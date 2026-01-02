import { NavItem, Collection, JournalPost, ContactInfo, SocialLink } from '@/types';

/**
 * Navigation items
 */
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
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
  role: 'Professional Product Photography & Creative Studio',
  location: 'Capturing Products with Precision & Style',
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
    id: 'tech-products',
    title: 'Tech & Electronics Collection',
    description: 'Professional product photography showcasing cutting-edge technology and electronics with precision lighting and clean compositions.',
    image: '/images/products/EdgeController_ExpandView.webp',
    stats: {
      year: '2024',
      photos: 12,
      collectors: 89,
      volume: '15.2',
    },
    links: {
      viewCollection: '/collections/tech-products',
      marketplace: 'https://opensea.io/collection/tech-products',
    },
  },
  {
    id: 'beauty-products',
    title: 'Beauty & Cosmetics Collection',
    description: 'Elegant beauty product photography featuring cosmetics, nail polish, and skincare with stunning detail and luxurious presentation.',
    image: '/images/products/NailPolish_1.webp',
    stats: {
      year: '2024',
      photos: 15,
      collectors: 142,
      volume: '22.7',
    },
    links: {
      viewCollection: '/collections/beauty-products',
      marketplace: 'https://opensea.io/collection/beauty-products',
    },
  },
];

/**
 * Journal posts data
 */
export const journalPosts: JournalPost[] = [
  {
    id: '1',
    title: 'Mastering Tech Product Photography: Edge Controllers & Gadgets',
    excerpt: 'Explore advanced techniques for capturing intricate tech products with precision. From lighting setups to reflective surfaces, we share our expertise in electronics photography.',
    image: '/images/products/Lexar.webp',
    link: '/journal/tech-product-photography',
    date: '2024-12-28',
  },
  {
    id: '2',
    title: 'Luxury Product Photography: Watches and Accessories',
    excerpt: 'Discover the art of photographing high-end watches and accessories. Learn how we achieve that perfect balance of elegance and detail that makes luxury products shine.',
    image: '/images/products/FossilEditedOrangeWhite.webp',
    link: '/journal/luxury-product-photography',
    date: '2024-12-20',
  },
  {
    id: '3',
    title: 'Beauty Product Photography: Capturing Cosmetics Perfectly',
    excerpt: 'From skincare to nail polish, learn the essential techniques for beauty product photography. Color accuracy, texture detail, and flawless presentation made easy.',
    image: '/images/products/Ponds.webp',
    link: '/journal/beauty-product-photography',
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
