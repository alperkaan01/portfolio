import './about.css';

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__badge">
            <span className="about-hero__badge-icon">👋</span>
            <span>Nice to meet you</span>
          </div>
          <h1 className="about-hero__title">
            The Builder Behind
            <br />
            <span className="about-hero__title-highlight">the Automation</span>
          </h1>
          <p className="about-hero__subtitle">
            Crafting intelligent systems that bridge the gap between human creativity and machine efficiency.
          </p>
        </div>
      </section>
    </main>
  );
}
