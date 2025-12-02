import { Link } from 'react-router-dom';
import { FiEdit, FiLayout, FiRefreshCw, FiUser } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useAuth } from '../contexts/AuthContext';
import { useTemplate } from '../contexts/TemplateContext';
import { useOnboarding } from '../contexts/OnboardingContext';
import { useTheme } from '../contexts/ThemeContext';

export const Dashboard = () => {
  const { user } = useAuth();
  const { selectedTemplate, clearTemplate } = useTemplate();
  const { onboardingData, resetOnboardingData } = useOnboarding();
  const { theme } = useTheme();

  const handleStartOver = () => {
    clearTemplate();
    resetOnboardingData();
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
            Here's an overview of your website project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card gradient>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiUser className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Profile Information
                </h3>
                <div className="space-y-1">
                  <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                    <span className="font-medium">Name:</span> {user?.name || 'Not set'}
                  </p>
                  <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                    <span className="font-medium">Email:</span> {user?.email || 'Not set'}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card gradient>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiLayout className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Selected Template
                </h3>
                <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  {selectedTemplate ? (
                    <>
                      <span className="font-medium">{selectedTemplate.name}</span>
                      <br />
                      <span className="text-sm">{selectedTemplate.category}</span>
                    </>
                  ) : (
                    'No template selected yet'
                  )}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className={`text-2xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Your Website Details
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Business Type
              </h4>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {onboardingData.businessType || 'Not specified'}
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Industry
              </h4>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {onboardingData.industry || 'Not specified'}
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Visual Style
              </h4>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {onboardingData.visualStyle || 'Not specified'}
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Features
              </h4>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {onboardingData.features.length > 0
                  ? onboardingData.features.join(', ')
                  : 'No features selected'}
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Description
              </h4>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {onboardingData.description || 'No description provided'}
              </p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card hover className="text-center">
            <FiEdit className="mx-auto mb-4 text-purple-600 dark:text-purple-400" size={48} />
            <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Continue Editing
            </h3>
            <p className={`mb-4 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Make changes to your website content and design
            </p>
            <Link to="/preview">
              <Button className="w-full">Edit Website</Button>
            </Link>
          </Card>

          <Card hover className="text-center">
            <FiLayout className="mx-auto mb-4 text-red-600 dark:text-red-400" size={48} />
            <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Choose New Template
            </h3>
            <p className={`mb-4 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Browse and select a different template design
            </p>
            <Link to="/templates">
              <Button className="w-full" variant="outline">
                View Templates
              </Button>
            </Link>
          </Card>

          <Card hover className="text-center">
            <FiRefreshCw className="mx-auto mb-4 text-gray-600 dark:text-gray-400" size={48} />
            <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Start Over
            </h3>
            <p className={`mb-4 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Begin a fresh project from scratch
            </p>
            <Link to="/onboarding" onClick={handleStartOver}>
              <Button className="w-full" variant="secondary">
                Start Fresh
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};
