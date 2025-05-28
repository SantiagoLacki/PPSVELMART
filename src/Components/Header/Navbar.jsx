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

  useEffect(() => {
    console.log("NavBar useEffect (detectó cambio):");
    console.log("  - isAuthenticated:", isAuthenticated);
    console.log("  - user:", user);
    console.log("  - user?.username:", user?.username);
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const profileDropdownTitleContent = (
    <div 
      className="d-flex align-items-center gap-1"
      style={{
        width: '100%',
      }}
    >
      <CgProfile size={26} /> 
      {isAuthenticated && user?.username && (
        <span>{user.username}</span>
      )}
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
                  title={profileDropdownTitleContent} 
                  id="logo-perfil-expansivo"
                >
                  {isAuthenticated ? (
                    <>
                      <NavDropdown.Item 
                        className="perfil-user"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center', 
                          gap: '0.25rem' 
                        }}
                      >
                        <CgProfile size={20} /> {user?.username || "Usuario"} 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
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