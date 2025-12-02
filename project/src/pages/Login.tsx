import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-purple-50 via-red-50 to-gray-50'
        : 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-red-900/20'
    }`}>
      <div className="max-w-md w-full">
        <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-2xl ${
          theme === 'light'
            ? 'bg-white/70 border border-white/20'
            : 'bg-gray-800/70 border border-gray-700/50'
        }`}>
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-600 to-red-600 mb-4">
              <FiLock className="text-white" size={32} />
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Welcome Back
            </h2>
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
              Sign in to continue building your website
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FiMail className="absolute left-3 top-11 text-gray-400" size={20} />
              <Input
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12"
                required
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-11 text-gray-400" size={20} />
              <Input
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-11 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className={`ml-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline" size="sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
