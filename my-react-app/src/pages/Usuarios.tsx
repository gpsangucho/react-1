import React from 'react';

const Usuarios: React.FC = () => (
  <div className="container mt-4">
    <h2 className="mb-3">Listado de Usuario</h2>
    <br/>
    <p>Secciòn de usuarios</p>
  

    {/* Tabla de 3 columnas y 4 filas */}
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
          <th>Columna 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fila 1, Col 1</td>
          <td>Fila 1, Col 2</td>
          <td>Fila 1, Col 3</td>
        </tr>
        <tr>
          <td>Fila 2, Col 1</td>
          <td>Fila 2, Col 2</td>
          <td>Fila 2, Col 3</td>
        </tr>
        <tr>
          <td>Fila 3, Col 1</td>
          <td>Fila 3, Col 2</td>
          <td>Fila 3, Col 3</td>
        </tr>
        <tr>
          <td>Fila 4, Col 1</td>
          <td>Fila 4, Col 2</td>
          <td>Fila 4, Col 3</td>
        </tr>
      </tbody>
    </table>
  </div>

);

export default Usuarios;