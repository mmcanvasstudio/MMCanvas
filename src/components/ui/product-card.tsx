import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * Product card component for displaying shop items
 */
export default function ProductCard({ product, priority = false }: ProductCardProps): JSX.Element {
  return (
    <article className="group cursor-pointer transition-custom">
      <Link href={product.link} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-gray-medium">
          <Image
            src={product.image}
            alt={product.title}
            fill
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <div className="absolute top-4 left-4 bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Featured
            </div>
          )}
          {!product.inStock && (
            <div className="absolute top-4 right-4 bg-gray-dark/90 text-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Sold Out
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-custom flex items-end p-6">
            <p className="text-white text-sm">{product.description}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-custom line-clamp-2">
              {product.title}
            </h3>
            <span className="text-accent font-bold text-lg whitespace-nowrap">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          {product.dimensions && (
            <p className="text-text-secondary text-sm">{product.dimensions}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-gray-dark text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
