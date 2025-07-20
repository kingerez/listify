import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "~/lib/icons";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  highlightedDates?: Date[];
  className?: string;
}

export default function Calendar({ 
  selectedDate = new Date(), 
  onDateSelect,
  highlightedDates = [],
  className = ""
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(selectedDate));

  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Adjust for Monday start

  // Generate calendar days
  const calendarDays = [];
  
  // Previous month days (faded)
  const prevMonth = new Date(currentYear, currentMonth - 1, 0);
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonth.getDate() - i,
      isCurrentMonth: false,
      date: new Date(currentYear, currentMonth - 1, prevMonth.getDate() - i)
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      date: new Date(currentYear, currentMonth, day)
    });
  }

  // Next month days (faded)
  const remainingDays = 42 - calendarDays.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      date: new Date(currentYear, currentMonth + 1, day)
    });
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setCurrentDate(newDate);
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const isHighlighted = (date: Date) => {
    return highlightedDates.some(highlightedDate => 
      highlightedDate.toDateString() === date.toDateString()
    );
  };

  const handleDateClick = (date: Date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Previous month"
          >
            <FiChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Next month"
          >
            <FiChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-xs text-gray-500 text-center py-2 font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((calendarDay, index) => {
          const { day, isCurrentMonth, date } = calendarDay;
          
          return (
            <button
              key={index}
              onClick={() => isCurrentMonth && handleDateClick(date)}
              disabled={!isCurrentMonth}
              className={`
                h-8 flex items-center justify-center text-sm rounded transition-colors
                ${isCurrentMonth 
                  ? "text-gray-700 hover:bg-gray-100" 
                  : "text-gray-300"
                }
                ${isToday(date) 
                  ? "bg-orange-500 text-white hover:bg-orange-600" 
                  : ""
                }
                ${isSelected(date) && !isToday(date)
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : ""
                }
                ${isHighlighted(date) && !isToday(date) && !isSelected(date)
                  ? "bg-blue-100 text-blue-700"
                  : ""
                }
                ${isCurrentMonth ? "cursor-pointer" : "cursor-default"}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Optional: Today button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => {
            const todayDate = new Date();
            setCurrentDate(todayDate);
            if (onDateSelect) {
              onDateSelect(todayDate);
            }
          }}
          className="text-xs text-orange-600 hover:text-orange-800 font-medium"
        >
          Today
        </button>
      </div>
    </div>
  );
} 