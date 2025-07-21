import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../Header';

// Mock the icons module
vi.mock('~/lib/icons', () => ({
  HiUserCircle: ({ className, ...props }: any) => (
    <div 
      data-testid="user-circle-icon" 
      className={className}
      {...props}
    >
      UserCircleIcon
    </div>
  ),
}));

describe('Header Component', () => {
  describe('Default Rendering', () => {
    it('renders with default props', () => {
      render(<Header />);
      
      // Check for default user name (appears in both desktop and mobile)
      expect(screen.getAllByText((content, element) => 
        content.includes('Hello,') && content.includes('Aqeel')
      )).toHaveLength(2);
      
      // Check for default greeting (appears in both desktop and mobile)
      expect(screen.getAllByText('Start planning today')).toHaveLength(2);
      
      // Check for brand name
      expect(screen.getByText('Yitsa Lab')).toBeInTheDocument();
      
      // Check for logo
      expect(screen.getByText('✓')).toBeInTheDocument();
      
      // Check for user icon
      expect(screen.getByTestId('user-circle-icon')).toBeInTheDocument();
    });

    it('has proper header structure and styling', () => {
      render(<Header />);
      
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('bg-white', 'border-b', 'border-gray-100', 'px-6', 'py-4');
    });

    it('renders the logo with correct styling', () => {
      render(<Header />);
      
      const logo = screen.getByText('✓');
      expect(logo.parentElement).toHaveClass(
        'w-10', 'h-10', 'bg-orange-500', 'rounded-full', 
        'flex', 'items-center', 'justify-center'
      );
      expect(logo).toHaveClass('text-white', 'font-bold', 'text-lg');
    });

    it('renders online status indicator', () => {
      const { container } = render(<Header />);
      
      // Check for the green status dot
      const statusDot = container.querySelector('.bg-green-500.border-2.border-white.rounded-full');
      expect(statusDot).toBeInTheDocument();
      expect(statusDot).toHaveClass('w-3', 'h-3', 'absolute', '-bottom-1', '-right-1');
    });
  });

  describe('Custom Props', () => {
    it('renders with custom userName', () => {
      const customUserName = 'John Doe';
      render(<Header userName={customUserName} />);
      
      // Should appear in both desktop and mobile views
      const greetings = screen.getAllByText(`Hello, ${customUserName}`);
      expect(greetings).toHaveLength(2); // Desktop and mobile versions
    });

    it('renders with custom userGreeting', () => {
      const customGreeting = 'Welcome back to your tasks!';
      render(<Header userGreeting={customGreeting} />);
      
      // Should appear in both desktop and mobile views
      const greetings = screen.getAllByText(customGreeting);
      expect(greetings).toHaveLength(2); // Desktop and mobile versions
    });

    it('renders with both custom userName and userGreeting', () => {
      const customUserName = 'Jane Smith';
      const customGreeting = 'Ready to be productive?';
      
      render(<Header userName={customUserName} userGreeting={customGreeting} />);
      
      expect(screen.getAllByText(`Hello, ${customUserName}`)).toHaveLength(2);
      expect(screen.getAllByText(customGreeting)).toHaveLength(2);
    });
  });

  describe('Responsive Design', () => {
    it('has desktop greeting with proper classes', () => {
      render(<Header userName="Test User" userGreeting="Test Greeting" />);
      
      // Find the desktop greeting container by looking for the h1 element first
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveClass('text-2xl', 'font-bold', 'text-gray-900');
      expect(h1).toHaveTextContent('Hello, Test User');
      
      const desktopContainer = h1.closest('.hidden.md\\:flex');
      expect(desktopContainer).toBeInTheDocument();
      expect(desktopContainer).toHaveClass('hidden', 'md:flex', 'flex-col', 'items-center');
      
      // Check the greeting paragraph styling
      const greeting = desktopContainer?.querySelector('p');
      expect(greeting).toHaveClass('text-gray-600', 'text-sm', 'mt-1');
      expect(greeting).toHaveTextContent('Test Greeting');
    });

    it('has mobile greeting with proper classes', () => {
      render(<Header userName="Test User" userGreeting="Test Greeting" />);
      
      // Find mobile greeting container by looking for the mobile-specific class first
      const { container } = render(<Header userName="Test User" userGreeting="Test Greeting" />);
      const mobileContainer = container.querySelector('.md\\:hidden.flex.flex-col.items-end');
      expect(mobileContainer).toBeInTheDocument();
      expect(mobileContainer).toHaveClass('md:hidden', 'flex', 'flex-col', 'items-end');
      
      // Find the mobile greeting span within the container
      const mobileGreeting = mobileContainer?.querySelector('.text-lg.font-semibold.text-gray-900');
      expect(mobileGreeting).toBeInTheDocument();
      expect(mobileGreeting).toHaveTextContent('Hello, Test User');
      
      // Check mobile sub-greeting
      const mobileSubGreeting = mobileContainer?.querySelector('.text-xs.text-gray-600');
      expect(mobileSubGreeting).toBeInTheDocument();
      expect(mobileSubGreeting).toHaveTextContent('Test Greeting');
    });
  });

  describe('Layout Structure', () => {
    it('has correct main container classes', () => {
      const { container } = render(<Header />);
      
      const mainContainer = container.querySelector('.flex.items-center.justify-between.max-w-7xl.mx-auto');
      expect(mainContainer).toBeInTheDocument();
    });

    it('has correct logo section structure', () => {
      render(<Header />);
      
      const logoSection = screen.getByText('✓').closest('.flex.items-center.gap-3');
      expect(logoSection).toBeInTheDocument();
      
      const brandText = screen.getByText('Yitsa Lab');
      expect(brandText).toHaveClass('text-xl', 'font-semibold', 'text-gray-800');
    });

    it('has correct user avatar section structure', () => {
      render(<Header />);
      
      const userIcon = screen.getByTestId('user-circle-icon');
      const avatarContainer = userIcon.closest('.relative');
      expect(avatarContainer).toBeInTheDocument();
      
      const userSection = avatarContainer?.closest('.flex.items-center.gap-3');
      expect(userSection).toBeInTheDocument();
    });
  });

  describe('Icon Integration', () => {
    it('renders HiUserCircle icon with correct props', () => {
      render(<Header />);
      
      const userIcon = screen.getByTestId('user-circle-icon');
      expect(userIcon).toHaveClass('w-10', 'h-10', 'text-gray-400');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic header element', () => {
      render(<Header />);
      
      const header = screen.getByRole('banner');
      expect(header.tagName).toBe('HEADER');
    });

    it('has proper heading hierarchy', () => {
      render(<Header />);
      
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toHaveTextContent('Hello, Aqeel');
    });

    it('has accessible text content', () => {
      render(<Header userName="Accessibility User" userGreeting="Testing accessibility" />);
      
      // Verify all text is accessible via screen readers
      expect(screen.getByText('Yitsa Lab')).toBeInTheDocument();
      expect(screen.getAllByText('Hello, Accessibility User')).toHaveLength(2);
      expect(screen.getAllByText('Testing accessibility')).toHaveLength(2);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty userName prop', () => {
      render(<Header userName="" />);
      
      // Use a more flexible text matcher for the empty username case
      expect(screen.getAllByText((content, element) => 
        content.includes('Hello,') && !content.trim().includes('Hello, A')
      )).toHaveLength(2);
    });

    it('handles empty userGreeting prop', () => {
      render(<Header userGreeting="" />);
      
      // Should render empty greeting text
      const { container } = render(<Header userGreeting="" />);
      const greetingElements = container.querySelectorAll('p, .text-xs');
      
      // At least one should be empty
      const hasEmptyGreeting = Array.from(greetingElements).some(el => 
        el.textContent?.trim() === ''
      );
      expect(hasEmptyGreeting).toBe(true);
    });

    it('handles undefined props gracefully', () => {
      render(<Header userName={undefined} userGreeting={undefined} />);
      
      // Should fall back to defaults
      expect(screen.getAllByText('Hello, Aqeel')).toHaveLength(2);
      expect(screen.getAllByText('Start planning today')).toHaveLength(2);
    });

    it('handles very long userName', () => {
      const longName = 'A'.repeat(50);
      render(<Header userName={longName} />);
      
      expect(screen.getAllByText(`Hello, ${longName}`)).toHaveLength(2);
    });

    it('handles very long userGreeting', () => {
      const longGreeting = 'This is a very long greeting message that might overflow '.repeat(3);
      render(<Header userGreeting={longGreeting} />);
      
      // Use a partial text match since the text might wrap
      expect(screen.getAllByText((content, element) => 
        content.includes('This is a very long greeting message that might overflow')
      )).toHaveLength(2);
    });
  });
});