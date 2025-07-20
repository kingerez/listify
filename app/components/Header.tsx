import { useState } from 'react';
import { RiUserLine, RiSearchLine, RiMenuLine, RiCloseLine } from '../lib/icons';
import { Icon, IconButton } from './Icon';

interface HeaderProps {
  userName?: string;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
  currentPath?: string;
}

export function Header({ 
  userName = "Aqeel",
  onSearchClick,
  onProfileClick,
  currentPath = "/"
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { href: "/", label: "Dashboard", isActive: currentPath === "/" },
    { href: "/tasks", label: "Tasks", isActive: currentPath === "/tasks" },
    { href: "/calendar", label: "Calendar", isActive: currentPath === "/calendar" },
    { href: "/projects", label: "Projects", isActive: currentPath === "/projects" },
  ];

  return (
    <header className="bg-[#f2eaea] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo/Brand */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <IconButton
              icon={isMobileMenuOpen ? RiCloseLine : RiMenuLine}
              onClick={toggleMobileMenu}
              className="md:hidden text-text-primary"
              size="md"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            />
            
            {/* Logo/Brand Name */}
            <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <span className="font-sans text-2xl font-bold text-text-primary">
                Vista Lab
              </span>
            </a>
          </div>

          {/* Center Section - Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`
                  transition-colors font-medium px-3 py-2 rounded-md
                  ${item.isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section - Search & User Profile */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <IconButton
              icon={RiSearchLine}
              onClick={onSearchClick}
              className="text-text-primary hover:text-primary"
              size="md"
              aria-label="Search"
            />

            {/* User Profile Section */}
            <div className="flex items-center space-x-3">
              {/* User Greeting (Hidden on small screens) */}
              <span className="hidden sm:block text-text-primary font-medium">
                Hello, {userName}
              </span>
              
              {/* User Avatar */}
              <button
                onClick={onProfileClick}
                className="
                  flex items-center justify-center w-10 h-10 rounded-full 
                  bg-primary hover:bg-primary/90 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2
                  shadow-sm hover:shadow-md
                "
                aria-label={`${userName}'s profile`}
              >
                <Icon 
                  icon={RiUserLine} 
                  size="md" 
                  className="text-white"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden mt-4 pt-4 border-t border-text-secondary/20"
            role="navigation"
          >
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`
                    transition-colors font-medium px-3 py-3 rounded-md
                    ${item.isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 