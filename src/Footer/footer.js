import React from 'react';
import './footer.css';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} sm={6} className="mb-3">
            <div className="social-icon">
              <img src={navIcon2} alt="Icon" />
              <img src={navIcon3} alt="Icon" />
            </div>
            <p>Copyright 2023 Nidhin V Ninan. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
