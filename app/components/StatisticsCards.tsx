export interface StatisticsCardsProps {
  completed: number;
  pending: number;
  totalProjects: number;
}

export function StatisticsCards({ completed, pending, totalProjects }: StatisticsCardsProps) {
  const cards = [
    { label: 'COMPLETED', value: completed, bgClass: 'bg-success', textClass: 'text-white' },
    { label: 'PENDING', value: pending, bgClass: 'bg-coral', textClass: 'text-white' },
    { label: 'TOTAL PROJECTS', value: totalProjects, bgClass: 'bg-primary', textClass: 'text-white' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map(({ label, value, bgClass, textClass }) => (
        <div key={label} className={`${bgClass} ${textClass} rounded-lg p-6 text-center`}>
          <div className="text-3xl font-bold mb-2">{value}</div>
          <div className="text-sm opacity-90 font-medium">{label}</div>
        </div>
      ))}
    </div>
  );
} 