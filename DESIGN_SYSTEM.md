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

```tsx
bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent
// Add leading-tight pb-2 to prevent descender cutoff
```

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

### Outline Buttons (Subtle, for secondary actions like "Login")

```tsx
<Button 
  variant="outline" 
  className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/5"
>
  Login
</Button>
```

### Gradient Buttons (Bold, for primary CTAs - use sparingly)

```tsx
<Button className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
  Get Started
</Button>
```

### When to use

- Outline: Navigation, login, secondary actions
- Gradient: Primary call-to-action buttons only

## Component Patterns

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

### Section Spacing

- Container: `container mx-auto px-4`
- Section padding: `py-16 md:py-24` for standard sections
- Hero padding: `py-20 md:py-32` for hero sections
- Section transitions: Use `border-t border-border/50` for clean separation

## Layout Guidelines

- Use gradients sparingly (hero sections only)
- Clean transitions between sections
- Avoid repeating background patterns
- Keep "Coming Soon" and secondary sections clean with solid backgrounds

## Tailwind v4 Notes

- Use `bg-linear-to-*` classes instead of `bg-gradient-to-*` (Tailwind v4 naming)
- Modern CSS syntax with `@theme`, `@custom-variant`
