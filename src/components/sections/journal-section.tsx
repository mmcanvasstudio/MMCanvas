import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { journalPosts } from '@/constants/content';

/**
 * Journal section displaying recent blog posts
 */
export default function JournalSection(): JSX.Element {
  return (
    <section className="py-24 bg-gray-dark">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Journal Entries
            </h2>
            <p className="text-text-secondary text-lg">
              Insights, tips & behind the scenes
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {journalPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <Card
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                link={post.link}
              />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center">
            <Button href="/journal" variant="secondary">
              View All Posts
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
