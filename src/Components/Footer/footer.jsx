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
            <h5 >Redes Sociales</h5>
            <ul className="d-flex justify-content-center align-items-center">
              <li>
                <Link to="/github">
                  <AiFillTwitterCircle className="" size={23} />
                </Link>
              </li>
              <li>
                <Link to="/twitter">
                  <AiFillFacebook className="mx-2" size={23} />
                </Link>
              </li>
              <li>
                <Link to="/instagram">
                  <AiFillInstagram className="" size={23} />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h5>Legales</h5>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>
                <Link to="/politica-de-privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h5>Soporte Técnico</h5>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>
                <Link to="/Contacto">Contáctanos</Link>
              </li>
              <li>
                <Link to="/Nosotros">Nosotros</Link>
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