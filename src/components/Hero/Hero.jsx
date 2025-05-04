import React from "react";
import { Element } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <Element name="home" className="hero-container" id="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Chandsi</span></h1>
        <h2>
          <Typewriter
            words={[
              "Fullstack Developer",
              "Frontend Specialist",
              "Backend Engineer",
              "Machine Learning Enthusiast",
              "Deep Learning Explorer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h2>
        <p>
          I build intelligent, scalable web applications that combine clean UI with powerful backend and AI-driven capabilities.
        </p>
       <div className="btns">
       <a className="btn"  href="/ChandsiResume.pdf" target="_blank"  rel="noopener noreferrer">Resume</a>
       <Link className="btn" to="portfolio"> View Projects</Link>
       </div>
      
      </div>
    </Element>
  );
};

export default Hero;
