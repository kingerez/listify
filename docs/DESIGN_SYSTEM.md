# Listify Design System

A comprehensive design system built with Tailwind CSS, providing consistent styling, components, and patterns for the Listify application.

## 🎨 Color Palette

### Primary Colors (Brand)
Based on the Figma design with coral/orange theme:

```css
primary-50: #fef7f0   /* Light background */
primary-100: #feebe0  /* Subtle background */
primary-200: #fcd4c1  /* UI elements */
primary-300: #f9b59d  /* Hover states */
primary-400: #f58d77  /* Interactive elements */
primary-500: #f16548  /* Main brand color */
primary-600: #e04428  /* Primary buttons */
primary-700: #bc2f1c  /* Active states */
primary-800: #9c2a1c  /* Text on light backgrounds */
primary-900: #80271d  /* Dark text */
```

### Neutral Colors
Consistent grayscale for text, borders, and backgrounds:

```css
neutral-50: #fafafa   /* Page background */
neutral-100: #f5f5f5  /* Light backgrounds */
neutral-200: #e5e5e5  /* Borders */
neutral-300: #d4d4d4  /* Subtle borders */
neutral-400: #a3a3a3  /* Placeholder text */
neutral-500: #737373  /* Secondary text */
neutral-600: #525252  /* Body text */
neutral-700: #404040  /* Headings */
neutral-800: #262626  /* Dark mode backgrounds */
neutral-900: #171717  /* Dark text */
```

### Status Colors

```css
/* Success */
success-500: #22c55e
success-600: #16a34a

/* Warning */
warning-500: #f59e0b
warning-600: #d97706

/* Error */
error-500: #ef4444
error-600: #dc2626

/* Task Status */
task-completed: #22c55e
task-pending: #f59e0b
task-in-progress: #3b82f6
task-cancelled: #6b7280
```

## 📝 Typography

### Font Family
System font stack for optimal performance and native feel:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
```

### Heading Scale
```css
h1: text-3xl lg:text-4xl (24px/32px → 28px/36px)
h2: text-2xl lg:text-3xl (20px/28px → 24px/32px)
h3: text-xl lg:text-2xl  (18px/28px → 20px/28px)
h4: text-lg lg:text-xl   (16px/24px → 18px/28px)
```

### Body Text
```css
p: leading-relaxed (line-height: 1.625)
small: text-sm (14px)
```

## 🔘 Buttons

### Component Classes

```css
/* Base button */
.btn {
  @apply inline-flex items-center justify-center gap-2 px-4 py-2 
         rounded-lg font-medium transition-all duration-200 
         focus:outline-none focus:ring-2 focus:ring-offset-2 
         disabled:opacity-50 disabled:cursor-not-allowed;
}

/* Button variants */
.btn-primary   /* Primary brand actions */
.btn-secondary /* Secondary actions */
.btn-outline   /* Outline style */
.btn-danger    /* Destructive actions */

/* Button sizes */
.btn-sm        /* Small: px-3 py-1.5 text-sm */
.btn-lg        /* Large: px-6 py-3 text-lg */
```

### Usage Examples

```tsx
// Primary action
<button className="btn-primary">
  <FiPlus size={16} />
  Add Task
</button>

// Secondary action
<button className="btn-secondary btn-sm">
  Cancel
</button>

// Destructive action
<button className="btn-danger">
  <FiTrash2 size={16} />
  Delete
</button>
```

## 🃏 Cards

### Component Classes

```css
.card       /* Basic card with border and shadow */
.card-hover /* Interactive card with hover effects */
.glass      /* Glassmorphism effect with backdrop blur */
```

### Usage Examples

```tsx
// Basic content card
<div className="card p-6">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

// Interactive task card
<div className="card-hover p-4 cursor-pointer">
  <div className="flex-between">
    <h4>Task Title</h4>
    <FiMoreHorizontal />
  </div>
</div>

// Glass effect overlay
<div className="glass p-6">
  <p>Modal or overlay content</p>
