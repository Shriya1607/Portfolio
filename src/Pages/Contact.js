import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Container className="contact">
        <Row className="mb-4">
          <Col>
            <h2 className="title">Contact Me</h2>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <form
              method="POST"
              name="contact"
              onSubmit="submit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="inputs">
                <label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="Your name"
                    style={{ marginRight: "2.2rem" }}
                  />
                </label>
                <label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="Your Email"
                  />
                </label>
              </div>

              <br />
              <label>
                <textarea
                  name="Message"
                  id="Message"
                  cols="48"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </label>
              <br />
              <button type="submit" className="send-btn">
                Send
              </button>
            </form>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <h5 style={{ fontStyle: "oblique", fontWeight: "500" }}>Address</h5>
            <h5 style={{ fontStyle: "oblique", fontWeight: "500" }}>
              ABC Apartment, Delhi, India
            </h5>
            <h5 style={{ fontStyle: "oblique", fontWeight: "500" }}>Phone</h5>
            <h5 style={{ fontStyle: "oblique", fontWeight: "500" }}>
              95********
            </h5>
            <h5 style={{ fontStyle: "oblique", fontWeight: "500" }}>Gmail</h5>
            <h5 style={{ fontStyle: "oblique", fontWeight: "500" }}>
              abc@gmail.com
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
