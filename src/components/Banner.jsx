import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`} <span className="wrap">Web Developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              laudantium ex porro, distinctio ratione ut, officia quam sapiente
              sunt recusandae quas, aliquam id veniam hic repudiandae quos
              reiciendis velit odit voluptas. Optio suscipit saepe officiis
              omnis, magnam fuga sit hic ipsam impedit recusandae facilis iusto
              temporibus illum, quo iste molestias.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
