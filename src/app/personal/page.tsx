'use client';

import Image from 'next/image';
import galleryData from '@/data/gallery.json';

export default function PersonalPage(): JSX.Element {
  // Get personal images
  const personalImages = galleryData.galleryItems
    .filter((item) => item.category === 'Personal')
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Personal Photography
          </h1>
          <p className="text-lg text-text-secondary">
            Portraits and lifestyle photography capturing authentic moments and personalities
          </p>
        </div>
      </section>

      {/* Gallery - Bryan Minear Style */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalImages.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-gray-dark rounded-sm ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{
                  aspectRatio: index === 0 ? '16/10' : '4/5',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.description || item.title}
                  fill
                  priority={index < 3}
                  sizes={
                    index === 0
                      ? '(max-width: 768px) 100vw, 66vw'
                      : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  }
                  className="object-cover transition-all duration-700 ease-in-out hover:grayscale hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
