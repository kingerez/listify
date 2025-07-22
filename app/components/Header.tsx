import UserDropdown from "./UserDropdown";

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

export default function Header({
  userName = "Aqeel",
  userAvatar,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}: HeaderProps) {
  return (
    <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-50">
      <div className="container-app">
        <div className="flex-between h-16">
          {/* Left side - Branding */}
          <div className="flex items-center gap-3">
            {/* Logo/Brand Icon */}
            <div className="flex-center w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-xl">
              <div className="w-6 h-6 bg-primary-600 rounded-lg flex-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Vitra Lab
              </h1>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">
                Task Management
              </span>
            </div>
          </div>

          {/* Right side - User Profile */}
          <div className="flex items-center gap-4">
            <UserDropdown
              userName={userName}
              userAvatar={userAvatar}
              onProfileClick={onProfileClick}
              onSettingsClick={onSettingsClick}
              onLogoutClick={onLogoutClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
} 