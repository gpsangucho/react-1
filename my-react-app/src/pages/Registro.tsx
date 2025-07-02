import { useState } from "react";
import api from "../api/axiosConfig";

const Registro = () => {
const [nombre, setNombre] = useState("");
const [edad, setEdad] = useState("");
const [cargo, setCargo] = useState("");

const [mensaje, setMensaje] = useState("");
const [error, setError] = useState("");

const registrarUsuario = async () => {
// Validación simple
if (!nombre || !edad || !cargo) {
setError("Todos los campos son obligatorios");
setMensaje("");
return;
}
try {
  setError("");
  const nuevoUsuario = {
    nombre,
    edad: Number(edad),
    cargo,
  };

  const res = await api.post("/users", nuevoUsuario);

  setMensaje(`Usuario registrado con ID: ${res.data.id}`);
  setNombre("");
  setEdad("");
  setCargo("");
} catch (err) {
  console.error("Error al registrar:", err);
  setError("Hubo un error al registrar el usuario.");
  setMensaje("");
}
};

return (
<div style={{ padding: "1rem", maxWidth: "400px" }}>
<h2>Registro de Usuario</h2>
  <div style={{ marginBottom: "1rem" }}>
    <label>Nombre:</label><br />
    <input
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
  </div>

  <div style={{ marginBottom: "1rem" }}>
    <label>Edad:</label><br />
    <input
      type="number"
      min="0"
      value={edad}
      onChange={(e) => setEdad(e.target.value)}
    />
  </div>

  <div style={{ marginBottom: "1rem" }}>
    <label>Cargo:</label><br />
    <input
      type="text"
      value={cargo}
      onChange={(e) => setCargo(e.target.value)}
    />
  </div>

  <button onClick={registrarUsuario}>Registrar</button>

  {mensaje && <p style={{ color: "green", marginTop: "1rem" }}>{mensaje}</p>}
  {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
</div>
);
};

export default Registro;