import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
// import velmart from "../../Images/velmart.png";
import MarderLogo from "../../Images/MarderLogo.png";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";

function NavBar() {
   // const { isAuthenticated, logout, user } = useAuth();
   // const [authState, setAuthState] = useState(isAuthenticated);

   // useEffect(() => {
   //    setAuthState(isAuthenticated);
   // }, [isAuthenticated]);
   const { isAuthenticated, logout, user } = useAuth();

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
                        <Nav.Link href="/productos" className="nav-link">Productos</Nav.Link>
                        {/* <Nav.Link href="#"><FaCartPlus size={25} /></Nav.Link> */}
                        <Nav.Link href="*"><FaCartPlus size={25} /></Nav.Link>

                        <NavDropdown
                           title={
                              /*authState*/ isAuthenticated ? (
                                 <>
                                    <CgProfile size={26} /> {user?.username || "Usuario"}
                                 </>
                              ) : (
                                 <CgProfile size={26} />
                              )
                           }
                           id="logo-perfil-expansivo"
                        >
                           {/*authState*/ isAuthenticated ? (
                              <>
                                 <NavDropdown.Item className="perfil-user">{user?.username || "Usuario"}</NavDropdown.Item>
                                 <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                                 <NavDropdown.Item
                                    onClick={() => {
                                       logout();
                                       // setAuthState(false); // 🔹 Asegurar que el estado cambia sin refrescar la página
                                    }}
                                 >
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








// import React, {useContext} from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import velmart from "../../Images/velmart.png";
// import { CgProfile } from "react-icons/cg";
// import { FaCartPlus } from "react-icons/fa";
// import {DataContext} from "../../Context/Dataprovider";
// import {useAuth} from "../../Context/AuthContext";


// function NavBar() {
//    const {isAuthenticated, logout, user} = useAuth();

//    const value = useContext(DataContext);
//    const [menu,setMenu] = value.menu;
//    const [carrito] = value.carrito;
//    const toogleMenu = () => {
//       setMenu(!menu);
//    }
//    return (
//       <>
//          <Navbar expand="sm md lg" className="h-20 bg-body-tertiary shadow-lg">
//             <Container fluid>
//                <Navbar.Brand href="/"><img src={velmart} alt="logo" width="70" /></Navbar.Brand>
//                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//                <Navbar.Offcanvas
//                   id={`offcanvasNavbar-expand`}
//                   aria-labelledby={`offcanvasNavbarLabel-expand`}
//                   placement="end"
//                >
//                   <Offcanvas.Header closeButton>
//                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//                      <img src={velmart} alt="logo" width="45" />
//                      </Offcanvas.Title>
//                   </Offcanvas.Header>
//                   <Offcanvas.Body>
//                      <Nav className="justify-content-end flex-grow-1 pe-5">
//                         <Nav.Link href="/" className='nav-link'>Inicio</Nav.Link>
//                         <Nav.Link href="/productos" className='nav-link'>Productos</Nav.Link>
//                         <Nav.Link href="" onClick={toogleMenu}><FaCartPlus size={25}/></Nav.Link>
                        
//                         <NavDropdown
//                            title= {<CgProfile size={26}/>}
//                            id="logo-perfil-expansivo"
//                         >
//                            {isAuthenticated ? (
//                               <>
//                                  <NavDropdown.Item className='perfil-user' >{user.username}</NavDropdown.Item>
//                                  <NavDropdown.Item href="/productos" onClick={() => {
//                                     logout();
//                                     }} >Cerrar Sesion</NavDropdown.Item>
//                               </>
//                            ) : (
//                               <>
//                                  <NavDropdown.Item href="/login">Iniciar Sesion</NavDropdown.Item>
//                                  <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
//                               </>
//                            )}
                        
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="/perfil">
//                            Editar Perfil
//                         </NavDropdown.Item>
//                         </NavDropdown>
//                      </Nav>
//                   </Offcanvas.Body>
//                </Navbar.Offcanvas>
//             </Container>
//          </Navbar>
//       </>
//    );
// }

// export default NavBar;