import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "./../assets/img/project-img1.png";
import projImg2 from "./../assets/img/project-img2.png";
import projImg3 from "./../assets/img/project-img3.png";
import colorSharp2 from "./../assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="#projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              enim quod corrupti totam, tempora odio, nesciunt minima nobis ut
              facilis delectus sit blanditiis ducimus aperiam quas repellendus
              maxime quam quidem sunt illum maiores voluptatibus dicta rem.
              Repudiandae odit minima, asperiores officia libero fuga sequi
              maxime ut sint ex nisi nihil!
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
                  <Nav.Link eventKey="Third">Tab Three</Nav.Link>
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
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
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
