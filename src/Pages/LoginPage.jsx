import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, isAuthenticated, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    await login(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-white font-semibold mb-4">Iniciar Sesión</h2>

        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2 rounded-md" key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="email"
              {...register('email', { required: 'El Correo Electrónico es requerido.' })} 
              className="w-full bg-zinc-700 text-white p-2 rounded mt-1"
              placeholder="E-mail"
            />
            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
          </div>

          <div className="mb-6">
            <input
              type="password"
              {...register('password', { required: 'La Contraseña es requerida.' })} 
              className="w-full bg-zinc-700 p-2 text-white rounded mt-1"
              placeholder="Contraseña"
            />
            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded hover:bg-sky-500"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="flex gap-x-2 justify-center text-white mt-3">
          ¿No tienes una cuenta? <Link to="/register" className="text-blue-600">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
