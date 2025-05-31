import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <ul className="footer-links">
        <div className="left-1">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/help-center">Help Center</a>
          </li>
        </div>
        <div className="left-2">
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="/media-center">Media Center</a>
          </li>

          <li>
            <a href="/investor-relations">Investor Relations</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
        </div>
        <div className="left-3">
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
          <li>
            <a href="/cookie-preferences">Cookie Preferences</a>
          </li>
          <li>
            <a href="/corporate-information">Corporate Information</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
