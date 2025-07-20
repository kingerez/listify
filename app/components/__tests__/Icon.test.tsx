import { render, screen, MockIcon, AnotherMockIcon } from '../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Icon, IconButton } from '../Icon'

describe('Icon Component', () => {
  it('renders with default props', () => {
    render(<Icon icon={MockIcon} />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('data-size', '20') // default 'md' size
    expect(icon).toHaveClass('inline-block')
  })

  it('applies correct size for sm', () => {
    render(<Icon icon={MockIcon} size="sm" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveAttribute('data-size', '16')
  })

  it('applies correct size for md', () => {
    render(<Icon icon={MockIcon} size="md" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveAttribute('data-size', '20')
  })

  it('applies correct size for lg', () => {
    render(<Icon icon={MockIcon} size="lg" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveAttribute('data-size', '24')
  })

  it('applies correct size for xl', () => {
    render(<Icon icon={MockIcon} size="xl" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveAttribute('data-size', '32')
  })

  it('applies custom className', () => {
    render(<Icon icon={MockIcon} className="custom-class" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveClass('inline-block', 'custom-class')
  })

  it('passes through additional props', () => {
    render(<Icon icon={MockIcon} data-custom="test-value" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveAttribute('data-custom', 'test-value')
  })

  it('combines custom className with default className', () => {
    render(<Icon icon={MockIcon} className="text-red-500" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveClass('inline-block')
    expect(icon).toHaveClass('text-red-500')
  })
})

describe('IconButton Component', () => {
  it('renders button with icon', () => {
    render(<IconButton icon={MockIcon} />)
    
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('mock-icon')
    
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(button).toContainElement(icon)
  })

  it('has correct default classes', () => {
    render(<IconButton icon={MockIcon} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'p-2',
      'rounded-lg',
      'transition-colors',
      'hover:bg-surface-secondary',
      'active:bg-surface',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary/20'
    )
  })

  it('applies custom className', () => {
    render(<IconButton icon={MockIcon} className="custom-button-class" />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-button-class')
  })

  it('passes size prop to Icon component', () => {
    render(<IconButton icon={MockIcon} size="xl" />)
    
    const icon = screen.getByTestId('mock-icon')
    expect(icon).toHaveAttribute('data-size', '32')
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    
    render(<IconButton icon={MockIcon} onClick={handleClick} />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<IconButton icon={MockIcon} disabled />)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    
    render(<IconButton icon={MockIcon} onClick={handleClick} disabled />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('has type="button" by default', () => {
    render(<IconButton icon={MockIcon} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('passes through additional button props', () => {
    render(<IconButton icon={MockIcon} data-testid="custom-button" aria-label="Test button" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toHaveAttribute('aria-label', 'Test button')
  })

  it('is enabled by default', () => {
    render(<IconButton icon={MockIcon} />)
    
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })

  it('applies hover and focus styles correctly', () => {
    render(<IconButton icon={MockIcon} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'hover:bg-surface-secondary',
      'focus:ring-primary/20'
    )
  })
})

describe('Icon Component Integration', () => {
  it('renders different icon components correctly', () => {
    const { rerender } = render(<Icon icon={MockIcon} />)
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()

    rerender(<Icon icon={AnotherMockIcon} />)
    expect(screen.getByTestId('another-mock-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument()
  })
})

describe('IconButton Component Integration', () => {
  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    
    render(<IconButton icon={MockIcon} onClick={handleClick} />)
    
    const button = screen.getByRole('button')
    button.focus()
    
    expect(button).toHaveFocus()
    
    await user.keyboard('{Enter}')
    expect(handleClick).toHaveBeenCalledTimes(1)
    
    await user.keyboard(' ')
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  it('maintains proper accessibility', () => {
    render(<IconButton icon={MockIcon} aria-label="Delete item" />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Delete item')
  })
})