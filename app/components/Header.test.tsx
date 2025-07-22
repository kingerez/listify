import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Header from './Header'

// Mock the icons module
vi.mock('~/utils/icons', () => ({
  FiCircle: ({ className, size }: { className?: string; size?: number }) => (
    <div data-testid="circle-icon" className={className} style={{ fontSize: size }}>
      Circle
    </div>
  ),
  FiUser: ({ className, size }: { className?: string; size?: number }) => (
    <div data-testid="user-icon" className={className} style={{ fontSize: size }}>
      User
    </div>
  ),
  FiMenu: ({ className, size }: { className?: string; size?: number }) => (
    <div data-testid="menu-icon" className={className} style={{ fontSize: size }}>
      Menu
    </div>
  ),
  FiX: ({ className, size }: { className?: string; size?: number }) => (
    <div data-testid="close-icon" className={className} style={{ fontSize: size }}>
      Close
    </div>
  ),
  IconSizes: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 48,
  }
}))

describe('Header Component', () => {
  const defaultProps = {
    userName: 'John Doe',
    userAvatar: 'https://example.com/avatar.jpg',
    onMenuToggle: vi.fn(),
    isMenuOpen: false,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('renders the header with default props', () => {
      render(<Header />)
      
      expect(screen.getByRole('banner')).toBeInTheDocument()
      expect(screen.getByText('Vitra Lab')).toBeInTheDocument()
      expect(screen.getByText('Hello,')).toBeInTheDocument()
      expect(screen.getByText('Aqeel')).toBeInTheDocument() // default userName
    })

    it('renders with custom userName', () => {
      render(<Header userName="Jane Smith" />)
      
      expect(screen.getByText('Hello,')).toBeInTheDocument()
      expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    })

    it('renders the brand logo and name', () => {
      render(<Header />)
      
      expect(screen.getByTestId('circle-icon')).toBeInTheDocument()
      expect(screen.getByText('Vitra Lab')).toBeInTheDocument()
    })

    it('renders mobile menu button', () => {
      render(<Header />)
      
      const menuButton = screen.getByLabelText('Open menu')
      expect(menuButton).toBeInTheDocument()
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
    })
  })

  describe('User Avatar', () => {
    it('renders user avatar image when userAvatar prop is provided', () => {
      render(<Header {...defaultProps} />)
      
      const avatarImg = screen.getByAltText("John Doe's avatar")
      expect(avatarImg).toBeInTheDocument()
      expect(avatarImg).toHaveAttribute('src', 'https://example.com/avatar.jpg')
    })

    it('renders default user icon when no userAvatar is provided', () => {
      render(<Header userName="John Doe" />)
      
      expect(screen.getByTestId('user-icon')).toBeInTheDocument()
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('renders user avatar button with correct accessibility attributes', () => {
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      expect(avatarButton).toBeInTheDocument()
      expect(avatarButton.tagName).toBe('BUTTON')
    })
  })

  describe('Mobile Menu Toggle', () => {
    it('shows menu icon when menu is closed', () => {
      render(<Header {...defaultProps} isMenuOpen={false} />)
      
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
      expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument()
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    })

    it('shows close icon when menu is open', () => {
      render(<Header {...defaultProps} isMenuOpen={true} />)
      
      expect(screen.getByTestId('close-icon')).toBeInTheDocument()
      expect(screen.queryByTestId('menu-icon')).not.toBeInTheDocument()
      expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    })

    it('calls onMenuToggle when mobile menu button is clicked', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const menuButton = screen.getByLabelText('Open menu')
      await user.click(menuButton)
      
      expect(defaultProps.onMenuToggle).toHaveBeenCalledTimes(1)
    })

    it('is hidden on desktop (md: screen)', () => {
      render(<Header {...defaultProps} />)
      
      const menuButton = screen.getByLabelText('Open menu')
      expect(menuButton).toHaveClass('md:hidden')
    })
  })

  describe('User Dropdown Menu', () => {
    it('does not show dropdown menu by default', () => {
      render(<Header {...defaultProps} />)
      
      expect(screen.queryByText('Profile Settings')).not.toBeInTheDocument()
      expect(screen.queryByText('Preferences')).not.toBeInTheDocument()
      expect(screen.queryByText('Sign Out')).not.toBeInTheDocument()
    })

    it('shows dropdown menu when user avatar is clicked', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      await user.click(avatarButton)
      
      expect(screen.getByText('Profile Settings')).toBeInTheDocument()
      expect(screen.getByText('Preferences')).toBeInTheDocument()
      expect(screen.getByText('Sign Out')).toBeInTheDocument()
      expect(screen.getByText('Premium User')).toBeInTheDocument()
    })

    it('displays correct user information in dropdown', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      await user.click(avatarButton)
      
      // User name should appear twice - once in greeting and once in dropdown
      const userNameElements = screen.getAllByText('John Doe')
      expect(userNameElements).toHaveLength(2)
      expect(screen.getByText('Premium User')).toBeInTheDocument()
    })

    it('hides dropdown menu when user avatar is clicked again', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      
      // Open menu
      await user.click(avatarButton)
      expect(screen.getByText('Profile Settings')).toBeInTheDocument()
      
      // Close menu
      await user.click(avatarButton)
      expect(screen.queryByText('Profile Settings')).not.toBeInTheDocument()
    })

    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      await user.click(avatarButton)
      
      expect(screen.getByText('Profile Settings')).toBeInTheDocument()
      
      // Click outside (on the overlay)
      const overlay = document.querySelector('.fixed.inset-0')
      expect(overlay).toBeInTheDocument()
      
      if (overlay) {
        fireEvent.click(overlay)
      }
      
      await waitFor(() => {
        expect(screen.queryByText('Profile Settings')).not.toBeInTheDocument()
      })
    })

    it('renders dropdown menu items correctly', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      await user.click(avatarButton)
      
      const profileButton = screen.getByText('Profile Settings')
      const preferencesButton = screen.getByText('Preferences')
      const signOutButton = screen.getByText('Sign Out')
      
      expect(profileButton).toBeInTheDocument()
      expect(preferencesButton).toBeInTheDocument()
      expect(signOutButton).toBeInTheDocument()
      
      // Check that they are buttons
      expect(profileButton.tagName).toBe('BUTTON')
      expect(preferencesButton.tagName).toBe('BUTTON')
      expect(signOutButton.tagName).toBe('BUTTON')
    })
  })

  describe('Responsive Design', () => {
    it('hides user greeting on mobile screens', () => {
      render(<Header {...defaultProps} />)
      
      const greetingContainer = screen.getByText('Hello,').parentElement
      expect(greetingContainer).toHaveClass('hidden', 'sm:block')
    })

    it('applies correct styling classes', () => {
      render(<Header {...defaultProps} />)
      
      const header = screen.getByRole('banner')
      expect(header).toHaveClass(
        'bg-white',
        'dark:bg-neutral-900',
        'border-b',
        'border-neutral-200',
        'dark:border-neutral-700',
        'sticky',
        'top-0',
        'z-50'
      )
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA labels for interactive elements', () => {
      render(<Header {...defaultProps} />)
      
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
      expect(screen.getByLabelText('User menu')).toBeInTheDocument()
    })

    it('updates ARIA label when menu state changes', () => {
      const { rerender } = render(<Header {...defaultProps} isMenuOpen={false} />)
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
      
      rerender(<Header {...defaultProps} isMenuOpen={true} />)
      expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    })

    it('renders semantic HTML structure', () => {
      render(<Header {...defaultProps} />)
      
      expect(screen.getByRole('banner')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getAllByRole('button')).toHaveLength(2) // menu button and user menu button
    })

    it('has proper alt text for user avatar', () => {
      render(<Header {...defaultProps} />)
      
      const avatarImg = screen.getByAltText("John Doe's avatar")
      expect(avatarImg).toBeInTheDocument()
    })

    it('overlay has proper aria-hidden attribute', async () => {
      const user = userEvent.setup()
      render(<Header {...defaultProps} />)
      
      const avatarButton = screen.getByLabelText('User menu')
      await user.click(avatarButton)
      
      const overlay = document.querySelector('[aria-hidden="true"]')
      expect(overlay).toBeInTheDocument()
    })
  })

  describe('Props handling', () => {
    it('uses default userName when not provided', () => {
      render(<Header />)
      
      expect(screen.getByText('Aqeel')).toBeInTheDocument()
    })

    it('uses default isMenuOpen state when not provided', () => {
      render(<Header />)
      
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
    })

    it('does not break when onMenuToggle is not provided', async () => {
      const user = userEvent.setup()
      render(<Header />)
      
      const menuButton = screen.getByLabelText('Open menu')
      
      // Should not throw an error when clicked
      await expect(user.click(menuButton)).resolves.not.toThrow()
    })
  })

  describe('Dark mode support', () => {
    it('includes dark mode classes', () => {
      render(<Header />)
      
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('dark:bg-neutral-900', 'dark:border-neutral-700')
    })

    it('applies dark mode classes to interactive elements', () => {
      render(<Header />)
      
      const menuButton = screen.getByLabelText('Open menu')
      expect(menuButton).toHaveClass('dark:text-neutral-400', 'dark:hover:text-neutral-100')
    })
  })
})