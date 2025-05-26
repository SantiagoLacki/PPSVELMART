import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer p-4">
      <Row lg={12}>
        <Col
          className="social d-flex flex-column align-items-center justify-content-center"
          md={4}
        >
          <div className="d-flex flex-column align-items-center">
            <h5 className="mb-2">Nuestras Redes</h5>
            <ul className="d-flex justify-content-center align-items-center">
              <li>
                <Link to="https://www.facebook.com/share/1FCTGoKT14/?mibextid=wwXIfr" target="_blank">
                  <AiFillFacebook className="me-2" size={23} />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/marderhombres/" target="_blank">
                  <AiFillInstagram className="" size={23} />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h5 className="mb-2">Legales</h5>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>
                <Link to="/politicas-de-privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h5 className="mb-2">Soporte Técnico</h5>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>
                <Link to="/Contacto">Contactanos</Link>
              </li>
              <li>
                <Link to="/Nosotros">Sobre Nosotros</Link>
              </li>
              {/* <li>
                <Link to="/faq">Preguntas Frecuentes</Link>
              </li> */}
            </ul>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;