import React from 'react';
import { Container, Row, Col, Button, Image, ListGroup, Card } from 'react-bootstrap';
import { GoDash, GoPlus, GoTrash } from "react-icons/go";

const CarritoSimple = () => {
  return (
    <Container className="my-4">
      <h2 className="titulo-prod p-4 mb-3 text-center fw-bold text-decoration-underline underline-offset-8">TU CARRITO</h2>
      <Row className='d-flex justify-content-center bg-secondary-subtle p-lg-5 p-md-3 p-sm-3 rounded mx-0'>
        <Col sm={12} md={12} lg={12}>

          {/* Primer Producto */}
          <div className="product-item-container bg-white shadow-sm rounded mb-3">
            <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center p-3">
              <Col xs={12} md={2} className="text-center mb-3 mb-md-0 d-flex justify-content-center">
                <Image
                  src="https://ucarecdn.com/a280a6e4-cb84-4ed7-9796-f0ece6bd89f7/trajeGrisOscuro.jpeg"
                  alt="Traje Gris Oscuro"
                  fluid rounded className="p-2"
                  style={{ maxWidth: '120px', height: '140px', objectFit: 'cover' }}
                />
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <h5 className="mb-0 fw-bold">Dos Piezas - Gris</h5>
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <span className="text-black fw-bold">C/Unidad - $210.317,00</span>
              </Col>

              <Col xs={12} md={2} className="d-flex align-items-center justify-content-center mb-2 mb-md-0 me-md-2">
                <Button variant="outline-dark" size="sm" href='*' className="me-2">
                  <GoDash />
                </Button>
                <span className="mx-1 fw-bold">1</span>
                <Button variant="outline-dark" size="sm" href='*' className="ms-2">
                  <GoPlus />
                </Button>
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <span className="fw-bold fs-6 text-dark">
                  $210.317,00
                </span>
              </Col>

              <Col xs={12} md={1} className="text-center">
                <Button variant="outline-danger" size="md" href='*' className="mt-1">
                  <GoTrash />
                </Button>
              </Col>
            </div>
          </div>

          {/* Segundo Producto */}
          <div className="product-item-container bg-white shadow-sm rounded mb-3">
            <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center p-3">
              <Col xs={12} md={2} className="text-center mb-3 mb-md-0 d-flex justify-content-center">
                <Image
                  src="https://ucarecdn.com/8a4a9e5f-8d08-4b8b-a15d-7f721fdfe7e0/descarga.jpeg"
                  alt="Camisa blanca"
                  fluid rounded className="p-2"
                  style={{ maxWidth: '120px', height: '140px', objectFit: 'cover' }}
                />
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <h5 className="mb-0 fw-bold">Camisa - Blanca</h5>
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <span className="text-black fw-bold">C/Unidad - $120.900,00</span>
              </Col>

              <Col xs={12} md={2} className="d-flex align-items-center justify-content-center mb-2 mb-md-0 me-md-2">
                <Button variant="outline-dark" size="sm" href='*' className="me-2">
                  <GoDash />
                </Button>
                <span className="mx-1 fw-bold">1</span>
                <Button variant="outline-dark" size="sm" href='*' className="ms-2">
                  <GoPlus />
                </Button>
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <span className="fw-bold fs-6 text-dark">
                  $120.900,00
                </span>
              </Col>

              <Col xs={12} md={1} className="text-center">
                <Button variant="outline-danger" size="md" href='*' className="mt-1">
                  <GoTrash />
                </Button>
              </Col>
            </div>
          </div>

          {/* Tercer Producto */}
          <div className="product-item-container bg-white shadow-sm rounded mb-3">
            <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center p-3">
              <Col xs={12} md={2} className="text-center mb-3 mb-md-0 d-flex justify-content-center">
                <Image
                  src="https://ucarecdn.com/eb4753f3-b6d2-44c4-aaab-c93b3a36d042/LINDENMANNV1000397_010FEKETE.jpeg"
                  alt="Traje Gris Oscuro"
                  fluid rounded className="p-2"
                  style={{ maxWidth: '120px', height: '140px', objectFit: 'cover' }}
                />
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <h5 className="mb-0 fw-bold">Cinto - Classic</h5>
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <span className="text-black fw-bold">C/Unidad - $25.999,00</span>
              </Col>

              <Col xs={12} md={2} className="d-flex align-items-center justify-content-center mb-2 mb-md-0 me-md-2">
                <Button variant="outline-dark" size="sm" href='*' className="me-2">
                  <GoDash />
                </Button>
                <span className="mx-1 fw-bold">1</span>
                <Button variant="outline-dark" size="sm" href='*' className="ms-2">
                  <GoPlus />
                </Button>
              </Col>

              <Col xs={12} md={2} className="text-center mb-2 mb-md-0 me-md-2">
                <span className="fw-bold fs-6 text-dark">
                  $51.998,00
                </span>
              </Col>

              <Col xs={12} md={1} className="text-center">
                <Button variant="outline-danger" size="md" href='*' className="mt-1">
                  <GoTrash />
                </Button>
              </Col>
            </div>
          </div>
        </Col>

        {/* Columna para el resumen del pedido */}
        <Col sm={12} lg={6} className="mt-4 mt-lg-0 d-flex justify-content-center">
          <Card className="p-3 shadow-sm bg-light w-100" style={{ maxWidth: '400px' }}>
            <Card.Title as="h4" className="mb-3 py-2">Resumen del Pedido:</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent">
                <span>Subtotal:</span>
                <span className="fw-bold fs-5 text-dark">$383.215,00</span>
              </ListGroup.Item>
            </ListGroup>
            <Button variant="success" size="lg" href='*' className="w-100 mt-4">
              Finalizar Compra
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarritoSimple;
