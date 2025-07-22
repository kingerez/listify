# Listify Component Library

Comprehensive documentation for all UI components in the Listify application.

## 🏗️ Header Component

The main navigation header with branding and user profile functionality. **Now globally integrated into the app layout!**

### Basic Usage

```tsx
import { Header } from "~/components";

function App() {
  return (
    <Header
      userName="John Doe"
      onProfileClick={() => console.log('Profile clicked')}
      onSettingsClick={() => console.log('Settings clicked')}
      onLogoutClick={() => console.log('Logout clicked')}
    />
  );
}
```

### Props Interface

```tsx
interface HeaderProps {
  userName?: string;        // Display name for user
  userAvatar?: string;      // URL to user avatar image  
  onProfileClick?: () => void;   // Profile menu click handler
  onSettingsClick?: () => void;  // Settings menu click handler
  onLogoutClick?: () => void;    // Logout menu click handler
}
```

### Features

#### 🎨 **Branding Section**
- **Vitra Lab Logo**: Custom brand icon with "V" monogram
- **Brand Name**: "Vitra Lab" with tagline "Task Management"
- **Responsive**: Tagline hidden on small screens
- **Consistent**: Matches Figma design specifications

#### 👤 **User Profile Section**
- **Avatar Display**: Custom image or placeholder with user icon
- **Online Status**: Green indicator showing user is active
- **User Info**: Name and "Welcome back" message (hidden on mobile)
- **Interactive Dropdown**: Profile, settings, and logout options

#### 📱 **Responsive Design**
- **Mobile First**: Optimized for touch interfaces
- **Adaptive Content**: Hide secondary information on small screens
- **Flexible Layout**: Uses container system for consistent spacing
- **Touch Targets**: Proper sizing for mobile interactions

#### ♿ **Accessibility**
- **ARIA Attributes**: Proper `aria-expanded` and `aria-haspopup`
- **Keyboard Navigation**: Full keyboard support for dropdown
- **Screen Reader Friendly**: Meaningful alt text and labels
- **Focus Management**: Visible focus indicators and logical tab order

### Component Architecture

The Header is composed of two main components:

1. **Header.tsx** - Main container component
2. **UserDropdown.tsx** - Standalone dropdown with state management

### Styling Classes

The Header uses our design system classes:

```css
/* Layout */
.container-app     /* Main container with responsive padding */
.flex-between      /* Space-between flex layout */
.flex-center       /* Centered flex layout */

/* Interactive States */
hover:bg-neutral-100   /* Subtle hover effects */
transition-colors      /* Smooth color transitions */
focus:ring-2          /* Focus indicators */

/* Component Specific */
.card                 /* Used for dropdown menu */
.animate-fade-in      /* Dropdown entrance animation */
```

### Usage Examples

#### With Custom Avatar
```tsx
<Header
  userName="Sarah Wilson"
  userAvatar="https://example.com/avatar.jpg"
  onProfileClick={handleProfile}
  onSettingsClick={handleSettings}
  onLogoutClick={handleLogout}
/>
```

#### Minimal Setup
```tsx
<Header userName="Guest User" />
```

#### With All Handlers
```tsx
<Header
  userName="Admin User"
  userAvatar="/admin-avatar.png"
  onProfileClick={() => router.push('/profile')}
  onSettingsClick={() => router.push('/settings')}
  onLogoutClick={() => auth.logout()}
/>
```

### Global Integration

The Header component is now integrated into the global layout (`app/root.tsx`) and appears on every page automatically.

#### Layout Details
- **Position**: Sticky header at top of every page (`sticky top-0 z-50`)
- **Height**: `h-16` (64px) - accounted for with `pt-16` on main content
- **Container**: Uses `.container-app` for consistent responsive padding
- **Background**: White with dark mode support and bottom border separation

#### State Management
- Pass user data from your auth system/store
- Handle dropdown actions according to your routing setup
- Consider loading states for user avatar images

#### Customization
- Brand colors use the `primary-*` color scale
- User avatar falls back to icon if image fails to load
- Online indicator can be conditionally shown based on user status

## 🧩 UserDropdown Component

Standalone dropdown component used within the Header.

### Features
- **Click Outside**: Automatically closes when clicking elsewhere
- **State Management**: Internal open/close state with React hooks
- **Animations**: Smooth dropdown appearance with fade-in effect
- **Accessibility**: Full keyboard support and ARIA attributes

