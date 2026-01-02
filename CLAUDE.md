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
│   │   ├── signin/            # Sign in page
│   │   │   └── page.tsx
│   │   ├── signup/            # Sign up page
│   │   │   └── page.tsx
│   │   └── page.tsx           # Home page
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
- Card (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Input, Label
- Alert
- Sheet (SheetContent, SheetHeader, SheetTitle, SheetTrigger)

To add more: `npx shadcn@latest add <component-name>`

## Layout System (IMPORTANT)

The app uses a **flexbox sticky footer pattern** to ensure proper layout across all pages:

### Root Layout Structure

```tsx
// app/layout.tsx
<body className="flex flex-col min-h-screen">
  <Header />
  <div className="flex-1 flex flex-col">{children}</div>
  <Footer />
</body>
```

**Key Points:**

- Body: `flex flex-col min-h-screen` - Creates full-height flex container
- Content wrapper: `flex-1 flex flex-col` - Grows to fill space, enables child flex layouts
- Footer: Automatically sticks to bottom on tall screens, naturally placed on short screens

### Page Patterns

#### Pattern 1: Centered Single Content (e.g., Sign In/Sign Up Pages)

```tsx
// For pages with a single centered element (signin, signup, error pages)
<main className="relative flex flex-1 items-center justify-center py-12 px-6">
  <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />
  <div className="relative w-full max-w-md mx-auto">{/* Your content */}</div>
</main>
```

#### Pattern 2: Multiple Sections (e.g., Home Page)

```tsx
// For pages with multiple stacked sections
<main className="flex-1 flex flex-col">
  <Section1 /> {/* Each section can use flex-1 for equal distribution */}
  <Section2 />
</main>
```

**Section Component Pattern:**

```tsx
// For sections that should be vertically centered within their flex space
<section className="flex-1 flex items-center overflow-hidden">
  <div className="container mx-auto px-6 py-20">{/* Content */}</div>
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

- **DESIGN_SYSTEM.md** - Colors, components, buttons, layout patterns
- **ANIMATIONS.md** - Animation patterns and examples

## Animation System

The site uses a **cascading top-down animation pattern** where elements fade in from above in sequence:

### Key Principles

- All animations fade **from top** (`-translate-y-4`) creating a waterfall effect
- Elements animate sequentially with 150-200ms delays between them
- Use `mounted` state pattern to prevent flash on page load
- All page load animations use `duration-700`
- Lift `mounted` state to parent when coordinating multiple sections

### Implementation Examples

- **Hero Section**: See `app/(visitors)/_components/hero-section.tsx`
- **Sign In Page**: See `app/(visitors)/signin/page.tsx`
- **Sign Up Page**: See `app/(visitors)/signup/page.tsx`
- **Multi-Section Page**: See `app/(visitors)/page.tsx`

For complete animation patterns and timing, see **ANIMATIONS.md**

## Current Status

**Completed:**

- Next.js 15 + TypeScript + Tailwind v4 setup
- shadcn/ui with dark mode
- Flexbox sticky footer layout system
- Responsive header with mobile menu and animations (using "Sign in" terminology)
- Cascading top-down page load animation system
- Animated hero and coming soon sections with sequential timing
- Sign in page (`/signin`) with:
  - Animated gradient title
  - Google and Apple OAuth buttons
  - Email/password form with visibility toggle
  - "Forgot password?" link
  - Proper spacing and styling
- Sign up page (`/signup`) with:
  - Animated gradient title
  - Google and Apple OAuth buttons
  - Email/password form with visibility toggles
  - Username field
  - Confirm password field
  - Proper spacing and styling
- Refined button styling (subtle purple outline with glow)
- Design system and animation patterns fully documented
- Consistent "Sign in" / "Sign up" terminology throughout app

**To Build:**

- Supabase authentication integration (OAuth ready for Google/Apple on free tier)
- Forgot password page
- User dashboard and app features

## Important Notes

- Dark mode is enabled by default (class on body element)
- Use shadcn components as much as possible
- Follow the purple/blue color theme (see DESIGN_SYSTEM.md)
- Mobile-first approach for all layouts
- Icons from lucide-react are available
- Use "Sign in" and "Sign up" terminology (not Login/Register)
- Authentication routes: `/signin` and `/signup`

## Markdown Documentation Guidelines

When editing or creating `.md` files in this project, follow these rules to avoid linting errors:

### Heading Structure

- Use proper heading hierarchy: `#`, `##`, `###`, `####`
- **NEVER** use bold text (`**text**`) as a substitute for headings
- ❌ Wrong: `**Example: Something**`
- ✅ Correct: `#### Example: Something`

### Code Block Formatting

- In TSX/JSX code blocks, use compact comment syntax: `{/* comment */}`
- ❌ Wrong: `{ /* comment */ }` (extra spaces cause heading detection issues)
- ✅ Correct: `{/* comment */}`
- Remove trailing semicolons from JSX elements in examples
- ❌ Wrong: `</div>;`
- ✅ Correct: `</div>`

### className Examples

- When showing className examples, use actual JSX syntax, not assignments
- ❌ Wrong: `className = "transition-all"`
- ✅ Correct: `className="transition-all"`

### Why This Matters

The markdownlint tool (MD036) flags emphasis (bold/italic) used instead of proper headings. Proper heading structure ensures:

- Better navigation in documentation
- Consistent table of contents generation
- No linting errors in the codebase
