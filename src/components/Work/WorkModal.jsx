import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./WorkModal.css";

const WorkModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal__content glass-card"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button className="modal__close" onClick={onClose} aria-label="Close modal">
              <FaTimes />
            </button>

            <div className="modal__img-wrapper">
              <img src={project.image} alt={project.title} className="modal__img" loading="lazy" />
            </div>

            <div className="modal__body">
              <span className="modal__category">{project.category}</span>
              <h2 className="modal__title" id="modal-title">{project.title}</h2>
              <p className="modal__description">{project.description}</p>

              {project.tags && (
                <div className="modal__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="work__tag">{tag}</span>
                  ))}
                </div>
              )}

              <div className="modal__actions">
                {project.link && (
                  <a
                    href={project.link}
                    className="button button--flex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                )}
                <a
                  href={project.gitHubLink}
                  className="button button--flex button--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;
