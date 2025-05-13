import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaClock, FaPhone } from 'react-icons/fa'; 

const ContactInfo = () => {

  const contacts = [
      { icon: <FaEnvelope size={64} color="black" />, title: "Enter Your Address", text: "54/1 New sorini Asut, Melbord Austria." },
      { icon: <FaClock size={64} color="black" />, title: "Opening Hours", text: "Mon - Thu: 10:00am - 05:00pm" },
      { icon: <FaPhone size={64} color="black" />, title: "Contact Directly", text: "demo@example.com, 54786547521" }
    ];


  return (
    <Container className="text-center py-5">
      <Row className="g-4">
      {
        contacts.map((v,i) => (
          <Col key={i} md={4} className="pb-5">
            <div className="mb-3  card_icon">{v.icon}</div>
            <h5>{v.title}</h5>
            <p className="text-muted">{v.text}</p>
          </Col>
        ))
      }   
      </Row>
    </Container>
  );
};

export default ContactInfo;
