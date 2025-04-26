import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const form = useRef();
    // const [successMessage, setSuccessMessage] = useState('');
    
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_bt12u0k', 'template_lfgx8ma', form.current, 'LhNhZm-e9mi7gab3M')
        .then((result) => {
            console.log(result.text);
            form.current.reset()
            // setSuccessMessage('Su mensaje fue enviado con éxito.');
        }, 
        (error) => {
            console.log(error.text);
            // setSuccessMessage('Hubo un error, intentelo nuevamente');
        });
    };
return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-sm-4 p-md-2 rounded-md border border-secondary">
        <form className='formulario p-4' ref={form} onSubmit={sendEmail}>
            <h4 className="text-2xl font-bold text-white">Formulario de contacto</h4>
            <label className="texto-register-login text-white mt-4"> Nombre Completo: </label>
            <input id= "input" type="text" name="user_name" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"/>
            <label className="texto-register-login text-white mt-3"> Correo Electronico: </label>
            <input id= "input" type="email" name="user_email" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"/>
            <label className="texto-register-login text-white mt-3"> Mensaje: </label>
            <textarea id='input' name="message" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"/>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-md my-2 " type="submit">
                <span>Enviar</span>
            </button> 
            {/* type="submit" value="Enviar" className='boton-submit mt-4'/> */}

        </form>
        <ToastContainer />
        {/* {successMessage && <p className="success-message">{successMessage}</p>} */}
        </div>
    </div>
);
};

export default ContactUs