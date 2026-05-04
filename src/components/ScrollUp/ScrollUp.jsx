import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollUp.css";

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY >= 560);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`scrollup${show ? " show-scroll" : ""}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;
