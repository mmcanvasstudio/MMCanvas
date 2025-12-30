# Technical Design Document
## Bryan Minear Portfolio Website Clone

**Version:** 1.0  
**Date:** December 30, 2024  
**Author:** Development Team  
**Project:** Photography Portfolio Website

---

## 1. Executive Summary

This document outlines the technical design for recreating the Bryan Minear photography portfolio website (https://bryanminear.com/) using modern web technologies. The project will replicate the visual design and user experience while maintaining clean, maintainable code following best practices.

---

## 2. Project Overview

### 2.1 Objectives
- Create a pixel-perfect recreation of the Bryan Minear portfolio homepage
- Implement responsive design for all device sizes
- Ensure optimal performance for image-heavy content
- Maintain clean, maintainable, and scalable code architecture
- No dropdown submenus (simplified navigation)

### 2.2 Scope
**In Scope:**
- Homepage layout and styling
- Navigation bar (without dropdown submenus)
- Hero/Introduction section
- Collections showcase section
- Recent journal entries section
- Contact/Footer section
- Responsive design
- Image optimization
- Smooth animations and transitions

**Out of Scope:**
- Backend/CMS integration
- Authentication system
- E-commerce functionality
- Dynamic content management
- Individual portfolio pages
- Blog post pages

---

## 3. Technology Stack

### 3.1 Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with SSR/SSG capabilities |
| **React** | 18.x | UI component library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Framer Motion** | 10.x | Animation library |

### 3.2 Development Tools

| Tool | Purpose |
|------|---------|
| **Node.js** | Runtime environment (v18+) |
| **npm/yarn** | Package management |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **Git** | Version control |

### 3.3 Why This Stack?

**Next.js:**
- Built-in image optimization with `next/image`
- Static site generation for better performance
- File-based routing system
- Excellent SEO capabilities
- Fast refresh for development

**TypeScript:**
- Type safety and better IDE support
- Reduced runtime errors
- Better code documentation
- Improved refactoring capabilities

**Tailwind CSS:**
- Rapid UI development
- Consistent design system
- Smaller CSS bundle (purged unused styles)
- Responsive design utilities
- Easy to maintain and customize

---

## 4. System Architecture

### 4.1 Project Structure

```
MMCanvas/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── collections/
│   │   └── journal/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── footer.tsx
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── collections-section.tsx
│   │   │   ├── journal-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── link.tsx
│   ├── types/
│   │   └── index.ts
│   ├── constants/
│   │   └── content.ts
│   └── styles/
│       └── custom.css
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── TECHNICAL_DESIGN_DOCUMENT.md
```

### 4.2 Architecture Diagram

```
┌─────────────────────────────────────────────┐
│           Browser (Client)                  │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│         Next.js Application                 │
│  ┌─────────────────────────────────────┐   │
│  │     App Router (app/)               │   │
│  │  - layout.tsx (Root Layout)         │   │
│  │  - page.tsx (Home Page)             │   │
│  └─────────────────────────────────────┘   │
│                  │                          │
│  ┌───────────────▼──────────────────────┐  │
│  │      Components Layer                │  │
│  │  ┌────────────┐  ┌────────────────┐ │  │
│  │  │  Layout    │  │   Sections     │ │  │
│  │  │ Components │  │  Components    │ │  │
│  │  └────────────┘  └────────────────┘ │  │
│  │  ┌────────────────────────────────┐ │  │
│  │  │    UI Components (Reusable)    │ │  │
│  │  └────────────────────────────────┘ │  │
│  └─────────────────────────────────────┘  │
│                  │                          │
│  ┌───────────────▼──────────────────────┐  │
│  │   Styling Layer (Tailwind CSS)      │  │
│  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

---

## 5. Component Design

### 5.1 Component Hierarchy

```
App (Root Layout)
│
├── Header
│   └── Navigation
│       ├── Logo
│       └── NavLinks (No Submenus)
│
└── Home Page
    ├── HeroSection
    │   ├── IntroText
    │   └── CTAButtons
    │
    ├── CollectionsSection
    │   ├── SeasonalCollection
    │   │   ├── CollectionImage
    │   │   ├── CollectionInfo
    │   │   └── CollectionStats
    │   └── LegacyCollection
    │       ├── CollectionImage
    │       ├── CollectionInfo
    │       └── CollectionStats
    │
    ├── JournalSection
    │   └── JournalCard[] (3 items)
    │       ├── CardImage
    │       ├── CardTitle
    │       ├── CardExcerpt
    │       └── ReadMoreLink
    │
    └── Footer
        ├── ContactInfo
        ├── SocialLinks
        └── Copyright
```

### 5.2 Component Specifications

#### 5.2.1 Header Component
```typescript
interface HeaderProps {
  transparent?: boolean;
}

Features:
- Fixed/sticky positioning
- Transparent background on hero, solid on scroll
- Responsive mobile menu (hamburger)
- Smooth scroll behavior
```

#### 5.2.2 Navigation Component
```typescript
interface NavigationProps {
  items: NavItem[];
}

interface NavItem {
  label: string;
  href: string;
}

Navigation Items:
- Home
- Prints
- Journal
- Collections (direct link, no submenu)
- Portfolio (direct link, no submenu)
- Gear
- About
```

#### 5.2.3 HeroSection Component
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  role: string;
  location: string;
  buttons: CTAButton[];
}

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}
```

#### 5.2.4 CollectionsSection Component
```typescript
interface CollectionsSectionProps {
  collections: Collection[];
}

interface Collection {
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
```

#### 5.2.5 JournalSection Component
```typescript
interface JournalSectionProps {
  posts: JournalPost[];
}

interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  date: string;
}
```

#### 5.2.6 Footer Component
```typescript
interface FooterProps {
  contact: ContactInfo;
  social: SocialLink[];
  copyright: string;
}

interface ContactInfo {
  email: string;
  location: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

---

## 6. Design System

### 6.1 Color Palette

Based on the original website analysis:

```css
/* Primary Colors */
--color-background: #0a0a0a;        /* Dark background */
--color-text-primary: #ffffff;      /* White text */
--color-text-secondary: #a0a0a0;    /* Gray text */
--color-accent: #2081E2;            /* Blue accent (OpenSea) */

/* Neutral Colors */
--color-gray-dark: #1a1a1a;
--color-gray-medium: #2a2a2a;
--color-gray-light: #3a3a3a;

/* Semantic Colors */
--color-border: #2a2a2a;
--color-hover: #1a1a1a;
--color-overlay: rgba(0, 0, 0, 0.7);
```

### 6.2 Typography

```css
/* Font Families */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-headings: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 6.3 Spacing System

```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### 6.4 Breakpoints

```css
/* Responsive Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### 6.5 Animations

```css
/* Transition Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 7. Styling Strategy

### 7.1 Tailwind Configuration

```typescript
// tailwind.config.ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: '#2081E2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
```

### 7.2 CSS Approach

- **Utility-first**: Use Tailwind utilities for most styling
- **Component classes**: Create custom classes for complex components
- **CSS Modules**: For component-specific styles when needed
- **Global styles**: Minimal global CSS in `globals.css`

### 7.3 Responsive Design Strategy

- **Mobile-first approach**: Base styles for mobile, use `md:`, `lg:` for larger screens
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Fluid typography**: Use clamp() for responsive font sizes
- **Flexible layouts**: CSS Grid and Flexbox for layout

---

## 8. Performance Optimization

### 8.1 Image Optimization

```typescript
// Next.js Image Component Configuration
<Image
  src="/images/photo.jpg"
  alt="Description"
  width={1920}
  height={1080}
  quality={85}
  priority={false}
  loading="lazy"
  placeholder="blur"
/>
```

**Strategy:**
- Use `next/image` for all images
- WebP format with JPEG fallback
- Lazy loading for below-fold images
- Priority loading for hero images
- Responsive image sizes
- Blur placeholders for better UX

### 8.2 Code Splitting

- Automatic code splitting by Next.js
- Dynamic imports for heavy components
- Route-based code splitting

### 8.3 Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.8s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Time to Interactive (TTI) | < 3.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total Bundle Size | < 250KB (gzipped) |

---

## 9. Accessibility (a11y)

### 9.1 Requirements

- **WCAG 2.1 Level AA compliance**
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed
- Color contrast ratio > 4.5:1

### 9.2 Implementation Checklist

- [ ] Skip to main content link
- [ ] Semantic HTML tags
- [ ] Keyboard-accessible navigation
- [ ] Focus trap in mobile menu
- [ ] Screen reader-friendly text
- [ ] Alt text for all images
- [ ] Proper button/link usage
- [ ] Form labels and error messages

---

## 10. SEO Strategy

### 10.1 Meta Tags

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Bryan Minear | Michigan Landscape Photographer',
  description: 'Portfolio of Bryan Minear, Fujifilm Ambassador and landscape photographer based in Michigan.',
  keywords: ['photography', 'landscape', 'portfolio', 'Fujifilm'],
  authors: [{ name: 'Bryan Minear' }],
  openGraph: {
    title: 'Bryan Minear Photography',
    description: 'Atmospheric landscape photography',
    images: ['/og-image.jpg'],
  },
};
```

### 10.2 Structured Data

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bryan Minear",
  "jobTitle": "Photographer",
  "url": "https://bryanminear.com",
  "sameAs": [
    "https://instagram.com/bryanminear",
    "https://twitter.com/bryanminear"
  ]
};
```

---

## 11. Implementation Plan

### 11.1 Phase 1: Project Setup (Day 1)
- [ ] Initialize Next.js project
- [ ] Configure TypeScript
- [ ] Set up Tailwind CSS
- [ ] Configure ESLint and Prettier
- [ ] Create project structure
- [ ] Set up Git repository

### 11.2 Phase 2: Core Layout (Day 1-2)
- [ ] Create root layout
- [ ] Build Header component
- [ ] Build Navigation component
- [ ] Build Footer component
- [ ] Implement responsive navigation

### 11.3 Phase 3: Home Page Sections (Day 2-3)
- [ ] Hero section with introduction
- [ ] Collections section (Seasonal & Legacy)
- [ ] Journal entries section
- [ ] Contact section
- [ ] Integrate all sections

### 11.4 Phase 4: Styling & Polish (Day 3-4)
- [ ] Apply exact color scheme
- [ ] Match typography styles
- [ ] Add hover effects and animations
- [ ] Implement smooth scrolling
- [ ] Polish responsive design

### 11.5 Phase 5: Optimization & Testing (Day 4-5)
- [ ] Image optimization
- [ ] Performance testing
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile device testing

### 11.6 Phase 6: Documentation & Deployment (Day 5)
- [ ] Write README documentation
- [ ] Add code comments
- [ ] Create deployment guide
- [ ] Final review

---

## 12. File Naming Conventions

### 12.1 Components
- **Format**: `kebab-case.tsx`
- **Examples**: `header.tsx`, `hero-section.tsx`, `journal-card.tsx`

### 12.2 Types
- **Format**: `kebab-case.ts`
- **Examples**: `index.ts`, `collection.types.ts`

### 12.3 Constants
- **Format**: `kebab-case.ts`
- **Examples**: `content.ts`, `navigation.ts`

### 12.4 Images
- **Format**: `kebab-case.jpg/png/webp`
- **Examples**: `hero-image.jpg`, `collection-seasonal.jpg`

---

## 13. Code Standards

### 13.1 TypeScript Standards

```typescript
// Always define prop types
interface ComponentNameProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

// Use explicit return types for functions
function ComponentName({ title, description }: ComponentNameProps): JSX.Element {
  return <div>{title}</div>;
}

// Export components as default
export default ComponentName;
```

### 13.2 React Best Practices

- Use functional components with hooks
- Avoid prop drilling (use composition)
- Memoize expensive computations with `useMemo`
- Memoize callbacks with `useCallback`
- Use TypeScript for type safety
- Keep components under 200 lines
- Single responsibility principle

### 13.3 CSS/Tailwind Standards

```typescript
// Group Tailwind classes logically
<div className={`
  // Layout
  flex flex-col items-center
  // Spacing
  px-4 py-8 md:px-8 md:py-12
  // Colors
  bg-background text-foreground
  // Effects
  transition-all duration-300
`}>
```

---

## 14. Testing Strategy (Future Enhancement)

### 14.1 Unit Tests
- Component rendering tests
- Utility function tests
- Hook tests

### 14.2 Integration Tests
- Navigation flow
- Section interactions
- Form submissions

### 14.3 E2E Tests
- Complete user journeys
- Cross-browser compatibility
- Responsive design validation

---

## 15. Deployment

### 15.1 Recommended Platforms

**Primary: Vercel**
- Native Next.js support
- Automatic deployments
- Edge network
- Free SSL certificates
- Analytics included

**Alternative: Netlify**
- Good Next.js support
- Continuous deployment
- Form handling
- Serverless functions

### 15.2 Build Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // If using static export
    domains: ['bryanminear.com'],
  },
  reactStrictMode: true,
};
```

---

## 16. Maintenance & Future Enhancements

### 16.1 Maintenance Tasks
- Regular dependency updates
- Security patches
- Performance monitoring
- Analytics review

### 16.2 Potential Enhancements
- Blog/CMS integration (Sanity/Contentful)
- Contact form with email service
- Newsletter subscription
- Image gallery with lightbox
- Dark/light mode toggle (already dark)
- Loading animations
- Parallax effects
- Instagram feed integration

---

## 17. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Large image files affecting performance | High | Use Next.js Image optimization, WebP format |
| Browser compatibility issues | Medium | Test on major browsers, use PostCSS autoprefixer |
| Responsive design complexity | Medium | Mobile-first approach, thorough testing |
| TypeScript learning curve | Low | Use clear type definitions, good documentation |
| Deployment issues | Low | Use Vercel for seamless Next.js deployment |

---

## 18. Success Metrics

### 18.1 Technical Metrics
- Lighthouse score > 90 (Performance, Accessibility, SEO)
- Core Web Vitals: All green
- Zero console errors
- W3C HTML validation pass
- WCAG 2.1 AA compliance

### 18.2 User Experience Metrics
- Visual similarity to original > 95%
- Mobile responsiveness score > 90%
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Load time < 3 seconds on 3G

---

## 19. Conclusion

This technical design document provides a comprehensive blueprint for recreating the Bryan Minear portfolio website using Next.js, React, TypeScript, and Tailwind CSS. The design prioritizes:

1. **Exact visual replication** of the original website
2. **Performance optimization** for image-heavy content
3. **Maintainable code** following best practices
4. **Responsive design** for all devices
5. **Accessibility** and SEO optimization

By following this document, developers can build a high-quality, production-ready portfolio website that matches the original design while leveraging modern web technologies.

---

## 20. Approval & Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Developer | - | - | - |
| Project Manager | - | - | - |
| Stakeholder | - | - | - |

---

**Document Version History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-12-30 | Development Team | Initial document creation |

---

**End of Technical Design Document**
