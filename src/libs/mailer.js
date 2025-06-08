import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log("EMAIL_USER:", process.env.EMAIL_USER); 
console.log("EMAIL_PASS:", process.env.EMAIL_PASS); 

export const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  const verificationLink = `http://127.0.0.1:4000/api/verify-email/${token}`;

  try {
    await transporter.sendMail({
      from: '"Marder-hombres Online" <' + process.env.EMAIL_USER + '>',
      to: email, 
      subject: 'Verifica tu correo', 
      html: `<p>Haz clic en el siguiente enlace para verificar tu cuenta en Marder-Hombres:</p>
              <a href="${verificationLink}">${verificationLink}</a>`, 
    });
    console.log("Correo enviado exitosamente.");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
