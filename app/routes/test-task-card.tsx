import type { MetaFunction } from '@remix-run/node';
import { TaskCard } from '../components/TaskCard';

export const meta: MetaFunction = () => [{ title: 'Test TaskCard - Listify' }];

export default function TestTaskCard() {
  const mockDate = new Date();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-text-primary mb-6">TaskCard Test Page</h1>
      <div className="grid gap-6">
        <TaskCard
          title="Learn TypeScript"
          description="Strong typing for safer code"
          dueDate={mockDate}
          priority="high"
          completed={false}
          onEdit={() => alert('Edit clicked')}
          onDelete={() => alert('Delete clicked')}
          onToggleComplete={() => alert('Toggle complete')}
        />
        <TaskCard
          title="Build Calendar"
          description="Display monthly calendar"
          dueDate={mockDate}
          priority="medium"
          completed={true}
          onEdit={() => alert('Edit clicked')}
          onDelete={() => alert('Delete clicked')}
          onToggleComplete={() => alert('Toggle complete')}
        />
        <p className="text-sm text-text-secondary">✔ Verify no errors and proper styling</p>
      </div>
    </div>
  );
} 