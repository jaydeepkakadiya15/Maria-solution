import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PricingPlan from './PricingPlan'
import OurServices from './OurServices'
import CompanySkills from './CompanySkill'
import WhatDO from './WhatDO'

const Blog = () => {
  return (
    <div>

        <Header/>

        {/* Breadcrumb Section */}
        <div className="about-section">
          <Container  className="text-white">
            <Row className="justify-content-center align-items-center">
              <Col lg={8} className="text-center">
                <h1 className="display-4">Blog</h1>
                <div className="d-flex justify-content-center">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link to="/" className='text-white'>
                        Home
                      </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-white'>
                      Blog
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <PricingPlan/>

        <OurServices/>

        <CompanySkills/>

        <br></br>
    
        <WhatDO/>


        <Footer/>

    </div>
  )
}

export default Blog