import { useState, useRef, useEffect } from "react";
import { FiUser, FiSettings, FiLogOut, FiChevronDown, IconSizes } from "~/utils/icons";

interface UserDropdownProps {
  userName: string;
  userAvatar?: string;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

export default function UserDropdown({
  userName,
  userAvatar,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (action?: () => void) => {
    action?.();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 group"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* User Avatar */}
        <div className="relative">
          {userAvatar ? (
            <img
              src={userAvatar}
              alt={`${userName}'s avatar`}
              className="w-8 h-8 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-600"
            />
          ) : (
            <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex-center border-2 border-neutral-200 dark:border-neutral-600">
              <FiUser size={IconSizes.sm} className="text-primary-600 dark:text-primary-400" />
            </div>
          )}
          
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-500 border-2 border-white dark:border-neutral-800 rounded-full"></div>
        </div>

        {/* User Name & Welcome Text - Hidden on mobile */}
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {userName}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            Welcome back
          </span>
        </div>

        {/* Dropdown Arrow */}
        <FiChevronDown 
          size={IconSizes.sm} 
          className={`text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-all duration-200 hidden sm:block ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-medium py-2 animate-fade-in">
          <button
            onClick={() => handleMenuClick(onProfileClick)}
            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-3 transition-colors duration-200"
          >
            <FiUser size={IconSizes.sm} />
            View Profile
          </button>
          <button
            onClick={() => handleMenuClick(onSettingsClick)}
            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-3 transition-colors duration-200"
          >
            <FiSettings size={IconSizes.sm} />
            Settings
          </button>
          <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
          <button
            onClick={() => handleMenuClick(onLogoutClick)}
            className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-3 transition-colors duration-200"
          >
            <FiLogOut size={IconSizes.sm} />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
} 