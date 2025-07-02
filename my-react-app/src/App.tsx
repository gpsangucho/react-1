import './App.css'
import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';



function App() {
  return (
    <>

   
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#21262d' }}>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/home">Home</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/sueldo">Sueldo</Link>
        <Link to="/bono">Bono</Link>
      </nav>




      <AppRoutes />

    </>
    
  );

}
export default App;

