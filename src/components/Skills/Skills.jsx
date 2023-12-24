import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">NodeJS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Angular</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">ExpressJS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Spring Boot</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Hibernate</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Redux</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
