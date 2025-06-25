import React from 'react';
import {
  Camera,
  Cloud,
  TrendingUp,
  Mic,
  Leaf,
  Sun,
  Droplets,
  AlertTriangle,
  Zap,
  BarChart3,
  Brain,
  Smartphone,
} from 'lucide-react';
import { getTranslation } from '../utils/translations';

interface HomeProps {
  language: string;
  onNavigate: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ language, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="space-y-8 lg:space-y-12">
          {/* Hero Section */}
          <div className="text-center py-12 lg:py-16">
            <div className="hero-card rounded-3xl px-12 py-16 lg:px-16 lg:py-20 shadow-premium animate-float">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                FarmIQ
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                AI-Powered Agricultural Intelligence Platform
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-white font-semibold">
                    🌱 Smart Farming
                  </span>
                </div>
                <div className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-white font-semibold">
                    🤖 AI Diagnosis
                  </span>
                </div>
                <div className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-white font-semibold">
                    📊 Market Intelligence
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Dashboard */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
                Live Dashboard
              </h2>
              <div className="flex items-center space-x-2 text-success">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {/* Weather Widget */}
              <div className="feature-card rounded-2xl p-6 lg:p-8 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Sun className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-background">Weather</h3>
                      <p className="text-sm text-on-background-secondary">
                        Enugu, nigeria
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-on-background">
                      28°
                    </div>
                    <div className="text-sm text-on-background-muted">
                      H32/L24
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span className="text-on-background-secondary">65%</span>
                  </div>
                  <div className="text-on-background-muted">Partly Cloudy</div>
                </div>
              </div>

              {/* Farm Status */}
              <div className="feature-card rounded-2xl p-6 lg:p-8 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <Leaf className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-background">
                        Farm Health
                      </h3>
                      <p className="text-sm text-on-background-secondary">
                        All Crops
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-success">94%</div>
                    <div className="text-sm text-success">Excellent</div>
                  </div>
                </div>
                <div className="w-full bg-background-secondary rounded-full h-3 overflow-hidden">
                  <div className="progress-bar w-[94%]"></div>
                </div>
              </div>

              {/* Alerts */}
              <div className="feature-card rounded-2xl p-6 lg:p-8 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <AlertTriangle className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-background">Alerts</h3>
                      <p className="text-sm text-on-background-secondary">
                        Active Issues
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-warning">3</div>
                    <div className="text-sm text-warning">Medium</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="w-2 h-2 bg-background-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-background-secondary rounded-full"></div>
                </div>
              </div>
            </div>

            {/* AI Diagnosis CTA */}
            <button
              onClick={() => onNavigate('diagnose')}
              className="w-full premium-button text-white rounded-3xl p-8 lg:p-10 flex items-center justify-center space-x-6 hover:scale-[1.02] transition-all duration-300 shadow-premium group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold">
                  AI Crop Diagnosis
                </div>
                <div className="text-lg text-white/80">
                  Instant plant health analysis
                </div>
              </div>
              <Zap className="w-8 h-8 animate-pulse" />
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                id: 'weather',
                icon: Cloud,
                title: 'Weather Intelligence',
                subtitle: 'Precision forecasts',
                gradient: 'from-blue-500 to-cyan-500',
                stats: '7-day forecast',
              },
              {
                id: 'market',
                icon: TrendingUp,
                title: 'Market Analytics',
                subtitle: 'Real-time prices',
                gradient: 'from-green-500 to-emerald-500',
                stats: '+12% this week',
              },
              {
                id: 'voice',
                icon: Mic,
                title: 'Voice Assistant',
                subtitle: 'Hands-free control',
                gradient: 'from-purple-500 to-pink-500',
                stats: '15+ languages',
              },
              {
                id: 'diagnose',
                icon: Brain,
                title: 'AI Diagnosis',
                subtitle: 'Smart detection',
                gradient: 'from-orange-500 to-red-500',
                stats: '98% accuracy',
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => onNavigate(feature.id)}
                  className="feature-card rounded-3xl p-6 lg:p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl group"
                >
                  <div
                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="font-bold text-on-background text-lg lg:text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-on-background-secondary text-sm mb-3">
                    {feature.subtitle}
                  </p>
                  <div className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {feature.stats}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text">
                Recent Activity
              </h3>
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
            <div className="space-y-4">
              {[
                {
                  type: 'success',
                  message: 'Tomato diagnosis completed - Healthy crop detected',
                  time: '2 hours ago',
                  icon: '🍅',
                },
                {
                  type: 'info',
                  message: 'Weather alert: Rain expected tomorrow',
                  time: '4 hours ago',
                  icon: '🌧️',
                },
                {
                  type: 'warning',
                  message: 'Market price alert: Maize prices dropping',
                  time: '6 hours ago',
                  icon: '🌽',
                },
                {
                  type: 'success',
                  message: 'Voice query answered: Best planting time',
                  time: '8 hours ago',
                  icon: '🎤',
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="feature-card rounded-2xl p-4 lg:p-6 flex items-center justify-between group hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{activity.icon}</div>
                    <div>
                      <p className="font-semibold text-on-background">
                        {activity.message}
                      </p>
                      <p className="text-sm text-on-background-muted">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activity.type === 'success'
                        ? 'bg-success'
                        : activity.type === 'warning'
                        ? 'bg-warning'
                        : 'bg-info'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                label: 'Crops Monitored',
                value: '1,247',
                change: '+12%',
                positive: true,
              },
              {
                label: 'Diagnoses Made',
                value: '3,891',
                change: '+24%',
                positive: true,
              },
              {
                label: 'Farmers Helped',
                value: '15,632',
                change: '+8%',
                positive: true,
              },
              {
                label: 'Success Rate',
                value: '98.2%',
                change: '+0.3%',
                positive: true,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="metric-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl lg:text-4xl font-black text-on-background mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-on-background-secondary mb-2">
                  {stat.label}
                </div>
                <div
                  className={`text-xs font-semibold ${
                    stat.positive ? 'text-success' : 'text-error'
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onNavigate('voice')}
        className="floating-action"
        title="Voice Assistant"
      >
        <Mic className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};
