import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

interface Usuario {
id: number;
nombre: string;
edad: number;
}

const Usuarios = () => {
const [edad, setEdad] = useState("18");
const [usuarios, setUsuarios] = useState<Usuario[]>([]);
const [cargando, setCargando] = useState(false);

// Ejecutar búsqueda automáticamente cuando cambia la edad
useEffect(() => {
const buscarPorEdad = async () => {
if (!edad || isNaN(Number(edad))) return;

//
  try {
    setCargando(true);
    const res = await api.get("/users", {
      params: { edadMin: edad }, // aquí se usa edadMin o el nombre que soporte tu backend
    });
    setUsuarios(res.data);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    setUsuarios([]); // limpia la lista si hay error
  } finally {
    setCargando(false);
  }
};

buscarPorEdad();
//
}, [edad]);

return (
<div style={{ padding: "1rem" }}>
<h2>Filtrar Usuarios por Edad Mínima</h2>
  <input
    type="number"
    min="0"
    placeholder="Edad mínima"
    value={edad}
    onChange={(e) => setEdad(e.target.value)}
    style={{ marginRight: "0.5rem" }}
  />

  <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
    {cargando ? (
      <p>Cargando usuarios...</p>
    ) : usuarios.length === 0 ? (
      <p>No se encontraron usuarios con edad ≥ {edad}.</p>
    ) : (
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.id} - {usuario.nombre} ({usuario.edad} años)
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
);
};

export default Usuarios;