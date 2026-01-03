# 📸 Gallery System - Quick Reference

## ✨ What Changed?

Your gallery is now **JSON-powered** and **auto-updating**!

---

## 🎯 How It Works

```
1. Add image → /public/images/products/
2. Update JSON → /src/data/gallery.json
3. Save & Refresh → Photo appears automatically!
```

---

## 📝 Quick Add Template

Copy this template to add a new photo:

```json
{
  "id": "NEXT_NUMBER",
  "title": "Product Name Here",
  "image": "/images/products/your-image.webp",
  "category": "Your Category",
  "description": "Brief photo description for SEO"
}
```

---

## 🎨 Available Categories

Current categories (add new ones anytime):
- ✅ `Tech & Electronics`
- ✅ `Beauty & Cosmetics`

**Add new categories by just using them in the JSON!**

Example new categories:
- `Food & Beverage`
- `Fashion & Apparel`  
- `Home & Lifestyle`
- `Jewelry & Watches`

---

## 🔥 Features

✅ **Auto-updating** - No code changes needed  
✅ **Dynamic filters** - Categories auto-generate  
✅ **Lightbox** - Click any image for full-screen view  
✅ **Descriptions** - Hover to see title & category  
✅ **SEO-friendly** - Alt text from descriptions  

---

## 📂 File Structure

```
MMCanvas/
├── public/
│   └── images/
│       └── products/          ← Add images here
│           ├── YourImage.webp
│           └── ...
├── src/
│   ├── data/
│   │   └── gallery.json       ← Update this file
│   └── components/
│       └── sections/
│           └── recent-work-section.tsx  ← Uses JSON
└── GALLERY_GUIDE.md           ← Full documentation
```

---

## 🚀 Example: Adding Your First Photo

### 1. Save Image
`/public/images/products/coffee-beans.webp`

### 2. Add to JSON
```json
{
  "id": "13",
  "title": "Premium Coffee Beans",
  "image": "/images/products/coffee-beans.webp",
  "category": "Food & Beverage",
  "description": "Artisan coffee beans in natural morning light"
}
```

### 3. Done! ✅
- Photo appears in gallery
- New "Food & Beverage" filter button appears
- Clickable lightbox works
- SEO optimized

---

## 📖 Full Documentation

See **GALLERY_GUIDE.md** for:
- Best practices
- Image optimization tips
- Troubleshooting
- Advanced features
- Pro tips

---

## 💡 Pro Tip

**Want to add 10 photos?**
1. Copy all images to `/public/images/products/`
2. Copy the JSON template 10 times
3. Update id, title, image, category for each
4. Save once → All 10 appear! 🎉

---

**Current Gallery:** 12 images, 2 categories, Auto-updating ✨
