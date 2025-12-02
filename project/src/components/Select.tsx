import { SelectHTMLAttributes } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = ({ label, options, className = '', ...props }: SelectProps) => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      {label && (
        <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500
          ${theme === 'light'
            ? 'bg-white border-gray-300 text-gray-900'
            : 'bg-gray-800 border-gray-600 text-white'
          }
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
