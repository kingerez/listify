import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Header from '../Header';

// Mock the icons utility
vi.mock('~/utils/icons', () => ({
  FiUser: ({ size = 16, className = "" }: any) => (
    <svg data-testid="fi-user" width={size} height={size} className={className}>
      <title>User Icon</title>
    </svg>
  ),
  FiSettings: ({ size = 16, className = "" }: any) => (
    <svg data-testid="fi-settings" width={size} height={size} className={className}>
      <title>Settings Icon</title>
    </svg>
  ),
  FiLogOut: ({ size = 16, className = "" }: any) => (
    <svg data-testid="fi-logout" width={size} height={size} className={className}>
      <title>Logout Icon</title>
    </svg>
  ),
  FiChevronDown: ({ size = 16, className = "" }: any) => (
    <svg data-testid="fi-chevron-down" width={size} height={size} className={className}>
      <title>Chevron Down Icon</title>
    </svg>
  ),
  IconSizes: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
}));

// Mock the UserDropdown component
vi.mock('../UserDropdown', () => ({
  default: ({ userName, userAvatar, onProfileClick, onSettingsClick, onLogoutClick }: any) => (
    <div data-testid="user-dropdown">
      <span data-testid="dropdown-username">{userName}</span>
      {userAvatar && <img data-testid="dropdown-avatar" src={userAvatar} alt="avatar" />}
      <button data-testid="profile-btn" onClick={onProfileClick}>Profile</button>
      <button data-testid="settings-btn" onClick={onSettingsClick}>Settings</button>
      <button data-testid="logout-btn" onClick={onLogoutClick}>Logout</button>
    </div>
  ),
}));

describe('Header', () => {
  const defaultProps = {
    userName: 'Test User',
    userAvatar: 'https://example.com/avatar.jpg',
    onProfileClick: vi.fn(),
    onSettingsClick: vi.fn(),
    onLogoutClick: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the header with correct structure', () => {
      render(<Header {...defaultProps} />);
      
      // Check header element exists
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-white', 'dark:bg-neutral-800', 'border-b', 'sticky', 'top-0', 'z-50');
    });

    it('renders the brand logo and name', () => {
      render(<Header {...defaultProps} />);
      
      // Check brand name
      expect(screen.getByText('Vitra Lab')).toBeInTheDocument();
      expect(screen.getByText('Task Management')).toBeInTheDocument();
      
      // Check logo container
      const logoContainer = screen.getByText('V').parentElement;
      expect(logoContainer).toHaveClass('w-6', 'h-6', 'bg-primary-600', 'rounded-lg');
    });

    it('renders with default userName when none provided', () => {
      render(<Header />);
      
      expect(screen.getByTestId('dropdown-username')).toHaveTextContent('Aqeel');
    });

    it('renders with custom userName when provided', () => {
      render(<Header userName="John Doe" />);
      
      expect(screen.getByTestId('dropdown-username')).toHaveTextContent('John Doe');
    });

    it('passes userAvatar to UserDropdown', () => {
      const avatarUrl = 'https://example.com/custom-avatar.jpg';
      render(<Header userAvatar={avatarUrl} />);
      
      const avatar = screen.getByTestId('dropdown-avatar');
      expect(avatar).toHaveAttribute('src', avatarUrl);
    });
  });

  describe('User Interactions', () => {
    it('calls onProfileClick when profile button is clicked', () => {
      render(<Header {...defaultProps} />);
      
      const profileBtn = screen.getByTestId('profile-btn');
      fireEvent.click(profileBtn);
      
      expect(defaultProps.onProfileClick).toHaveBeenCalledTimes(1);
    });

    it('calls onSettingsClick when settings button is clicked', () => {
      render(<Header {...defaultProps} />);
      
      const settingsBtn = screen.getByTestId('settings-btn');
      fireEvent.click(settingsBtn);
      
      expect(defaultProps.onSettingsClick).toHaveBeenCalledTimes(1);
    });

    it('calls onLogoutClick when logout button is clicked', () => {
      render(<Header {...defaultProps} />);
      
      const logoutBtn = screen.getByTestId('logout-btn');
      fireEvent.click(logoutBtn);
      
      expect(defaultProps.onLogoutClick).toHaveBeenCalledTimes(1);
    });

    it('handles missing callback functions gracefully', () => {
      render(<Header userName="Test User" />);
      
      const profileBtn = screen.getByTestId('profile-btn');
      const settingsBtn = screen.getByTestId('settings-btn');
      const logoutBtn = screen.getByTestId('logout-btn');
      
      // These should not throw errors even without callbacks
      expect(() => {
        fireEvent.click(profileBtn);
        fireEvent.click(settingsBtn);
        fireEvent.click(logoutBtn);
      }).not.toThrow();
    });
  });

  describe('UserDropdown Integration', () => {
    it('passes all props correctly to UserDropdown', () => {
      render(<Header {...defaultProps} />);
      
      const userDropdown = screen.getByTestId('user-dropdown');
      expect(userDropdown).toBeInTheDocument();
      
      // Verify all props are passed
      expect(screen.getByTestId('dropdown-username')).toHaveTextContent(defaultProps.userName);
      expect(screen.getByTestId('dropdown-avatar')).toHaveAttribute('src', defaultProps.userAvatar);
      expect(screen.getByTestId('profile-btn')).toBeInTheDocument();
      expect(screen.getByTestId('settings-btn')).toBeInTheDocument();
      expect(screen.getByTestId('logout-btn')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<Header {...defaultProps} />);
      
      // Header should be a landmark
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      
      // Brand name should be a heading
      const brandHeading = screen.getByRole('heading', { level: 1 });
      expect(brandHeading).toHaveTextContent('Vitra Lab');
    });

    it('maintains responsive design classes', () => {
      render(<Header {...defaultProps} />);
      
      // Check responsive classes are present
      const taskManagementText = screen.getByText('Task Management');
      expect(taskManagementText).toHaveClass('hidden', 'sm:block');
    });
  });

  describe('Layout and Styling', () => {
    it('has correct container and flex layout', () => {
      render(<Header {...defaultProps} />);
      
      const header = screen.getByRole('banner');
      const container = header.querySelector('.container-app');
      expect(container).toBeInTheDocument();
      
      const flexContainer = container?.querySelector('.flex-between');
      expect(flexContainer).toBeInTheDocument();
      expect(flexContainer).toHaveClass('h-16');
    });

    it('has correct brand section layout', () => {
      render(<Header {...defaultProps} />);
      
      const brandSection = screen.getByText('Vitra Lab').closest('.flex.items-center.gap-3');
      expect(brandSection).toBeInTheDocument();
    });

    it('has correct logo styling', () => {
      render(<Header {...defaultProps} />);
      
      const logoBackground = screen.getByText('V').parentElement?.parentElement;
      expect(logoBackground).toHaveClass('w-10', 'h-10', 'bg-primary-100', 'dark:bg-primary-900', 'rounded-xl');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty userName prop', () => {
      render(<Header userName="" />);
      
      expect(screen.getByTestId('dropdown-username')).toHaveTextContent('');
    });

    it('handles undefined userAvatar prop', () => {
      render(<Header userName="Test User" userAvatar={undefined} />);
      
      expect(screen.queryByTestId('dropdown-avatar')).not.toBeInTheDocument();
    });

    it('renders correctly with minimal props', () => {
      render(<Header />);
      
      expect(screen.getByText('Vitra Lab')).toBeInTheDocument();
      expect(screen.getByTestId('user-dropdown')).toBeInTheDocument();
    });
  });
});