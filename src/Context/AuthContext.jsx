import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth.js";
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
      setErrors([]); 
      console.log("Respuesta de registro (AuthContext):", res.data);
      return { success: true, data: res.data, message: res.data.message, status: res.data.status }; 
    } catch (error) {
      console.error("Error en el registro (AuthContext):", error.response?.data || error.message);
      if (error.response?.data?.message) {
        setErrors([error.response.data.message]);
      } else if (Array.isArray(error.response?.data)) {
        setErrors(error.response.data);
      } else {
        setErrors(["Ocurrió un error inesperado durante el registro."]);
      }
      return { success: false, errors: errors }; 
    }
  };

  const login = async (userData) => {
    try {
      const res = await loginRequest(userData);
      console.log("Respuesta completa del backend al iniciar sesión:", res.data);

      if (!res.data.token) {
        console.error("❌ No se recibió token en la respuesta del backend");
        setErrors(["No se recibió token del servidor. Intente de nuevo."]);
        setIsAuthenticated(false);
        setUser(null);
        return { errors: ["No se recibió token."] };
      }

      Cookies.set("token", res.data.token, { expires: 1, path: '/' }); 
      setIsAuthenticated(true);
      setUser(res.data.user); 
      setErrors([]); 

      return { success: true, user: res.data.user, token: res.data.token };

    } catch (error) {
      console.error("Error en login:", error.response?.data || error.message);
      setIsAuthenticated(false);
      setUser(null);
      
      if (error.response?.data?.message) {
        setErrors([error.response.data.message]);
      } else if (Array.isArray(error.response?.data)) {
        setErrors(error.response.data);
      } else {
        setErrors(["Ocurrió un error inesperado al iniciar sesión."]);
      }
      return { success: false, errors: errors };
    }
  };

  const logout = async () => {
    try {
      await logoutRequest(); 
      console.log("Logout: Solicitud de cierre de sesión enviada al backend.");
    } catch (error) {
      console.error("Logout: Error al enviar solicitud de cierre de sesión al backend:", error);
    } finally {
      Cookies.remove("token", { path: '/' }); 
      setIsAuthenticated(false);
      setUser(null);
      console.log("Logout: Estado del frontend limpiado.");
    }
  };

  useEffect(() => {
    async function checkLogin() {
      try {
        setLoading(true); 
        const res = await verifyTokenRequest(); 
        console.log("Respuesta del backend al verificar token:", res ? res.data : null);

        if (res && res.data && res.data.user) {
          setIsAuthenticated(true);
          setUser(res.data.user);
          console.log("Verificación exitosa. Usuario:", res.data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
          console.log("Verificación fallida o sin usuario.");
        }
      } catch (error) {
        console.error("Error al verificar token:", error.response?.data || error.message);
        setIsAuthenticated(false);
        setUser(null);
        Cookies.remove("token", { path: '/' }); 
      } finally {
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

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