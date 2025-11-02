'use client';

import Image from 'next/image';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import './marquee-section.css';

const techLogos = [
  { src: '/assets/n8n-logo.png', alt: 'N8n', width: 44, height: 44 },
  { src: '/assets/aws-logo.png', alt: 'AWS', width: 40, height: 40 },
  { src: '/assets/nextjs-logo.png', alt: 'Next.js', width: 52, height: 44 },
  { src: '/assets/python-logo.png', alt: 'Python', width: 22, height: 22 },
  { src: '/assets/vercel-logo.png', alt: 'Vercel', width: 60, height: 52 },
  { src: '/assets/openai-logo.png', alt: 'OpenAI', width: 70, height: 52 },
  { src: '/assets/supabase-logo.png', alt: 'Supabase', width: 26, height: 26 },
  { src: '/assets/claude-logo.png', alt: 'Claude', width: 65, height: 52 },
  { src: '/assets/fastapi-logo.svg', alt: 'FastAPI', width: 28, height: 28 },
  { src: '/assets/cursor-logo.png', alt: 'Cursor', width: 28, height: 28 },
  { src: '/assets/mcp-logo.png', alt: 'MCP', width: 28, height: 28 },
];

export default function MarqueeSection() {
  return (
    <div className="marquee-section__wrapper">
      <div className="marquee-section__container">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {techLogos.map((logo, index) => (
              <MarqueeItem className="marquee-section__item" key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
}

