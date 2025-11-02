# AI Pneumonia Detection Web Application

A modern, healthcare-focused web application for detecting pneumonia from chest X-ray images using AI/deep learning technology. This application provides a clean, intuitive interface for healthcare professionals to quickly analyze chest X-rays and get AI-powered predictions.

## Features

- 🔐 **User Authentication** - Secure login and registration system
- 📤 **Drag & Drop Upload** - Easy file upload interface for X-ray images
- 🤖 **AI-Powered Analysis** - Instant pneumonia detection with confidence scores
- 📊 **Visual Results** - Clear presentation of prediction results with confidence levels
- 📜 **Scan History** - View previous analysis results
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Beautiful UI** - Clean, calming healthcare-focused design with smooth animations

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pneumonia-detection-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar component
│   ├── FileUploadCard.jsx  # File upload with drag & drop
│   ├── ResultCard.jsx      # Prediction results display
│   └── AnimatedWrapper.jsx # Reusable animation wrapper
├── pages/
│   ├── Login.jsx           # Login page
│   ├── Register.jsx        # Registration page
│   ├── Dashboard.jsx       # Main dashboard with upload
│   ├── About.jsx           # About/Help page
│   └── History.jsx         # Scan history page
├── App.jsx                 # Main app component with routing
├── main.jsx                # Entry point
└── index.css               # Global styles and Tailwind imports
```

## Features Breakdown

### Dashboard
- Upload chest X-ray images via drag & drop or file picker
- Real-time image preview
- Loading animation during AI analysis
- Display prediction results (Normal/Pneumonia)
- Show confidence percentage with visual progress bar
- Placeholder for Grad-CAM heatmap visualization

### Authentication
- Clean login and registration forms
- Form validation
- Smooth page transitions
- Success notifications

### History Page
- View all previous scans
- See prediction results and confidence scores
- Filter and organize by date

### About Page
- Information about the system
- Technology stack details
- Important medical disclaimers

## Design Philosophy

The application is designed with healthcare in mind:
- **Calming Colors**: Soft blues, whites, and mint greens
- **Empathetic UI**: Focus on simplicity and trust
- **Smooth Animations**: Gentle transitions that don't distract
- **Accessibility**: Clean layouts and readable typography

## Medical Disclaimer

⚠️ **IMPORTANT**: This AI-powered tool is designed to assist healthcare professionals and should **NOT** be used as a substitute for professional medical diagnosis, advice, or treatment. The predictions provided by this system are for informational purposes only and must be reviewed and validated by qualified medical professionals.

## Mock API

Currently, the application uses mock API responses for demonstration purposes. In a production environment, you would integrate with a real backend API that connects to your trained AI model.

Example mock response:
```json
{
  "status": "success",
  "prediction": "Pneumonia",
  "confidence": 91.8
}
```

## Future Enhancements

- Integration with real AI backend API
- Grad-CAM heatmap visualization implementation
- User profiles and settings
- Export reports as PDF
- Email notifications
- Multi-user support with role-based access
- DICOM format support

## License

This project is for educational/demonstration purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

