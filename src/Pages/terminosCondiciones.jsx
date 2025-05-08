import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <div className="terms-content bg-light">
        <h1>Términos y Condiciones</h1>
        <p className="last-updated">Última actualización: 30 Abril 2025</p>

        <h2>1. Aceptación de los Términos</h2>
        <p>Bienvenido a Velmart (en adelante, "Velmart SRL", "nosotros" o "nuestro"). Al acceder y utilizar nuestro sitio web https//velmart.com y comprar nuestros productos de ropa deportiva, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestro sitio web ni nuestros servicios.</p>

        <h2>2. Descripción de los Servicios</h2>
        <p>Velmart SRL es un e-commerce que ofrece la venta de ropa deportiva y accesorios relacionados. Describimos nuestros productos con la mayor precisión posible, pero no garantizamos que las descripciones, imágenes u otra información del sitio web sean completamente exactas, completas o libres de errores.</p>

        <h2>3. Elegibilidad</h2>
        <p>Para realizar compras en nuestro sitio web, debes tener al menos 18 años o contar con el consentimiento de tus padres o tutores legales. Al realizar un pedido, declaras y garantizas que cumples con este requisito de elegibilidad.</p>

        <h2>4. Cuenta de Usuario</h2>
        <p>Puedes optar por crear una cuenta de usuario en nuestro sitio web. Eres responsable de mantener la confidencialidad de tu nombre de usuario y contraseña y de todas las actividades que ocurran bajo tu cuenta. Aceptas notificarnos de inmediato cualquier uso no autorizado de tu cuenta.</p>

        <h2>5. Proceso de Compra</h2>
        <p>Para realizar una compra, debes seguir los pasos indicados en nuestro sitio web. Una vez que realices un pedido, te enviaremos una confirmación por correo electrónico. Esta confirmación no constituye la aceptación de tu pedido, sino solo un acuse de recibo. Nos reservamos el derecho de rechazar o cancelar cualquier pedido por cualquier motivo.</p>

        <h2>6. Precios y Pago</h2>
        <p>Los precios de nuestros productos se muestran en Pesos Argentinos e incluyen los impuestos aplicables. Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso. Aceptamos los métodos de pago indicados en nuestro sitio web. Al realizar un pedido, nos autorizas a cargar el importe total a tu método de pago.</p>

        <h2>7. Envío y Entrega</h2>
        <p>Los plazos y costos de envío se indican en nuestro sitio web. Haremos todo lo posible para entregar tu pedido dentro del plazo estimado, pero no somos responsables de los retrasos causados por circunstancias fuera de nuestro control. La propiedad y el riesgo de pérdida de los productos te serán transferidos al momento de la entrega.</p>

        <h2>8. Devoluciones y Cambios</h2>
        <p>Aceptamos devoluciones y cambios de productos según nuestra <Link to="/politica-de-devoluciones" target="_blank" rel="noopener noreferrer">Política de Devoluciones</Link>, que forma parte integral de estos Términos y Condiciones.</p>

        <h2>9. Propiedad Intelectual</h2>
        <p>Todo el contenido de nuestro sitio web, incluyendo textos, imágenes, logotipos y marcas, está protegido por derechos de propiedad intelectual. No puedes utilizar, copiar, modificar o distribuir este contenido sin nuestro consentimiento previo por escrito.</p>

        <h2>10. Limitación de Responsabilidad</h2>
        <p>En la máxima medida permitida por la ley, no seremos responsables de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso de nuestro sitio web o de la compra de nuestros productos. Nuestra responsabilidad se limita al importe total pagado por el producto o servicio en cuestión.</p>

        <h2>11. Ley Aplicable y Jurisdicción</h2>
        <p>Estos Términos y Condiciones se rigen por las leyes de Argentina. Cualquier controversia que surja en relación con estos términos se resolverá en los tribunales competentes de Tucuman - San Miguel de Tucuman.</p>

        <h2>12. Modificaciones a estos Términos</h2>
        <p>Podemos modificar estos Términos y Condiciones en cualquier momento. Publicaremos la versión actualizada en nuestro sitio web y actualizaremos la "Fecha de última actualización" en la parte superior de esta página. Te recomendamos revisar estos términos con regularidad.</p>

        <h2>13. Contacto</h2>
        <p>Si tienes alguna pregunta, comentario o inquietud sobre estos Términos y Condiciones, por favor contáctanos a través de:</p>
        <ul>
          <li><strong>Correo Electrónico:</strong> velmartsrl@gmail.com </li>
          <li><strong>Dirección Postal:</strong> Rivadavia 213, San Miguel de Tucuman - Tucuman </li>
          <li><strong>Formulario de Contacto:</strong> <a href="/contacto">Formulario de Contacto</a> </li>
        </ul>

        <p>Gracias por comprar en Velmart SRL.</p>
      </div>
    </div>
  );
}

export default TermsAndConditions;