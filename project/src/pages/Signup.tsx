import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await signup(name, email, password);
      navigate('/onboarding');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-red-50 via-purple-50 to-gray-50'
        : 'bg-gradient-to-br from-gray-900 via-red-900/20 to-purple-900/20'
    }`}>
      <div className="max-w-md w-full">
        <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-2xl ${
          theme === 'light'
            ? 'bg-white/70 border border-white/20'
            : 'bg-gray-800/70 border border-gray-700/50'
        }`}>
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-red-600 to-purple-600 mb-4">
              <FiUser className="text-white" size={32} />
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Create Account
            </h2>
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
              Start building your website today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FiUser className="absolute left-3 top-11 text-gray-400" size={20} />
              <Input
                type="text"
                label="Full Name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-12"
                required
              />
            </div>

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

            <div className="relative">
              <FiLock className="absolute left-3 top-11 text-gray-400" size={20} />
              <Input
                type={showPassword ? 'text' : 'password'}
                label="Confirm Password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-12"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                required
              />
              <span className={`ml-2 text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                I agree to the{' '}
                <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                Sign in
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