### Usage
```tsx
import { UserDropdown } from "~/components";

<UserDropdown
  userName="John Doe"
  userAvatar="/avatar.jpg"
  onProfileClick={handleProfile}
  onSettingsClick={handleSettings}
  onLogoutClick={handleLogout}
/>
```

## 🔎 FilterActionBar Component

Displays a set of filter buttons with active/inactive states and an action button for adding tasks.

```tsx
import FilterActionBar from "~/components/FilterActionBar";

<FilterActionBar
  filters={[
    { label: "All", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Completed", value: "Completed" },
  ]}
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
  onActionClick={handleAddTask}
/>
```

### Props

```ts
interface FilterActionBarProps {
  filters: { label: string; value: string }[];  // Options for filter buttons
  activeFilter: string;                        // Currently selected filter value
  onFilterChange: (value: string) => void;    // Callback when a filter button is clicked
  onActionClick: () => void;                 // Callback when the action button is clicked
}
```

### Styling & Accessibility

- **Container:** `.container-app`, `.bg-white dark:bg-neutral-800`, `.border-b`
- **Filter Buttons:** `.btn`, `.btn-sm`, `.btn-primary` (active), `.btn-outline` (inactive)
- **Action Button:** `.btn`, `.btn-primary`, `.btn-sm`, with `inline-flex` and `gap-2`
- **Icons:** Uses `FiFilter` for filters & `FiPlus` for action, with accessible labels
- **ARIA:** `aria-pressed` on filter buttons for screen readers
- **Keyboard:** All buttons focusable with visible focus rings

## 📅 CalendarWidget Component

Displays a calendar month view with date selection functionality.

```tsx
import CalendarWidget from "~/components/CalendarWidget";

<CalendarWidget
  initialDate={new Date()}
  onDateSelect={(date) => console.log(date)}
/>
```

### Props

```ts
interface CalendarWidgetProps {
  initialDate?: Date;                // Defaults to today
  onDateSelect?: (date: Date) => void; // Callback when a date is clicked
}
```

### Styling & Accessibility

- **Container:** `.card`, `.bg-white dark:bg-neutral-800`, `.rounded-lg`, `.border`
- **Header Navigation:** `.btn`, `.btn-sm`, `.font-semibold`, with left/right chevrons
- **Weekdays Row:** `.grid grid-cols-7`, `.text-center`, `.text-xs font-medium`
- **Date Buttons:** `.w-8 h-8`, `.flex-center`, rounded borders, active states:
  - Selected: `bg-primary-600 text-white`
  - Today: `bg-primary-100 text-primary-700`
  - Hover: `hover:bg-neutral-100 dark:hover:bg-neutral-700`
- **Keyboard:** All dates are buttons, focusable with visible rings

## 📋 Component Checklist

When creating new components, ensure they follow these standards:

### ✅ **Design System Compliance**
- [ ] Uses design system color classes (`primary-*`, `neutral-*`)
- [ ] Follows typography scale (`text-*`, font weights)
- [ ] Uses consistent spacing (`p-*`, `m-*`, `gap-*`)
- [ ] Includes dark mode support (`dark:*` variants)

### ✅ **Responsive Design**
- [ ] Mobile-first approach
- [ ] Proper breakpoint usage (`sm:`, `md:`, `lg:`, `xl:`)
- [ ] Touch-friendly interactions (min 44px touch targets)
- [ ] Content priority for different screen sizes

### ✅ **Accessibility**
- [ ] Semantic HTML elements
- [ ] ARIA attributes where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG standards

### ✅ **TypeScript**
- [ ] Proper interface definitions
- [ ] Optional and required props clearly marked
- [ ] Generic types where appropriate
- [ ] JSDoc comments for complex props

### ✅ **Performance**
- [ ] Efficient re-rendering (proper memo usage if needed)
- [ ] Optimized images and assets
- [ ] Lazy loading for heavy components
- [ ] Bundle size considerations

## 🎮 Testing & Demo

### Live Demos
- **Header Demo**: `/header-demo` - Full header showcase
- **Design System**: `/design-system` - All design tokens and components
- **Icons Demo**: `/icons-demo` - Icon library showcase

### Testing Checklist
- [ ] Component renders correctly
- [ ] All interactive elements work
- [ ] Responsive behavior on different screen sizes
- [ ] Dark mode support functions properly
- [ ] Accessibility testing with screen reader
- [ ] Keyboard navigation works

## 📚 Resources

- **Component Library**: [/header-demo](http://localhost:5173/header-demo)
- **Design System**: [docs/DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **Icons Guide**: [docs/ICONS.md](./ICONS.md)
- **Figma Design**: Original design reference for component specifications 