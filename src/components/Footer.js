import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        <div className='logo'>
         <img src='https://www.techmahindra.com/themes/custom/techm/techm_logo.svg' alt="Tech Mahindra Clone" />
          </div>
          <ul>
            <li>Our Brand</li>
            <li>Sustainability</li>
            <li>Corporate Citizenship</li>
            <li>Investor Relations</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>News</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Alumni</li>
            <li>Sitemap</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="social-icons">
        <CiFacebook size={25} />
        <BsTwitterX size={25}/>
        <CiLinkedin size={25}/>
        <FaYoutube size={25}/>
        <FaInstagram size={25}/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tech Mahindra Limited</p>
        <div className="terms">
          <span>Terms of Use</span>
          <span>Accessibility</span>
          <span>Privacy</span>
          <span>Cookie</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;