import Hero from '@/components/custom/hero/hero';
import MarqueeSection from '@/components/custom/marquee-section/marquee-section';
import AskInput from '@/components/custom/ask-input/ask-input';

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeSection />
      <AskInput />
    </main>
  );
}

