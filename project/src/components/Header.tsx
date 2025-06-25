// components/Header.tsx - Updated for floating elegant design
import React from 'react';
import { Settings, Globe, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { getTranslation } from '../utils/translations';

interface HeaderProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onSettingsClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, onSettingsClick }) => {


  return (
    <>
      {/* Floating Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 py-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Floating Header Card */}
          <div className="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl shadow-2xl">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl" />
            
            {/* Header Content */}
            <div className="relative flex items-center justify-between p-4 md:p-6">
              {/* Left Side - Logo & Brand */}
              <div className="flex items-center space-x-4">
                {/* Icon Container with Enhanced Glow */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                  <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Sparkles className="text-white w-7 h-7 md:w-8 md:h-8 animate-pulse" />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                
                {/* Brand Text */}
                <div className="flex flex-col">
                  <h1 
                    className="font-black bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent tracking-tight leading-none text-2xl lg:text-3xl"
                  >
                    {getTranslation('appName', language)}
                  </h1>
                  <p 
                    className="text-gray-600 dark:text-gray-400 font-medium tracking-wide leading-tight mt-1 text-sm lg:text-base"
                  >
                    {getTranslation('subtitle', language)}
                  </p>
                </div>
              </div>
              
              {/* Right Side - Action Buttons */}
              <div className="flex items-center space-x-2 md:space-x-3">
                {/* Bolt Link */}
                <a 
                  href="https://bolt.new" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center group"
                  title="Built with Bolt"
                >
                  <img 
                    src="/black_circle_360x360 copy.png" 
                    alt="Built with Bolt" 
                    className="w-6 h-6 md:w-7 md:h-7 rounded-xl group-hover:scale-110 transition-transform"
                  />
                </a>
                
                {/* Theme Toggle */}
                <div className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <ThemeToggle />
                </div>
                
                {/* Language Toggle */}
                <button
                  onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
                  className="p-3 md:p-4 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg group"
                  title="Change Language"
                >
                  <Globe size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
                
                {/* Settings Button */}
                <button
                  onClick={onSettingsClick}
                  className="p-3 md:p-4 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg group relative"
                  title="Settings"
                >
                  <Settings size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors group-hover:rotate-90 duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24" />
    </>
  );
};