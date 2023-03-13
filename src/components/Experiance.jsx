import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/experince-done.svg";

const Experiance = () => {
  return (
    <section className="experiance ">
      <Container>
        <Row className="align-items-center">
          <h1 className="text-center">Experiance</h1>
          <Col xs={12} md={6} xl={7}>
            <h4>Sapio Analytics, Mumbai [Front End Developer (ReactJS)]</h4>
            <span>February, 2022 - October, 2022</span>
            <ul className="experiance-list">
              <li>
                Used React.Js to allow users to instantly update the medication
                list interface without reloading.
              </li>
              <li>
                Learned front-end object-oriented programming to develop
                clients' requirements
              </li>
              <li>
                Increase productivity by using React.js to organize, track bug
                patches and add feature requests.
              </li>
              <li>
                Collaborate with other developers to update the website and
                create new features
              </li>
              <li>
                Daily maintenance of code, debugging issues, and solving
                clients' problems.
              </li>
              <li>
                Designed dynamic and browser-compatible pages using HTML5,CSS3
                and React.Js
              </li>
              <li>Worked with various JavaScript tools such as React/Redux</li>
            </ul>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img width="80%" src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experiance;
