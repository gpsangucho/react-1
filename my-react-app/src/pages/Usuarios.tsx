// src/pages/Usuario.tsx
import React, { useState } from 'react';

interface Usuario {
  id: number;
  nombre: string;
  edad: number;
}

const usuariosData: Usuario[] = [
  { id: 1, nombre: 'Ana', edad: 25 },
  { id: 2, nombre: 'Luis', edad: 32 },
  { id: 3, nombre: 'María', edad: 40 },
  { id: 4, nombre: 'Jorge', edad: 28 },
  { id: 5, nombre: 'Sofía', edad: 35 },
];

const Usuario: React.FC = () => {
  const [edadFiltro, setEdadFiltro] = useState<number | ''>('');

  // Filtrar usuarios por edad mínima seleccionada
  const usuariosFiltrados = edadFiltro === ''
    ? usuariosData
    : usuariosData.filter(usuario => usuario.edad >= edadFiltro);

  return (
    <div className="container mt-4">
      <h2>Usuarios</h2>

      <div className="mb-3">
        <label htmlFor="edadFiltro" className="form-label">Filtrar por edad mínima</label>
        <select
          id="edadFiltro"
          className="form-select"
          value={edadFiltro}
          onChange={(e) => setEdadFiltro(e.target.value === '' ? '' : Number(e.target.value))}
        >
          <option value="">Todas las edades</option>
          <option value="20">20+</option>
          <option value="25">25+</option>
          <option value="30">30+</option>
          <option value="35">35+</option>
          <option value="40">40+</option>
        </select>
      </div>

      <div className="card">
        <div className="card-header">Listado de usuarios</div>
        <ul className="list-group list-group-flush">
          {usuariosFiltrados.length === 0 ? (
            <li className="list-group-item">No hay usuarios para mostrar.</li>
          ) : (
            usuariosFiltrados.map(usuario => (
              <li key={usuario.id} className="list-group-item">
                <strong>{usuario.nombre}</strong> - Edad: {usuario.edad}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Usuario;
