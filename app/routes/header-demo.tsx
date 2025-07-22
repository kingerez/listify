import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Header } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Header Demo - Listify" },
    { name: "description", content: "Header component showcase and testing" },
  ];
};

export default function HeaderDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* We need to hide the default header for this demo */}
      <style dangerouslySetInnerHTML={{ __html: `
        body > header { display: none; }
      `}} />

      <div className="container-app py-8">
        {/* Demo Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Header Component Demo
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Interactive showcase of the Header component with different configurations
          </p>
        </div>

        {/* Default Header */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default Configuration</h2>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <Header />
          </div>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
             Default header with &ldquo;Aqeel&rdquo; user and placeholder avatar
           </p>
        </section>

        {/* Custom User Header */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom User</h2>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <Header 
              userName="Sarah Johnson" 
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Header with custom user name
          </p>
        </section>

        {/* Mobile Menu Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mobile Menu Interaction</h2>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <Header 
              userName="Alex Rivera"
              onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
              isMenuOpen={isMenuOpen}
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Header with mobile menu interaction (resize window to see mobile button)
          </p>
          <div className="mt-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <p className="text-sm">
              <strong>Menu State:</strong> {isMenuOpen ? 'Open' : 'Closed'}
            </p>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn-secondary btn-sm mt-2"
            >
              Toggle Menu
            </button>
          </div>
        </section>

        {/* Features List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Header Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branding Features */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">🎨 Branding</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Coral brand icon matching Figma design</li>
                <li>• &ldquo;Vitra Lab&rdquo; brand name with proper typography</li>
                <li>• Consistent spacing and alignment</li>
                <li>• Brand recognition and identity</li>
              </ul>
            </div>

            {/* User Profile Features */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">👤 User Profile</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Personalized greeting with user name</li>
                <li>• Avatar support (custom image or placeholder)</li>
                <li>• Interactive dropdown menu</li>
                <li>• Profile actions and sign out</li>
              </ul>
            </div>

            {/* Responsive Features */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">📱 Responsive Design</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Mobile-first responsive layout</li>
                <li>• Hamburger menu for mobile navigation</li>
                <li>• Hidden greeting text on small screens</li>
                <li>• Optimized touch targets</li>
              </ul>
            </div>

            {/* Accessibility Features */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">♿ Accessibility</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Proper ARIA labels and roles</li>
                <li>• Keyboard navigation support</li>
                <li>• Screen reader friendly</li>
                <li>• Focus indicators and states</li>
              </ul>
            </div>

            {/* Design System Features */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">🎨 Design System</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Uses design system colors and spacing</li>
                <li>• Consistent with brand guidelines</li>
                <li>• Dark mode support included</li>
                <li>• Smooth transitions and animations</li>
              </ul>
            </div>

            {/* Interactive Features */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">🖱️ Interactions</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Click-to-toggle user dropdown</li>
                <li>• Click outside to close menus</li>
                <li>• Hover effects on interactive elements</li>
                <li>• Sticky positioning for persistent navigation</li>
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
{`import { Header } from "~/components";

// Basic header
<Header />

// Custom user
<Header userName="John Doe" />

// With avatar image
<Header 
  userName="Jane Smith" 
  userAvatar="/path/to/avatar.jpg" 
/>

// With mobile menu handling
<Header 
  userName="Alex"
  onMenuToggle={() => toggleMobileMenu()}
  isMenuOpen={isMobileMenuOpen}
/>`}
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            Header Component - Part of the Listify Design System
          </p>
        </footer>
      </div>
    </div>
  );
} 