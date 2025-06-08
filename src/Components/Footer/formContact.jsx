import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};

        if (!formData.user_name.trim()) {
            errors.user_name = 'El nombre es obligatorio.';
        }

        if (!formData.user_email.trim()) {
            errors.user_email = 'El correo es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            errors.user_email = 'El correo no es válido.';
        }

        if (!formData.message.trim()) {
            errors.message = 'El mensaje es obligatorio.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error('Por favor completá todos los campos correctamente.');
            return;
        }

        emailjs.sendForm('service_bt12u0k', 'template_lfgx8ma', form.current, 'LhNhZm-e9mi7gab3M')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                setFormData({ user_name: '', user_email: '', message: '' });
                toast.success('Mensaje enviado con éxito!');
            },
                (error) => {
                    console.log(error.text);
                    toast.error('Hubo un error al enviar el mensaje.');
                });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-sm-4 p-md-2 rounded-md border border-secondary">
                <form className='formulario p-4' ref={form} onSubmit={sendEmail}>
                    <h4 className="text-2xl font-bold text-white">Formulario de contacto</h4>

                    <label className="texto-register-login text-white mt-4"> Nombre Completo: </label>
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                    {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}

                    <label className="texto-register-login text-white mt-3"> Correo Electrónico: </label>
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                    {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}

                    <label className="texto-register-login text-white mt-3"> Mensaje: </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 resize-none"
                        rows={5} 
                        maxLength={350}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                    <button className="bg-sky-500 text-white px-4 py-2 rounded-md my-2" type="submit">
                        <span>Enviar</span>
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ContactUs;
