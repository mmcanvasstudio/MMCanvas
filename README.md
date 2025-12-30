# Bryan Minear Portfolio Clone

A pixel-perfect recreation of the Bryan Minear photography portfolio website using Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
MMCanvas/
├── public/
│   └── images/
│       ├── collections/     # Collection images
│       └── journal/         # Journal post images
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx      # Header with navigation
│   │   │   ├── navigation.tsx  # Navigation menu
│   │   │   └── footer.tsx      # Footer component
│   │   ├── sections/
│   │   │   ├── hero-section.tsx        # Hero/intro section
│   │   │   ├── collections-section.tsx # Collections showcase
│   │   │   ├── journal-section.tsx     # Blog posts
│   │   │   └── contact-section.tsx     # Contact info
│   │   └── ui/
│   │       ├── button.tsx   # Button component
│   │       ├── card.tsx     # Card component
│   │       └── link.tsx     # Link component
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   ├── constants/
│   │   └── content.ts      # Content and data
│   └── styles/
│       └── custom.css      # Additional custom styles
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies

```

## 🎨 Features

### ✅ Implemented

- **Responsive Navigation** - Mobile-friendly hamburger menu
- **Hero Section** - Introduction with CTA buttons
- **Collections Section** - Seasonal & Legacy collections with stats
- **Journal Section** - Recent blog posts with cards
- **Contact Section** - Email and location info
- **Footer** - Social links and copyright
- **Dark Theme** - Exact color matching (#0a0a0a background)
- **Smooth Animations** - Hover effects and transitions
- **TypeScript** - Full type safety
- **Mobile-First Design** - Responsive across all devices

### 📝 Component Details

#### Navigation
- No dropdown submenus (simplified as requested)
- Sticky header with scroll effect
- Mobile hamburger menu

#### Sections
1. **Hero Section** - Greeting, role, location, and CTA buttons
2. **Collections** - Two collections (Seasonal & Legacy) with stats
3. **Journal** - 3 recent blog posts with images
4. **Contact** - Email and location cards

## 🖼️ Adding Images

Replace the placeholder images in:
- `public/images/collections/seasonal.jpg`
- `public/images/collections/legacy.jpg`
- `public/images/journal/traveler.jpg`
- `public/images/journal/presets.jpg`
- `public/images/journal/xh2s.jpg`

Recommended image dimensions:
- Collections: 1600x1200px (4:3 aspect ratio)
- Journal: 1280x800px (16:10 aspect ratio)

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  background: '#0a0a0a',    // Dark background
  foreground: '#ffffff',     // White text
  accent: '#2081E2',         // Blue accent
  // ... more colors
}
```

### Content
Edit `src/constants/content.ts` to update:
- Navigation items
- Hero content
- Collections data
- Journal posts
- Contact information
- Social links

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

## 🚀 Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Design Principles

Following best practices from the Technical Design Document:

1. **Type Safety** - All components use TypeScript with explicit types
2. **Component Architecture** - Reusable, single-responsibility components
3. **Performance** - Next.js Image optimization, code splitting
4. **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
5. **Responsive Design** - Mobile-first approach with Tailwind breakpoints
6. **Code Standards** - Consistent naming (kebab-case), JSDoc comments

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px  
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎨 Color Palette

```css
Background:     #0a0a0a  (Dark)
Foreground:     #ffffff  (White)
Text Secondary: #a0a0a0  (Gray)
Accent:         #2081E2  (Blue)
Gray Dark:      #1a1a1a
Gray Medium:    #2a2a2a
Gray Light:     #3a3a3a
Border:         #2a2a2a
```

## 🔧 Troubleshooting

### Images not loading
- Ensure image files exist in `public/images/`
- Check file paths in `src/constants/content.ts`

### Styling issues
- Run `npm run dev` to rebuild Tailwind
- Clear `.next` cache: delete `.next` folder and restart

### Type errors
- Run `npm run lint` to check for issues
- Ensure all imports have correct paths

## 📄 License

This is a clone project for educational purposes.

## 👨‍💻 Author

Created following the Bryan Minear portfolio design.

---

**Note:** Replace placeholder images with your actual photography to complete the portfolio!
