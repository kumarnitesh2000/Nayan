import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <Container>
        <Row
          className="text-light text-center"
          style={{
            backgroundColor: "gray",
          }}
        >
          <Col className="p-4">
            <b>All Rights Reserved. © 2023 Nayanevents</b>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
