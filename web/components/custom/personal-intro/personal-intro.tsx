import Image from 'next/image';
import './personal-intro.css';

export default function PersonalIntro() {
  return (
    <section className="personal-intro">
      <div className="personal-intro__container">
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

        <div className="personal-intro__content">
          <div className="personal-intro__greeting">
            <span className="personal-intro__emoji">👋</span>
            <span className="personal-intro__greeting-text">Hi, I&apos;m Alper</span>
          </div>

          <div className="personal-intro__text">
            <p>
              I&apos;m a developer who finds joy in the intersection of design and functionality.
              When I&apos;m not crafting interfaces or automating workflows, you&apos;ll find me
              exploring new technologies, sipping specialty coffee, or getting lost in a good sci-fi novel.
            </p>
            <p>
              I believe the best solutions come from curiosity and iteration. Whether it&apos;s
              building AI-powered tools or experimenting with the latest web animations, I&apos;m
              driven by the question: &quot;What if we tried it differently?&quot;
            </p>
            <p>
              This is my space to share what I&apos;ve built, what I&apos;m learning, and the
              journey that brought me here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
