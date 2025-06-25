import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus, RefreshCw, DollarSign, BarChart3, Target } from 'lucide-react';
import { MarketPrice } from '../types';
import { getTranslation } from '../utils/translations';

interface MarketPricesProps {
  language: string;
}

export const MarketPrices: React.FC<MarketPricesProps> = ({ language }) => {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    fetchMarketPrices();
  }, []);

  const fetchMarketPrices = () => {
    setLoading(true);
    setTimeout(() => {
      const mockPrices: MarketPrice[] = [
        {
          crop: 'Tomatoes',
          currentPrice: 45,
          previousPrice: 42,
          change: 3,
          changePercent: 7.1,
          market: 'Nairobi Central Market',
          unit: 'KSH/kg',
          trend: 'up'
        },
        {
          crop: 'Maize',
          currentPrice: 38,
          previousPrice: 40,
          change: -2,
          changePercent: -5.0,
          market: 'Mombasa Grain Market',
          unit: 'KSH/kg',
          trend: 'down'
        },
        {
          crop: 'Beans',
          currentPrice: 85,
          previousPrice: 85,
          change: 0,
          changePercent: 0,
          market: 'Nakuru Agricultural Market',
          unit: 'KSH/kg',
          trend: 'stable'
        },
        {
          crop: 'Cabbage',
          currentPrice: 25,
          previousPrice: 22,
          change: 3,
          changePercent: 13.6,
          market: 'Eldoret Fresh Market',
          unit: 'KSH/head',
          trend: 'up'
        },
        {
          crop: 'Onions',
          currentPrice: 55,
          previousPrice: 58,
          change: -3,
          changePercent: -5.2,
          market: 'Kisumu Market',
          unit: 'KSH/kg',
          trend: 'down'
        },
        {
          crop: 'Potatoes',
          currentPrice: 35,
          previousPrice: 30,
          change: 5,
          changePercent: 16.7,
          market: 'Nyeri Farmers Market',
          unit: 'KSH/kg',
          trend: 'up'
        }
      ];
      setPrices(mockPrices);
      setLastUpdate(new Date());
      setLoading(false);
    }, 1000);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      case 'stable': return Minus;
      default: return Minus;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300';
      case 'down': return 'text-error bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300';
      case 'stable': return 'text-on-background-muted bg-background-secondary border-border';
      default: return 'text-on-background-muted bg-background-secondary border-border';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-yellow-900">
        <div className="p-6 lg:p-8 max-w-6xl mx-auto pb-32">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-background-secondary rounded-2xl skeleton"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-background-secondary rounded-3xl skeleton"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-yellow-900">
      <div className="p-6 lg:p-8 max-w-6xl mx-auto pb-32">
        <div className="space-y-8 lg:space-y-12">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-premium animate-float">
                  <BarChart3 className="text-white w-8 h-8 lg:w-10 lg:h-10" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Market Intelligence
              </h2>
              <p className="text-lg text-on-background-secondary">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
            <button
              onClick={fetchMarketPrices}
              className="premium-button text-white rounded-2xl p-4 lg:p-6 hover:scale-110 transition-all duration-300 shadow-xl"
              disabled={loading}
            >
              <RefreshCw className={loading ? 'animate-spin' : ''} size={28} />
            </button>
          </div>

          {/* Market Summary */}
          <div className="hero-card rounded-3xl p-8 lg:p-12 shadow-premium text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 flex items-center">
              <Target className="w-8 h-8 mr-3" />
              Market Overview
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-green-300 mb-2">
                  {prices.filter(p => p.trend === 'up').length}
                </div>
                <div className="text-green-200 font-semibold">Rising Prices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-red-300 mb-2">
                  {prices.filter(p => p.trend === 'down').length}
                </div>
                <div className="text-red-200 font-semibold">Falling Prices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white/80 mb-2">
                  {prices.filter(p => p.trend === 'stable').length}
                </div>
                <div className="text-white/70 font-semibold">Stable Prices</div>
              </div>
            </div>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {prices.map((price, index) => {
              const TrendIcon = getTrendIcon(price.trend);
              return (
                <div key={index} className="premium-card rounded-3xl p-6 lg:p-8 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                        <DollarSign className="text-white w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-on-background">{price.crop}</h3>
                        <p className="text-on-background-secondary">{price.market}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-2xl flex items-center space-x-2 border-2 ${getTrendColor(price.trend)}`}>
                      <TrendIcon size={20} />
                      <span className="font-bold">
                        {price.changePercent > 0 ? '+' : ''}{price.changePercent.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-black text-on-background mb-2">
                        {price.currentPrice} <span className="text-xl font-normal text-on-background-secondary">{price.unit}</span>
                      </div>
                      <div className={`text-lg font-bold ${
                        price.change > 0 ? 'text-success' : 
                        price.change < 0 ? 'text-error' : 'text-on-background-muted'
                      }`}>
                        {price.change > 0 ? '+' : ''}{price.change} {price.unit.split('/')[0]} vs yesterday
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-on-background-muted">
                        {price.previousPrice}
                      </div>
                      <div className="text-sm text-on-background-muted">Previous</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Market Insights */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <h3 className="text-3xl font-bold text-info mb-8 flex items-center">
              <BarChart3 className="w-8 h-8 mr-3" />
              Market Intelligence
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { icon: '📈', title: 'Price Surge Alert', desc: 'Potato prices up 16.7% due to supply shortage from recent weather' },
                { icon: '🥬', title: 'High Demand', desc: 'Cabbage showing strong urban market demand, prices climbing steadily' },
                { icon: '🌽', title: 'Seasonal Drop', desc: 'Maize prices declining as harvest season approaches in major regions' },
                { icon: '💡', title: 'Best Opportunity', desc: 'Consider selling tomatoes now - prices at 3-month high' }
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

          {/* Selling Tips */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <h3 className="text-3xl font-bold text-success mb-8">Premium Selling Strategies</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'Optimal Timing', desc: 'Sell tomatoes between 6-8 AM for premium prices', icon: '⏰' },
                { title: 'Quality Grading', desc: 'Grade A produce commands 25-35% higher prices', icon: '⭐' },
                { title: 'Direct Sales', desc: 'Restaurant partnerships offer 40% better margins', icon: '🏪' },
                { title: 'Market Days', desc: 'Tuesday and Friday show highest buyer activity', icon: '📅' }
              ].map((tip, index) => (
                <div key={index} className="feature-card rounded-2xl p-6 flex items-start space-x-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <div>
                    <h4 className="font-bold text-on-background mb-2">{tip.title}</h4>
                    <p className="text-on-background-secondary">{tip.desc}</p>
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