import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        
        {/* Global Toast Notification Configuration */}
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#0F172A', /* Navy Blue Background */
              color: '#FFFFFF',      /* White Text */
              border: '1px solid #D4AF37', /* Gold Accent Border */
              borderRadius: '8px',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.2)',
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
