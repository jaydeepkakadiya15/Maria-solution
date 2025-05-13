import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';



const PricingPlan = () => {


    const plans = [
        { title: 'Populer', price: 99, description: ['I am text block. Ut change elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo but. Lorem ipsum dolor'], btnVariant: 'outline-dark'},
        
        { title: 'Premium', price: 88, description: ['I am text block. Ut change elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo but. Lorem ipsum dolor'], btnVariant: 'outline-dark'},

        { title: 'Feacered', price: 95, description: ['I am text block. Ut change elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo but. Lorem ipsum dolor'], btnVariant: 'outline-dark'},
         
      ];


  return (
    <Container className="py-5 text-center my-4 prisingPlan">
        <h2 className="mb-3 word_letter_specing">pricing plan</h2>
        <p className="mb-5 px-3 headTxt">
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Ut elit tellus,<br />luctus nec ullamcorper mattis, 
            pulvinar dapibus leo.
        </p>

        <Row className="g-4">
        {
          plans.map((v, i) => (
            <Col key={i} md={4}>
              <Card className="py-4 px-4 text-center shadow-sm">
                <Card.Body className='px-5 py-4'>
                  <Card.Title as="h2" className="mb-4 fw-medium">
                    {v.title}
                  </Card.Title>
                  <Card.Text className='border rounded-3 p-3'>
                    {
                      v.description.map((line, i) => (
                        <p key={i} className='cardTxt'>{line}</p>
                      ))
                    }
                  </Card.Text>
                  <h2 className="fw-bold py-3">
                    <span className="me-1">$</span>
                    {v.price}
                    <small className="text-muted fs-6"> / month</small>
                  </h2>
                  <Button variant={v.btnVariant} className="mt-4 px-4">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>    
    </Container>
  )
}

export default PricingPlan