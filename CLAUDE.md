# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run typecheck` - Run TypeScript type checking (if available)

## Project Architecture

This is a Next.js 15 portfolio website for a game creator and software engineer using modern React patterns and interactive components.

### Core Stack
- **Next.js 15**: App Router with TypeScript and strict type checking
- **HeroUI**: Primary UI component library with built-in dark mode support
- **Framer Motion**: Animations, page transitions, and 3D card flip effects
- **Tailwind CSS**: Utility-first styling with PostCSS integration
- **next-themes**: Theme management for light/dark mode switching
- **Lucide React**: Icon library for consistent iconography

### Key Architectural Patterns

**Data Architecture**:
- Centralized data management in `src/data/`:
  - `projects.ts` - Project showcase data with platform-specific metadata
  - `timeline.ts` - Timeline events for About page
  - `experience.ts` - Work experience entries
  - `skills.ts` - Technical skills with proficiency levels
  - `contact.ts` - Contact methods and social links
- All data files use TypeScript interfaces for type safety

**Component Organization**:
- **Shared Components** (`src/components/`):
  - `ContactItem`, `ExperienceItem`, `SkillItem` - Reusable list items with consistent animations
  - `ProjectCard` - 3D flip card with platform-specific styling
  - `ProjectCarousel` - Featured projects carousel on homepage
  - `TagFilter`, `SortSelector` - Dropdown UI components with mobile-optimized positioning
- **Icon Components** (`src/components/icons/`):
  - Custom SVG icons (GitHubIcon, XIcon, SteamIcon, UnityroomIcon)
  - All icons use `currentColor` for theme compatibility

**Unified Color System**: 
- CSS custom properties in `globals.css` for semantic color tokens
- Automatic light/dark theme switching via CSS variables
- Shadow utilities work across both themes (e.g., `shadow-lg hover:shadow-xl`)

**Mobile-First Responsive Design**:
- Hamburger menu with slide-down animation
- Dropdown menus adjust position on mobile (left-aligned) vs desktop (right-aligned)
- Touch-friendly interactions with appropriate tap targets

**Animation Patterns**:
- Staggered animations using index-based delays
- Spring physics for natural motion (e.g., `transition={{ type: "spring", stiffness: 400 }}`)
- 3D card flips with preserve-3d and backface-hidden
- Consistent hover states with scale and shadow transitions

**Project Features**:
- **Projects Page**: 
  - Filter by tags with real-time project count
  - Sort by date or platform
  - Auto-scroll to project from carousel selection
- **Contact Page**: 
  - Animated contact cards with platform-specific gradients
  - Consistent shadow styling for clickability
- **About Page**:
  - ProfileHero component with avatar and social links
  - Animated skill bars and experience timeline

**Important Implementation Details**:
- When creating IDs from titles, sanitize with: `title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()`
- Dropdown components require `max-w-[calc(100vw-2rem)]` for mobile viewport constraints
- Use `suppressHydrationWarning` on html and body tags for theme switching
- Icon components should accept className prop for flexible sizing

The project emphasizes visual polish, smooth interactions, and maintainable component architecture while ensuring excellent mobile experience.