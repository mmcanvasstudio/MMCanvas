'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ui/product-card';
import { Product, ProductSortOption } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  title?: string;
  showFilters?: boolean;
}

/**
 * Dynamic product grid with filtering and sorting
 */
export default function ProductGrid({
  products,
  title = 'Our Products',
  showFilters = true,
}: ProductGridProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<ProductSortOption>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(products.map((p) => p.category))];
    return cats;
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort
    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'featured':
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [products, selectedCategory, sortOption, searchQuery]);

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-text-secondary text-lg">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} available
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-lg bg-gray-dark text-foreground border border-gray-medium focus:border-accent focus:outline-none transition-custom"
              />
            </div>

            {/* Category and Sort Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-custom capitalize ${
                      selectedCategory === category
                        ? 'bg-accent text-background'
                        : 'bg-gray-dark text-text-secondary hover:bg-gray-medium'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as ProductSortOption)}
                className="px-6 py-2 rounded-lg bg-gray-dark text-foreground border border-gray-medium focus:border-accent focus:outline-none transition-custom cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-custom"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
