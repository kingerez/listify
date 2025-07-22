import type { FC } from "react";
import { FiChevronLeft, FiChevronRight } from "~/utils/icons";
import { IconSizes } from "~/utils/icons";
import { useState } from "react";

interface CalendarWidgetProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const CalendarWidget: FC<CalendarWidgetProps> = ({ initialDate = new Date(), onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const numDays = lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay();

  const days: (Date | null)[] = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let day = 1; day <= numDays; day++) days.push(new Date(year, month, day));

  const handleDateClick = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const weekdayNames = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  return (
    <div className="card p-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg">
      <div className="flex-between mb-4">
        <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} className="btn btn-sm">
          <FiChevronLeft size={IconSizes.sm} />
        </button>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {monthName} {year}
        </h3>
        <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} className="btn btn-sm">
          <FiChevronRight size={IconSizes.sm} />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center mb-2">
        {weekdayNames.map((wd) => (
          <div key={wd} className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {wd}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, idx) => {
          const isToday = date ? date.toDateString() === new Date().toDateString() : false;
          const isSelected = date && selectedDate ? date.toDateString() === selectedDate.toDateString() : false;
          const baseClasses = "w-8 h-8 flex-center rounded transition-colors duration-200";
          const selectedClasses = isSelected
            ? `bg-primary-600 text-white`
            : isToday
            ? `bg-primary-100 text-primary-700`
            : `hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100`;
          return (
            <button
              key={idx}
              onClick={() => handleDateClick(date)}
              disabled={!date}
              className={`${baseClasses} ${selectedClasses}`}
            >
              {date ? date.getDate() : ''}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget; 