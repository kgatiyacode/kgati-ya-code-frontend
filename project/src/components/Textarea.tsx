import { TextareaHTMLAttributes } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ label, className = '', ...props }: TextareaProps) => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      {label && (
        <label className={`block text-sm font-medium mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500
          resize-none
          ${theme === 'light'
            ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
            : 'bg-gray-800 border-gray-600 text-white placeholder-gray-500'
          }
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
