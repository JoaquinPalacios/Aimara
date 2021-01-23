import React from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <>
    <NavbarBootstrap bg="light" variant="light">
        <NavbarBootstrap.Brand href="/">WoodLand Furniture</NavbarBootstrap.Brand>
        <Nav className="ml-auto">
          <Nav className="mx-3" to="/aboutUs">About us</Nav>
          <Nav className="mx-3" to="/Furniture">Products</Nav>
          <Nav className="mx-3" to="/location">Location</Nav>
        </Nav> 
    </NavbarBootstrap>
  </>
);

export default NavBar;
