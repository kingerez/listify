import type { MetaFunction } from "@remix-run/node";
import { FiCheckCircle, FiUsers, FiCalendar, IconSizes } from "~/utils/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Listify - Task Management Dashboard" },
    { name: "description", content: "A modern task management dashboard built with Remix" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Listify
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your modern task management dashboard
          </p>
        </header>
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <div className="text-center space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              🚀 Ready to start building your productivity app!
            </p>
            
            {/* Test react-icons integration */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <FiCheckCircle size={IconSizes.md} className="text-green-600" />
                <span className="text-sm text-gray-600">Icons Working</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers size={IconSizes.md} className="text-blue-600" />
                <span className="text-sm text-gray-600">234+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar size={IconSizes.md} className="text-purple-600" />
                <span className="text-sm text-gray-600">Calendar</span>
              </div>
            </div>
            
            <div className="pt-2 space-x-4 flex flex-wrap gap-2">
              <a 
                href="/icons-demo" 
                className="text-blue-600 hover:text-blue-800 text-sm underline"
              >
                Icons Demo →
              </a>
              <a 
                href="/design-system" 
                className="text-primary-600 hover:text-primary-800 text-sm underline"
              >
                Design System →
              </a>
              <a 
                href="/header-demo" 
                className="text-emerald-600 hover:text-emerald-800 text-sm underline"
              >
                Header Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
