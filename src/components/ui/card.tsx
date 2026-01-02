import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

/**
 * Card component for journal posts
 */
export default function Card({ title, excerpt, image, link }: CardProps): JSX.Element {
  return (
    <article className="group cursor-pointer transition-custom hover:transform hover:scale-[1.02]">
      <Link href={link} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-gray-medium">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-custom group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-custom">
          {title}
        </h3>
        <p className="text-text-secondary text-base mb-4 line-clamp-3">
          {excerpt}
        </p>
        <span className="text-accent font-medium inline-flex items-center group-hover:underline">
          Read More →
        </span>
      </Link>
    </article>
  );
}
