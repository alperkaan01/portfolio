'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './quick-stats.css';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '3', label: 'Core Specializations' },
];

export default function QuickStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const statItems = sectionRef.current.querySelectorAll('.stat-item');

    const ctx = gsap.context(() => {
      gsap.fromTo(statItems,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="quick-stats" ref={sectionRef}>
      <div className="quick-stats__container">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <div className="stat-item__value">{stat.value}</div>
            <div className="stat-item__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
