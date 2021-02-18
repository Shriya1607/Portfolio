import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <>
      <Container className="header">
        <Row>
          <Col className="p-0" md={2}>
            <h4 style={{ opacity: "0.85",fontWeight:"700" }}>Shriya Gupta</h4>
          </Col>
          <Col md={8}></Col>
          <Col className="p-0" md={2}>
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

export default Header;
