'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './skills-section.css';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  logo?: string;
  level?: 'expert' | 'advanced' | 'intermediate';
  featured?: boolean;
}

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'AI & Automation',
    icon: '🤖',
    description: 'Building intelligent solutions with cutting-edge AI tools',
    skills: [
      { name: 'Claude', logo: '/assets/claude-logo.png', level: 'expert', featured: true },
      { name: 'ChatGPT', logo: '/assets/openai-logo.png', level: 'expert', featured: true },
      { name: 'n8n', logo: '/assets/n8n-logo.png', level: 'advanced', featured: true },
      { name: 'MCP', logo: '/assets/mcp-logo.png', level: 'advanced', featured: true },
      { name: 'Gemini', level: 'expert' },
      { name: 'LangChain', level: 'advanced' },
      { name: 'AI Agents', level: 'expert' },
    ]
  },
  {
    title: 'Frontend Development',
    icon: '⚡',
    description: 'Crafting beautiful, performant user interfaces',
    skills: [
      { name: 'Next.js', logo: '/assets/nextjs-logo.png', level: 'expert', featured: true },
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
    description: 'Architecting robust server-side solutions',
    skills: [
      { name: 'Python', logo: '/assets/python-logo.png', level: 'expert', featured: true },
      { name: 'FastAPI', logo: '/assets/fastapi-logo.svg', level: 'expert', featured: true },
      { name: 'Supabase', logo: '/assets/supabase-logo.png', level: 'advanced', featured: true },
      { name: 'Node.js', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    description: 'Deploying and scaling applications with confidence',
    skills: [
      { name: 'AWS', logo: '/assets/aws-logo.png', level: 'advanced', featured: true },
      { name: 'Vercel', logo: '/assets/vercel-logo.png', level: 'expert', featured: true },
      { name: 'Docker', level: 'advanced' },
      { name: 'Git', level: 'expert' },
      { name: 'CI/CD', level: 'advanced' },
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    description: 'Maximizing productivity with modern development tools',
    skills: [
      { name: 'Claude Code', logo: '/assets/claude-logo.png', level: 'expert', featured: true },
      { name: 'Cursor', logo: '/assets/cursor-logo.png', level: 'expert', featured: true },
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
      categories.forEach((category) => {
        // Animate category title
        const title = category.querySelector('.skills-category__title');
        gsap.fromTo(title,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: category,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Animate skill items
        const skills = category.querySelectorAll('.skill-item');
        gsap.fromTo(skills,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.03,
            delay: 0.2,
            scrollTrigger: {
              trigger: category,
              start: 'top 75%',
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
          <div className="skills-section__header-content">
            <span className="skills-section__label">// EXPERTISE</span>
            <h2 className="skills-section__title">
              Tools & <span className="skills-section__title-highlight">Technology</span>
            </h2>
            <p className="skills-section__subtitle">
              While tools evolve, creativity and adaptability remain the ultimate constants.
            </p>
          </div>
        </div>

        <div className="skills-section__content">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skills-category">
              <div className="skills-category__header">
                <div className="skills-category__icon">{category.icon}</div>
                <div>
                  <h3 className="skills-category__title">{category.title}</h3>
                  <p className="skills-category__description">{category.description}</p>
                </div>
              </div>
              <div className="skills-category__list">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`skill-item ${skill.featured ? 'skill-item--featured' : ''} skill-item--${skill.level || 'intermediate'}`}
                  >
                    <span className="skill-item__name">{skill.name}</span>
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
