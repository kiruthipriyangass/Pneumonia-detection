import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, FileImage } from 'lucide-react';

const FileUploadCard = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  }, []);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onFileSelect(file);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setFileName(null);
    onFileSelect(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card max-w-2xl mx-auto"
    >
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="upload-zone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-3 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
              isDragging
                ? 'border-healthcare-blue-dark bg-healthcare-blue-light scale-105'
                : 'border-gray-300 hover:border-healthcare-blue hover:bg-healthcare-blue-light/30'
            }`}
            onClick={() => document.getElementById('file-input').click()}
          >
            <motion.div
              animate={isDragging ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Upload className="w-16 h-16 mx-auto mb-4 text-healthcare-blue-dark" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {isDragging ? 'Drop your X-ray image here' : 'Upload Chest X-Ray Image'}
            </h3>
            <p className="text-gray-500 mb-4">
              Drag and drop or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Supports: JPG, PNG, DICOM formats
            </p>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <img
                src={preview}
                alt="X-ray preview"
                className="w-full h-auto max-h-96 object-contain"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleRemove}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-red-50 transition-colors"
              >
                <X className="w-5 h-5 text-red-600" />
              </motion.button>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-gray-600">
              <FileImage className="w-5 h-5" />
              <span className="text-sm">{fileName}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FileUploadCard;

