import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import FilterActionBar from "~/components/FilterActionBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Filter & Action Bar Demo - Listify" },
    { name: "description", content: "Showcase for Filter and Action Bar component" },
  ];
};

export default function FilterActionBarDemo() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    { label: "All", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Completed", value: "Completed" },
  ];

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  const handleActionClick = () => {
    alert("Add Task clicked");
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <FilterActionBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        onActionClick={handleActionClick}
      />
      <div className="container-app py-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Filter & Action Bar Demo
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Active filter: <strong>{activeFilter}</strong>
        </p>
      </div>
    </div>
  );
} 