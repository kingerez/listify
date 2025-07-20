import type { MetaFunction } from "@remix-run/node";
import { FaCheckSquare, FiPlus } from "~/lib/icons";
import { Header, Calendar } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Listify - Task Management App" },
    { name: "description", content: "A modern task management application built with Remix." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf7f2' }}>
      {/* Header Component - Already Built */}
      <Header userName="Aqeel" userGreeting="Start planning today" />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column - Calendar Component */}
          <div className="lg:col-span-1">
            <Calendar 
              highlightedDates={[
                new Date(2024, 3, 7),   // April 7th
                new Date(2024, 3, 14),  // April 14th
                new Date(2024, 3, 21),  // April 21st
                new Date(2024, 3, 28),  // April 28th
              ]}
              onDateSelect={(date) => {
                console.log('Selected date:', date);
              }}
            />
          </div>

          {/* Middle Column - Task List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {/* Add Task Button */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Today&apos;s Tasks</h2>
                <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  <FiPlus className="w-4 h-4" />
                  Add Task
                </button>
              </div>

              {/* Task Cards - Placeholder */}
              <div className="space-y-3">
                {[
                  { title: "Learn Javascript", status: "completed", date: "07-07-2023", priority: "high" },
                  { title: "Learn Javascript", status: "in-progress", date: "07-07-2023", priority: "medium" },
                  { title: "Learn Javascript", status: "pending", date: "07-07-2023", priority: "low" },
                ].map((task, index) => (
                  <div key={index} className="bg-orange-100 rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaCheckSquare className={`w-5 h-5 ${
                          task.status === "completed" ? "text-green-600" : "text-gray-400"
                        }`} />
                        <div>
                          <h3 className="font-medium text-gray-900">{task.title}</h3>
                          <p className="text-sm text-gray-600">Start date - {task.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          task.priority === "high" ? "bg-red-100 text-red-700" :
                          task.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        }`}>
                          {task.priority}
                        </span>
                        <div className="text-gray-400">⋮</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">📋 Task Card Component</p>
                <p className="text-xs text-blue-600 mt-1">Coming in LIS-6</p>
              </div>

              <button className="w-full py-3 text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
                Load more
              </button>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-800">04</div>
                  <div className="text-sm text-orange-600">COMPLETED TASKS</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-800">15</div>
                  <div className="text-sm text-purple-600">PENDING TASKS</div>
                </div>
              </div>

              {/* Task Created Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Task Created</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">1,500</div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">24k+ Active Users</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">📊 Statistics Component</p>
                <p className="text-xs text-purple-600 mt-1">Coming in LIS-7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Progress Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🚧 Component Development Progress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-green-600 text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-green-800">Header</h3>
              <p className="text-sm text-green-600">LIS-4 Complete</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-green-600 text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-green-800">Calendar</h3>
              <p className="text-sm text-green-600">LIS-5 Complete</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-orange-600 text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-orange-800">Task Cards</h3>
              <p className="text-sm text-orange-600">LIS-6 Next</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-gray-600 text-2xl mb-2">⏳</div>
              <h3 className="font-semibold text-gray-800">Statistics</h3>
              <p className="text-sm text-gray-600">LIS-7 Planned</p>
            </div>
          </div>
        </div>

        {/* Development Links */}
        <div className="mt-8 text-center">
          <div className="inline-flex gap-4">
            {developmentLinks.map(({ href, text, isExternal }) => (
              <a
                key={href}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const developmentLinks = [
  {
    href: "https://remix.run/docs",
    text: "Remix Documentation",
    isExternal: true,
  },
  {
    href: "https://react-icons.github.io/react-icons/",
    text: "React Icons Library",
    isExternal: true,
  },
  {
    href: "https://tailwindcss.com/docs",
    text: "Tailwind CSS Documentation",
    isExternal: true,
  },
];
