import HeroSection from '@/components/sections/hero-section';
import RecentWorkSection from '@/components/sections/recent-work-section';
import CollectionsSection from '@/components/sections/collections-section';
import JournalSection from '@/components/sections/journal-section';
import ContactSection from '@/components/sections/contact-section';

/**
 * Home page component
 */
export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <RecentWorkSection />
      <CollectionsSection />
      <JournalSection />
      <ContactSection />
    </>
  );
}
