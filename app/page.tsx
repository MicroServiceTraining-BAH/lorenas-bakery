import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MenuPreview from '@/components/MenuPreview';
import GalleryGrid from '@/components/GalleryGrid';
import LocationSection from '@/components/LocationSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuPreview />
      <GalleryGrid />
      <LocationSection />
    </>
  );
}
