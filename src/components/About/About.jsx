import React from "react";
import { Element } from "react-scroll";
import "./About.css";
import { TbBrandCpp } from "react-icons/tb";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
  FaJava
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTensorflow, SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <Element name="about" className="about-container" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="intro">
        I'm a recent B.Tech CSE AIML (2025 batch) graduate passionate about Web Development and AI/ML.
        I enjoy creating responsive, scalable web apps and exploring intelligent systems using machine learning.
      </p>

      <h3 className="stack-title">Tech Stack I Use:</h3>
      <div className="tech-icons">
                <div className="tech-card"><TbBrandCpp  className="icon" /> <span>C++</span></div>
        <div className="tech-card"><FaJava className="icon" /> <span>Java</span></div>
        <div className="tech-card"><FaHtml5 className="icon" /> <span>HTML5</span></div>
        <div className="tech-card"><FaCss3Alt className="icon" /> <span>CSS3</span></div>
        <div className="tech-card"><SiJavascript className="icon" /> <span>JavaScript</span></div>
        <div className="tech-card"><FaReact className="icon" /> <span>React</span></div>
        <div className="tech-card"><FaNodeJs className="icon" /> <span>Node.js</span></div>
        <div className="tech-card"><SiExpress className="icon" /> <span>Express</span></div>
        <div className="tech-card"><SiMongodb className="icon" /> <span>MongoDB</span></div>
        <div className="tech-card"><FaDatabase className="icon" /> <span>SQL</span></div>
        <div className="tech-card"><FaPython className="icon" /> <span>Python</span></div>
        <div className="tech-card"><SiTensorflow className="icon" /> <span>TensorFlow</span></div>
        <div className="tech-card"><FaGithub className="icon" /> <span>GitHub</span></div>
      </div>
    </Element>
  );
};

export default About;
