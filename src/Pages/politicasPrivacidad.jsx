import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Importa el componente Link

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content bg-light">
        <h1>Política de Privacidad</h1>
        <p className="last-updated">Última actualización: 30 Abril 2025</p>

        <h2>1. Introducción</h2>
        <p>Bienvenido a Velmart (en adelante, "Velmart SRL", "nosotros", "nuestro" o "nos"). En Velmart SRL, nos tomamos muy en serio tu privacidad y nos comprometemos a proteger tu información personal. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos tu información cuando visitas nuestro sitio web [Tu Dominio], utilizas nuestros servicios y compras nuestros productos de ropa deportiva.</p>

        <h2>2. Información que Recopilamos</h2>
        <p>Recopilamos diferentes tipos de información personal para poder ofrecerte nuestros productos y servicios de manera eficiente y personalizada. Esta información incluye:</p>
        <ul>
          <li><strong>Información de Identificación Personal (PII):</strong> Nombre, dirección de correo electrónico, dirección postal, número de teléfono, fecha de nacimiento, sexo.</li>
          <li><strong>Información de Cuenta:</strong> Nombre de usuario, contraseña (de forma encriptada), historial de pedidos, preferencias de compra.</li>
          <li><strong>Información de Pago:</strong> Detalles de la tarjeta de crédito o débito, información de PayPal u otros métodos de pago (esta información se procesa a través de pasarelas de pago seguras y no se almacena directamente en nuestros servidores).</li>
          <li><strong>Información Demográfica:</strong> Edad, intereses relacionados con el deporte y la actividad física.</li>
          <li><strong>Información Técnica:</strong> Dirección IP, tipo de navegador, sistema operativo, datos de registro del servidor, información del dispositivo móvil.</li>
          <li><strong>Información de Uso:</strong> Páginas visitadas, productos vistos, tiempo de navegación, enlaces en los que haces clic.</li>
          <li><strong>Comunicaciones:</strong> Registros de nuestras comunicaciones contigo (correos electrónicos, chats, llamadas).</li>
        </ul>

        <h2>3. Cómo Utilizamos tu Información</h2>
        <p>Utilizamos tu información personal para diversos fines, incluyendo:</p>
        <ul>
          <li>Procesar y gestionar tus pedidos, incluyendo el envío y la facturación.</li>
          <li>Crear y administrar tu cuenta de usuario.</li>
          <li>Personalizar tu experiencia de compra, mostrándote productos y ofertas relevantes.</li>
          <li>Enviarte comunicaciones de marketing y promocionales (con tu consentimiento, cuando sea necesario).</li>
          <li>Mejorar nuestro sitio web, productos y servicios.</li>
          <li>Responder a tus consultas y brindarte soporte al cliente.</li>
          <li>Realizar análisis y estudios de mercado.</li>
          <li>Detectar y prevenir fraudes y actividades ilegales.</li>
          <li>Cumplir con nuestras obligaciones legales y regulatorias.</li>
        </ul>

        <h2>4. Compartir tu Información</h2>
        <p>Podemos compartir tu información personal con terceros en las siguientes circunstancias:</p>
        <ul>
          <li><strong>Proveedores de Servicios:</strong> Empresas que nos ayudan con operaciones como procesamiento de pagos, envío, marketing, análisis de datos, alojamiento web y servicio al cliente. Estos proveedores tienen acceso a tu información solo para realizar sus tareas en nuestro nombre y están obligados a protegerla.</li>
          <li><strong>Socios Comerciales:</strong> En algunos casos, podemos ofrecer servicios o promociones conjuntas con socios comerciales. Si participas en estas ofertas, podemos compartir tu información con esos socios.</li>
          <li><strong>Cumplimiento Legal:</strong> Podemos divulgar tu información si así lo exige la ley, una orden judicial o un proceso legal.</li>
          <li><strong>Transferencias de Negocio:</strong> En caso de una fusión, adquisición o venta de todos o parte de nuestros activos, tu información podría ser transferida a la entidad adquirente.</li>
          <li><strong>Con tu Consentimiento:</strong> Podemos compartir tu información con terceros si nos has dado tu consentimiento explícito para hacerlo.</li>
        </ul>
        <p>No vendemos tu información personal a terceros.</p>

        <h2>5. Seguridad de tu Información</h2>
        <p>Implementamos medidas de seguridad razonables y apropiadas para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Estas medidas incluyen el uso de protocolos de cifrado (como SSL), firewalls, controles de acceso seguro y revisiones periódicas de nuestras prácticas de seguridad. Sin embargo, debes entender que ninguna transmisión de datos a través de Internet o sistema de almacenamiento electrónico es completamente segura.</p>

        <h2>6. Tus Derechos de Privacidad</h2>
        <p>Dependiendo de tu ubicación geográfica, puedes tener ciertos derechos con respecto a tu información personal, incluyendo:</p>
        <ul>
          <li>El derecho a acceder a la información personal que tenemos sobre ti.</li>
          <li>El derecho a rectificar información personal inexacta o incompleta.</li>
          <li>El derecho a solicitar la eliminación de tu información personal (en ciertas circunstancias).</li>
          <li>El derecho a oponerte al procesamiento de tu información personal para ciertos fines (como el marketing directo).</li>
          <li>El derecho a restringir el procesamiento de tu información personal (en ciertas circunstancias).</li>
          <li>El derecho a la portabilidad de tus datos.</li>
          <li>El derecho a retirar tu consentimiento en cualquier momento (cuando el procesamiento se basa en el consentimiento).</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, por favor contáctanos a través de los datos proporcionados en la sección "Contacto" de esta Política de Privacidad.</p>

        <h2>7. Cookies y Tecnologías Similares</h2>
        <p>Utilizamos cookies y otras tecnologías de seguimiento (como píxeles y balizas web) para mejorar la funcionalidad de nuestro sitio web, analizar el comportamiento del usuario y personalizar tu experiencia. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.</p>
        <p>Para obtener más información sobre cómo utilizamos las cookies, por favor consulta nuestra <Link to="/politica-de-cookies" target="_blank" rel="noopener noreferrer">Política de Cookies</Link>.</p>

        <h2>8. Enlaces a Otros Sitios Web</h2>
        <p>Nuestro sitio web puede contener enlaces a otros sitios web que no son operados por nosotros. No somos responsables del contenido o las prácticas de privacidad de estos sitios web de terceros. Te recomendamos revisar las políticas de privacidad de cada sitio que visites.</p>

        <h2>9. Privacidad de los Niños</h2>
        <p>Nuestro sitio web y servicios no están dirigidos a niños menores de edad. No recopilamos conscientemente información personal de niños. Si descubrimos que hemos recopilado información personal de un niño sin el consentimiento verificable de los padres, tomaremos medidas para eliminar esa información de nuestros registros lo antes posible.</p>

        <h2>10. Cambios en esta Política de Privacidad</h2>
        <p>Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de información. Publicaremos la versión actualizada en nuestro sitio web y actualizaremos la "Fecha de última actualización" en la parte superior de esta página. Te recomendamos revisar esta Política de Privacidad con regularidad para estar informado sobre cómo protegemos tu información.</p>

        <h2>11. Contacto</h2>
        <p>Si tienes alguna pregunta, comentario o inquietud sobre esta Política de Privacidad o nuestras prácticas de privacidad, por favor contáctanos a través de:</p>
        <ul>
          <li><strong>Correo Electrónico:</strong> Velmartsrl@gmail.com</li>
          <li><strong>Dirección Postal:</strong> Rivadavia 213, San Miguel de Tucuman - Tucuman</li>
          <li><strong>Formulario de Contacto:</strong> <a href="/contacto">Formulario de Contacto</a></li>
        </ul>

        <p>Gracias por confiar en Velmart SRL.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;