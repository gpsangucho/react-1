// src/pages/Sueldo.tsx
import React, { useState } from 'react';

const Sueldo: React.FC = () => {
  const [sueldoBasico, setSueldoBasico] = useState<number | ''>('');
  const [primas, setPrimas] = useState<number | ''>('');
  const [deducciones, setDeducciones] = useState<number | ''>('');
  const [sueldoNeto, setSueldoNeto] = useState<number | null>(null);

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir a número o usar 0 si está vacío
    const basico = Number(sueldoBasico) || 0;
    const primasNum = Number(primas) || 0;
    const deduc = Number(deducciones) || 0;

    const neto = basico + primasNum - deduc;
    setSueldoNeto(neto);
  };

  return (
    <div className="container mt-4">
      <h2>Sueldo</h2>
      <form onSubmit={handleCalcular}>
        <div className="mb-3">
          <label htmlFor="sueldoBasico" className="form-label">Sueldo Básico</label>
          <input
            type="number"
            className="form-control"
            id="sueldoBasico"
            value={sueldoBasico}
            onChange={(e) => setSueldoBasico(e.target.value === '' ? '' : Number(e.target.value))}
            min={0}
            step={100}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="primas" className="form-label">Primas</label>
          <input
            type="number"
            className="form-control"
            id="primas"
            value={primas}
            onChange={(e) => setPrimas(e.target.value === '' ? '' : Number(e.target.value))}
            min={0}
            step={100}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="deducciones" className="form-label">Deducciones</label>
          <input
            type="number"
            className="form-control"
            id="deducciones"
            value={deducciones}
            onChange={(e) => setDeducciones(e.target.value === '' ? '' : Number(e.target.value))}
            min={0}
            step={100}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Calcular</button>
      </form>

      {sueldoNeto !== null && (
        <div className="alert alert-info mt-3" role="alert">
          <strong>Sueldo Neto:</strong> ${sueldoNeto.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Sueldo;
