import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    setUserEmail(values.email);
    const response = await signup(values);
    
    if (response && response.message === "Usuario registrado. Verifica tu correo antes de iniciar sesión.") {
      setShowModal(true);  // Muestra el modal de verificación
    }
  });

  const checkVerification = async () => {
    if (hasClickedVerify) return; // Evita múltiples clics

    setHasClickedVerify(true);
    setCheckingVerification(true);
    setVerificationError(""); // Resetear mensaje de error

    try {
      const res = await fetch(`http://localhost:4000/api/check-verification/${userEmail}?t=${Date.now()}`); // Asegúrate que el endpoint sea correcto
      const data = await res.json();
      
      if (res.ok && data.isVerified) {
        setIsVerified(true); // ✅ Ahora sí cambia el estado
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setVerificationError("Todavía no has verificado tu correo.");
        setHasClickedVerify(false);
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
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}

        <h1 className="text-2xl font-bold text-white">Registrarse</h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register('username', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Usuario"
          />
          {errors.username && (<p className="text-red-500">Usuario es requerido.</p>)}

          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo Electrónico"
          />
          {errors.email && (<p className="text-red-500">Correo Electrónico es requerido.</p>)}

          <input
            type="password"
            {...register('password', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (<p className="text-red-500">Contraseña es requerida.</p>)}

          <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md my-2 w-full">
            Registrarse
          </button>
        </form>

        <p className="flex gap-x-2 justify-center text-white mt-3">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500">Iniciar Sesión</Link>
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {!isVerified ? (
              <>
                <h2 className="text-xl font-bold mb-4">Verifica tu correo</h2>
                <p>Hemos enviado un correo de verificación a:</p>
                <p className="font-semibold">{userEmail}</p>
                <p>Por favor, revisa tu bandeja de entrada y verifica tu email antes de continuar.</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 flex items-center justify-center"
                  onClick={checkVerification}
                  disabled={checkingVerification || hasClickedVerify}
                >
                  {checkingVerification ? "Verificando..." : "Ya verifiqué mi correo"}
                </button>
                {verificationError && <p className="text-red-500 mt-2">{verificationError}</p>}
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">¡Correo verificado!</h2>
                <p>Tu cuenta ha sido verificada con éxito. Ahora puedes iniciar sesión.</p>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
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









// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useAuth } from "../Context/AuthContext.jsx";
// import { useNavigate, Link } from "react-router-dom";

// function RegisterPage() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const { signup, isAuthenticated, errors: registerErrors } = useAuth();
//   const navigate = useNavigate();

//   const [showModal, setShowModal] = useState(false);
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [checkingVerification, setCheckingVerification] = useState(false);
//   const [verificationError, setVerificationError] = useState("");
//   const [hasClickedVerify, setHasClickedVerify] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated) navigate('/');
//   }, [isAuthenticated]);

//   const onSubmit = handleSubmit(async (values) => {
//     setUserEmail(values.email);
//     const response = await signup(values);
    
//     if (response && response.message === "Usuario registrado. Verifica tu correo antes de iniciar sesión.") {
//       setShowModal(true);
//     }
//   });

//   const checkVerification = async () => {
//     if (hasClickedVerify) return; // Evitar múltiples clics

//     setHasClickedVerify(true);
//     setCheckingVerification(true);
//     setVerificationError(""); // Resetear mensaje de error

//     try {
//       const res = await fetch(`http://localhost:4000/api/verify-email/${userEmail}`);  // Asegúrate que el endpoint sea correcto
//       const data = await res.json();
      
//       if (data.message === "Cuenta verificada. Ahora puedes iniciar sesión.") {
//         setIsVerified(true);
//       } else {
//         setVerificationError("Todavía no has verificado tu correo.");
//         setHasClickedVerify(false);
//       }
//     } catch (error) {
//       console.error("Error verificando el email:", error);
//       setVerificationError("Error al verificar. Inténtalo de nuevo.");
//       setHasClickedVerify(false);
//     }

//     setCheckingVerification(false);
//   };

//   const handleRedirectToLogin = () => {
//     setShowModal(false);
//     navigate("/login");
//   };

//   return (
//     <div className="flex h-[calc(100vh-100px)] items-center justify-center">
//       <div className="bg-zinc-800 max-w-md p-10 rounded-md">
//         {registerErrors.map((error, i) => (
//           <div className="bg-red-500 p-2 text-white" key={i}>
//             {error}
//           </div>
//         ))}

//         <h1 className="text-2xl font-bold text-white">Registrarse</h1>

//         <form onSubmit={onSubmit}>
//           <input
//             type="text"
//             {...register('username', { required: true })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//             placeholder="Usuario"
//           />
//           {errors.username && (<p className="text-red-500">Usuario es requerido.</p>)}

//           <input
//             type="email"
//             {...register('email', { required: true })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//             placeholder="Correo Electrónico"
//           />
//           {errors.email && (<p className="text-red-500">Correo Electrónico es requerido.</p>)}

//           <input
//             type="password"
//             {...register('password', { required: true })}
//             className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//             placeholder="Contraseña"
//           />
//           {errors.password && (<p className="text-red-500">Contraseña es requerida.</p>)}

//           <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md my-2 w-full">
//             Registrarse
//           </button>
//         </form>

//         <p className="flex gap-x-2 justify-center text-white mt-3">
//           ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500">Iniciar Sesión</Link>
//         </p>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             {!isVerified ? (
//               <>
//                 <h2 className="text-xl font-bold mb-4">Verifica tu correo</h2>
//                 <p>Hemos enviado un correo de verificación a:</p>
//                 <p className="font-semibold">{userEmail}</p>
//                 <p>Por favor, revisa tu bandeja de entrada y verifica tu email antes de continuar.</p>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 flex items-center justify-center"
//                   onClick={checkVerification}
//                   disabled={checkingVerification || hasClickedVerify}
//                 >
//                   {checkingVerification ? (
//                     <span className="loader"></span>
//                   ) : (
//                     "Ya verifiqué mi correo"
//                   )}
//                 </button>
//                 {verificationError && <p className="text-red-500 mt-2">{verificationError}</p>}
//               </>
//             ) : (
//               <>
//                 <h2 className="text-xl font-bold mb-4">¡Correo verificado!</h2>
//                 <p>Tu cuenta ha sido verificada con éxito. Ahora puedes iniciar sesión.</p>
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
//                   onClick={handleRedirectToLogin}
//                 >
//                   Ir al Login
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegisterPage;
