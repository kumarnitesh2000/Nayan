import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <>
      <Container
        style={{
          backgroundImage:
            'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
        }}
      >
        <Row lg={12}>
          <Col lg={4}>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control as="textarea" placeholder="Your Name" />
            </FloatingLabel>
          </Col>
          <Col lg={4}>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col lg={4}>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control type="tel" placeholder="Your Mobile Number" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control as="textarea" placeholder="Your Message" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button className="btn-warning my-3">Send Message</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
