import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css"; 
import category1 from '../assets/asset 1.jpeg';
import category2 from '../assets/asset 2.jpeg';
import category3 from '../assets/asset 3.jpeg';
import category4 from '../assets/asset 4.jpeg';
import category5 from '../assets/asset 5.jpeg';
import category6 from '../assets/asset 6.jpeg';




const OurLatest = () => {

  const portfolioItems = [
    { id: 1, category: "Artwork", text:"Solution Product" , imgSrc: category1 },
    { id: 2, category: "Branding", text:"Corporate Business" ,  imgSrc: category2 },
    { id: 3, category: "Digital Agency", text:"Digital Solution" ,  imgSrc: category3 },
    { id: 4, category: "Artwork", text:"Digital Product" ,  imgSrc: category4 },
    { id: 5, category: "Branding", text:"Wairless Speaker" ,  imgSrc: category5 },
    { id: 6, category: "Digital Marketing", text:"Shaker Mockup" ,  imgSrc: category6 },
  ];


  const [selectedCategory, setSelectedCategory] = useState("All Works");

  const filteredItems = selectedCategory === "All Works"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

    

  return (
    <section className="our-latest py-5 my-5">
      <Container className="pb-4">
        <h2 className="text-center mb-5 pt-4 word_letter_specing">OUR LATEST WORK</h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-5">
          {["All Works", "Artwork", "Branding", "Digital Agency", "Digital Marketing"].map((category) => (
            <span key={category} variant={selectedCategory === category ? "dark" : "outline-dark"} className="mx-4 word_letter_specing ourLatest_nav" onClick={() => setSelectedCategory(category)}>
              {category}
            </span>
          ))}
        </div>

        {/* Portfolio Grid */}
        <Row className="g-4">
          {filteredItems.map((item) => (
            <Col xs={12} sm={6} md={4} key={item.id}>
              <div className="portfolio-item position-relative overflow-hidden rounded shadow">
                <img src={item.imgSrc} alt={item.category} className="img-fluid" />
                <div className="portfolio-overlay d-flex flex-column justify-content-center align-items-start p-3">
                  <h5 className="text-white fw-bold mb-1">{item.text}</h5>
                  <p className="text-white m-0">{item.category}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurLatest;
