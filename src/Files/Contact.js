import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div>
        
        <Header/>

        {/* Breadcrumb Section */}
        <div className="about-section">
          <Container  className="text-white">
            <Row className="justify-content-center align-items-center">
              <Col lg={8} className="text-center">
                <h1 className="display-4">Contact</h1>
                <div className="d-flex justify-content-center">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link to="/" className='text-white'>
                        Home
                      </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-white'>
                      Contact
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <ContactInfo/>
        

        <ContactForm/>


        <Footer/>




    </div>
  )
}

export default Contact