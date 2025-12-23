import './marquee-section-new.css';
import Image from 'next/image';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/marquee';

const techStack = [
  { name: 'n8n', logo: '/assets/n8n-logo.png' },
  { name: 'AWS', logo: '/assets/aws-logo.png' },
  { name: 'Next.js', logo: '/assets/nextjs-logo.png' },
  { name: 'Python', logo: '/assets/python-logo.png' },
  { name: 'Vercel', logo: '/assets/vercel-logo.png' },
  { name: 'OpenAI', logo: '/assets/openai-logo.png' },
  { name: 'Supabase', logo: '/assets/supabase-logo.png' },
  { name: 'Claude', logo: '/assets/claude-logo.png' },
  { name: 'FastAPI', logo: '/assets/fastapi-logo.svg' },
  { name: 'Cursor', logo: '/assets/cursor-logo.png' },
  { name: 'MCP', logo: '/assets/mcp-logo.png' },
];

export default function MarqueeSection() {
  return (
    <section className="marquee-section-new">
      <div className="marquee-section-new__container">
        <h3 className="marquee-section-new__title">Trusted Tech Stack</h3>
        <Marquee className="marquee-section-new__marquee">
          <MarqueeContent speed={40} gradient={false}>
            {techStack.map((tech, index) => (
              <MarqueeItem key={`${tech.name}-${index}`}>
                <div className="marquee-section-new__item">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={48}
                    height={48}
                    className="marquee-section-new__logo"
                  />
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
