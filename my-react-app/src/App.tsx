import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Bono from './pages/Bono';
import Sueldo from './pages/Sueldo';
import Registro from './pages/Registro';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/bono" element={<Bono />} />
          <Route path="/sueldo" element={<Sueldo />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
