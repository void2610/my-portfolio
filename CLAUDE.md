# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 portfolio website for a game creator and software engineer using modern React patterns:

### Core Stack
- **Next.js 15**: App Router with TypeScript and strict type checking
- **HeroUI**: Primary UI component library with built-in dark mode support
- **Framer Motion**: Animations and page transitions
- **Tailwind CSS v4**: Utility-first styling with PostCSS integration
- **next-themes**: Theme management for light/dark mode switching

### Key Architectural Patterns

**Color System**: Centralized CSS custom properties in `globals.css` with semantic color tokens:
- `--text-primary`, `--text-secondary`, `--text-tertiary` for text hierarchy
- `--surface`, `--surface-elevated` for backgrounds
- `--border-primary` for consistent borders
- Automatic light/dark theme switching via CSS variables

**Component Structure**:
- `src/components/providers.tsx` - Global providers (HeroUI, theme)
- `src/components/Header.tsx` - Responsive navigation with mobile hamburger menu
- `src/components/ThemeToggle.tsx` - Light/dark mode switcher
- `src/app/layout.tsx` - Root layout with provider setup and font configuration

**Pages**: Standard Next.js App Router structure with:
- `/` - Homepage with animated hero section and feature cards
- `/about` - About page with skills and experience
- `/projects` - Project showcase with cards
- `/contact` - Contact form and information

**Theme Integration**: Uses `next-themes` with `enableSystem={false}` and custom storage key. Theme state managed globally with automatic CSS variable updates for seamless light/dark switching.

**Responsive Design**: Mobile-first approach with hamburger menu on small screens, expanding to full navigation on larger screens. All components use unified color variables for consistent theming.

The project uses TypeScript path mapping (`@/*` → `./src/*`) for clean imports and follows semantic HTML patterns for accessibility.