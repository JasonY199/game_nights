# Game Nights - Project Guide

## Project Overview

A Next.js application for managing game nights and social gaming events.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Neutral color scheme, Dark mode enabled)
- **Icons**: lucide-react
- **Package Manager**: npm

## Project Structure

```text
game_nights/
├── app/                        # Next.js app directory
│   ├── (visitors)/            # Public home page route group
│   │   ├── _components/       # Home page section components
│   │   │   ├── hero-section.tsx
│   │   │   └── coming-soon-section.tsx
│   │   └── page.tsx           # Home page
│   ├── (auth)/                # Auth pages (to be added)
│   │   ├── login/
│   │   └── register/
│   ├── (user)/                # Authenticated user pages (to be added)
│   │   ├── _components/       # Shared app components
│   │   ├── dashboard/
│   │   ├── games/
│   │   ├── mod/               # Mod-only pages (nested)
│   │   └── admin/             # Admin-only pages (nested)
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles + Tailwind
├── components/                 # Shared components
│   ├── ui/                    # shadcn components
│   └── layout/                # Site-wide layout components
│       ├── header.tsx         # Public header (Login button)
│       └── footer.tsx         # Footer (all pages)
├── lib/                        # Utility functions
│   └── utils.ts               # shadcn utilities
└── public/                     # Static assets
```

### Folder Structure Principles

- **Route Groups**: `(visitors)`, `(auth)`, `(user)` - organize routes without affecting URLs
- **Private Folders**: `_components` - not accessible as routes, for components only
- **Co-location**: Components live close to where they're used
- **Shared Components**: Only truly universal components go in `components/`
- **Layout Components**: Site-wide header/footer in `components/layout/`

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Installed shadcn Components

- Button
- Card (with CardHeader, CardTitle, CardDescription, CardContent, CardFooter)

## Adding More Components

```bash
npx shadcn@latest add <component-name>
```

## Design System

See **DESIGN_SYSTEM.md** for:

- Color palette and brand colors (Purple & Blue theme)
- Component patterns and code examples
- Button styling guidelines
- Layout guidelines
- Mobile-first approach

## Current Status

- ✅ Next.js project initialized
- ✅ shadcn/ui installed and configured (dark mode)
- ✅ Project structure organized with route groups and co-located components
- ✅ Header component with gradient logo and outline login button
- ✅ Hero section with gradient background and feature cards
- ✅ Coming soon section with clean design
- ✅ Footer component
- ✅ Design system documented
- 🚧 Authentication pages (login/register) - to be built
- 🚧 User dashboard and app features - to be built

## Important Notes

- Dark mode is enabled by default (class on body element)
- Use shadcn components as much as possible
- Follow the purple/blue color theme (see DESIGN_SYSTEM.md)
- Mobile-first approach for all layouts
- Icons from lucide-react are available
