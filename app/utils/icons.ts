// Common icons from react-icons
// Organized by category for easy reference

// Navigation & UI Icons
export { 
  FiHome,
  FiSettings,
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiMoreHorizontal,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

// User & Profile Icons  
export {
  FiUser,
  FiUsers,
  FiUserPlus,
  FiUserCheck,
} from "react-icons/fi";

// Task & Action Icons
export {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiCheck,
  FiCheckCircle,
  FiCircle,
  FiClock,
  FiCalendar,
  FiFlag,
  FiBookmark,
  FiStar,
} from "react-icons/fi";

// Status & Communication Icons
export {
  FiAlertCircle,
  FiInfo,
  FiCheckSquare,
  FiSquare,
  FiMail,
  FiBell,
  FiEye,
  FiEyeOff,
  FiLogOut,
} from "react-icons/fi";

// File & Data Icons
export {
  FiFile,
  FiFolder,
  FiDownload,
  FiUpload,
  FiSave,
  FiRefreshCw,
  FiDatabase,
} from "react-icons/fi";

// Alternative icon sets for variety
// Material Design Icons
export {
  MdDashboard,
  MdTask,
  MdToday,
  MdSchedule,
  MdPerson,
  MdGroup,
} from "react-icons/md";

// Bootstrap Icons
export {
  BsKanban,
  BsListTask,
  BsCalendarEvent,
  BsStopwatch,
  BsPeople,
} from "react-icons/bs";

// Heroicons
export {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi";

// Icon component type for TypeScript
export type IconComponent = React.ComponentType<{
  size?: string | number;
  color?: string;
  className?: string;
}>;

// Common icon sizes
export const IconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Icon color variants for Tailwind
export const IconColors = {
  primary: "text-blue-600",
  secondary: "text-gray-500", 
  success: "text-green-600",
  warning: "text-yellow-600",
  error: "text-red-600",
  muted: "text-gray-400",
} as const; 