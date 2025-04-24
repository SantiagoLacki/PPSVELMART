import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      return res.data;
    } catch (error) {
      return null;
    }
  };

  const login = async (userData) => {
    try {
      const res = await loginRequest(userData);
      console.log("Respuesta completa del backend al iniciar sesión:", res.data);
  
      if (!res.data.token) {
        console.error("❌ No se recibió token en la respuesta del backend");
        return;
      }
  
      // Guardar el token en las cookies
      Cookies.set("token", res.data.token, { expires: 1 });
      setIsAuthenticated(true);
      setUser(res.data.user);
      return { user: res.data.user, token: res.data.token };
    } catch (error) {
      console.error("Error en login:", error.response?.data || error.message);
      setIsAuthenticated(false);
      setUser(null);
      return { errors: ["Error al iniciar sesión"] };
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    async function checkLogin() {
      const token = Cookies.get("token");
      if (!token) {
        console.log("No hay token, usuario no autenticado");
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(token);
        console.log("Respuesta del backend al verificar token:", res.data);

        if (res.data && res.data.user) {
          setIsAuthenticated(true);
          setUser(res.data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error al verificar token:", error.message);
        setIsAuthenticated(false);
        setUser(null);
      }
      setLoading(false);
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{
      signup,
      login,
      logout,
      loading,
      user,
      isAuthenticated,
      errors,
    }}>
      {children}
    </AuthContext.Provider>
  );
};






// import { createContext, useState, useContext, useEffect } from 'react';
// import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
// import Cookies from "js-cookie";

// export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth debe estar dentro de un AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [errors, setErrors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const signup = async (userData) => {
//     try {
//       const res = await registerRequest(userData);
//       console.log('Respuesta del backend:', res); // Para depuración
//       return res.data;
//     } catch (error) {
//       console.error('Error en el registro:', error.response?.data || error.message);
//       return null;
//     }
//   };

//   const singIn = async (user) => {
//     try {
//       const res = await loginRequest(user);
//       console.log(res);
//       setIsAuthenticated(true);
//       setUser(res.data);
//     } catch (error) {
//       if (Array.isArray(error.response.data)) {
//         return setErrors(error.response.data);
//       }
//       setErrors([error.response.data.message]);
//     }
//   }

//   const logout = () => {
//     Cookies.remove("token");
//     setIsAuthenticated(false);
//     setUser(null);
//   }

//   useEffect(() => {
//     if (errors.length > 0) {
//       const timer = setTimeout(() => {
//         setErrors([]);
//       }, 6000);
//       return () => clearTimeout(timer);
//     }
//   }, [errors]);

//   useEffect(() => {
//     async function checkLogin() {
//       const cookies = Cookies.get();

//       if (!cookies.token) {
//         setIsAuthenticated(false);
//         setLoading(false);
//         return setUser(null);
//       }

//       try {
//         const res = await verifyTokenRequest(cookies.token);
//         if (!res.data) {
//           setIsAuthenticated(false);
//           setLoading(false);
//           return;
//         }

//         setIsAuthenticated(true);
//         setUser(res.data);
//         setLoading(false);
//       } catch (error) {
//         setIsAuthenticated(false);
//         setUser(null);
//         setLoading(false);
//       }
//     }
//     checkLogin();
//   }, []);

//   return (
//     <AuthContext.Provider value={{
//       signup,
//       singIn,
//       logout,
//       loading,
//       user,
//       isAuthenticated,
//       errors,
//     }}>
//       {children}
//     </AuthContext.Provider>
//   )
// };
