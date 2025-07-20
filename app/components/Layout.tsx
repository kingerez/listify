import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  userName?: string;
  currentPath?: string;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
  className?: string;
}

export function Layout({ 
  children,
  userName,
  currentPath,
  onSearchClick,
  onProfileClick,
  className = ""
}: LayoutProps) {
  return (
    <div className={`min-h-screen bg-background flex flex-col ${className}`}>
      {/* Header */}
      <Header 
        userName={userName}
        currentPath={currentPath}
        onSearchClick={onSearchClick}
        onProfileClick={onProfileClick}
      />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}

// Optional: Layout with sidebar for dashboard-style pages
interface DashboardLayoutProps extends LayoutProps {
  sidebar?: ReactNode;
}

export function DashboardLayout({ 
  children,
  sidebar,
  userName,
  currentPath,
  onSearchClick,
  onProfileClick,
  className = ""
}: DashboardLayoutProps) {
  return (
    <div className={`min-h-screen bg-background flex flex-col ${className}`}>
      {/* Header */}
      <Header 
        userName={userName}
        currentPath={currentPath}
        onSearchClick={onSearchClick}
        onProfileClick={onProfileClick}
      />
      
      {/* Content Area with optional sidebar */}
      <div className="flex-1 flex">
        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Sidebar (optional) */}
        {sidebar && (
          <aside className="w-80 bg-surface border-l border-text-secondary/20">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
} 