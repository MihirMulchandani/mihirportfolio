import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Security } from './pages/Security';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;