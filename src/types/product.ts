/**
 * Product type for shop/portfolio items
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'print' | 'digital' | 'package' | 'service';
  tags: string[];
  featured?: boolean;
  inStock?: boolean;
  dimensions?: string;
  link: string;
}

/**
 * Product filter type
 */
export interface ProductFilter {
  category?: string;
  priceRange?: [number, number];
  tags?: string[];
  inStock?: boolean;
}

/**
 * Product sort options
 */
export type ProductSortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'featured';
