# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 portfolio website using:
- **App Router**: Uses the new Next.js app directory structure (`src/app/`)
- **TypeScript**: Strict TypeScript configuration with Next.js plugin
- **Tailwind CSS v4**: For styling with modern PostCSS integration
- **Font Optimization**: Uses Geist Sans and Geist Mono fonts via `next/font/google`

Key files:
- `src/app/page.tsx` - Main homepage component
- `src/app/layout.tsx` - Root layout with font and metadata configuration
- `src/app/globals.css` - Global Tailwind CSS styles

The project uses TypeScript path mapping (`@/*` → `./src/*`) for clean imports.