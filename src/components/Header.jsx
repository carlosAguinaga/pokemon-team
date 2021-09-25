import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" variant="danger" bg="danger">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">
            <Link to="/team">My Team</Link>
          </Nav.Link> */}
          <Link to="/team">My Team</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
