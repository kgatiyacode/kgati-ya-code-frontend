import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';
import { Checkbox } from '../components/Checkbox';
import { useOnboarding } from '../contexts/OnboardingContext';
import { useTheme } from '../contexts/ThemeContext';

const steps = [
  { title: 'Business Type', description: 'Tell us about your business' },
  { title: 'Industry', description: 'What industry are you in?' },
  { title: 'Description', description: 'Describe your vision' },
  { title: 'Visual Style', description: 'Choose your aesthetic' },
  { title: 'Features', description: 'What do you need?' },
];

const businessTypes = [
  { value: '', label: 'Select business type' },
  { value: 'retail', label: 'Retail Store' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'service', label: 'Service Provider' },
  { value: 'professional', label: 'Professional Services' },
  { value: 'creative', label: 'Creative Agency' },
];

const industries = [
  { value: '', label: 'Select industry' },
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance' },
  { value: 'education', label: 'Education' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'real-estate', label: 'Real Estate' },
];

const visualStyles = [
  { value: '', label: 'Select visual style' },
  { value: 'modern', label: 'Modern & Minimal' },
  { value: 'bold', label: 'Bold & Colorful' },
  { value: 'elegant', label: 'Elegant & Sophisticated' },
  { value: 'playful', label: 'Playful & Fun' },
  { value: 'professional', label: 'Professional & Corporate' },
];

const availableFeatures = [
  'Contact Form',
  'Image Gallery',
  'Blog',
  'E-commerce',
  'Booking System',
  'Testimonials',
  'Team Section',
  'FAQ Section',
];

export const Onboarding = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { onboardingData, updateOnboardingData, currentStep, setCurrentStep } = useOnboarding();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/templates');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    const features = onboardingData.features.includes(feature)
      ? onboardingData.features.filter((f) => f !== feature)
      : [...onboardingData.features, feature];
    updateOnboardingData({ features });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Select
            label="What type of business do you have?"
            options={businessTypes}
            value={onboardingData.businessType}
            onChange={(e) => updateOnboardingData({ businessType: e.target.value })}
          />
        );
      case 1:
        return (
          <Select
            label="Which industry best describes your business?"
            options={industries}
            value={onboardingData.industry}
            onChange={(e) => updateOnboardingData({ industry: e.target.value })}
          />
        );
      case 2:
        return (
          <Textarea
            label="Describe your business and what you want your website to accomplish"
            placeholder="Tell us about your business, your goals, and what you want visitors to experience..."
            rows={6}
            value={onboardingData.description}
            onChange={(e) => updateOnboardingData({ description: e.target.value })}
          />
        );
      case 3:
        return (
          <Select
            label="What visual style do you prefer?"
            options={visualStyles}
            value={onboardingData.visualStyle}
            onChange={(e) => updateOnboardingData({ visualStyle: e.target.value })}
          />
        );
      case 4:
        return (
          <div className="space-y-4">
            <label className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
              What features do you need? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availableFeatures.map((feature) => (
                <Checkbox
                  key={feature}
                  label={feature}
                  checked={onboardingData.features.includes(feature)}
                  onChange={() => handleFeatureToggle(feature)}
                />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-purple-50 to-red-50'
        : 'bg-gradient-to-br from-gray-900 to-purple-900/20'
    }`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex-1">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white'
                        : theme === 'light'
                        ? 'bg-gray-200 text-gray-500'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        index < currentStep
                          ? 'bg-gradient-to-r from-purple-600 to-red-600'
                          : theme === 'light'
                          ? 'bg-gray-200'
                          : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-2xl ${
          theme === 'light'
            ? 'bg-white/70 border border-white/20'
            : 'bg-gray-800/70 border border-gray-700/50'
        }`}>
          <div className="mb-8">
            <h2 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              {steps[currentStep].title}
            </h2>
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
              {steps[currentStep].description}
            </p>
          </div>

          <div className="mb-8 transition-all duration-300 transform">
            {renderStep()}
          </div>

          <div className="flex justify-between items-center">
            <Button
              onClick={handleBack}
              variant="outline"
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <FiArrowLeft />
              <span>Back</span>
            </Button>

            <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Step {currentStep + 1} of {steps.length}
            </div>

            <Button
              onClick={handleNext}
              className="flex items-center space-x-2"
            >
              <span>{currentStep === steps.length - 1 ? 'View Templates' : 'Next'}</span>
              <FiArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
