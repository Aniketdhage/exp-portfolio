import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ imgUrl, description, title, liveUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* <span>{description}</span> */}
          <div className="projects-links">
            <a className="navbar-text" target="_blank" href={liveUrl}>
              Live
            </a>
            <a target="_blank" href={githubUrl}>
              Github
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
