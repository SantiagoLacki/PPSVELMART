import React from 'react';
import { Link } from 'react-router-dom';
import error404Image from '../Images/404-error.jpg'; // Importa tu imagen

function NotFound() {
  return (
    <div className="not-found-container">
      {/* <img
        src={error404Image}
        alt="Error 404 - Página no encontrada"
        className="not-found-image"
      /> */}
      <div className="not-found-content">
        <h1 className="not-found-title">¡Oops!</h1>
        <p className="not-found-message">La página que estás buscando no se pudo encontrar.</p>
        <Link to="/" className="not-found-button">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;