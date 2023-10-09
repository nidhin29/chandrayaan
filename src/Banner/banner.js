import React from 'react'
import headerImg from '../assets/header-img.svg'
import { Col, Container, Row } from 'react-bootstrap'
import './banner.css'

function Banner() {
  return (
    <section className='banner' id='home'>
       <Container>
          <Row className='align-items-centre'>
            <Col xs={12} md={6} xl={7}>
                 <h1>
                    Chandrayaan-3:INDIA'S 3rd Mission To Space
                 </h1>
                 <p>
                 Chandrayaan-3 the third mission in the Chandrayaan programme, a series of lunar-exploration missions developed by the Indian Space Research Organisation (ISRO).[7] Launched on 14 July 2023
                 </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
       </Container>
    </section>
  )
}

export default Banner
