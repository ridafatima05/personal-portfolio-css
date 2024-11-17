import Image from "next/image";
import "../style/hero.css";

import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-boxes-container">
        {/**left side div */}
        <div className="hero-left-div">
          <h1 className="title-hero">I am Rida Fatima 
          Front-end Developer</h1>
          <p className="paragraph-hero">
            a front-end developer passionate about building beautiful and 
            user-centric web applications. With a strong foundation in HTML,
            CSS, and JavaScript, I specialize in creating clean, responsive 
            designs that provide smooth and engaging user experiences.
          </p>
          <button className="hero-button">Hire Me</button>
        </div>
        {/**right side */}
        <div>
         <Image
            src={"/Images/Rida.jpg"}
            alt="Profile"
            width={150}
            height={100}
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
