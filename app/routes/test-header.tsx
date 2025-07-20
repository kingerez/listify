import type { MetaFunction } from "@remix-run/node";
import { Layout, DashboardLayout } from '../components/Layout';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "Header Component Test - Listify" },
    { name: "description", content: "Testing the Header/Navigation component" },
  ];
};

export default function TestHeader() {
  const [currentLayout, setCurrentLayout] = useState<'basic' | 'dashboard'>('basic');

  const handleSearchClick = () => {
    alert('🔍 Search functionality coming soon!');
  };

  const handleProfileClick = () => {
    alert('👤 Profile menu coming soon!');
  };

  const testContent = (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-surface rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-text-primary mb-6">
          Header Component Test 🧭
        </h1>
        
        {/* Layout Switcher */}
        <div className="mb-8 p-6 bg-surface-secondary rounded-lg">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            🔄 Test Different Layouts
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentLayout('basic')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentLayout === 'basic' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface text-text-primary hover:bg-primary/10'
              }`}
            >
              Basic Layout
            </button>
            <button
              onClick={() => setCurrentLayout('dashboard')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentLayout === 'dashboard' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface text-text-primary hover:bg-primary/10'
              }`}
            >
              Dashboard Layout
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-surface-secondary rounded-lg p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              ✅ Header Features
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li>• Vista Lab branding with hover effects</li>
              <li>• Interactive mobile navigation menu</li>
              <li>• Active page highlighting</li>
              <li>• Search functionality button</li>
              <li>• Enhanced user profile with improved styling</li>
              <li>• Smooth transitions and animations</li>
              <li>• Proper ARIA labels for accessibility</li>
            </ul>
          </div>
          
          <div className="bg-surface-secondary rounded-lg p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              📱 Responsive Design
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li>• Desktop: Full navigation with active states</li>
              <li>• Tablet: Collapsed navigation menu</li>
              <li>• Mobile: Hamburger menu with toggle</li>
              <li>• User greeting hidden on small screens</li>
              <li>• Touch-friendly button sizes</li>
              <li>• Semantic HTML and proper ARIA roles</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-linen rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            🎨 Design System Integration
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#f2eaea] rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-text-muted">Header Background</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-text-muted">Primary Actions</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-text-primary rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-text-muted">Active Text</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-text-secondary rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-text-muted">Secondary Text</span>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="bg-sage/10 border border-sage/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-sage mb-2">
            📋 Test Instructions
          </h4>
          <ul className="space-y-1 text-text-secondary">
            <li>1. Resize your browser to test responsive behavior</li>
            <li>2. Click the hamburger menu on mobile/tablet sizes</li>
            <li>3. Test the search and profile buttons</li>
            <li>4. Verify navigation links show hover and active effects</li>
            <li>5. Check keyboard navigation and accessibility</li>
            <li>6. Switch between Basic and Dashboard layouts</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const sidebarContent = (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        📌 Sidebar Content
      </h3>
      <div className="space-y-4">
        <div className="bg-surface-secondary rounded-lg p-4">
          <p className="text-text-secondary text-sm">
            This sidebar demonstrates the DashboardLayout component functionality.
          </p>
        </div>
        <div className="bg-linen rounded-lg p-4">
          <p className="text-text-secondary text-sm">
            Perfect for notifications, quick actions, or additional navigation.
          </p>
        </div>
      </div>
    </div>
  );

  if (currentLayout === 'dashboard') {
    return (
      <DashboardLayout
        userName="Aqeel"
        currentPath="/test-header"
        onSearchClick={handleSearchClick}
        onProfileClick={handleProfileClick}
        sidebar={sidebarContent}
      >
        {testContent}
      </DashboardLayout>
    );
  }

  return (
    <Layout
      userName="Aqeel"
      currentPath="/test-header"
      onSearchClick={handleSearchClick}
      onProfileClick={handleProfileClick}
    >
      {testContent}
    </Layout>
  );
} 