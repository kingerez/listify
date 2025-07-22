import type { ReactNode } from "react";
import { FiCircle, FiCheckCircle, IconSizes } from "~/utils/icons";

export interface TaskCardProps {
  title: string;
  startDate: Date | string;
  status: "completed" | "pending" | "in-progress" | "cancelled";
  onClick?: () => void;
  children?: ReactNode;
}

export default function TaskCard({ title, startDate, status, onClick, children }: TaskCardProps) {
  const dateObj = new Date(startDate);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const statusClass = {
    completed: 'status-completed',
    pending: 'status-pending',
    'in-progress': 'status-in-progress',
    cancelled: 'badge-danger'
  }[status];

  return (
    <button onClick={onClick} className="card-hover p-4 text-left w-full">
      <div className="flex-between mb-2">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{title}</h3>
        <span className={`${statusClass} inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs`}>
          <FiCircle size={IconSizes.xs} className="text-current" />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
        <FiCheckCircle size={IconSizes.sm} className="text-neutral-400 dark:text-neutral-600" />
        <span>{formattedDate}</span>
      </div>
      {children && <div className="mt-3">{children}</div>}
    </button>
  );
} 