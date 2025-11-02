import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';

const AnalysisResults = () => {
  const conditions = [
    {
      name: 'Bacterial Pneumonia',
      confidence: 37.4,
      description: 'Bacterial infection causing inflammation and fluid accumulation in lung air sacs'
    },
    {
      name: 'Viral Pneumonia',
      confidence: 39.3,
      description: 'Viral infection causing inflammation of lung tissue with interstitial involvement'
    },
    {
      name: 'Tuberculosis',
      confidence: 20.6,
      description: 'Bacterial infection primarily affecting the lungs'
    },
    {
      name: 'Lung Cancer',
      confidence: 32.9,
      description: 'Malignant tumor growth in lung tissue'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen -mx-4 -my-8 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          Analysis Results
        </motion.h2>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-green-50 border border-green-300 rounded-lg px-6 py-4"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-lg font-semibold text-green-700">Overall: NORMAL</span>
          </div>
        </motion.div>

        {/* Condition Cards */}
        <div className="space-y-4">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {condition.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {condition.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
                    {condition.confidence}%
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${condition.confidence}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Full Report Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg 
                     flex items-center justify-center space-x-2 shadow-md transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <Download className="w-5 h-5" />
          <span>Download Full Report</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AnalysisResults;

