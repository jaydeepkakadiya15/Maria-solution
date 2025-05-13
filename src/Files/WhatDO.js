import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

import person1 from '../assets/asset 7.jpeg';
import person2 from '../assets/asset 8.jpeg';
import person3 from '../assets/asset 9.jpeg';
import person4 from '../assets/asset 10.jpeg';

const WhatDO = () => {
  const people = [
    { img: person1, alt: "Person 1", name: "Sonia Mirja", title: "Founder" },
    { img: person2, alt: "Person 2", name: "Hossain Khan", title: "CEO" },
    { img: person3, alt: "Person 3", name: "Angel Faria", title: "Manager" },
    { img: person4, alt: "Person 4", name: "Luka Mardij", title: "Director" },
  ];

  return (
    <div className="container text-center py-5 whatDo">
      <h2 className="mb-3 word_letter_specing">WHAT I DO</h2>
      <p className="mb-5 px-3">
        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Ut elit tellus,<br />luctus nec ullamcorper mattis, 
        pulvinar dapibus leo.
      </p>
      <div className="row justify-content-center">
        {
            people.map((v, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 mb-4">
                <div className="position-relative team-card mx-auto">
                <img
                    src={v.img}
                    alt={v.alt}
                    className="img-fluid rounded-circle"
                    style={{ width: "100%", maxWidth: "306px", height: "auto" }}
                />
                <div className="overlay text-white d-flex flex-column justify-content-center align-items-center">
                    <h5 className="mb-1">{v.name}</h5>
                    <p className="mb-2">{v.title}</p>
                    <div className="social-icons d-flex gap-3">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
                </div>
            </div>
            ))
        }
      </div>
    </div>
  );
};

export default WhatDO;
