import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { LandingPage } from './pages/landing-page';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="font-ptReg">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
