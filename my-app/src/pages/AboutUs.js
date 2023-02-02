import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
function AboutUs() {
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
                <b>About</b> <span className="text-muted">Us</span>
              </h1>
              <br />
              <p className="mt-3">
                <b className="text-muted h5">Nayan Pro & Events</b> is our
                brainchild to provide quality event planning and execution. We
                provide event management services to companies & individuals.
                Our company has been managing events for the past 5 years and
                has worked extensively with companies from different industries.
                Nayan Pro & Events makes sure clients are transparency is kept
                intact in every step of the event planning process.
                <br />
                Our firm has a vast vendor network of Hotels and partners who
                help us provide the best and most cost-effective event services
                to our clients.
              </p>
              <br />
              <p className="mt-3">
                <b className="text-muted h5"> Vision:</b> <br />
                Our vision is to align event objectives with modern concepts to
                deliver creative and engaging event experiences to your
                attendees.
              </p>
              <br />
              <p className="mt-3">
                <b className="text-muted h5"> Mission:</b> <br />
                Our mission is to design and carry out personalized, innovative
                events that meet our clients’ needs and desires.
              </p>
              <br />
              <p className="mt-3">
                <b className="text-muted h5"> Philosophy:</b> <br />
                To make our clients event planning processes simple by offering
                reliable and impactful services. The experience our clients get
                from working with us is always as important as the experience we
                deliver to the events audiences.
              </p>
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

export default AboutUs;
