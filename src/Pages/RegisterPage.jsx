import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [checkingVerification, setCheckingVerification] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [hasClickedVerify, setHasClickedVerify] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    setUserEmail(values.email); // Guardar el email para el modal
    const response = await signup({
      username: values.username,
      email: values.email,
      password: values.password,
    });

    console.log("Respuesta de signup en RegisterPage:", response); // ✅ Añadido para depuración

    // ✅ CONDICIÓN CLAVE: Muestra el modal si el registro fue exitoso y el backend indica "pending_verification"
    if (response.success && response.status === "pending_verification") { 
      setShowModal(true); 
    } else if (response.success && response.message === "Usuario registrado. Verifica tu correo antes de iniciar sesión.") {
        // Fallback si el backend solo envía el mensaje sin el "status"
        setShowModal(true);
    }
    // Si no es un éxito esperado para mostrar el modal, los errores se mostrarán automáticamente por useAuth
  });

  const checkVerification = async () => {
    if (hasClickedVerify) return;

    setHasClickedVerify(true);
    setCheckingVerification(true);
    setVerificationError("");

    try {
      // ✅ Endpoint para verificar el ESTADO de la verificación (no para activarla)
      const res = await fetch(`http://localhost:4000/api/check-verification/${userEmail}?t=${Date.now()}`); 
      const data = await res.json();

      console.log("Respuesta de checkVerification:", data); // ✅ Añadido para depuración

      if (res.ok && data.isVerified) {
        setIsVerified(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setVerificationError("Todavía no has verificado tu correo o el email es incorrecto. Intenta de nuevo.");
        setHasClickedVerify(false); // Permite volver a intentar
      }
    } catch (error) {
      console.error("Error verificando el email:", error);
      setVerificationError("Error al verificar. Inténtalo de nuevo.");
      setHasClickedVerify(false);
    }

    setCheckingVerification(false);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2 rounded-md" key={i}> 
            {error}
          </div>
        ))}

        <h1 className="text-2xl font-bold text-white">Registrarse</h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register('username', { required: 'Usuario es requerido.' })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Usuario"
          />
          {errors.username && (<p className="text-red-500 text-sm mt-1">{errors.username.message}</p>)}

          <input
            type="email"
            {...register('email', { required: 'Correo Electrónico es requerido.' })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo Electrónico"
          />
          {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}

          <input
            type="password"
            {...register('password', {
              required: 'Contraseña es requerida.',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres.',
              },
              maxLength: {
                value: 20,
                message: 'La contraseña no debe exceder los 20 caracteres.',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                message: 'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&).',
              },
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}

          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Repetir contraseña es requerido.',
              validate: value => value === watch('password') || "Las contraseñas no coinciden." 
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Repetir Contraseña"
          />
          {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>)}

          <button type="submit" className="bg-blue-700 text-white hover:bg-sky-600 px-4 py-2 rounded-md my-2 w-full">
            Registrarse
          </button>
        </form>

        <p className="flex gap-x-2 justify-center text-white mt-3">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500">Iniciar Sesión</Link>
        </p>
      </div>

      {/* Modal de Verificación de Correo */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
            {!isVerified ? (
              <>
                <h2 className="text-xl font-bold mb-4">Verifica tu correo</h2>
                <p className="mb-2">Hemos enviado un correo de verificación a:</p>
                <p className="font-semibold text-lg text-gray-800 mb-4">{userEmail}</p>
                <p className="mb-4">Por favor, revisa tu bandeja de entrada (y la carpeta de spam) y haz clic en el enlace para activar tu cuenta.</p>
                <button
                  className={`px-6 py-3 rounded-md mt-4 transition-colors duration-300 ${
                      checkingVerification || hasClickedVerify 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  onClick={checkVerification}
                  disabled={checkingVerification || hasClickedVerify}
                >
                  {checkingVerification ? "Verificando..." : "Ya verifiqué mi correo"}
                </button>
                {verificationError && <p className="text-red-500 mt-3">{verificationError}</p>}
                <p className="text-sm text-gray-500 mt-4">Una vez verificado, serás redirigido al login.</p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4 text-green-600">¡Correo verificado!</h2>
                <p className="mb-4">Tu cuenta ha sido verificada con éxito. Ahora puedes iniciar sesión.</p>
                <button
                  className="bg-green-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-700 transition-colors duration-300"
                  onClick={() => navigate("/login")}
                >
                  Ir al Login
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;