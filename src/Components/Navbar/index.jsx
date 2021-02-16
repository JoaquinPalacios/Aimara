import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidgetComponet from "../CartWidget/CartWidget";
import LogoComponent from "../Logo/LogoComponent";

const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">        
        <Link to="/" className="text-decoration-none">
            <NavbarBootstrap.Brand className="mx-5 px-5"><LogoComponent /> AIMARA</NavbarBootstrap.Brand>
        </Link>
        <Nav className="ml-auto">
            <Link to="/" className="text-decoration-none text-dark">
                <Nav className="mx-3">Aimara</Nav>
            </Link>
            <Link to="/category/red" className="text-decoration-none text-dark">
                <Nav className="mx-3">Red Wines</Nav>
            </Link>
            <Link to="/category/white" className="text-decoration-none text-dark">
                <Nav className="mx-3">White Wines</Nav>
            </Link>
            <Link to="/Contact" className="text-decoration-none text-dark">
                <Nav className="mx-3">Contact</Nav>
            </Link>
        </Nav>
        <NavLink to="/Cart" className="text-muted"><CartWidgetComponet /></NavLink>
    </NavbarBootstrap>
  </>
);

export default NavBar;
