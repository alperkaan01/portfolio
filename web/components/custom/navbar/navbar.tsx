import Link from 'next/link';
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
        <Link href={ROUTES.SERVICES} className="navbar__link">
          Services
        </Link>
        <Link href={ROUTES.BLOG} className="navbar__link">
          Blog
        </Link>
        <Link href={ROUTES.CONTENT} className="navbar__link">
          Content
        </Link>
        <Link href={ROUTES.PROJECTS} className="navbar__link">
          Projects
        </Link>
        <Link href={ROUTES.CONTACT} className="navbar__link">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

