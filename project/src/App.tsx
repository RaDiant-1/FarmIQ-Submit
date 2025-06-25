import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { CropDiagnosis } from './components/CropDiagnosis';
import { Weather } from './components/Weather';
import { MarketPrices } from './components/MarketPrices';
import { VoiceAssistant } from './components/VoiceAssistant';
import { NavigationTab } from './types';

function AppContent() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [language, setLanguage] = useState('en');

  // Register service worker for PWA functionality
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Check for app updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const handleSettingsClick = () => {
    // Settings functionality can be added here
    console.log('Settings clicked');
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'home':
        return <Home language={language} onNavigate={handleNavigate} />;
      case 'diagnose':
        return <CropDiagnosis language={language} />;
      case 'weather':
        return <Weather language={language} />;
      case 'market':
        return <MarketPrices language={language} />;
      case 'voice':
        return <VoiceAssistant language={language} onLanguageChange={handleLanguageChange} />;
      default:
        return <Home language={language} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header 
        language={language}
        onLanguageChange={handleLanguageChange}
        onSettingsClick={handleSettingsClick}
      />
      
      <main className="pt-4 pb-24">
        {renderActiveComponent()}
      </main>
      
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        language={language}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;