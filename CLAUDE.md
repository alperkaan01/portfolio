# Portfolio Project - Claude Code Reference

## Build & Run Commands

```bash
# Navigate to web directory first if you are not already there
cd web

# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

## Tech Stack

### Core Framework
- **Next.js 16.0** (App Router, React Server Components)
- **React 19.2** (Latest stable)
- **TypeScript 5.5** (Strict mode enabled)

### Styling & UI
- **Tailwind CSS 3.4** (Utility-first CSS)
- **shadcn/ui** (Radix UI primitives)
- **Framer Motion 12** (Animations)
- **class-variance-authority** (Component variants via CVA)
- **Lucide React** (Icon library)
- **next-themes** (Dark/light mode switching)

### Utilities
- **clsx** + **tailwind-merge** (via `cn()` helper)
- **react-fast-marquee** (Marquee animations)

## Code Style & Conventions

### File Naming
- **kebab-case** for all files and directories
  - Components: `hero-new.tsx`, `theme-toggle.tsx`
  - Styles: `navbar.css`, `hero-new.css`
  - Directories: `components/custom/marquee-section/`

### Component Naming
- **PascalCase** for React components
- **Default exports** for page/feature components
- **Named exports** for UI primitives (`{ Button, buttonVariants }`)

### TypeScript Patterns
- **Strict mode** enforced (`tsconfig.json`)
- **Explicit prop types** via interfaces
- Use `React.forwardRef<Element, Props>` for forwarded refs
- Use `type` for simple shapes, `interface` for extensible contracts

### Import Aliases
- `@/*` maps to `web/` root directory
  - `@/components/ui/button` → `web/components/ui/button`
  - `@/lib/utils` → `web/lib/utils`

### CSS & Styling Strategy
- **Hybrid approach**: Tailwind utilities + custom CSS
- **BEM methodology** for custom component classes
  - Block: `.hero-new`
  - Element: `.hero-new__container`
  - Modifier: `.hero-new__cta-primary`
- **CSS Custom Properties** for theming (HSL values)
- **Scoped CSS files** alongside components (e.g., `navbar.tsx` + `navbar.css`)

### Component Organization
```
components/
├── ui/                    # shadcn/ui primitives (button, textarea, etc.)
└── custom/                # Feature-specific components
    └── [feature-name]/    # Each feature gets its own directory
        ├── [name].tsx     # Component file
        └── [name].css     # Scoped styles (if needed)
```

### Theme Architecture
- **Light Mode**: "The Civic Builder" (organic, paper-like, sans-serif)
- **Dark Mode**: "The AI Architect" (neon, void, monospace fonts)
- Dark mode automatically switches ALL text to monospace (`font-mono`)
- Themes defined via CSS custom properties in `app/globals.css`

### Component Patterns
- **Server Components** by default (Next.js App Router)
- **Client Components** explicitly marked with `'use client'`
  - Required for: hooks, interactivity, browser APIs
- **CVA** for multi-variant components (see `components/ui/button.tsx`)
- **cn()** utility for conditional class merging

### Key Utilities
```typescript
// lib/utils.ts
cn(...inputs)              // Merge Tailwind classes (clsx + tailwind-merge)
```

## Architecture

### Directory Structure
```
portfolio/
├── web/                       # Main Next.js application
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── Home/              # Home page component
│   │   │   └── Home.tsx
│   │   ├── layout.tsx         # Root layout (fonts, theme provider, navbar)
│   │   ├── page.tsx           # Entry point (imports Home)
│   │   ├── globals.css        # Global styles + theme variables
│   │   └── brand.css          # Brand-specific styles
│   │
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── marquee.tsx
│   │   │   └── gradient-text.tsx
│   │   │
│   │   ├── custom/            # Custom feature components
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── marquee-section/
│   │   │   └── ask-input/
│   │   │
│   │   └── theme-provider.tsx # next-themes wrapper
│   │
│   ├── lib/                   # Shared utilities
│   │   ├── utils.ts           # cn() helper
│   │   └── metadata.ts        # Site metadata config
│   │
│   ├── public/
│   │   └── assets/            # Static images, icons
│   │
│   ├── next.config.mjs        # Next.js configuration
│   ├── tailwind.config.ts     # Tailwind + theme setup
│   ├── tsconfig.json          # TypeScript config (strict mode)
│   ├── components.json        # shadcn/ui config
│   └── package.json           # Dependencies & scripts
│
├── .git/                      # Git repository
├── .gitignore
├── LICENSE
└── README.md
```

### Routing
- **App Router** (Next.js 13+ file-based routing)
- `app/page.tsx` → `/` (renders `Home.tsx`)
- `app/layout.tsx` → Root layout (wraps all pages)

### Data Flow
- **Server-first**: Most components are Server Components
- **Client boundaries**: Minimal `'use client'` usage
  - Theme toggle (`theme-toggle.tsx`)
  - Interactive forms/animations

### Styling Flow
1. Tailwind utilities for layout/spacing
2. CSS custom properties for theme values
3. Scoped CSS files for complex component styles
4. BEM naming for custom classes
5. `cn()` for conditional class merging

## Development Guidelines

### Adding New Components
1. **UI Primitives**: Use shadcn/ui CLI or add to `components/ui/`
2. **Custom Features**: Create directory in `components/custom/[feature-name]/`
   ```bash
   components/custom/my-feature/
   ├── my-feature.tsx
   └── my-feature.css  # Optional, if Tailwind isn't sufficient
   ```
3. Use `@/` alias for imports
4. Follow BEM naming if adding custom CSS

### Adding New Pages
1. Create route in `app/` directory
2. Follow App Router conventions (page.tsx, layout.tsx)
3. Update `lib/metadata.ts` if needed

### Theme Modifications
- **Colors**: Edit CSS custom properties in `app/globals.css`
- **Fonts**: Modify `app/layout.tsx` (Google Fonts)
- **Tailwind config**: Edit `tailwind.config.ts`

### TypeScript
- **Strict mode** is enabled - no implicit `any`
- Always type component props explicitly
- Use `type` for simple objects, `interface` for extensible APIs

### Performance
- Use `next/image` for all images
- Mark critical images with `priority` prop
- Prefer Server Components (default)
- Only use `'use client'` when necessary

## Repository Maintenance

### Update Rule
**CRITICAL**: If you (the AI agent) make any of the following changes, you **MUST** immediately update this `CLAUDE.md` file:

1. **Architectural Changes**
   - New directory structure patterns
   - Changed routing strategy
   - Modified state management approach
   - New data fetching patterns

2. **Major Library Additions**
   - New UI library or component system
   - Database/ORM integration
   - Authentication system
   - API client libraries

3. **Build System Changes**
   - Modified npm scripts
   - New build tools or bundlers
   - Changed dev server configuration
   - New environment variable requirements

4. **Code Style Shifts**
   - Adoption of new naming conventions
   - Switch from CSS modules to styled-components (or vice versa)
   - New linting rules or formatters
   - TypeScript configuration changes

### Context Clearing
- This file is the **single source of truth** for project structure
- **Before making assumptions**, re-read this file
- **After major refactors**, update this file before marking task complete
- If project patterns conflict with this doc, **update this doc first**

### Version History
- Initial documentation: 2025-12-24
- Last updated: 2025-12-24
