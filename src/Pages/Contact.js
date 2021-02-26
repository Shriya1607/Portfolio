import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Container className="contact">
        <Row className="mb-4">
          <Col>
            <h2>Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <form
              method="post"
              name="Contact me"
              onSubmit="submit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="form"
            >
              <input type="hidden" name="form-name" value="Contact me" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="inputs">
                <label>
                  <input type="text" placeholder="Your Name" name="Your name" />
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
                  cols="54"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </label>
              <br />
              <button type="submit" className="send-btn"> Send</button>
            </form>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <h5>Address</h5>
            <h5>ABC Apartment, Delhi, India</h5>
            <h5>Phone</h5>
            <h5>95********</h5>
            <h5>Gmail</h5>
            <h5>guptashriya03@gmail.com</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
