import Image from 'next/image';
import './personal-intro.css';

export default function PersonalIntro() {
  return (
    <section className="personal-intro">
      <div className="personal-intro__container">
        <div className="personal-intro__content">
          <div className="personal-intro__header">
            <span className="personal-intro__label">// ABOUT ME</span>
            <div className="personal-intro__greeting">
              <span className="personal-intro__emoji">👋</span>
              <h1 className="personal-intro__greeting-text">Hi, I&apos;m Alper</h1>
            </div>
          </div>

          <div className="personal-intro__text">
            <p className="personal-intro__lead">
              A developer who finds joy in the intersection of design and functionality.
            </p>
            <p>
              I believe the best solutions come from curiosity and iteration. Whether it&apos;s
              building AI-powered tools, automating workflows, or experimenting with web animations,
              I&apos;m driven by one question: <em>&quot;What if we tried it differently?&quot;</em>
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              sipping specialty coffee, or getting lost in a good sci-fi novel.
            </p>
          </div>
        </div>

        <div className="personal-intro__image-wrapper">
          <Image
            src="/assets/guitar-pp.png"
            alt="Alper playing guitar"
            width={400}
            height={400}
            priority
            className="personal-intro__image"
          />
        </div>
      </div>
    </section>
  );
}
