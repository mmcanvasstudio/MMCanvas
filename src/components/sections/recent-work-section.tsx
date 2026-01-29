'use client';

import Image from 'next/image';
import galleryData from '@/data/gallery.json';

interface RecentWorkItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

/**
 * Recent Work section displaying 9 latest portfolio images
 */
export default function RecentWorkSection(): JSX.Element {
  // Import gallery items from JSON and show only first 9
  const recentWorkItems: RecentWorkItem[] = galleryData.galleryItems.slice(0, 9);

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            RECENT WORK
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            A selection of our latest product photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentWorkItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-medium rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.description || item.title}
                fill
                priority={index < 3}
                loading={index < 3 ? undefined : 'lazy'}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:scale-110 hover-grayscale"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
