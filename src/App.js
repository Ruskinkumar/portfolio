import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* Add other routes here if needed */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
