import { createContext, useContext, useState, ReactNode } from 'react';
import { Template } from '../types';

interface TemplateContextType {
  selectedTemplate: Template | null;
  selectTemplate: (template: Template) => void;
  clearTemplate: () => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const selectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };

  const clearTemplate = () => {
    setSelectedTemplate(null);
  };

  return (
    <TemplateContext.Provider
      value={{
        selectedTemplate,
        selectTemplate,
        clearTemplate,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplate must be used within TemplateProvider');
  }
  return context;
};
