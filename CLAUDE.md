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
│   │   ├── login/             # Login page
│   │   │   └── page.tsx
│   │   └── page.tsx           # Home page
│   ├── (auth)/                # Auth pages (to be added)
│   │   └── register/
│   ├── (user)/                # Authenticated user pages (to be added)
│   │   ├── _components/       # Shared app components
│   │   ├── dashboard/
│   │   ├── games/
│   │   ├── mod/               # Mod-only pages (nested)
│   │   └── admin/             # Admin-only pages (nested)
│   ├── layout.tsx             # Root layout (sticky footer pattern)
│   └── globals.css            # Global styles + Tailwind
├── components/                 # Shared components
│   ├── ui/                    # shadcn components
│   └── layout/                # Site-wide layout components
│       ├── header.tsx         # Public header (with navigation)
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
- Input
- Label
- Alert

## Adding More Components

```bash
npx shadcn@latest add <component-name>
```

## Layout System (IMPORTANT)

The app uses a **flexbox sticky footer pattern** to ensure proper layout across all pages:

### Root Layout Structure

```tsx
// app/layout.tsx
<body className="flex flex-col min-h-screen">
  <Header />
  <div className="flex-1 flex flex-col">
    {children}
  </div>
  <Footer />
</body>
```

**Key Points:**

- Body: `flex flex-col min-h-screen` - Creates full-height flex container
- Content wrapper: `flex-1 flex flex-col` - Grows to fill space, enables child flex layouts
- Footer: Automatically sticks to bottom on tall screens, naturally placed on short screens

### Page Patterns

#### Pattern 1: Centered Single Content (e.g., Login Page)

```tsx
// For pages with a single centered element (login, register, error pages)
<main className="relative flex flex-1 items-center justify-center py-12 px-6">
  <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />
  <div className="relative w-full max-w-md mx-auto">
    {/* Your content */}
  </div>
</main>
```

#### Pattern 2: Multiple Sections (e.g., Home Page)

```tsx
// For pages with multiple stacked sections
<main className="flex-1 flex flex-col">
  <Section1 />  {/* Each section can use flex-1 for equal distribution */}
  <Section2 />
</main>
```

**Section Component Pattern:**

```tsx
// For sections that should be vertically centered within their flex space
<section className="flex-1 flex items-center overflow-hidden">
  <div className="container mx-auto px-6 py-20">
    {/* Content */}
  </div>
</section>
```

### Common Layout Patterns

1. **Centered Content**: Use `flex items-center justify-center` on main
2. **Equal Sections**: Each section gets `flex-1` to split space evenly
3. **Gradient Backgrounds**: Use `absolute inset-0` div inside `relative` container
4. **Vertical Centering**: Use `flex items-center` on parent
5. **Sticky Footer**: Automatically handled by root layout

### ⚠️ Critical Layout Rules

- **DO NOT** use `min-h-screen` on page-level elements (breaks sticky footer)
- **DO** use `flex-1` on main elements to fill available space
- **DO** use `flex flex-col` on parents when children need vertical flex distribution
- **DO** wrap gradient backgrounds in `absolute inset-0` divs with `relative` parent

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
- ✅ Flexbox sticky footer layout system implemented
- ✅ Header component with gradient logo and navigation links
- ✅ Hero section with gradient background and feature cards
- ✅ Coming soon section with clean design
- ✅ Footer component
- ✅ Login page with centered card layout
- ✅ Design system documented
- ✅ Layout patterns documented
- 🚧 Register page - to be built
- 🚧 Supabase authentication integration - to be added
- 🚧 User dashboard and app features - to be built

## Important Notes

- Dark mode is enabled by default (class on body element)
- Use shadcn components as much as possible
- Follow the purple/blue color theme (see DESIGN_SYSTEM.md)
- Mobile-first approach for all layouts
- Icons from lucide-react are available
