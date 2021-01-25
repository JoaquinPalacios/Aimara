import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">
        <NavbarBootstrap.Brand href="/">WoodLand Furniture</NavbarBootstrap.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mx-3" href="/aboutUs">About us</Nav.Link>
          <Nav.Link className="mx-3" href="/Furniture">Products</Nav.Link>
          <Nav.Link className="mx-3" href="/location">Location</Nav.Link>
        </Nav> 
    </NavbarBootstrap>
  </>
);

export default NavBar;
