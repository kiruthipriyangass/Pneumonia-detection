import { motion } from 'framer-motion';
import { Calendar, FileImage, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedWrapper from '../components/AnimatedWrapper';

const History = () => {
  // Mock history data
  const historyData = [
    {
      id: 1,
      date: '2024-01-15',
      time: '10:30 AM',
      prediction: 'Normal',
      confidence: 94.2,
      fileName: 'chest_xray_001.jpg',
    },
    {
      id: 2,
      date: '2024-01-14',
      time: '3:45 PM',
      prediction: 'Pneumonia',
      confidence: 87.5,
      fileName: 'chest_xray_002.jpg',
    },
    {
      id: 3,
      date: '2024-01-13',
      time: '9:15 AM',
      prediction: 'Normal',
      confidence: 91.8,
      fileName: 'chest_xray_003.jpg',
    },
    {
      id: 4,
      date: '2024-01-12',
      time: '2:20 PM',
      prediction: 'Pneumonia',
      confidence: 89.3,
      fileName: 'chest_xray_004.jpg',
    },
    {
      id: 5,
      date: '2024-01-11',
      time: '11:00 AM',
      prediction: 'Normal',
      confidence: 96.1,
      fileName: 'chest_xray_005.jpg',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <AnimatedWrapper>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Scan History
            </h1>
            <p className="text-gray-600 text-lg">
              View your previous X-ray analysis results
            </p>
          </motion.div>
        </AnimatedWrapper>

        <div className="space-y-4">
          {historyData.map((item, index) => {
            const isNormal = item.prediction === 'Normal';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                className="card cursor-pointer transition-all duration-200"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-full ${
                        isNormal ? 'bg-green-100' : 'bg-red-100'
                      }`}
                    >
                      {isNormal ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          isNormal ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {item.prediction}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center space-x-1 mt-1">
                        <FileImage className="w-4 h-4" />
                        <span>{item.fileName}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700">
                        {item.confidence}% confidence
                      </p>
                      <p className="text-xs text-gray-500 flex items-center space-x-1 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {item.date} at {item.time}
                        </span>
                      </p>
                    </div>
                    <div
                      className={`w-2 h-16 rounded-full ${
                        isNormal ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {historyData.length === 0 && (
          <AnimatedWrapper delay={0.3}>
            <div className="card text-center py-12">
              <FileImage className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No scan history available yet.</p>
              <p className="text-sm text-gray-500 mt-2">
                Upload your first X-ray image to get started.
              </p>
            </div>
          </AnimatedWrapper>
        )}
      </div>
    </div>
  );
};

export default History;

