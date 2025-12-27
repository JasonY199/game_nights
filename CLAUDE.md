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
├── app/              # Next.js app directory
│   ├── page.tsx      # Home page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles + Tailwind
├── components/       # React components
│   ├── ui/          # shadcn components (Button, Card)
│   └── header.tsx   # Site header
├── lib/              # Utility functions
│   └── utils.ts      # shadcn utilities
└── public/           # Static assets
```

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
- ✅ Header component with gradient logo and outline login button
- ✅ Hero section with gradient background and feature cards
- ✅ Coming soon section with clean design
- ✅ Footer
- ✅ Design system documented
- 🚧 Core features to be built

## Important Notes

- Dark mode is enabled by default (class on body element)
- Use shadcn components as much as possible
- Follow the purple/blue color theme (see DESIGN_SYSTEM.md)
- Mobile-first approach for all layouts
- Icons from lucide-react are available
