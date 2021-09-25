import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" variant="danger" bg="danger">
      <Container>
        <Navbar.Brand>
          <Link to="/">Navbar</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/team">My Team</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
