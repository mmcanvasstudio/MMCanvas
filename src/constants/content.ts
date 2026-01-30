import { NavItem, Collection, JournalPost, ContactInfo, SocialLink } from '@/types';

/**
 * Navigation items
 */
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Food', href: '/food' },
  { label: 'Personal', href: '/personal' },
  { label: 'Contact Us', href: '/contact' },
];

/**
 * Hero section content
 */
export const heroContent = {
  greeting: 'We are MMCanvas',
  role: 'Food & Product Photography Studio',
  location: 'Creating Visual Stories Through Light & Composition',
};

/**
 * Collections data
 */
export const collections: Collection[] = [
  {
    id: 'food',
    title: 'Food Photography',
    description: 'Mouth-watering food photography capturing the essence of culinary artistry. From restaurant dishes to packaged foods, we bring your cuisine to life with appetizing compositions.',
    image: '/images/products/TestImage.jpeg',
    stats: {
      year: '2025',
      photos: 50,
      collectors: 35,
      volume: '15.2',
    },
    links: {
      viewCollection: '/food',
      marketplace: 'https://mmcanvas.com/collections/food',
    },
  },
  {
    id: 'personal',
    title: 'Personal Photography',
    description: 'Capturing authentic moments and personal stories through portraiture and lifestyle photography. Creating timeless memories with artistic vision and genuine emotion.',
    image: '/images/products/Chair_Lean_Side.png',
    stats: {
      year: '2024',
      photos: 60,
      collectors: 28,
      volume: '12.8',
    },
    links: {
      viewCollection: '/personal',
      marketplace: 'https://mmcanvas.com/collections/personal',
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
  email: 'admin@mmcanvas.com',
  phone: '+91 78424 99771',
  location: 'Hyderabad, India',
};

/**
 * Social links
 */
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/mmcanvas_photography', icon: 'instagram' },
  { platform: 'Twitter', url: 'https://twitter.com/mmcanvasstudio', icon: 'twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/mmcanvas', icon: 'linkedin' },
];

/**
 * Copyright text
 */
export const copyrightText = '© 2025 MMCanvas Studio. All rights reserved.';
