# Calendar Component Tests

This directory contains comprehensive unit tests for the Calendar component.

## Test Structure

- `Calendar.test.tsx` - Main unit tests covering all Calendar functionality
- `../test/setup.ts` - Test environment setup with jest-dom matchers
- `../test/calendar-helpers.ts` - Helper utilities for Calendar testing

## Test Coverage

The Calendar component tests cover:

### Core Functionality
- ✅ Calendar rendering with current month/year
- ✅ Day abbreviations display (S, M, T, W, T, F, S)
- ✅ Correct number of days per month
- ✅ Today's date highlighting
- ✅ Month navigation (previous/next)
- ✅ Multiple month navigation
- ✅ Year transitions

### Edge Cases
- ✅ Leap year February (29 days)
- ✅ Non-leap year February (28 days)
- ✅ Months with 30 days vs 31 days
- ✅ Cross-year navigation
- ✅ Today highlighting in different months

### UI/UX
- ✅ CSS classes application
- ✅ Grid layout (7-column)
- ✅ Hover states
- ✅ Accessibility (ARIA labels)
- ✅ Button functionality

### State Management
- ✅ State persistence during navigation
- ✅ Proper date calculations
- ✅ Empty cells for month start padding

## Running Tests

### Run all Calendar tests
```bash
npm test
# or
npm run test:run
```

### Run specific test file
```bash
npx vitest run --config vitest.config.ts app/components/__tests__/Calendar.test.tsx
```

### Run tests in watch mode
```bash
npm run test
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Test Configuration

Tests use:
- **Vitest** - Test runner
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Additional DOM matchers
- **@testing-library/user-event** - User interaction simulation
- **jsdom** - DOM environment for Node.js

## Helper Utilities

The `calendar-helpers.ts` file provides reusable utilities:

- `navigateCalendar` - Month navigation helpers
- `getCalendarElements` - Element selector utilities
- `validateCalendarState` - State validation helpers
- `calendarTestData` - Test data constants
- `mockDateUtilities` - Date mocking helpers
- `calendarAssertions` - Common assertion helpers

## Mock Strategy

Tests mock:
- Icon components (simplified button rendering)
- react-icons exports
- Date/time for consistent testing

## Test Results

Current test results: **20/20 tests passing** ✅

- All core functionality tests pass
- All edge case tests pass  
- All UI/accessibility tests pass
- All state management tests pass

## Adding New Tests

When adding new Calendar features, consider testing:

1. **Functionality** - Does the feature work as expected?
2. **Edge Cases** - How does it handle edge cases?
3. **Accessibility** - Is it accessible to screen readers?
4. **State** - Does it properly manage component state?
5. **UI** - Does it render correctly with proper styles?

Use the helper utilities in `calendar-helpers.ts` to maintain consistency across tests.