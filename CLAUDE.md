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
│   ├── (visitors)/            # Public marketing pages route group
│   │   ├── _components/       # Visitor page section components
│   │   │   ├── hero-section.tsx
│   │   │   └── coming-soon-section.tsx
│   │   └── page.tsx           # Home page (/)
│   ├── (auth)/                # Authentication pages route group
│   │   ├── _components/       # Auth-specific shared components
│   │   │   ├── auth-card-wrapper.tsx      # Animated card wrapper
│   │   │   ├── auth-divider.tsx           # "Or continue with email" divider
│   │   │   ├── password-input.tsx         # Password field with toggle
│   │   │   ├── social-login-buttons.tsx   # Google/Apple OAuth buttons
│   │   │   └── auth-submit-button.tsx     # Gradient submit button
│   │   ├── signin/            # Sign in page (/signin)
│   │   │   └── page.tsx
│   │   └── signup/            # Sign up page (/signup)
│   │       └── page.tsx
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
│       ├── header.tsx         # Public header (Games, Features, News)
│       └── footer.tsx         # Footer (About, Contact, Update Log)
├── lib/                        # Utility functions
│   └── utils.ts               # shadcn utilities
└── public/                     # Static assets
```

### Folder Structure Principles

- **Route Groups**: `(visitors)`, `(auth)`, `(user)` - organize routes without affecting URLs
- **Private Folders**: `_components` - not accessible as routes, for components only
- **Co-location**: Components live close to where they're used
  - `(auth)/_components` contains auth-specific reusable components
  - `(visitors)/_components` contains marketing page section components
- **Shared Components**: Only truly universal components go in `components/`
- **Layout Components**: Site-wide header/footer in `components/layout/`
- **DRY Principle**: Auth pages use shared components to eliminate code duplication

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
- **Sign In Page**: See `app/(auth)/signin/page.tsx`
- **Sign Up Page**: See `app/(auth)/signup/page.tsx`
- **Multi-Section Page**: See `app/(visitors)/page.tsx`

For complete animation patterns and timing, see **ANIMATIONS.md**

## Auth Component System

The `(auth)` route group contains reusable components that eliminate code duplication across auth pages:

### AuthCardWrapper

Handles the full page layout, gradient background, and animated card wrapper for all auth pages.

```tsx
<AuthCardWrapper title="Sign In" description="Welcome back!" mounted={mounted}>
  {/* Auth page content */}
</AuthCardWrapper>
```

### SocialLoginButtons

Google and Apple OAuth buttons with proper icons and styling.

```tsx
<SocialLoginButtons onGoogleClick={handleGoogle} onAppleClick={handleApple} />
```

### AuthDivider

The "Or continue with email" divider used between social and email auth.

```tsx
<AuthDivider />
```

### PasswordInput

Password input field with eye icon toggle for show/hide. Supports optional right element (e.g., "Forgot password?" link).

```tsx
<PasswordInput
  id="password"
  label="Password"
  value={password}
  onChange={setPassword}
  rightElement={<Link href="/forgot-password">Forgot password?</Link>}
/>
```

### AuthSubmitButton

Gradient submit button styled for auth forms.

```tsx
<AuthSubmitButton>Sign in</AuthSubmitButton>
```

These components keep auth pages DRY - changes to styling or behavior only need to be made in one place.

## Current Status

**Completed:**

- Next.js 15 + TypeScript + Tailwind v4 setup
- shadcn/ui with dark mode
- Flexbox sticky footer layout system
- Responsive header with mobile menu and animations (using "Sign in" terminology)
  - Navigation: Games, Features, News
  - Mobile menu closes on logo click
- Footer with responsive link spacing
  - Links: About, Contact, Update Log
  - Responsive gap (smaller on mobile, larger on desktop)
- Cascading top-down page load animation system
- Animated hero and coming soon sections with sequential timing
- `(auth)` route group with reusable auth components:
  - `AuthCardWrapper` - Animated card with gradient background
  - `SocialLoginButtons` - Google/Apple OAuth buttons with refined sizing
  - `AuthDivider` - "Or continue with email" separator
  - `PasswordInput` - Password field with eye toggle and optional right element
  - `AuthSubmitButton` - Gradient submit button
- Sign in page (`/signin`) with:
  - Animated gradient title
  - Google and Apple OAuth buttons (refined icon sizing: Google w-5 h-5, Apple w-6 h-6)
  - Email/password form with visibility toggle
  - "Forgot password?" link
  - All using shared auth components
- Sign up page (`/signup`) with:
  - Animated gradient title
  - Google and Apple OAuth buttons
  - Email/password form with visibility toggles
  - Username field
  - Confirm password field
  - All using shared auth components
- Refined button styling (subtle purple outline with glow)
- Design system and animation patterns fully documented
- Consistent "Sign in" / "Sign up" terminology throughout app
- DRY principle applied - auth pages use shared components, no duplicate code

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
