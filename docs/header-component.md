# Header Component Documentation

The Header component provides the main navigation and branding for the Listify application, based on the Figma design specifications.

## Features

### 🎨 Design
- Vista Lab branding with Poppins font
- Consistent background color (`#f2eaea`) matching Figma
- Subtle shadow for depth
- Clean, modern aesthetic

### 📱 Responsive Behavior
- **Desktop (md+)**: Full navigation menu visible
- **Tablet/Mobile**: Collapsible hamburger menu
- **Small screens**: User greeting hidden, compact layout
- Touch-friendly button sizes (minimum 44px)

### ♿ Accessibility
- Proper ARIA labels for screen readers
- Semantic HTML structure with `<nav>` and `role="navigation"`
- Keyboard navigation support
- Focus indicators with ring styling
- Meaningful button labels

### 🔄 Interactive Features
- Active page highlighting
- Smooth hover transitions
- Mobile menu toggle with icon switching
- Search and profile click handlers

## Component API

### Header Props

```tsx
interface HeaderProps {
  userName?: string;           // Display name (default: "Aqeel")
  onSearchClick?: () => void;  // Search button handler
  onProfileClick?: () => void; // Profile button handler
  currentPath?: string;        // Active page path (default: "/")
}
```

### Usage Examples

#### Basic Usage
```tsx
import { Header } from '../components/Header';

<Header 
  userName="John Doe"
  currentPath="/dashboard"
  onSearchClick={() => console.log('Search clicked')}
  onProfileClick={() => console.log('Profile clicked')}
/>
```

#### With Layout Components
```tsx
import { Layout, DashboardLayout } from '../components/Layout';

// Basic Layout
<Layout
  userName="Jane Smith"
  currentPath="/tasks"
  onSearchClick={handleSearch}
  onProfileClick={handleProfile}
>
  <YourContent />
</Layout>

// Dashboard Layout with Sidebar
<DashboardLayout
  userName="Bob Johnson"
  currentPath="/projects"
  sidebar={<YourSidebar />}
>
  <YourMainContent />
</DashboardLayout>
```

## Navigation Structure

The header includes these navigation items:

- **Dashboard** (`/`) - Main overview page
- **Tasks** (`/tasks`) - Task management
- **Calendar** (`/calendar`) - Calendar view
- **Projects** (`/projects`) - Project management

Active states are automatically applied based on the `currentPath` prop.

## Layout Components

### Layout
Basic layout with header and main content area.

### DashboardLayout
Extended layout with optional sidebar for dashboard-style interfaces.

```tsx
interface DashboardLayoutProps extends LayoutProps {
  sidebar?: ReactNode;  // Optional sidebar content
}
```

## Styling Guidelines

### Colors Used
- Background: `#f2eaea` (matches Figma design)
- Text Primary: `text-text-primary` (dark charcoal)
- Text Secondary: `text-text-secondary` (medium gray)
- Primary Actions: `bg-primary` (blue)
- Active States: `bg-primary/10` with `text-primary`

### Typography
- Brand name: `text-2xl font-bold` with Poppins font
- Navigation: `font-medium` for readability
- User greeting: `font-medium` for emphasis

### Spacing
- Container padding: `px-4 py-4`
- Element spacing: `space-x-3`, `space-x-4`, `space-x-8`
- Avatar size: `w-10 h-10` for better touch targets

## Mobile Menu Behavior

The mobile menu:
1. Shows hamburger icon (`RiMenuLine`) when closed
2. Shows close icon (`RiCloseLine`) when open
3. Toggles with smooth transitions
4. Auto-closes when navigation link is clicked
5. Hidden on desktop screens (`md:hidden`)

## Testing

Visit `/test-header` to see the component in action with:
- Interactive examples
- Layout switching (Basic ↔ Dashboard)
- Responsive behavior testing
- Accessibility verification

## Customization

### Adding New Navigation Items
Update the `navigationItems` array in the Header component:

```tsx
const navigationItems = [
  { href: "/", label: "Dashboard", isActive: currentPath === "/" },
  { href: "/new-page", label: "New Page", isActive: currentPath === "/new-page" },
  // ... more items
];
```

### Styling Modifications
The component uses Tailwind classes that can be customized:
- Background: Change `bg-[#f2eaea]` to your preferred color
- Hover effects: Modify `hover:` classes
- Active states: Update `bg-primary/10` and `text-primary`

## Best Practices

1. **Always provide `currentPath`** for proper active state highlighting
2. **Handle search and profile clicks** appropriately for your app
3. **Test mobile behavior** at different screen sizes
4. **Verify accessibility** with keyboard navigation
5. **Use Layout components** for consistent page structure 