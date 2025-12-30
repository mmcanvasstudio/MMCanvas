import Image from 'next/image';
import Link from 'next/link';

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
    title: 'Mountain Vista',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop',
    category: 'Landscape',
    link: '/work/mountain-vista',
  },
  {
    id: '2',
    title: 'Forest Path',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1000&fit=crop',
    category: 'Nature',
    link: '/work/forest-path',
  },
  {
    id: '3',
    title: 'Misty Morning',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1000&fit=crop',
    category: 'Atmospheric',
    link: '/work/misty-morning',
  },
  {
    id: '4',
    title: 'Desert Dunes',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=1000&fit=crop',
    category: 'Landscape',
    link: '/work/desert-dunes',
  },
  {
    id: '5',
    title: 'Coastal Sunset',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=1000&fit=crop',
    category: 'Seascape',
    link: '/work/coastal-sunset',
  },
  {
    id: '6',
    title: 'Winter Landscape',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=1000&fit=crop',
    category: 'Winter',
    link: '/work/winter-landscape',
  },
  {
    id: '7',
    title: 'Alpine Lake',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=1000&fit=crop',
    category: 'Landscape',
    link: '/work/alpine-lake',
  },
  {
    id: '8',
    title: 'Storm Clouds',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=1000&fit=crop',
    category: 'Atmospheric',
    link: '/work/storm-clouds',
  },
  {
    id: '9',
    title: 'Golden Hour',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=1000&fit=crop',
    category: 'Nature',
    link: '/work/golden-hour',
  },
];

/**
 * Recent Work section displaying portfolio gallery
 */
export default function RecentWorkSection(): JSX.Element {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            RECENT WORK
          </h2>
          <p className="text-text-secondary text-lg">
            A selection of my latest atmospheric landscape photography
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentWorkItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-medium cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 rounded-md font-medium bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-custom"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
