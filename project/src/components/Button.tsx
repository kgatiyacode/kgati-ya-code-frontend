import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const { theme } = useTheme();

  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: theme === 'light'
      ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white hover:shadow-lg focus:ring-purple-500'
      : 'bg-gradient-to-r from-purple-500 to-red-500 text-white hover:shadow-lg focus:ring-purple-400',
    secondary: theme === 'light'
      ? 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500'
      : 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-400',
    outline: theme === 'light'
      ? 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500'
      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-900/30 focus:ring-purple-400',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
