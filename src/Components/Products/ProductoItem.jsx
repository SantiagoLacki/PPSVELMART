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
    <div className="producto bg-white">
      <Card bg="light" style={{ width: '15.9rem'}} className="card mb-2" border="white">
        <Card.Img height={230} variant="top" src={image} />
        <Card.Body className='body bg-white'>
          <Card.Title className='card-title ms-2'>{title}</Card.Title>
          <Card.Text className="category text-uppercase ms-2" style={{fontWeight: 'bold'}}>
            {category}
          </Card.Text>
          <Card.Footer className="price bg-secondary text-white" align="center" style={{fontWeight: 'bold'}}>${price}</Card.Footer>
        </Card.Body>
      </Card>
    </div>
    )
}
export default Productoitem;