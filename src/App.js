import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Files/Home";
import About from './Files/About';
import Services from './Files/Services';
import Portfolio from './Files/Portfolio';
import Blog from './Files/Blog';
import Contact from './Files/Contact';


// https://html.ditsolution.net/maria/index-3.html


function App() {
  return (

  
    <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/about" element={<About/>}></Route> 
        <Route path="/services" element={<Services/>}></Route> 
        <Route path="/portfolio" element={<Portfolio/>}></Route> 
        <Route path="/blog" element={<Blog/>}></Route> 
        <Route path="/contact" element={<Contact/>}></Route> 
   

    </Routes>
    

  );
}

export default App;
