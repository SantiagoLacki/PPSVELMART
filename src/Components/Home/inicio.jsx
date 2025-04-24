import React from 'react';
import Portada from "../../Images/images-_5_.jpg";
// import {Link} from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Carrusel from "../../Components/Home/carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiComponente from "../../Context/prueba"

const Inicio = () => {
  return (
    <div className="inicio-container w-100 h-auto">
      <Row className='m-0'>
        <Col sm={12} md={12} lg={12} className='p-0'>
          <Carrusel/>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <MiComponente/>
        </Col>
      </Row>
    </div>
  )
}

export default Inicio;