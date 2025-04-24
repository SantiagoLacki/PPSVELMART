import nodemailer from 'nodemailer';
import dotenv from 'dotenv';  // Asegúrate de cargar dotenv para usar variables de entorno

dotenv.config();  // Carga las variables de entorno de tu archivo .env

// Revisa si las credenciales están correctas
console.log("EMAIL_USER:", process.env.EMAIL_USER);  // Muestra tu correo de usuario
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);  // Muestra tu contraseña de aplicación

export const sendVerificationEmail = async (email, token) => {
  // Crea el transportador de correos usando Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Usamos Gmail como proveedor de correo
    auth: {
      user: process.env.EMAIL_USER,  // Usa la variable de entorno para el usuario
      pass: process.env.EMAIL_PASS,  // Usa la variable de entorno para la contraseña de la aplicación
    },
  });

  // Enlace de verificación
  const verificationLink = `http://127.0.0.1:4000/api/verify-email/${token}`;

  // Envia el correo de verificación
  try {
    await transporter.sendMail({
      from: '"Velmart SRL" <' + process.env.EMAIL_USER + '>',  // Reemplaza con tu email
      to: email,  // El correo del destinatario
      subject: 'Verifica tu correo',  // Asunto del correo
      html: `<p>Haz clic en el siguiente enlace para verificar tu cuenta:</p>
              <a href="${verificationLink}">${verificationLink}</a>`,  // Cuerpo del correo con el enlace de verificación
    });
    console.log("Correo enviado exitosamente.");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
