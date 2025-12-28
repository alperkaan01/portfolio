'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './skills-section.css';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  logo?: string;
  level?: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'AI & Automation',
    icon: '🤖',
    skills: [
      { name: 'Claude', logo: '/assets/claude-logo.png', level: 'expert' },
      { name: 'ChatGPT', logo: '/assets/openai-logo.png', level: 'expert' },
      { name: 'Gemini', level: 'expert' },
      { name: 'LangChain', level: 'advanced' },
      { name: 'AI Agents', level: 'expert' },
      { name: 'n8n', logo: '/assets/n8n-logo.png', level: 'advanced' },
      { name: 'MCP', logo: '/assets/mcp-logo.png', level: 'advanced' },
    ]
  },
  {
    title: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'Next.js', logo: '/assets/nextjs-logo.png', level: 'expert' },
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'GSAP', level: 'advanced' },
      { name: 'Framer Motion', level: 'advanced' },
    ]
  },
  {
    title: 'Backend & Data',
    icon: '⚙️',
    skills: [
      { name: 'Python', logo: '/assets/python-logo.png', level: 'expert' },
      { name: 'FastAPI', logo: '/assets/fastapi-logo.svg', level: 'expert' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'Supabase', logo: '/assets/supabase-logo.png', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'AWS', logo: '/assets/aws-logo.png', level: 'advanced' },
      { name: 'Vercel', logo: '/assets/vercel-logo.png', level: 'expert' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Git', level: 'expert' },
      { name: 'CI/CD', level: 'advanced' },
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    skills: [
      { name: 'Claude Code', logo: '/assets/claude-logo.png', level: 'expert' },
      { name: 'Cursor', logo: '/assets/cursor-logo.png', level: 'expert' },
      { name: 'VS Code', level: 'expert' },
      { name: 'Figma', level: 'advanced' },
      { name: 'Linear', level: 'advanced' },
      { name: 'Notion', level: 'advanced' },
    ]
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const categories = sectionRef.current.querySelectorAll('.skills-category');

    const ctx = gsap.context(() => {
      categories.forEach((category, index) => {
        // Animate category cards
        gsap.fromTo(category,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: category,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Animate skill items with stagger
        const skills = category.querySelectorAll('.skill-item');
        gsap.fromTo(skills,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.05,
            delay: index * 0.1 + 0.2,
            scrollTrigger: {
              trigger: category,
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
    <section className="skills-section" ref={sectionRef}>
      <div className="skills-section__container">
        <div className="skills-section__header">
          <span className="skills-section__label">// EXPERTISE</span>
          <h2 className="skills-section__title">Skills & Tools</h2>
          <p className="skills-section__subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-section__grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skills-category">
              <div className="skills-category__header">
                <span className="skills-category__icon">{category.icon}</span>
                <h3 className="skills-category__title">{category.title}</h3>
              </div>

              <div className="skills-category__items">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    {skill.logo ? (
                      <div className="skill-item__logo">
                        <Image
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          width={24}
                          height={24}
                          className="skill-item__logo-image"
                        />
                      </div>
                    ) : (
                      <div className="skill-item__dot"></div>
                    )}
                    <span className="skill-item__name">{skill.name}</span>
                    {skill.level && (
                      <span className={`skill-item__level skill-item__level--${skill.level}`}>
                        {skill.level}
                      </span>
                    )}
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
