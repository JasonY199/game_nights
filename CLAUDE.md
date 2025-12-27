# Game Nights - Project Guide

## Project Overview

A Next.js application for managing game nights and social gaming events.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Neutral color scheme)
- **Package Manager**: npm

## Project Structure

```
game_nights/
├── app/              # Next.js app directory
│   ├── page.tsx      # Home page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles + Tailwind
├── lib/              # Utility functions
│   └── utils.ts      # shadcn utilities
├── components/       # React components (to be added)
└── public/           # Static assets
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

## Notes for Claude

- This project uses Tailwind CSS v4 (modern CSS syntax with `@theme`, `@custom-variant`)
- Dark mode is configured and ready to use
- Keep code clean and maintainable
- Focus on modern web development best practices

## Current Status

- ✅ Next.js project initialized
- ✅ shadcn/ui installed and configured
- 🚧 Starter code cleanup needed
- 🚧 Core features to be built

## Future Features

(Add features as they're planned)
