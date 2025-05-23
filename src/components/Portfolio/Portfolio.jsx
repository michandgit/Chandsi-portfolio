import React, { useState } from "react";
import { Element } from "react-scroll";
import "./Portfolio.css";
import EcommerceImg from "../../assets/Ecommerce.jpeg"
import ChatappImg from "../../assets/Chatapp.jpeg"
import PlaceImg from "../../assets/PlacePicker.jpeg"
import { FaExternalLinkAlt } from "react-icons/fa";
import CNDSAImg from "../../assets/CNDSAImg.png"
import udemyCertificate from "../../assets/Udemycertificate.png"
import MLCertificate from "../../assets/MLCertificate.png"

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Element name="portfolio" className="portfolio-container" id="portfolio">
      <h2 className="section-title">My Portfolio</h2>
      <p id="portfolio-p">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>

      <div className="tabs">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={activeTab === "certificates" ? "active" : ""}
          onClick={() => setActiveTab("certificates")}
        >
          Certificates
        </button>
      </div>

      <div className="content">
        {activeTab === "projects" && (
          <div className="grid">
            {/* Replace with your real project data */}
            <div className="card">
              <h3>Ecommerce Website</h3>
              <img src={EcommerceImg} alt="" />
              <p>Built with Express, React, Node.js & MongoDB</p>
              <button>Check here <a target="_blank" rel="noreferrer" href="https://ecommerce-website-gamma-cyan.vercel.app/"><FaExternalLinkAlt /></a> </button>
            </div>
            <div className="card">
              <h3>Realtime Chat application</h3>
              <img src={ChatappImg} alt="" />
              <p>Enables secure, real-time messaging with Socket.io and JWT authentication.</p>
              <button>Check here <a target="_blank" rel="noreferrer" href="https://realtime-chat-application-delta.vercel.app"><FaExternalLinkAlt /></a> </button>
            </div>
            <div className="card">
              <h3>Place Picker</h3>
              <img src={PlaceImg} alt="" />
              <p>Location-based app using geolocation</p>
              <button>Check here
                <a target="_blank" rel="noreferrer" href="https://place-picker-full-stack.vercel.app"><FaExternalLinkAlt/></a>
              </button>
            </div>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid">
      
            <div className="card">
              <h3>Python Developer</h3>
              <img src={udemyCertificate} alt="" />
              <p>Udemy Certificate – 2023</p>
              <button>Check here <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ySsLdGExciAq8kCdYt1xewjqGKJRUhaO/view?usp=sharing"><FaExternalLinkAlt /></a> </button>
            </div>

            <div className="card">
              <h3>Machine Learning with Python</h3>
              <img src={MLCertificate} alt="" />
              <p>Infosys Springboard– 2023</p>
              <button> Check here
              <a href="https://drive.google.com/file/d/1dM1Qbf30wBHVsvNd2TCV58sR9a90YmhJ/view?usp=sharing" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
              </button>
            
            </div>

            <div className="card">
              <h3>Data Structures in C++</h3>
              <img src={CNDSAImg} alt="" />
              <p>Coding Ninjas - 2023</p>
              <button>Check here
              <a href="https://drive.google.com/file/d/14ruTdFBHoUE91oTXs0KCopQF0wtPaxW3/view?usp=sharing" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
              </button>
             
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Portfolio;
