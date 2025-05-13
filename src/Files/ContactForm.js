import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '80px 0' }}>
      <Container>
        <Form>
          <Row className="my-5">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Name" className='py-3' />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" className='py-3' />
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-5">
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Control type="text" placeholder="Phone" className='py-3' />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formWebsite">
                <Form.Control type="text" placeholder="Website" className='py-3' />
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={5} placeholder="Your Message" className='py-3' />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mb-5">
            <Button variant="dark" style={{ padding: '10px 30px' }}>
              Free Consultancy
            </Button>
          </div>
        </Form>

        {/* Map Section */}
        <Row>
          <Col>
            <div style={{ border: '1px solid #ccc', overflow: 'hidden', borderRadius: '10px' }}>
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774694.2698739738!2d-74.161452!3d40.670675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1747115513188!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
