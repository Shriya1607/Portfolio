import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Education.css";
import EduCard from "./EduCard";

function Education() {
  return (
    <>
      <Container className="edu">
        <Row>
          <Col>
            <h2 style={{ marginBottom: "1.8rem" }}>Education</h2>
            <EduCard />
            <EduCard />
            <EduCard />
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Education;
