import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Home.css";
import profileImg from "../../assests/satish_portfolio.jpg";

const roles = [
  "Software Developer",
  "Problem Solver",
  "Fullstack Developer",
  "Frontend Developer"
];


const useTypingRole = (list, speed = 80, pause = 1800) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = list[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % list.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx, list, speed, pause]);

  return displayed;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Home = () => {
  const typedRole = useTypingRole(roles);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 28,
        y: (e.clientY / window.innerHeight - 0.5) * 28,
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          {/* Social links */}
          <motion.div
            className="home__social"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href="https://github.com/satishgupta07"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/satishkumargupta07/"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/satish_kr_gupta"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/satish_kr_gupta/"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="home__img-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="home__img-ring">
              <div className="home__img-inner">
                <img src={profileImg} alt="Satish Kumar Gupta" className="home__img" />
              </div>
            </div>
            <div className="home__img-glow" />
          </motion.div>

          {/* Data / text */}
          <div className="home__data">
            <motion.div
              className="home__greeting"
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="home__greeting-text">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="home__title"
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Satish Kumar Gupta
            </motion.h1>

            <motion.div
              className="home__role"
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="home__role-prefix">&lt;</span>
              <span className="home__role-text">
                {typedRole}
                <span className="home__cursor">|</span>
              </span>
              <span className="home__role-suffix">/&gt;</span>
            </motion.div>

            <motion.p
              className="home__description"
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              A passionate <span className="home__highlight">Software Developer</span> who
              loves crafting fast, beautiful web &amp; mobile apps — building
              scalable, high-performance applications. I turn complex problems into
              elegant solutions — from pixel-perfect UIs to robust backend
              systems. Always curious, always building.
            </motion.p>

            <motion.div
              className="home__buttons"
              custom={0.75}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <a href="#contact" className="button button--flex">
                Say Hello
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>


      </div>

      {/* Background decorations */}
      <div
        className="home__bg-circle home__bg-circle--1"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y * 0.6}px)` }}
      />
      <div
        className="home__bg-circle home__bg-circle--2"
        style={{ transform: `translate(${-mouse.x * 0.7}px, ${-mouse.y * 0.7}px)` }}
      />
    </section>
  );
};

export default Home;
