import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Research } from './pages/Research';
import { People } from './pages/People';
import { Opportunities } from './pages/Opportunities';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/research" element={<Research />} />
          <Route path="/people" element={<People />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;