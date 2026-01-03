'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/lightbox';
import galleryData from '@/data/gallery.json';

interface RecentWorkItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

/**
 * Recent Work section displaying portfolio gallery with lightbox and filters
 */
export default function RecentWorkSection(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Import gallery items from JSON
  const recentWorkItems: RecentWorkItem[] = galleryData.galleryItems;

  // Memoize categories to avoid recalculation on every render
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(recentWorkItems.map(item => item.category)));
    return ['All', ...uniqueCategories];
  }, [recentWorkItems]);

  // Memoize filtered items for performance
  const filteredItems = useMemo(
    () => selectedCategory === 'All'
      ? recentWorkItems
      : recentWorkItems.filter(item => item.category === selectedCategory),
    [selectedCategory, recentWorkItems]
  );

  const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = (): void => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (): void => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

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
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-custom ${
                  selectedCategory === category
                    ? 'bg-accent text-background'
                    : 'bg-gray-dark text-text-secondary hover:text-foreground hover:bg-gray-medium'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(index)}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-medium cursor-pointer rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.description || item.title}
                fill
                priority={index < 3}
                loading={index < 3 ? undefined : 'lazy'}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-custom">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-foreground font-semibold text-lg mb-1">{item.title}</p>
                  <p className="text-text-secondary text-sm">{item.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-custom">
                <div className="bg-accent text-background p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Showing {filteredItems.length} of {recentWorkItems.length} projects
          </p>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={filteredItems[selectedImageIndex]?.image || ''}
        imageAlt={filteredItems[selectedImageIndex]?.title || ''}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
