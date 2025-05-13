import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CompanySkills from './CompanySkill'
import PricingPlan from './PricingPlan'
import Counter from './Counter'
import WhatDO from './WhatDO'
import ContactInfo from './ContactInfo'

const About = () => {
  return (
    <div>
        <Header/>


        {/* Breadcrumb Section */}
        <div className="about-section">
          <Container className="text-white">
            <Row className="justify-content-center align-items-center">
              <Col lg={8} className="text-center">
                <h1 className="display-4">About</h1>
                <div className="d-flex justify-content-center">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link to="/" className='text-white'>
                        Home
                      </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-white'>
                      About
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <CompanySkills/>

        <PricingPlan/>

        <Counter/>

        <WhatDO/>

        <ContactInfo/>


        <Footer/>
    </div>
  )
}

export default About
