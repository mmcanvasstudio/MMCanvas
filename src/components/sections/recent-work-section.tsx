'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/lightbox';

interface RecentWorkItem {
  id: string;
  title: string;
  image: string;
  category: string;
  link: string;
}

const recentWorkItems: RecentWorkItem[] = [
  {
    id: '1',
    title: 'Edge Gaming Controller',
    image: '/images/products/EdgeController_ExpandView.webp',
    category: 'Tech & Electronics',
    link: '/work/edge-controller',
  },
  {
    id: '2',
    title: 'Lexar Storage Device',
    image: '/images/products/Lexar.webp',
    category: 'Tech & Electronics',
    link: '/work/lexar-storage',
  },
  {
    id: '3',
    title: 'Premium Nail Polish - Rose',
    image: '/images/products/NailPolish_1.webp',
    category: 'Beauty & Cosmetics',
    link: '/work/nail-polish-1',
  },
  {
    id: '4',
    title: 'Ponds Skincare Cream',
    image: '/images/products/Ponds.webp',
    category: 'Beauty & Cosmetics',
    link: '/work/ponds-skincare',
  },
  {
    id: '5',
    title: 'Vibrant Nail Polish Collection',
    image: '/images/products/NailPolish_2.webp',
    category: 'Beauty & Cosmetics',
    link: '/work/nail-polish-2',
  },
  {
    id: '6',
    title: 'Gaming Controller - Detail Shot',
    image: '/images/products/EdgeController_ExpandView.webp',
    category: 'Tech & Electronics',
    link: '/work/edge-controller-detail',
  },
  {
    id: '7',
    title: 'Lexar Tech Accessories',
    image: '/images/products/Lexar.webp',
    category: 'Tech & Electronics',
    link: '/work/lexar-accessories',
  },
  {
    id: '8',
    title: 'Beauty Essentials - Skincare',
    image: '/images/products/Ponds.webp',
    category: 'Beauty & Cosmetics',
    link: '/work/beauty-essentials',
  },
  {
    id: '9',
    title: 'Nail Polish Studio Shot',
    image: '/images/products/NailPolish_1.webp',
    category: 'Beauty & Cosmetics',
    link: '/work/nail-polish-studio',
  },
  {
    id: '10',
    title: 'High-Performance Storage',
    image: '/images/products/Lexar.webp',
    category: 'Tech & Electronics',
    link: '/work/storage-solutions',
  },
  {
    id: '11',
    title: 'Nail Polish - Color Variety',
    image: '/images/products/NailPolish_2.webp',
    category: 'Beauty & Cosmetics',
    link: '/work/nail-polish-variety',
  },
  {
    id: '12',
    title: 'Tech Gaming Gear',
    image: '/images/products/EdgeController_ExpandView.webp',
    category: 'Tech & Electronics',
    link: '/work/gaming-gear',
  },
];

/**
 * Recent Work section displaying portfolio gallery with lightbox and filters
 */
export default function RecentWorkSection(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const categories = ['All', 'Tech & Electronics', 'Beauty & Cosmetics'];

  const filteredItems = selectedCategory === 'All'
    ? recentWorkItems
    : recentWorkItems.filter(item => item.category === selectedCategory);

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
                alt={item.title}
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
