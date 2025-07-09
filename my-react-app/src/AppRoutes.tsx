import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Usuarios from './pages/Usuarios';
import Bono from './pages/Bono';
import Sueldo from './pages/Sueldo';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/sueldo" element={<Sueldo />} />
      <Route path="/bono" element={<Bono />} />


    </Routes>
  );
}