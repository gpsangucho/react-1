import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Index1 from './useEffect/index1';
import Index2 from './useContext/index2';
import IndexUserState from './useStates/indexUseSatate';
import FormularioRHF from './formulario/FormularioRHF';
import FormularioBasico from './formulario/FormularioBasico';
import FormularioZod from './formulario/FormularioZod';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />

      <Route path="/index1" element={<Index1/>} />
      <Route path="/index2" element={<Index2 />} />
      <Route path="/use-state" element={<IndexUserState />} />
      <Route path="/formulario-basico" element={<FormularioBasico/>} />
      <Route path="/formulario-rhf" element={<FormularioRHF/>} />
      <Route path="/formulario-zod" element={<FormularioZod/>} />

    </Routes>
  );
}