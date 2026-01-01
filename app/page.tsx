import {
  HeroSection,
  CloudLayer,
  BirdsVector,
  BirdsIllustration,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <HeroSection />
      <CloudLayer />
      <BirdsVector />
      <BirdsIllustration />
    </main>
  );
}
