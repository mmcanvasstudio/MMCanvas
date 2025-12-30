import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import { journalPosts } from '@/constants/content';

/**
 * Journal section displaying recent blog posts
 */
export default function JournalSection(): JSX.Element {
  return (
    <section className="py-24 bg-gray-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Recent Journal Entries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {journalPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
        <div className="text-center">
          <Button href="/journal" variant="secondary">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
