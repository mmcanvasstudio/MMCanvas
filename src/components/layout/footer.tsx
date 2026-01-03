import CustomLink from '@/components/ui/link';
import { contactInfo, socialLinks, copyrightText } from '@/constants/content';

/**
 * Footer component with contact information and social links
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-dark border-t border-gray-medium py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">@MMCANVASSTUDIO</h3>
            <p className="text-text-secondary text-sm">
              Food & Product Photography Studio
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase">Contact</h4>
            <p className="text-text-secondary text-sm mb-2">
              <CustomLink href={`mailto:${contactInfo.email}`} external>
                {contactInfo.email}
              </CustomLink>
            </p>
            <p className="text-text-secondary text-sm">{contactInfo.location}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase">Follow</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <CustomLink
                    href={link.url}
                    external
                    className="text-text-secondary text-sm hover:text-accent"
                  >
                    {link.platform}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-medium pt-8">
          <p className="text-text-secondary text-sm text-center">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
