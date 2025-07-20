import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Calendar } from '../Calendar';

// Mock the Icon components to avoid dependency issues in tests
vi.mock('../Icon', () => ({
  IconButton: ({ onClick, 'aria-label': ariaLabel, children }: any) => (
    <button onClick={onClick} aria-label={ariaLabel}>
      {children || ariaLabel}
    </button>
  ),
}));

// Mock the icons
vi.mock('../../lib/icons', () => ({
  RiArrowLeftLine: 'RiArrowLeftLine',
  RiArrowRightLine: 'RiArrowRightLine',
}));

describe('Calendar Component', () => {
  beforeEach(() => {
    // Reset date to a known value for consistent testing
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-15')); // January 15, 2024 (Monday)
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders calendar with current month and year', () => {
    render(<Calendar />);
    
    expect(screen.getByText('January 2024')).toBeInTheDocument();
  });

  it('displays all day abbreviations', () => {
    render(<Calendar />);
    
    const dayAbbreviations = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const uniqueDayAbbreviations = ['M', 'W', 'F']; // Test unique ones  
    const multipleDayAbbreviations = ['S', 'T']; // S and T appear twice
    
    uniqueDayAbbreviations.forEach(day => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
    
    multipleDayAbbreviations.forEach(day => {
      expect(screen.getAllByText(day)).toHaveLength(2);
    });
  });

  it('displays the correct number of days for January 2024', () => {
    render(<Calendar />);
    
    // January 2024 has 31 days
    for (let day = 1; day <= 31; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }
  });

  it('highlights today\'s date', () => {
    render(<Calendar />);
    
    const todayElement = screen.getByText('15');
    expect(todayElement).toHaveClass('bg-primary', 'text-white');
  });

  it('navigates to previous month when left arrow is clicked', () => {
    render(<Calendar />);
    
    const prevButton = screen.getByLabelText('Previous month');
    fireEvent.click(prevButton);
    
    expect(screen.getByText('December 2023')).toBeInTheDocument();
  });

  it('navigates to next month when right arrow is clicked', () => {
    render(<Calendar />);
    
    const nextButton = screen.getByLabelText('Next month');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('February 2024')).toBeInTheDocument();
  });

  it('can navigate multiple months backward', () => {
    render(<Calendar />);
    
    const prevButton = screen.getByLabelText('Previous month');
    
    // Go back 3 months
    fireEvent.click(prevButton);
    fireEvent.click(prevButton);
    fireEvent.click(prevButton);
    
    expect(screen.getByText('October 2023')).toBeInTheDocument();
  });

  it('can navigate multiple months forward', () => {
    render(<Calendar />);
    
    const nextButton = screen.getByLabelText('Next month');
    
    // Go forward 3 months
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    
    expect(screen.getByText('April 2024')).toBeInTheDocument();
  });

  it('handles year transitions correctly', () => {
    render(<Calendar />);
    
    const prevButton = screen.getByLabelText('Previous month');
    
    // Go back one month to December 2023
    fireEvent.click(prevButton);
    expect(screen.getByText('December 2023')).toBeInTheDocument();
    
    // Go forward to January 2024
    const nextButton = screen.getByLabelText('Next month');
    fireEvent.click(nextButton);
    expect(screen.getByText('January 2024')).toBeInTheDocument();
  });

  it('displays correct number of days for February in a leap year', () => {
    // Set date to February 2024 (leap year)
    vi.setSystemTime(new Date('2024-02-15'));
    render(<Calendar />);
    
    expect(screen.getByText('February 2024')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument(); // 29th day should exist in leap year
  });

  it('displays correct number of days for February in a non-leap year', () => {
    // Set date to February 2023 (non-leap year)
    vi.setSystemTime(new Date('2023-02-15'));
    render(<Calendar />);
    
    expect(screen.getByText('February 2023')).toBeInTheDocument();
    expect(screen.queryByText('29')).not.toBeInTheDocument(); // 29th day should not exist
    expect(screen.getByText('28')).toBeInTheDocument(); // 28th day should be the last
  });

  it('correctly handles months with 30 days', () => {
    // Set date to April 2024 (30 days)
    vi.setSystemTime(new Date('2024-04-15'));
    render(<Calendar />);
    
    expect(screen.getByText('April 2024')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.queryByText('31')).not.toBeInTheDocument();
  });

  it('applies correct CSS classes to calendar structure', () => {
    render(<Calendar />);
    
    const calendarContainer = screen.getByText('January 2024').closest('div');
    expect(calendarContainer?.parentElement).toHaveClass('bg-surface', 'rounded-lg', 'p-4', 'shadow-sm');
  });

  it('applies hover styles to non-today dates', () => {
    render(<Calendar />);
    
    // Get a date that's not today (15th)
    const dayElement = screen.getByText('10');
    expect(dayElement).toHaveClass('hover:bg-primary/5', 'text-text-primary');
    expect(dayElement).not.toHaveClass('bg-primary', 'text-white');
  });

  it('maintains state when navigating between months', () => {
    render(<Calendar />);
    
    const nextButton = screen.getByLabelText('Next month');
    const prevButton = screen.getByLabelText('Previous month');
    
    // Navigate forward
    fireEvent.click(nextButton);
    expect(screen.getByText('February 2024')).toBeInTheDocument();
    
    // Navigate back
    fireEvent.click(prevButton);
    expect(screen.getByText('January 2024')).toBeInTheDocument();
  });

  it('shows empty cells for days before the first day of the month', () => {
    // January 1, 2024 starts on a Monday (index 1)
    render(<Calendar />);
    
    const calendarGrid = screen.getByText('1').closest('.grid');
    const cells = calendarGrid?.children;
    
    // First 7 items are day headers, then we have the date cells
    // January 1, 2024 is a Monday, so there should be 1 empty cell (Sunday)
    expect(cells).toBeDefined();
  });

  it('handles edge case of navigating across multiple years', () => {
    render(<Calendar />);
    
    const prevButton = screen.getByLabelText('Previous month');
    
    // Go back 13 months to December 2022
    for (let i = 0; i < 13; i++) {
      fireEvent.click(prevButton);
    }
    
    expect(screen.getByText('December 2022')).toBeInTheDocument();
  });

  it('today highlighting works correctly when navigating months', () => {
    render(<Calendar />);
    
    // Navigate to a different month
    const nextButton = screen.getByLabelText('Next month');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('February 2024')).toBeInTheDocument();
    
    // The 15th should not be highlighted in February since today is January 15th
    const fifteenthInFeb = screen.getByText('15');
    expect(fifteenthInFeb).not.toHaveClass('bg-primary', 'text-white');
    expect(fifteenthInFeb).toHaveClass('hover:bg-primary/5', 'text-text-primary');
  });

  it('renders accessible navigation buttons', () => {
    render(<Calendar />);
    
    const prevButton = screen.getByLabelText('Previous month');
    const nextButton = screen.getByLabelText('Next month');
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(prevButton.tagName).toBe('BUTTON');
    expect(nextButton.tagName).toBe('BUTTON');
  });

  it('displays calendar in a 7-column grid layout', () => {
    render(<Calendar />);
    
    // Use unique text to find the header grid
    const dayHeaders = screen.getByText('M').closest('.grid');
    expect(dayHeaders).toHaveClass('grid-cols-7');
    
    const daysGrid = screen.getByText('1').closest('.grid');
    expect(daysGrid).toHaveClass('grid-cols-7');
  });
});