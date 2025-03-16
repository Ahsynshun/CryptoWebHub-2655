import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import MiningDashboard from './components/Mining/MiningDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mining" element={<MiningDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;