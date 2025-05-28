import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProductosLista from '../Components/Products/products';
import Inicio from "../Components/Home/inicio"
import Contacto from ".././Pages/contact"
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import ProtectedRoute from '../ProtectedRoute'
import NotFound from './error404';
import PrivacyPolicy from './politicasPrivacidad';
import TermsAndConditions from './terminosCondiciones';
import SobreNosotros from './aboutUs';
import Carrito from './pageCarrito';

const Paginas = () => {
    return (

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/productos" element={<ProductosLista/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path="*" element={<NotFound />} />
                <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} />
                <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
                <Route path="/nosotros" element={<SobreNosotros />} />
                {/* Rutas protegidas */}
                <Route element={<ProtectedRoute/>}>
                    <Route path='/perfil' element={<ProfilePage/>}/>
                </Route>
            </Routes>
    );
}

export default Paginas;
