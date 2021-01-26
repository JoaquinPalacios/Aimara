import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import CartWidgetComponent from "../CartWidget/CartWidget";


const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">
        
        <NavbarBootstrap.Brand href="/" className="mx-4"><CartWidgetComponent/> Global Bridge</NavbarBootstrap.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mx-3" href="/">Global Bridge</Nav.Link>
          <Nav.Link className="mx-3" href="/Aimara">Aimara</Nav.Link>
          <Nav.Link className="mx-3" href="/CleverCat">Clever Cat</Nav.Link>
          <Nav.Link className="mx-3" href="/Contact">Contact</Nav.Link>

        </Nav> 
    </NavbarBootstrap>
  </>
);

export default NavBar;
