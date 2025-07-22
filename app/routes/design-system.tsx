import type { MetaFunction } from "@remix-run/node";
import { FiHome, FiUser, FiPlus, FiTrash2, FiCheckCircle, FiClock, IconSizes } from "~/utils/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Design System - Listify" },
    { name: "description", content: "Design system showcase and style guide" },
  ];
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container-app py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Listify Design System
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Complete style guide and component showcase
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Color Palette</h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Primary (Brand)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div 
                    className={`h-16 w-full rounded-lg bg-primary-${shade} border border-neutral-200`}
                  />
                  <span className="text-xs text-neutral-600 mt-1 block">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Neutral</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div 
                    className={`h-16 w-full rounded-lg bg-neutral-${shade} border border-neutral-200`}
                  />
                  <span className="text-xs text-neutral-600 mt-1 block">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status Colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Success</h3>
              <div className="flex gap-2">
                <div className="flex-1 text-center">
                  <div className="h-16 w-full rounded-lg bg-success-500 border border-neutral-200" />
                  <span className="text-xs text-neutral-600 mt-1 block">500</span>
                </div>
                <div className="flex-1 text-center">
                  <div className="h-16 w-full rounded-lg bg-success-600 border border-neutral-200" />
                  <span className="text-xs text-neutral-600 mt-1 block">600</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Warning</h3>
              <div className="flex gap-2">
                <div className="flex-1 text-center">
                  <div className="h-16 w-full rounded-lg bg-warning-500 border border-neutral-200" />
                  <span className="text-xs text-neutral-600 mt-1 block">500</span>
                </div>
                <div className="flex-1 text-center">
                  <div className="h-16 w-full rounded-lg bg-warning-600 border border-neutral-200" />
                  <span className="text-xs text-neutral-600 mt-1 block">600</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Error</h3>
              <div className="flex gap-2">
                <div className="flex-1 text-center">
                  <div className="h-16 w-full rounded-lg bg-error-500 border border-neutral-200" />
                  <span className="text-xs text-neutral-600 mt-1 block">500</span>
                </div>
                <div className="flex-1 text-center">
                  <div className="h-16 w-full rounded-lg bg-error-600 border border-neutral-200" />
                  <span className="text-xs text-neutral-600 mt-1 block">600</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Typography</h2>
          
          <div className="space-y-4">
            <div>
              <h1>Heading 1 - Large Title</h1>
              <code className="text-sm text-neutral-500">h1, text-3xl lg:text-4xl</code>
            </div>
            <div>
              <h2>Heading 2 - Section Title</h2>
              <code className="text-sm text-neutral-500">h2, text-2xl lg:text-3xl</code>
            </div>
            <div>
              <h3>Heading 3 - Subsection</h3>
              <code className="text-sm text-neutral-500">h3, text-xl lg:text-2xl</code>
            </div>
            <div>
              <h4>Heading 4 - Component Title</h4>
              <code className="text-sm text-neutral-500">h4, text-lg lg:text-xl</code>
            </div>
            <div>
              <p>This is body text with comfortable reading line height. It should be easy to read and scan.</p>
              <code className="text-sm text-neutral-500">p, leading-relaxed</code>
            </div>
            <div>
              <p className="text-sm text-neutral-600">Small text for secondary information and helper text.</p>
              <code className="text-sm text-neutral-500">text-sm text-neutral-600</code>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
          
          <div className="space-y-6">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Primary</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-primary btn-sm">
                  <FiPlus size={IconSizes.sm} />
                  Small
                </button>
                <button className="btn-primary">
                  <FiCheckCircle size={IconSizes.sm} />
                  Default
                </button>
                <button className="btn-primary btn-lg">
                  <FiHome size={IconSizes.md} />
                  Large
                </button>
                <button className="btn-primary" disabled>
                  Disabled
                </button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Secondary</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-secondary btn-sm">Small</button>
                <button className="btn-secondary">Default</button>
                <button className="btn-secondary btn-lg">Large</button>
                <button className="btn-secondary" disabled>Disabled</button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Outline</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-outline">
                  <FiUser size={IconSizes.sm} />
                  Profile
                </button>
                <button className="btn-outline">Settings</button>
                <button className="btn-outline" disabled>Disabled</button>
              </div>
            </div>

            {/* Danger Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Danger</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-danger">
                  <FiTrash2 size={IconSizes.sm} />
                  Delete
                </button>
                <button className="btn-danger" disabled>Disabled</button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Simple card with basic styling and padding.
              </p>
            </div>
            
            <div className="card-hover p-6 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Hover Card</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Interactive card with hover effects.
              </p>
            </div>
            
            <div className="glass p-6">
              <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Glassmorphism effect with backdrop blur.
              </p>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Badges</h2>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="badge-primary">Primary</span>
            <span className="badge-success">
              <FiCheckCircle size={12} />
              Success
            </span>
            <span className="badge-warning">
              <FiClock size={12} />
              Warning
            </span>
            <span className="badge-danger">Error</span>
            <span className="badge-neutral">Neutral</span>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Status Indicators</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="status-completed px-3 py-1 rounded-full flex items-center gap-2">
                <FiCheckCircle size={IconSizes.sm} />
                <span className="text-sm font-medium">Completed</span>
              </div>
              <div className="status-pending px-3 py-1 rounded-full flex items-center gap-2">
                <FiClock size={IconSizes.sm} />
                <span className="text-sm font-medium">Pending</span>
              </div>
              <div className="status-in-progress px-3 py-1 rounded-full flex items-center gap-2">
                <div className="spinner w-3 h-3" />
                <span className="text-sm font-medium">In Progress</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Form Elements</h2>
          
          <div className="max-w-md space-y-4">
            <div>
              <label htmlFor="demo-input" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Input Field
              </label>
              <input
                id="demo-input"
                type="text"
                placeholder="Enter your text here..."
                className="input"
              />
            </div>
            
            <div>
              <label htmlFor="demo-textarea" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Textarea
              </label>
              <textarea
                id="demo-textarea"
                placeholder="Enter your message..."
                rows={3}
                className="input resize-none"
              />
            </div>
          </div>
        </section>

        {/* Utility Classes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Utility Classes</h2>
          
          <div className="space-y-4">
            <div className="flex-between p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>flex-between</span>
              <span>→</span>
            </div>
            
            <div className="flex-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>flex-center</span>
            </div>
            
            <div className="animate-fade-in p-4 bg-primary-50 dark:bg-primary-950 rounded-lg">
              <span>animate-fade-in</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            Listify Design System - Built with Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
} 