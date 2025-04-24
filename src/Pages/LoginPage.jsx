import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    const response = await login(userData);

    if (response && response.errors) {
      setErrors(response.errors);
    } else {
      navigate("/"); // Redirige a la página de inicio si todo está bien
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Si ya está autenticado, redirigir al inicio
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        
        {errors.length > 0 && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">
            {errors.map((error, idx) => (
              <p key={idx}>{error}</p>
            ))}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;







// import React from "react";
// import {useForm} from 'react-hook-form';
// import {useAuth} from '../Context/AuthContext';
// import {Link, useNavigate} from 'react-router-dom';
// import { useEffect } from "react";

// function LoginPage() {
  
//   const {register, handleSubmit, formState: {errors}} = useForm();
//   const {login, errors: loginErrors, isAuthenticated} = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = handleSubmit((data) => {
//     login(data);
//     });

//     useEffect(() => {
//       if (isAuthenticated) navigate('/');
//     }, [isAuthenticated]);

//   return (
//     <div className="flex h-[calc(100vh-100px)] items-center justify-center">
//       <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
//         {loginErrors.map((error, i) =>(
//           <div className="bg-red-500 p-2 textt-white text-center my-2" key={i} >
//             {error}
//           </div>
//         ))}

//         <h1 className="text-2xl font-bold text-white" >Iniciar Sesion</h1>
        
//         <form onSubmit={onSubmit} >
//           <input type="email" {...register('email', {required: true})} 
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//             placeholder="Correo Electronico"
//           />
//           {errors.email && (<p className="text-red-500">Correo Electronico incorrecto.</p>)}
//           <input type="password" {...register('password', {required: true})} 
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//             placeholder="Contraseña"
//           />
//           {errors.password && (<p className="text-red-500">Contraseña incorrecta.</p>)}
//           <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md my-2 ">Iniciar</button>
//         </form>
//         <p className="flex gap-x-2 justify-center text-white mt-3" >
//           ¿No tienes una cuenta aun? <Link to="/register" className="text-blue-500">Registrate</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default LoginPage;