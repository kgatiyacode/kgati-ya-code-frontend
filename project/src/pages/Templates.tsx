import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiLayout } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { useTemplate } from '../contexts/TemplateContext';
import { useTheme } from '../contexts/ThemeContext';
import { Template } from '../types';

const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Modern Business',
    category: 'Business',
    previewImage: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Clean and professional template perfect for modern businesses',
    features: ['Contact Form', 'Team Section', 'Services'],
  },
  {
    id: '2',
    name: 'Restaurant Delight',
    category: 'Restaurant',
    previewImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Appetizing design for restaurants and cafes',
    features: ['Menu Display', 'Booking System', 'Gallery'],
  },
  {
    id: '3',
    name: 'Creative Portfolio',
    category: 'Creative',
    previewImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Showcase your creative work with style',
    features: ['Image Gallery', 'Blog', 'Testimonials'],
  },
  {
    id: '4',
    name: 'E-Commerce Pro',
    category: 'E-Commerce',
    previewImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete online store solution',
    features: ['E-commerce', 'Product Gallery', 'Shopping Cart'],
  },
  {
    id: '5',
    name: 'Professional Services',
    category: 'Professional',
    previewImage: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Elegant template for consultants and professionals',
    features: ['Contact Form', 'FAQ Section', 'Testimonials'],
  },
  {
    id: '6',
    name: 'Fitness Studio',
    category: 'Health',
    previewImage: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Energetic design for fitness and wellness businesses',
    features: ['Booking System', 'Class Schedule', 'Testimonials'],
  },
];

export const Templates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { selectTemplate } = useTemplate();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const categories = ['All', ...Array.from(new Set(mockTemplates.map((t) => t.category)))];

  const filteredTemplates = mockTemplates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectTemplate = (template: Template) => {
    selectTemplate(template);
    navigate('/preview');
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Choose Your Template
          </h1>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Select a professionally designed template to start building your website
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg'
                    : theme === 'light'
                    ? 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredTemplates.length === 0 ? (
          <div className="text-center py-16">
            <FiLayout size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              No templates found
            </h3>
            <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <Card key={template.id} hover className="overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {template.name}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      theme === 'light'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-purple-900/30 text-purple-300'
                    }`}>
                      {template.category}
                    </span>
                  </div>
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded ${
                          theme === 'light'
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button
                    onClick={() => handleSelectTemplate(template)}
                    className="w-full"
                  >
                    Select Template
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
