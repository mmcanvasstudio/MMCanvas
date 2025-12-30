import CustomLink from '@/components/ui/link';
import { contactInfo } from '@/constants/content';

/**
 * Contact section with email and location information
 */
export default function ContactSection(): JSX.Element {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Got an idea for a project? Let's make it happen!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-dark rounded-lg p-8">
              <h3 className="text-xs uppercase font-semibold text-text-secondary mb-3">
                E-mail
              </h3>
              <CustomLink
                href={`mailto:${contactInfo.email}`}
                external
                className="text-xl font-medium text-foreground hover:text-accent"
              >
                {contactInfo.email}
              </CustomLink>
            </div>
            <div className="bg-gray-dark rounded-lg p-8">
              <h3 className="text-xs uppercase font-semibold text-text-secondary mb-3">
                Location
              </h3>
              <p className="text-xl font-medium text-foreground">
                {contactInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
