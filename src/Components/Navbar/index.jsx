import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidgetComponet from "../CartWidget/CartWidget";
import LogoComponent from "../Logo/LogoComponent";


const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">        
        <Link to="/">
            <NavbarBootstrap.Brand className="mx-4"><LogoComponent/> Global Bridge</NavbarBootstrap.Brand>
        </Link>
        <Nav className="ml-auto">
            <Link to="/">
                <Nav className="mx-3">Global Bridge</Nav>
            </Link>
            <Link to="/AimaraRedWines">
                <Nav className="mx-3">Aimara Red Wines</Nav>
            </Link>
            <Link to="/AimaraWhiteWines">
                <Nav className="mx-3">Aimara White Wines</Nav>
            </Link>
            <Link to="/Contact">
                <Nav className="mx-3">Contact</Nav>
            </Link>
        </Nav>
        <NavLink to="/Cart"><CartWidgetComponet /></NavLink>
    </NavbarBootstrap>
  </>
);

export default NavBar;
