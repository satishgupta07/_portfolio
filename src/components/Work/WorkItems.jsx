import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "5px",
        }}
      >
        <a
          href={item.link}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a
          href={item.gitHubLink}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github"></i> Github
        </a>
      </div>
    </div>
  );
};

export default WorkItems;