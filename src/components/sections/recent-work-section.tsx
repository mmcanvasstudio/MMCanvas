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
    title: 'Chocolate Milkshake',
    image: '/images/Photography/Chocolate_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/chocolate-milkshake',
  },
  {
    id: '2',
    title: 'Coffee Scoop',
    image: '/images/Photography/Coffee_Scoop.jpg',
    category: 'Desserts',
    link: '/work/coffee-scoop',
  },
  {
    id: '3',
    title: 'Cookies & Cream Milkshake',
    image: '/images/Photography/CookiesCream_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/cookies-cream-milkshake',
  },
  {
    id: '4',
    title: 'Strawberry Scoop',
    image: '/images/Photography/Strawberry_Scoop.jpg',
    category: 'Desserts',
    link: '/work/strawberry-scoop',
  },
  {
    id: '5',
    title: 'Kiwi Milkshake',
    image: '/images/Photography/Kiwi_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/kiwi-milkshake',
  },
  {
    id: '6',
    title: 'Red Velvet',
    image: '/images/Photography/Redvelvet.jpg',
    category: 'Desserts',
    link: '/work/red-velvet',
  },
  {
    id: '7',
    title: 'Pineapple Milkshake',
    image: '/images/Photography/Pineapple_Milkshake.jpg',
    category: 'Beverages',
    link: '/work/pineapple-milkshake',
  },
  {
    id: '8',
    title: 'Masala French Fries',
    image: '/images/Photography/Masala_FrenchFires.jpg',
    category: 'Snacks',
    link: '/work/masala-fries',
  },
  {
    id: '9',
    title: 'Veggie Lollipops',
    image: '/images/Photography/VeggieLollipops.jpg',
    category: 'Snacks',
    link: '/work/veggie-lollipops',
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
