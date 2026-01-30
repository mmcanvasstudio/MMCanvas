/**
 * Navigation item type
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * CTA Button type
 */
export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

/**
 * Hero section props
 */
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  role: string;
  location: string;
  buttons: CTAButton[];
}

/**
 * Collection type
 */
export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: {
    year?: string;
    photos: number;
    collectors: number;
    volume: string;
  };
  links: {
    viewCollection: string;
    marketplace?: string;
  };
}

/**
 * Journal post type
 */
export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  date: string;
}

/**
 * Contact info type
 */
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

/**
 * Social link type
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/**
 * Footer props
 */
export interface FooterProps {
  contact: ContactInfo;
  social: SocialLink[];
  copyright: string;
}
