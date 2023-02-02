import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaPhoneSquare,
} from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
function ContactUs() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row lg={12}>
          <Col>
            <Card
              body
              style={{
                backgroundImage:
                  'url("http://www.nayanevents.com/images/ptn-bg.jpg")',
              }}
            >
              <h1
                style={{
                  fontFamily: "cursive",
                  textAlign: "center",
                }}
              >
                <b>Contact</b> <span className="text-muted">Us</span>
              </h1>
              <Row className="text-center">
                <Col lg={4}>
                  <h3>Reach Out For</h3>
                  <a
                    href="http://www.nayanevents.com/event/weddings"
                    className="mb-3"
                  >
                    <FaLink /> Wedding
                  </a>
                  <br />
                  <a
                    href="http://www.nayanevents.com/event/other-events"
                    className="mb-3"
                  >
                    {" "}
                    <FaLink /> Other Events
                  </a>
                  <br />
                  <a
                    href="http://www.nayanevents.com/event/birthdays"
                    className="mb-3"
                  >
                    <FaLink /> Birthday
                  </a>
                  <br />
                  <a href="#" className="mb-3">
                    <FaEnvelope />
                    info@nayanevent.com
                  </a>
                  <br />
                  <a href="#" className="mb-3">
                    <FaFacebook />
                  </a>
                  &nbsp;
                  <a href="#" className="mb-3">
                    <FaInstagram />
                  </a>
                </Col>
                <Col lg={8}>
                  <Form>
                    <Form.Control
                      size="lg"
                      className="mt-2"
                      type="text"
                      placeholder="Your Name"
                    />
                    <Form.Control
                      size="lg"
                      className="mt-2"
                      type="tel"
                      placeholder="Your Mobile Number"
                    />
                    <Form.Control
                      size="lg"
                      className="mt-2"
                      type="email"
                      placeholder="Your Email"
                    />
                    <Form.Control
                      size="lg"
                      className="mt-2"
                      type="text"
                      placeholder="Your Message"
                      rows={7}
                    />
                    <Button className="btn-warning mt-2 p-3">
                      <h6>Ask For Quote</h6>
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
