import React from 'react';
import { Home, Camera, Cloud, TrendingUp, Mic } from 'lucide-react';
import { NavigationTab } from '../types';
import { getTranslation } from '../utils/translations';

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  language: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, language }) => {
  const navItems = [
    { id: 'home' as NavigationTab, icon: Home, label: getTranslation('home', language) },
    { id: 'diagnose' as NavigationTab, icon: Camera, label: getTranslation('diagnose', language) },
    { id: 'weather' as NavigationTab, icon: Cloud, label: getTranslation('weather', language) },
    { id: 'market' as NavigationTab, icon: TrendingUp, label: getTranslation('market', language) },
    { id: 'voice' as NavigationTab, icon: Mic, label: getTranslation('voice', language) }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="floating-header border-t border-white/20 backdrop-blur-2xl">
        <div className="flex justify-around items-center max-w-7xl mx-auto px-6 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`navigation-item ${isActive ? 'active' : ''}`}
              >
                <Icon 
                  size={24} 
                  className={`mb-2 transition-all duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`} 
                />
                <span className="text-xs font-semibold transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};