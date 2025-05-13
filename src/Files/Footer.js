import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter , FaPinterestP, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0b0a0e', color: '#ccc' }}>
      <Container className="text-center py-5">

            <img src={require('../assets/asset 14.png')} width="180px" className="d-inline-block align-top me-2 pt-5 pb-3" alt="Maria Logo"/>
     
        <p className="mt-3 mb-4" style={{ maxWidth: '700px', margin: '0 auto', color: '#aaa' }}>
          Lorem ipsum dolor sit amet, consectetur ahkl adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

    
        <div className="d-flex justify-content-center gap-3 mb-4 pt-2 pb-5">
          {[FaFacebookF, FaTwitter , FaPinterestP, FaLinkedinIn, FaDribbble].map((Icon, index) => (
            <div key={index} className="footer_icon fs-5 d-flex align-items-center justify-content-center rounded-circle">
              <Icon />
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-4 py-4" style={{ backgroundColor: '#000', borderTop: '1px solid #333' }}>
        
        <small className="text-white mb-2 mb-md-0  fs-6">Copyright © Maria all rights reserved 2024.</small>
        <div className="d-flex gap-4">
          <a href="#" className="text-white text-decoration-none fs-6">About Us</a>
          <a href="#" className="text-white text-decoration-none fs-6">Privacy Policy</a>
          <a href="#" className="text-white text-decoration-none fs-6">Contact Us</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
