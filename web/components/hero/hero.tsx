import './hero.css';
import { GradientText } from '@/components/ui/gradient-text';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Automation & AI Systems</h1>
      <h2 className="hero__subtitle">
        for <GradientText 
          text="Real-World" 
          gradient="linear-gradient(90deg, #2563EB 0%, #06B6D4 50%, #2563EB 100%)"
          className="hero__highlight"
        /> Productivity
      </h2>
      <p className="hero__description">
        I help businesses streamline operations and integrate AI using n8n, OpenAI, and custom LLM solutions.
      </p>
    </section>
  );
}

