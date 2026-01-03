# 📸 Gallery Management Guide

## How to Add New Photos to Your Gallery

Your gallery is now powered by a simple JSON file! Adding new photos is easy.

---

## 🚀 Quick Start: Adding a New Photo

### Step 1: Add Image to Folder
Place your new image in:
```
/public/images/products/YourNewImage.webp
```

**Recommended formats:** `.webp`, `.jpg`, `.png`  
**Recommended size:** 1200x1600px (portrait) or 1600x1200px (landscape)

### Step 2: Update JSON File
Open `/src/data/gallery.json` and add a new entry:

```json
{
  "id": "13",
  "title": "Your Product Name",
  "image": "/images/products/YourNewImage.webp",
  "category": "Tech & Electronics",
  "description": "Brief description of the product and photo"
}
```

### Step 3: Save & Refresh
Save the file and refresh your browser. Your new photo appears automatically! ✅

---

## 📋 JSON Structure Explained

Each gallery item has these fields:

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ | Unique number (increment from last) | `"13"` |
| `title` | ✅ | Product/photo name | `"Premium Coffee Beans"` |
| `image` | ✅ | Path to image file | `"/images/products/coffee.webp"` |
| `category` | ✅ | Filter category | `"Food & Beverage"` |
| `description` | ✅ | Alt text and description | `"Artisan coffee beans in natural light"` |

---

## 🎯 Categories

Use one of these existing categories, or create a new one:

### Existing Categories:
- `"Tech & Electronics"` - Gadgets, devices, electronics
- `"Beauty & Cosmetics"` - Makeup, skincare, nail polish

### Adding a New Category:
Just use the new name in the JSON! The filter buttons update automatically.

**Examples:**
- `"Food & Beverage"` - Restaurant dishes, ingredients, drinks
- `"Fashion & Apparel"` - Clothing, shoes, accessories
- `"Home & Lifestyle"` - Furniture, decor, home goods
- `"Jewelry & Watches"` - Luxury items, accessories

---

## ✨ Best Practices

### Image Guidelines:
1. **Format:** Use `.webp` for best performance (or `.jpg`/`.png`)
2. **Size:** 
   - Portrait: 1200x1600px (3:4 aspect ratio)
   - Landscape: 1600x1200px (4:3 aspect ratio)
3. **File Size:** Keep under 500KB for fast loading
4. **Naming:** Use descriptive names: `premium-coffee-beans.webp`

### Writing Titles:
- ✅ "Premium Coffee Beans"
- ✅ "Luxury Watch - Gold Edition"
- ❌ "IMG_1234" (too generic)
- ❌ "Product" (not descriptive)

### Writing Descriptions:
- ✅ "Artisan coffee beans photographed in natural morning light"
- ✅ "Close-up macro shot of luxury watch dial with dramatic shadows"
- ❌ "Photo of product" (too generic)

---

## 📝 Complete Example

Let's add a new food photography item:

### 1. Add Image:
Save `gourmet-pasta.webp` to `/public/images/products/`

### 2. Update JSON:
```json
{
  "galleryItems": [
    // ... existing items ...
    {
      "id": "13",
      "title": "Gourmet Pasta Dish",
      "image": "/images/products/gourmet-pasta.webp",
      "category": "Food & Beverage",
      "description": "Artisan pasta with fresh herbs, captured from above with natural lighting"
    }
  ]
}
```

### 3. Result:
- ✅ Photo appears in gallery grid
- ✅ Clickable to open in lightbox
- ✅ Filterable by "Food & Beverage" category
- ✅ Shows title and category on hover

---

## 🔄 Bulk Adding Multiple Photos

Adding 5-10 photos at once:

```json
{
  "galleryItems": [
    // ... existing items ...
    {
      "id": "13",
      "title": "Espresso Close-Up",
      "image": "/images/products/espresso.webp",
      "category": "Food & Beverage",
      "description": "Rich espresso shot with crema detail"
    },
    {
      "id": "14",
      "title": "Artisan Bread Loaf",
      "image": "/images/products/artisan-bread.webp",
      "category": "Food & Beverage",
      "description": "Rustic sourdough bread with flour dusting"
    },
    {
      "id": "15",
      "title": "Fresh Sushi Platter",
      "image": "/images/products/sushi-platter.webp",
      "category": "Food & Beverage",
      "description": "Japanese sushi arrangement with vibrant colors"
    }
  ]
}
```

---

## 🛠️ Troubleshooting

### Photo Not Showing?
1. ✅ Check file path is correct: `/images/products/YourImage.webp`
2. ✅ Verify file exists in `/public/images/products/`
3. ✅ Check JSON syntax (use [JSONLint](https://jsonlint.com/))
4. ✅ Hard refresh browser: `Ctrl + Shift + R`

### Category Filter Not Working?
1. ✅ Category name must match exactly (case-sensitive)
2. ✅ Use quotes: `"Food & Beverage"` not `Food & Beverage`

### Image Quality Issues?
1. ✅ Use high-res images (at least 1200px wide)
2. ✅ Convert to `.webp` for best quality/size ratio
3. ✅ Use image optimization tools before uploading

---

## 🎨 Pro Tips

### 1. Organize by Project
Group related photos together:
```json
// Project 1: Restaurant Menu
{ "id": "13", "title": "Signature Burger", ... },
{ "id": "14", "title": "Craft Cocktails", ... },
{ "id": "15", "title": "Dessert Platter", ... },

// Project 2: Beauty Brand
{ "id": "16", "title": "Lipstick Collection", ... },
```

### 2. Use Descriptive IDs
While numeric IDs work, you can use descriptive ones:
```json
{
  "id": "project-acme-burger-001",
  "title": "ACME Burger - Hero Shot",
  ...
}
```

### 3. Add Metadata (Optional)
Extend the structure for future features:
```json
{
  "id": "13",
  "title": "Gourmet Pasta",
  "image": "/images/products/pasta.webp",
  "category": "Food & Beverage",
  "description": "...",
  "client": "Restaurant ABC",
  "date": "2025-01-15",
  "tags": ["italian", "pasta", "restaurant"]
}
```

---

## 📊 Current Gallery Stats

Total images: 12  
Categories: 2 (Tech & Electronics, Beauty & Cosmetics)  
Format: JSON-based, auto-updating  

---

## 🚀 Future Enhancements

Want to make it even better?

1. **Auto-scan folder** - Script to auto-generate JSON from images
2. **Admin panel** - Upload images through a web interface
3. **Image optimization** - Auto-convert to `.webp` and resize
4. **Lazy loading** - Load images as user scrolls
5. **Search functionality** - Search by title, description, tags

---

**Need help? Check the JSON file at `/src/data/gallery.json` for examples!**
