import { Link } from 'react-router-dom';
import { FiZap, FiLayout, FiTrendingUp, FiCheck } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';

export const Landing = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <FiZap size={32} />,
      title: 'Lightning Fast',
      description: 'Build professional websites in minutes, not weeks. Our guided flow makes it effortless.',
    },
    {
      icon: <FiLayout size={32} />,
      title: 'Beautiful Templates',
      description: 'Choose from dozens of professionally designed templates tailored for small businesses.',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Grow Your Business',
      description: 'Get online quickly and start reaching more customers with a stunning web presence.',
    },
  ];

  const benefits = [
    'No coding required',
    'Mobile responsive designs',
    'SEO optimized',
    'Custom branding',
    'Easy to update',
    'Professional results',
  ];

  return (
    <div className="min-h-screen">
      <section className={`relative overflow-hidden ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 via-red-600 to-black' : 'bg-gradient-to-br from-purple-900 via-red-900 to-black'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Build Your Dream Website
              <span className="block mt-2">In Minutes</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              The easiest way for small businesses to create professional websites. No technical skills needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/onboarding">
                <Button size="lg" className="text-lg px-12 py-5 shadow-2xl hover:shadow-white/20">
                  Start Building
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="text-lg px-12 py-5 bg-white/10 border-white text-white hover:bg-white/20">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      <section className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Why Choose KgatiYaCode?
            </h2>
            <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Everything you need to create a stunning online presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} gradient hover>
                <div className="text-purple-600 dark:text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {feature.title}
                </h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Everything Included
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-red-600 flex items-center justify-center">
                        <FiCheck className="text-white" size={16} />
                      </div>
                      <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className={`w-full h-64 rounded-lg ${theme === 'light' ? 'bg-gradient-to-br from-purple-100 to-red-100' : 'bg-gradient-to-br from-purple-900/30 to-red-900/30'} flex items-center justify-center`}>
                  <FiLayout size={80} className="text-purple-600 dark:text-purple-400 opacity-50" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className={`py-20 ${theme === 'light' ? 'bg-gradient-to-br from-purple-50 to-red-50' : 'bg-gradient-to-br from-purple-900/20 to-red-900/20'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Join thousands of small businesses building their online presence with KgatiYaCode
          </p>
          <Link to="/onboarding">
            <Button size="lg" className="text-lg px-12 py-5">
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
