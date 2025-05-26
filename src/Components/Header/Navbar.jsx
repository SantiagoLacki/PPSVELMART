import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import MarderLogo from "../../Images/MarderLogo.png";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  // Logs de depuración: Te ayudarán a ver el estado de isAuthenticated y user.username
  useEffect(() => {
    console.log("NavBar useEffect (detectó cambio):");
    console.log("  - isAuthenticated:", isAuthenticated);
    console.log("  - user:", user);
    console.log("  - user?.username:", user?.username);
  }, [isAuthenticated, user]); // Se ejecuta cuando isAuthenticated o user cambian

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Esta lógica decide qué mostrar en el título del NavDropdown.
  // Es crucial para que el nombre de usuario aparezca cuando debe y no parpadee.
  const profileDropdownTitleContent = (
    <div 
      className="d-flex align-items-center gap-1"
      style={{
        justifyContent: 'center', // Centra horizontalmente el icono y el texto
        width: '100%', // Asegura que el div ocupe todo el ancho para centrar correctamente
        // Considera agregar un min-width si los elementos "saltan" visualmente al cambiar el contenido
        // minWidth: '80px' 
      }}
    >
      <CgProfile size={26} /> 
      {/* Solo muestra el nombre de usuario si está autenticado Y el objeto user existe Y tiene un username */}
      {isAuthenticated && user?.username && (
        <span>{user.username}</span>
      )}
      {/* Si no está autenticado, o user.username no está disponible, este span no se renderiza. */}
    </div>
  );

  return (
    <>
      <Navbar expand="sm md lg" className="h-20 bg-secondary-subtle shadow-lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={MarderLogo} alt="logo" width="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand`} aria-labelledby={`offcanvasNavbarLabel-expand`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                <img src={MarderLogo} alt="logo" width="45" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
                <Nav.Link href="/" className="nav-link">Inicio</Nav.Link>
                <Nav.Link href="/productos" className="nav-link">Catalogo</Nav.Link>
                <Nav.Link href="/carrito"><FaCartPlus size={25} /></Nav.Link>

                <NavDropdown
                  title={profileDropdownTitleContent} // Usamos la variable definida arriba
                  id="logo-perfil-expansivo"
                >
                  {isAuthenticated ? (
                    <>
                      {/* Item del dropdown con el nombre de usuario y su icono */}
                      <NavDropdown.Item 
                        className="perfil-user"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center', // Centra el contenido horizontalmente dentro del item
                          gap: '0.25rem' 
                        }}
                      >
                        <CgProfile size={20} /> {user?.username || "Usuario"} 
                        {/* Aquí "Usuario" como fallback, por si el nombre de usuario no carga en el item */}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="*">Perfil</NavDropdown.Item>
                      <NavDropdown.Item onClick={handleLogout}>
                        Cerrar Sesión
                      </NavDropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavDropdown.Item href="/login">Iniciar Sesión</NavDropdown.Item>
                      <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </Nav>
              <form className="d-flex pt-2 pe-4" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <a href="*" className="btn btn-outline-secondary" type="submit">Buscar</a>
              </form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;