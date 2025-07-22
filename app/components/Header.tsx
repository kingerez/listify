import { FiCircle, FiUser, FiMenu, FiX, IconSizes } from "~/utils/icons";
import { useState } from "react";

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export default function Header({ 
  userName = "Aqeel", 
  userAvatar,
  onMenuToggle,
  isMenuOpen = false 
}: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-50">
      <div className="container-app">
        <div className="flex-between h-16">
          {/* Left side - Branding */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FiX size={IconSizes.lg} />
              ) : (
                <FiMenu size={IconSizes.lg} />
              )}
            </button>

            {/* Logo and brand name */}
            <div className="flex items-center gap-3">
              {/* Brand icon - using a coral circle to match Figma */}
              <div className="w-8 h-8 bg-primary-500 rounded-full flex-center">
                <FiCircle 
                  size={IconSizes.md} 
                  className="text-white fill-current" 
                />
              </div>
              
              {/* Brand name */}
              <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                Vitra Lab
              </h1>
            </div>
          </div>

          {/* Right side - User profile */}
          <div className="flex items-center gap-4">
            {/* User greeting - hidden on mobile */}
            <div className="hidden sm:block text-right">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Hello, <span className="font-medium text-neutral-900 dark:text-neutral-100">{userName}</span>
              </p>
            </div>

            {/* User avatar */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="User menu"
              >
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt={`${userName}'s avatar`}
                    className="w-8 h-8 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700"
                  />
                ) : (
                  <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex-center">
                    <FiUser 
                      size={IconSizes.sm} 
                      className="text-neutral-600 dark:text-neutral-400" 
                    />
                  </div>
                )}
              </button>

              {/* User dropdown menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-neutral-100 dark:border-neutral-700">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {userName}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Premium User
                    </p>
                  </div>
                  
                  <button className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                    Profile Settings
                  </button>
                  
                  <button className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                    Preferences
                  </button>
                  
                  <div className="border-t border-neutral-100 dark:border-neutral-700 mt-1">
                    <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors">
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
} 