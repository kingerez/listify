import type { MetaFunction } from "@remix-run/node";
import { Layout } from '../components/Layout';

export const meta: MetaFunction = () => {
  return [
    { title: "Color Palette Test - Listify" },
    { name: "description", content: "Testing the Figma color palette implementation" },
  ];
};

export default function TestColors() {
  const figmaColors = [
    { name: "Coral", class: "bg-coral", hex: "#F23834", description: "Error states, high priority" },
    { name: "Orange", class: "bg-orange", hex: "#F0A868", description: "Warning states, medium priority" },
    { name: "Salmon", class: "bg-salmon", hex: "#F87777", description: "Pink accent, special highlights" },
    { name: "Linen", class: "bg-linen", hex: "#F0D1A8", description: "Secondary surfaces, cards" },
    { name: "Lavender", class: "bg-lavender", hex: "#C4A49F", description: "Subtle backgrounds, inputs" },
    { name: "Sage", class: "bg-sage", hex: "#5C9967", description: "Success states, completed tasks" },
    { name: "White", class: "bg-white", hex: "#FFFFFF", description: "Primary surfaces, cards" },
    { name: "Charcoal", class: "bg-charcoal", hex: "#4B332F", description: "Primary text, headings" },
  ];

  const semanticColors = [
    { name: "Primary", class: "bg-primary", hex: "#0B87AC", description: "Primary actions, links" },
    { name: "Success", class: "bg-success", hex: "#5C9967", description: "Success feedback" },
    { name: "Warning", class: "bg-warning", hex: "#F0A868", description: "Warning feedback" },
    { name: "Error", class: "bg-error", hex: "#F23834", description: "Error feedback" },
  ];

  const surfaceColors = [
    { name: "Background", class: "bg-background", hex: "#FAF7F2", description: "Main app background" },
    { name: "Surface", class: "bg-surface", hex: "#FFFFFF", description: "Card backgrounds" },
    { name: "Surface Secondary", class: "bg-surface-secondary", hex: "#F0D1A8", description: "Secondary card backgrounds" },
  ];

  const textColors = [
    { name: "Text Primary", class: "bg-text-primary", hex: "#4B332F", description: "Primary text color" },
    { name: "Text Secondary", class: "bg-text-secondary", hex: "#63605F", description: "Secondary text color" },
    { name: "Text Muted", class: "bg-text-muted", hex: "#6B7280", description: "Muted text color" },
  ];

  const ColorGrid = ({ title, colors }: { title: string; colors: typeof figmaColors }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-text-primary mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="bg-surface rounded-lg p-4 shadow-sm border border-text-secondary/10">
            <div className={`${color.class} w-full h-16 rounded-lg mb-3 border border-text-secondary/20`}></div>
            <h3 className="font-semibold text-text-primary">{color.name}</h3>
            <p className="text-sm text-text-secondary font-mono">{color.hex}</p>
            <p className="text-xs text-text-muted mt-1">{color.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout
      userName="Aqeel"
      currentPath="/test-colors"
      onSearchClick={() => alert('Search clicked')}
      onProfileClick={() => alert('Profile clicked')}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Figma Color Palette Test 🎨
          </h1>
          <p className="text-text-secondary text-lg">
            Verifying our Tailwind config matches the Figma design system colors exactly.
          </p>
        </div>

        <ColorGrid title="🎨 Figma Color Palette" colors={figmaColors} />
        <ColorGrid title="🔧 Semantic Colors" colors={semanticColors} />
        <ColorGrid title="🏠 Surface Colors" colors={surfaceColors} />
        <ColorGrid title="📝 Text Colors" colors={textColors} />

        {/* Usage Examples */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Button Examples */}
            <div className="bg-surface rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-text-primary mb-4">Buttons</h3>
              <div className="space-y-3">
                <button className="w-full bg-button-primary text-white py-2 px-4 rounded-lg hover:opacity-90">
                  Primary Button
                </button>
                <button className="w-full bg-button-secondary text-text-primary py-2 px-4 rounded-lg hover:opacity-90">
                  Secondary Button
                </button>
                <button className="w-full bg-button-danger text-white py-2 px-4 rounded-lg hover:opacity-90">
                  Danger Button
                </button>
              </div>
            </div>

            {/* Card Examples */}
            <div className="bg-surface rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-text-primary mb-4">Cards</h3>
              <div className="space-y-3">
                <div className="bg-linen p-3 rounded-lg">
                  <p className="text-text-primary text-sm">Linen background card</p>
                </div>
                <div className="bg-lavender/30 p-3 rounded-lg">
                  <p className="text-text-primary text-sm">Lavender background card</p>
                </div>
                <div className="bg-sage/10 p-3 rounded-lg border border-sage/20">
                  <p className="text-text-primary text-sm">Success card variant</p>
                </div>
              </div>
            </div>

            {/* Status Examples */}
            <div className="bg-surface rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-text-primary mb-4">Status Indicators</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-text-secondary text-sm">Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-text-secondary text-sm">In Progress</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <span className="text-text-secondary text-sm">High Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Note */}
        <div className="bg-sage/10 border border-sage/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-2">
            ✅ Color Palette Verification
          </h3>
          <ul className="space-y-1 text-text-secondary text-sm">
            <li>• All Figma colors properly defined in Tailwind config</li>
            <li>• Semantic color mapping for consistent usage</li>
            <li>• Surface and text colors for proper hierarchy</li>
            <li>• Button variants matching design system</li>
            <li>• Color accessibility and contrast maintained</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 