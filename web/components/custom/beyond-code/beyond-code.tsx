'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './beyond-code.css';

gsap.registerPlugin(ScrollTrigger);

interface Interest {
  image: string;
  title: string;
  description: string;
  highlights: string[];
}

/**
 * TODO: Replace placeholder images with unique images for each interest
 *
 * Current state: All three interests use the same guitar image (/assets/guitar-play-pp.png)
 *
 * Required unique images:
 * 1. Music & Guitar: /assets/guitar-play-pp.png (current - OK)
 * 2. Specialty Coffee: /assets/coffee-pp.png (NEEDED - replace with coffee/brewing image)
 * 3. Sci-Fi & Books: /assets/books-pp.png (NEEDED - replace with reading/sci-fi image)
 *
 * Image style: Keep consistent with guitar image (Disney-style illustration, warm tones)
 * Dimensions: 400x400px, optimized for web
 */
const interests: Interest[] = [
  {
    image: '/assets/guitar-play-pp.png',
    title: 'Music & Guitar',
    description: 'Playing guitar is my creative outlet. There\'s something meditative about learning a new piece or improvising late at night.',
    highlights: [
      'Acoustic & electric guitar',
      'Fingerstyle enthusiast',
      'Always learning new techniques'
    ]
  },
  {
    image: '/assets/guitar-play-pp.png', // TODO: Replace with /assets/coffee-pp.png
    title: 'Specialty Coffee',
    description: 'A good cup of coffee is the foundation of a productive day. I love exploring different brewing methods and bean origins.',
    highlights: [
      'Pour-over coffee rituals',
      'Exploring single-origin beans',
      'Perfect espresso pursuit'
    ]
  },
  {
    image: '/assets/guitar-play-pp.png', // TODO: Replace with /assets/books-pp.png
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

    const items = sectionRef.current.querySelectorAll('.interest-item');

    const ctx = gsap.context(() => {
      items.forEach((item, index) => {
        const image = item.querySelector('.interest-item__image-wrapper');
        const content = item.querySelector('.interest-item__content');

        // Animate image
        gsap.fromTo(image,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Animate content
        gsap.fromTo(content,
          {
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
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
          <div className="beyond-code__header-content">
            <span className="beyond-code__label">// BEYOND THE CODE</span>
            <h2 className="beyond-code__title">More Than Just Tech</h2>
            <p className="beyond-code__subtitle">
              When I'm not building software, you'll find me exploring these passions
            </p>
          </div>
        </div>

        <div className="beyond-code__content">
          {interests.map((interest, idx) => (
            <div key={idx} className={`interest-item ${idx % 2 === 1 ? 'interest-item--reverse' : ''}`}>
              <div className="interest-item__image-wrapper">
                <Image
                  src={interest.image}
                  alt={interest.title}
                  width={400}
                  height={400}
                  className="interest-item__image"
                />
              </div>

              <div className="interest-item__content">
                <h3 className="interest-item__title">{interest.title}</h3>
                <p className="interest-item__description">{interest.description}</p>

                <div className="interest-item__highlights">
                  {interest.highlights.map((highlight, i) => (
                    <div key={i} className="interest-item__highlight">
                      <span className="interest-item__highlight-dot"></span>
                      <span className="interest-item__highlight-text">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
