import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "./../assets/img/filmy house.png";
// import projImg1 from "./../assets/img/project-img1.png";
import projImg2 from "./../assets/img/smart design.png";
// import projImg2 from "./../assets/img/project-img2.png";
import projImg3 from "./../assets/img/smart tube.png";
import projImg4 from "./../assets/img/smart dashboard.png";
// import projImg3 from "./../assets/img/project-img3.png";
import colorSharp2 from "./../assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "Modern Design",
      description: "Design & Development",
      imgUrl: projImg2,
      liveUrl: "https://smart-design-aniket.netlify.app",
      githubUrl: "https://github.com/Aniketdhage/smart-web-design-reactjs",
    },
    {
      title: "Smart Tube",
      description: "Design & Development",
      imgUrl: projImg3,
      liveUrl: "https://smart-tube-aniket.netlify.app",
      githubUrl: "https://github.com/Aniketdhage/smart-tube-react",
    },
    {
      title: "Smart Dashboard",
      description: "Design & Development",
      imgUrl: projImg4,
      liveUrl: "https://dashboardbyaniket.netlify.app/",
      githubUrl: "https://github.com/Aniketdhage/smart-dashboard",
    },
    {
      title: "Filmy House",
      description: "Design & Development",
      imgUrl: projImg1,
      liveUrl: "https://aniketdhage.github.io/moviesbydhage/#/",
      githubUrl: "https://github.com/Aniketdhage/moviesbydhage",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              The most important part of any project is planning. It instructs
              organizations, partners, and project managers on how to proceed
              with the remaining phases of the project. It promotes goal
              differentiation, the avoidance of missed deadlines, the reduction
              of risks, the prioritizing of fundamental exercises, and the
              delivery of desired outcomes.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, key) => {
                      return <ProjectCard key={key} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col size={12} sm={12} md={12}>
                      <h1 style={{ textAlign: "center", margin: "8rem 0px" }}>
                        More Projects <span>Coming Soon</span>
                      </h1>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {" "}
                  <Row>
                    <Col size={12} sm={12} md={12}>
                      <h1 style={{ textAlign: "center", margin: "8rem 0px" }}>
                        More Projects <span>Coming Soon</span>
                      </h1>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="sharp" />
    </section>
  );
};

export default Project;
