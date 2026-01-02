# Animation Patterns

This document covers all animation patterns used in the Game Nights app.

## Core Approach

We use **CSS keyframe animations** with animation-delay classes for page load animations to ensure reliable, sequential animations without conflicts.

**Design Philosophy:**

- Elements fade in **from the top** (`translateY(-1rem)`) to create a cascading downward effect
- Each element animates sequentially with staggered delays using `animation-delay`
- Creates a smooth, waterfall-like animation down the page
- All page load animations use 700ms duration
- Hover effects use CSS `transition` (separate from `animation`) for instant responsiveness

**Why CSS Animations Instead of Transitions:**

- CSS `animation` with delays work reliably - elements stay hidden until their animation starts
- No React state conflicts or timing issues
- Hover effects using `transition` remain instant because they're separate from `animation`
- Combining multiple animations (e.g., fade-in + gradient) is straightforward

### Basic Setup (Using CSS Animations)

No React state needed! Just use CSS animation classes:

```tsx
export function MyComponent() {
  return <div className="animate-fade-in-down animation-delay-0">Content</div>;
}
```

### Multi-Section Pages

No shared state needed - each element uses its own animation-delay class:

```tsx
export default function Page() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <ComingSoonSection />
    </main>
  );
}
```

Each section uses delay classes to sequence animations:

```tsx
export function Section1() {
  return (
    <section>
      <h1 className="animate-fade-in-down animation-delay-0">Title</h1>
      <p className="animate-fade-in-down animation-delay-200">Subtitle</p>
    </section>
  );
}
```

## Page Load Animations

### Fade-In Down (Primary Pattern)

**This is the standard animation for the site.** Elements fade in from above, creating a cascading effect.

```tsx
// Basic usage - no delay
<h1 className="animate-fade-in-down animation-delay-0">Game Nights</h1>

// With delay
<p className="animate-fade-in-down animation-delay-200">Subtitle</p>
```

**Available Animation Classes (defined in globals.css):**

- `animate-fade-in-down` - Fades in from top with translateY(-1rem)
- `animate-zoom-in` - Zooms in from scale(0.75) to scale(1)

**Available Delay Classes:**

- `animation-delay-0` - 0ms (immediate)
- `animation-delay-200` - 200ms
- `animation-delay-400` - 400ms
- `animation-delay-600` - 600ms
- `animation-delay-750` - 750ms
- `animation-delay-900` - 900ms
- `animation-delay-1050` - 1050ms
- `animation-delay-1200` - 1200ms
- `animation-delay-1350` - 1350ms

### Zoom-In (Icons, Special Elements)

For circular icons or special accent elements:

```tsx
<div className="animate-zoom-in animation-delay-1050">
  <Icon />
</div>
```

### Cascading Top-to-Bottom Animations

Create a waterfall effect where each element animates in sequence from top to bottom.

#### Example: Hero Section (Static Elements)

For elements without hover effects:

```tsx
{/* Title - starts immediately */}
<h1 className="animate-fade-in-down animation-delay-0">Game Nights</h1>

{/* Subtitle - 200ms delay */}
<p className="animate-fade-in-down animation-delay-200">Subtitle text</p>

{/* Badges - 400ms delay */}
<div className="animate-fade-in-down animation-delay-400">Badges</div>
```

#### Example: Interactive Elements (Cards with Hover)

For elements with hover effects, combine CSS animation with CSS transitions:

```tsx
{/* Cards with hover effects */}
{items.map((item, index) => {
  const delayClass =
    index === 0
      ? "animation-delay-600"
      : index === 1
      ? "animation-delay-750"
      : "animation-delay-900";
  return (
    <Card
      key={item.id}
      className={`animate-fade-in-down ${delayClass} hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300`}
    >
      Content
    </Card>
  );
})}

{/* Icons with hover effects */}
<div className="animate-zoom-in animation-delay-1050 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
  <Icon />
</div>
```

**Why this works:**

- `animate-fade-in-down` + `animation-delay-*` = Page load animation with delay
- `hover:scale-105` + `transition-all duration-300` = Instant hover effect
- CSS `animation` and `transition` are separate properties that don't conflict
- Page load uses `animation`, hover uses `transition`

**Recommended Delay Timing:**

- First element: 0ms (no delay)
- Second element: 200ms
- Third element: 400ms
- Cards/Grid items: 600ms, 750ms, 900ms (150ms between each)
- Next section start: ~1050ms+ (150ms gap after last element)

### Multi-Section Sequential Animation

When animating multiple sections on the same page:

```tsx
{/* Hero Section ends at ~900ms */}

{/* Coming Soon Section - starts at 1050ms */}
{/* Icon with hover */}
<div className="animate-zoom-in animation-delay-1050 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
  <Icon />
</div>

{/* Heading */}
<h2 className="animate-fade-in-down animation-delay-1200">Heading</h2>

{/* Description */}
<p className="animate-fade-in-down animation-delay-1350">Description</p>
```

