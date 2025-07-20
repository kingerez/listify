// Removed date-fns to avoid extra dependency
import { IconButton } from './Icon';
import { RiEditLine, RiDeleteBinLine, RiCheckboxCircleLine } from '../lib/icons';

export interface TaskCardProps {
  title: string;
  description?: string;
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onToggleComplete?: () => void;
}

export function TaskCard({
  title,
  description,
  dueDate,
  priority = 'medium',
  completed = false,
  onEdit,
  onDelete,
  onToggleComplete,
}: TaskCardProps) {
  const priorityColors = {
    low: 'bg-sage text-white',
    medium: 'bg-warning text-white',
    high: 'bg-coral text-white',
  };

  return (
    <div className="bg-surface rounded-lg p-4 shadow-sm flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${completed ? 'line-through text-text-muted' : 'text-text-primary'}`}>
          {title}
        </h3>
        <button onClick={onToggleComplete} aria-label="Toggle complete">
          <IconButton icon={RiCheckboxCircleLine} size="md" className={completed ? 'text-success' : 'text-text-secondary'} />
        </button>
      </div>
      {description && <p className="text-text-secondary text-sm">{description}</p>}
      <div className="flex items-center justify-between text-xs">
        {dueDate && (
          <time dateTime={dueDate.toISOString()} className="text-text-secondary">
            Due: {dueDate.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
        )}
        <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[priority]}`}>{priority}</span>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <IconButton icon={RiEditLine} size="sm" onClick={onEdit} aria-label="Edit task" />
        <IconButton icon={RiDeleteBinLine} size="sm" onClick={onDelete} aria-label="Delete task" />
      </div>
    </div>
  );
} 