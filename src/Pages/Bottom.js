import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Bottom.css";

function Bottom() {
  return (
    <>
      <Container className="bottom">
        <Row>
          <Col>
            <h4
              style={{ opacity: "0.85", fontWeight: "700", marginLeft: "20px", marginBottom:"1.2rem" }}
            >
              Shriya Gupta
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/linkedin.svg"}
                    alt=""
                    className="img"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/github.svg"}
                    alt=""
                    className="img"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/instagram.svg"}
                    alt=""
                    className="img"
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Bottom;
