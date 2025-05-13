import "../App.css";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <section className="hero-section pt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start"> {/* Center text on small screens */}
          <Col xs={12} md={6} className="px-3"> {/* Responsive column width */}
            <h2 className="mb-4 fw-bold hero_head">
              Powerful Minimal <br /> Solution Agency
            </h2>
            <p className="mb-4 fs-5 hero_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start"> 
              <Button variant="outline-secondary" className="mb-2 mb-md-0 me-md-2 fs-5">
                Contact Us
              </Button>
              <Button variant="outline-secondary" className="fs-5">
                About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
