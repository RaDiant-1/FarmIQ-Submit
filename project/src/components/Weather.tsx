import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, AlertTriangle, Eye, Gauge, Sunrise } from 'lucide-react';
import { WeatherData, WeatherAlert } from '../types';
import { getTranslation } from '../utils/translations';

interface WeatherProps {
  language: string;
}

export const Weather: React.FC<WeatherProps> = ({ language }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockWeatherData: WeatherData = {
        location: 'Enugu, Nigeria',
        current: {
          temperature: 24,
          humidity: 65,
          windSpeed: 12,
          condition: 'partly_cloudy',
          icon: '⛅'
        },
        forecast: [
          { date: 'Today', high: 26, low: 18, condition: 'Partly Cloudy', icon: '⛅', precipitation: 20 },
          { date: 'Tomorrow', high: 28, low: 19, condition: 'Sunny', icon: '☀️', precipitation: 5 },
          { date: 'Wednesday', high: 25, low: 17, condition: 'Rainy', icon: '🌧️', precipitation: 80 },
          { date: 'Thursday', high: 23, low: 16, condition: 'Cloudy', icon: '☁️', precipitation: 40 },
          { date: 'Friday', high: 27, low: 20, condition: 'Sunny', icon: '☀️', precipitation: 10 },
          { date: 'Saturday', high: 29, low: 21, condition: 'Hot', icon: '🌡️', precipitation: 0 },
          { date: 'Sunday', high: 26, low: 18, condition: 'Partly Cloudy', icon: '⛅', precipitation: 15 }
        ],
        alerts: [
          {
            id: '1',
            type: 'rain',
            message: 'Heavy rainfall expected Wednesday. Consider protecting sensitive crops and ensuring proper drainage.',
            severity: 'medium',
            timestamp: '2024-01-15T10:00:00Z'
          }
        ]
      };
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300';
      case 'medium': return 'bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300';
      case 'high': return 'bg-red-100 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300';
      default: return 'bg-background-secondary border-border text-on-background';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900">
        <div className="p-6 lg:p-8 max-w-6xl mx-auto pb-32">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-background-secondary rounded-2xl skeleton"></div>
            <div className="h-64 bg-background-secondary rounded-3xl skeleton"></div>
            <div className="grid grid-cols-3 gap-6">
              <div className="h-32 bg-background-secondary rounded-2xl skeleton"></div>
              <div className="h-32 bg-background-secondary rounded-2xl skeleton"></div>
              <div className="h-32 bg-background-secondary rounded-2xl skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900">
      <div className="p-6 lg:p-8 max-w-6xl mx-auto pb-32">
        <div className="space-y-8 lg:space-y-12">
          
          {/* Header */}
          <div className="text-center py-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-premium animate-float">
                <Cloud className="text-white w-8 h-8 lg:w-10 lg:h-10" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
              Weather Intelligence
            </h2>
            <p className="text-xl text-on-background-secondary">{weatherData.location}</p>
          </div>

          {/* Weather Alerts */}
          {weatherData.alerts.length > 0 && (
            <div className="space-y-4">
              {weatherData.alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`premium-card p-6 lg:p-8 rounded-3xl border-l-8 ${getAlertColor(alert.severity)} shadow-xl`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Weather Alert</h3>
                      <p className="text-lg">{alert.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Current Weather */}
          <div className="hero-card rounded-3xl p-8 lg:p-12 shadow-premium text-white">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">Current Weather</h3>
                <p className="text-white/80 text-lg">Right now</p>
              </div>
              <div className="text-6xl lg:text-7xl weather-icon animate-float">{weatherData.current.icon}</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-6xl lg:text-7xl font-black">{weatherData.current.temperature}°C</div>
              <div className="space-y-4 text-right">
                <div className="flex items-center space-x-3 text-white/90">
                  <Droplets className="w-6 h-6" />
                  <span className="text-xl font-semibold">{weatherData.current.humidity}%</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Wind className="w-6 h-6" />
                  <span className="text-xl font-semibold">{weatherData.current.windSpeed} km/h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Thermometer, label: 'Temperature', value: `${weatherData.current.temperature}°C`, color: 'from-red-500 to-orange-500' },
              { icon: Droplets, label: 'Humidity', value: `${weatherData.current.humidity}%`, color: 'from-blue-500 to-cyan-500' },
              { icon: Wind, label: 'Wind Speed', value: `${weatherData.current.windSpeed} km/h`, color: 'from-gray-500 to-slate-500' },
              { icon: Eye, label: 'Visibility', value: '10 km', color: 'from-purple-500 to-pink-500' }
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="feature-card rounded-2xl p-6 text-center hover:scale-105 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <div className="text-2xl font-black text-on-background mb-2">{metric.value}</div>
                  <div className="text-sm text-on-background-secondary font-semibold">{metric.label}</div>
                </div>
              );
            })}
          </div>

          {/* 7-Day Forecast */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold gradient-text mb-8 flex items-center">
              <Sunrise className="w-8 h-8 mr-3" />
              7-Day Forecast
            </h3>
            <div className="space-y-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="feature-card rounded-2xl p-6 flex items-center justify-between hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl weather-icon">{day.icon}</span>
                    <div>
                      <div className="text-xl font-bold text-on-background">{day.date}</div>
                      <div className="text-on-background-secondary">{day.condition}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-on-background">{day.high}°/{day.low}°</div>
                    <div className="text-info font-semibold">{day.precipitation}% rain</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Farming Insights */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <h3 className="text-3xl font-bold text-success mb-8">Smart Farming Insights</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'Optimal Watering', desc: 'Water crops early morning (6-8 AM) to reduce evaporation by 40%', icon: '💧' },
                { title: 'Pest Prevention', desc: 'High humidity detected - monitor for fungal diseases in next 48 hours', icon: '🐛' },
                { title: 'Harvest Timing', desc: 'Perfect weather window for harvesting tomatoes this weekend', icon: '🍅' },
                { title: 'Soil Care', desc: 'Apply mulch before Wednesday\'s rain to retain moisture and prevent erosion', icon: '🌱' }
              ].map((insight, index) => (
                <div key={index} className="feature-card rounded-2xl p-6 flex items-start space-x-4">
                  <div className="text-3xl">{insight.icon}</div>
                  <div>
                    <h4 className="font-bold text-on-background mb-2">{insight.title}</h4>
                    <p className="text-on-background-secondary">{insight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};