import Carousel from 'react-bootstrap/Carousel';
import imagen from '../../Images/carr1.jpg';

function Carrusel() {
  return (
    <Carousel className='inicio-carrusel'>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={imagen} alt="img1" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={imagen} alt="img2" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={imagen} alt="img3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;



