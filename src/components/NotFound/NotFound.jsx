import React from "react";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notfound section">
      <div className="notfound__container container">
        <motion.div
          className="notfound__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="notfound__code">
            <span className="notfound__bracket">&lt;</span>
            <span className="notfound__number">404</span>
            <span className="notfound__bracket">/&gt;</span>
          </div>
          <h1 className="notfound__title">Page Not Found</h1>
          <p className="notfound__description">
            Looks like this page went on a coffee break. Let's get you back on track.
          </p>
          <a href="/#home" className="button button--flex">
            Go Home
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
