import { useState } from "react";
import axios from "axios";

const RegisterC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5050/users', {
        name,
        email,
        password
      });
      console.log('Usuario guardado:', response.data);
      alert('Usuario registrado correctamente');
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      setError(error.response?.data?.error || 'Error al registrar el usuario');
    }
  };

  return (
    <div className="container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterC;