import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./HeroCard.css";

function HeroCard() {
  return (
    <>
      <Container className="mt-4 hero-card">
        <Row>
          <Col md={5}>
            <Image className="ml-4" src="https://picsum.photos/200" thumbnail />
          </Col>
          <Col md={4}>
            <div>
              <h1 className="name">Shriya Gupta</h1>
              <h4 className="hobby">Web Developer</h4>
              <div className="btn-grp">
                <Button variant="light" className="my-btn1">
                  Download CV
                </Button>
                <Button variant="success" className="my-btn2">
                  Hire me
                </Button>
              </div>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}
export default HeroCard;
