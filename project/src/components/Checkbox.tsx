import { InputHTMLAttributes } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, className = '', ...props }: CheckboxProps) => {
  const { theme } = useTheme();

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        className={`
          w-5 h-5 rounded border-2 transition-all duration-200
          focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          checked:bg-gradient-to-r checked:from-purple-600 checked:to-red-600
          ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}
          ${className}
        `}
        {...props}
      />
      <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
        {label}
      </span>
    </label>
  );
};
