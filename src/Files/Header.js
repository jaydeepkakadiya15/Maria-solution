import '../App.css';
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Header start */}
      <Navbar bg="light" expand="lg">
      <Container>
  
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          
            <img
              src={require('../assets/asset 0.png')}
              width="100%"
              className="d-inline-block align-top me-2"
              alt="Maria Logo"
            />
         
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Menu Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'} className="px-3 fs-5 ">Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'} className="px-3 fs-5 ">About</Nav.Link>

            {/* Services dropdown (optional) */}
            <NavDropdown title="Services" id="services-dropdown" className="px-3 fs-5 ">
              <NavDropdown.Item as={Link} to={'/services'}>Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Portfolio" id="portfolio-dropdown" className="px-3 fs-5 ">
              <NavDropdown.Item as={Link} to={'/portfolio'}>Portfolio 1</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio2">Portfolio 2</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio3">Portfolio 3</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio4">Portfolio 4</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio5">Portfolio 5</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="blog-dropdown" className="px-3 fs-5 ">
              <NavDropdown.Item as={Link} to={'/blog'}>Blog 1</NavDropdown.Item>
              <NavDropdown.Item href="#blog2">Blog 2</NavDropdown.Item>
              <NavDropdown.Item href="#blog3">Blog 3</NavDropdown.Item>
              <NavDropdown.Item href="#blog4">Blog 4</NavDropdown.Item>
            </NavDropdown>

      
            <Nav.Link as={Link} to={'/contact'} className="px-3 fs-5 ">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
