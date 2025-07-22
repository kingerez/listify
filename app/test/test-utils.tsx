import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

// Custom render function that can be extended with providers if needed
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {
    // Add any global providers here if needed (Theme, Router, etc.)
    ...options,
  })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Common test data
export const mockUser = {
  name: 'Test User',
  avatar: 'https://example.com/avatar.jpg',
  email: 'test@example.com',
}

// Helper functions for common test scenarios
export const createMockHandler = () => vi.fn()

// Common test assertions
export const expectElementToBeVisible = (element: HTMLElement) => {
  expect(element).toBeInTheDocument()
  expect(element).toBeVisible()
}

export const expectElementToHaveClasses = (element: HTMLElement, classes: string[]) => {
  classes.forEach(className => {
    expect(element).toHaveClass(className)
  })
}