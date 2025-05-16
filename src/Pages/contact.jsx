import React from "react";
import ContactUs from "../Components/Footer/formContact";
import imgContacto from "../Images/descarga.jpeg";

const Contacto = () => {    
  
  return (
    <div className="container-contact">
      <div className="container text-center">
        <div className="pt-4">
          <h1 className="titulo-prod my-3 text-center mb-0">Contactanos</h1>
          <p className="subtitulo-contacto">Estamos aquí para ayudarte.</p>
        </div>
        <div className="contenedor-register-login pt-5 pb-4 ">
          <div className="row bg-dark-subtle rounded-md py-4 mx-4 h-auto justify-center">
            <div className="col-lg-5 d-none d-lg-flex justify-end mt-3 p-0">
              {/* <img src="https://ucarecdn.com/45440982-9286-41bc-a2d1-79705a948a23/-/preview/671x500/" alt="" className="contact-img rounded-md"/> */}
              <img src={imgContacto} alt="imagen contacto" className="contact-img"/>
            </div>
            <div className="col-sm-12 col-lg-6 pt-5 mb-4" >
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;