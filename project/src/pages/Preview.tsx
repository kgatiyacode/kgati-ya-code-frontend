import { useNavigate } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { Button } from '../components/Button';
import { useTemplate } from '../contexts/TemplateContext';
import { useOnboarding } from '../contexts/OnboardingContext';
import { useTheme } from '../contexts/ThemeContext';

export const Preview = () => {
  const { selectedTemplate } = useTemplate();
  const { onboardingData } = useOnboarding();
  const navigate = useNavigate();
  const { theme } = useTheme();

  if (!selectedTemplate) {
    navigate('/templates');
    return null;
  }

  const services = [
    { title: 'Service One', description: 'Description of your first service offering' },
    { title: 'Service Two', description: 'Description of your second service offering' },
    { title: 'Service Three', description: 'Description of your third service offering' },
  ];

  return (
    <div className={theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}>
      <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} sticky top-16 z-40 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/templates')}
              className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <FiArrowLeft />
              <span>Back to Templates</span>
            </button>
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                Preview: {selectedTemplate.name}
              </span>
              <Button onClick={() => navigate('/dashboard')}>Save & Continue</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <section
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedTemplate.previewImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-red-900/80"></div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {onboardingData.businessType || 'Your Business Name'}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {onboardingData.description || 'Your business description will appear here'}
              </p>
              <div className="mt-8">
                <Button size="lg">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        <section className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Our Services
              </h2>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                Industry: {onboardingData.industry || 'Your Industry'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-lg ${
                    theme === 'light'
                      ? 'bg-gradient-to-br from-purple-50 to-red-50'
                      : 'bg-gradient-to-br from-purple-900/20 to-red-900/20'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <FiCheck className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {onboardingData.features.length > 0 && (
          <section className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Features
                </h2>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  Selected features for your website
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {onboardingData.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl shadow-lg text-center ${
                      theme === 'light' ? 'bg-white' : 'bg-gray-800'
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiCheck className="text-white" size={20} />
                    </div>
                    <h3 className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Contact Us
              </h2>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                Get in touch with us today
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Phone
                    </h3>
                    <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Email
                    </h3>
                    <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                      contact@yourbusiness.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      Address
                    </h3>
                    <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                      123 Business Street<br />City, State 12345
                    </p>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'light'
                      ? 'bg-gray-50 border-gray-300'
                      : 'bg-gray-700 border-gray-600 text-white'
                  }`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'light'
                      ? 'bg-gray-50 border-gray-300'
                      : 'bg-gray-700 border-gray-600 text-white'
                  }`}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'light'
                      ? 'bg-gray-50 border-gray-300'
                      : 'bg-gray-700 border-gray-600 text-white'
                  }`}
                ></textarea>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
