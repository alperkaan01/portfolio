import './hero-new.css';
import { ThemeImage } from './theme-image';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-new">
      <div className="hero-new__container">
        {/* Left Column - Content */}
        <div className="hero-new__content">
          <div className="hero-new__badge">
            <Sparkles className="hero-new__badge-icon" />
            <span>Automation & AI Expert</span>
          </div>

          <h1 className="hero-new__headline">
            Automation & AI Systems
          </h1>

          <h2 className="hero-new__subheadline">
            for <span className="hero-new__accent">Real-World</span> Productivity
          </h2>

          <p className="hero-new__description">
            I help businesses streamline operations and integrate AI using n8n, OpenAI, and custom LLM solutions.
          </p>

          <div className="hero-new__cta-group">
            <Link href="#contact" className="hero-new__cta-primary">
              Let's Talk
              <ArrowRight className="hero-new__cta-icon" />
            </Link>
            <Link href="#projects" className="hero-new__cta-secondary">
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="hero-new__visual">
          <div className="hero-new__image-wrapper">
            {/* Abstract blob background */}
            <div className="hero-new__blob"></div>

            {/* Profile Image */}
            <div className="hero-new__image-container">
              <ThemeImage
                lightSrc="/assets/light-pp.png"
                darkSrc="/assets/dark-pp.png"
                alt="Alper Odabasoglu - Automation & AI Systems Expert"
                width={400}
                height={400}
                className="hero-new__image"
                priority
              />
            </div>

            {/* Floating Metric Card */}
            <div className="hero-new__metric-card">
              <div className="hero-new__metric-value">99%</div>
              <div className="hero-new__metric-label">Automation Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
