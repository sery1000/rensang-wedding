// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import RumeysaInvitation from './pages/rumeysa';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rumeysa" element={<RumeysaInvitation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
