import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";
import ExpCard from "./ExpCard";

function Experience() {
  return (
    <>
      <Container className="exp">
        <Row>
          <Col>
            <h2 style={{ marginBottom: "1.8rem" }}>Experience</h2>
            <ExpCard />
            <ExpCard />
            <ExpCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Experience;
