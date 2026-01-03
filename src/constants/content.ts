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
  role: 'Food & Product Photography Studio',
  location: 'Creating Visual Stories Through Light & Composition',
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
      year: '2023',
      photos: 40,
      collectors: 32,
      volume: '12.5',
    },
    links: {
      viewCollection: '/collections/tech-products',
      marketplace: 'https://mmcanvas.com/collections/tech-products',
    },
  },
  {
    id: 'beauty-products',
    title: 'Beauty & Cosmetics Collection',
    description: 'Elegant beauty product photography featuring cosmetics, nail polish, and skincare with stunning detail and luxurious presentation.',
    image: '/images/products/NailPolish_1.webp',
    stats: {
      photos: 25,
      collectors: 18,
      volume: '8.3',
    },
    links: {
      viewCollection: '/collections/beauty-products',
      marketplace: 'https://mmcanvas.com/collections/beauty-products',
    },
  },
  {
    id: 'storage-devices',
    title: 'Storage & Tech Accessories',
    description: 'Showcasing high-performance storage devices and tech accessories with emphasis on product detail, texture, and brand identity.',
    image: '/images/products/Lexar.webp',
    stats: {
      year: '2025',
      photos: 35,
      collectors: 28,
      volume: '10.2',
    },
    links: {
      viewCollection: '/collections/storage-devices',
      marketplace: 'https://mmcanvas.com/collections/storage-devices',
    },
  },
  {
    id: 'skincare-essentials',
    title: 'Skincare & Wellness Collection',
    description: 'Premium skincare product photography highlighting texture, packaging design, and the essence of beauty brands.',
    image: '/images/products/Ponds.webp',
    stats: {
      photos: 30,
      collectors: 22,
      volume: '9.1',
    },
    links: {
      viewCollection: '/collections/skincare-essentials',
      marketplace: 'https://mmcanvas.com/collections/skincare-essentials',
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
    date: '2025-01-02',
  },
  {
    id: '2',
    title: 'Gaming Peripherals: Photographing High-Tech Controllers',
    excerpt: 'Dive into the world of gaming product photography. Learn how we capture the sleek design and intricate details of modern gaming controllers.',
    image: '/images/products/EdgeController_ExpandView.webp',
    link: '/journal/gaming-peripherals-photography',
    date: '2024-12-28',
  },
  {
    id: '3',
    title: 'Beauty Product Photography: Capturing Cosmetics Perfectly',
    excerpt: 'From skincare to nail polish, learn the essential techniques for beauty product photography. Color accuracy, texture detail, and flawless presentation made easy.',
    image: '/images/products/Ponds.webp',
    link: '/journal/beauty-product-photography',
    date: '2024-12-25',
  },
  {
    id: '4',
    title: 'The Art of Nail Polish Photography: Colors & Reflections',
    excerpt: 'Discover the secrets to photographing nail polish bottles with perfect color accuracy. Tips on handling reflections, transparency, and creating stunning compositions.',
    image: '/images/products/NailPolish_1.webp',
    link: '/journal/nail-polish-photography',
    date: '2024-12-22',
  },
  {
    id: '5',
    title: 'Product Lighting Techniques for Small Electronics',
    excerpt: 'Master the art of lighting small electronic products. From USB drives to memory cards, learn how to showcase tech accessories with professional results.',
    image: '/images/products/Lexar.webp',
    link: '/journal/product-lighting-techniques',
    date: '2024-12-20',
  },
  {
    id: '6',
    title: 'Creating Vibrant Beauty Product Compositions',
    excerpt: 'Explore composition techniques for beauty products. Learn how to arrange multiple items, use color theory, and create eye-catching product layouts.',
    image: '/images/products/NailPolish_2.webp',
    link: '/journal/beauty-product-compositions',
    date: '2024-12-18',
  },
];

/**
 * Contact information
 */
export const contactInfo: ContactInfo = {
  email: 'info@mmcanvas.com',
  location: 'Hyderabad, India',
};

/**
 * Social links
 */
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/mmcanvasstudio', icon: 'instagram' },
  { platform: 'Twitter', url: 'https://twitter.com/mmcanvasstudio', icon: 'twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/mmcanvas', icon: 'linkedin' },
];

/**
 * Copyright text
 */
export const copyrightText = '© 2025 MMCanvas Studio. All rights reserved.';
