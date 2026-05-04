import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const WorkItems = ({ item }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      className="work__card glass-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      layout
    >
      <div className="work__img-wrapper">
        {(!imgLoaded || !item.image) && <div className="work__img-skeleton" />}
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="work__img"
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        )}
        <div className="work__img-overlay">
          {item.link && (
            <a
              href={item.link}
              className="work__overlay-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
          <a
            href={item.gitHubLink}
            className="work__overlay-btn work__overlay-btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Code
          </a>
        </div>
      </div>

      <div className="work__info">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__description">{item.description}</p>

        <div className="work__tags">
          {item.tags && item.tags.map((tag, i) => (
            <span key={i} className="work__tag">{tag}</span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default WorkItems;
