import React, {useState, useContext} from "react";
import velmart from "../../Images/velmart.png";
import {Link} from "react-router-dom";
import {DataContext} from "../../Context/Dataprovider";
import { CgProfile } from "react-icons/cg";
import { Button, Collapse } from "react-bootstrap";
import DropdownMenu from "../../Components/Header/dropDownMenu"
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito] = value.carrito
    const [open, setOpen] = useState(false);
    const toogleMenu = () => {
        setMenu(!menu);
    }

    return(
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <Link to="/">
                <div className="logo">
                    <img src={velmart} alt="logo" width="100" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <FaCartPlus size={40}/>
                <span className="item__total">{carrito.length}</span>
            </div>
            <div className="user">
                <CgProfile size={40}/>
            </div>
            {/* <div className="container">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="navbarNav"
                    aria-expanded={open}
                    className="btn btn-primary"
                    data-bs-toggle="collapse" 
                    data-bs-target="#menuCollapse"
                >
                    <CgProfile size={30}/>
                </Button>
                <Collapse in={open} >
                    <div id="menuCollapse" class="collapse collapse-vertical position-fixed top-0">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to="/profil" >Perfil</Link>
                            </li>
                            <li className="list-group-item">
                            <Link to="/login" >Ingresar</Link>
                            </li>
                            <li className="list-group-item">
                            <Link to="/register" >Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </div> */}
        </header>
    )
}

export default Header;