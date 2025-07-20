# Icon System Documentation

This project uses `react-icons` for consistent iconography throughout the application.

## Setup

The icon system consists of two main files:

1. **`app/lib/icons.ts`** - Centralized icon exports
2. **`app/components/Icon.tsx`** - Reusable icon components

## Usage

### Basic Icon Usage

```tsx
import { RiUserLine, RiAddLine } from '../lib/icons';
import { Icon } from '../components/Icon';

// Basic icon
<Icon icon={RiUserLine} size="md" className="text-primary" />

// Different sizes
<Icon icon={RiAddLine} size="sm" />   // 16px
<Icon icon={RiAddLine} size="md" />   // 20px (default)
<Icon icon={RiAddLine} size="lg" />   // 24px
<Icon icon={RiAddLine} size="xl" />   // 32px
```

### Icon Button Component

```tsx
import { RiAddLine } from '../lib/icons';
import { IconButton } from '../components/Icon';

<IconButton 
  icon={RiAddLine} 
  size="lg"
  onClick={() => console.log('Clicked!')}
  className="text-success"
/>
```

## Available Icon Sets

The project includes icons from three main react-icons packages:

- **Remix Icons (ri)** - Primary icon set, modern and consistent
- **Heroicons (hi)** - Additional modern icons for specific use cases  
- **Feather Icons (fi)** - Clean minimal icons

## Icon Categories

### User & Authentication
- `RiUserLine`, `RiUserFill`
- `RiLoginBoxLine`, `RiLogoutBoxLine`

### Actions & Interface  
- `RiAddLine`, `RiCloseLine`, `RiSearchLine`
- `RiMenuLine`, `RiEditLine`, `RiDeleteBinLine`

### Status & Feedback
- `RiCheckLine`, `RiCheckboxCircleLine`
- `RiErrorWarningLine`, `RiInformationLine`

### Navigation
- `RiArrowLeftLine`, `RiArrowRightLine`
- `RiHomeLine`

### Tasks & Productivity
- `RiTodoLine`, `RiCalendarLine`
- `RiTimeLine`, `RiFlag2Line`

### Social & Communication
- `RiTwitterLine`, `RiLinkedinLine`
- `RiFacebookLine`, `RiMailLine`

## Styling Guidelines

1. **Use consistent sizes** - Stick to the predefined size system
2. **Apply semantic colors** - Use design system colors (`text-primary`, `text-success`, etc.)
3. **Interactive states** - IconButton includes hover and focus states
4. **Accessibility** - Icons include proper ARIA attributes

## Testing

Visit `/test-icons` to see all icon components in action and verify they're working correctly.

## Adding New Icons

1. Import the icon from react-icons in `app/lib/icons.ts`
2. Add it to the appropriate category export
3. Update this documentation if it's a new category 