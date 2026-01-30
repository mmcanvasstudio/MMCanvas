import CustomLink from '@/components/ui/link';
import { contactInfo } from '@/constants/content';

/**
 * Contact section with phone, email, and location information
 */
export default function ContactSection(): JSX.Element {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-text-secondary">
            Ready to elevate your product visuals? Let&apos;s create something beautiful together.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-dark rounded-lg p-8">
              <h3 className="text-xs uppercase font-semibold text-text-secondary mb-3">
                Phone
              </h3>
              <CustomLink
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                external
                className="text-xl font-medium text-foreground hover:text-accent"
              >
                {contactInfo.phone}
              </CustomLink>
            </div>
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
