import { motion } from 'framer-motion';
import { Activity, Brain, Shield, AlertTriangle, Heart } from 'lucide-react';
import AnimatedWrapper from '../components/AnimatedWrapper';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Utilizes advanced deep learning models to analyze chest X-ray images with high accuracy.',
    },
    {
      icon: Activity,
      title: 'Fast Diagnosis',
      description: 'Get instant results to help doctors make quicker diagnostic decisions.',
    },
    {
      icon: Shield,
      title: 'Reduced Human Error',
      description: 'Assists healthcare professionals by providing consistent, objective analysis.',
    },
    {
      icon: Heart,
      title: 'Improved Patient Care',
      description: 'Enables faster treatment decisions, potentially improving patient outcomes.',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedWrapper>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-healthcare-blue-light rounded-full mb-6"
            >
              <Activity className="w-10 h-10 text-healthcare-blue-dark" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Pneumonia AI Detection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              An intelligent system designed to assist healthcare professionals in detecting
              pneumonia from chest X-ray images using cutting-edge artificial intelligence.
            </p>
          </motion.div>
        </AnimatedWrapper>

        <div className="space-y-8 mb-12">
          <AnimatedWrapper delay={0.2}>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our AI-powered system uses deep learning algorithms trained on thousands of
                chest X-ray images to identify patterns associated with pneumonia. When you
                upload an X-ray image, the system:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>Analyzes the image using convolutional neural networks (CNNs)</li>
                <li>Identifies key features and patterns in the lung regions</li>
                <li>Classifies the image as Normal or Pneumonia</li>
                <li>Provides a confidence score for the prediction</li>
                <li>Generates visual explanations highlighting areas of interest</li>
              </ol>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.3}>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-healthcare-blue-light/30 rounded-lg"
                    >
                      <Icon className="w-8 h-8 text-healthcare-blue-dark mb-3" />
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="card border-2 border-yellow-200 bg-yellow-50"
            >
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">
                    Important Medical Disclaimer
                  </h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    This AI-powered tool is designed to assist healthcare professionals and
                    should <strong>NOT</strong> be used as a substitute for professional medical
                    diagnosis, advice, or treatment. The predictions provided by this system are
                    for informational purposes only and must be reviewed and validated by qualified
                    medical professionals. Always consult with a licensed healthcare provider for
                    any medical concerns or before making any medical decisions. The developers
                    and operators of this system are not responsible for any medical decisions
                    made based on the information provided by this tool.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.7}>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Technology Stack
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This application is built using modern web technologies including React, Vite,
                Tailwind CSS, and Framer Motion for smooth, responsive user experiences. The AI
                models utilize deep learning frameworks such as TensorFlow or PyTorch for image
                classification and analysis.
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;

