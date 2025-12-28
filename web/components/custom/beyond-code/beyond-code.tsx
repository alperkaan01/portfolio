'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './beyond-code.css';

gsap.registerPlugin(ScrollTrigger);

interface Interest {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

const interests: Interest[] = [
  {
    icon: '🎸',
    title: 'Music & Guitar',
    description: 'Playing guitar is my creative outlet. There\'s something meditative about learning a new piece or improvising late at night.',
    highlights: [
      'Acoustic & electric guitar',
      'Fingerstyle enthusiast',
      'Always learning new techniques'
    ]
  },
  {
    icon: '☕',
    title: 'Specialty Coffee',
    description: 'A good cup of coffee is the foundation of a productive day. I love exploring different brewing methods and bean origins.',
    highlights: [
      'Pour-over coffee rituals',
      'Exploring single-origin beans',
      'Perfect espresso pursuit'
    ]
  },
  {
    icon: '📚',
    title: 'Sci-Fi & Books',
    description: 'Science fiction expands my imagination and often inspires my approach to technology and problem-solving.',
    highlights: [
      'Hard sci-fi lover',
      'Asimov to Liu Cixin',
      'Always have a book going'
    ]
  }
];

export default function BeyondCode() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.interest-card');

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="beyond-code" ref={sectionRef}>
      <div className="beyond-code__container">
        <div className="beyond-code__header">
          <span className="beyond-code__label">// BEYOND THE CODE</span>
          <h2 className="beyond-code__title">More Than Just Tech</h2>
          <p className="beyond-code__subtitle">
            When I'm not building software, you'll find me exploring these passions
          </p>
        </div>

        <div className="beyond-code__grid">
          {interests.map((interest, idx) => (
            <div key={idx} className="interest-card">
              <div className="interest-card__icon">{interest.icon}</div>
              <h3 className="interest-card__title">{interest.title}</h3>
              <p className="interest-card__description">{interest.description}</p>

              <div className="interest-card__highlights">
                {interest.highlights.map((highlight, i) => (
                  <div key={i} className="interest-card__highlight">
                    <span className="interest-card__highlight-dot"></span>
                    <span className="interest-card__highlight-text">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
