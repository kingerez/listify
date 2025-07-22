import { FiChevronLeft, FiChevronRight, IconSizes } from "~/utils/icons";
import { useState } from "react";

interface CalendarWidgetProps {
  initialYear?: number;
  initialMonth?: number; // 1-12
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
  className?: string;
}

export default function CalendarWidget({
  initialYear = new Date().getFullYear(),
  initialMonth = new Date().getMonth() + 1,
  selectedDate: initialSelected,
  onSelectDate,
  className = ""
}: CalendarWidgetProps) {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [selected, setSelected] = useState<Date | null>(initialSelected || null);

  const today = new Date();
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayIndex = new Date(year, month - 1, 1).getDay();

  const cells: (number | null)[] = [
    ...Array(firstDayIndex).fill(null),
    ...Array(daysInMonth).fill(null).map((_, idx) => idx + 1)
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const monthName = new Date(year, month - 1).toLocaleString("en-US", { month: "long" });

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const date = new Date(year, month - 1, day);
    setSelected(date);
    onSelectDate?.(date);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <button onClick={prevMonth} aria-label="Previous month">
          <FiChevronLeft size={IconSizes.md} />
        </button>
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {monthName} {year}
        </h3>
        <button onClick={nextMonth} aria-label="Next month">
          <FiChevronRight size={IconSizes.md} />
        </button>
      </div>
      <div className="grid grid-cols-7 text-xs text-neutral-600 dark:text-neutral-400 mb-1">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, idx) =>
          day ? (
            <button
              key={idx}
              onClick={() => handleDateClick(day)}
              className={`text-center p-2 rounded-full transition-colors duration-200
                ${selected && day === selected.getDate() && month === selected.getMonth() + 1 && year === selected.getFullYear()
                  ? "bg-primary-600 text-white"
                  : today.getDate() === day && today.getMonth() + 1 === month && today.getFullYear() === year
                  ? "bg-primary-100 text-primary-600"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                }
              `}
            >
              {day}
            </button>
          ) : (
            <div key={idx} />
          )
        )}
      </div>
    </div>
  );
} 