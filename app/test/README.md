# Testing Documentation

This directory contains test utilities and setup files for the application.

## Test Setup

### Dependencies
- **Vitest**: Fast test runner
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM assertions
- **@testing-library/user-event**: Advanced user interaction simulation
- **jsdom**: DOM environment for Node.js

### Configuration Files
- `setup.ts`: Global test setup and mocks
- `test-utils.tsx`: Custom render function and testing utilities

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- Header.test.tsx
```

## Test Structure

Tests are located next to their corresponding components with the `.test.tsx` extension.

### Example: Header Component Tests

The Header component tests (`app/components/Header.test.tsx`) demonstrate comprehensive testing patterns:

1. **Rendering Tests**: Verify component renders correctly with different props
2. **User Interaction Tests**: Test click handlers, menu toggles, etc.
3. **Accessibility Tests**: Check ARIA labels, semantic HTML, keyboard navigation
4. **Responsive Design Tests**: Verify responsive behavior and CSS classes
5. **Props Handling Tests**: Test default values and prop variations
6. **State Management Tests**: Test internal component state changes

### Test Categories

#### Rendering
- Component renders without crashing
- Correct elements are displayed
- Props are handled correctly

#### User Interactions
- Click events work as expected
- State changes occur properly
- Callbacks are called with correct parameters

#### Accessibility
- ARIA labels are present and correct
- Semantic HTML is used
- Keyboard navigation works
- Screen reader support

#### Responsive Design
- Components adapt to different screen sizes
- CSS classes are applied correctly
- Mobile-specific features work

#### Dark Mode Support
- Dark mode classes are applied
- Theme switching works correctly

## Best Practices

1. **Use descriptive test names** that clearly explain what is being tested
2. **Group related tests** using `describe` blocks
3. **Mock external dependencies** to isolate component logic
4. **Test user interactions** rather than implementation details
5. **Include accessibility tests** to ensure inclusive design
6. **Clear mocks between tests** to prevent test interference
7. **Use custom render utilities** for consistent test setup

## Mock Patterns

### Mocking Icons
```typescript
vi.mock('~/utils/icons', () => ({
  FiUser: ({ className, size }) => (
    <div data-testid="user-icon" className={className}>
      User
    </div>
  ),
  // ... other icons
}))
```

### Mocking Functions
```typescript
const mockHandler = vi.fn()
// Test that function was called
expect(mockHandler).toHaveBeenCalledTimes(1)
```

## Common Test Utilities

Use the utilities from `test-utils.tsx`:

```typescript
import { render, screen, userEvent } from '~/test/test-utils'

// Custom render with providers
render(<Component />)

// Mock user interactions
const user = userEvent.setup()
await user.click(button)

// Common assertions
expectElementToBeVisible(element)
expectElementToHaveClasses(element, ['class1', 'class2'])
```