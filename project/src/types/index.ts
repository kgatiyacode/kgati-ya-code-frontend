export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  previewImage: string;
  description: string;
  features: string[];
}

export interface OnboardingData {
  businessType: string;
  industry: string;
  description: string;
  visualStyle: string;
  features: string[];
}

export interface WebsiteData {
  userId: string;
  templateId: string;
  onboardingData: OnboardingData;
  createdAt: string;
  updatedAt: string;
}

export type Theme = 'light' | 'dark';
