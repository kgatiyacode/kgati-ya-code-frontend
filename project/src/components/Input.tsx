import { InputHTMLAttributes, forwardRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const { theme } = useTheme();

    return (
      <div className="w-full">
        {label && (
          <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-purple-500
            ${theme === 'light'
              ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
              : 'bg-gray-800 border-gray-600 text-white placeholder-gray-500'
            }
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
