import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { ROUTES } from '@/constants/routes';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href={ROUTES.HOME} className="navbar__brand">
        <span className="navbar__name">Alper Odabasoglu</span>
      </Link>
      <div className="navbar__links">
        <Link href={ROUTES.ABOUT} className="navbar__link">
          About
        </Link>
        <Link href={ROUTES.PROJECTS} className="navbar__link">
          Projects
        </Link>
        <Link href={ROUTES.CONTACT} className="navbar__link">
          Contact
        </Link>
        <div className="navbar__social">
          <a
            href="https://www.linkedin.com/in/alperkaanodabasoglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://x.com/lbc_of_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-link"
            aria-label="X (Twitter)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

