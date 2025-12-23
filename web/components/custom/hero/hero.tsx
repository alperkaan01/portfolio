import './hero.css';
import { GradientText } from '@/components/ui/gradient-text';
import { ThemeImage } from './theme-image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <ThemeImage
          lightSrc="/assets/light-pp.png"
          darkSrc="/assets/dark-pp.png"
          alt="Alper Odabasoglu Profile"
          width={300}
          height={300}
          className="hero__image"
          priority
        />
      </div>
      <h1 className="hero__title">Automation & AI Systems</h1>
      <h2 className="hero__subtitle">
        for <GradientText
          text="Real-World"
          gradient="var(--gradient-brand)"
          className="hero__highlight"
        /> Productivity
      </h2>
      <p className="hero__description">
        I help businesses streamline operations and integrate AI using n8n, OpenAI, and custom LLM solutions.
      </p>
    </section>
  );
}

