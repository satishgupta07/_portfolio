import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiRedux, SiSpringboot,
  SiHtml5, SiCss, SiJest, SiAngular, SiAnthropic, SiExpo,
  SiVscodium, SiIntellijidea, SiPostman,
} from "react-icons/si";
import {
  FaJava, FaMobileAlt, FaBrain, FaProjectDiagram,
  FaPuzzlePiece, FaSitemap, FaDesktop, FaServer,
  FaMobile, FaDatabase, FaWrench, FaRocket, FaCode,
} from "react-icons/fa";
import "./Skills.css";

const skillCategories = [
  {
    category: "Languages",
    icon: FaCode,
    color: "#F7DF1E",
    skills: [
      { name: "JavaScript",  icon: SiJavascript,  color: "#F7DF1E" },
      { name: "TypeScript",  icon: SiTypescript,  color: "#3178C6" },
      { name: "Java",        icon: FaJava,        color: "#f89820" },
    ],
  },
  {
    category: "Frontend",
    icon: FaDesktop,
    color: "#61DAFB",
    skills: [
      { name: "React",        icon: SiReact,      color: "#61DAFB" },
      { name: "Next.js",      icon: SiNextdotjs,  color: "#e0e0e0" },
      { name: "HTML5",        icon: SiHtml5,      color: "#E34F26" },
      { name: "CSS3",         icon: SiCss,        color: "#1572B6" },
      { name: "Redux",        icon: SiRedux,      color: "#764ABC" },
      { name: "Angular",      icon: SiAngular,    color: "#DD0031" },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    color: "#6DB33F",
    skills: [
      { name: "Node.js",     icon: SiNodedotjs,  color: "#339933" },
      { name: "Express.js",  icon: SiExpress,    color: "#e0e0e0" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    ],
  },
  {
    category: "Mobile",
    icon: FaMobile,
    color: "#a855f7",
    skills: [
      { name: "React Native", icon: FaMobileAlt, color: "#61DAFB" },
      { name: "Expo",          icon: SiExpo,      color: "#e0e0e0" },
    ],
  },
  {
    category: "Database",
    icon: FaDatabase,
    color: "#47A248",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL",   icon: SiMysql,   color: "#4479A1" },
    ],
  },
  {
    category: "Dev Tools",
    icon: FaWrench,
    color: "#F05032",
    skills: [
      { name: "Git",       icon: SiGit,          color: "#F05032" },
      { name: "VS Code",   icon: SiVscodium,     color: "#007ACC" },
      { name: "IntelliJ",  icon: SiIntellijidea, color: "#FE315D" },
      { name: "Postman",   icon: SiPostman,      color: "#FF6C37" },
      { name: "Jest",         icon: SiJest,         color: "#C21325" },
      { name: "Claude (AI)", icon: SiAnthropic,    color: "#d97706" },
    ],
  },
  {
    category: "AI & Concepts",
    icon: FaRocket,
    color: "#a78bfa",
    skills: [
      { name: "Generative AI",   icon: FaBrain,          color: "#a78bfa" },
      { name: "System Design",   icon: FaProjectDiagram, color: "#60a5fa" },
      { name: "Problem Solving", icon: FaPuzzlePiece,    color: "#f472b6" },
      { name: "DSA",             icon: FaSitemap,        color: "#34d399" },
    ],
  },
];

const Skills = () => (
  <section className="skills section" id="skills">
    <motion.h2
      className="section__title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Skills
    </motion.h2>
    <span className="section__subtitle">My technical stack</span>

    <div className="skills__container container">
      <motion.div
        className="skills__card glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {skillCategories.map(({ category, icon: CatIcon, color, skills }, i) => (
          <motion.div
            key={category}
            className="skills__row"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div className="skills__row-label" style={{ "--cat-color": color }}>
              <span className="skills__row-icon-wrap">
                <CatIcon style={{ color }} />
              </span>
              <span className="skills__row-name">{category}</span>
            </div>

            <div className="skills__pills">
              {skills.map(({ name, icon: Icon, color: skillColor }) => (
                <div key={name} className="skills__pill">
                  <Icon className="skills__pill-icon" style={{ color: skillColor }} />
                  <span className="skills__pill-name">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
