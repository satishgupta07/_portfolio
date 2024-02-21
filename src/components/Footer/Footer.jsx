import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Satish Kumar Gupta</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          {/* <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li> */}
        </ul>

        <div className="footer__social">
          <a
            href="facebook.com/satishkumargupta.07"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/satish_kr_gupta/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/satish_kr_gupta"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; SatishKumarGupta. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
