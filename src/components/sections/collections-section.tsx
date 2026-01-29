import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { collections } from '@/constants/content';

/**
 * Collections section showcasing Food, Product, and Personal photography
 */
export default function CollectionsSection(): JSX.Element {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              COLLECTIONS
            </h2>
            <p className="text-text-secondary text-lg">
              Curated showcases of our finest work
            </p>
          </div>
        </ScrollReveal>
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <ScrollReveal key={collection.id} delay={index * 100}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <Link
                  href={collection.links.viewCollection}
                  className={`group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-medium shadow-2xl cursor-pointer block ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-custom" />
                </Link>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Link href={collection.links.viewCollection}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-custom cursor-pointer">
                      {collection.title}
                    </h3>
                  </Link>
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
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
