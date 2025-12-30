import Image from 'next/image';
import Link from 'next/link';

interface RecentWorkItem {
  id: string;
  title: string;
  image: string;
  category: string;
  link: string;
  aspectRatio: 'tall' | 'wide' | 'square' | 'portrait';
}

const recentWorkItems: RecentWorkItem[] = [
  {
    id: '1',
    title: 'Chocolate Milkshake',
    image: '/images/Photography/Chocolate_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/chocolate-milkshake',
    aspectRatio: 'tall',
  },
  {
    id: '2',
    title: 'Coffee Scoop',
    image: '/images/Photography/Coffee_Scoop.jpg',
    category: 'Desserts',
    link: '/work/coffee-scoop',
    aspectRatio: 'square',
  },
  {
    id: '3',
    title: 'Cookies & Cream Milkshake',
    image: '/images/Photography/CookiesCream_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/cookies-cream-milkshake',
    aspectRatio: 'portrait',
  },
  {
    id: '4',
    title: 'Strawberry Scoop',
    image: '/images/Photography/Strawberry_Scoop.jpg',
    category: 'Desserts',
    link: '/work/strawberry-scoop',
    aspectRatio: 'wide',
  },
  {
    id: '5',
    title: 'Kiwi Milkshake',
    image: '/images/Photography/Kiwi_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/kiwi-milkshake',
    aspectRatio: 'tall',
  },
  {
    id: '6',
    title: 'Red Velvet',
    image: '/images/Photography/Redvelvet.jpg',
    category: 'Desserts',
    link: '/work/red-velvet',
    aspectRatio: 'square',
  },
  {
    id: '7',
    title: 'Pineapple Milkshake',
    image: '/images/Photography/Pineapple_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/pineapple-milkshake',
    aspectRatio: 'portrait',
  },
  {
    id: '8',
    title: 'Masala French Fries',
    image: '/images/Photography/Masala_FrenchFires.jpg',
    category: 'Snacks',
    link: '/work/masala-fries',
    aspectRatio: 'wide',
  },
  {
    id: '9',
    title: 'Veggie Lollipops',
    image: '/images/Photography/VeggieLollipops.jpg',
    category: 'Snacks',
    link: '/work/veggie-lollipops',
    aspectRatio: 'square',
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
            A selection of our latest food photography showcasing delicious moments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] [grid-auto-flow:dense]">
          {recentWorkItems.map((item) => {
            const aspectClasses = {
              tall: 'row-span-1 col-span-1 md:row-span-2 md:col-span-1',
              wide: 'row-span-1 col-span-1 md:row-span-1 md:col-span-2',
              square: 'row-span-1 col-span-1',
              portrait: 'row-span-1 col-span-1 md:row-span-2 md:col-span-1',
            };

            return (
              <Link
                key={item.id}
                href={item.link}
                className={`group relative overflow-hidden bg-gray-medium cursor-pointer ${
                  aspectClasses[item.aspectRatio]
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                />
              </Link>
            );
          })}
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
