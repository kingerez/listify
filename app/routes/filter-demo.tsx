import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { FilterActionBar } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Filter Action Bar Demo - Listify" },
    { name: "description", content: "FilterActionBar component showcase and testing" },
  ];
};

export default function FilterDemoPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Demo data
  const taskFilters = [
    { id: "all", label: "All Tasks", count: 24 },
    { id: "today", label: "Today", count: 5 },
    { id: "upcoming", label: "Upcoming", count: 12 },
    { id: "completed", label: "Completed", count: 7 }
  ];

  const projectFilters = [
    { id: "all", label: "All Projects", count: 8 },
    { id: "active", label: "Active", count: 5 },
    { id: "on-hold", label: "On Hold", count: 2 },
    { id: "completed", label: "Completed", count: 1 }
  ];

  const handleAddTask = () => {
    alert("Add Task clicked! This would open a task creation modal.");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hide the default header for this demo */}
      <style dangerouslySetInnerHTML={{ __html: `
        body > header { display: none; }
      `}} />

      <div className="container-app py-8">
        {/* Demo Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Filter Action Bar Demo
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Interactive showcase of the FilterActionBar component with different configurations
          </p>
        </div>

        {/* Default Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Task Filter Bar (Default)</h2>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <FilterActionBar
              filters={taskFilters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              onAddTask={handleAddTask}
              onSearch={handleSearch}
            />
          </div>
          <div className="mt-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <p className="text-sm">
              <strong>Active Filter:</strong> {taskFilters.find(f => f.id === activeFilter)?.label}
            </p>
            {searchQuery && (
              <p className="text-sm mt-1">
                <strong>Search Query:</strong> "{searchQuery}"
              </p>
            )}
          </div>
        </section>

        {/* Project Filter Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Filter Bar</h2>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <FilterActionBar
              filters={projectFilters}
              activeFilter="active"
              searchPlaceholder="Search projects..."
              onAddTask={() => alert("Add Project clicked!")}
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Custom filters and placeholder text for project management
          </p>
        </section>

        {/* Minimal Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Minimal Configuration</h2>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <FilterActionBar
              filters={[
                { id: "all", label: "All" },
                { id: "active", label: "Active" },
                { id: "done", label: "Done" }
              ]}
              onAddTask={() => alert("Quick add!")}
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Simple filters without counts, minimal setup
          </p>
        </section>

        {/* Features Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Component Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Filter System */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">🎯 Smart Filtering</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Active/inactive filter states</li>
                <li>• Task count badges</li>
                <li>• Smooth transitions</li>
                <li>• Keyboard navigation</li>
                <li>• Mobile-optimized pills</li>
              </ul>
            </div>

            {/* Search Functionality */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">🔍 Advanced Search</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Expandable search input</li>
                <li>• Real-time search callback</li>
                <li>• Custom placeholder text</li>
                <li>• Click outside to close</li>
                <li>• Focus management</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">⚡ Quick Actions</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Primary "Add Task" button</li>
                <li>• Calendar quick access</li>
                <li>• Advanced filter toggle</li>
                <li>• More actions menu</li>
                <li>• Icon-only mobile view</li>
              </ul>
            </div>

            {/* Responsive Design */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">📱 Responsive</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Desktop filter tabs</li>
                <li>• Mobile filter pills</li>
                <li>• Collapsible text labels</li>
                <li>• Touch-friendly targets</li>
                <li>• Overflow scrolling</li>
              </ul>
            </div>

            {/* Accessibility */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">♿ Accessibility</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• ARIA pressed states</li>
                <li>• Screen reader labels</li>
                <li>• Keyboard navigation</li>
                <li>• Focus indicators</li>
                <li>• Semantic markup</li>
              </ul>
            </div>

            {/* Customization */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">🎨 Customizable</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Custom filter options</li>
                <li>• Configurable callbacks</li>
                <li>• Flexible styling</li>
                <li>• Optional counts</li>
                <li>• Brand integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Implementation Guide</h2>
          
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
            <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg text-sm overflow-x-auto">
{`import { FilterActionBar } from "~/components";

// Basic implementation
<FilterActionBar
  filters={[
    { id: "all", label: "All Tasks", count: 12 },
    { id: "today", label: "Today", count: 5 },
    { id: "completed", label: "Completed", count: 8 }
  ]}
  activeFilter={currentFilter}
  onFilterChange={setCurrentFilter}
  onAddTask={() => openTaskModal()}
  onSearch={(query) => searchTasks(query)}
/>

// With custom configuration
<FilterActionBar
  filters={customFilters}
  searchPlaceholder="Search projects..."
  onAddTask={handleAddProject}
  className="border-t"
/>`}
            </pre>
          </div>
        </section>

        {/* Mobile Demo Instructions */}
        <section className="mb-12">
          <div className="card p-6 bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
              📱 Mobile Demo
            </h3>
            <p className="text-primary-700 dark:text-primary-300 text-sm">
              Resize your browser window or view on mobile to see the responsive filter pills and 
              icon-only button states. The filter tabs transform into scrollable pills on smaller screens.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            FilterActionBar Component - Part of the Listify Design System
          </p>
        </footer>
      </div>
    </div>
  );
} 