import Carousel from 'react-bootstrap/Carousel';
import imagen from '../../Images/carr1.jpg';

function Carrusel() {
  return (
    <Carousel className='inicio-carrusel'>
      <Carousel.Item interval={2500}>
        <img className="img-carrusel d-block img-fluid w-100" src={imagen} alt="imagen carrusel cancha 1" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="img-carrusel d-block img-fluid w-100" src={imagen} alt="imagen carrusel cancha 2" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="img-carrusel d-block img-fluid w-100" src={imagen} alt="imagen carrusel cancha 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;



