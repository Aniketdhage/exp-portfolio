import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./../assets/img/contact-img.svg";

const Contact = () => {
  const initialFormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialFormDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const formUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setInterval(() => {
      setStatus({
        status: false,
        message: "Sorry! this service temporery not available",
      });
    }, 2000);
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <div className="form">
              {/* <form onSubmit={handleSubmit}> */}
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={(e) => formUpdate(e)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={(e) => formUpdate(e)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={(e) => formUpdate(e)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.lastName}
                    placeholder="Phone Number"
                    onChange={(e) => formUpdate(e)}
                  />
                </Col>
                <Col>
                  <textarea
                    row={6}
                    value={formData.message}
                    placeholder="Message"
                    onChange={(e) => formUpdate(e)}
                  />
                  <button onClick={handleSubmit}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && <p className={"danger"}>{status.message}</p>}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
