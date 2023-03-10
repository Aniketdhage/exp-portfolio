import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/undraw_feeling_proud_qne1.svg";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(0.1 - Math.random() * 100);
  const toRotate = ["Web Developer", "FrontEnd Developer", "ReactJS Developer"];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let UpdatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(UpdatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && UpdatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && UpdatedText == "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm `} <span className="wrap">{text}</span>
            </h1>
            <p>
              To work in an organization, which provides me good learning
              opportunities, where in I can improve my technical skills and
              thereby to contribute in the growth of the organization. My goal
              is that I would be able to apply the knowledge, ideas and
              creativity gained through education and experience in the field of
              Information Technology so as to add value to myself and ultimately
              society at large.
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
