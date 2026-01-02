# Game Nights - Design System

## Brand Colors

### Primary Theme: Purple & Blue

- Use purple and blue throughout the site for consistency
- Avoid introducing random colors (green, orange, pink, etc.) unless specifically needed
- Keep the color palette simple and cohesive

## Mobile-First Approach

- Always design for mobile first, then use `md:` breakpoints for desktop
- Use responsive utilities: `text-xl md:text-2xl`, `py-16 md:py-24`, etc.

## Color Palette & Usage

### Gradient Backgrounds (Hero sections)

```tsx
bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10
```

### Gradient Text (Headlines, Logo)

**Standard gradient (for static text):**

```tsx
bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent
// Add leading-tight pb-2 to prevent descender cutoff
```

**Animated gradient (for hero titles):**

```tsx
bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2 animate-gradient
// Three-color gradient with infinite subtle animation
```

The `animate-gradient` class creates a smooth, infinite gradient shift animation (defined in globals.css).

### Component Accent Colors

- Purple accents: `border-purple-500/20`, `bg-purple-500/10`, `text-purple-400`
- Blue accents: `border-blue-500/20`, `bg-blue-500/10`, `text-blue-400`
- Use alternating purple/blue for variety in card grids

### shadcn Theme Colors (from globals.css)

- `bg-background` - Main background
- `text-foreground` - Main text
- `text-foreground/80` - Slightly muted text
- `text-muted-foreground` - Secondary text
- `border-border` - Borders
- `border-border/40` or `/50` - Subtle borders
- `bg-card` - Card backgrounds
- `bg-muted` - Muted/subtle backgrounds

## Button Styling Guidelines

### Refined Outline Buttons (Primary style for most actions)

This is the **preferred button style** for the site - subtle, elegant, and matches the overall design aesthetic.

```tsx
<Button
  variant="outline"
  className="border-purple-400/40 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-400/60 text-foreground transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10"
>
  Login
</Button>
```

**Features:**

- Subtle purple border with low opacity (`border-purple-400/40`)
- Very light purple background (`bg-purple-500/5`)
- Gentle glow on hover (`hover:shadow-md hover:shadow-purple-500/10`)
- Smooth transitions (`transition-all duration-300`)
- Maintains text color consistency (`text-foreground`)

### Gradient Buttons (For auth form submissions)

Used specifically for auth form submit buttons to create a clear primary action.

```tsx
<Button
  type="submit"
  className="w-full h-9 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
>
  Sign in
</Button>
```

**Features:**

- Full width on auth forms (`w-full`)
- Gradient background with purple-to-blue transition
- Hover glow effect for emphasis
- White text for contrast

### When to use

- **Refined Outline**: Login, navigation, forms, most actions (default choice)
- **Gradient**: Auth form submit buttons (Sign in, Sign up, Reset password)

## Component Patterns

### Social Login Buttons (OAuth)

Google and Apple sign-in buttons with brand-consistent icons and refined sizing.

```tsx
<Button
  variant="outline"
  className="w-full h-11 border-border/50 hover:bg-accent transition-all duration-300"
>
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    {/* Google icon paths with brand colors */}
  </svg>
  Continue with Google
</Button>

<Button
  variant="outline"
  className="w-full h-11 border-border/50 hover:bg-accent transition-all duration-300"
>
  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
    {/* Apple icon path */}
  </svg>
  Continue with Apple
</Button>
```

**Icon sizing notes:**

- Google: `w-5 h-5` - Smaller due to multi-color detailed design
- Apple: `w-6 h-6` - Larger to match visual weight of Google icon
- Icon spacing: `mr-2` - Keeps icons close to text without being cramped

### Header (with backdrop blur effect)

```tsx
<header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/80">
  <div className="container mx-auto flex h-16 items-center justify-between px-4">
    {/* Logo with gradient text */}
    <div className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Game Nights
    </div>
    {/* Outline button */}
  </div>
</header>
```

### Feature Cards with Icons

```tsx
<Card className="border-purple-500/20">
  <CardHeader>
    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
      <IconName className="w-6 h-6 text-purple-400" />
    </div>
    <CardTitle className="text-lg">Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
</Card>
```

### Icon Circles (for section accents)

```tsx
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 mb-8 shadow-lg shadow-purple-500/20">
  <IconName className="w-10 h-10 text-purple-400" />
</div>
```

### Badge/Pill Style

```tsx
<span className="px-3 py-1 rounded-full bg-muted">Text</span>
```

### Spacing

- Container: `container mx-auto px-6`
- Section padding: `py-20` (standard), `py-20 md:py-32` (hero)
- Section separators: `border-t border-border/50`

## Layout Guidelines

- Use gradients sparingly (hero sections only)
- Clean transitions between sections
- Avoid repeating background patterns
- Keep "Coming Soon" and secondary sections clean with solid backgrounds

## Animations

See **ANIMATIONS.md** for complete animation patterns including:

- Page load animations (fade-in-up, zoom-in)
- Hover effects (gradient underlines, scale, glow)
- Staggered animations with delays

## Tailwind v4 Notes

- Use `bg-linear-to-*` classes instead of `bg-gradient-to-*` (Tailwind v4 naming)
- Modern CSS syntax with `@theme`, `@custom-variant`
