import Carousel from 'react-bootstrap/Carousel';
// import imagen from '../../Images/carr1.jpg';
import imgcarrousel1 from '../../Images/111carousel.jpg';
import imgcarrousel2 from '../../Images/222carousel.jpg';
import imgcarrousel3 from '../../Images/333carousel.jpg';

function Carrusel() {
  return (
    <Carousel className='inicio-carrusel'>
      <Carousel.Item interval={2500}>
        <img className="img-carrusel d-block img-fluid w-100" src={imgcarrousel1} alt="imagen carrusel cancha 1" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="img-carrusel d-block img-fluid w-100" src={imgcarrousel2} alt="imagen carrusel cancha 2" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="img-carrusel d-block img-fluid w-100" src={imgcarrousel3} alt="imagen carrusel cancha 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;



