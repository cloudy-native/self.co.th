import React, { createContext, useContext, useState, ReactNode } from 'react';
import { COMMON_UI_STRINGS, HOME_PAGE_STRINGS, PAGE_TITLES } from '../data/ui-strings';

// Define available languages
export type Language = 'en' | 'th';

// Define context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Build translations from all our data files
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.howToUse': 'How to Use',
    'nav.contact': 'Contact',
    
    // Add other static translations
    'footer.newsletter': 'Stay Updated',
    'footer.newsletter.description': 'Sign up to receive news and special promotions from us',
    'footer.copyright': 'self co., ltd. - Natural Beauty Products',
    'footer.pages': 'Pages',
    'footer.policies': 'Policies',
    
    // Form labels
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    
    // Contact info
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.getInTouch': 'Get In Touch',
    'contact.sendMessage': 'Send Us a Message',
    
    // How to use
    'howto.applicationSteps': 'Application Steps:',
    'howto.generalTips': 'General Tips for All Products',
  },
  th: {
    // Navigation
    'nav.home': 'Lorem ipsum',
    'nav.products': 'Lorem ipsum',
    'nav.about': 'Lorem ipsum', 
    'nav.howToUse': 'Lorem ipsum',
    'nav.contact': 'Lorem ipsum',
    
    // Add other static translations
    'footer.newsletter': 'Lorem ipsum',
    'footer.newsletter.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'footer.copyright': 'Lorem ipsum - Lorem ipsum dolor sit',
    'footer.pages': 'Lorem',
    'footer.policies': 'Lorem',
    
    // Form labels
    'form.firstName': 'Lorem ipsum',
    'form.lastName': 'Lorem ipsum',
    'form.email': 'Lorem ipsum',
    'form.phone': 'Lorem ipsum',
    'form.message': 'Lorem ipsum',
    
    // Contact info
    'contact.email': 'Lorem ipsum',
    'contact.phone': 'Lorem ipsum',
    'contact.address': 'Lorem ipsum',
    'contact.hours': 'Lorem ipsum',
    'contact.getInTouch': 'Lorem ipsum',
    'contact.sendMessage': 'Lorem ipsum',
    
    // How to use
    'howto.applicationSteps': 'Lorem ipsum:',
    'howto.generalTips': 'Lorem ipsum dolor sit amet',
  },
};

// Add all the UI strings
Object.entries(COMMON_UI_STRINGS).forEach(([key, values]) => {
  translations.en[key] = values.en;
  translations.th[key] = values.th;
});

Object.entries(HOME_PAGE_STRINGS).forEach(([key, values]) => {
  translations.en[key] = values.en;
  translations.th[key] = values.th;
});

Object.entries(PAGE_TITLES).forEach(([key, values]) => {
  translations.en[key] = values.en;
  translations.th[key] = values.th;
});

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);