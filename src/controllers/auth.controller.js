import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../libs/mailer.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El email ya está registrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await newUser.save();

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: "Usuario registrado. Verifica tu correo antes de iniciar sesión." });

  } catch (error) {
    console.error("Error en el registro:", error);
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

    res.json({ message: "Login exitoso", token, user: { id: user._id, email: user.email, username: user.username } });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error en el servidor." });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    
    console.log("Verificando token:", token);

    const user = await User.findOne({ verificationToken: token });
    
    if (!user) {
      console.log("Usuario no encontrado");
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("Usuario encontrado:", user);

    if (user.isVerified) {
      console.log("Usuario ya estaba verificado");
      return res.json({ message: "Cuenta ya verificada." });
    }

    user.isVerified = true;
    user.verificationToken = null; 
    await user.save();

    console.log("Usuario verificado con éxito:", user);

    res.json({ message: "Cuenta verificada con éxito." });
  } catch (error) {
    console.error("Error verificando el correo:", error);
    res.status(500).json({ message: "Error al verificar el correo." });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { 
    expires: new Date(0), 
    httpOnly: true,
    secure: false, 
    sameSite: "Lax", 
    path: '/', 
    domain: 'localhost' 
  });
  return res.sendStatus(200);
};

export const profile = (req, res) => {
  res.json({ message: "Perfil del usuario." });
};

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

    res.json({ isVerified: Boolean(user.isVerified) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error verificando el estado del usuario" });
  }
};
