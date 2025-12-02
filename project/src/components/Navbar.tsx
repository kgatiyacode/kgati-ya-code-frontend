import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Templates', path: '/templates' },
    ...(isAuthenticated ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-lg ${
      theme === 'light'
        ? 'bg-white/80 border-b border-gray-200'
        : 'bg-gray-900/80 border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent`}>
              KgatiYaCode
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-purple-600 dark:text-purple-400'
                    : theme === 'light'
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'light'
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            {isAuthenticated ? (
              <Button onClick={logout} size="sm" variant="outline">
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button size="sm" variant="outline">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-purple-600 dark:text-purple-400'
                    : theme === 'light'
                    ? 'text-gray-700'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
                }`}
              >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
              {isAuthenticated ? (
                <Button onClick={logout} size="sm" variant="outline" className="w-full">
                  Logout
                </Button>
              ) : (
                <div className="flex space-x-2 w-full">
                  <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button size="sm" variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
