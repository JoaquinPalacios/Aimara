import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import CartWidgetComponet from "../CartWidget/CartWidget";
import LogoComponent from "../Logo/LogoComponent";


const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">
        
        <NavbarBootstrap.Brand href="/" className="mx-4"><LogoComponent/> Global Bridge</NavbarBootstrap.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mx-3" href="/">Global Bridge</Nav.Link>
          <Nav.Link className="mx-3" href="/Aimara">Aimara</Nav.Link>
          <Nav.Link className="mx-3" href="/CleverCat">Clever Cat</Nav.Link>
          <Nav.Link className="mx-3" href="/Contact">Contact</Nav.Link>
        </Nav>
        <Nav.Link><CartWidgetComponet /></Nav.Link>
    </NavbarBootstrap>
  </>
);

export default NavBar;
