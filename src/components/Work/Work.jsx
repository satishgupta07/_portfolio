import React from "react";
import { motion } from "framer-motion";
import "./Work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.h2>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </section>
  );
};

export default Work;
