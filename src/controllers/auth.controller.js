import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../libs/mailer.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El email ya está registrado." });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Crear el nuevo usuario
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    });

    // Guardar usuario en la base de datos
    await newUser.save();

    // Enviar email de verificación usando la función importada
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: "Usuario registrado. Verifica tu correo antes de iniciar sesión." });

  } catch (error) {
    console.error("Error en el registro:", error); // 👈 Imprimirá el error en la terminal
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Usuario no encontrado." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta." });

    if (!user.isVerified) {
      return res.status(400).json({ message: "Debes verificar tu correo antes de iniciar sesión." });
    }

    const token = jwt.sign({ id: user._id }, TOKEN_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "Lax",
    });

    res.json({ message: "Login exitoso", token, user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error en el servidor." });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    
    console.log("Verificando token:", token);

    // Buscamos al usuario usando el token de verificación
    const user = await User.findOne({ verificationToken: token });
    
    if (!user) {
      console.log("Usuario no encontrado");
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("Usuario encontrado:", user);

    // Si el usuario ya está verificado, enviamos un mensaje
    if (user.isVerified) {
      console.log("Usuario ya estaba verificado");
      return res.json({ message: "Cuenta ya verificada." });
    }

    // 🔥 ACTUALIZAMOS el campo `isVerified` a `true`
    user.isVerified = true;
    user.verificationToken = null; // Limpiamos el token de verificación
    await user.save(); // Guardamos los cambios

    console.log("Usuario verificado con éxito:", user);

    res.json({ message: "Cuenta verificada con éxito." });
  } catch (error) {
    console.error("Error verificando el correo:", error);
    res.status(500).json({ message: "Error al verificar el correo." });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.sendStatus(200);
};

export const profile = (req, res) => {
  res.json({ message: "Perfil del usuario." });
};

// export const verifyToken = (req, res) => {
//   res.json({ message: "Token válido." });
// };

export const verifyToken = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ user: null });

    const decoded = jwt.verify(token, TOKEN_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.json({ user: null });

    res.json({ user });
  } catch (error) {
    res.json({ user: null });
  }
};

export const checkVerificationStatus = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // 🔥 IMPORTANTE: Enviar `isVerified` como `Boolean()` para evitar errores
    res.json({ isVerified: Boolean(user.isVerified) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error verificando el estado del usuario" });
  }
};










// import User from '../models/user.model.js';
// import bcrypt from 'bcryptjs';
// import { sendVerificationEmail } from '../libs/mailer.js';
// import { v4 as uuidv4 } from 'uuid';

// export const register = async (req, res) => {
//   const { email, password, username } = req.body;

//   try {
//     const userFound = await User.findOne({ email });
//     if (userFound) return res.status(400).json(['El correo electrónico ya está en uso.']);

//     const passwordHash = await bcrypt.hash(password, 10);
//     const verificationToken = uuidv4();

//     const newUser = new User({
//       username,
//       email,
//       password: passwordHash,
//       verificationToken,
//     });

//     await newUser.save();

//     await sendVerificationEmail(email, verificationToken);

//     res.status(201).json({ message: 'Usuario registrado. Verifica tu correo antes de iniciar sesión.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Función login agregada
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json(['Usuario o contraseña incorrectos.']);

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json(['Usuario o contraseña incorrectos.']);

//     // Aquí puedes manejar la generación de un token JWT, si es necesario.
//     res.json({ message: 'Inicio de sesión exitoso.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const logout = (req, res) => {
//   res.json({ message: 'Logout exitoso.' });
// };

// export const profile = (req, res) => {
//   res.json({ message: 'Perfil del usuario.' });
// };

// export const verifyToken = (req, res) => {
//   res.json({ message: 'Token válido.' });
// };

// export const verifyEmail = async (req, res) => {
//   const { email } = req.params;  // Usamos el email que se pasa por URL

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Correo no encontrado.' });

//     if (user.isVerified) return res.status(400).json({ message: 'Cuenta ya verificada.' });

//     user.isVerified = true;
//     await user.save();

//     res.json({ message: 'Cuenta verificada. Ahora puedes iniciar sesión.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