</div>
```

## 🏷️ Badges & Status

### Badge Classes

```css
.badge         /* Base badge */
.badge-primary /* Primary theme */
.badge-success /* Success state */
.badge-warning /* Warning state */
.badge-danger  /* Error state */
.badge-neutral /* Neutral/default */
```

### Status Indicators

```css
.status-completed   /* Green background for completed tasks */
.status-pending     /* Yellow background for pending tasks */
.status-in-progress /* Blue background for active tasks */
```

### Usage Examples

```tsx
// Task priority badge
<span className="badge-warning">
  <FiFlag size={12} />
  High Priority
</span>

// Status indicator
<div className="status-completed px-3 py-1 rounded-full">
  <FiCheckCircle size={16} />
  <span className="text-sm font-medium">Completed</span>
</div>
```

## 📝 Form Elements

### Input Classes

```css
.input {
  @apply w-full px-3 py-2 border border-neutral-300 rounded-lg 
         bg-white placeholder-neutral-500 focus:outline-none 
         focus:ring-2 focus:ring-primary-500 focus:border-transparent 
         dark:bg-neutral-800 dark:border-neutral-600;
}
```

### Usage Examples

```tsx
// Text input
<input
  type="text"
  placeholder="Task title..."
  className="input"
/>

// Textarea
<textarea
  placeholder="Task description..."
  rows={3}
  className="input resize-none"
/>
```

## 📐 Layout & Utilities

### Container

```css
.container-app {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

### Flexbox Utilities

```css
.flex-center  /* items-center justify-center */
.flex-between /* items-center justify-between */
.flex-start   /* items-center justify-start */
.flex-end     /* items-center justify-end */
```

### Animation Utilities

```css
.animate-fade-in   /* Fade in animation */
.animate-slide-up  /* Slide up animation */
.animate-scale-in  /* Scale in animation */
.spinner          /* Loading spinner */
```

## 📱 Responsive Breakpoints

```css
xs: 475px   /* Extra small devices */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X extra large devices */
3xl: 1792px /* 3X extra large devices */
```

## 🌙 Dark Mode

Dark mode is supported using class-based toggling:

```tsx
// Toggle dark mode
<html className={isDark ? 'dark' : ''}>
```

All components automatically adapt using dark: variants:

```css
/* Example component with dark mode */
.card {
  @apply bg-white dark:bg-neutral-800 
         border-neutral-200 dark:border-neutral-700;
}
```

## 🎯 Component Guidelines

### 1. Consistent Spacing
- Use multiples of 4px for spacing (Tailwind's default)
- Use `space-y-*` and `space-x-*` for consistent gaps
- Use `p-*` and `m-*` classes rather than arbitrary values

### 2. Color Usage
- **Primary**: Main brand actions and highlights
- **Neutral**: Text, borders, backgrounds
- **Success**: Completed states, positive actions
- **Warning**: Pending states, caution
- **Error**: Failed states, destructive actions

### 3. Interactive States
- Always include hover, focus, and active states
- Use `transition-all duration-200` for smooth animations
- Implement proper focus rings for accessibility

### 4. Accessibility
- Maintain WCAG contrast ratios
- Use semantic HTML elements
- Include proper ARIA labels and roles
- Ensure keyboard navigation works

## 🧪 Testing & Demo

### Design System Showcase
Visit `/design-system` to see all components and patterns:

```
http://localhost:5173/design-system
```

### Component Testing
Each component should be tested in:
- Light and dark modes
- Different screen sizes
- Various interaction states
- With and without content

## 🛠️ Development Workflow

### Adding New Components

1. **Create the component** with proper TypeScript interfaces
2. **Use design system classes** rather than arbitrary values
3. **Add dark mode support** with appropriate variants
4. **Include interactive states** (hover, focus, active)
5. **Test accessibility** with screen readers
6. **Update documentation** with usage examples

### Extending the Design System

1. **Add new colors** to `tailwind.config.ts`
2. **Create component classes** in `globals.css`
3. **Update documentation** with examples
4. **Add to showcase page** for testing

## 📚 Resources

- **Live Demo**: [/design-system](http://localhost:5173/design-system)
- **Icons Guide**: [docs/ICONS.md](./ICONS.md)
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/ 