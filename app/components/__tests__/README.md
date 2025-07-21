# Component Tests

This directory contains unit tests for React components using Vitest and Testing Library.

## Header Component Tests

The `Header.test.tsx` file contains comprehensive tests for the Header component covering:

### Test Categories

1. **Default Rendering**
   - Tests default props and initial state
   - Verifies proper header structure and styling
   - Checks logo and status indicator rendering

2. **Custom Props**
   - Tests custom userName and userGreeting props
   - Verifies proper prop handling

3. **Responsive Design**
   - Tests desktop and mobile layout differences
   - Verifies responsive CSS classes and behavior

4. **Layout Structure**
   - Tests container layouts and component organization
   - Verifies CSS classes and element hierarchy

5. **Icon Integration**
   - Tests proper icon rendering and props
   - Verifies icon mocking works correctly

6. **Accessibility**
   - Tests semantic HTML elements
   - Verifies heading hierarchy
   - Ensures proper ARIA support

7. **Edge Cases**
   - Tests empty/undefined props
   - Tests extremely long text inputs
   - Verifies graceful error handling

## Running Tests

```bash
# Run all tests
npm test

# Run tests once (useful for CI)
npm run test:run

# Run tests with UI interface
npm run test:ui
```

## Test Setup

The tests use:
- **Vitest** as the test runner
- **@testing-library/react** for component testing utilities
- **@testing-library/jest-dom** for additional matchers
- **jsdom** as the DOM environment

## Mock Strategy

The tests mock the `~/lib/icons` module to avoid dependencies on actual icon libraries and ensure predictable test behavior.

## Test File Structure

```typescript
describe('Header Component', () => {
  describe('Category Name', () => {
    it('should test specific behavior', () => {
      // Test implementation
    });
  });
});
```

Each test follows the AAA pattern:
- **Arrange**: Set up the test data and render the component
- **Act**: Perform actions (if needed)
- **Assert**: Verify the expected behavior