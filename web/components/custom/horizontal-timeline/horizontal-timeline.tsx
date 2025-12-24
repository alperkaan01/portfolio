'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './horizontal-timeline.css';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  company?: string;
  description: string;
  achievements: string[];
  tags: string[];
}

const experiences: TimelineEvent[] = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Started my journey in computer science, learning the fundamentals of programming and software development.',
    achievements: [
      'Built first Python program',
      'Learned data structures & algorithms',
      'Participated in first hackathon'
    ],
    tags: ['Python', 'Learning', 'Foundations']
  },
  {
    year: '2017',
    title: 'Web Developer',
    company: 'First Startup',
    description: 'Joined a startup as a full-stack developer, building modern web applications with React and Node.js.',
    achievements: [
      'Developed 5+ production web apps',
      'Implemented REST APIs',
      'Led frontend architecture'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack']
  },
  {
    year: '2019',
    title: 'AI Engineer',
    company: 'Tech Company',
    description: 'Transitioned to AI/ML engineering, building intelligent systems and recommendation engines.',
    achievements: [
      'Built recommendation system',
      'Deployed ML models to production',
      'Processed 1M+ data points daily'
    ],
    tags: ['Python', 'TensorFlow', 'ML', 'Data Science']
  },
  {
    year: '2021',
    title: 'Senior Engineer',
    company: 'Scale-up',
    description: 'Scaled systems to handle millions of users, focusing on cloud infrastructure and DevOps practices.',
    achievements: [
      'Reduced infrastructure costs by 40%',
      'Built CI/CD pipelines',
      'Led team of 5 engineers'
    ],
    tags: ['AWS', 'Docker', 'Kubernetes', 'DevOps']
  },
  {
    year: '2023',
    title: 'AI Automation Lead',
    company: 'Current',
    description: 'Leading AI automation initiatives, integrating LLMs and building intelligent agent systems.',
    achievements: [
      'Built AI agent platform',
      'Integrated GPT-4 & Claude',
      'Automated 70% of workflows'
    ],
    tags: ['LLMs', 'AI Agents', 'Next.js', 'Automation']
  },
  {
    year: '2024',
    title: 'The Future',
    description: 'Continuing to push boundaries in AI automation, building systems that augment human creativity.',
    achievements: [
      'Exploring multi-agent systems',
      'Building open-source tools',
      'Mentoring next generation'
    ],
    tags: ['Innovation', 'Leadership', 'Impact']
  }
];

export default function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    const timeline = timelineRef.current;
    const cards = timeline.querySelectorAll('.timeline-card');

    // Calculate total scroll width
    const getScrollAmount = () => {
      const timelineWidth = timeline.scrollWidth;
      return -(timelineWidth - window.innerWidth);
    };

    const ctx = gsap.context(() => {
      // Main horizontal scroll animation
      const scrollTween = gsap.to(timeline, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${timeline.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate individual cards
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: 'left 80%',
            end: 'left 50%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        });
      });

      // Animate progress line
      const progressLine = timeline.querySelector('.timeline-progress');
      if (progressLine) {
        gsap.fromTo(
          progressLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: () => `+=${timeline.scrollWidth - window.innerWidth}`,
              scrub: 1,
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="horizontal-timeline" ref={containerRef}>
      <div className="horizontal-timeline__header">
        <span className="horizontal-timeline__label">// TIMELINE</span>
        <h2 className="horizontal-timeline__title">
          My Journey
          <span className="horizontal-timeline__arrow">→</span>
        </h2>
      </div>

      <div className="horizontal-timeline__wrapper" ref={timelineRef}>
        {/* Progress Line */}
        <div className="timeline-progress"></div>

        {/* Timeline Cards */}
        <div className="timeline-cards">
          {experiences.map((event, index) => (
            <div key={index} className="timeline-card">
              <div className="timeline-card__header">
                <div className="timeline-card__year">{event.year}</div>
                {event.company && (
                  <div className="timeline-card__company">{event.company}</div>
                )}
              </div>

              <h3 className="timeline-card__title">{event.title}</h3>
              <p className="timeline-card__description">{event.description}</p>

              <div className="timeline-card__achievements">
                <h4 className="timeline-card__achievements-title">Key Achievements</h4>
                <ul className="timeline-card__achievements-list">
                  {event.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="timeline-card__tags">
                {event.tags.map((tag, i) => (
                  <span key={i} className="timeline-card__tag">{tag}</span>
                ))}
              </div>

              {/* Connection dot */}
              <div className="timeline-card__dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
