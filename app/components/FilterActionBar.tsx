import { FiPlus, FiFilter, FiSearch, FiMoreHorizontal, FiCalendar, IconSizes } from "~/utils/icons";
import { useState, useEffect, useRef } from "react";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterActionBarProps {
  filters?: FilterOption[];
  activeFilter?: string;
  onFilterChange?: (filterId: string) => void;
  onAddTask?: () => void;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  className?: string;
}

export default function FilterActionBar({
  filters = [
    { id: "all", label: "All Tasks", count: 12 },
    { id: "today", label: "Today", count: 5 },
    { id: "upcoming", label: "Upcoming", count: 7 },
    { id: "completed", label: "Completed", count: 8 }
  ],
  activeFilter = "all",
  onFilterChange,
  onAddTask,
  onSearch,
  searchPlaceholder = "Search tasks...",
  className = ""
}: FilterActionBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className={`bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 ${className}`}>
      <div className="container-app">
        <div className="flex items-center justify-between py-4">
          {/* Filter Buttons */}
          <div className="flex items-center gap-2 flex-1">
            <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => onFilterChange?.(filter.id)}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${activeFilter === filter.id
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }
                  `}
                  aria-pressed={activeFilter === filter.id}
                >
                  <span>{filter.label}</span>
                  {filter.count !== undefined && (
                    <span className={`
                      ml-2 px-2 py-0.5 rounded-full text-xs
                      ${activeFilter === filter.id
                        ? 'bg-neutral-100 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300'
                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                      }
                    `}>
                      {filter.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Advanced Filter Button */}
            <button
              className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Advanced filters"
            >
              <FiFilter size={IconSizes.sm} />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-48 px-3 py-2 pr-8 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    onBlur={() => {
                      if (!searchQuery) setShowSearch(false);
                    }}
                  />
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery("");
                      handleSearchChange("");
                    }}
                    className="absolute right-2 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                  >
                    <FiSearch size={IconSizes.sm} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                  aria-label="Search tasks"
                >
                  <FiSearch size={IconSizes.md} />
                </button>
              )}
            </div>

            {/* Calendar Quick Access */}
            <button
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Calendar view"
            >
              <FiCalendar size={IconSizes.md} />
            </button>

            {/* Add Task Button */}
            <button
              onClick={onAddTask}
              className="btn-primary btn-sm"
            >
              <FiPlus size={IconSizes.sm} />
              <span className="hidden sm:inline">Add Task</span>
            </button>

            {/* More Actions */}
            <div className="relative">
              <button
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="More actions"
              >
                <FiMoreHorizontal size={IconSizes.md} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filter Pills (shown on smaller screens) */}
        <div className="md:hidden pb-4">
          <div className="flex gap-2 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={`mobile-${filter.id}`}
                onClick={() => onFilterChange?.(filter.id)}
                className={`
                  flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200
                  ${activeFilter === filter.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }
                `}
              >
                {filter.label}
                {filter.count !== undefined && (
                  <span className="ml-1">({filter.count})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 