# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 portfolio website for a game creator and software engineer using modern React patterns and interactive components.

### Core Stack
- **Next.js 15**: App Router with TypeScript and strict type checking
- **HeroUI**: Primary UI component library with built-in dark mode support
- **Framer Motion**: Animations, page transitions, and 3D card flip effects
- **Tailwind CSS v4**: Utility-first styling with PostCSS integration
- **next-themes**: Theme management for light/dark mode switching
- **Lucide React**: Icon library for consistent iconography

### Key Architectural Patterns

**Unified Color System**: Centralized CSS custom properties in `globals.css` with semantic color tokens for consistent theming:
- `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-muted` for text hierarchy
- `--surface`, `--surface-elevated` for backgrounds and cards
- `--border-primary`, `--border-secondary` for consistent borders
- `--interactive-primary`, `--interactive-secondary` for buttons and links
- Automatic light/dark theme switching via CSS variables with smooth 0.3s transitions

**Component Architecture**:
- `src/components/providers.tsx` - Global providers wrapping HeroUI and next-themes
- `src/components/Header.tsx` - Responsive navigation with mobile hamburger menu and SNS links (@void2610)
- `src/components/ThemeToggle.tsx` - Light/dark mode switcher integrated with next-themes
- `src/app/layout.tsx` - Root layout with provider setup, Geist font configuration, and suppressHydrationWarning

**Project Card System** (`src/app/projects/page.tsx`):
- **3D Flip Animation**: Click-to-flip cards using Framer Motion and CSS 3D transforms
- **Platform-Specific Styling**: GitHub (gray), unityroom (#2E93FF), Steam (dark blue gradients)
- **Front Side**: Full image display with title and platform icon overlay
- **Back Side**: Blurred background with comprehensive project details, statistics, and technologies
- **Horizontal Layout**: Landscape-oriented cards optimized for information density
- **Responsive Grid**: 1 column on mobile, 2 columns on large screens

**Animation System**:
- Global smooth transitions (0.3s ease) for all color properties
- Custom CSS classes for 3D transformations (.perspective-1000, .preserve-3d, .backface-hidden)
- Staggered entry animations using Framer Motion with index-based delays
- Text truncation utilities (.line-clamp-2, .line-clamp-3)

**Theme Integration**: 
- `next-themes` configured with `disableTransitionOnChange={false}` for smooth theme switching
- Custom storage key 'portfolio-theme' with light default
- All components use CSS custom properties for automatic theme updates

**TypeScript Configuration**:
- Path mapping (`@/*` → `./src/*`) for clean imports
- Strict type checking with React 19 and Next.js 15 types
- Interface-driven development for Project data structure with optional backInfo for detailed card content

**Content Management**:
- Projects sorted by publishedDate (newest first) with platform-specific metadata
- Platform configuration object for colors, icons, and styling per platform
- Structured project data with stats (stars, downloads, contributors), features, and technology stacks

The project emphasizes visual appeal, smooth interactions, and responsive design while maintaining clean code architecture and type safety.