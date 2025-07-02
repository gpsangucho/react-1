import './App.css'
import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';



function App() {
  return (
    <>

   
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#21262d' }}>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>

        <Link to="/index1">index1 </Link>
        <Link to="/index2">index2</Link>
        <Link to="/use-state">Use state</Link>

        <Link to="/formulario-basico">Formulario Básico</Link>
        <Link to="/formulario-rhf">Formulario RHF</Link>
        <Link to="/formulario-zod">Formulario ZOD</Link>

      </nav>

      <AppRoutes />

    </>
    
  );

}
export default App;

