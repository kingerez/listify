# Task Card Component Documentation

The TaskCard component displays individual tasks with title, description, due date, priority, and actions.

## Component API

```tsx
interface TaskCardProps {
  title: string;                       // Task title (required)
  description?: string;                // Optional task description
  dueDate?: Date;                      // Optional due date
  priority?: 'low' | 'medium' | 'high';// Priority level (default: 'medium')
  completed?: boolean;                 // Completion state (default: false)
  onEdit?: () => void;                 // Edit button handler
  onDelete?: () => void;               // Delete button handler
  onToggleComplete?: () => void;       // Toggle complete handler
}
```

### Usage Example

```tsx
<TaskCard
  title="Write documentation"
  description="Finalize the API docs for the project"
  dueDate={new Date()}
  priority="high"
  completed={false}
  onEdit={() => console.log('Edit')}
  onDelete={() => console.log('Delete')}
  onToggleComplete={() => console.log('Toggle complete')}
/>
```

### Styling and Behavior

- **Container**: `bg-surface rounded-lg p-4 shadow-sm`
- **Title**: `text-lg font-semibold`; struck through when completed
- **Description**: `text-text-secondary text-sm`
- **Due date**: `text-text-secondary text-xs`
- **Priority badge**: colored (`bg-sage`, `bg-warning`, `bg-coral`) with `text-white`
- **Action buttons**: Small icon buttons for edit, delete, complete
- **Hover states**: Buttons and card elements have hover feedback

### Test Page

Visit `/test-task-card` to see the component with various states:
- Incomplete vs complete
- Different priority levels
- Action button interactions 