# Testing Setup

This directory contains the testing configuration and utilities for the application.

## Testing Framework

We use **Vitest** as our testing framework with **React Testing Library** for component testing.

## Files

- `setup.ts` - Test setup file that configures jest-dom matchers
- `test-utils.tsx` - Reusable testing utilities and mock components

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:ui

# Run a specific test file
npx vitest run app/components/__tests__/Icon.test.tsx
```

## Writing Component Tests

### Basic Example

```tsx
import { render, screen } from '../test/test-utils'
import { MyComponent } from '../components/MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
```

### Using Mock Icons

The test utilities provide mock icon components for testing:

```tsx
import { render, MockIcon, AnotherMockIcon } from '../test/test-utils'
import { Icon } from '../components/Icon'

test('renders icon', () => {
  render(<Icon icon={MockIcon} />)
  expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
})
```

## Test Structure

Tests should be organized as follows:
- Component tests: `app/components/__tests__/ComponentName.test.tsx`
- Hook tests: `app/hooks/__tests__/useHookName.test.ts`
- Utility tests: `app/lib/__tests__/utilityName.test.ts`

## Best Practices

1. **Use descriptive test names** that clearly describe what is being tested
2. **Test user interactions** using `@testing-library/user-event`
3. **Test accessibility** by checking for proper ARIA attributes
4. **Mock external dependencies** to isolate component logic
5. **Use screen queries** from React Testing Library for finding elements
6. **Test both happy paths and edge cases**

## Available Matchers

Thanks to `@testing-library/jest-dom`, you have access to useful matchers like:

- `toBeInTheDocument()`
- `toHaveClass()`
- `toHaveAttribute()`
- `toBeDisabled()`
- `toHaveFocus()`

See the [jest-dom documentation](https://github.com/testing-library/jest-dom) for the full list.