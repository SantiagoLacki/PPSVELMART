import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductosLista from '../Components/Products/products';
import Inicio from "../Components/Home/inicio"
import Contacto from ".././Pages/contact"
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import { AuthProvider } from '../Context/AuthContext';
import ProfilePage from './ProfilePage';
import ProtectedRoute from '../ProtectedRoute'
import NotFound from './error404';
import PrivacyPolicy from './politicasPrivacidad';
import TermsAndConditions from './terminosCondiciones';

const Paginas = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/productos" element={<ProductosLista/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path="*" element={<NotFound />} /> {/* Esta ruta coincide con cualquier otra */}
                <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} /> {/* 👈 Define la ruta para la política de privacidad */}
                <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} /> {/* 👈 Agrega la ruta */}

                <Route element={<ProtectedRoute/>}>
                    <Route path='/profile' element={<ProfilePage/>}/>
                </Route>
            </Routes>            
        </AuthProvider>
    );
}

export default Paginas;