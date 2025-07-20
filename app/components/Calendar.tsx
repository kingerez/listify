import { useState } from 'react';
import { IconButton } from './Icon';
import { RiArrowLeftLine, RiArrowRightLine } from '../lib/icons';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Compute days
  const firstDayIndex = new Date(year, currentDate.getMonth(), 1).getDay();
  const lastDate = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) days.push(null);
  for (let d = 1; d <= lastDate; d++) days.push(d);

  const prevMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));

  const today = new Date();

  return (
    <div className="bg-surface rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <IconButton icon={RiArrowLeftLine} onClick={prevMonth} size="md" aria-label="Previous month" />
        <h2 className="text-lg font-semibold text-text-primary">
          {monthName} {year}
        </h2>
        <IconButton icon={RiArrowRightLine} onClick={nextMonth} size="md" aria-label="Next month" />
      </div>
      <div className="grid grid-cols-7 text-xs font-medium text-text-secondary mb-2">
        {['S','M','T','W','T','F','S'].map(d => <div key={d} className="text-center">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            year === today.getFullYear();
          return (
            <div
              key={idx}
              className={
                `h-8 flex items-center justify-center text-sm rounded-md cursor-pointer ` +
                (day === null
                  ? 'bg-transparent'
                  : isToday
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/5 text-text-primary')
              }
            >
              {day || ''}
            </div>
          );
        })}
      </div>
    </div>
  );
} 