import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CyberSurakshaApp from './pages/CyberSurakshaApp.js';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CyberSurakshaApp />
  </React.StrictMode>
);
