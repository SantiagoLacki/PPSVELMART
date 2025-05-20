import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../Context/Dataprovider';
import Card from 'react-bootstrap/Card';


const Productoitem = ({
  id,
  title,
  price,
  image,
  category
}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="product">
      <Card bg="light" className="inicio-cards">
        <Card.Img className="card-img" height={230} variant="top" src={image} />
        <Card.Body className='body bg-white'>
          <Card.Title className='card-title ps-2'>{title}</Card.Title>
          <Card.Text className="category text-uppercase ps-2" style={{fontWeight: 'bold'}}>
            {category}
          </Card.Text>
          {/* <Card.Footer className="price bg-secondary text-white" align="center" style={{fontWeight: 'bold'}}>${price}</Card.Footer> */}
        </Card.Body>
        <Card.Footer className="price bg-white d-flex justify-content-around" align="center" style={{fontWeight: 'bold'}}>
          <a className='btn btn-secondary pt-1'>${price}</a>
          <a href='*' className='btn btn-primary'>Añadir al Carrito</a>
        </Card.Footer>
      </Card>
    </div>
    )
}
export default Productoitem;