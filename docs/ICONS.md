# React Icons Guide for Listify

This guide covers how to use react-icons in the Listify application for consistent iconography.

## 📦 Installation

react-icons is already installed and configured in the project:

```bash
npm install react-icons
```

## 🎯 Quick Start

### Import Icons from Utility

```tsx
import { FiHome, FiUser, FiPlus, IconSizes, IconColors } from "~/utils/icons";

function MyComponent() {
  return (
    <div>
      <FiHome size={IconSizes.lg} className={IconColors.primary} />
      <FiUser size={20} className="text-gray-600" />
      <FiPlus size="24px" />
    </div>
  );
}
```

### Direct Import (Alternative)

```tsx
import { FiHome, FiUser } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { BsKanban } from "react-icons/bs";
```

## 🎨 Available Icon Sets

### Feather Icons (Primary - `fi`)
Clean, minimal icons perfect for modern UIs
- **Navigation**: `FiHome`, `FiSettings`, `FiMenu`, `FiSearch`
- **Users**: `FiUser`, `FiUsers`, `FiUserPlus`
- **Tasks**: `FiPlus`, `FiEdit`, `FiTrash2`, `FiCheck`, `FiCheckCircle`
- **Time**: `FiClock`, `FiCalendar`

### Material Design Icons (`md`)
Google's Material Design icon set
- `MdDashboard`, `MdTask`, `MdToday`, `MdSchedule`

### Bootstrap Icons (`bs`)
Comprehensive icon set from Bootstrap
- `BsKanban`, `BsListTask`, `BsCalendarEvent`

### Heroicons (`hi`)
Tailwind CSS's icon set
- `HiOutlineViewGrid`, `HiOutlineClipboardList`

## 📏 Predefined Sizes

```tsx
export const IconSizes = {
  xs: 12,    // 12px - small indicators
  sm: 16,    // 16px - inline text icons
  md: 20,    // 20px - default UI icons
  lg: 24,    // 24px - prominent icons
  xl: 32,    // 32px - large feature icons
  xxl: 48,   // 48px - hero/showcase icons
} as const;
```

### Usage Examples

```tsx
// Different size approaches
<FiHome size={IconSizes.lg} />
<FiHome size={24} />
<FiHome size="24px" />
<FiHome /> // Default browser size
```

## 🎨 Color Classes (Tailwind)

```tsx
export const IconColors = {
  primary: "text-blue-600",     // Primary brand color
  secondary: "text-gray-500",   // Secondary text
  success: "text-green-600",    // Success states
  warning: "text-yellow-600",   // Warning states  
  error: "text-red-600",        // Error states
  muted: "text-gray-400",       // Disabled/muted
} as const;
```

### Color Usage

```tsx
<FiCheckCircle className={IconColors.success} />
<FiTrash2 className={IconColors.error} />
<FiClock className="text-purple-600" /> // Custom color
```

## 🏗️ Common Patterns

### Icon Buttons

```tsx
function IconButton({ icon: Icon, label, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      <Icon size={IconSizes.sm} />
      <span>{label}</span>
    </button>
  );
}

// Usage
<IconButton icon={FiPlus} label="Add Task" onClick={handleAdd} />
```

### Status Indicators

```tsx
function TaskStatus({ completed }) {
  return (
    <div className="flex items-center gap-2">
      {completed ? (
        <FiCheckCircle size={IconSizes.md} className={IconColors.success} />
      ) : (
        <FiCircle size={IconSizes.md} className={IconColors.muted} />
      )}
      <span>{completed ? 'Completed' : 'Pending'}</span>
    </div>
  );
}
```

### Navigation Items

```tsx
function NavItem({ icon: Icon, label, active }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${
      active ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
    }`}>
      <Icon size={IconSizes.md} />
      <span>{label}</span>
    </div>
  );
}
```

## 🧩 Component Guidelines

### 1. Consistent Sizing
- Use predefined `IconSizes` for consistency
- Default to `IconSizes.md` (20px) for most UI elements
- Use `IconSizes.lg` (24px) for prominent actions

### 2. Semantic Color Usage
- Success actions: `IconColors.success` (green)
- Destructive actions: `IconColors.error` (red)
- Primary actions: `IconColors.primary` (blue)
- Secondary info: `IconColors.secondary` (gray)

### 3. Icon Selection
- **Primary set**: Use Feather Icons (`fi`) for consistency
- **Special cases**: Use Material (`md`) or Bootstrap (`bs`) when Feather doesn't have suitable icon
- **Avoid mixing**: Don't mix different icon sets in the same component

### 4. Accessibility
```tsx
// Add screen reader labels for icon-only buttons
<button aria-label="Delete task">
  <FiTrash2 size={IconSizes.md} />
</button>

// Icons with text don't need labels
<button>
  <FiEdit size={IconSizes.sm} />
  <span>Edit</span>
</button>
```

## 🎮 Testing & Demo

Visit `/icons-demo` to see all available icons and test the integration:

```
http://localhost:5173/icons-demo
```

## 🔧 Customization

### Adding New Icons

1. Import the icon in `app/utils/icons.ts`:
```tsx
export { FiNewIcon } from "react-icons/fi";
```

2. Add to appropriate category comment
3. Update this documentation

### Custom Icon Component

```tsx
interface CustomIconProps {
  icon: IconComponent;
  size?: keyof typeof IconSizes;
  color?: keyof typeof IconColors;
  className?: string;
}

function CustomIcon({ icon: Icon, size = 'md', color = 'primary', className = '' }: CustomIconProps) {
  return (
    <Icon 
      size={IconSizes[size]} 
      className={`${IconColors[color]} ${className}`} 
    />
  );
}
```

## 📚 Resources

- **react-icons Documentation**: https://react-icons.github.io/react-icons/
- **Icon Search**: https://react-icons.github.io/react-icons/search
- **Feather Icons**: https://feathericons.com/
- **Material Icons**: https://fonts.google.com/icons 