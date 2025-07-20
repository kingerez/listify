import { HiUserCircle } from "~/lib/icons";

interface HeaderProps {
  userName?: string;
  userGreeting?: string;
}

export default function Header({ 
  userName = "Aqeel", 
  userGreeting = "Start planning today" 
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Brand Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">Yitsa Lab</span>
        </div>

        {/* Center Greeting Section */}
        <div className="hidden md:flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Hello, {userName}
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            {userGreeting}
          </p>
        </div>

        {/* User Avatar Section */}
        <div className="flex items-center gap-3">
          {/* Mobile greeting - shown on smaller screens */}
          <div className="md:hidden flex flex-col items-end">
            <span className="text-lg font-semibold text-gray-900">Hello, {userName}</span>
            <span className="text-xs text-gray-600">{userGreeting}</span>
          </div>
          
          {/* User Avatar */}
          <div className="relative">
            <HiUserCircle className="w-10 h-10 text-gray-400" />
            {/* Optional: Online status indicator */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
} 