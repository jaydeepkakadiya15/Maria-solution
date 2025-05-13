import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OurServices from './OurServices'
import PricingPlan from './PricingPlan'
import WhatDO from './WhatDO'
import OurLatest from './OurLatest'
import Counter from './Counter'
import ContactInfo from './ContactInfo'

const Services = () => {
  return (
    <div>

        <Header/>

        {/* Breadcrumb Section */}
        <div className="about-section">
          <Container className="text-white">
            <Row className="justify-content-center align-items-center">
              <Col lg={8} className="text-center">
                <h1 className="display-4">Services</h1>
                <div className="d-flex justify-content-center">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link to="/" className='text-white'>
                        Home
                      </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-white'>
                      Services
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <OurServices/>

        <PricingPlan/>

        <WhatDO/>

        <OurLatest/>

        <ContactInfo/>

        <Counter/>

        <Footer/>
        

    </div>
  )
}

export default Services