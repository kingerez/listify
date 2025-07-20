# Statistics Cards Component Documentation

The `StatisticsCards` component displays an overview of project metrics: Completed tasks, Pending tasks, and Total Projects.

## Component API

```tsx
interface StatisticsCardsProps {
  completed: number;      // Number of completed tasks
  pending: number;        // Number of pending tasks
  totalProjects: number;  // Total number of projects/tasks
}
```

### Usage Example

```tsx
import { StatisticsCards } from '../components/StatisticsCards';

<StatisticsCards
  completed={42}
  pending={17}
  totalProjects={128}
/>
```

## Styling and Behavior

- **Layout**: Responsive grid `grid grid-cols-1 md:grid-cols-3 gap-6`
- **Card backgrounds**:
  - **Completed**: `bg-success` (sage green)
  - **Pending**: `bg-coral` (coral red)
  - **Total Projects**: `bg-primary` (blue)
- **Text**: White text (`text-white`) with `text-3xl font-bold` for values and `text-sm opacity-90` for labels
- **Spacing**: `rounded-lg p-6 text-center`

## Test Page

Visit `/test-statistics-cards` to visualize and verify the component with different values.

## Integration

Replace static card markup with:

```tsx
<StatisticsCards completed={4} pending={15} totalProjects={1500} />
```

Ensure the component is imported:

```tsx
import { StatisticsCards } from '../components/StatisticsCards';
```

## Best Practices

- Pass dynamic data props to reflect real-time metrics
- Use Tailwind utility classes to control spacing and responsiveness
- Ensure text contrast meets accessibility guidelines

---

**With `StatisticsCards`, you can quickly provide high-level project insights!** 