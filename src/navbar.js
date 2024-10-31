import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar style={{ backgroundColor: '#006400' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Student List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;