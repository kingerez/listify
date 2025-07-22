import type { MetaFunction } from "@remix-run/node";
import TaskCard from "~/components/TaskCard";

export const meta: MetaFunction = () => [
  { title: "Task Card Demo - Listify" },
  { name: "description", content: "TaskCard component showcase and testing" }
];

export default function TaskCardDemo() {
  const sampleTasks = [
    { id: 1, title: "Learn JavaScript", startDate: "2023-07-07", status: "completed" as const },
    { id: 2, title: "Build Calendar Widget", startDate: "2025-07-22", status: "in-progress" as const },
    { id: 3, title: "Design Filter Bar", startDate: "2025-07-21", status: "pending" as const },
    { id: 4, title: "Setup Data Models", startDate: "2025-07-23", status: "cancelled" as const }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <style dangerouslySetInnerHTML={{ __html: `body > header { display: none; }` }} />
      <div className="container-app py-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Task Card Demo
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              startDate={task.startDate}
              status={task.status}
              onClick={() => alert(`Clicked task ${task.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 