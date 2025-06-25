import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Languages, Brain, Zap, MessageCircle } from 'lucide-react';
import { getTranslation } from '../utils/translations';
import { SUPPORTED_LANGUAGES } from '../utils/constants';

interface VoiceAssistantProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ language, onLanguageChange }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);

  const mockVoiceResponses = {
    en: {
      greeting: "Hello! I'm your FarmIQ AI assistant. I'm here to help you with all your farming needs using advanced agricultural intelligence.",
      weather: "Today's weather shows partly cloudy conditions with 26°C high and 18°C low. There's a 20% chance of rain. Perfect conditions for most farming activities.",
      crop_health: "To analyze your crop health, please use our AI-powered camera diagnosis feature. I can detect diseases with 98% accuracy and provide treatment recommendations.",
      market_prices: "Current market analysis shows tomatoes at 45 KSH per kg (up 7.1%), while maize is at 38 KSH per kg (down 5%). Great time to sell tomatoes!",
      planting_tips: "For optimal results this season, I recommend drought-resistant varieties. Water early morning, apply organic mulch, and monitor soil moisture levels regularly."
    },
    hi: {
      greeting: "नमस्ते! मैं आपका FarmIQ AI सहायक हूँ। मैं उन्नत कृषि बुद्धिमत्ता का उपयोग करके आपकी सभी खेती की जरूरतों में मदद करने के लिए यहाँ हूँ।",
      weather: "आज का मौसम आंशिक रूप से बादल छाए रहने के साथ अधिकतम 26°C और न्यूनतम 18°C दिखा रहा है। बारिश की 20% संभावना है।",
      crop_health: "अपनी फसल के स्वास्थ्य का विश्लेषण करने के लिए, कृपया हमारी AI-संचालित कैमरा निदान सुविधा का उपयोग करें।",
      market_prices: "वर्तमान बाजार विश्लेषण टमाटर 45 KSH प्रति किलो (7.1% ऊपर) दिखाता है, जबकि मक्का 38 KSH प्रति किलो (5% नीचे) है।",
      planting_tips: "इस मौसम के लिए सर्वोत्तम परिणामों के लिए, मैं सूखा प्रतिरोधी किस्मों की सिफारिश करता हूं।"
    },
    sw: {
      greeting: "Hujambo! Mimi ni msaidizi wako wa FarmIQ AI. Niko hapa kukusaidia na mahitaji yako yote ya kilimo kwa kutumia akili ya kisasa ya kilimo.",
      weather: "Hali ya hewa ya leo inaonyesha mawingu kidogo na joto la juu 26°C na la chini 18°C. Kuna uwezekano wa 20% wa mvua.",
      crop_health: "Ili kuchanganua afya ya mazao yako, tafadhali tumia kipengele chetu cha utambuzi wa kamera kinachoendesha AI.",
      market_prices: "Uchambuzi wa soko wa sasa unaonyesha nyanya kwa 45 KSH kwa kilo (juu 7.1%), wakati mahindi ni 38 KSH kwa kilo (chini 5%).",
      planting_tips: "Kwa matokeo bora msimu huu, napendekezea aina zinazostahimili ukame."
    }
  };

  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    
    setTimeout(() => {
      const mockTranscripts = [
        "What's the weather forecast for this week?",
        "How are my tomato plants doing?",
        "What are the current market prices for vegetables?",
        "When is the best time to plant maize?",
        "Help me identify this plant disease"
      ];
      const randomTranscript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
      setTranscript(randomTranscript);
      setIsListening(false);
      handleVoiceCommand(randomTranscript);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const handleVoiceCommand = (command: string) => {
    const responses = mockVoiceResponses[language as keyof typeof mockVoiceResponses] || mockVoiceResponses.en;
    let responseText = responses.greeting;

    if (command.toLowerCase().includes('weather')) {
      responseText = responses.weather;
    } else if (command.toLowerCase().includes('crop') || command.toLowerCase().includes('health') || command.toLowerCase().includes('plant')) {
      responseText = responses.crop_health;
    } else if (command.toLowerCase().includes('price') || command.toLowerCase().includes('market')) {
      responseText = responses.market_prices;
    } else if (command.toLowerCase().includes('plant') || command.toLowerCase().includes('tip') || command.toLowerCase().includes('maize')) {
      responseText = responses.planting_tips;
    }

    setResponse(responseText);
    speakResponse(responseText);
  };

  const speakResponse = (text: string) => {
    setIsSpeaking(true);
    setTimeout(() => {
      setIsSpeaking(false);
    }, 4000);
  };

  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.code === language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
      <div className="p-6 lg:p-8 max-w-6xl mx-auto pb-32">
        <div className="space-y-8 lg:space-y-12">
          
          {/* Header */}
          <div className="text-center py-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-premium animate-float">
                <Brain className="text-white w-8 h-8 lg:w-10 lg:h-10" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
              AI Voice Assistant
            </h2>
            <p className="text-xl text-on-background-secondary max-w-2xl mx-auto">
              Conversational AI powered by advanced natural language processing
            </p>
          </div>

          {/* Language Selection */}
          <div className="premium-card rounded-3xl p-6 lg:p-8 shadow-xl">
            <button
              onClick={() => setShowLanguageSelect(!showLanguageSelect)}
              className="w-full flex items-center justify-between p-6 rounded-2xl feature-card hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                  <Languages className="text-white w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-on-background">{currentLanguage?.nativeName}</div>
                  <div className="text-on-background-secondary">{currentLanguage?.name}</div>
                </div>
              </div>
              <div className="text-on-background-muted">
                {showLanguageSelect ? '▲' : '▼'}
              </div>
            </button>

            {showLanguageSelect && (
              <div className="mt-6 max-h-64 overflow-y-auto space-y-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setShowLanguageSelect(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      language === lang.code 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'feature-card hover:scale-[1.02]'
                    }`}
                  >
                    <div className="font-bold">{lang.nativeName}</div>
                    <div className={`text-sm ${language === lang.code ? 'text-white/80' : 'text-on-background-secondary'}`}>
                      {lang.name}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Voice Interface */}
          <div className="hero-card rounded-3xl p-12 lg:p-16 shadow-premium text-center text-white">
            <div className="mb-12">
              <button
                onClick={isListening ? stopListening : startListening}
                className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mx-auto transition-all duration-300 shadow-2xl ${
                  isListening 
                    ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse scale-110' 
                    : 'bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 hover:scale-110 backdrop-blur-sm'
                }`}
              >
                {isListening ? <MicOff size={48} /> : <Mic size={48} />}
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold">
                {isListening 
                  ? 'Listening...'
                  : 'Ready to Help'
                }
              </h3>
              <p className="text-xl text-white/80 max-w-lg mx-auto">
                {isListening 
                  ? 'Speak naturally about your farming questions' 
                  : 'Tap the microphone and ask me anything about farming'
                }
              </p>
            </div>

            {isSpeaking && (
              <div className="mt-8 flex items-center justify-center space-x-4">
                <Volume2 className="animate-pulse w-8 h-8" />
                <span className="text-xl font-semibold">AI is responding...</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Conversation History */}
          {transcript && (
            <div className="premium-card rounded-3xl p-6 lg:p-8 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-info mb-3 text-lg">You asked:</h4>
                  <p className="text-on-background text-lg">{transcript}</p>
                </div>
              </div>
            </div>
          )}

          {response && (
            <div className="premium-card rounded-3xl p-6 lg:p-8 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-success mb-3 text-lg">FarmIQ AI:</h4>
                  <p className="text-on-background text-lg leading-relaxed">{response}</p>
                </div>
              </div>
            </div>
          )}

          {/* Quick Commands */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold gradient-text mb-8 flex items-center">
              <Zap className="w-8 h-8 mr-3" />
              Try These Commands
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                "What's today's weather forecast?",
                "Show me current market prices",
                "How do I treat plant diseases?",
                "When should I harvest my crops?",
                "Give me planting recommendations",
                "Help with pest control strategies"
              ].map((command, index) => (
                <button
                  key={index}
                  onClick={() => handleVoiceCommand(command)}
                  className="text-left p-6 rounded-2xl feature-card hover:scale-[1.02] transition-all duration-300 shadow-lg group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-on-background font-medium text-lg">"{command}"</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Features */}
          <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <h3 className="text-3xl font-bold text-purple-600 mb-8">Advanced AI Capabilities</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { icon: '🌍', title: 'Multilingual Support', desc: '15+ languages with native dialect understanding' },
                { icon: '🎯', title: 'Context Awareness', desc: 'Remembers conversation history for better responses' },
                { icon: '📱', title: 'Offline Mode', desc: 'Core features work without internet connection' },
                { icon: '🧠', title: 'Learning AI', desc: 'Continuously improves from farmer interactions' }
              ].map((feature, index) => (
                <div key={index} className="feature-card rounded-2xl p-6 flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-on-background mb-2">{feature.title}</h4>
                    <p className="text-on-background-secondary">{feature.desc}</p>
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