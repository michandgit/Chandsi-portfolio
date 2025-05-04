import React  ,{useState} from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import { Link } from 'react-scroll'
import { toast } from 'react-hot-toast';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const formData = new FormData(e.target);

    formData.append("access_key", "b3c4937e-a410-4efe-b671-d280693a7cd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      e.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
   
  };
  
  return (
    <Element name="contact" className="contact-container" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p>Have a project in mind or just want to connect? Reach out to me!</p>

      <form
        className="contact-form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/chandsi-gola-516985245/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/michandgit" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/chandsi71/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>

    </Element>
  );
};

export default Contact;
