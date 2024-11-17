import Image from "next/image";
import "../style/hero.css";

import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-boxes-container">
        {/**left side div */}
        <div className="hero-left-div">
          <h1 className="title-hero">About Me</h1>
          <p className="paragraph-hero">
            Hi, I am Rida Fatima, a passionate web developer, graphic designer,
            and creative problem-solver. With a strong background in front-end
            and back-end web development, I specialize in building intuitive,
            user-friendly websites that are both visually appealing and
            technically robust. My expertise also extends to graphic design,
            where I create impactful logos, presentations, Instagram posts, and
            invitation cards, always focused on delivering a unique and
            memorable brand experience. Whether it is developing a responsive
            website, designing a compelling logo, or crafting a tailored
            presentation, my goal is to help businesses and individuals
            establish their digital presence with creativity and precision. I
            believe in continuous learning and staying up-to-date with the
            latest trends and technologies to deliver the best possible
            solutions for my clients.
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
