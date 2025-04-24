import axios from "./axios";

export const registerRequest = (user) => axios.post(`/register`, user);

// export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);

export const loginRequest = async (user) => {
  try {
    const res = await axios.post(`/login`, user, { withCredentials: true });
    console.log("Respuesta del backend en loginRequest:", res.data);
    return res;
  } catch (error) {
    console.error("Error en loginRequest:", error.response?.data || error.message);
    throw error;
  }
};
