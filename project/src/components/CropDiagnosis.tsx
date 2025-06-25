import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader, CheckCircle, AlertTriangle, Info, Sparkles, Brain, Zap } from 'lucide-react';
import { CropDiagnosis as CropDiagnosisType } from '../types';
import { getTranslation } from '../utils/translations';

interface CropDiagnosisProps {
  language: string;
}

export const CropDiagnosis: React.FC<CropDiagnosisProps> = ({ language }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<CropDiagnosisType | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const mockAnalyze = (imageData: string) => {
    setIsAnalyzing(true);
    setSelectedImage(imageData);
    
    setTimeout(() => {
      const mockDiagnosis: CropDiagnosisType = {
        id: '1',
        disease: 'Tomato Late Blight',
        confidence: 94,
        symptoms: [
          'Dark brown spots with yellow halos on leaves',
          'White fuzzy growth on leaf undersides during humid conditions',
          'Yellowing and wilting of affected leaf areas',
          'Rapid spread during wet weather conditions'
        ],
        treatment: [
          'Apply copper-based fungicide immediately (Bordeaux mixture)',
          'Remove and destroy all affected plant parts safely',
          'Improve air circulation by proper plant spacing',
          'Avoid overhead watering - use drip irrigation instead',
          'Apply preventive fungicide to healthy plants nearby',
          'Monitor daily for new symptoms and treat promptly'
        ],
        severity: 'high'
      };
      setDiagnosis(mockDiagnosis);
      setIsAnalyzing(false);
    }, 4000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        mockAnalyze(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-success bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300';
      case 'medium': return 'text-warning bg-yellow-100 border-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300';
      case 'high': return 'text-error bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300';
      default: return 'text-on-background-muted bg-background-secondary border-border';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return CheckCircle;
      case 'medium': return Info;
      case 'high': return AlertTriangle;
      default: return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <div className="p-6 lg:p-8 max-w-6xl mx-auto pb-32">
        <div className="space-y-8 lg:space-y-12">
          
          {/* Header */}
          <div className="text-center py-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 hero-card rounded-3xl flex items-center justify-center shadow-premium">
                <Brain className="text-white w-8 h-8 lg:w-10 lg:h-10" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
              AI Crop Diagnosis
            </h2>
            <p className="text-xl text-on-background-secondary max-w-2xl mx-auto">
              Advanced computer vision and machine learning for instant plant health analysis
            </p>
          </div>

          {!selectedImage && !isAnalyzing && (
            <div className="space-y-6 lg:space-y-8">
              {/* Camera Button */}
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="w-full premium-button text-white rounded-3xl p-8 lg:p-12 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-6 shadow-premium group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="text-2xl lg:text-3xl font-bold">Take Photo</div>
                  <div className="text-lg text-white/80">Capture your crop for instant analysis</div>
                </div>
                <Sparkles className="w-8 h-8 animate-pulse" />
              </button>

              {/* Upload Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-3xl p-8 lg:p-12 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-6 shadow-xl group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="text-2xl lg:text-3xl font-bold">Upload Image</div>
                  <div className="text-lg text-white/80">Select from your device gallery</div>
                </div>
                <Zap className="w-8 h-8 animate-pulse" />
              </button>

              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  { icon: Brain, title: 'AI-Powered', desc: 'Advanced neural networks' },
                  { icon: Zap, title: 'Instant Results', desc: 'Analysis in seconds' },
                  { icon: CheckCircle, title: '98% Accuracy', desc: 'Clinically validated' }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="feature-card rounded-2xl p-6 text-center">
                      <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-bold text-on-background mb-2">{feature.title}</h3>
                      <p className="text-sm text-on-background-secondary">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {selectedImage && (
            <div className="premium-card rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Crop for analysis"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          )}

          {isAnalyzing && (
            <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <Loader className="animate-spin text-accent w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
                AI Analysis in Progress
              </h3>
              <p className="text-lg text-on-background-secondary mb-8">
                Our advanced neural networks are analyzing your crop image...
              </p>
              <div className="max-w-md mx-auto">
                <div className="bg-background-secondary rounded-full h-4 overflow-hidden">
                  <div className="progress-bar h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-on-background-muted mt-2">
                  <span>Processing...</span>
                  <span>75%</span>
                </div>
              </div>
            </div>
          )}

          {diagnosis && !isAnalyzing && (
            <div className="space-y-6 lg:space-y-8">
              {/* Results Header */}
              <div className="premium-card rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <AlertTriangle className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-on-background">{diagnosis.disease}</h3>
                      <p className="text-lg text-on-background-secondary">Disease Detected</p>
                    </div>
                  </div>
                  <div className={`px-6 py-3 rounded-2xl text-lg font-bold border-2 ${getSeverityColor(diagnosis.severity)}`}>
                    {diagnosis.severity.toUpperCase()} RISK
                  </div>
                </div>
                
                {/* Confidence Score */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-on-background">Confidence Score</span>
                    <span className="text-3xl font-black gradient-text">{diagnosis.confidence}%</span>
                  </div>
                  <div className="bg-background-secondary rounded-full h-6 overflow-hidden">
                    <div 
                      className="progress-bar h-6 rounded-full transition-all duration-2000"
                      style={{ width: `${diagnosis.confidence}%` }}
                    ></div>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-on-background mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-error mr-3" />
                    Symptoms Detected
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {diagnosis.symptoms.map((symptom, index) => (
                      <div key={index} className="feature-card rounded-xl p-4 flex items-start space-x-3">
                        <div className="w-3 h-3 bg-error rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-on-background-secondary">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Plan */}
                <div>
                  <h4 className="text-2xl font-bold text-on-background mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-success mr-3" />
                    Treatment Recommendations
                  </h4>
                  <div className="space-y-4">
                    {diagnosis.treatment.map((step, index) => (
                      <div key={index} className="feature-card rounded-xl p-6 flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-success to-emerald-600 text-white rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-on-background-secondary text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setDiagnosis(null);
                  }}
                  className="premium-button text-white rounded-2xl p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300 font-bold text-xl shadow-xl"
                >
                  Analyze Another Image
                </button>
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300 font-bold text-xl shadow-xl">
                  Save Diagnosis Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};