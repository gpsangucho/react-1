import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

interface Usuario {
id: number;
nombre: string;
edad: number;
}

const Usuarios = () => {
const [edadMin, setEdadMin] = useState("18");
const [usuarios, setUsuarios] = useState<Usuario[]>([]);
const [cargando, setCargando] = useState(false);

// Ejecuta automáticamente la búsqueda al cambiar edadMin
useEffect(() => {
const obtenerUsuarios = async () => {
if (!edadMin) return;
try {
setCargando(true);
const res = await api.get("/usuarios", {
params: { edadMin: edadMin },
});
setUsuarios(res.data);
} catch (error) {
console.error("Error al obtener usuarios:", error);
setUsuarios([]);
} finally {
setCargando(false);
}
};
obtenerUsuarios();
}, [edadMin]);

return (
<div style={{ padding: "1rem" }}>
<h2>Usuarios mayores de cierta edad</h2>
  <label>
    Edad mínima:
    <input
      type="number"
      value={edadMin}
      onChange={(e) => setEdadMin(e.target.value)}
      style={{ marginLeft: "0.5rem" }}
    />
  </label>

  <div style={{ marginTop: "1rem" }}>
    {cargando ? (
      <p>Cargando...</p>
    ) : (
      <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
        {usuarios.length === 0 ? (
          <p>No se encontraron usuarios con edad ≥ {edadMin}.</p>
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
    )}
  </div>
</div>
);
};

export default Usuarios;