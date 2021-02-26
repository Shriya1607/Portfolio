import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Skills.css";

function Skills() {
  return (
    <>
      <Container className="skills mt-0 pt-0">
        <Row>
          <Col>
            <h3 className="mb-4 title">Proffesional Skills</h3>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <span style={{ fontWeight: "500" }}>Objective C</span>
            <ProgressBar
              variant="warning"
              now={70}
              className="mt-2 mb-4 bg-white"
              striped
            />
            <span style={{ fontWeight: "500" }}>C++</span>
            <ProgressBar
              variant="warning"
              now={75}
              className="mt-2 mb-4 bg-white"
              striped
            />
            <span style={{ fontWeight: "500" }}>Python</span>
            <ProgressBar
              variant="warning"
              now={50}
              className="mt-2 mb-4 bg-white"
              striped
            />
            <span style={{ fontWeight: "500" }}>Java</span>
            <ProgressBar
              variant="warning"
              now={20}
              className="mt-2 mb-4 bg-white"
              striped
            />
          </Col>

          <Col>
            <span style={{ fontWeight: "500" }}>Html</span>
            <ProgressBar
              variant=""
              now={75}
              className="mt-2 mb-4 bg-white"
              striped
            />
            <span style={{ fontWeight: "500" }}>Css</span>
            <ProgressBar
              variant=""
              now={60}
              className="mt-2 mb-4 bg-white"
              striped
            />
            <span style={{ fontWeight: "500" }}>Javascript</span>
            <ProgressBar
              variant=""
              now={40}
              className="mt-2 mb-4 bg-white"
              striped
            />
            <span style={{ fontWeight: "500" }}>React Js</span>
            <ProgressBar
              variant=""
              now={50}
              className="mt-2 mb-4 bg-white"
              striped
            />
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Skills;
