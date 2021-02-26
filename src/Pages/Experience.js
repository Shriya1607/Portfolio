import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";
import ExpCard from "./ExpCard";
import expInfo from "./exp-info";

function Experience() {
  return (
    <>
      <Container className="exp">
        <Row className="mb-5">
          <Col>
            <h2 style={{ marginBottom: "1.8rem" }} className="title">
              Experience
            </h2>
             <div>
              {expInfo.map((info) => {
                return <ExpCard {...info} />;
              })}
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Experience;
