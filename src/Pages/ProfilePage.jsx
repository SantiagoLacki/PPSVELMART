import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

function ProfilePage() {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const randomImageNumber = Math.floor(Math.random() * 100) + 1;
        setProfileImage(`https://randomuser.me/api/portraits/lego/${randomImageNumber}.jpg`);
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-white">Cargando perfil...</div>;
    }

    if (!user) {
        return <div className="flex justify-center items-center h-screen text-white">No se ha podido cargar la información del usuario.</div>;
    }

    return (
        <div className="bg-zinc-900 min-h-screen py-10">
            <div className="max-w-md mx-auto bg-zinc-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0 p-6 flex justify-center items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0 flex justify-center items-center">
                            <img className="w-full h-full object-cover" src={profileImage} alt="Imagen de perfil" />
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-col items-center md:items-start">
                            <BsPersonCircle className="text-white text-6xl mb-4" /> 
                            <div className="uppercase tracking-wide text-sm text-white font-semibold">Perfil de Usuario</div>
                            <h2 className="block mt-1 text-lg leading-tight font-medium text-white">{user.username}</h2>
                            <p className="mt-2 text-gray-400">Información detallada de tu cuenta.</p>
                        </div>

                        <div className="mt-6">
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2">
                                    Nombre de Usuario:
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-zinc-700"
                                    value={user.username}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2">
                                    Correo Electrónico:
                                </label>
                                <input
                                    type="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-zinc-700"
                                    value={user.email}
                                    readOnly
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-300 text-sm font-bold mb-2">
                                    Contraseña:
                                </label>
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-zinc-700"
                                    value="********"
                                    readOnly
                                />
                                <p className="text-gray-500 text-xs italic">Tu contraseña está protegida.</p>
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleLogout}
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
