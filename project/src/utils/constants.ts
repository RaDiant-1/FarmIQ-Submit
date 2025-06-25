import { Language } from '../types';

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', rtl: false },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', rtl: false },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', rtl: false },
  { code: 'es', name: 'Spanish', nativeName: 'Español', rtl: false },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', rtl: true },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', rtl: false },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', rtl: false },
  { code: 'zh', name: 'Mandarin', nativeName: '中文', rtl: false },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', rtl: false },
  { code: 'fr', name: 'French', nativeName: 'Français', rtl: false },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', rtl: false },
  { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', rtl: false },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', rtl: false },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', rtl: false },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', rtl: false }
];

export const COMMON_CROPS = [
  'Tomato', 'Maize/Corn', 'Rice', 'Wheat', 'Potato', 'Cassava',
  'Beans', 'Groundnuts', 'Sweet Potato', 'Cabbage', 'Onion', 'Pepper'
];

export const WEATHER_CONDITIONS = {
  'sunny': { icon: '☀️', color: 'text-yellow-500' },
  'cloudy': { icon: '☁️', color: 'text-gray-500' },
  'rainy': { icon: '🌧️', color: 'text-blue-500' },
  'stormy': { icon: '⛈️', color: 'text-purple-500' },
  'foggy': { icon: '🌫️', color: 'text-gray-400' }
};

export const DISEASE_TREATMENTS = {
  'leaf_spot': [
    'Remove affected leaves immediately',
    'Apply copper-based fungicide',
    'Improve air circulation',
    'Avoid overhead watering'
  ],
  'powdery_mildew': [
    'Apply sulfur-based fungicide',
    'Increase spacing between plants',
    'Remove infected plant parts',
    'Apply in early morning or evening'
  ],
  'bacterial_wilt': [
    'Remove and destroy infected plants',
    'Rotate crops for 3-4 seasons',
    'Improve soil drainage',
    'Use resistant varieties'
  ]
};