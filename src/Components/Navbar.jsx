import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const CustomNavbar = () => {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Harmony Hub Solutions</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
