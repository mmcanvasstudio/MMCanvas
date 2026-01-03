import ScrollReveal from '@/components/ui/scroll-reveal';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechVision Electronics',
    content: 'MMCanvas delivered exceptional product photography for our new gaming controller launch. Their attention to detail and understanding of lighting transformed our products into art.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Brand Manager',
    company: 'LuxeBeauty Cosmetics',
    content: 'Working with MMCanvas was a game-changer for our beauty brand. The nail polish and skincare shots exceeded our expectations. Every detail was perfectly captured.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'DataStore Solutions',
    content: 'The photography for our storage devices was outstanding. MMCanvas understands how to showcase tech products with precision and style. Highly recommend!',
    rating: 5,
  },
];

/**
 * Testimonials section showcasing client feedback
 */
export default function TestimonialsSection(): JSX.Element {
  return (
    <section className="py-24 bg-gray-dark">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-text-secondary text-lg">
              What our clients say about working with us
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <div className="bg-background p-8 rounded-lg border border-gray-medium hover:border-accent transition-custom">
                <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
                <p className="text-text-secondary text-base mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t border-gray-medium pt-4">
                  <p className="text-foreground font-semibold">{testimonial.name}</p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
