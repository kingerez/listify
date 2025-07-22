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
    <div className="container-app">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">
              Welcome to Listify
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Your modern task management dashboard
            </p>
          </header>
          <div className="card p-6">
            <div className="text-center space-y-4">
              <p className="text-neutral-700 dark:text-neutral-200">
                🚀 Ready to start building your productivity app!
              </p>
              
              {/* Test react-icons integration */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <FiCheckCircle size={IconSizes.md} className="text-success-600" />
                  <span className="text-sm text-neutral-600">Icons Working</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers size={IconSizes.md} className="text-primary-600" />
                  <span className="text-sm text-neutral-600">234+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={IconSizes.md} className="text-warning-600" />
                  <span className="text-sm text-neutral-600">Calendar</span>
                </div>
              </div>
              
              <div className="pt-2 space-x-4">
                <a 
                  href="/icons-demo" 
                  className="text-primary-600 hover:text-primary-800 text-sm underline"
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
                  className="text-primary-600 hover:text-primary-800 text-sm underline"
                >
                  Header Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
