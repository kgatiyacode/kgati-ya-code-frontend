import { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card = ({ children, className = '', hover = false, gradient = false }: CardProps) => {
  const { theme } = useTheme();

  const baseClasses = 'rounded-xl p-6 transition-all duration-300';

  const bgClasses = gradient
    ? theme === 'light'
      ? 'bg-gradient-to-br from-purple-50 to-red-50'
      : 'bg-gradient-to-br from-purple-900/20 to-red-900/20'
    : theme === 'light'
      ? 'bg-white'
      : 'bg-gray-800';

  const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105 cursor-pointer' : '';

  const shadowClasses = theme === 'light' ? 'shadow-lg' : 'shadow-2xl shadow-black/50';

  return (
    <div className={`${baseClasses} ${bgClasses} ${shadowClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
