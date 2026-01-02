# Dynamic Product Grid System 🛍️

Complete guide to using the dynamic product grid for your MMCanvas site.

---

## 🎯 Features

✅ **Dynamic Filtering** - Filter by category (prints, digital, packages, services)
✅ **Smart Search** - Search by title, description, or tags
✅ **Sorting Options** - Sort by price, name, or featured status
✅ **Responsive Design** - Works on all devices (mobile, tablet, desktop)
✅ **Lazy Loading** - First 4 products load with priority, rest lazy-loaded
✅ **Hover Effects** - Smooth animations and description reveal
✅ **Stock Status** - Shows "Sold Out" badge if out of stock
✅ **Featured Badge** - Highlights featured products
✅ **Price Display** - Shows prices in Indian Rupees (₹)

---

## 📁 File Structure

```
src/
├── types/
│   └── product.ts                    # Product type definitions
├── constants/
│   └── products.ts                   # Product data
├── components/
│   ├── ui/
│   │   └── product-card.tsx          # Individual product card
│   └── sections/
│       └── product-grid.tsx          # Main grid with filters
└── app/
    └── shop/
        └── page.tsx                  # Shop page
```

---

## 🚀 Quick Start

### Visit Your Shop Page

```
http://localhost:3000/shop
```

### Add to Navigation

Edit `src/constants/content.ts`:

```typescript
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },  // ← Add this
  { label: 'Gallery', href: '/gallery' },
  { label: 'Menu', href: '/menu' },
  { label: 'Collections', href: '/collections' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
```

---

## 📦 Current Products

### Prints (10 items)
- Chocolate Milkshake Print - ₹2,499 ⭐ Featured
- Coffee Scoop Fine Art Print - ₹2,199 ⭐ Featured
- Cookies & Cream Milkshake - ₹2,499
- Strawberry Scoop Print - ₹2,199
- Kiwi Milkshake Art Print - ₹2,299
- Red Velvet Dessert Print - ₹2,399
- Pineapple Milkshake Print - ₹2,499
- Masala French Fries - ₹1,999
- Veggie Lollipops Print - ₹1,999
- Tender Coconut Milkshake - ₹2,299

### Digital (2 items)
- Complete Beverage Collection - ₹15,999 ⭐ Featured
- Ice Cream Collection - ₹12,999

### Packages (2 items)
- Restaurant Menu Package - ₹45,000 ⭐ Featured
- Social Media Content Package - ₹35,000

### Services (2 items)
- Half-Day Photography Session - ₹25,000
- Full-Day Photography & Styling - ₹45,000 ⭐ Featured

**Total: 16 products**

---

## 🎨 Adding New Products

Edit `src/constants/products.ts`:

```typescript
export const products: Product[] = [
  // ... existing products
  {
    id: 'print-011',
    title: 'Your New Product',
    description: 'Product description here',
    price: 2999,
    image: '/images/Photography/YourImage.jpg',
    category: 'print',
    tags: ['tag1', 'tag2', 'tag3'],
    featured: false,
    inStock: true,
    dimensions: '12" x 18"',
    link: '/shop/print-011',
  },
];
```

---

## 💡 Usage Examples

### Show Only Featured Products

```tsx
import ProductGrid from '@/components/sections/product-grid';
import { products } from '@/constants/products';

const featured = products.filter(p => p.featured);

<ProductGrid products={featured} title="Featured" showFilters={false} />
```

### Show Only Prints

```tsx
const prints = products.filter(p => p.category === 'print');

<ProductGrid products={prints} title="Photography Prints" />
```

### Custom Grid on Home Page

```tsx
// In src/app/page.tsx
import ProductGrid from '@/components/sections/product-grid';
import { products } from '@/constants/products';

export default function Home() {
  const featured = products.filter(p => p.featured).slice(0, 4);
  
  return (
    <>
      <HeroSection />
      <ProductGrid 
        products={featured} 
        title="Featured Products" 
        showFilters={false} 
      />
      <RecentWorkSection />
      {/* ... rest */}
    </>
  );
}
```

---

## 🔍 Filter & Sort Features

### Category Filter
- Automatically generated from product categories
- Shows: All, Print, Digital, Package, Service
- Active category highlighted in blue

### Search Bar
- Searches: title, description, tags
- Real-time filtering
- Case-insensitive

### Sort Dropdown
- **Featured First** - Shows featured products first
- **Price: Low to High** - ₹1,999 → ₹45,000
- **Price: High to Low** - ₹45,000 → ₹1,999
- **Name: A to Z** - Alphabetical order
- **Name: Z to A** - Reverse alphabetical

---

## 📱 Responsive Design

| Screen | Columns | Image Size |
|--------|---------|------------|
| Mobile (< 640px) | 1 | Full width |
| Tablet (640-1024px) | 2 | 50% width |
| Desktop (1024-1280px) | 3 | 33% width |
| Large (> 1280px) | 4 | 25% width |

---

## 🎨 Customization

### Change Currency

Edit `src/components/ui/product-card.tsx`:

```tsx
// Change from ₹ to $
₹{product.price.toLocaleString()}
// to
${product.price.toLocaleString()}
```

### Change Grid Columns

Edit `src/components/sections/product-grid.tsx`:

```tsx
// 4 columns → 3 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Change Accent Color

Your products use the `accent` color from your theme:
- Featured badge: `bg-accent`
- Price: `text-accent`
- Buttons: `bg-accent`

Defined in `src/app/globals.css`

---

## ⚡ Performance Features

✅ **Lazy Loading** - First 4 products: `priority={true}`, rest lazy-loaded
✅ **Image Optimization** - WebP/AVIF formats automatically
✅ **Responsive Images** - Different sizes for different screens
✅ **Client-side Filtering** - Instant filter/sort updates
✅ **Memoized Calculations** - No unnecessary re-renders

---

## 🛠️ Troubleshooting

### Products Not Showing
- Check image paths in `src/constants/products.ts`
- Verify images exist in `public/images/Photography/`
- Open browser console (F12) for errors

### Filtering Not Working
- Ensure `'use client';` at top of `product-grid.tsx`
- Check category names match exactly: 'print', 'digital', 'package', 'service'

### Images Not Loading
- Verify Next.js config: `next.config.js`
- Check image paths start with `/images/`
- Ensure images are in `public/` folder

---

## 🎉 Next Steps

1. ✅ Product grid system created
2. ✅ 16 sample products added
3. ✅ Shop page created
4. ⬜ Add to navigation menu
5. ⬜ Create product detail pages
6. ⬜ Add shopping cart
7. ⬜ Add checkout
8. ⬜ Integrate payment (Razorpay/Stripe)
9. ⬜ Test on mobile
10. ⬜ Add product reviews

---

## 📊 Test Checklist

- [ ] Visit `http://localhost:3000/shop`
- [ ] Test category filtering
- [ ] Test search functionality
- [ ] Test sorting options
- [ ] Hover over products to see description
- [ ] Check on mobile device
- [ ] Verify images load properly
- [ ] Test "Clear Filters" button

---

**Your dynamic product grid is ready! 🎉**

Questions? Check the code comments or the main documentation.
