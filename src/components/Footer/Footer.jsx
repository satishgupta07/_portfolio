import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home" className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          Satish
          <span className="footer__logo-bracket"> /&gt;</span>
        </a>

        <ul className="footer__links">
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
          <li><a href="#portfolio" className="footer__link">Projects</a></li>
          <li><a href="#contact" className="footer__link">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://github.com/satishgupta07"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/satishkumargupta07/"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/satish_kr_gupta"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/satish_kr_gupta/"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <span className="footer__copy">
          &copy; {year} Satish Kumar Gupta — Built with React &amp; ❤️
        </span>
      </div>
    </footer>
  );
};

export default Footer;
