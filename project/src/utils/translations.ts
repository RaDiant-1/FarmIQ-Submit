export const translations = {
  en: {
    appName: 'FarmIQ',
    home: 'Home',
    diagnose: 'Diagnose',
    weather: 'Weather',
    market: 'Market',
    voice: 'Voice',
    welcome: 'Welcome to FarmIQ',
    subtitle: 'AI-Powered Agricultural Assistant',
    takePicture: 'Take Picture',
    uploadImage: 'Upload Image',
    analyzing: 'Analyzing...',
    speakNow: 'Speak Now',
    listening: 'Listening...',
    currentWeather: 'Current Weather',
    forecast: 'Forecast',
    marketPrices: 'Market Prices',
    priceChange: 'Price Change',
    treatment: 'Treatment',
    confidence: 'Confidence'
  },
  hi: {
    appName: 'FarmIQ',
    home: 'होम',
    diagnose: 'निदान',
    weather: 'मौसम',
    market: 'बाज़ार',
    voice: 'आवाज़',
    welcome: 'FarmIQ में आपका स्वागत है',
    subtitle: 'AI-संचालित कृषि सहायक',
    takePicture: 'तस्वीर लें',
    uploadImage: 'फोटो अपलोड करें',
    analyzing: 'विश्लेषण कर रहे हैं...',
    speakNow: 'अब बोलें',
    listening: 'सुन रहे हैं...',
    currentWeather: 'वर्तमान मौसम',
    forecast: 'पूर्वानुमान',
    marketPrices: 'बाज़ार की कीमतें',
    priceChange: 'कीमत में बदलाव',
    treatment: 'उपचार',
    confidence: 'विश्वास'
  },
  sw: {
    appName: 'FarmIQ',
    home: 'Nyumbani',
    diagnose: 'Tathmini',
    weather: 'Hali ya Hewa',
    market: 'Soko',
    voice: 'Sauti',
    welcome: 'Karibu FarmIQ',
    subtitle: 'Msaidizi wa Kilimo wa AI',
    takePicture: 'Piga Picha',
    uploadImage: 'Pakia Picha',
    analyzing: 'Inachambua...',
    speakNow: 'Sema Sasa',
    listening: 'Inasikiliza...',
    currentWeather: 'Hali ya Hewa Sasa',
    forecast: 'Utabiri',
    marketPrices: 'Bei za Soko',
    priceChange: 'Mabadiliko ya Bei',
    treatment: 'Matibabu',
    confidence: 'Imani'
  }
};

export const getTranslation = (key: string, language: string = 'en'): string => {
  const lang = translations[language as keyof typeof translations] || translations.en;
  return lang[key as keyof typeof lang] || key;
};