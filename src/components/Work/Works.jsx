import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter(
          (p) => p.category.toLowerCase() === item.name
        )
      );
    }
  }, [item]);

  const handleClick = (navItem, index) => {
    setItem({ name: navItem.name });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <button
            key={index}
            onClick={() => handleClick(navItem, index)}
            className={`work__filter-btn${active === index ? " work__filter-btn--active" : ""}`}
          >
            {navItem.name}
          </button>
        ))}
      </div>

      <motion.div className="work__grid container" layout>
        <AnimatePresence>
          {projects.map((p) => (
            <WorkItems item={p} key={p.id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Works;
