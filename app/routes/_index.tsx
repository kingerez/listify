import type { MetaFunction } from "@remix-run/node";
import { HeroSection, FilterActionBar, ComingSoon } from "~/components";
import { FiFilter, FiUsers, FiCheckSquare, FiTrendingUp, FiCalendar, IconSizes } from "~/utils/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Listify - Task Management Dashboard" },
    { name: "description", content: "A modern task management dashboard built with Remix" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Filter Action Bar - Show in development */}
      <FilterActionBar 
        onAddTask={() => alert("Add Task - Coming in LIS-8!")}
        onSearch={(query) => console.log("Search:", query)}
      />

      {/* Main Dashboard Content */}
      <div className="container-app pb-16">
        {/* Development Progress Banner */}
        <div className="mb-8 p-4 bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex-center">
              <span className="text-white text-sm font-bold">🚧</span>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 dark:text-primary-100">
                App in Development
              </h3>
              <p className="text-sm text-primary-700 dark:text-primary-300">
                Watch our progress as we build Listify component by component
              </p>
            </div>
          </div>
        </div>

        {/* Completed Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
            ✅ Completed Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Header Component */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-success-100 dark:bg-success-900 rounded-lg flex-center">
                  <span className="text-success-600 dark:text-success-400 text-lg">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Header Component
                  </h3>
                  <span className="text-xs text-success-600 dark:text-success-400 font-medium">
                    LIS-4 ✓
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Navigation header with branding, user profile, and mobile menu
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-success">React</span>
                <span className="badge-success">TypeScript</span>
                <span className="badge-success">Responsive</span>
              </div>
            </div>

            {/* Hero Section */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-success-100 dark:bg-success-900 rounded-lg flex-center">
                  <span className="text-success-600 dark:text-success-400 text-lg">👋</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Hero Section
                  </h3>
                  <span className="text-xs text-success-600 dark:text-success-400 font-medium">
                    LIS-5 ✓
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Personalized greeting with dynamic date display
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-success">Personalized</span>
                <span className="badge-success">Date Formatting</span>
              </div>
            </div>

            {/* Design System */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-success-100 dark:bg-success-900 rounded-lg flex-center">
                  <span className="text-success-600 dark:text-success-400 text-lg">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Design System
                  </h3>
                  <span className="text-xs text-success-600 dark:text-success-400 font-medium">
                    LIS-16 ✓
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Complete styling foundation with colors, components, and utilities
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-success">Tailwind</span>
                <span className="badge-success">Dark Mode</span>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-success-100 dark:bg-success-900 rounded-lg flex-center">
                  <span className="text-success-600 dark:text-success-400 text-lg">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Calendar Widget</h3>
                  <span className="text-xs text-success-600 dark:text-success-400 font-medium">LIS-7 ✓</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Monthly view calendar for date selection and planning
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-success">React</span>
                <span className="badge-success">Date Picker</span>
                <span className="badge-success">Responsive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Up Next Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
            🔄 Coming Up Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {/* Filter & Action Bar - Now Completed! */}
             <div className="card p-6">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-success-100 dark:bg-success-900 rounded-lg flex-center">
                   <span className="text-success-600 dark:text-success-400 text-lg">🎛️</span>
                 </div>
                 <div>
                   <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                     Filter & Action Bar
                   </h3>
                   <span className="text-xs text-success-600 dark:text-success-400 font-medium">
                     LIS-6 ✓
                   </span>
                 </div>
               </div>
               <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                 Interactive filtering, search, and action buttons with responsive design
               </p>
               <div className="flex flex-wrap gap-2">
                 <span className="badge-success">Responsive</span>
                 <span className="badge-success">Search</span>
                 <span className="badge-success">Filters</span>
               </div>
             </div>
            
            <ComingSoon
              title="Task Cards"
              description="Individual task items with status, dates, and actions"
              ticketNumber="LIS-8"
              estimatedLines={150}
            />
          </div>
        </div>

        {/* Planned Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
            📋 Planned Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-4 text-center">
              <FiTrendingUp size={IconSizes.xl} className="text-neutral-400 mx-auto mb-3" />
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                Statistics Cards
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">LIS-9</span>
            </div>
            
            <div className="card p-4 text-center">
              <FiUsers size={IconSizes.xl} className="text-neutral-400 mx-auto mb-3" />
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                Active Users
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">LIS-10</span>
            </div>
            
            <div className="card p-4 text-center">
              <FiCheckSquare size={IconSizes.xl} className="text-neutral-400 mx-auto mb-3" />
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                Task Management
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">LIS-13</span>
            </div>
            
            <div className="card p-4 text-center">
              <span className="text-3xl mx-auto mb-3 block">📱</span>
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                Mobile App
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Future</span>
            </div>
          </div>
        </div>

        {/* Development Links */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            🛠️ Development Resources
          </h3>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/design-system" 
              className="btn-outline btn-sm"
            >
              <FiFilter size={IconSizes.sm} />
              Design System
            </a>
            <a 
              href="/icons-demo" 
              className="btn-outline btn-sm"
            >
              <span className="text-sm">🎨</span>
              Icons Demo
            </a>
                         <a 
               href="/header-demo" 
               className="btn-outline btn-sm"
             >
               <span className="text-sm">🎯</span>
               Header Demo
             </a>
             <a 
               href="/calendar-demo" 
               className="btn-outline btn-sm"
             >
               <FiCalendar size={IconSizes.sm} />
               Calendar Demo
             </a>
             <a 
               href="/filter-demo" 
               className="btn-outline btn-sm"
             >
               <span className="text-sm">🎛️</span>
               Filter Demo
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
