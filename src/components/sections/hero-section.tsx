import Button from '@/components/ui/button';
import { heroContent } from '@/constants/content';

/**
 * Hero section component with introduction and CTA buttons
 */
export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-gray-dark to-background pt-20">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
            Quick links:
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {heroContent.greeting}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-4">
            {heroContent.role}
          </p>
          <p className="text-base text-text-secondary mb-12">
            based in {heroContent.location}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {heroContent.buttons.map((button) => (
              <Button key={button.label} href={button.href} variant={button.variant}>
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-secondary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
