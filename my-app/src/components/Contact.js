import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <>
      <Container>
        <Row lg={12}>
          <Col lg={12}>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
