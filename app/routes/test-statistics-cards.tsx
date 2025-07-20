import type { MetaFunction } from '@remix-run/node';
import { StatisticsCards } from '../components/StatisticsCards';

export const meta: MetaFunction = () => [{ title: 'Statistics Cards Test - Listify' }];

export default function TestStatisticsCards() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-text-primary mb-6">Statistics Cards Test</h1>
      <StatisticsCards completed={42} pending={17} totalProjects={128} />
      <p className="mt-4 text-text-secondary">✔ Verify three cards render responsively with correct colors and values.</p>
    </div>
  );
} 