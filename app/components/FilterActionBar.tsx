import type { FC } from "react";
import { FiFilter, FiPlus, IconSizes, IconColors } from "~/utils/icons";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterActionBarProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (value: string) => void;
  onActionClick: () => void;
}

const FilterActionBar: FC<FilterActionBarProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  onActionClick,
}) => {
  return (
    <div className="container-app flex items-center justify-between py-4 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            aria-pressed={activeFilter === filter.value}
            className={`btn btn-sm ${activeFilter === filter.value ? 'btn-primary' : 'btn-outline'}`}
          >
            <FiFilter size={IconSizes.sm} className={`${activeFilter === filter.value ? IconColors.primary : IconColors.secondary}`} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>
      <button
        onClick={onActionClick}
        className="btn btn-primary btn-sm inline-flex items-center gap-2"
      >
        <FiPlus size={IconSizes.sm} />
        Add Task
      </button>
    </div>
  );
};

export default FilterActionBar; 