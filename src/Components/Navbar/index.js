import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";


const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">
        <NavbarBootstrap.Brand href="/">Global Bridge</NavbarBootstrap.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mx-3" href="/GlobalBridge">Global Bridge</Nav.Link>
          <Nav.Link className="mx-3" href="/Aimara">Aimara</Nav.Link>
          <Nav.Link className="mx-3" href="/CleverCat">Clever Cat</Nav.Link>
          <Nav.Link className="mx-3" href="/Contact">Contact</Nav.Link>

        </Nav> 
    </NavbarBootstrap>
  </>
);

export default NavBar;
