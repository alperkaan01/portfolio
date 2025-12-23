import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Image
          src="/assets/alperkaan-logo.png"
          alt="Alper Odabasoglu Logo"
          width={64}
          height={64}
          className="navbar__logo"
        />
        <span className="navbar__name">Alper Odabasoglu</span>
      </div>
      <div className="navbar__links">
        <Link href="#about" className="navbar__link">
          About
        </Link>
        <Link href="#services" className="navbar__link">
          Services
        </Link>
        <Link href="#content" className="navbar__link">
          Content
        </Link>
        <Link href="#projects" className="navbar__link">
          Projects
        </Link>
        <Link href="#contact" className="navbar__link">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

