import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import FileUploadCard from '../components/FileUploadCard';
import ResultCard from '../components/ResultCard';
import AnalysisResults from '../components/AnalysisResults';
import AnimatedWrapper from '../components/AnimatedWrapper';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  // Mock API function
  const analyzeImage = async (file) => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock prediction result
    const mockResult = {
      status: 'success',
      prediction: Math.random() > 0.5 ? 'Pneumonia' : 'Normal',
      confidence: (Math.random() * 20 + 80).toFixed(1), // 80-100%
    };

    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setResult(null);
    
    if (file) {
      analyzeImage(file);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <AnimatedWrapper>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              AI Pneumonia Detection
            </h1>
            <p className="text-gray-600 text-lg">
              Upload a chest X-ray image to get an AI-powered analysis
            </p>
          </motion.div>

          <FileUploadCard onFileSelect={handleFileSelect} />

          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card max-w-2xl mx-auto mt-6"
            >
              <div className="text-center py-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="inline-block mb-4"
                >
                  <Loader2 className="w-16 h-16 text-healthcare-blue-dark" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Analyzing X-Ray Image...
                </h3>
                <p className="text-gray-500">
                  Our AI is processing your chest X-ray image
                </p>
                
                {/* Breathing glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="mt-6 mx-auto w-32 h-1 bg-healthcare-blue rounded-full"
                />
              </div>
            </motion.div>
          )}

          {result && !isAnalyzing && (
            <AnalysisResults />
          )}

          {!selectedFile && !isAnalyzing && !result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                { icon: '📸', title: 'Upload', desc: 'Upload your chest X-ray image' },
                { icon: '🤖', title: 'Analyze', desc: 'AI processes the image' },
                { icon: '📊', title: 'Results', desc: 'Get instant diagnosis results' },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="card text-center"
                >
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default Dashboard;

