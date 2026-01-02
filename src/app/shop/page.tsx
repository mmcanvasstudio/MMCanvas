import type { Metadata } from 'next';
import ProductGrid from '@/components/sections/product-grid';
import { products } from '@/constants/products';

export const metadata: Metadata = {
  title: 'Shop - Photography Prints & Services | MMCanvas',
  description: 'Browse our collection of premium food photography prints, digital collections, and professional photography services.',
  keywords: ['food photography prints', 'photography services', 'digital photos', 'restaurant photography'],
};

/**
 * Shop page with product grid
 */
export default function ShopPage(): JSX.Element {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-dark to-background">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop Our Collection
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Premium food photography prints, digital collections, and professional photography services
            for restaurants, cafes, and food businesses.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid products={products} title="Browse Products" showFilters={true} />

      {/* CTA Section */}
      <section className="py-16 bg-gray-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Custom Photography?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Looking for something specific? We offer custom food photography sessions tailored to your
            business needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-md font-medium bg-accent text-background hover:bg-accent/90 transition-custom"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
