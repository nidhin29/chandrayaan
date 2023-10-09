import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function CustomNavbar() {
    const [scrolled,setScrolled]  = useState(true)
 
    
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50 ) {
          setScrolled(false);
        } else if (window.scrollY <50) {
          setScrolled(true);
        }
      }
    
      window.addEventListener("scroll", onScroll);
    
      return () => window.removeEventListener("scroll", onScroll);
    },)
    
  return (
    <Navbar expand="lg" className={scrolled? "bg-body-tertiary":"bg-initial"} sticky='top'>
    <Container>
      <Navbar.Brand href="#home">Chandrayaan3</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Discoveries</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default CustomNavbar
