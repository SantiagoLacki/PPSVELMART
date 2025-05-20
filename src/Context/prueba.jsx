import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import data from '.././Data';
import { Container, Row, Col } from 'react-bootstrap';

function ProductList() {
  const [randomProducts, setRandomProducts] = useState([]);
  const [randomShorts, setRandomShorts]= useState([]);
  const [randomCintos, setRandomCintos]= useState([]);

  useEffect(() => {
    const shuffledArray = [...data.items].sort(() => Math.random() - 0.5);
    const selectedProducts = shuffledArray.slice(0, 4);
    setRandomProducts(selectedProducts);
  }, []);

  useEffect(() => {
    const shuffledShorts = [...data.shorts].sort(() => Math.random() - 0.5);
    const selectedShorts = shuffledShorts.slice(0, 4);
    setRandomShorts(selectedShorts);
  }, []);

  useEffect(() => {
    const shuffledCintos = [...data.cintos].sort(() => Math.random() - 0.5);
    const selectedCintos = shuffledCintos.slice(0, 4);
    setRandomCintos(selectedCintos);
  }, []);

  return (
    <Container className='container container-prod py-10 px-0'>
        <div className='bg-secondary-subtle py-4 px-5 mt-5 rounded'>
          <h2 className='titulo-prod my-3 ps-3'>Nuestros trajes</h2>
          <Row>
            {randomProducts.map((product) => ( 
              <Col className="my-1 px-1" key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Card className='inicio-cards' bg="light">
                    <Card.Img  className="card-img" height={230} variant="top" src={product.image} />
                    <Card.Body className='body bg-white'>
                      <Card.Title className='card-title ms-2'>{product.title}</Card.Title>
                      <Card.Text className="category text-uppercase ms-2" style={{fontWeight: 'bold'}}>
                        {product.category}
                      </Card.Text>
                    </Card.Body>
                      <Card.Footer className="price bg-white d-flex justify-content-around" align="center" style={{fontWeight: 'bold'}}>
                        <a className='btn btn-secondary'>${product.price}</a>
                        <a href='*' className='btn btn-primary'>Añadir al Carrito</a>
                      </Card.Footer>
                  </Card>
              </Col>
            ))}
          </Row>
        </div>
      <div className='bg-secondary-subtle py-4 px-5 mt-5 rounded'>
        <h2 className='titulo-prod my-3 ps-3'> Camisas </h2>
        <Row>
          {randomShorts.map((shorts) => ( 
            <Col className='my-2 px-1' key={shorts.id} xs={12} sm={6} md={4} lg={3}>
              <Card className='inicio-cards' bg="light">
                <Card.Img className="card-img" height={230} variant="top" src={shorts.image} />
                <Card.Body className='body bg-white'>
                  <Card.Title className='card-title ps-2'>{shorts.title}</Card.Title>
                  <Card.Text className="category text-uppercase ms-2" style={{fontWeight: 'bold'}}>
                    {shorts.category}
                  </Card.Text>
                </Card.Body>
                  <Card.Footer className="price bg-white d-flex justify-content-around" align="center" style={{fontWeight: 'bold'}}>
                    <a className='btn btn-secondary pt-1'>${shorts.price}</a>
                    <a href='*' className='btn btn-primary'>Añadir al Carrito</a>
                  </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className='bg-secondary-subtle py-4 px-5 mt-5 rounded'>
        <h2 className='titulo-prod my-3 ps-3'> Cintos </h2>
        <Row>
          {randomCintos.map((cintos) => ( 
            <Col className='my-2 px-1' key={cintos.id} xs={12} sm={6} md={4} lg={3}>
              <Card className='inicio-cards' bg="light">
                <Card.Img className="card-img" height={230} variant="top" src={cintos.image} />
                <Card.Body className='body bg-white'>
                  <Card.Title className='card-title ps-2'>{cintos.title}</Card.Title>
                  <Card.Text className="category text-uppercase ms-2" style={{fontWeight: 'bold'}}>
                    {cintos.category}
                  </Card.Text>
                </Card.Body>
                  <Card.Footer className="price bg-white d-flex justify-content-around" align="center" style={{fontWeight: 'bold'}}>
                    <a className='btn btn-secondary pt-1'>${cintos.price}</a>
                    <a href='*' className='btn btn-primary'>Añadir al Carrito</a>
                  </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className='div-link d-flex justify-content-center mt-5'>
        <a className='btn btn-primary' href="/productos">Ver todos los Productos</a>
      </div>
    </Container>
  )
}

export default ProductList;