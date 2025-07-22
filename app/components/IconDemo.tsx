import { 
  FiHome, 
  FiUser, 
  FiUsers, 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiCheck, 
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiStar,
  FiSettings,
  IconSizes,
  IconColors,
  type IconComponent 
} from "~/utils/icons";

interface IconShowcaseProps {
  icon: IconComponent;
  name: string;
  description: string;
}

function IconShowcase({ icon: Icon, name, description }: IconShowcaseProps) {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
      <Icon size={IconSizes.lg} className={IconColors.primary} />
      <div>
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function IconDemo() {
  const iconExamples = [
    { icon: FiHome, name: "FiHome", description: "Dashboard/Home navigation" },
    { icon: FiUser, name: "FiUser", description: "Single user profile" },
    { icon: FiUsers, name: "FiUsers", description: "Active users display" },
    { icon: FiPlus, name: "FiPlus", description: "Add new task/item" },
    { icon: FiEdit, name: "FiEdit", description: "Edit task/item" },
    { icon: FiTrash2, name: "FiTrash2", description: "Delete task/item" },
    { icon: FiCheck, name: "FiCheck", description: "Complete task" },
    { icon: FiCheckCircle, name: "FiCheckCircle", description: "Task completed status" },
    { icon: FiCalendar, name: "FiCalendar", description: "Calendar widget" },
    { icon: FiClock, name: "FiClock", description: "Time/schedule display" },
    { icon: FiStar, name: "FiStar", description: "Priority/favorite" },
    { icon: FiSettings, name: "FiSettings", description: "Settings/configuration" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          React Icons Showcase
        </h1>
        <p className="text-gray-600">
          Testing react-icons integration for the Listify app. These icons will be used throughout the UI.
        </p>
      </div>

      {/* Size Examples */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Icon Sizes</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <FiStar size={IconSizes.xs} className={IconColors.primary} />
          <FiStar size={IconSizes.sm} className={IconColors.primary} />
          <FiStar size={IconSizes.md} className={IconColors.primary} />
          <FiStar size={IconSizes.lg} className={IconColors.primary} />
          <FiStar size={IconSizes.xl} className={IconColors.primary} />
          <FiStar size={IconSizes.xxl} className={IconColors.primary} />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Sizes: xs(12px), sm(16px), md(20px), lg(24px), xl(32px), xxl(48px)
        </p>
      </div>

      {/* Color Examples */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Icon Colors</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <FiCheckCircle size={IconSizes.lg} className={IconColors.primary} />
          <FiCheckCircle size={IconSizes.lg} className={IconColors.secondary} />
          <FiCheckCircle size={IconSizes.lg} className={IconColors.success} />
          <FiCheckCircle size={IconSizes.lg} className={IconColors.warning} />
          <FiCheckCircle size={IconSizes.lg} className={IconColors.error} />
          <FiCheckCircle size={IconSizes.lg} className={IconColors.muted} />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Colors: primary, secondary, success, warning, error, muted
        </p>
      </div>

      {/* Icon Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {iconExamples.map((example) => (
            <IconShowcase
              key={example.name}
              icon={example.icon}
              name={example.name}
              description={example.description}
            />
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Examples</h2>
        <div className="space-y-4">
          {/* Button with icon */}
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg w-fit">
            <FiPlus size={IconSizes.sm} />
            <span>Add New Task</span>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <FiCheckCircle size={IconSizes.md} className={IconColors.success} />
            <span className="text-gray-700">Task completed successfully</span>
          </div>

          {/* User count */}
          <div className="flex items-center gap-2">
            <FiUsers size={IconSizes.md} className={IconColors.secondary} />
            <span className="text-gray-700">234+ Active Users</span>
          </div>
        </div>
      </div>
    </div>
  );
} 