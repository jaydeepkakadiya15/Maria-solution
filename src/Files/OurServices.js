import React from 'react'
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUsers , FaGem, FaDesktop } from "react-icons/fa";

const OurServices = () => {

  const services = [
    { icon: <FaUsers size={50} color="black" />, title: "DIGITAL SOLUTION", text: "Professionally company premium rather than magnetic company." },
    { icon: <FaGem size={50} color="black" />, title: "CLEAN DESIGN", text: "Professionally company premium rather than magnetic company." },
    { icon: <FaDesktop size={50} color="black" />, title: "DIGITAL MARKETING", text: "Professionally company premium rather than magnetic company." }
  ];

  return (
    <>
      <div className="our_services">
        <Container className="text-center py-5">
          <h2 className="mb-5 word_letter_specing">OUR SERVICE</h2>
          <Row className="g-4">
            {
              services.map((v, i) => (
                <Col key={i} xs={12} md={4}>
                  <Card className=" border-1 text-center p-4 card">
                    <Card.Body>
                      <div className="mb-3  card_icon">{v.icon}</div>
                      <Card.Title className="fw-bold">{v.title}</Card.Title>
                      <Card.Text className='fs-7 text-secondary'>{v.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurServices