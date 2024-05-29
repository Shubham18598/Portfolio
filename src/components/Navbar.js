import React,{ SVGProps, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
      setIsActive(!isActive);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector('header');
        header.classList.toggle('shadow', window.scrollY > 0);
        setIsActive(false); // Close the navbar when scrolling
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <header style={{width: "100%"}}>
    <NavLink to="/" className="logo">SM</NavLink>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleNavbar} className="bx bx-menu" id="menu-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

    <ul className={`navbar ${isActive ? 'active' : ''}`}>
        <li><NavLink className="ancarlink" to="/">Home</NavLink></li>
        <li><NavLink className="ancarlink" to="/about">About</NavLink></li>
        <li><NavLink className="ancarlink" to="/projects">Projects</NavLink></li>
        <li><NavLink className="ancarlink" to="/github">Github</NavLink></li>
        <li><NavLink className="ancarlink" to="/skills">Skills</NavLink></li>
        <li><NavLink className="ancarlink" to="/contact">Contact</NavLink></li>
        <li><a className="ancarlink" href="../images/Shubham_Muddamwar-Resume.pdf" download >Resume</a></li>
        <div className="bx bx-moon" id="darkmode"></div>
    </ul>
  </header>
  )
}

export default Navbar
