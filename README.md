# Frontend Internship Project

## 🌐 Live Demo
[View Live Demo](https://mearninternship-ca8q46f7f-deepak8321s-projects.vercel.app/)

## 📁 Repository
[GitHub Repository](https://github.com/deepak9236/Assigmant.git)

## ⚙️ Setup Instructions

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/deepak9236/Assigmant.git
cd Assigmant
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following configuration:
```env
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 External Packages

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.22.3
- `react-scripts`: 5.0.1

### Firebase Integration
- `firebase`: ^10.8.1
- `firebase-tools`: ^13.4.1

### UI Components & Styling
- `@headlessui/react`: ^1.7.18
- `@heroicons/react`: ^2.1.1
- `tailwindcss`: ^3.4.1
- `autoprefixer`: ^10.4.18
- `postcss`: ^8.4.35

### Development Tools
- `@types/react`: ^18.2.64
- `@types/react-dom`: ^18.2.21

## 🚀 Deployment Process

### Vercel Deployment

1. Sign up for a Vercel account at [vercel.com](https://vercel.com)

2. Install Vercel CLI
```bash
npm install -g vercel
```

3. Login to Vercel
```bash
vercel login
```

4. Deploy the application
```bash
vercel
```

5. For production deployment
```bash
vercel --prod
```

### Environment Variables Setup on Vercel

1. Go to your project settings in Vercel
2. Navigate to the Environment Variables section
3. Add the following environment variables:
   - `REACT_APP_API_KEY`
   - `REACT_APP_AUTH_DOMAIN`
   - `REACT_APP_PROJECT_ID`
   - `REACT_APP_STORAGE_BUCKET`
   - `REACT_APP_MESSAGING_SENDER_ID`
   - `REACT_APP_APP_ID`
   - `REACT_APP_MEASUREMENT_ID`

## 🔒 Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)

2. Enable Authentication and select Google Sign-in method

3. Create a web app in your Firebase project

4. Copy the configuration values to your `.env` file

5. Initialize Firebase in your application:
```javascript
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## 📝 Development Notes
- The project uses React 18 with the latest features
- Routing is handled by React Router v6
- Authentication is managed through Firebase
- Styling is done using Tailwind CSS
- The application is fully responsive
