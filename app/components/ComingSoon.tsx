import { FiClock, IconSizes } from "~/utils/icons";

interface ComingSoonProps {
  title: string;
  description: string;
  ticketNumber?: string;
  estimatedLines?: number;
  className?: string;
}

export default function ComingSoon({ 
  title, 
  description, 
  ticketNumber,
  estimatedLines,
  className = "" 
}: ComingSoonProps) {
  return (
    <div className={`card p-6 text-center ${className}`}>
      <div className="mb-4">
        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex-center mx-auto mb-3">
          <FiClock size={IconSizes.lg} className="text-neutral-500 dark:text-neutral-400" />
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          {description}
        </p>
      </div>
      
      <div className="space-y-2">
        {ticketNumber && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-950 rounded-full">
            <span className="text-xs font-medium text-primary-700 dark:text-primary-300">
              {ticketNumber}
            </span>
          </div>
        )}
        {estimatedLines && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            ~{estimatedLines} lines of code
          </p>
        )}
      </div>
    </div>
  );
} 