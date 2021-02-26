import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Education.css";
import EduCard from "./EduCard";
import eduInfo from "./edu-info";

function Education() {
  return (
    <>
      <Container className="edu">
        <Row className="mb-5">
          <Col>
            <h2 style={{ marginBottom: "1.8rem" }} className="title">
              Education
            </h2>
            <div>
              {eduInfo.map((info) => {
                return <EduCard {...info} />;
              })}
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Education;
