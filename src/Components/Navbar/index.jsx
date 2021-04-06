import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartHover from "../CartHover/CartHover";
import LogoComponent from "../Logo/LogoComponent";

const NavBar = () => (
  <>
    <NavbarBootstrap collapseOnSelect expand="md" bg="light" variant="light">        
        <Link to="/" className="text-decoration-none">
            <NavbarBootstrap.Brand className="mx-5 px-5"><LogoComponent /> AIMARA</NavbarBootstrap.Brand>
        </Link>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse>       
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
            </Nav>
        </NavbarBootstrap.Collapse>
        <NavLink to="/Cart" className="pl-3 pr-1 text-muted"><CartHover /></NavLink>
    </NavbarBootstrap>
  </>
);

export default NavBar;
