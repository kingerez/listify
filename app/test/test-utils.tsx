import { render, RenderOptions } from '@testing-library/react'
import { ComponentType, ReactElement } from 'react'
import { IconBaseProps } from 'react-icons'

// Mock icon component for testing
export const MockIcon: ComponentType<IconBaseProps> = ({ size, className, ...props }) => (
  <svg
    data-testid="mock-icon"
    data-size={size}
    className={className}
    {...props}
    width={size}
    height={size}
  >
    <rect width="100%" height="100%" />
  </svg>
)

// Alternative mock icon for testing different icons
export const AnotherMockIcon: ComponentType<IconBaseProps> = ({ size, className, ...props }) => (
  <div data-testid="another-mock-icon" data-size={size} className={className} {...props}>
    Another Icon
  </div>
)

// Custom render function that can be extended with providers in the future
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }