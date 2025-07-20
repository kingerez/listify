import { screen, fireEvent } from '@testing-library/react';
import { vi, expect } from 'vitest';

/**
 * Helper function to navigate calendar months
 */
export const navigateCalendar = {
  nextMonth: () => {
    const nextButton = screen.getByLabelText('Next month');
    fireEvent.click(nextButton);
  },

  prevMonth: () => {
    const prevButton = screen.getByLabelText('Previous month');
    fireEvent.click(prevButton);
  },

  toSpecificMonth: (targetMonth: string, targetYear: number, currentMonth: string, currentYear: number) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentMonthIndex = monthNames.indexOf(currentMonth);
    const targetMonthIndex = monthNames.indexOf(targetMonth);

    let monthsDiff = (targetYear - currentYear) * 12 + (targetMonthIndex - currentMonthIndex);

    if (monthsDiff > 0) {
      for (let i = 0; i < monthsDiff; i++) {
        navigateCalendar.nextMonth();
      }
    } else if (monthsDiff < 0) {
      for (let i = 0; i < Math.abs(monthsDiff); i++) {
        navigateCalendar.prevMonth();
      }
    }
  }
};

/**
 * Helper function to get calendar elements
 */
export const getCalendarElements = () => ({
  monthYear: () => screen.getByText(/\w+ \d{4}/),
  prevButton: () => screen.getByLabelText('Previous month'),
  nextButton: () => screen.getByLabelText('Next month'),
  dayHeaders: () => screen.getByText('S').closest('.grid'),
  daysGrid: () => screen.getByText('1').closest('.grid'),
  todayElement: (day: string) => {
    const element = screen.getByText(day);
    return element.classList.contains('bg-primary') ? element : null;
  },
  dayElement: (day: string) => screen.getByText(day),
  allDayElements: () => screen.getAllByText(/^\d+$/),
});

/**
 * Helper function to validate calendar state
 */
export const validateCalendarState = {
  isDisplayingMonth: (month: string, year: number) => {
    return screen.getByText(`${month} ${year}`);
  },

  hasCorrectDayCount: (expectedDays: number) => {
    const dayElements = screen.getAllByText(/^\d+$/);
    const maxDay = Math.max(...dayElements.map(el => parseInt(el.textContent || '0')));
    return maxDay === expectedDays;
  },

  hasTodayHighlighted: (today: string) => {
    const todayElement = screen.getByText(today);
    return todayElement.classList.contains('bg-primary') && 
           todayElement.classList.contains('text-white');
  },

  hasProperGridLayout: () => {
    const dayHeaders = getCalendarElements().dayHeaders();
    const daysGrid = getCalendarElements().daysGrid();
    
    return dayHeaders?.classList.contains('grid-cols-7') &&
           daysGrid?.classList.contains('grid-cols-7');
  }
};

/**
 * Calendar test data for different scenarios
 */
export const calendarTestData = {
  leapYear: {
    year: 2024,
    february: { days: 29 }
  },
  
  nonLeapYear: {
    year: 2023,
    february: { days: 28 }
  },

  monthsWith30Days: ['April', 'June', 'September', 'November'],
  monthsWith31Days: ['January', 'March', 'May', 'July', 'August', 'October', 'December'],

  getDaysInMonth: (month: string, year: number) => {
    const monthIndex = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ].indexOf(month);
    
    return new Date(year, monthIndex + 1, 0).getDate();
  },

  getFirstDayOfWeek: (month: string, year: number) => {
    const monthIndex = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ].indexOf(month);
    
    return new Date(year, monthIndex, 1).getDay();
  }
};

/**
 * Mock date utilities for testing
 */
export const mockDateUtilities = {
  setToday: (date: Date) => {
    vi.setSystemTime(date);
  },

  createDate: (year: number, month: number, day: number) => {
    return new Date(year, month - 1, day); // month is 0-indexed in Date constructor
  },

  formatMonthYear: (date: Date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }
};

/**
 * Assertion helpers for common calendar tests
 */
export const calendarAssertions = {
  expectMonthToBeDisplayed: (month: string, year: number) => {
    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
  },

  expectDayToBeHighlighted: (day: string) => {
    const dayElement = screen.getByText(day);
    expect(dayElement).toHaveClass('bg-primary', 'text-white');
  },

  expectDayNotToBeHighlighted: (day: string) => {
    const dayElement = screen.getByText(day);
    expect(dayElement).not.toHaveClass('bg-primary', 'text-white');
    expect(dayElement).toHaveClass('hover:bg-primary/5', 'text-text-primary');
  },

  expectCorrectNumberOfDays: (expectedDays: number) => {
    expect(screen.getByText(expectedDays.toString())).toBeInTheDocument();
    expect(screen.queryByText((expectedDays + 1).toString())).not.toBeInTheDocument();
  },

  expectNavigationButtonsToBeEnabled: () => {
    expect(screen.getByLabelText('Previous month')).toBeEnabled();
    expect(screen.getByLabelText('Next month')).toBeEnabled();
  }
};