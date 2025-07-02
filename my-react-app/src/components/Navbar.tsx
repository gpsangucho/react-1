import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">Mi App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/usuarios">Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bono">Bono</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sueldo">Sueldo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro">Registro</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
