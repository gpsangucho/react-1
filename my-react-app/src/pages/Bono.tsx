// src/pages/Bono.tsx
import React, { useState } from 'react';

const Bono: React.FC = () => {
  const [sueldoDiario, setSueldoDiario] = useState<number | ''>('');
  const [diasDisfrute, setDiasDisfrute] = useState<number | ''>('');
  const [bono, setBono] = useState<number | null>(null);

  // Crear lista de días 1 a 30 para el select
  const diasOptions = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();

    const sueldo = Number(sueldoDiario) || 0;
    const dias = Number(diasDisfrute) || 0;

    const calculoBono = sueldo * dias;
    setBono(calculoBono);
  };

  return (
    <div className="container mt-4">
      <h2>Bono</h2>
      <form onSubmit={handleCalcular}>
        <div className="mb-3">
          <label htmlFor="sueldoDiario" className="form-label">Sueldo Diario</label>
          <input
            type="number"
            className="form-control"
            id="sueldoDiario"
            value={sueldoDiario}
            onChange={(e) => setSueldoDiario(e.target.value === '' ? '' : Number(e.target.value))}
            min={0}
            step={10}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="diasDisfrute" className="form-label">Días de Disfrute</label>
          <select
            id="diasDisfrute"
            className="form-select"
            value={diasDisfrute}
            onChange={(e) => setDiasDisfrute(Number(e.target.value))}
            required
          >
            <option value="">Seleccione días</option>
            {diasOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Calcular Bono</button>
      </form>

      {bono !== null && (
        <div className="alert alert-success mt-3" role="alert">
          <strong>Bono Calculado:</strong> ${bono.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Bono;
