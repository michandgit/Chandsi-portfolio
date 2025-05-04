import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu  , setShowMenu] = useState(false);


  const handleButtonToggle = ()=>{
    setShowMenu(!showMenu);
  }

  return (
    <header className="header">
      <div className="logo">Chandsi.dev</div>
      <nav className={showMenu ? "menu-mobile" : ""}>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} spy={true} activeClass="active">Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link></li>
        </ul>
      </nav>
      <div id="menu">
        <button  onClick = {handleButtonToggle} ><IoMenu color={"white"} size={22} /></button>
      </div>
    </header>
  );
};

export default Navbar;
