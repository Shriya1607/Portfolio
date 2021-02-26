import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <Container className="about-me">
        <Row className="mb-5">
          <Col md={6}>
            <h2 className=" pt-3 mb-0 title">About Me</h2>
            <h5 className="bio pt-4">
              Hello! I’m Shriya Gupta. I am passionate about UI/UX design and
              Web Design. I am a Front-end Developer. Lorem ipsum dolor sit amet
              consectetur. Lorem, ipsum dolor. Lorem ipsum dolor sit amet.
            </h5>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col md={6}>
            <Row className="mt-5">
              <Col md={4}>
                <div className="pt-4">
                  <h5 className="bio">Age </h5>
                  <h5 className="bio">Email </h5>
                  <h5 className="bio">Phone </h5>
                  <h5 className="bio">Address </h5>
                </div>
              </Col>
              <Col md={8}>
                <div className="pt-4">
                  <h5 className="bio"> 19</h5>
                  <h5 className="bio"> abc@gmail.com</h5>
                  <h5 className="bio"> 9599******</h5>
                  <h5 className="bio"> ABC Apartments, Delhi, India </h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default AboutMe;
