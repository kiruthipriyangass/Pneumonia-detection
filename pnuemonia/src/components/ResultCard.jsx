import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const ResultCard = ({ prediction, confidence }) => {
  const isNormal = prediction === 'Normal';
  const confidenceValue = parseFloat(confidence);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="card max-w-2xl mx-auto mt-6"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            isNormal
              ? 'bg-green-100 text-green-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {isNormal ? (
            <CheckCircle className="w-12 h-12" />
          ) : (
            <AlertCircle className="w-12 h-12" />
          )}
        </motion.div>

        <h2
          className={`text-3xl font-bold mb-2 ${
            isNormal ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {prediction}
        </h2>

        <div className="mt-6 mb-4">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Confidence Level</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${confidenceValue}%` }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className={`h-full rounded-full ${
                isNormal ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-700">
            {confidenceValue.toFixed(1)}%
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> This AI prediction is for assistance only and should
            not replace professional medical diagnosis. Please consult with a qualified
            healthcare provider.
          </p>
        </div>

        {/* Placeholder for Grad-CAM Heatmap */}
        <div className="mt-6 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-sm text-gray-500 text-center">
            🔍 Heatmap Visualization (Grad-CAM) would appear here
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Visual explanation showing areas of interest in the X-ray image
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;

