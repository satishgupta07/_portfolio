import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import "./Qualification.css";

const experience = [
  {
    title: "Senior Associate Consultant",
    company: "Infosys",
    period: "Jun 2024 - Present",
    current: true,
  },
  {
    title: "Engineer",
    company: "Nagarro",
    period: "Jan 2022 - Jun 2024",
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "Jan 2021 - Jan 2022",
  },
  {
    title: "Trainee",
    company: "Nagarro",
    period: "Oct 2020 - Dec 2020",
  },
];

const education = [
  {
    title: "B.Tech — Computer Science Engineering",
    company: "UIET MDU, Rohtak",
    period: "2016 - 2020",
  },
  {
    title: "Senior Secondary (XII)",
    company: "Kendriya Vidyalaya",
    period: "2016",
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const TimelineItem = ({ item, index }) => (
  <motion.div
    className="qualification__item"
    custom={index}
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    viewport={{ once: true }}
  >
    <div className="qualification__dot-wrapper">
      <div className={`qualification__dot${item.current ? " qualification__dot--current" : ""}`}></div>
      <div className="qualification__line-segment"></div>
    </div>
    <div className={`qualification__card glass-card${item.current ? " qualification__card--current" : ""}`}>
      {item.current && (
        <span className="qualification__badge">Current</span>
      )}
      <h3 className="qualification__title">{item.title}</h3>
      <span className="qualification__company">
        <FaBuilding className="qualification__company-icon" />
        {item.company}
      </span>
      <span className="qualification__period">
        <FaCalendarAlt />
        {item.period}
      </span>
    </div>
  </motion.div>
);

const Qualification = () => {
  const [tab, setTab] = useState("experience");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Journey</h2>
      <span className="section__subtitle">Experience &amp; Education</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <button
            className={`qualification__tab${tab === "experience" ? " qualification__tab--active" : ""}`}
            onClick={() => setTab("experience")}
          >
            <FaBriefcase />
            Experience
          </button>
          <button
            className={`qualification__tab${tab === "education" ? " qualification__tab--active" : ""}`}
            onClick={() => setTab("education")}
          >
            <FaGraduationCap />
            Education
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="qualification__timeline"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {(tab === "experience" ? experience : education).map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Qualification;
