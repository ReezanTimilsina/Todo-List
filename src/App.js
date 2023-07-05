import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import AboutPage from './components/pages/about/AboutPage';
import PasswordsPage from './components/pages/passwords/PasswordsPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/passwords" element={<PasswordsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
