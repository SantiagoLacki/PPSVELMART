import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
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
