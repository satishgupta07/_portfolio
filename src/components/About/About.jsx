import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaCode, FaBuilding, FaRocket } from "react-icons/fa";
import "./About.css";
import AboutImg from "../../assests/satish_about.jpg";
import CV from "../../assests/satish_resume.pdf";

const stats = [
  { icon: FaBriefcase, value: "5+", label: "Years", sub: "Experience" },
  { icon: FaCode, value: "20+", label: "Projects", sub: "Delivered" },
  { icon: FaBuilding, value: "2", label: "Companies", sub: "Worked At" },
];

const useCountUp = (target, duration = 1400, trigger) => {
  const num = parseInt(target);
  const suffix = target.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(num);
    };
    requestAnimationFrame(step);
  }, [trigger, num, duration]);

  return `${count}${suffix}`;
};

const StatCard = ({ icon: Icon, value, label, sub, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const displayed = useCountUp(value, 1400, isInView);

  return (
    <motion.div
      ref={ref}
      className="about__stat-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <Icon className="about__stat-icon" />
      <h3 className="about__stat-value">{displayed}</h3>
      <span className="about__stat-label">{label}</span>
      <span className="about__stat-sub">{sub}</span>
    </motion.div>
  );
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Who I Am</span>

      <div className="about__container container">
        <motion.div
          className="about__img-wrapper"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={AboutImg} alt="Satish Kumar Gupta" className="about__img" />
          <div className="about__img-badge">
            <FaRocket />
            <span>Open to work</span>
          </div>
        </motion.div>

        <motion.div
          className="about__data"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about__stats">
            {stats.map(({ icon, value, label, sub }, i) => (
              <StatCard
                key={i}
                icon={icon}
                value={value}
                label={label}
                sub={sub}
                delay={i * 0.15}
              />
            ))}
          </div>

          <p className="about__description">
            I'm a Full-Stack Software Engineer currently working at{" "}
            <span className="about__highlight">Infosys</span>, where I build
            scalable enterprise-grade applications. With{" "}
            <span className="about__highlight">5+ years</span> of hands-on
            experience, I specialize in React, React Native, Next.js, Node.js,
            and Java ecosystems. Previously at{" "}
            <span className="about__highlight">Nagarro</span>, I led end-to-end
            development of full-stack products serving thousands of users. I'm
            passionate about writing clean, maintainable code and crafting
            delightful user experiences.
          </p>

          <div className="about__actions">
            <a download="" href={CV} className="button button--flex">
              Download CV
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="currentColor"
                />
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="currentColor"
                />
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="currentColor"
                />
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
