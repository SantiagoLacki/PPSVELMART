import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import data from '.././Data';
import { Container, Row, Col } from 'react-bootstrap';

function ProductList() {
  const [randomProducts, setRandomProducts] = useState([]);
  const [randomShorts, setRandomShorts]= useState([]);

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

  return (
    <Container className='container container-prod'>
      <h2 className='titulo-prod mt-4'> CAMISETAS </h2>
      <Row>
        {randomProducts.map((product) => ( 
          <Col className='mt-4 mb-3' key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className='inicio-cards' bg="light">
              <Card.Img height={230} variant="top" src={product.image} />
              <Card.Body className='body bg-white'>
                <Card.Title className='card-title ms-2'>{product.title}</Card.Title>
                <Card.Text className="category text-uppercase ms-2" style={{fontWeight: 'bold'}}>
                  {product.category}
                </Card.Text>
                <Card.Footer className="price bg-secondary text-white" align="center" style={{fontWeight: 'bold'}}>${product.price}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className='titulo-prod mt-4'> SHORTS </h2>
      <Row>
        {randomShorts.map((shorts) => ( 
          <Col className='mt-4 mb-3' key={shorts.id} xs={12} sm={6} md={4} lg={3}>
            <Card className='inicio-cards' bg="light">
              <Card.Img height={230} variant="top" src={shorts.image} />
              <Card.Body className='body bg-white'>
                <Card.Title className='card-title ms-2'>{shorts.title}</Card.Title>
                <Card.Text className="category text-uppercase ms-2" style={{fontWeight: 'bold'}}>
                  {shorts.category}
                </Card.Text>
                <Card.Footer className="price bg-secondary text-white" align="center" style={{fontWeight: 'bold'}}>${shorts.price}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='div-link d-flex justify-content-end'>
        <a className='link-a' href="/productos">VER MAS ...</a>
      </div>
    </Container>
  )
}

export default ProductList;