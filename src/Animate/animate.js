import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import './animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Animate() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className='anim'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} xl={6} className='mb-3' data-aos='fade-right'>
            <div className='item d-flex justify-content-center'> {/* Add classes here */}
              <img src={c1} alt='img' srcSet='' />
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className='mb-3' data-aos='fade-left'>
            <div className='item d-flex justify-content-center'> {/* Add classes here */}
              <img src={c2} alt='img' srcSet='' />
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className='mb-3' data-aos='fade-right'>
            <div className='item d-flex justify-content-center'> {/* Add classes here */}
              <img src={c3} alt='img' srcSet='' />
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className='mb-3' data-aos='fade-left'>
            <div className='item d-flex justify-content-center'> {/* Add classes here */}
              <img src={c4} alt='img' srcSet='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Animate;
