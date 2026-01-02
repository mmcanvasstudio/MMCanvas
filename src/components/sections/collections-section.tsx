import Image from 'next/image';
import Button from '@/components/ui/button';
import CustomLink from '@/components/ui/link';
import { collections } from '@/constants/content';

/**
 * Collections section showcasing Seasonal and Legacy collections
 */
export default function CollectionsSection(): JSX.Element {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          COLLECTIONS
        </h2>
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-medium ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {collection.title}
                </h3>
                <p className="text-text-secondary text-base md:text-lg mb-8">
                  {collection.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {collection.stats.year && (
                    <div>
                      <p className="text-xs uppercase text-text-secondary mb-1">Year</p>
                      <p className="text-2xl font-bold text-foreground">{collection.stats.year}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs uppercase text-text-secondary mb-1">Photos</p>
                    <p className="text-2xl font-bold text-foreground">{collection.stats.photos}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-text-secondary mb-1">Collectors</p>
                    <p className="text-2xl font-bold text-foreground">{collection.stats.collectors}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-text-secondary mb-1">Ξ Volume</p>
                    <p className="text-2xl font-bold text-foreground">{collection.stats.volume}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href={collection.links.viewCollection} variant="primary">
                    View Collection
                  </Button>
                  {collection.links.marketplace && (
                    <CustomLink
                      href={collection.links.marketplace}
                      external
                      className="inline-flex items-center justify-center px-8 py-3 rounded-md font-medium border-2 border-accent text-accent hover:bg-accent hover:text-background transition-custom"
                    >
                      View on Marketplace
                    </CustomLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
