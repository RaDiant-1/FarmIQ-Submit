export interface CropDiagnosis {
  id: string;
  disease: string;
  confidence: number;
  symptoms: string[];
  treatment: string[];
  severity: 'low' | 'medium' | 'high';
}

export interface WeatherData {
  location: string;
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    icon: string;
  };
  forecast: WeatherForecast[];
  alerts: WeatherAlert[];
}

export interface WeatherForecast {
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
  precipitation: number;
}

export interface WeatherAlert {
  id: string;
  type: 'rain' | 'drought' | 'frost' | 'storm';
  message: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export interface MarketPrice {
  crop: string;
  currentPrice: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  market: string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  rtl: boolean;
}

export type NavigationTab = 'home' | 'diagnose' | 'weather' | 'market' | 'voice';