
// src/pages/Registro.tsx
import React, { useState } from 'react';

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState<number | ''>('');
  const [cargo, setCargo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}\nEdad: ${edad}\nCargo: ${cargo}`);
  };

  return (
    <div className="container mt-4">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
            required
            min={0}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">Cargo</label>
          <select
            className="form-select"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          >
            <option value="">Seleccione un cargo</option>
            <option value="Administrador">Administrador</option>
            <option value="Empleado">Empleado</option>
            <option value="Gerente">Gerente</option>
            <option value="Interno">Interno</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
