import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Header Demo - Listify" },
    { name: "description", content: "Header component showcase and testing" },
  ];
};

export default function HeaderDemoPage() {

  return (
    <div className="container-app py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Header Component Demo
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Testing the Header component with user dropdown functionality
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Branding Features</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                             <li>• Custom &quot;Vitra Lab&quot; branding with icon</li>
              <li>• Responsive brand name display</li>
              <li>• Subtle tagline on larger screens</li>
              <li>• Consistent with Figma design</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">User Profile Features</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• User avatar (placeholder or custom image)</li>
              <li>• Online status indicator</li>
              <li>• Responsive user info display</li>
              <li>• Interactive dropdown menu</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Responsive Design</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Mobile-first responsive layout</li>
              <li>• Hidden elements on small screens</li>
              <li>• Flexible container system</li>
              <li>• Touch-friendly interactions</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Proper ARIA attributes</li>
              <li>• Keyboard navigation support</li>
              <li>• Screen reader friendly</li>
              <li>• Focus indicators</li>
            </ul>
          </div>
        </div>

        {/* Variations */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Header Variations</h2>
          
          <div className="space-y-6">
            {/* With Custom Avatar */}
            <div className="card p-6">
                             <h3 className="text-lg font-semibold mb-4">Global Integration</h3>
               <p className="text-neutral-600 dark:text-neutral-400">
                 The Header component is now integrated into the global layout! It appears on every page automatically through the root.tsx Layout component. You can see it at the top of this page and all other pages.
               </p>
             </div>

             {/* Props Interface */}
             <div className="card p-6">
               <h3 className="text-lg font-semibold mb-4">Props Interface</h3>
               <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg text-sm overflow-x-auto">
{`interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}`}
               </pre>
             </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Usage Instructions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Basic Usage:</h4>
              <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg text-sm overflow-x-auto">
{`<Header
  userName="User Name"
  onProfileClick={() => console.log('Profile')}
  onSettingsClick={() => console.log('Settings')}
  onLogoutClick={() => console.log('Logout')}
/>`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">With Custom Avatar:</h4>
              <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg text-sm overflow-x-auto">
{`<Header
  userName="User Name"
  userAvatar="/path/to/avatar.jpg"
  onProfileClick={handleProfile}
  onSettingsClick={handleSettings}
  onLogoutClick={handleLogout}
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Interactive Test */}
        <div className="mt-8 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Try clicking on the user profile in the header at the top of the page to test the dropdown functionality!
          </p>
          <div className="flex justify-center gap-4">
            <a href="/" className="btn-outline">← Back to Home</a>
            <a href="/design-system" className="btn-secondary">Design System</a>
            <a href="/icons-demo" className="btn-secondary">Icons Demo</a>
          </div>
        </div>
      </div>
  );
} 