**Key Points:**

- Start next section ~150ms after previous section's last element finishes
- This creates a smooth flow without a jarring pause
- Use `animate-*` classes for page load, `transition-*` classes for hover
- No React state needed - all timing is handled by CSS

## Hover Animations

### Gradient Underline (Navigation)

```tsx
<Link
  href="#"
  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-purple-500/10 relative group"
>
  Link Text
  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 group-hover:w-3/4 transition-all duration-300" />
</Link>
```

### Scale

```tsx
className = "transition-transform hover:scale-105 duration-300";
```

### Glow Effect

```tsx
className =
  "transition-shadow hover:shadow-lg hover:shadow-purple-500/20 duration-300";
```

### Combined Hover

```tsx
className =
  "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20";
```

## Common Durations

- Page load: `duration-700` (smooth, noticeable)
- Hover: `duration-300` (quick, responsive)
- Subtle: `duration-200` (instant feel)

## Animated Gradient Text

For hero titles and special headings, use the animated gradient:

```tsx
<h1 className="bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2 animate-gradient">
  Game Nights
</h1>
```

The `animate-gradient` class (defined in globals.css) creates an infinite, smooth gradient shift animation.

### Combining Fade-In with Gradient Animation

When you need both fade-in and gradient animations:

```tsx
<h1 className="font-heading text-5xl md:text-7xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2 animate-gradient animate-fade-in-down animation-delay-0">
  Game Nights
</h1>
```

**Important:** The CSS in globals.css handles combining these animations:

```css
.animate-fade-in-down.animate-gradient {
  animation: fade-in-down 0.7s ease-out forwards, gradient-shift 6s ease
      infinite;
  animation-delay: 0ms, 0s;
}
```

This ensures both animations run together - fade-in completes after 700ms, gradient continues infinitely.

## Complete Page Animation Example

**Home Page Pattern (CSS Animations):**

```tsx
import { HeroSection } from "./_components/hero-section";
import { ComingSoonSection } from "./_components/coming-soon-section";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <ComingSoonSection />
    </main>
  );
}
```

**Hero Section Example:**

```tsx
export function HeroSection() {
  return (
    <section className="relative flex-1 flex items-center overflow-hidden">
      <div className="container relative mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with gradient + fade-in */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2 animate-gradient animate-fade-in-down animation-delay-0">
            Game Nights
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in-down animation-delay-200">
            Subtitle text
          </p>

          {/* Badges */}
          <div className="flex gap-3 mb-12 animate-fade-in-down animation-delay-400">
            <span className="px-3 py-1 rounded-full bg-muted transition-transform hover:scale-105 duration-300">
              Badge
            </span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => {
              const delayClass =
                index === 0
                  ? "animation-delay-600"
                  : index === 1
                  ? "animation-delay-750"
                  : "animation-delay-900";
              return (
                <Card
                  key={feature.title}
                  className={`animate-fade-in-down ${delayClass} hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300`}
                >
                  {/* Card content */}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Login Page Pattern (Simple Fade-In):**

For single-element pages like login, you can still use CSS animations:

```tsx
export default function LoginPage() {
  return (
    <main className="relative flex flex-1 items-center justify-center py-12 px-6">
      <Card className="animate-fade-in-down animation-delay-0">
        {/* Card content - no internal animations */}
      </Card>
    </main>
  );
}
```

## Important Notes

- **NO "use client" needed** for CSS animations (server components work fine!)
- **NO React state needed** - all timing handled by CSS animation-delay
- Use `animate-fade-in-down` for fade from top animations
- Use `animate-zoom-in` for scale animations
- Keep hover animations fast (`duration-300` or less)
- All page load animations are 700ms (defined in keyframes)
- Start delays at 0ms, increment by 150-200ms for sequential elements
- Allow 150ms gap between sections for smooth flow
- Combine multiple CSS animations using comma-separated values (see globals.css)

### Critical: Page Load vs Hover Effects

**CSS `animation` for page load, CSS `transition` for hover:**

```tsx
{/* ✅ CORRECT - animation for page load, transition for hover */}
<Card className="animate-fade-in-down animation-delay-600 hover:scale-105 hover:shadow-lg transition-all duration-300">
  Content
</Card>
```

**Why this works:**

- `animation` property handles page load (fade-in with delay)
- `transition` property handles hover (instant response)
- These are separate CSS properties that don't conflict
- No React state or inline styles needed!

### Adding New Delay Values

If you need a new delay timing, add it to globals.css:

```css
.animation-delay-1500 {
  animation-delay: 1500ms;
}
```

### Troubleshooting

**Element not showing up?**

- Check that you're using `animate-*` classes (e.g., `animate-fade-in-down`)
- Verify animation-delay class is correct
- If combining with gradient, ensure globals.css has the combined animation rule

**Hover effect delayed?**

- Make sure you're using `transition-*` classes for hover, not `animation-*`
- Hover should use `transition-all duration-300`, not animation classes
