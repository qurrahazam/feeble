import {
  HeroSection,
  CloudLayer,
  BirdsVector,
  BirdsIllustration,
  EllipseBg,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <EllipseBg />
      <HeroSection />
      <CloudLayer />
      <BirdsVector />
      <BirdsIllustration />
    </main>
  );
}
