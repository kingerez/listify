import { ComponentType, ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

interface IconProps extends IconBaseProps {
  icon: ComponentType<IconBaseProps>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Icon({ 
  icon: IconComponent, 
  size = 'md', 
  className = '', 
  ...props 
}: IconProps) {
  const iconSize = typeof size === 'string' ? sizeMap[size] : size;
  
  return (
    <IconComponent 
      size={iconSize}
      className={`inline-block ${className}`}
      {...props}
    />
  );
}

// Convenience components for common use cases
interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  icon: ComponentType<IconBaseProps>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
}

export function IconButton({ 
  icon: IconComponent, 
  size = 'md', 
  className = '',
  onClick,
  disabled = false,
  ...buttonProps 
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        p-2 rounded-lg transition-colors
        hover:bg-surface-secondary active:bg-surface
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-primary/20
        ${className}
      `}
      {...buttonProps}
    >
      <Icon icon={IconComponent} size={size} />
    </button>
  );
} 