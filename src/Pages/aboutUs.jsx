import React from 'react';
import { Link } from 'react-router-dom';
import nosotros1 from '../Images/nosotros1.jpg';
import nosotros2 from '../Images/nosotros2.jpg';
import nosotros3 from '../Images/nosotros3.jpg';

function AboutUs() {
  return (
    <div className="bg-dark py-16">
      <div className="container mx-auto p-5 bg-secondary-subtle rounded">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sobre Nosotros: Marder-Hombres</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            En Marder-Hombres, creemos que la elegancia y el estilo atemporal son la base de la confianza masculina. Somos un e-commerce apasionado por ofrecer una cuidada selección de ropa formal, servicios de sastrería a medida y accesorios de distinción para el hombre moderno.
          </p>
          <p className="text-gray-600">
            Nuestra misión es ayudarte a expresar tu personalidad y alcanzar tu máximo potencial a través de prendas de vestir que reflejen sofisticación y calidad.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={nosotros1} alt="Sastrería a Medida" className="w-full h-64 object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestra Pasión por la Sastrería</h3>
            <p className="text-gray-700 leading-relaxed">
              La sastrería es el corazón de nuestra propuesta. Ofrecemos un servicio personalizado donde la precisión y la atención al detalle se unen para crear prendas que se ajustan a ti como una segunda piel. Desde trajes impecables hasta camisas a medida, nuestros expertos te guiarán en cada paso para asegurar un resultado excepcional.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Elegancia en Cada Detalle: Ropa Formal y Accesorios</h3>
            <p className="text-gray-700 leading-relaxed">
              Nuestra colección de ropa formal cuidadosamente seleccionada abarca desde clásicos imprescindibles hasta las últimas tendencias. Complementa tu estilo con nuestros accesorios de alta calidad, diseñados para añadir ese toque final de distinción a cualquier atuendo. Corbatas, pañuelos, cinturones, y más, cada pieza ha sido elegida por su calidad y diseño.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <img src={nosotros2} alt="Colección de Ropa Formal" className="w-full h-64 object-cover" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={nosotros3} alt="Accesorios de Distinción" className="w-full h-64 object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso con la Calidad y la Experiencia del Cliente</h3>
            <p className="text-gray-700 leading-relaxed">
              En Marder-Hombres, la calidad es nuestra prioridad. Trabajamos con materiales de primera y artesanos expertos para ofrecerte prendas duraderas y con un acabado impecable. Además, nos esforzamos por brindarte una experiencia de compra online excepcional, desde la navegación intuitiva hasta un servicio de atención al cliente atento y personalizado.
            </p>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-700 mb-5">
            Descubre la elegancia que define a Marder-Hombres.
          </p>
          <Link to="/productos" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
            Ver Colección
          </Link>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
